/*
  Màn hình đăng nhập đơn giản (chạy trước khi trang hiện ra), có 2 quyền:
    - student: chỉ vào được trang bài học qua link giáo viên gửi (không vào được mục lục)
    - admin:   vào được mục lục và mọi bài
  Trang nào cần quyền gì thì ghi trên thẻ script: <script src="assets/auth.js" data-require="admin">
  (không ghi = student).
  Chỉ là "cổng chắn" cho học viên: trang tĩnh trên GitHub Pages không thể bảo mật thật.
  Mật khẩu không ghi trực tiếp ở đây; chỉ lưu SHA-256 của "tài khoản:mật khẩu".
  Đổi mật khẩu: tính lại hash rồi thay khóa tương ứng trong ROLES.
*/
(function () {
  'use strict';
  var KEY = 'n3-auth';
  var ROLES = {
    '1ee8b02a225f4a8d036d8c0a8bb97f15b635d004c38b72469592e6df53c103db': 'student',
    'fff2a39f3f76cf7fa1936e64a9329e0e70d35b1569a2b5d755c1e5d5a69267ba': 'admin'
  };
  var RANK = { student: 1, admin: 2 };
  var script = document.currentScript;
  var need = (script && script.dataset.require) || 'student';
  var root = document.documentElement;

  function savedRole() {
    try { return ROLES[sessionStorage.getItem(KEY)] || null; } catch (e) { return null; }
  }
  function allowed(role) { return !!role && RANK[role] >= RANK[need]; }
  function setRole(role) {
    root.classList.remove('role-student', 'role-admin');
    root.classList.add('role-' + role);
  }

  // Đăng nhập một lần cho mỗi phiên trình duyệt (đóng tab/trình duyệt là phải đăng nhập lại).
  var role = savedRole();
  if (allowed(role)) { setRole(role); return; }
  root.classList.add('locked');

  function sha256(text) {
    var data = new TextEncoder().encode(text);
    return crypto.subtle.digest('SHA-256', data).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('');
    });
  }

  var box;
  function screen(html) {
    if (!box) {
      box = document.createElement('div');
      box.className = 'login-screen';
      document.body.appendChild(box);
    }
    box.innerHTML = html;
  }

  function unlock(r) {
    setRole(r);
    root.classList.remove('locked');
    box.remove();
  }

  function showBlocked() {
    screen(
      '<div class="login-card">' +
      '<div class="login-logo" lang="ja">読解</div>' +
      '<h1>Không có quyền xem trang này</h1>' +
      '<p class="login-sub">Tài khoản học viên không xem được trang mục lục. Hãy mở đường link bài học mà giáo viên gửi cho bạn.</p>' +
      '<button type="button" class="btn ghost" data-action="relogin">Đăng nhập tài khoản khác</button>' +
      '</div>');
    box.querySelector('[data-action="relogin"]').addEventListener('click', function () {
      try { sessionStorage.removeItem(KEY); } catch (e) {}
      showLogin();
    });
  }

  function showLogin() {
    screen(
      '<form class="login-card" autocomplete="off">' +
      '<div class="login-logo" lang="ja">読解</div>' +
      '<h1>Đọc hiểu N3</h1>' +
      '<p class="login-sub">Đăng nhập để vào học</p>' +
      '<label>Tài khoản<input name="u" type="text" autocapitalize="none" autocorrect="off" spellcheck="false" required></label>' +
      '<label>Mật khẩu<input name="p" type="password" required></label>' +
      '<p class="login-err" role="alert" hidden>Sai tài khoản hoặc mật khẩu.</p>' +
      '<button type="submit" class="btn">Đăng nhập</button>' +
      '</form>');
    var form = box.querySelector('form');
    var err = box.querySelector('.login-err');
    form.u.focus();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      err.hidden = true;
      sha256(form.u.value.trim() + ':' + form.p.value).then(function (h) {
        var r = ROLES[h];
        if (!r) {
          err.hidden = false;
          form.p.value = '';
          form.p.focus();
          return;
        }
        try { sessionStorage.setItem(KEY, h); } catch (e2) {}
        if (allowed(r)) unlock(r);
        else showBlocked();
      });
    });
  }

  function start() {
    if (role) showBlocked(); // đã đăng nhập nhưng không đủ quyền (học viên mở mục lục)
    else showLogin();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
