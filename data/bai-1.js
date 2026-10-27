/*
  Dữ liệu Bài 1 — 問題14, 15, 16, 24 (Shinkanzen N3 Đọc hiểu)

  Cú pháp đánh dấu trong câu tiếng Nhật:
    {漢字|かんじ}   furigana cho kanji cơ bản (ẩn ở chế độ "Kanji khó")
    [漢字|かんじ]   furigana cho kanji khó
    @key(...)       từ vựng — chạm để xem nghĩa (key nằm trong VOCAB bên dưới)
    »key(...)       chỉ thị từ (それ、この…) — chạm để xem nó chỉ cái gì
    «key(...)       đoạn văn mà chỉ thị từ đang chỉ tới
    ※1              chú thích (注1)

  Mỗi câu: [id, tiếng Nhật, tiếng Việt]
*/
window.BAI = {
  id: 1,
  title: 'Bài 1',
  subtitle: 'Email · Thư · Memo · Thông báo',

  vocab: {
    // 問題14
    gakuseijidai: { w: '学生時代', r: 'がくせいじだい', hv: 'HỌC SINH THỜI ĐẠI', vi: 'thời đi học, thời sinh viên' },
    todoku: { w: '届く', r: 'とどく', hv: 'GIỚI', vi: '(thư, hàng) được gửi tới, đến nơi' },
    atesaki: { w: 'あて先（宛先）', r: 'あてさき', hv: 'UYỂN TIÊN', vi: 'địa chỉ người nhận' },
    kenmei: { w: '件名', r: 'けんめい', hv: 'KIỆN DANH', vi: 'tiêu đề (email)' },
    soushin: { w: '送信日時', r: 'そうしんにちじ', hv: 'TỐNG TÍN NHẬT THỜI', vi: 'ngày giờ gửi' },
    hisashiburi: { w: '久しぶり', r: 'ひさしぶり', hv: 'CỬU', vi: 'lâu rồi mới (gặp / làm lại)', note: '久しぶりに食事でも… = lâu rồi, đi ăn gì đó nhé' },
    nantoka: { w: '何とか', r: 'なんとか', hv: 'HÀ', vi: 'xoay xở được, tạm ổn', note: '何とか元気にやってます = mình vẫn tạm ổn' },
    jikantoreru: { w: '時間が取れる', r: 'じかんがとれる', hv: 'THỜI GIAN THỦ', vi: 'thu xếp được thời gian' },
    konomae: { w: 'この前', r: 'このまえ', hv: 'TIỀN', vi: 'hôm trước, lần trước' },
    mitsukeru: { w: '見つける', r: 'みつける', hv: 'KIẾN', vi: 'tìm thấy, phát hiện ra' },
    issho: { w: '一緒に', r: 'いっしょに', hv: 'NHẤT TỰ', vi: 'cùng nhau' },
    yokattara: { w: 'よかったら', r: 'よかったら', hv: '', vi: 'nếu được thì…, nếu bạn thấy ổn thì…', note: 'Cách mời / đề nghị nhẹ nhàng, không ép buộc.' },
    tsugou: { w: '都合', r: 'つごう', hv: 'ĐÔ HỢP', vi: 'sự thuận tiện (về thời gian, hoàn cảnh)', note: '都合のいい日 = ngày thuận tiện' },
    awaseru: { w: '合わせる', r: 'あわせる', hv: 'HỢP', vi: 'điều chỉnh cho khớp với, theo (ai đó)', note: '合わせられます = có thể theo (lịch của bạn)' },
    henji: { w: '返事', r: 'へんじ', hv: 'PHẢN SỰ', vi: 'hồi âm, câu trả lời' },
    tsutaeru: { w: '伝える', r: 'つたえる', hv: 'TRUYỀN', vi: 'truyền đạt, nói cho biết' },
    hima: { w: '暇', r: 'ひま', hv: 'HẠ', vi: 'rảnh rỗi, thời gian rảnh' },
    renraku: { w: '連絡する', r: 'れんらくする', hv: 'LIÊN LẠC', vi: 'liên lạc, báo cho biết' },

    // 問題15
    haikei: { w: '拝啓', r: 'はいけい', hv: 'BÁI KHẢI', vi: 'Kính gửi (từ mở đầu thư trang trọng)', note: 'Luôn đi cặp với 敬具 ở cuối thư.' },
    keigu: { w: '敬具', r: 'けいぐ', hv: 'KÍNH CỤ', vi: 'Kính thư (từ kết thư trang trọng)', note: 'Đi cặp với 拝啓.' },
    kouyou: { w: '紅葉', r: 'こうよう', hv: 'HỒNG DIỆP', vi: 'lá đỏ mùa thu', note: 'Cũng đọc là もみじ.' },
    kisetsu: { w: '季節', r: 'きせつ', hv: 'QUÝ TIẾT', vi: 'mùa' },
    minasama: { w: '皆さま', r: 'みなさま', hv: 'GIAI', vi: 'mọi người (kính ngữ của 皆さん)' },
    sugosu: { w: '過ごす', r: 'すごす', hv: 'QUÁ', vi: 'trải qua, sống (một khoảng thời gian)', note: 'お元気でお過ごしのことと思います = chắc là mọi người vẫn khỏe' },
    senjitsu: { w: '先日', r: 'せんじつ', hv: 'TIÊN NHẬT', vi: 'hôm trước, hôm nọ' },
    oaisuru: { w: 'お会いする', r: 'おあいする', hv: 'HỘI', vi: 'gặp (khiêm nhường ngữ của 会う)' },
    junchou: { w: '順調', r: 'じゅんちょう', hv: 'THUẬN ĐIỀU', vi: 'thuận lợi, suôn sẻ' },
    susumu: { w: '進む', r: 'すすむ', hv: 'TIẾN', vi: 'tiến triển, tiến lên' },
    ukagau: { w: 'うかがう（伺う）', r: 'うかがう', hv: 'TỨ', vi: 'nghe (khiêm nhường ngữ của 聞く)', note: 'Cũng có nghĩa: hỏi, đến thăm (khiêm nhường).' },
    anshin: { w: '安心する', r: 'あんしんする', hv: 'AN TÂM', vi: 'yên tâm' },
    shougakusei: { w: '小学生', r: 'しょうがくせい', hv: 'TIỂU HỌC SINH', vi: 'học sinh tiểu học' },
    bikkuri: { w: 'びっくりする', r: 'びっくりする', hv: '', vi: 'giật mình, ngạc nhiên' },
    sate: { w: 'さて', r: 'さて', hv: '', vi: 'à, sau đây… (chuyển sang nội dung chính)', note: 'Trong thư, nội dung chính thường bắt đầu sau さて.' },
    ohanashi: { w: 'お話しする', r: 'おはなしする', hv: 'THOẠI', vi: 'nói chuyện (khiêm nhường ngữ của 話す)' },
    beppin: { w: '別便', r: 'べつびん', hv: 'BIỆT TIỆN', vi: 'gửi riêng (bằng một lần gửi khác)' },
    okuru: { w: '送る', r: 'おくる', hv: 'TỐNG', vi: 'gửi', note: 'お送りしました = tôi đã gửi (khiêm nhường)' },
    hitsuyou: { w: '必要', r: 'ひつよう', hv: 'TẤT YẾU', vi: 'cần thiết' },
    sashiageru: { w: 'さしあげる（差し上げる）', r: 'さしあげる', hv: 'SAI THƯỢNG', vi: 'biếu, tặng (khiêm nhường ngữ của あげる)' },
    uketoru: { w: '受け取る', r: 'うけとる', hv: 'THỤ THỦ', vi: 'nhận' },
    yakunitatsu: { w: '役に立つ', r: 'やくにたつ', hv: 'DỊCH LẬP', vi: 'có ích, giúp ích' },
    kiwotsukeru: { w: '気をつける', r: 'きをつける', hv: 'KHÍ', vi: 'chú ý, giữ gìn', note: 'お体にお気をつけて = xin giữ gìn sức khỏe' },
    sama: { w: '様', r: 'さま', hv: 'DẠNG', vi: 'kính gửi… (gắn sau tên, trang trọng hơn さん)' },
    naiyou: { w: '内容', r: 'ないよう', hv: 'NỘI DUNG', vi: 'nội dung' },
    ageru: { w: 'あげる', r: 'あげる', hv: '', vi: 'cho, tặng' },
    kasu: { w: '貸す', r: 'かす', hv: 'THẢI', vi: 'cho mượn' },

    // 問題16
    shokuba: { w: '職場', r: 'しょくば', hv: 'CHỨC TRƯỜNG', vi: 'nơi làm việc' },
    kopiwotoru: { w: 'コピーを取る', r: 'コピーをとる', hv: 'THỦ', vi: 'photo, sao chụp tài liệu' },
    haru: { w: '貼る', r: 'はる', hv: 'THIẾP', vi: 'dán', note: '貼ってあった = (ai đó) đã dán sẵn ở đó' },
    ika: { w: '以下', r: 'いか', hv: 'DĨ HẠ', vi: 'dưới đây; trở xuống' },
    koshou: { w: '故障', r: 'こしょう', hv: 'CỐ CHƯỚNG', vi: 'hỏng hóc, trục trặc', note: '故障中 = đang hỏng' },
    shuuri: { w: '修理', r: 'しゅうり', hv: 'TU LÝ', vi: 'sửa chữa' },
    mondainaku: { w: '問題なく', r: 'もんだいなく', hv: 'VẤN ĐỀ', vi: 'không có vấn đề gì, suôn sẻ' },
    isogu: { w: '急ぐ', r: 'いそぐ', hv: 'CẤP', vi: 'vội, gấp', note: 'お急ぎの方 = người đang vội' },
    kai: { w: '〜階', r: 'かい', hv: 'GIAI', vi: 'tầng' },
    jimushitsu: { w: '事務室', r: 'じむしつ', hv: 'SỰ VỤ THẤT', vi: 'văn phòng, phòng hành chính' },
    dai: { w: '第一・第二', r: 'だいいち・だいに', hv: 'ĐỆ NHẤT · ĐỆ NHỊ', vi: 'thứ nhất · thứ hai' },
    shiryoujunbishitsu: { w: '資料準備室', r: 'しりょうじゅんびしつ', hv: 'TƯ LIỆU CHUẨN BỊ THẤT', vi: 'phòng chuẩn bị tài liệu' },
    shiryoukanrishitsu: { w: '資料管理室', r: 'しりょうかんりしつ', hv: 'TƯ LIỆU QUẢN LÝ THẤT', vi: 'phòng quản lý tài liệu' },
    otsukai: { w: 'お使いください', r: 'おつかいください', hv: 'SỬ', vi: 'xin hãy dùng (tôn kính ngữ)' },
    tadashi: { w: 'ただし', r: 'ただし', hv: '', vi: 'tuy nhiên (nêu điều kiện / ngoại lệ đi kèm)' },
    komu: { w: '混む', r: 'こむ', hv: 'HỖN', vi: 'đông đúc, chật chội' },
    mai: { w: '〜枚', r: 'まい', hv: 'MAI', vi: 'tờ (đếm vật mỏng: giấy, áo…)' },
    ijou: { w: '以上', r: 'いじょう', hv: 'DĨ THƯỢNG', vi: 'trở lên', note: '20枚以上 = từ 20 tờ trở lên' },
    enryo: { w: 'ご遠慮ください', r: 'ごえんりょください', hv: 'VIỄN LỰ', vi: 'xin vui lòng không… (cấm một cách lịch sự)' },
    toreru: { w: '取れる', r: 'とれる', hv: 'THỦ', vi: 'làm được (ở đây: photo được)', note: 'A3サイズが取れません = không photo được khổ A3' },
    kagigakakaru: { w: 'カギがかかる', r: 'カギがかかる', hv: '', vi: 'bị khóa', note: 'カギを借りる = mượn chìa khóa' },
    tonari: { w: 'となり（隣）', r: 'となり', hv: 'LÂN', vi: 'bên cạnh' },
    kariru: { w: '借りる', r: 'かりる', hv: 'TÁ', vi: 'mượn' },
    kaigi: { w: '会議', r: 'かいぎ', hv: 'HỘI NGHỊ', vi: 'cuộc họp' },
    maniau: { w: '間に合う', r: 'まにあう', hv: 'GIAN HỢP', vi: 'kịp (giờ)' },

    // 問題24
    annai: { w: 'ご案内', r: 'ごあんない', hv: 'ÁN NỘI', vi: 'thư mời, thông báo hướng dẫn' },
    hiichinichi: { w: '日一日と', r: 'ひいちにちと', hv: 'NHẬT NHẤT NHẬT', vi: 'từng ngày, ngày một' },
    fukamaru: { w: '深まる', r: 'ふかまる', hv: 'THÂM', vi: 'sâu thêm, đậm dần', note: '秋が深まる = thu đã về sâu' },
    utsukushii: { w: '美しい', r: 'うつくしい', hv: 'MỸ', vi: 'đẹp', note: '美しさ = vẻ đẹp' },
    gasshou: { w: '合唱', r: 'がっしょう', hv: 'HỢP XƯỚNG', vi: 'hợp xướng, đồng ca' },
    aisuru: { w: '愛する', r: 'あいする', hv: 'ÁI', vi: 'yêu' },
    shakaijin: { w: '社会人', r: 'しゃかいじん', hv: 'XÃ HỘI NHÂN', vi: 'người đi làm (đã ra trường)' },
    konsei: { w: '混声', r: 'こんせい', hv: 'HỖN THANH', vi: '(hợp xướng) có cả giọng nam và nữ' },
    konotabi: { w: 'このたび（この度）', r: 'このたび', hv: 'ĐỘ', vi: 'lần này (cách nói trang trọng)' },
    atsumeru: { w: '集める', r: 'あつめる', hv: 'TẬP', vi: 'tập hợp, thu thập' },
    kaisai: { w: '開催する', r: 'かいさいする', hv: 'KHAI THÔI', vi: 'tổ chức (sự kiện)' },
    tanoshimu: { w: '楽しむ', r: 'たのしむ', hv: 'LẠC', vi: 'thưởng thức, tận hưởng' },
    raijou: { w: '来場', r: 'らいじょう', hv: 'LAI TRƯỜNG', vi: 'đến dự (tới hội trường)' },
    heisei: { w: '平成', r: 'へいせい', hv: 'BÌNH THÀNH', vi: 'niên hiệu Heisei (1989–2019)' },
    happyoukai: { w: '発表会', r: 'はっぴょうかい', hv: 'PHÁT BIỂU HỘI', vi: 'buổi biểu diễn, buổi trình diễn' },
    jikkouiin: { w: '実行委員', r: 'じっこういいん', hv: 'THỰC HÀNH ỦY VIÊN', vi: 'thành viên ban tổ chức' },
    nichiji: { w: '日時', r: 'にちじ', hv: 'NHẬT THỜI', vi: 'ngày giờ' },
    kaijou: { w: '開場', r: 'かいじょう', hv: 'KHAI TRƯỜNG', vi: 'mở cửa (hội trường)' },
    kaien: { w: '開演', r: 'かいえん', hv: 'KHAI DIỄN', vi: 'bắt đầu biểu diễn' },
    basho: { w: '場所', r: 'ばしょ', hv: 'TRƯỜNG SỞ', vi: 'địa điểm' },
    shimin: { w: '市民ホール', r: 'しみんホール', hv: 'THỊ DÂN', vi: 'hội trường thành phố, nhà văn hóa' },
    nyuujouryou: { w: '入場料', r: 'にゅうじょうりょう', hv: 'NHẬP TRƯỜNG LIỆU', vi: 'phí vào cửa' },
    jitensha: { w: '自転車', r: 'じてんしゃ', hv: 'TỰ CHUYỂN XA', vi: 'xe đạp' },
    jouenchuu: { w: '上演中', r: 'じょうえんちゅう', hv: 'THƯỢNG DIỄN TRUNG', vi: 'trong lúc biểu diễn' },
    satsuei: { w: '撮影', r: 'さつえい', hv: 'TOÁT ẢNH', vi: 'chụp ảnh, quay phim' },
    seki: { w: '席', r: 'せき', hv: 'TỊCH', vi: 'ghế, chỗ ngồi', note: 'ビデオ席 = khu ghế dành cho quay video' },
    okosama: { w: 'お子様', r: 'おこさま', hv: 'TỬ DẠNG', vi: 'con, em nhỏ (kính ngữ)' },
    tsureru: { w: '連れる', r: 'つれる', hv: 'LIÊN', vi: 'dẫn theo', note: 'お連れの方 = người dẫn theo (ai đó)' },
    meiwaku: { w: '迷惑', r: 'めいわく', hv: 'MÊ HOẶC', vi: 'phiền hà', note: '迷惑にならないように = để không làm phiền' },
    chuui: { w: '注意', r: 'ちゅうい', hv: 'CHÚ Ý', vi: 'chú ý' },
    keitai: { w: '携帯電話', r: 'けいたいでんわ', hv: 'HUỀ ĐỚI ĐIỆN THOẠI', vi: 'điện thoại di động' },
    tou: { w: '〜等', r: 'とう', hv: 'ĐẲNG', vi: '…v.v., các thứ như…' },
    dengen: { w: '電源', r: 'でんげん', hv: 'ĐIỆN NGUYÊN', vi: 'nguồn điện', note: '電源を切る = tắt nguồn' },
    kiru: { w: '切る', r: 'きる', hv: 'THIẾT', vi: 'tắt (điện); cắt' },
    boshuu: { w: '募集', r: 'ぼしゅう', hv: 'MỘ TẬP', vi: 'tuyển, chiêu mộ' },
    sanka: { w: '参加', r: 'さんか', hv: 'THAM GIA', vi: 'tham gia' },
    kibou: { w: '希望', r: 'きぼう', hv: 'HY VỌNG', vi: 'mong muốn, nguyện vọng', note: '参加ご希望の方 = người muốn tham gia' },
    toru: { w: '撮る', r: 'とる', hv: 'TOÁT', vi: 'chụp (ảnh), quay (video)' },
    shashin: { w: '写真', r: 'しゃしん', hv: 'TẢ CHÂN', vi: 'ảnh' },
    shitehaikenai: { w: '〜てはいけない', r: 'てはいけない', hv: '', vi: 'không được làm…' }
  },

  problems: [
    /* ───────────── 問題14 ───────────── */
    {
      id: '14',
      kind: 'メール（プライベート）',
      kindVi: 'Email cá nhân',
      style: 'mail',
      before: ['b', '{仲|なか}がいい{友達|ともだち}にどんなメールを{送|おく}りますか。', 'Bạn thường gửi email như thế nào cho bạn thân?'],
      lead: ['l', 'これは、@gakuseijidai({学生|がくせい}{時代|じだい})の{友達|ともだち}の[佐藤|さとう]さんからリンさんに@todoku([届|とど]いた)メールである。', 'Đây là email mà Lin nhận được từ Satō, bạn thời đi học.'],
      blocks: [
        { t: 'meta', s: [
          ['m1', '@atesaki(あて{先|さき})：1234abc@groups.ne.jp', 'Người nhận: 1234abc@groups.ne.jp'],
          ['m2', '@kenmei([件名|けんめい])：こんにちは！', 'Tiêu đề: Xin chào!'],
          ['m3', '@soushin([送信|そうしん]{日時|にちじ})：20XX年7月16日　13:16', 'Ngày giờ gửi: 16/7/20XX, 13:16']
        ] },
        { t: 'lines', s: [
          ['s1', 'リンさん、@hisashiburi([久|ひさ]しぶり)！^o^/', 'Lin ơi, lâu lắm rồi nhỉ! ^o^/'],
          ['s2', '{元気|げんき}ですか～？', 'Bạn khỏe không~?'],
          ['s3', '{仕事|しごと}はどう？', 'Công việc thế nào rồi?'],
          ['s4', '»r2(こちら)は@nantoka({何|なん}とか){元気|げんき}にやってます。', 'Mình thì vẫn tạm ổn.'],
          ['s5', '«r1({先週|せんしゅう}まで{仕事|しごと}がとても{忙|いそが}しかったのだけど、{今週|こんしゅう}は{少|すこ}し@jikantoreru({時間|じかん}が[取|と]れる)ようになりました)。', 'Đến tuần trước công việc rất bận, nhưng tuần này mình đã thu xếp được chút thời gian.'],
          ['s6', '»r1(それで)、リンさんに{会|あ}いたいな、と{思|おも}ってメールしてます。^^', 'Vì vậy, mình viết mail vì muốn gặp Lin. ^^'],
          ['s7', '@hisashiburi([久|ひさ]しぶり)に{食事|しょくじ}でもしませんか？', 'Lâu rồi, mình cùng đi ăn gì đó nhé?'],
          ['s8', '@konomae(この{前|まえ})すごくおいしいお{店|みせ}を@mitsukeru({見|み}つけた)ので、リンさんと@issho({一緒|いっしょ}に){行|い}きたいと{思|おも}って…。', 'Hôm trước mình tìm được một quán cực ngon, nên muốn đi cùng Lin…'],
          ['s9', '@yokattara(よかったら)@tsugou([都合|つごう])のいい{日|ひ}、{教|おし}えてください♪♪', 'Nếu được thì cho mình biết ngày nào bạn tiện nhé ♪♪'],
          ['s10', '{時間|じかん}もリンさんに@awaseru([合|あ]わせられます)。', 'Giờ giấc thì mình cũng theo Lin được.'],
          ['s11', 'お@henji([返事|へんじ]){待|ま}ってますね！^o^/', 'Mình chờ hồi âm nhé! ^o^/']
        ] },
        { t: 'sign', s: [['s12', '[佐藤|さとう]', 'Satō']] }
      ],
      notes: [],
      refs: {
        r1: 'それで (vì vậy) chỉ lý do ở câu trước: tuần này Satō đã có thời gian rảnh.',
        r2: 'こちら = phía mình, tức là người viết mail (Satō).'
      },
      question: ['q', 'このメールで{一番|いちばん}@tsutaeru([伝|つた]えたい)ことは{何|なに}か。', 'Điều người viết muốn truyền đạt nhất trong email này là gì?'],
      options: [
        ['{自分|じぶん}は@nantoka({何|なん}とか){元気|げんき}にやっているが、リンさんはどうか{教|おし}えてほしい。', 'Mình vẫn tạm ổn, muốn Lin cho biết Lin thế nào.', 'Đây chỉ là lời hỏi thăm mở đầu (câu 2–4), không phải mục đích chính của mail.'],
        ['{最近|さいきん}{忙|いそが}しかったが、@hisashiburi([久|ひさ]しぶり)に{少|すこ}し@hima([暇|ひま])になったことを@tsutaeru([伝|つた]えたい)。', 'Muốn báo rằng dạo này bận nhưng giờ đã rảnh hơn một chút.', 'Việc có thời gian rảnh chỉ là LÝ DO (câu 5) dẫn tới lời rủ đi ăn, không phải điều muốn nói nhất.'],
        ['@issho({一緒|いっしょ}に){食事|しょくじ}がしたいから、@tsugou([都合|つごう])のいい{日時|にちじ}を@renraku({連絡|れんらく}して)ほしい。', 'Muốn đi ăn cùng nhau nên mong Lin báo ngày giờ thuận tiện.', 'Đúng. Satō rủ đi ăn (câu 7) và nhờ Lin cho biết ngày tiện (câu 9). Từ それで ở câu 6 cho thấy mục đích viết mail là muốn gặp.'],
        ['@hisashiburi([久|ひさ]しぶり)だから、リンさんからメールがほしい。', 'Vì lâu rồi nên muốn nhận mail từ Lin.', 'Satō có chờ hồi âm (câu 11), nhưng là hồi âm về ngày hẹn đi ăn, không phải chỉ muốn nhận mail.']
      ],
      answer: 3,
      evidence: ['s6', 's7', 's9'],
      summary: 'Satō, bạn thời đi học, gửi mail cho Lin. Sau vài câu hỏi thăm, Satō kể rằng công việc đã bớt bận nên muốn gặp Lin. Satō rủ Lin đi ăn ở một quán ngon mới tìm được và nhờ Lin cho biết ngày thuận tiện.',
      structure: [
        ['Câu 1–4', 'Chào hỏi, hỏi thăm sức khỏe và công việc'],
        ['Câu 5–6', 'Lý do viết mail: đã có thời gian → muốn gặp (それで)'],
        ['Câu 7–9', 'NỘI DUNG CHÍNH: rủ đi ăn + nhờ cho biết ngày tiện'],
        ['Câu 10–11', 'Kết: sẵn sàng theo lịch của Lin, chờ hồi âm']
      ],
      grammar: [
        ['〜てます', 'Cách nói tắt của 〜ています trong văn nói / mail thân mật.', 'やってます・メールしてます・待ってます'],
        ['〜ようになりました', 'Đã trở nên có thể… (thay đổi trạng thái).', '時間が取れるようになりました = đã thu xếp được thời gian'],
        ['〜でもしませんか', 'Rủ rê nhẹ nhàng; でも = "chẳng hạn như…".', '食事でもしませんか = đi ăn gì đó nhé?'],
        ['〜のだけど', 'Văn nói của 〜のですが: "…nhưng mà".', '忙しかったのだけど'],
        ['よかったら〜てください', 'Nhờ vả lịch sự, không ép buộc.', 'よかったら都合のいい日、教えてください']
      ],
      tip: 'Với dạng email, mục đích chính thường nằm sau từ nối như それで / さて và ở các câu rủ rê, nhờ vả (〜ませんか、〜てください). Các câu chào hỏi đầu mail thường không phải đáp án.'
    },

    /* ───────────── 問題15 ───────────── */
    {
      id: '15',
      kind: '手紙',
      kindVi: 'Thư tay',
      style: 'letter',
      vertical: true,
      before: ['b', 'だれかから{日本語|にほんご}の{手紙|てがみ}をもらったことがありますか。', 'Bạn đã từng nhận thư bằng tiếng Nhật từ ai chưa?'],
      lead: null,
      blocks: [
        { t: 'lines', s: [['h1', '@haikei([拝啓|はいけい])', 'Kính gửi,']] },
        { t: 'p', s: [
          ['s1', '@kouyou([紅葉|こうよう])※1がきれいな@kisetsu([季節|きせつ])になってきました。', 'Đã đến mùa lá đỏ thật đẹp.'],
          ['s2', '@minasama([皆|みな]さま)、お{元気|げんき}でお@sugosu([過|す]ごし)のことと{思|おも}います。', 'Tôi nghĩ chắc mọi người vẫn khỏe mạnh.']
        ] },
        { t: 'p', s: [
          ['s3', '«r1(@senjitsu([先日|せんじつ])は@hisashiburi([久|ひさ]しぶり)にチャンさんに@oaisuru(お{会|あ}いする)ことができて)、とてもうれしかったです。', 'Hôm trước được gặp lại Chan sau thời gian dài, tôi rất vui.'],
          ['s4', '{仕事|しごと}も@junchou([順調|じゅんちょう])に@susumu([進|すす]んで)いると@ukagau(うかがい)、@anshin({安心|あんしん})しました。', 'Nghe nói công việc cũng đang tiến triển thuận lợi, tôi thấy yên tâm.'],
          ['s5', 'また、ソナちゃんがかわいい@shougakusei({小学生|しょうがくせい})になっていて@bikkuri(びっくり)しました。', 'Ngoài ra, bé Sona đã thành cô học sinh tiểu học đáng yêu, làm tôi bất ngờ.']
        ] },
        { t: 'p', s: [
          ['s6', '@sate(さて)、»r1(その{時|とき})に@ohanashi(お{話|はな}しした)«r2({本|ほん})を@beppin([別便|べつびん])※2で@okuru(お{送|おく}りしました)。', 'À, cuốn sách tôi đã nhắc đến lúc đó, tôi đã gửi riêng cho bạn rồi.'],
          ['s7', '»r2(これ)は、{私|わたし}にはもう@hitsuyou([必要|ひつよう])ないので、@sashiageru(さしあげます)。', 'Cuốn này tôi không cần nữa nên xin tặng bạn.'],
          ['s8', 'どうぞ@uketoru([受|う]け[取|と]って)ください。', 'Xin hãy nhận cho.'],
          ['s9', 'チャンさんのお{仕事|しごと}の@yakunitatsu([役|やく]に{立|た}てば)うれしいです。', 'Nếu nó có ích cho công việc của bạn thì tôi rất vui.']
        ] },
        { t: 'p', s: [
          ['s10', 'これから[寒|さむ]くなってきますが、どうぞお{体|からだ}にお@kiwotsukeru({気|き}をつけて)お@sugosu([過|す]ごし)ください。', 'Sắp tới trời sẽ lạnh dần, xin hãy giữ gìn sức khỏe.']
        ] },
        { t: 'sign', s: [
          ['e1', '@keigu([敬具|けいぐ])', 'Kính thư'],
          ['e2', '二〇一四年十月二十五日', 'Ngày 25 tháng 10 năm 2014'],
          ['e3', '[高木|たかぎ]まなみ', 'Takagi Manami']
        ] },
        { t: 'lines', s: [['e4', 'チャン・ジユン@sama([様|さま])', 'Kính gửi: Chan Jiyun']] }
      ],
      notes: [
        '（注1）[紅葉|こうよう]：{秋|あき}になって{木|き}の[葉|は]が{赤|あか}くなること',
        '（注2）[別便|べつびん]：{別|べつ}に{送|おく}ったもの'
      ],
      refs: {
        r1: 'その時 (lúc đó) = lần hai người gặp nhau hôm trước (câu 3).',
        r2: 'これ = cuốn sách đã nhắc đến lúc gặp nhau và vừa được gửi đi (câu 6).'
      },
      question: ['q', 'この{手紙|てがみ}の@naiyou([内容|ないよう])について、{正|ただ}しいのはどれか。', 'Về nội dung bức thư này, điều nào đúng?'],
      options: [
        ['[高木|たかぎ]さんはチャンさんに、{自分|じぶん}の{本|ほん}を@ageru(あげる)と{言|い}っている。', 'Takagi nói sẽ tặng Chan cuốn sách của mình.', 'Đúng. さしあげます là khiêm nhường ngữ của あげます (tặng). Lý do: 私にはもう必要ない (tôi không cần nữa).'],
        ['[高木|たかぎ]さんはチャンさんに、{自分|じぶん}の{本|ほん}を@kasu([貸|か]して)あげると{言|い}っている。', 'Takagi nói sẽ cho Chan mượn cuốn sách.', 'Sai. Không phải cho mượn (貸す) mà là tặng hẳn, vì Takagi không cần cuốn sách nữa.'],
        ['[高木|たかぎ]さんはチャンさんの{子|こ}どもに、{本|ほん}を@uketoru([受|う]け[取|と]って)ほしいと{言|い}っている。', 'Takagi muốn con của Chan nhận cuốn sách.', 'Sai. Sách là để giúp ích cho CÔNG VIỆC của Chan (câu 9). Bé Sona chỉ được nhắc đến trong phần hỏi thăm.'],
        ['[高木|たかぎ]さんはチャンさんに、{本|ほん}を@uketoru([受|う]け[取|と]り)に{来|き}てほしいと{言|い}っている。', 'Takagi muốn Chan đến lấy cuốn sách.', 'Sai. Sách đã được gửi rồi (別便でお送りしました), Chan không cần đến lấy.']
      ],
      answer: 1,
      evidence: ['s6', 's7'],
      summary: 'Takagi viết thư cho Chan sau khi hai người gặp lại nhau. Takagi vui vì công việc của Chan thuận lợi và bất ngờ vì bé Sona đã lớn. Nội dung chính: Takagi đã gửi riêng cuốn sách từng nhắc đến lúc gặp, và tặng luôn vì mình không cần nữa, mong nó có ích cho công việc của Chan.',
      structure: [
        ['拝啓', 'Từ mở đầu thư trang trọng'],
        ['Đoạn 1', 'Chào hỏi theo mùa (lá đỏ mùa thu), hỏi thăm sức khỏe'],
        ['Đoạn 2', 'Nhắc lại lần gặp hôm trước, hỏi thăm công việc và con của Chan'],
        ['Đoạn 3', 'NỘI DUNG CHÍNH (sau さて): đã gửi sách, tặng luôn cho Chan'],
        ['Đoạn 4', 'Lời chúc cuối thư (giữ gìn sức khỏe)'],
        ['敬具', 'Từ kết thư → ngày viết → người gửi → người nhận']
      ],
      grammar: [
        ['お〜する', 'Khiêm nhường ngữ: hạ mình khi nói về hành động của mình.', 'お会いする・お話しする・お送りする'],
        ['〜てきました', 'Dần dần trở nên… (thay đổi đến hiện tại).', 'きれいな季節になってきました'],
        ['〜のことと思います', 'Cách nói lịch sự để đoán về tình trạng của người nhận.', 'お元気でお過ごしのことと思います'],
        ['〜とうかがう', 'Nghe nói rằng… (khiêm nhường của 〜と聞く).', '順調に進んでいるとうかがい'],
        ['〜ば、うれしいです', 'Nếu… thì tôi vui (bày tỏ mong muốn nhẹ nhàng).', '役に立てばうれしいです']
      ],
      tip: 'Thư trang trọng tiếng Nhật có khuôn cố định: 拝啓 → chào theo mùa → hỏi thăm → さて + nội dung chính → lời chúc → 敬具. Khi đọc, hãy tìm ngay đoạn sau さて để nắm mục đích của thư.'
    },

    /* ───────────── 問題16 ───────────── */
    {
      id: '16',
      kind: 'メモ',
      kindVi: 'Memo, ghi chú',
      style: 'memo',
      before: ['b', 'コピー{機|き}が@koshou([故障|こしょう])していたら、どうしますか。', 'Nếu máy photo bị hỏng, bạn sẽ làm gì?'],
      lead: ['l', '@shokuba([職場|しょくば])で@kopiwotoru(コピーを[取|と]ろう)としたら、コピー{機|き}に@ika([以下|いか])のようなメモが@haru([貼|は]って)あった。', 'Khi định photo ở chỗ làm, tôi thấy trên máy photo có dán tờ memo như dưới đây.'],
      blocks: [
        { t: 'title', s: [['s1', 'このコピー{機|き}は@koshou([故障|こしょう]){中|ちゅう}です。', 'Máy photo này đang bị hỏng.']] },
        { t: 'lines', s: [
          ['s2', '@shuuri([修理|しゅうり])の{人|ひと}が11{時|じ}ごろ{来|き}ます。', 'Thợ sửa sẽ đến khoảng 11 giờ.'],
          ['s3', '@shuuri([修理|しゅうり])が@mondainaku({問題|もんだい}なく){終|お}われば、{午後|ごご}から{使|つか}えるようになります。', 'Nếu sửa xong suôn sẻ thì từ buổi chiều có thể dùng được.']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['s4', '@isogu(お[急|いそ]ぎ)の{方|かた}は、5@kai([階|かい])の@dai([第一|だいいち])@jimushitsu([事務室|じむしつ])か、5@kai([階|かい])の@dai([第二|だいに])@jimushitsu([事務室|じむしつ])か、4@kai([階|かい])の@shiryoujunbishitsu([資料準備室|しりょうじゅんびしつ])の»r1(もの)を@otsukai(お{使|つか}いください)。', 'Ai đang gấp xin hãy dùng máy ở Văn phòng số 1 tầng 5, Văn phòng số 2 tầng 5, hoặc Phòng chuẩn bị tài liệu tầng 4.'],
          ['s5', '@tadashi(ただし)、5@kai([階|かい])の@dai([第一|だいいち])@jimushitsu([事務室|じむしつ])は、@komu([混|こ]んでいる)ので、20@mai([枚|まい])@ijou([以上|いじょう])のコピーは@enryo(ご[遠慮|えんりょ]ください)。', 'Tuy nhiên, Văn phòng số 1 tầng 5 đông người, nên xin đừng photo từ 20 tờ trở lên.'],
          ['s6', '@dai([第二|だいに])@jimushitsu([事務室|じむしつ])のコピー{機|き}はA3サイズが@toreru([取|と]れません)。', 'Máy photo ở Văn phòng số 2 không photo được khổ A3.'],
          ['s7', 'また、4@kai([階|かい])の@shiryoujunbishitsu([資料準備室|しりょうじゅんびしつ])は@kagigakakaru(カギがかかって)いますので、@tonari(となり)の@shiryoukanrishitsu([資料管理室|しりょうかんりしつ])でカギを@kariru([借|か]りて)ください。', 'Ngoài ra, Phòng chuẩn bị tài liệu tầng 4 đang khóa, nên xin hãy mượn chìa khóa ở Phòng quản lý tài liệu bên cạnh.']
        ] }
      ],
      notes: [],
      refs: {
        r1: 'もの ở câu 4 = コピー機 (máy photo). 「資料準備室のもの」= máy photo của phòng chuẩn bị tài liệu.'
      },
      question: ['q', '{今|いま}、9{時|じ}45{分|ふん}で、10{時|じ}の@kaigi([会議|かいぎ])のためにA3サイズのコピーを40@mai([枚|まい]){取|と}りたい。@maniau([間|ま]に[合|あ]う)ようにコピーを{取|と}るには、どうすれば{一番|いちばん}よいか。', 'Bây giờ là 9 giờ 45, tôi muốn photo 40 tờ khổ A3 cho cuộc họp lúc 10 giờ. Để photo kịp giờ thì làm thế nào là tốt nhất?'],
      options: [
        ['5{階|かい}の[第一|だいいち][事務室|じむしつ]に{行|い}き、コピーを{取|と}る。', 'Lên Văn phòng số 1 tầng 5 để photo.', 'Sai. Ở Văn phòng số 1 không được photo từ 20 tờ trở lên (câu 5), mà bạn cần 40 tờ.'],
        ['5{階|かい}の[第二|だいに][事務室|じむしつ]に{行|い}き、コピーを{取|と}る。', 'Lên Văn phòng số 2 tầng 5 để photo.', 'Sai. Máy ở Văn phòng số 2 không photo được khổ A3 (câu 6).'],
        ['4{階|かい}の[資料管理室|しりょうかんりしつ]でカギを{借|か}り、[資料準備室|しりょうじゅんびしつ]でコピーを{取|と}る。', 'Mượn chìa khóa ở Phòng quản lý tài liệu tầng 4, rồi photo ở Phòng chuẩn bị tài liệu.', 'Đúng. Phòng chuẩn bị tài liệu không bị giới hạn số tờ hay khổ giấy, chỉ cần mượn chìa khóa ở phòng bên cạnh (câu 7).'],
        ['[修理|しゅうり]の{後|あと}、このコピー{機|き}を{使|つか}う。', 'Đợi sửa xong rồi dùng máy này.', 'Sai. Thợ đến lúc 11 giờ, chiều mới dùng được (câu 2–3), không kịp cuộc họp lúc 10 giờ.']
      ],
      answer: 3,
      evidence: ['s3', 's5', 's6', 's7'],
      summary: 'Memo dán trên máy photo báo máy đang hỏng: thợ đến lúc 11 giờ, chiều mới dùng lại được. Ai cần gấp có thể dùng máy ở 3 phòng khác, nhưng mỗi phòng có điều kiện riêng: Văn phòng số 1 không cho photo từ 20 tờ trở lên, Văn phòng số 2 không photo được A3, còn Phòng chuẩn bị tài liệu phải mượn chìa khóa ở phòng bên cạnh.',
      structure: [
        ['Tiêu đề', 'Máy đang hỏng'],
        ['Câu 2–3', 'Khi nào sửa xong (11 giờ thợ đến → chiều dùng được)'],
        ['Câu 4', 'Phương án thay thế: 3 phòng khác'],
        ['Câu 5–7', 'Điều kiện của từng phòng (ただし・また)']
      ],
      grammar: [
        ['〜ようとしたら', 'Khi định làm… thì (phát hiện ra điều gì đó).', 'コピーを取ろうとしたら'],
        ['〜てあった', 'Trạng thái còn lại do ai đó đã làm trước.', 'メモが貼ってあった = có tờ memo được dán sẵn'],
        ['〜ば', 'Điều kiện: nếu… thì…', '問題なく終われば、午後から使えるようになります'],
        ['お〜ください', 'Yêu cầu lịch sự (tôn kính ngữ).', 'お使いください'],
        ['ご遠慮ください', 'Cấm lịch sự: "xin vui lòng không…".', '20枚以上のコピーはご遠慮ください'],
        ['ただし', 'Thêm điều kiện hoặc ngoại lệ cho câu trước.', 'ただし、…20枚以上のコピーはご遠慮ください']
      ],
      tip: 'Với memo / thông báo có nhiều điều kiện, hãy lập bảng nhanh: phòng nào, giới hạn gì (số tờ, khổ giấy, giờ, chìa khóa), rồi đối chiếu với yêu cầu của câu hỏi (A3, 40 tờ, trước 10 giờ) để loại trừ từng đáp án.'
    },

    /* ───────────── 問題24 ───────────── */
    {
      id: '24',
      kind: 'お知らせ',
      kindVi: 'Thông báo',
      style: 'notice',
      before: ['b', 'コンサートなどに{行|い}くときにはどんなことに@kiwotsukeru({気|き}をつけ)ますか。', 'Khi đi xem hòa nhạc, bạn chú ý những điều gì?'],
      lead: null,
      blocks: [
        { t: 'title', s: [['t1', 'ミニ・コンサートの@annai(ご[案内|あんない])', 'Thư mời dự buổi hòa nhạc nhỏ']] },
        { t: 'p', s: [
          ['s1', '{秋|あき}も@hiichinichi({日一日|ひいちにち}と)@fukamaru([深|ふか]まり)、@kouyou([紅葉|こうよう])も@utsukushii([美|うつく]しく)なり{始|はじ}めました。', 'Mùa thu mỗi ngày một sâu hơn, lá đỏ cũng bắt đầu đẹp.']
        ] },
        { t: 'p', s: [
          ['s2', '{私|わたし}たち「さくら@gasshou([合唱|がっしょう])※1クラブ」は{日本|にほん}の{歌|うた}を@aisuru([愛|あい]する)@shakaijin({社会人|しゃかいじん})@konsei([混声|こんせい])※2@gasshou([合唱|がっしょう])のクラブです。', 'Chúng tôi, "CLB Hợp xướng Sakura", là câu lạc bộ hợp xướng nam nữ gồm những người đi làm yêu bài hát Nhật Bản.'],
          ['s3', '@konotabi(このたび){秋|あき}の{歌|うた}を@atsumeru({集|あつ}めて)、ミニ・コンサートを@kaisai([開催|かいさい])することになりました。', 'Lần này, chúng tôi sẽ tổ chức một buổi hòa nhạc nhỏ gồm các bài hát về mùa thu.']
        ] },
        { t: 'p', s: [
          ['s4', 'どうぞ{日本|にほん}の{歌|うた}の@utsukushii([美|うつく]しさ)をお@tanoshimu({楽|たの}しみ)ください。', 'Mời quý vị đến thưởng thức vẻ đẹp của những bài hát Nhật Bản.'],
          ['s5', 'ご@raijou({来場|らいじょう})をお{待|ま}ちしています。', 'Rất mong quý vị đến dự.']
        ] },
        { t: 'right', s: [
          ['d1', '@heisei([平成|へいせい])XX年　10月25日', 'Ngày 25 tháng 10 năm Heisei XX'],
          ['d2', 'さくら@gasshou([合唱|がっしょう])クラブ@happyoukai([発表会|はっぴょうかい])@jikkouiin([実行委員|じっこういいん])', 'Ban tổ chức buổi biểu diễn – CLB Hợp xướng Sakura']
        ] },
        { t: 'info', s: [
          ['i1', '@nichiji({日時|にちじ})：11月12日（{土|ど}）', 'Ngày giờ: thứ Bảy, 12/11'],
          ['i2', '@kaijou([開場|かいじょう])15:00　@kaien([開演|かいえん])15:30', 'Mở cửa 15:00 – Bắt đầu biểu diễn 15:30'],
          ['i3', '@basho({場所|ばしょ})：○○@shimin([市民|しみん]ホール)', 'Địa điểm: Hội trường thành phố ○○'],
          ['i4', '@nyuujouryou([入場料|にゅうじょうりょう])：300{円|えん}', 'Phí vào cửa: 300 yên']
        ] },
        { t: 'sub', s: [['h1', '☆お{願|ねが}い☆', '☆ Lưu ý ☆']] },
        { t: 'list', s: [
          ['s6', '@jitensha({自転車|じてんしゃ})・{車|くるま}でのご@raijou({来場|らいじょう})は@enryo(ご[遠慮|えんりょ]ください)。', 'Xin vui lòng không đến bằng xe đạp hoặc ô tô.'],
          ['s7', '@jouenchuu([上演|じょうえん]{中|ちゅう})のフラッシュ@satsuei([撮影|さつえい])は@enryo(ご[遠慮|えんりょ]ください)。', 'Xin vui lòng không chụp ảnh có đèn flash trong lúc biểu diễn.'],
          ['s8', 'ビデオ@satsuei([撮影|さつえい])はビデオ@seki([席|せき])でお{願|ねが}いします。', 'Quay video xin thực hiện ở khu ghế dành cho quay video.'],
          ['s9', '{小|ちい}さい@okosama(お{子|こ}[様|さま])を@tsureru(お[連|つ]れ)の{方|かた}は、{他|ほか}のお[客様|きゃくさま]のご@meiwaku([迷惑|めいわく])にならないようにご@chuui({注意|ちゅうい})ください。', 'Quý vị đi cùng trẻ nhỏ xin chú ý để không làm phiền những khách khác.'],
          ['s10', '@keitai([携帯|けいたい]{電話|でんわ})@tou([等|とう])の@dengen([電源|でんげん])はお@kiru({切|き}り)ください。', 'Xin tắt nguồn điện thoại di động và các thiết bị tương tự.']
        ] },
        { t: 'sub', s: [['h2', '☆メンバー@boshuu([募集|ぼしゅう])☆　{私|わたし}たちと{一緒|いっしょ}に{歌|うた}いませんか？', '☆ Tuyển thành viên ☆ Bạn có muốn hát cùng chúng tôi không?']] },
        { t: 'lines', cls: 'indent', s: [
          ['s11', '@sanka({参加|さんか})ご@kibou([希望|きぼう])の{方|かた}は[山田|やまだ]（tel:090-9387-○○○○）までご{連絡|れんらく}ください。', 'Ai muốn tham gia xin liên hệ anh/chị Yamada (tel: 090-9387-○○○○).']
        ] }
      ],
      notes: [
        '（注1）[合唱|がっしょう]：{大|おお}ぜいで{歌|うた}うこと',
        '（注2）[混声|こんせい]：[男性|だんせい]と[女性|じょせい]の[声|こえ]の'
      ],
      refs: {},
      question: ['q', 'このコンサートで、@shitehaikenai(してはいけない)ことは{何|なに}か。', 'Ở buổi hòa nhạc này, điều gì KHÔNG được làm?'],
      options: [
        ['ビデオを@toru([撮|と]る)。', 'Quay video.', 'Được phép, nhưng phải quay ở khu ghế dành cho quay video (câu ビデオ撮影はビデオ席でお願いします).'],
        ['@shashin([写真|しゃしん])を@toru([撮|と]る)。', 'Chụp ảnh.', 'Chỉ cấm chụp có ĐÈN FLASH trong lúc biểu diễn. Chụp ảnh thông thường không bị cấm.'],
        ['{子|こ}どもと@issho({一緒|いっしょ}に){行|い}く。', 'Đi cùng trẻ em.', 'Được phép, chỉ cần chú ý không làm phiền khách khác.'],
        ['@keitai([携帯|けいたい]{電話|でんわ})でメールをする。', 'Nhắn tin bằng điện thoại di động.', 'Đúng. Thông báo yêu cầu TẮT NGUỒN điện thoại (電源はお切りください), nên không thể nhắn tin trong buổi hòa nhạc.']
      ],
      answer: 4,
      evidence: ['s7', 's8', 's9', 's10'],
      summary: 'CLB Hợp xướng Sakura (gồm những người đi làm, có cả giọng nam và nữ) mời mọi người đến buổi hòa nhạc nhỏ với các bài hát mùa thu, vào thứ Bảy 12/11 tại hội trường thành phố, vé 300 yên. Thông báo có 5 lưu ý cho khán giả và lời mời tham gia CLB.',
      structure: [
        ['Tiêu đề', 'ご案内 – thư mời'],
        ['Đoạn 1–3', 'Chào theo mùa, giới thiệu CLB, nội dung buổi hòa nhạc'],
        ['Phần thông tin', 'Ngày giờ, địa điểm, phí vào cửa'],
        ['☆お願い☆', 'NHỮNG ĐIỀU CẦN CHÚ Ý → nơi có đáp án'],
        ['☆メンバー募集☆', 'Tuyển thành viên mới']
      ],
      grammar: [
        ['〜ことになりました', 'Đã được quyết định là… (thông báo một quyết định).', 'ミニ・コンサートを開催することになりました'],
        ['ご遠慮ください', 'Cấm lịch sự: "xin vui lòng không…".', '自転車・車でのご来場はご遠慮ください'],
        ['お〜ください', 'Yêu cầu lịch sự.', '電源はお切りください・お楽しみください'],
        ['〜ないように', 'Để không…', 'ご迷惑にならないようにご注意ください'],
        ['〜始める', 'Bắt đầu…', '美しくなり始めました']
      ],
      tip: 'Câu hỏi "してはいけないこと" → tìm ngay phần お願い / 注意 và các mẫu cấm (ご遠慮ください、お切りください、〜ないように). Đọc kỹ PHẠM VI của lệnh cấm: chỉ cấm "chụp có flash" chứ không cấm mọi kiểu chụp ảnh.'
    }
  ]
};
