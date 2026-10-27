/* Đọc hiểu N3 — engine dùng chung cho mọi bài. Dữ liệu nằm ở window.BAI (data/bai-N.js). */
(function () {
  'use strict';

  /* ---------- Cài đặt (lưu trên máy người học) ---------- */
  var SETTINGS_KEY = 'n3-doc-hieu-settings';
  var settings = { furigana: 'all', viAll: false, fontStep: 0, theme: null };
  try {
    var saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    for (var k in saved) settings[k] = saved[k];
  } catch (e) {}

  function saveSettings() {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) {}
  }

  function applySettings() {
    var root = document.documentElement;
    root.dataset.furigana = settings.furigana;
    root.classList.toggle('vi-all', !!settings.viAll);
    root.style.setProperty('--font-scale', String(1 + settings.fontStep * 0.1));
    if (settings.theme) root.dataset.theme = settings.theme;
    else delete root.dataset.theme;
    document.querySelectorAll('[data-set-furigana]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.setFurigana === settings.furigana));
    });
    var viBtn = document.querySelector('[data-action="toggle-vi"]');
    if (viBtn) viBtn.setAttribute('aria-pressed', String(!!settings.viAll));
  }
  applySettings();

  /* ---------- Phân tích cú pháp đánh dấu ---------- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Trả về HTML; ghi lại các từ vựng gặp được vào `found` (nếu có).
  function parse(src, found) {
    var i = 0;
    function seq(inGroup) {
      var out = '';
      while (i < src.length) {
        var c = src[i];
        if (inGroup && c === ')') { i++; return out; }
        if (c === '{' || c === '[') {
          var close = c === '{' ? '}' : ']';
          var j = src.indexOf(close, i);
          var inner = j > i ? src.slice(i + 1, j) : '';
          var bar = inner.indexOf('|');
          if (bar > 0) {
            out += '<ruby class="' + (c === '[' ? 'hard' : 'basic') + '">' + esc(inner.slice(0, bar)) +
              '<rt>' + esc(inner.slice(bar + 1)) + '</rt></ruby>';
            i = j + 1;
            continue;
          }
        }
        if (c === '@' || c === '»' || c === '«') {
          var m = /^([a-z0-9_]+)\(/i.exec(src.slice(i + 1));
          if (m) {
            var key = m[1];
            i += 1 + m[0].length;
            var body = seq(true);
            if (c === '@') {
              if (found && found.indexOf(key) < 0) found.push(key);
              out += '<span class="v" data-v="' + esc(key) + '" role="button" tabindex="0">' + body + '</span>';
            } else if (c === '»') {
              out += '<span class="rp" data-r="' + esc(key) + '" role="button" tabindex="0">' + body + '</span>';
            } else {
              out += '<span class="rtg" data-r="' + esc(key) + '">' + body + '</span>';
            }
            continue;
          }
        }
        if (c === '°' && src[i + 1] === '(') { // mục được khoanh tròn (vd. trên túi thuốc)
          i += 2;
          out += '<span class="circ">' + seq(true) + '</span>';
          continue;
        }
        if (c === '‹' || c === '›') { // gạch chân phần được trích trong câu hỏi
          out += c === '‹' ? '<u class="ul">' : '</u>';
          i++;
          continue;
        }
        if (c === '※' && /\d/.test(src[i + 1] || '')) {
          out += '<sup class="nref">注' + (src[i + 1] === '0' ? '' : src[i + 1]) + '</sup>';
          i += 2;
          continue;
        }
        out += esc(c);
        i++;
      }
      return out;
    }
    return seq(false);
  }

  // Bài có một câu hỏi dùng question/options/answer/evidence; bài nhiều câu dùng mảng questions.
  function questionsOf(p) {
    if (p.questions) return p.questions;
    return [{ label: '問い', question: p.question, options: p.options, answer: p.answer, evidence: p.evidence,
      bookAnswer: (p.review || {}).bookAnswer }];
  }

  function sentence(s, found) {
    return '<span class="s" data-s="' + esc(s[0]) + '">' + parse(s[1], found) +
      (s[2] ? '<span class="vi">' + esc(s[2]) + '</span>' : '') + '</span>';
  }

  // Mọi "câu" của một khối, kể cả hàng bảng và mục biểu đồ (dùng cho kiểm tra và review).
  function blockSentences(b) {
    if (b.t === 'table') return [['head', b.head.join('　'), '']].concat(b.rows.map(function (r) { return [r[0], r[1].join('　'), r[2]]; }));
    if (b.t === 'chart') return [b.title].concat(b.items.map(function (it, k) { return ['c' + k, it[0], it[2] || '']; }));
    return b.s;
  }

  /* ---------- Hiển thị một 問題 ---------- */
  function renderBlock(b, found) {
    var cls = 'blk blk-' + b.t + (b.cls ? ' ' + b.cls : '');
    if (b.t === 'table') {
      var n = b.head.length;
      return '<div class="' + cls + '"><table><thead><tr>' + b.head.map(function (hd) { return '<th>' + parse(hd, found) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        b.rows.map(function (r) {
          return '<tr class="s trow" data-s="' + esc(r[0]) + '">' + r[1].map(function (c) { return '<td>' + parse(c, found) + '</td>'; }).join('') + '</tr>' +
            (r[2] ? '<tr class="vi-tr"><td colspan="' + n + '"><span class="vi">' + esc(r[2]) + '</span></td></tr>' : '');
        }).join('') + '</tbody></table></div>';
    }
    if (b.t === 'chart') {
      return '<figure class="' + cls + '"><figcaption>' + sentence(b.title, found) + '</figcaption>' +
        b.items.map(function (it) {
          return '<div class="bar"><span class="bar-label">' + parse(it[0], found) + '</span><span class="bar-track"><span class="bar-fill" style="width:' + (it[1] / b.max * 100) + '%"></span></span><span class="bar-val">' + it[1] + '%</span>' +
            (it[2] ? '<span class="bar-vi">' + esc(it[2]) + '</span>' : '') + '</div>';
        }).join('') + (b.source ? '<div class="chart-src">' + parse(b.source, found) + '</div>' : '') + '</figure>';
    }
    if (b.t === 'p') {
      return '<p class="' + cls + '">' + b.s.map(function (s) { return sentence(s, found); }).join('') + '</p>';
    }
    if (b.t === 'list') {
      return '<ul class="' + cls + '">' + b.s.map(function (s) { return '<li>' + sentence(s, found) + '</li>'; }).join('') + '</ul>';
    }
    return '<div class="' + cls + '">' + b.s.map(function (s) { return '<div class="ln">' + sentence(s, found) + '</div>'; }).join('') + '</div>';
  }

  function renderProblem(p) {
    var found = [];
    var h = '';
    h += '<section class="problem" id="p' + p.id + '" data-pid="' + p.id + '" hidden>';
    h += '<header class="p-head"><h2>問題' + esc(p.id) + '</h2><span class="kind">' + esc(p.kind) + ' · ' + esc(p.kindVi) + '</span></header>';
    h += '<p class="hint">Chạm vào <span class="demo-v">từ gạch chân</span> để xem nghĩa · chạm vào câu để xem bản dịch · chạm vào <span class="demo-rp">ô vàng</span> để xem chỉ thị từ đang chỉ gì.</p>';

    if (p.before) {
      h += '<div class="before"><span class="before-tag">読む前に</span>' + sentence(p.before, found) + '</div>';
    }
    h += '<p class="instr">つぎの{文章|ぶんしょう}を{読|よ}んで、{質問|しつもん}に{答|こた}えなさい。'.replace(/\{([^|]+)\|([^}]+)\}/g, function (_, a, b) {
      return '<ruby class="basic">' + a + '<rt>' + b + '</rt></ruby>';
    }) + '</p>';
    if (p.lead) h += '<p class="lead">' + sentence(p.lead, found) + '</p>';

    h += '<div class="passage-tools">';
    if (p.vertical) h += '<button type="button" class="chip" data-action="toggle-tate" aria-pressed="false">縦書き · Xem dạng dọc như sách</button>';
    h += '</div>';
    h += '<article class="passage passage-' + esc(p.style) + '">' + p.blocks.map(function (b) { return renderBlock(b, found); }).join('') + '</article>';

    if (p.notes && p.notes.length) {
      h += '<div class="notes">' + p.notes.map(function (n) { return '<div>' + parse(n, found) + '</div>'; }).join('') + '</div>';
    }

    // Câu hỏi (một hoặc nhiều câu: 問い / 問1, 問2…)
    questionsOf(p).forEach(function (q, qi) {
      h += '<div class="quiz" data-qi="' + qi + '" data-answer="' + q.answer + '">';
      h += '<div class="q-label">' + esc(q.label) + '</div><p class="q-text">' + sentence(q.question, found) + '</p>';
      h += '<ol class="opts">' + q.options.map(function (o, idx) {
        return '<li><button type="button" class="opt" data-i="' + (idx + 1) + '"><span class="num">' + (idx + 1) + '</span><span class="opt-jp">' + parse(o[0], found) + '</span></button></li>';
      }).join('') + '</ol>';
      h += '<div class="result" hidden>';
      h += '<p class="verdict"></p>';
      h += '<ol class="exps">' + q.options.map(function (o, idx) {
        var ok = idx + 1 === q.answer;
        return '<li class="' + (ok ? 'ok' : 'ng') + '"><div class="exp-head"><span class="mark">' + (ok ? '✓' : '✗') + '</span> ' + (idx + 1) + '. ' + esc(o[1]) + '</div><div class="exp-body">' + esc(o[2]) + '</div></li>';
      }).join('') + '</ol>';
      h += '<div class="result-actions"><button type="button" class="btn" data-action="show-evidence">Xem căn cứ trong bài</button><button type="button" class="btn ghost" data-action="retry">Làm lại</button></div>';
      h += '</div></div>';
    });

    // Phân tích
    h += '<div class="analysis">';
    h += '<details><summary>Tóm tắt nội dung</summary><p>' + esc(p.summary) + '</p></details>';
    h += '<details><summary>Cấu trúc bài</summary><dl class="struct">' + p.structure.map(function (r) {
      return '<dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd>';
    }).join('') + '</dl></details>';
    h += '<details><summary>Ngữ pháp &amp; mẫu câu</summary><div class="grammar">' + p.grammar.map(function (g) {
      return '<div class="g"><div class="g-pat" lang="ja">' + esc(g[0]) + '</div><div class="g-vi">' + esc(g[1]) + '</div><div class="g-ex" lang="ja">' + esc(g[2]) + '</div></div>';
    }).join('') + '</div></details>';
    h += '<details><summary>Mẹo làm bài</summary><p>' + esc(p.tip) + '</p></details>';
    h += '<details class="vocab-list"><summary>Từ vựng trong bài (' + found.length + ')</summary><div class="vlist">' + found.map(vocabRow).join('') + '</div></details>';
    h += '</div>';

    h += '</section>';
    return { html: h, vocab: found };
  }

  function vocabRow(key) {
    var v = BAI.vocab[key];
    if (!v) return '';
    return '<button type="button" class="vrow" data-v="' + esc(key) + '"><span class="vw" lang="ja">' + esc(v.w) + '</span><span class="vr" lang="ja">' + esc(v.r) + '</span><span class="vm">' + esc(v.vi) + '</span></button>';
  }

  /* ---------- Bottom sheet (popup) ---------- */
  var sheet, sheetBody;
  function openSheet(html) {
    sheetBody.innerHTML = html;
    sheet.hidden = false;
    requestAnimationFrame(function () { sheet.classList.add('open'); });
  }
  function closeSheet() {
    sheet.classList.remove('open');
    document.querySelectorAll('.rtg.flash, .rp.active').forEach(function (el) { el.classList.remove('flash', 'active'); });
    setTimeout(function () { sheet.hidden = true; }, 180);
  }

  function vocabCard(key) {
    var v = BAI.vocab[key];
    if (!v) return '<p>Chưa có dữ liệu cho từ này.</p>';
    return '<div class="vc"><div class="vc-w" lang="ja">' + esc(v.w) + '</div>' +
      '<div class="vc-r" lang="ja">' + esc(v.r) + '</div>' +
      (v.hv ? '<div class="vc-hv"><span class="tag">Hán Việt</span>' + esc(v.hv) + '</div>' : '') +
      '<div class="vc-vi">' + esc(v.vi) + '</div>' +
      (v.note ? '<div class="vc-note" lang="ja">' + esc(v.note) + '</div>' : '') + '</div>';
  }

  /* ---------- Flashcard & trắc nghiệm từ vựng ---------- */
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function initVocabTab(allKeys, groups) {
    var root = document.getElementById('pvocab');
    var deck = [], total = 0, flipped = false;

    function pickKeys() {
      var sel = root.querySelector('.deck-select').value;
      return sel === 'all' ? allKeys.slice() : groups[sel].slice();
    }

    function drawCard() {
      var area = root.querySelector('.fc-area');
      if (!deck.length) {
        area.innerHTML = '<div class="fc-done"><p>🎉 Bạn đã nhớ hết ' + total + ' từ!</p><button type="button" class="btn" data-action="fc-restart">Ôn lại từ đầu</button></div>';
        return;
      }
      var v = BAI.vocab[deck[0]];
      flipped = false;
      area.innerHTML =
        '<div class="fc-progress">Còn ' + deck.length + ' / ' + total + ' từ</div>' +
        '<button type="button" class="fc-card" data-action="fc-flip" aria-label="Lật thẻ">' +
        '<span class="fc-front" lang="ja">' + esc(v.w) + '</span>' +
        '<span class="fc-back"><span class="fc-r" lang="ja">' + esc(v.r) + '</span>' +
        (v.hv ? '<span class="fc-hv">' + esc(v.hv) + '</span>' : '') +
        '<span class="fc-vi">' + esc(v.vi) + '</span></span>' +
        '<span class="fc-hint">Chạm để lật</span></button>' +
        '<div class="fc-actions"><button type="button" class="btn ghost" data-action="fc-again">Chưa nhớ</button><button type="button" class="btn" data-action="fc-know">Đã nhớ</button></div>';
    }

    function startFlash() {
      deck = shuffle(pickKeys());
      total = deck.length;
      drawCard();
    }

    // Trắc nghiệm nghĩa
    var qList = [], qIdx = 0, score = 0;
    function startQuiz() {
      var keys = pickKeys().filter(function (k) { return BAI.vocab[k].vi; });
      qList = shuffle(keys).slice(0, Math.min(10, keys.length));
      qIdx = 0; score = 0;
      drawQuiz();
    }
    function drawQuiz() {
      var area = root.querySelector('.vq-area');
      if (qIdx >= qList.length) {
        area.innerHTML = '<div class="fc-done"><p>Kết quả: <strong>' + score + ' / ' + qList.length + '</strong></p><button type="button" class="btn" data-action="vq-restart">Làm lượt mới</button></div>';
        return;
      }
      var key = qList[qIdx];
      var pool = shuffle(allKeys.filter(function (k) { return k !== key && BAI.vocab[k].vi !== BAI.vocab[key].vi; })).slice(0, 3);
      var choices = shuffle(pool.concat([key]));
      area.innerHTML =
        '<div class="fc-progress">Câu ' + (qIdx + 1) + ' / ' + qList.length + ' · Đúng: ' + score + '</div>' +
        '<div class="vq-word" lang="ja">' + esc(BAI.vocab[key].w) + '</div>' +
        '<div class="vq-choices">' + choices.map(function (c) {
          return '<button type="button" class="opt vq-opt" data-k="' + esc(c) + '" data-ok="' + (c === key) + '">' + esc(BAI.vocab[c].vi) + '</button>';
        }).join('') + '</div><div class="vq-next" hidden></div>';
    }

    root.addEventListener('click', function (e) {
      var t = e.target.closest('[data-action], .vq-opt, [data-mode]');
      if (!t) return;
      if (t.dataset.mode) {
        root.querySelectorAll('[data-mode]').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); });
        root.querySelector('.fc-wrap').hidden = t.dataset.mode !== 'flash';
        root.querySelector('.vq-wrap').hidden = t.dataset.mode !== 'quiz';
        if (t.dataset.mode === 'quiz') startQuiz(); else startFlash();
        return;
      }
      if (t.classList.contains('vq-opt')) {
        if (t.parentNode.dataset.done) return;
        t.parentNode.dataset.done = '1';
        var ok = t.dataset.ok === 'true';
        if (ok) score++;
        t.parentNode.querySelectorAll('.vq-opt').forEach(function (b) {
          if (b.dataset.ok === 'true') b.classList.add('correct');
        });
        if (!ok) t.classList.add('wrong');
        var v = BAI.vocab[qList[qIdx]];
        var next = root.querySelector('.vq-next');
        next.hidden = false;
        next.innerHTML = '<div class="vq-info" lang="ja">' + esc(v.w) + '（' + esc(v.r) + '）' + (v.hv ? ' · ' + esc(v.hv) : '') + '</div><button type="button" class="btn" data-action="vq-next">Câu tiếp →</button>';
        return;
      }
      switch (t.dataset.action) {
        case 'fc-flip':
          flipped = !flipped;
          t.classList.toggle('flipped', flipped);
          break;
        case 'fc-know': deck.shift(); drawCard(); break;
        case 'fc-again': deck.push(deck.shift()); drawCard(); break;
        case 'fc-restart': startFlash(); break;
        case 'vq-next': qIdx++; drawQuiz(); break;
        case 'vq-restart': startQuiz(); break;
      }
    });
    root.querySelector('.deck-select').addEventListener('change', function () {
      var mode = root.querySelector('[data-mode][aria-pressed="true"]').dataset.mode;
      if (mode === 'quiz') startQuiz(); else startFlash();
    });
    startFlash();
  }

  /* ---------- Khởi tạo trang bài ---------- */
  function initLesson() {
    var app = document.getElementById('app');
    if (!app || !window.BAI) return;

    var allKeys = [], groups = {};
    var html = BAI.problems.map(function (p) {
      var r = renderProblem(p);
      groups[p.id] = r.vocab;
      r.vocab.forEach(function (k) { if (allKeys.indexOf(k) < 0) allKeys.push(k); });
      return r.html;
    }).join('');

    html += '<section class="problem" id="pvocab" hidden>' +
      '<header class="p-head"><h2>Từ vựng</h2><span class="kind">' + esc(BAI.title) + ' · ' + allKeys.length + ' từ</span></header>' +
      '<div class="vocab-controls"><label>Bộ từ <select class="deck-select"><option value="all">Cả bài</option>' +
      BAI.problems.map(function (p) { return '<option value="' + p.id + '">問題' + p.id + '</option>'; }).join('') +
      '</select></label><div class="seg"><button type="button" class="chip" data-mode="flash" aria-pressed="true">Flashcard</button><button type="button" class="chip" data-mode="quiz" aria-pressed="false">Trắc nghiệm</button></div></div>' +
      '<div class="fc-wrap"><div class="fc-area"></div></div><div class="vq-wrap" hidden><div class="vq-area"></div></div>' +
      '</section>';

    app.innerHTML = html;

    var tabs = document.getElementById('tabs');
    tabs.innerHTML = BAI.problems.map(function (p) {
      return '<a class="tab" href="#p' + p.id + '">問題' + p.id + '</a>';
    }).join('') + '<a class="tab" href="#pvocab">Từ vựng</a>';

    function route() {
      var id = (location.hash || '').slice(1);
      if (!document.getElementById(id)) id = 'p' + BAI.problems[0].id;
      document.querySelectorAll('.problem').forEach(function (s) { s.hidden = s.id !== id; });
      tabs.querySelectorAll('.tab').forEach(function (a) {
        a.setAttribute('aria-current', a.getAttribute('href') === '#' + id ? 'page' : 'false');
      });
      var active = tabs.querySelector('[aria-current="page"]');
      if (active) tabs.scrollLeft = active.offsetLeft - (tabs.clientWidth - active.offsetWidth) / 2;
    }
    window.addEventListener('hashchange', function () { route(); window.scrollTo(0, 0); });
    route();

    initVocabTab(allKeys, groups);

    // Sheet
    sheet = document.getElementById('sheet');
    sheetBody = sheet.querySelector('.sheet-body');
    sheet.addEventListener('click', function (e) {
      if (e.target === sheet || e.target.closest('[data-action="close-sheet"]')) closeSheet();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !sheet.hidden) closeSheet(); });

    // Thanh công cụ
    document.querySelector('.toolbar').addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      if (b.dataset.setFurigana) settings.furigana = b.dataset.setFurigana;
      else if (b.dataset.action === 'toggle-vi') {
        settings.viAll = !settings.viAll;
        if (!settings.viAll) document.querySelectorAll('.s.open').forEach(function (s) { s.classList.remove('open'); });
      }
      else if (b.dataset.action === 'font-down') settings.fontStep = Math.max(-2, settings.fontStep - 1);
      else if (b.dataset.action === 'font-up') settings.fontStep = Math.min(4, settings.fontStep + 1);
      else if (b.dataset.action === 'theme') {
        var dark = settings.theme ? settings.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
        settings.theme = dark ? 'light' : 'dark';
      }
      saveSettings();
      applySettings();
    });

    // Tương tác trong bài
    app.addEventListener('click', function (e) {
      var t = e.target;
      var section = t.closest('.problem');
      if (!section || section.id === 'pvocab') return;
      var p = BAI.problems.filter(function (x) { return x.id === section.dataset.pid; })[0];

      var v = t.closest('.v, .vrow');
      if (v) { openSheet(vocabCard(v.dataset.v)); return; }

      var rp = t.closest('.rp');
      if (rp) {
        var key = rp.dataset.r;
        rp.classList.add('active');
        var target = section.querySelector('.rtg[data-r="' + key + '"]');
        var html = '<div class="ref-card"><div class="tag">Chỉ thị từ</div><div class="ref-word" lang="ja">' + esc(rp.textContent) + '</div><p>' + esc((p.refs || {})[key] || '') + '</p>' +
          (target ? '<p class="ref-hint">Phần được chỉ tới đang được tô sáng trong bài.</p>' : '') + '</div>';
        if (target) {
          target.classList.add('flash');
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        openSheet(html);
        return;
      }

      var opt = t.closest('.opt');
      if (opt) {
        var quiz = opt.closest('.quiz');
        if (quiz.dataset.done) return;
        quiz.dataset.done = '1';
        var ans = +quiz.dataset.answer, pick = +opt.dataset.i;
        quiz.querySelectorAll('.opt').forEach(function (o) {
          if (+o.dataset.i === ans) o.classList.add('correct');
        });
        if (pick !== ans) opt.classList.add('wrong');
        opt.classList.add('picked');
        var res = quiz.querySelector('.result');
        res.hidden = false;
        res.querySelector('.verdict').innerHTML = pick === ans
          ? '<span class="good">Chính xác!</span> Đáp án là ' + ans + '.'
          : '<span class="bad">Chưa đúng.</span> Bạn chọn ' + pick + ', đáp án đúng là ' + ans + '.';
        res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
      }

      var act = t.closest('[data-action]');
      if (act) {
        if (act.dataset.action === 'show-evidence') {
          section.querySelectorAll('.s.ev').forEach(function (s) { s.classList.remove('ev'); });
          var first = null;
          questionsOf(p)[+act.closest('.quiz').dataset.qi].evidence.forEach(function (id) {
            var s = section.querySelector('.passage .s[data-s="' + id + '"]');
            if (s) { s.classList.add('ev'); first = first || s; }
          });
          if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (act.dataset.action === 'retry') {
          var q = act.closest('.quiz');
          delete q.dataset.done;
          q.querySelectorAll('.opt').forEach(function (o) { o.classList.remove('correct', 'wrong', 'picked'); });
          q.querySelector('.result').hidden = true;
          section.querySelectorAll('.s.ev').forEach(function (s) { s.classList.remove('ev'); });
        } else if (act.dataset.action === 'toggle-tate') {
          var on = act.getAttribute('aria-pressed') !== 'true';
          act.setAttribute('aria-pressed', String(on));
          section.querySelector('.passage').classList.toggle('tate', on);
        }
        return;
      }

      var s = t.closest('.s');
      if (s && !settings.viAll && !s.closest('.passage.tate')) {
        s.classList.toggle('open');
      }
    });

    app.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.v, .rp')) {
        e.preventDefault();
        e.target.click();
      }
    });
  }

  window.N3 = { parse: parse, questionsOf: questionsOf, blockSentences: blockSentences, renderProblem: renderProblem };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLesson);
  else initLesson();
})();
