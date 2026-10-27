/* Bài tập về nhà 1 — 問題34, 44, 46 (chọn ngẫu nhiên). Cú pháp đánh dấu: xem data/bai-1.js. */
window.BAI = {
  id: 'btvn-1',
  title: 'Bài tập về nhà 1',
  subtitle: 'Văn giải thích · Văn nêu ý kiến',

  vocab: {
    // 問題34
    ningenkankei: { w: '人間関係', r: 'にんげんかんけい', hv: 'NHÂN GIAN QUAN HỆ', vi: 'quan hệ giữa người với người' },
    genin: { w: '原因', r: 'げんいん', hv: 'NGUYÊN NHÂN', vi: 'nguyên nhân' },
    byouki: { w: '病気', r: 'びょうき', hv: 'BỆNH KHÍ', vi: 'bệnh' },
    mattaku: { w: '全く', r: 'まったく', hv: 'TOÀN', vi: 'hoàn toàn (không)' },
    seikatsu: { w: '生活', r: 'せいかつ', hv: 'SINH HOẠT', vi: 'cuộc sống, sinh hoạt' },
    nakanaka: { w: 'なかなか〜ない', r: 'なかなか', hv: '', vi: 'mãi mà không…, không dễ…' },
    souhaikanai: { w: 'そうはいかない', r: 'そうはいかない', hv: '', vi: 'không dễ được như vậy' },
    douse: { w: 'どうせ', r: 'どうせ', hv: '', vi: 'đằng nào thì cũng…' },
    nigeru: { w: '逃げる', r: 'にげる', hv: 'ĐÀO', vi: 'trốn, thoát' },
    gaman: { w: 'がまん（我慢）', r: 'がまん', hv: 'NGÃ MẠN', vi: 'chịu đựng, nhịn' },
    madaii: { w: 'まだいい', r: 'まだいい', hv: '', vi: 'vẫn còn đỡ, còn tốt hơn' },
    senmonka: { w: '専門家', r: 'せんもんか', hv: 'CHUYÊN MÔN GIA', vi: 'chuyên gia' },
    iwaseru: { w: '〜に言わせると', r: 'にいわせると', hv: 'NGÔN', vi: 'theo ý kiến của…' },
    kaiketsu: { w: '解決する', r: 'かいけつする', hv: 'GIẢI QUYẾT', vi: 'giải quyết' },
    sezu: { w: '〜せず', r: 'せず', hv: '', vi: 'không làm… (= しないで)' },
    sonomama: { w: 'そのまま', r: 'そのまま', hv: '', vi: 'giữ nguyên như vậy' },
    hantai: { w: '反対に', r: 'はんたいに', hv: 'PHẢN ĐỐI', vi: 'ngược lại' },
    seichou: { w: '成長する', r: 'せいちょうする', hv: 'THÀNH TRƯỞNG', vi: 'trưởng thành, lớn lên' },
    kikkake: { w: 'きっかけ', r: 'きっかけ', hv: '', vi: 'cơ hội, động lực bắt đầu' },
    kadouka: { w: '〜かどうか', r: 'かどうか', hv: '', vi: '… hay không' },
    norikoeru: { w: '乗り越える', r: 'のりこえる', hv: 'THỪA VIỆT', vi: 'vượt qua (khó khăn)' },
    youda: { w: '〜ようだ', r: 'ようだ', hv: '', vi: 'dường như, có vẻ' },
    komaru: { w: '困る', r: 'こまる', hv: 'KHỐN', vi: 'khó khăn, rắc rối' },
    sasu: { w: '指す', r: 'さす', hv: 'CHỈ', vi: 'chỉ (vào), ám chỉ' },
    naiyou: { w: '内容', r: 'ないよう', hv: 'NỘI DUNG', vi: 'nội dung' },
    shinpai: { w: '心配', r: 'しんぱい', hv: 'TÂM PHỐI', vi: 'lo lắng' },
    kanarazu: { w: '必ず', r: 'かならず', hv: 'TẤT', vi: 'chắc chắn, nhất định' },
    tsurai: { w: '辛い', r: 'つらい', hv: 'TÂN', vi: 'khổ sở, vất vả' },

    // 問題44
    igai: { w: '以外', r: 'いがい', hv: 'DĨ NGOẠI', vi: 'ngoài…' },
    kurasu: { w: '暮らす', r: 'くらす', hv: 'MỘ', vi: 'sinh sống' },
    juutaku: { w: '住宅', r: 'じゅうたく', hv: 'TRÚ TRẠCH', vi: 'nhà ở' },
    fueru: { w: '増える', r: 'ふえる', hv: 'TĂNG', vi: 'tăng lên' },
    tsuki: { w: '〜付き', r: 'つき', hv: 'PHÓ', vi: 'có kèm…', note: 'かぎ付きの部屋 = phòng có khóa' },
    heya: { w: '部屋', r: 'へや', hv: 'BỘ ỐC', vi: 'phòng' },
    daidokoro: { w: '台所', r: 'だいどころ', hv: 'ĐÀI SỞ', vi: 'nhà bếp' },
    ima: { w: '居間', r: 'いま', hv: 'CƯ GIAN', vi: 'phòng khách, phòng sinh hoạt chung' },
    kyoudou: { w: '共同', r: 'きょうどう', hv: 'CỘNG ĐỒNG', vi: 'chung, cùng nhau' },
    yachin: { w: '家賃', r: 'やちん', hv: 'GIA NHẪM', vi: 'tiền thuê nhà' },
    mawari: { w: '周り', r: 'まわり', hv: 'CHU', vi: 'xung quanh' },
    teido: { w: '程度', r: 'ていど', hv: 'TRÌNH ĐỘ', vi: 'mức độ' },
    kyoudoububun: { w: '共同部分', r: 'きょうどうぶぶん', hv: 'CỘNG ĐỒNG BỘ PHÂN', vi: 'khu vực dùng chung' },
    reizouko: { w: '冷蔵庫', r: 'れいぞうこ', hv: 'LÃNH TÀNG KHỐ', vi: 'tủ lạnh' },
    oku: { w: '置く', r: 'おく', hv: 'TRÍ', vi: 'đặt, để' },
    hitsuyou: { w: '必要', r: 'ひつよう', hv: 'TẤT YẾU', vi: 'cần thiết' },
    hitorigurashi: { w: '一人暮らし', r: 'ひとりぐらし', hv: 'NHẤT NHÂN MỘ', vi: 'sống một mình' },
    jiyuu: { w: '自由', r: 'じゆう', hv: 'TỰ DO', vi: 'tự do' },
    juunin: { w: '住人', r: 'じゅうにん', hv: 'TRÚ NHÂN', vi: 'người sống ở đó, cư dân' },
    kouryuu: { w: '交流', r: 'こうりゅう', hv: 'GIAO LƯU', vi: 'giao lưu' },
    fuan: { w: '不安', r: 'ふあん', hv: 'BẤT AN', vi: 'bất an, lo lắng' },
    nenrei: { w: '年齢', r: 'ねんれい', hv: 'NIÊN LINH', vi: 'tuổi tác' },
    chigau: { w: '違う', r: 'ちがう', hv: 'VI', vi: 'khác' },
    sugosu: { w: '過ごす', r: 'すごす', hv: 'QUÁ', vi: 'sống, trải qua (thời gian)' },
    hakken: { w: '発見', r: 'はっけん', hv: 'PHÁT KIẾN', vi: 'phát hiện, khám phá' },
    tadashi: { w: 'ただし', r: 'ただし', hv: '', vi: 'tuy nhiên (nêu điều kiện, lưu ý)' },
    kaiteki: { w: '快適', r: 'かいてき', hv: 'KHOÁI THÍCH', vi: 'thoải mái, dễ chịu' },
    chuuiten: { w: '注意点', r: 'ちゅういてん', hv: 'CHÚ Ý ĐIỂM', vi: 'điểm cần lưu ý' },
    kengaku: { w: '見学', r: 'けんがく', hv: 'KIẾN HỌC', vi: 'đến xem tận nơi, tham quan' },
    kakunin: { w: '確認する', r: 'かくにんする', hv: 'XÁC NHẬN', vi: 'xác nhận, kiểm tra' },
    shokugyou: { w: '職業', r: 'しょくぎょう', hv: 'CHỨC NGHIỆP', vi: 'nghề nghiệp' },
    kimari: { w: '決まり', r: 'きまり', hv: 'QUYẾT', vi: 'quy định, nội quy' },
    souji: { w: '掃除', r: 'そうじ', hv: 'TẢO TRỪ', vi: 'dọn dẹp' },
    kagu: { w: '家具', r: 'かぐ', hv: 'GIA CỤ', vi: 'đồ nội thất' },
    sentakuki: { w: '洗濯機', r: 'せんたくき', hv: 'TẨY TRẠC CƠ', vi: 'máy giặt' },
    nado: { w: '〜等', r: 'など', hv: 'ĐẲNG', vi: '…v.v. (ở đây đọc là など)' },
    denkiseihin: { w: '電気製品', r: 'でんきせいひん', hv: 'ĐIỆN KHÍ CHẾ PHẨM', vi: 'đồ điện' },
    baai: { w: '場合', r: 'ばあい', hv: 'TRƯỜNG HỢP', vi: 'trường hợp' },
    tebanasu: { w: '手放す', r: 'てばなす', hv: 'THỦ PHÓNG', vi: 'bỏ đi, nhượng lại (đồ đang có)' },
    ijou: { w: '以上', r: 'いじょう', hv: 'DĨ THƯỢNG', vi: '(những điều) trên đây' },
    ten: { w: '点', r: 'てん', hv: 'ĐIỂM', vi: 'điểm, mặt' },
    shippai: { w: '失敗', r: 'しっぱい', hv: 'THẤT BẠI', vi: 'thất bại, sai lầm' },
    setsumei: { w: '説明', r: 'せつめい', hv: 'THUYẾT MINH', vi: 'giải thích, mô tả' },
    dokuritsu: { w: '独立', r: 'どくりつ', hv: 'ĐỘC LẬP', vi: 'độc lập, riêng biệt' },
    senyou: { w: '専用', r: 'せんよう', hv: 'CHUYÊN DỤNG', vi: 'dùng riêng' },
    kiwotsukau: { w: '気を遣う', r: 'きをつかう', hv: 'KHÍ KHIỂN', vi: 'để ý, giữ ý (với người khác)' },
    shiraberu: { w: '調べる', r: 'しらべる', hv: 'ĐIỀU', vi: 'tìm hiểu, kiểm tra' },
    tsutaeru: { w: '伝える', r: 'つたえる', hv: 'TRUYỀN', vi: 'truyền đạt' },
    keizaiteki: { w: '経済的', r: 'けいざいてき', hv: 'KINH TẾ ĐÍCH', vi: 'tiết kiệm, kinh tế' },
    doushi: { w: '〜同士', r: 'どうし', hv: 'ĐỒNG SĨ', vi: 'giữa những … với nhau', note: '住人同士 = giữa các cư dân với nhau' },

    // 問題46
    seiseki: { w: '成績', r: 'せいせき', hv: 'THÀNH TÍCH', vi: 'thành tích, điểm số' },
    jugyou: { w: '授業', r: 'じゅぎょう', hv: 'THỤ NGHIỆP', vi: 'giờ học, bài giảng' },
    tsuiteiku: { w: 'ついていく', r: 'ついていく', hv: '', vi: 'theo kịp' },
    seito: { w: '生徒', r: 'せいと', hv: 'SINH ĐỒ', vi: 'học sinh' },
    gakunen: { w: '学年', r: 'がくねん', hv: 'HỌC NIÊN', vi: 'khối lớp, năm học' },
    susumu: { w: '進む', r: 'すすむ', hv: 'TIẾN', vi: 'tiến lên', note: '進ませずに = không cho lên (lớp)' },
    iken: { w: '意見', r: 'いけん', hv: 'Ý KIẾN', vi: 'ý kiến' },
    tsunagari: { w: 'つながり', r: 'つながり', hv: '', vi: 'sự gắn kết' },
    hijou: { w: '非常に', r: 'ひじょうに', hv: 'PHI THƯỜNG', vi: 'rất, vô cùng' },
    shinkyuu: { w: '進級', r: 'しんきゅう', hv: 'TIẾN CẤP', vi: 'lên lớp' },
    shokku: { w: 'ショックを受ける', r: 'ショックをうける', hv: 'THỤ', vi: 'bị sốc' },
    yaruki: { w: 'やる気', r: 'やるき', hv: 'KHÍ', vi: 'động lực, hứng thú làm việc' },
    jishin: { w: '自信', r: 'じしん', hv: 'TỰ TÍN', vi: 'sự tự tin' },
    kanarazushimo: { w: '必ずしも〜ない', r: 'かならずしも', hv: 'TẤT', vi: 'chưa chắc đã…, không hẳn là…' },
    shuukan: { w: '習慣', r: 'しゅうかん', hv: 'TẬP QUÁN', vi: 'thói quen' },
    kisoteki: { w: '基礎的', r: 'きそてき', hv: 'CƠ SỞ ĐÍCH', vi: 'cơ bản' },
    kekka: { w: '結果', r: 'けっか', hv: 'KẾT QUẢ', vi: 'kết quả' },
    muzukashii: { w: '難しい', r: 'むずかしい', hv: 'NAN', vi: 'khó' },
    nitaishite: { w: '〜に対して', r: 'にたいして', hv: 'ĐỐI', vi: 'đối với…' },
    borantia: { w: 'ボランティア', r: 'ボランティア', hv: '', vi: 'tình nguyện viên' },
    shidou: { w: '指導', r: 'しどう', hv: 'CHỈ ĐẠO', vi: 'hướng dẫn, kèm cặp' },
    kaizen: { w: '改善する', r: 'かいぜんする', hv: 'CẢI THIỆN', vi: 'cải thiện' },
    kyoushi: { w: '教師', r: 'きょうし', hv: 'GIÁO SƯ', vi: 'giáo viên' },
    taishoku: { w: '退職する', r: 'たいしょくする', hv: 'THOÁI CHỨC', vi: 'nghỉ việc, nghỉ hưu' },
    shakai: { w: '社会', r: 'しゃかい', hv: 'XÃ HỘI', vi: 'xã hội' },
    yakudatsu: { w: '役立つ', r: 'やくだつ', hv: 'DỊCH LẬP', vi: 'có ích' },
    riyuu: { w: '理由', r: 'りゆう', hv: 'LÝ DO', vi: 'lý do' },
    moto: { w: '元の', r: 'もとの', hv: 'NGUYÊN', vi: '… cũ, ban đầu' },
    nokoru: { w: '残る', r: 'のこる', hv: 'TÀN', vi: 'ở lại' },
    rikai: { w: '理解する', r: 'りかいする', hv: 'LÝ GIẢI', vi: 'hiểu' },
    nigate: { w: '苦手', r: 'にがて', hv: 'KHỔ THỦ', vi: 'kém, không giỏi' }
  },

  problems: [
    /* ───────────── 問題34 ───────────── */
    {
      id: '34',
      review: { pages: [103, 104], answerPage: 193, doubts: [] },
      kind: '内容理解（中文）・説明文',
      kindVi: 'Đoạn văn trung bình – văn giải thích',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '@ningenkankei({人間|にんげん}[関係|かんけい])のこと、{勉強|べんきょう}や{仕事|しごと}のことなど、いろいろなストレスが@genin([原因|げんいん])で@byouki({病気|びょうき})になることは{少|すく}なくない。', 'Không ít trường hợp người ta bị bệnh vì đủ loại căng thẳng: chuyện quan hệ với người khác, chuyện học hành, công việc…'],
          ['s2', 'ストレスなど@mattaku([全|まった]く)ない@seikatsu([生活|せいかつ])をしてみたいものだが、@nakanaka(なかなか)@souhaikanai(そうはいかない)。', 'Ai cũng muốn thử sống một cuộc sống hoàn toàn không có căng thẳng, nhưng chẳng dễ được như vậy.']
        ] },
        { t: 'p', s: [
          ['s3', '@douse(どうせ)ストレスから@nigeru([逃|に]げられない)のならば、{大|おお}きなストレスよりも、@gaman(がまん)できるぐらいの{小|ちい}さなストレスのほうが@madaii(まだいい)と{思|おも}うだろう。', 'Nếu đằng nào cũng không thoát khỏi căng thẳng, có lẽ ai cũng nghĩ căng thẳng nhỏ ở mức chịu được thì còn đỡ hơn căng thẳng lớn.'],
          ['s4', 'しかし、@senmonka([専門家|せんもんか])@iwaseru(に{言|い}わせると)、このがまんできるぐらいのストレスが{一番|いちばん}{問題|もんだい}なのだという。', 'Nhưng theo các chuyên gia, chính loại căng thẳng ở mức chịu được này mới là vấn đề lớn nhất.'],
          ['s5', 'なぜなら、«r1({受|う}けたストレスをがまんできると{思|おも}うと、{人|ひと}はそれを@kaiketsu([解決|かいけつ])@sezu(せず)@sonomama(そのまま)にしてしまう)からだ。', 'Bởi vì khi nghĩ mình chịu được căng thẳng, con người thường không giải quyết mà cứ để nguyên như vậy.'],
          ['s6', 'そして、‹»r1(そうしているうちに)›、{心|こころ}や{体|からだ}をこわしてしまうというのだ。', 'Và trong lúc cứ để như thế, tâm trí và cơ thể sẽ suy sụp.'],
          ['s7', '@hantai([反対|はんたい]に)、{大|おお}きなストレスはつらいものだが、{何|なん}とかそれを[解決|かいけつ]しようという{力|ちから}を{起|お}こさせ、{人|ひと}が@seichou([成長|せいちょう])する@kikkake(きっかけ)になることも{多|おお}いという。', 'Ngược lại, căng thẳng lớn tuy khổ sở nhưng thường khơi dậy sức mạnh để tìm cách giải quyết, trở thành cơ hội để con người trưởng thành.']
        ] },
        { t: 'p', s: [
          ['s8', 'ストレスが{心|こころ}や{体|からだ}をこわす[原因|げんいん]になる@kadouka(かどうか)は、その{大小|だいしょう}ではなく、@norikoeru([乗|の]り[越|こ]えよう)とする{気持|きも}ちと[関係|かんけい]がある@youda(ようだ)。', 'Căng thẳng có trở thành nguyên nhân làm hỏng tâm trí và cơ thể hay không, dường như không phụ thuộc vào lớn hay nhỏ, mà liên quan đến ý chí muốn vượt qua.']
        ] },
        { t: 'right', s: [['src', '（[岡本|おかもと][裕|ゆたか]『{一生|いっしょう}、「[薬|くすり]がいらない{体|からだ}」のつくり{方|かた}』[三笠|みかさ][書房|しょぼう]より）', 'Trích từ sách của Okamoto Yutaka, NXB Mikasa Shobō']] }
      ],
      notes: [],
      refs: {
        r1: 'そうしている = không giải quyết căng thẳng (nhỏ) mà cứ để nguyên như vậy (câu 5).'
      },
      questions: [
        {
          label: '問1',
          question: ['q1', '[専門家|せんもんか]はストレスについてどう{言|い}っているか。', 'Chuyên gia nói gì về căng thẳng?'],
          options: [
            ['[人間|にんげん][関係|かんけい]や{勉強|べんきょう}や{仕事|しごと}のことなどがストレスになる。', 'Quan hệ với người khác, học hành, công việc… đều gây căng thẳng.', 'Sai. Đây là nhận định chung ở đoạn 1, không phải điều chuyên gia nói.'],
            ['ストレスが[原因|げんいん]で{体|からだ}をこわすこともある。', 'Căng thẳng có thể là nguyên nhân làm hỏng cơ thể.', 'Sai. Điều chuyên gia nhấn mạnh không phải chuyện chung này, mà là căng thẳng NHỎ mới là vấn đề lớn nhất.'],
            ['{小|ちい}さなストレスが{一番|いちばん}@komaru([困|こま]る)。', 'Căng thẳng nhỏ là phiền phức nhất.', 'Đúng. 「専門家に言わせると、このがまんできるぐらいのストレスが一番問題なのだ」 (câu 4).'],
            ['ストレスが[全|まった]くない[生活|せいかつ]をするべきだ。', 'Nên sống một cuộc sống hoàn toàn không căng thẳng.', 'Sai. Bài nói điều đó khó làm được (そうはいかない), và chuyên gia không nói vậy.']
          ],
          answer: 3,
          bookAnswer: 3,
          evidence: ['s4']
        },
        {
          label: '問2',
          question: ['q2', '‹そうしているうちに›とあるが、これは{何|なに}を@sasu([指|さ]して)いるのか。', '"Trong lúc cứ làm như thế" – "như thế" chỉ điều gì?'],
          options: [
            ['{大|おお}きなストレスをがまんしているうちに', 'Trong lúc chịu đựng căng thẳng lớn', 'Sai. Đoạn này đang nói về căng thẳng nhỏ, chịu được.'],
            ['{大|おお}きなストレスを[解決|かいけつ]しようとしているうちに', 'Trong lúc cố giải quyết căng thẳng lớn', 'Sai. Cố giải quyết căng thẳng lớn lại giúp con người trưởng thành (câu 7).'],
            ['{小|ちい}さなストレスをそのままにしているうちに', 'Trong lúc cứ để nguyên căng thẳng nhỏ', 'Đúng. そう chỉ việc 「解決せずそのままにしてしまう」 ở câu ngay trước.'],
            ['ストレスが[全然|ぜんぜん]ない[生活|せいかつ]をしているうちに', 'Trong lúc sống không có chút căng thẳng nào', 'Sai. Không liên quan.']
          ],
          answer: 3,
          bookAnswer: 3,
          evidence: ['s5', 's6']
        },
        {
          label: '問3',
          question: ['q3', '{本文|ほんぶん}の@naiyou([内容|ないよう])と{合|あ}っているものはどれか。', 'Điều nào khớp với nội dung bài?'],
          options: [
            ['{小|ちい}さくてがまんできるストレスならば{何|なに}も@shinpai({心配|しんぱい})いらない。', 'Nếu là căng thẳng nhỏ, chịu được thì không cần lo gì.', 'Sai. Ngược lại, căng thẳng nhỏ mới là vấn đề lớn nhất.'],
            ['ストレスが{大|おお}きいと@kanarazu([必|かなら]ず){心|こころ}や{体|からだ}をこわしてしまう。', 'Căng thẳng lớn thì chắc chắn làm hỏng tâm trí và cơ thể.', 'Sai. Căng thẳng lớn thường là cơ hội để trưởng thành (câu 7).'],
            ['{小|ちい}さなストレスでも[解決|かいけつ]しなければ{心|こころ}や{体|からだ}をこわす[原因|げんいん]になる。', 'Dù là căng thẳng nhỏ, nếu không giải quyết sẽ thành nguyên nhân làm hỏng tâm trí và cơ thể.', 'Đúng. Câu 5–6: không giải quyết mà để nguyên → tâm trí, cơ thể suy sụp.'],
            ['{大|おお}きなストレスは[成長|せいちょう]するきっかけになるから@tsurai([辛|つら]くない)。', 'Căng thẳng lớn là cơ hội trưởng thành nên không khổ sở.', 'Sai. Bài nói căng thẳng lớn 「つらいものだが」 – vẫn khổ sở.']
          ],
          answer: 3,
          bookAnswer: 3,
          evidence: ['s5', 's6', 's8']
        }
      ],
      summary: 'Ai cũng muốn sống không căng thẳng nhưng không thể. Người ta thường nghĩ căng thẳng nhỏ còn đỡ hơn căng thẳng lớn, nhưng chuyên gia cho rằng căng thẳng nhỏ mới là vấn đề lớn nhất: vì nghĩ chịu được nên không giải quyết, cứ để đó, rồi tâm trí và cơ thể suy sụp. Ngược lại, căng thẳng lớn khiến người ta tìm cách giải quyết và trưởng thành. Điều quan trọng không phải lớn hay nhỏ mà là ý chí muốn vượt qua.',
      structure: [
        ['Đoạn 1', 'Căng thẳng gây bệnh; không thể sống không căng thẳng'],
        ['Đoạn 2', 'Suy nghĩ thông thường → しかし: ý kiến chuyên gia + lý do (なぜなら)'],
        ['Đoạn 3', 'Kết luận: quan trọng là ý chí vượt qua']
      ],
      grammar: [
        ['どうせ〜のならば', 'Nếu đằng nào cũng… thì…', 'どうせストレスから逃げられないのならば'],
        ['〜に言わせると', 'Theo ý kiến của…', '専門家に言わせると'],
        ['なぜなら〜からだ', 'Bởi vì…', 'なぜなら、…そのままにしてしまうからだ'],
        ['〜うちに', 'Trong lúc… (thì điều gì đó xảy ra lúc nào không hay)', 'そうしているうちに、心や体をこわしてしまう'],
        ['〜せず', 'Không… (văn viết của しないで)', '解決せずそのままにしてしまう'],
        ['〜かどうかは〜ではなく〜', 'Việc… hay không không phải do… mà do…', '原因になるかどうかは、その大小ではなく…']
      ],
      tip: 'Câu hỏi "chuyên gia nói gì" → tìm câu có 専門家に言わせると / 〜という. Đừng chọn những câu là nhận định chung của người viết ở đầu bài.'
    },

    /* ───────────── 問題44 ───────────── */
    {
      id: '44',
      review: { pages: [123, 124], answerPage: 201, doubts: [] },
      kind: '内容理解（長文）・説明文',
      kindVi: 'Đoạn văn dài – văn giải thích',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{今|いま}、{一|ひと}つの{家|いえ}で{家族|かぞく}@igai([以外|いがい])の{人|ひと}と{一緒|いっしょ}に@kurasu([暮|く]らす)、シェアハウスという@juutaku([住宅|じゅうたく])が@fueru([増|ふ]えて)いる。', 'Hiện nay, loại nhà ở gọi là share house – sống chung một nhà với người không phải gia đình – đang ngày càng nhiều.'],
          ['s2', 'シェアハウスとは、アパートのように{自分|じぶん}{用|よう}のかぎ@tsuki([付|つ]き)の@heya([部屋|へや])はあるが、@daidokoro([台所|だいどころ])や@ima([居間|いま])、シャワー、トイレなどは@kyoudou([共同|きょうどう])で{使|つか}う[住宅|じゅうたく]である。', 'Share house là nhà ở mà, giống như căn hộ, mỗi người có phòng riêng có khóa, nhưng bếp, phòng sinh hoạt chung, phòng tắm, nhà vệ sinh thì dùng chung.']
        ] },
        { t: 'p', s: [
          ['s3', '@yachin([家賃|やちん])は@mawari([周|まわ]り)のアパートなどと{同|おな}じ@teido([程度|ていど])だが、@kyoudoububun([共同|きょうどう][部分|ぶぶん])があるため、[部屋|へや]に@reizouko([冷蔵庫|れいぞうこ])などを@oku([置|お]く)@hitsuyou([必要|ひつよう])がなく、{自分|じぶん}の[部屋|へや]を{広|ひろ}く{使|つか}える。', 'Tiền thuê ngang với các căn hộ xung quanh, nhưng vì có khu dùng chung nên không cần đặt tủ lạnh… trong phòng, có thể dùng phòng của mình rộng rãi hơn.'],
          ['s4', 'また、@hitorigurashi([一人暮|ひとりぐ]らし)の@jiyuu([自由|じゆう])を{楽|たの}しめるだけでなく、[共同|きょうどう][部分|ぶぶん]でほかの@juunin({住人|じゅうにん})と@kouryuu([交流|こうりゅう])ができるため、さびしさや@fuan({不安|ふあん})も{少|すく}なくなる。', 'Ngoài ra, không chỉ tận hưởng sự tự do của người sống một mình, mà còn giao lưu được với cư dân khác ở khu dùng chung, nên bớt cô đơn và bất an.'],
          ['s5', '{仕事|しごと}も{国|くに}も@nenrei([年齢|ねんれい])も@chigau([違|ちが]う){人|ひと}と{一緒|いっしょ}に@sugosu([過|す]ごせば)、おもしろい@hakken({発見|はっけん})があるかもしれない。', 'Sống cùng những người khác nghề, khác quốc tịch, khác tuổi, có lẽ sẽ có những khám phá thú vị.']
        ] },
        { t: 'p', s: [
          ['s6', '@tadashi(ただし)、@kaiteki([快適|かいてき])に[生活|せいかつ]するためにはいくつか@chuuiten([注意点|ちゅういてん])がある。', 'Tuy nhiên, để sống thoải mái thì có vài điểm cần lưu ý.'],
          ['s7', '{入|はい}る{前|まえ}に、[必|かなら]ず@kengaku({見学|けんがく})をして、そこに{住|す}んでいる{人|ひと}と{自分|じぶん}の[生活|せいかつ]のしかたが{合|あ}うかどうかを@kakunin([確認|かくにん])することだ。', 'Trước khi vào ở, nhất định phải đến xem và xác nhận xem cách sinh hoạt của mình có hợp với những người đang sống ở đó không.'],
          ['s8', '[年齢|ねんれい]や@shokugyou([職業|しょくぎょう])もチェックしたほうがいい。', 'Cũng nên kiểm tra tuổi tác và nghề nghiệp.'],
          ['s9', '[共同|きょうどう][部分|ぶぶん]の{使|つか}い{方|かた}についても、どのような@kimari([決|き]まり)になっているかを{知|し}っておきたい。', 'Về cách dùng khu chung, cũng nên biết trước có những quy định gì.'],
          ['s10', '@souji([掃除|そうじ])、{音|おと}などで{問題|もんだい}が{起|お}きることもあるからだ。', 'Vì có khi xảy ra rắc rối về dọn dẹp, tiếng ồn…'],
          ['s11', 'また、ベッドなどの@kagu([家具|かぐ])や@sentakuki([洗濯機|せんたくき])@nado([等|など])の@denkiseihin({電気|でんき}[製品|せいひん])が[付|つ]いているかどうかも[確認|かくにん]したほうがいい。', 'Ngoài ra, cũng nên xác nhận xem có sẵn đồ nội thất như giường, đồ điện như máy giặt hay không.'],
          ['s12', '[付|つ]いている@baai([場合|ばあい])は、{入|はい}るときにこれまで{持|も}っていたものを@tebanasu([手放|てばな]さ)なければならず、{出|で}たあとは、{買|か}う[必要|ひつよう]がある。', 'Nếu có sẵn, khi vào ở phải bỏ bớt những đồ mình đang có, và sau khi dọn ra lại phải mua.'],
          ['s13', '{入|はい}る{前|まえ}に、@ijou({以上|いじょう})の@ten([点|てん])に{注意|ちゅうい}しておけば、@shippai([失敗|しっぱい])が{少|すく}ないだろう。', 'Nếu chú ý những điểm trên trước khi vào ở, có lẽ sẽ ít sai lầm.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '問1',
          question: ['q1', 'この{文章|ぶんしょう}のシェアハウスの@setsumei({説明|せつめい})と{合|あ}っているものはどれか。', 'Điều nào khớp với phần giải thích về share house trong bài?'],
          options: [
            ['[家賃|やちん]が[周|まわ]りのアパートより{安|やす}い。', 'Tiền thuê rẻ hơn các căn hộ xung quanh.', 'Sai. Tiền thuê 「周りのアパートなどと同じ程度」 – ngang nhau.'],
            ['{一人一人|ひとりひとり}が@dokuritsu([独立|どくりつ])した[部屋|へや]を{持|も}っている。', 'Mỗi người có phòng riêng biệt.', 'Đúng. 「自分用のかぎ付きの部屋はある」 (câu 2).'],
            ['{一人一人|ひとりひとり}に@senyou([専用|せんよう])のトイレとシャワーがある。', 'Mỗi người có nhà vệ sinh và phòng tắm riêng.', 'Sai. Phòng tắm, nhà vệ sinh dùng chung (共同).'],
            ['{一人|ひとり}の[部屋|へや]の{広|ひろ}さがふつうのアパートより{広|ひろ}い。', 'Phòng mỗi người rộng hơn căn hộ thông thường.', 'Sai. Phòng không rộng hơn; chỉ là dùng được rộng rãi hơn vì không cần đặt tủ lạnh…']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['s2']
        },
        {
          label: '問2',
          question: ['q2', 'シェアハウスのよい[点|てん]はどんなところだと{言|い}っているか。', 'Bài nói ưu điểm của share house là gì?'],
          options: [
            ['[共同|きょうどう][部分|ぶぶん]では[他|ほか]の{人|ひと}と{話|はなし}ができるので、さびしくない。', 'Ở khu chung có thể nói chuyện với người khác nên không cô đơn.', 'Đúng. 「共同部分でほかの住人と交流ができるため、さびしさや不安も少なくなる」 (câu 4).'],
            ['{自分|じぶん}で[掃除|そうじ]をしたり、ご[飯|はん]を{作|つく}ったりする[必要|ひつよう]がない。', 'Không cần tự dọn dẹp hay nấu ăn.', 'Sai. Bài không nói vậy.'],
            ['どのシェアハウスにも[家具|かぐ]や{電気|でんき}[製品|せいひん]がついている。', 'Share house nào cũng có sẵn nội thất và đồ điện.', 'Sai. Bài khuyên nên xác nhận có sẵn hay không, tức là không phải nơi nào cũng có.'],
            ['{同|おな}じような[年齢|ねんれい]や{仕事|しごと}の{人|ひと}と@kiwotsukau({気|き}を[遣|つか]わず)に{住|す}むことができる。', 'Có thể sống thoải mái với người cùng tuổi, cùng nghề.', 'Sai. Bài nói sống cùng người khác tuổi, khác nghề.']
          ],
          answer: 1,
          bookAnswer: 1,
          evidence: ['s4']
        },
        {
          label: '問3',
          question: ['q3', 'シェアハウスに{入|はい}るときの[注意点|ちゅういてん]で{本文|ほんぶん}と{合|あ}っているのはどれか。', 'Điểm cần lưu ý khi vào ở share house, điều nào khớp với bài?'],
          options: [
            ['{自分|じぶん}の[生活|せいかつ]のしかたが{住|す}んでいる{人|ひと}と{合|あ}うかどうか、[見学|けんがく]をして@shiraberu([調|しら]べる)。', 'Đến xem để tìm hiểu cách sinh hoạt của mình có hợp với người đang sống ở đó không.', 'Đúng. Câu 7.'],
            ['[年齢|ねんれい]や{仕事|しごと}が[違|ちが]う{人|ひと}が{住|す}んでいたら、そこには{住|す}まないほうがいい。', 'Nếu có người khác tuổi, khác nghề thì không nên ở.', 'Sai. Bài chỉ khuyên nên kiểm tra, còn sống với người khác tuổi, khác nghề lại được coi là thú vị.'],
            ['[共同|きょうどう][部分|ぶぶん]の{使|つか}い{方|かた}について、{自分|じぶん}で[決|き]まりを{作|つく}らなければならない。', 'Phải tự đặt ra quy định về cách dùng khu chung.', 'Sai. Chỉ cần biết trước quy định có sẵn (câu 9).'],
            ['ベッドや{電気|でんき}[製品|せいひん]を{持|も}っていたら、[必|かなら]ず[手放|てばな]さなければならない。', 'Nếu có giường, đồ điện thì nhất định phải bỏ đi.', 'Sai. Chỉ khi share house đã có sẵn những đồ đó (câu 12).']
          ],
          answer: 1,
          bookAnswer: 1,
          evidence: ['s7']
        },
        {
          label: '問4',
          question: ['q4', 'この{文章|ぶんしょう}を{書|か}いた{人|ひと}が@tsutaeru([伝|つた]えたい)ことは{何|なに}か。', 'Người viết muốn truyền đạt điều gì?'],
          options: [
            ['シェアハウスは{気|き}をつけるべき[点|てん]があり、{住|す}んでみて[失敗|しっぱい]する{人|ひと}が{多|おお}い。', 'Share house có điểm cần lưu ý, nhiều người ở rồi thất bại.', 'Sai. Bài không nói nhiều người thất bại.'],
            ['シェアハウスは@keizaiteki([経済的|けいざいてき])で、[住人|じゅうにん]@doushi([同士|どうし])の[交流|こうりゅう]もあるので、[増|ふ]やすべきだ。', 'Share house tiết kiệm, có giao lưu giữa cư dân nên cần tăng thêm.', 'Sai. Tiền thuê ngang căn hộ thường, và bài không nói nên tăng số share house.'],
            ['シェアハウスはよい[点|てん]が{多|おお}いが、[注意点|ちゅういてん]を[確認|かくにん]してから[決|き]めたほうがいい。', 'Share house có nhiều ưu điểm nhưng nên kiểm tra các điểm lưu ý rồi mới quyết định.', 'Đúng. Đoạn 2 nêu ưu điểm, đoạn 3 nêu lưu ý và kết luận: chú ý trước khi vào thì ít sai lầm.'],
            ['シェアハウスでは{一人|ひとり}の[自由|じゆう]な{時間|じかん}がないが、[他|ほか]の[住人|じゅうにん]と{安心|あんしん}して{住|す}める。', 'Ở share house không có thời gian tự do riêng nhưng sống yên tâm cùng người khác.', 'Sai. Bài nói vẫn tận hưởng được tự do của người sống một mình.']
          ],
          answer: 3,
          bookAnswer: 3,
          evidence: ['s6', 's13']
        }
      ],
      summary: 'Share house – nhà ở chung với người ngoài gia đình – đang tăng. Mỗi người có phòng riêng có khóa, còn bếp, phòng sinh hoạt, phòng tắm, nhà vệ sinh dùng chung. Ưu điểm: tiền thuê ngang căn hộ thường nhưng dùng phòng rộng rãi hơn, vừa tự do vừa giao lưu được nên bớt cô đơn. Lưu ý: đến xem trước, kiểm tra người ở cùng, quy định khu chung, đồ đạc có sẵn hay không.',
      structure: [
        ['Đoạn 1', 'Share house là gì'],
        ['Đoạn 2', 'Ưu điểm'],
        ['Đoạn 3', 'Điểm cần lưu ý (ただし) + kết luận']
      ],
      grammar: [
        ['〜とは〜である', 'Định nghĩa: … là …', 'シェアハウスとは、…住宅である'],
        ['〜ため', 'Vì… (văn viết)', '共同部分があるため'],
        ['〜だけでなく', 'Không chỉ…', '自由を楽しめるだけでなく'],
        ['〜ば、〜かもしれない', 'Nếu… thì có lẽ…', '一緒に過ごせば、おもしろい発見があるかもしれない'],
        ['〜たほうがいい', 'Nên…', 'チェックしたほうがいい'],
        ['〜なければならず', 'Phải… và (văn viết của なければならなくて)', '手放さなければならず']
      ],
      tip: 'Bài dài thường chia "ưu điểm" và "lưu ý" thành từng đoạn. Đánh dấu ただし・また để biết đoạn nào đang nói gì; câu hỏi về "điều người viết muốn nói" thường gộp cả hai phía.'
    },

    /* ───────────── 問題46 ───────────── */
    {
      id: '46',
      review: { pages: [127, 128], answerPage: 203, doubts: [] },
      kind: '内容理解（長文）・意見文',
      kindVi: 'Đoạn văn dài – văn nêu ý kiến',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{最近|さいきん}、{大学|だいがく}だけではなく{小中学校|しょうちゅうがっこう}でも、@seiseki([成績|せいせき])が{悪|わる}く@jugyou([授業|じゅぎょう])に@tsuiteiku(ついていけない)@seito({生徒|せいと})は{上|うえ}の@gakunen([学年|がくねん])に@susumu([進|すす]ませずに)、もう{一度|いちど}{同|おな}じ[学年|がくねん]で{勉強|べんきょう}させようという@iken({意見|いけん})が{出|で}ている。', 'Gần đây, không chỉ ở đại học mà cả ở trường tiểu học và THCS, đã xuất hiện ý kiến rằng học sinh có thành tích kém, không theo kịp bài thì không cho lên lớp, mà cho học lại cùng lớp một lần nữa.'],
          ['s2', 'これは{本当|ほんとう}に{子|こ}どもにとってよいことなのだろうか。', 'Liệu điều này có thật sự tốt cho trẻ không?']
        ] },
        { t: 'p', s: [
          ['s3', 'まず、‹①{一|ひと}つ{目|め}の{問題|もんだい}›は、クラスの{中|なか}の@tsunagari(つながり)が@hijou([非常|ひじょう]に){強|つよ}い{小中学校|しょうちゅうがっこう}で、{自分|じぶん}{一人|ひとり}が@shinkyuu([進級|しんきゅう])できないと、{大変|たいへん}な@shokku(ショックを[受|う]ける)※1ということだ。', 'Trước hết, vấn đề thứ nhất là: ở trường tiểu học, THCS – nơi sự gắn kết trong lớp rất mạnh – nếu chỉ mình mình không được lên lớp thì sẽ bị sốc nặng.'],
          ['s4', 'その{上|うえ}、{下|した}の[学年|がくねん]の{生徒|せいと}が{自分|じぶん}より{勉強|べんきょう}ができるようになってきたら、@yaruki(やる{気|き})も@jishin([自信|じしん])もなくしてしまうかもしれない。', 'Hơn nữa, nếu học sinh lớp dưới dần học giỏi hơn mình, có thể các em sẽ mất cả động lực lẫn tự tin.']
        ] },
        { t: 'p', s: [
          ['s5', 'もう{一|ひと}つは、{同|おな}じ@naiyou([内容|ないよう])をくり[返|かえ]し{勉強|べんきょう}しても、[成績|せいせき]は@kanarazushimo([必|かなら]ずしも){上|あ}がらないと{思|おも}われることだ。', 'Vấn đề còn lại là: dù học lặp lại cùng một nội dung, thành tích chưa chắc đã tăng.'],
          ['s6', '[成績|せいせき]が{悪|わる}いのは、{勉強|べんきょう}をする@shuukan([習慣|しゅうかん])がない、{勉強|べんきょう}のやり{方|かた}がわからない、@kisoteki([基礎的|きそてき])なことがわかっていないなどが[原因|げんいん]であることが{多|おお}い。', 'Thành tích kém thường là do không có thói quen học, không biết cách học, chưa hiểu những điều cơ bản…'],
          ['s7', 'これを{何|なん}とかしなければ、‹②@kekka([結果|けっか])は{変|か}わらないだろう›。', 'Nếu không giải quyết những điều này, kết quả có lẽ sẽ không thay đổi.']
        ] },
        { t: 'p', s: [
          ['s8', 'もちろん«r2({今|いま}の[学年|がくねん]の[内容|ないよう]がわからないままで{上|うえ}の[学年|がくねん]に{上|あ}がってしまったら、{今|いま}より@muzukashii([難|むずか]しい)[内容|ないよう]についていくことはできない)。', 'Tất nhiên, nếu cứ lên lớp trên khi chưa hiểu nội dung lớp hiện tại thì không thể theo kịp nội dung khó hơn.'],
          ['s9', 'だが、その{生徒|せいと}@nitaishite(に[対|たい]して)、@borantia(ボランティア)※2が{特別|とくべつ}に@shidou([指導|しどう])をしたりすれば、‹③»r2(この{問題|もんだい})›は@kaizen([改善|かいぜん])すると{考|かんが}えられる。', 'Nhưng nếu tình nguyện viên kèm riêng cho học sinh đó, thì có thể cải thiện được vấn đề này.']
        ] },
        { t: 'p', s: [
          ['s10', 'たとえば、[授業|じゅぎょう]が{終|お}わったあとに、@kyoushi([教師|きょうし])になりたい{大学生|だいがくせい}や、@taishoku([退職|たいしょく]した)※3[教師|きょうし]が{学校|がっこう}に{来|き}て、その{生徒|せいと}の{問題|もんだい}を{知|し}り、その{子|こ}どもに{合|あ}った[指導|しどう]をするのである。', 'Ví dụ, sau giờ học, sinh viên muốn trở thành giáo viên hoặc giáo viên đã nghỉ hưu đến trường, tìm hiểu vấn đề của học sinh và kèm theo cách phù hợp với em đó.'],
          ['s11', 'このようなことをしていけば、やる{気|き}をなくすこともなく、{上|うえ}の[学年|がくねん]にいても{勉強|べんきょう}についていくことができるのではないだろうか。', 'Nếu làm như vậy, chẳng phải các em sẽ không mất động lực và dù ở lớp trên vẫn theo kịp việc học sao?']
        ] }
      ],
      notes: [
        '（注1）ショックを[受|う]ける：ある[原因|げんいん]でとても{不安|ふあん}になる',
        '（注2）ボランティア：お{金|かね}のためではなく、@shakai({社会|しゃかい})に@yakudatsu([役立|やくだ]つ)ことを[進|すす]んでする{人|ひと}',
        '（注3）[退職|たいしょく]する：{仕事|しごと}をやめる'
      ],
      refs: {
        r2: 'この問題 = chưa hiểu nội dung lớp hiện tại mà lên lớp trên thì không theo kịp nội dung khó hơn (câu ngay trước).'
      },
      questions: [
        {
          label: '問1',
          question: ['q1', '‹①{一|ひと}つ{目|め}の{問題|もんだい}›とあるが、このような{問題|もんだい}が{起|お}こる@riyuu({理由|りゆう})は{何|なに}か。', '"Vấn đề thứ nhất" – lý do vấn đề này xảy ra là gì?'],
          options: [
            ['@moto({元|もと})のクラスの{生徒|せいと}といっしょに{上|うえ}の[学年|がくねん]に{行|い}けないから', 'Vì không được lên lớp cùng các bạn trong lớp cũ.', 'Đúng. Lớp học gắn kết mạnh, chỉ mình mình không được lên lớp nên bị sốc (câu 3).'],
            ['{一人|ひとり}だけ[授業|じゅぎょう]が{終|お}わってから@nokoru([残|のこ]らなければならない)から', 'Vì chỉ mình phải ở lại sau giờ học.', 'Sai. Việc ở lại sau giờ học là đề xuất giải pháp ở cuối bài, không phải lý do của vấn đề thứ nhất.'],
            ['{自分|じぶん}がクラスの{中|なか}で{一番|いちばん}{勉強|べんきょう}をしなかったから', 'Vì mình là người học ít nhất lớp.', 'Sai. Bài không nói vậy.'],
            ['{自分|じぶん}だけが{元|もと}のクラスの{生徒|せいと}と{遊|あそ}べないから', 'Vì chỉ mình không được chơi với các bạn lớp cũ.', 'Sai. Bài không nói đến việc chơi.']
          ],
          answer: 1,
          bookAnswer: 1,
          evidence: ['s3']
        },
        {
          label: '問2',
          question: ['q2', '‹②[結果|けっか]は{変|か}わらないだろう›とあるが、どういう{意味|いみ}か。', '"Kết quả có lẽ sẽ không thay đổi" nghĩa là gì?'],
          options: [
            ['{勉強|べんきょう}ができない{生徒|せいと}が{上|うえ}の[学年|がくねん]に{上|あ}がるだろう。', 'Học sinh học kém sẽ được lên lớp.', 'Sai. "Kết quả" ở đây là thành tích học tập, không phải việc lên lớp.'],
            ['{勉強|べんきょう}ができない{生徒|せいと}が{上|うえ}の[学年|がくねん]に{上|あ}がらないだろう。', 'Học sinh học kém sẽ không được lên lớp.', 'Sai. Như trên.'],
            ['{勉強|べんきょう}ができない{生徒|せいと}が{勉強|べんきょう}がわかるようになるだろう。', 'Học sinh học kém sẽ hiểu bài.', 'Sai. Ngược nghĩa.'],
            ['{勉強|べんきょう}ができない{生徒|せいと}が{勉強|べんきょう}がわかるようにならないだろう。', 'Học sinh học kém vẫn sẽ không hiểu bài.', 'Đúng. Nếu không giải quyết nguyên nhân (thói quen, cách học, kiến thức cơ bản) thì học lại cũng không lên điểm (câu 5–7).']
          ],
          answer: 4,
          bookAnswer: 4,
          evidence: ['s5', 's6', 's7']
        },
        {
          label: '問3',
          question: ['q3', '‹③この{問題|もんだい}›とは{何|なに}か。', '"Vấn đề này" là gì?'],
          options: [
            ['{小学校|しょうがっこう}や{中学校|ちゅうがっこう}で{上|うえ}の[学年|がくねん]の{勉強|べんきょう}の[内容|ないよう]が{今|いま}より[難|むずか]しくなること', 'Nội dung học lớp trên khó hơn hiện tại.', 'Sai. Nội dung khó hơn là điều đương nhiên, không phải "vấn đề" được cải thiện.'],
            ['{勉強|べんきょう}ができない{生徒|せいと}が{上|うえ}の[学年|がくねん]に{上|あ}がったときに[授業|じゅぎょう]を@rikai([理解|りかい])できないこと', 'Học sinh học kém lên lớp trên thì không hiểu bài.', 'Đúng. この問題 chỉ nội dung câu ngay trước (câu 8).'],
            ['{勉強|べんきょう}ができない{生徒|せいと}が[授業|じゅぎょう]についていけないので{上|うえ}の[学年|がくねん]に{上|あ}がれないこと', 'Học sinh học kém không theo kịp nên không được lên lớp.', 'Sai. Câu 8 nói về trường hợp ĐÃ lên lớp.'],
            ['{勉強|べんきょう}ができない{生徒|せいと}にボランティアなどが{特別|とくべつ}な[指導|しどう]をしないこと', 'Tình nguyện viên không kèm riêng cho học sinh học kém.', 'Sai. Kèm riêng là giải pháp, không phải vấn đề.']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['s8', 's9']
        },
        {
          label: '問4',
          question: ['q4', '{上|うえ}の[学年|がくねん]の{勉強|べんきょう}[内容|ないよう]についていくために、この{文章|ぶんしょう}を{書|か}いた{人|ひと}はどうするべきだと{言|い}っているか。', 'Để theo kịp nội dung lớp trên, người viết cho rằng nên làm gì?'],
          options: [
            ['[教師|きょうし]がボランティアといっしょに[授業|じゅぎょう]のあとに{特別|とくべつ}な[指導|しどう]をする。', 'Giáo viên cùng tình nguyện viên kèm riêng sau giờ học.', 'Sai. Người kèm là tình nguyện viên (sinh viên, giáo viên đã nghỉ hưu), không phải giáo viên đang dạy.'],
            ['ボランティアとクラスのほかの{生徒|せいと}がわからないところを{教|おし}える。', 'Tình nguyện viên và các học sinh khác trong lớp dạy chỗ chưa hiểu.', 'Sai. Bài không nói học sinh khác dạy.'],
            ['{勉強|べんきょう}の@nigate([苦手|にがて])な{生徒|せいと}に{合|あ}った[内容|ないよう]をボランティアが[指導|しどう]する。', 'Tình nguyện viên kèm nội dung phù hợp với học sinh học kém.', 'Đúng. 「その子どもに合った指導をする」 (câu 10).'],
            ['[授業中|じゅぎょうちゅう]にボランティアがわからないところについて{教|おし}える。', 'Tình nguyện viên dạy chỗ chưa hiểu ngay trong giờ học.', 'Sai. Việc kèm diễn ra SAU giờ học (授業が終わったあとに).']
          ],
          answer: 3,
          bookAnswer: 3,
          evidence: ['s10', 's11']
        }
      ],
      summary: 'Có ý kiến cho học sinh học kém ở lại lớp. Người viết nghi ngờ điều đó vì hai vấn đề: (1) trẻ bị sốc khi một mình không được lên lớp, có thể mất động lực và tự tin; (2) học lại chưa chắc lên điểm nếu không giải quyết nguyên nhân. Đề xuất: cho lên lớp nhưng có tình nguyện viên (sinh viên sư phạm, giáo viên đã nghỉ hưu) kèm riêng sau giờ học, phù hợp với từng em.',
      structure: [
        ['Đoạn 1', 'Nêu ý kiến "cho ở lại lớp" + đặt câu hỏi'],
        ['Đoạn 2', 'Vấn đề thứ nhất (まず): bị sốc, mất động lực'],
        ['Đoạn 3', 'Vấn đề thứ hai (もう一つは): học lại chưa chắc lên điểm'],
        ['Đoạn 4–5', 'Giải pháp: tình nguyện viên kèm riêng (だが・たとえば) + kết luận']
      ],
      grammar: [
        ['〜させずに、〜させよう', 'Không cho… mà bắt…', '上の学年に進ませずに、もう一度同じ学年で勉強させよう'],
        ['〜のだろうか', 'Liệu… có…? (nghi vấn)', '本当に子どもにとってよいことなのだろうか'],
        ['まず〜。その上〜。もう一つは〜', 'Liệt kê lý do: trước hết… hơn nữa… điều còn lại là…', ''],
        ['必ずしも〜ない', 'Chưa chắc đã…', '成績は必ずしも上がらない'],
        ['〜ままで', 'Trong tình trạng vẫn…', 'わからないままで上の学年に上がってしまったら'],
        ['〜のではないだろうか', 'Chẳng phải… sao? (nêu ý kiến mềm mỏng)', 'ついていくことができるのではないだろうか']
      ],
      tip: 'Câu hỏi về cụm gạch chân có đánh số ①②③: đọc kỹ câu ngay trước và ngay sau cụm đó. Với この問題, nội dung được chỉ tới thường là câu ngay trước.'
    }
  ]
};
