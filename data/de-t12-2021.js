/* Đề thi JLPT N3 tháng 12/2021 — Đọc hiểu: 問題4 (短文, câu 23–26) · 問題5 (中文, câu 27–32).
   Cú pháp đánh dấu: xem data/bai-1.js. Đáp án do giáo viên giải (đề không kèm đáp án). */
window.BAI = {
  id: 'de-t12-2021',
  title: 'Đề T12/2021',
  subtitle: 'JLPT N3 tháng 12/2021 · 短文 & 中文',

  vocab: {
    // 4-1
    marason: { w: 'マラソン大会', r: 'マラソンたいかい', hv: 'ĐẠI HỘI', vi: 'giải chạy marathon' },
    boshuu: { w: '募集', r: 'ぼしゅう', hv: 'MỘ TẬP', vi: 'tuyển' },
    undoujou: { w: '運動場', r: 'うんどうじょう', hv: 'VẬN ĐỘNG TRƯỜNG', vi: 'sân vận động' },
    kaijouannai: { w: '会場案内', r: 'かいじょうあんない', hv: 'HỘI TRƯỜNG ÁN NỘI', vi: 'hướng dẫn tại địa điểm' },
    kikan: { w: '期間', r: 'きかん', hv: 'KỲ GIAN', vi: 'thời hạn' },
    gutaiteki: { w: '具体的', r: 'ぐたいてき', hv: 'CỤ THỂ ĐÍCH', vi: 'cụ thể' },
    gejun: { w: '下旬', r: 'げじゅん', hv: 'HẠ TUẦN', vi: 'hạ tuần (10 ngày cuối tháng)' },
    yuusou: { w: '郵送', r: 'ゆうそう', hv: 'BƯU TỐNG', vi: 'gửi bưu điện' },
    oubo: { w: '応募', r: 'おうぼ', hv: 'ỨNG MỘ', vi: 'ứng tuyển, đăng ký' },
    setsumeikai: { w: '説明会', r: 'せつめいかい', hv: 'THUYẾT MINH HỘI', vi: 'buổi hướng dẫn' },
    kangei: { w: '歓迎する', r: 'かんげいする', hv: 'HOAN NGHÊNH', vi: 'hoan nghênh' },
    madoguchi: { w: '窓口', r: 'まどぐち', hv: 'SONG KHẨU', vi: 'quầy' },
    uketsuke: { w: '受付', r: 'うけつけ', hv: 'THỤ PHÓ', vi: 'tiếp nhận' },
    yakusho: { w: '市役所', r: 'しやくしょ', hv: 'THỊ DỊCH SỞ', vi: 'tòa thị chính' },
    // 4-2
    shimin: { w: '市民', r: 'しみん', hv: 'THỊ DÂN', vi: 'người dân thành phố' },
    chikara: { w: '力を合わせる', r: 'ちからをあわせる', hv: 'LỰC HỢP', vi: 'chung sức' },
    kisoku: { w: '規則', r: 'きそく', hv: 'QUY TẮC', vi: 'quy định' },
    kinshi: { w: '禁止する', r: 'きんしする', hv: 'CẤM CHỈ', vi: 'cấm' },
    igai: { w: '以外', r: 'いがい', hv: 'DĨ NGOẠI', vi: 'ngoài' },
    tabako: { w: 'たばこを吸う', r: 'たばこをすう', hv: 'HẤP', vi: 'hút thuốc' },
    shitei: { w: '指定', r: 'してい', hv: 'CHỈ ĐỊNH', vi: 'chỉ định' },
    // 4-3
    kabushikigaisha: { w: '株式会社', r: 'かぶしきがいしゃ', hv: 'CHU THỨC HỘI XÃ', vi: 'công ty cổ phần' },
    eigyoubu: { w: '営業部', r: 'えいぎょうぶ', hv: 'DOANH NGHIỆP BỘ', vi: 'phòng kinh doanh' },
    haikei: { w: '拝啓', r: 'はいけい', hv: 'BÁI KHẢI', vi: 'Kính gửi (mở đầu thư)' },
    osewa: { w: 'お世話になる', r: 'おせわになる', hv: 'THẾ THOẠI', vi: 'được giúp đỡ' },
    shinseihin: { w: '新製品', r: 'しんせいひん', hv: 'TÂN CHẾ PHẨM', vi: 'sản phẩm mới' },
    waga: { w: 'わが社', r: 'わがしゃ', hv: 'XÃ', vi: 'công ty chúng tôi' },
    sonota: { w: 'その他', r: 'そのた', hv: 'KỲ THA', vi: 'khác' },
    setsumeisho: { w: '説明書', r: 'せつめいしょ', hv: 'THUYẾT MINH THƯ', vi: 'sách hướng dẫn' },
    kakakuhyou: { w: '価格表', r: 'かかくひょう', hv: 'GIÁ CÁCH BIỂU', vi: 'bảng giá' },
    // 4-4
    inku: { w: 'インク', r: 'インク', hv: '', vi: 'mực' },
    yogosu: { w: '汚す', r: 'よごす', hv: 'Ô', vi: 'làm bẩn' },
    kotowaru: { w: '断る', r: 'ことわる', hv: 'ĐOẠN', vi: 'từ chối' },
    hikiukeru: { w: '引き受ける', r: 'ひきうける', hv: 'DẪN THỤ', vi: 'nhận (làm)' },
    soudan: { w: '相談', r: 'そうだん', hv: 'TƯƠNG ĐÀM', vi: 'trao đổi, hỏi ý kiến' },
    nedan: { w: '値段', r: 'ねだん', hv: 'TRỊ ĐOẠN', vi: 'giá' },
    tanomu: { w: '頼む', r: 'たのむ', hv: 'LẠI', vi: 'nhờ' },
    shikatanai: { w: '仕方ない', r: 'しかたない', hv: 'SĨ PHƯƠNG', vi: 'không còn cách nào khác' },
    // 5-1
    kossetsu: { w: '骨折する', r: 'こっせつする', hv: 'CỐT CHIẾT', vi: 'gãy xương' },
    ude: { w: '腕', r: 'うで', hv: 'OẢN', vi: 'cánh tay' },
    irai: { w: 'それ以来', r: 'それいらい', hv: 'DĨ LAI', vi: 'kể từ đó' },
    shokuyoku: { w: '食欲', r: 'しょくよく', hv: 'THỰC DỤC', vi: 'sự thèm ăn' },
    taijuu: { w: '体重', r: 'たいじゅう', hv: 'THỂ TRỌNG', vi: 'cân nặng' },
    kunren: { w: '訓練', r: 'くんれん', hv: 'HUẤN LUYỆN', vi: 'tập luyện, phục hồi' },
    sasou: { w: '誘う', r: 'さそう', hv: 'DỤ', vi: 'rủ' },
    tatta: { w: 'たった', r: 'たった', hv: '', vi: 'chỉ vỏn vẹn' },
    muri: { w: '無理をする', r: 'むりをする', hv: 'VÔ LÝ', vi: 'gắng quá sức' },
    nakama: { w: '仲間', r: 'なかま', hv: 'TRỌNG GIAN', vi: 'bạn bè, đồng đội' },
    hikidasu: { w: '引き出す', r: 'ひきだす', hv: 'DẪN XUẤT', vi: 'khơi dậy' },
    kachi: { w: '価値', r: 'かち', hv: 'GIÁ TRỊ', vi: 'giá trị' },
    kansha: { w: '感謝する', r: 'かんしゃする', hv: 'CẢM TẠ', vi: 'biết ơn' },
    kega: { w: '怪我', r: 'けが', hv: 'QUÁI NGÃ', vi: 'vết thương' },
    // 5-2
    katazukeru: { w: '片付ける', r: 'かたづける', hv: 'PHIẾN PHÓ', vi: 'dọn dẹp' },
    nayamu: { w: '悩む', r: 'なやむ', hv: 'NÃO', vi: 'phiền não' },
    seiri: { w: '整理', r: 'せいり', hv: 'CHỈNH LÝ', vi: 'sắp xếp' },
    heta: { w: '下手', r: 'へた', hv: 'HẠ THỦ', vi: 'kém, vụng' },
    kanban: { w: '看板', r: 'かんばん', hv: 'KHÁN BẢN', vi: 'biển hiệu' },
    tsui: { w: 'つい', r: 'つい', hv: '', vi: 'lỡ, bất giác' },
    saifu: { w: '財布', r: 'さいふ', hv: 'TÀI BỐ', vi: 'ví tiền' },
    afureru: { w: 'あふれる', r: 'あふれる', hv: '', vi: 'tràn ngập' },
    shimau: { w: 'しまう', r: 'しまう', hv: '', vi: 'cất' },
    akirameru: { w: 'あきらめる', r: 'あきらめる', hv: '', vi: 'từ bỏ' },
    tsugitsugi: { w: '次々と', r: 'つぎつぎと', hv: 'THỨ THỨ', vi: 'liên tiếp' },
    touzen: { w: '当然', r: 'とうぜん', hv: 'ĐƯƠNG NHIÊN', vi: 'đương nhiên' },
    chigainai: { w: '〜に違いない', r: 'にちがいない', hv: 'VI', vi: 'chắc chắn là…' }
  },

  problems: [
    {
      id: '4-1',
      srcNotes: ['Cuối tờ thông báo trong đề có thêm địa chỉ web và email của phòng Thể thao; bài lược bỏ vì không ảnh hưởng đến câu hỏi.'],
      kind: '短文・お知らせ',
      kindVi: 'Đoạn văn ngắn – thông báo tuyển tình nguyện viên',
      style: 'notice',
      before: null,
      lead: ['l', 'これは、@marason(マラソン{大会|たいかい})を[手伝|てつだ]ってくれる{人|ひと}を@boshuu([募集|ぼしゅう])するお{知|し}らせである。', 'Đây là thông báo tuyển người giúp đỡ giải marathon.'],
      blocks: [
        { t: 'title', s: [
          ['t1', '{第|だい}3{回|かい}[山川|やまかわ]{市|し}マラソン{大会|たいかい}', 'Giải marathon thành phố Yamakawa lần thứ 3'],
          ['t2', '{大会|たいかい}{当日|とうじつ}に[手伝|てつだ]ってくださる{方|かた}、{大|だい}[募集|ぼしゅう]！', 'Tuyển nhiều người giúp đỡ vào ngày thi đấu!']
        ] },
        { t: 'lines', s: [
          ['i1', '{日時|にちじ}：4{月|がつ}17{日|にち}（{土|ど}）{午前|ごぜん}7{時|じ}～{午後|ごご}3{時|じ}ごろ', 'Thời gian: 17/4 (thứ Bảy), 7 giờ sáng – khoảng 3 giờ chiều'],
          ['i2', '{場所|ばしょ}：[山川|やまかわ]{市民|しみん}@undoujou({運動場|うんどうじょう})', 'Địa điểm: sân vận động thành phố Yamakawa'],
          ['i3', '{内容|ないよう}：{当日|とうじつ}の{準備|じゅんび}や@kaijouannai({会場|かいじょう}{案内|あんない})など', 'Công việc: chuẩn bị trong ngày, hướng dẫn tại địa điểm…'],
          ['i4', '[募集|ぼしゅう]{人数|にんずう}：{約|やく}100{人|にん}', 'Số người tuyển: khoảng 100'],
          ['i5', '[募集|ぼしゅう]@kikan({期間|きかん})：1{月|がつ}8{日|か}（{金|きん}）～2{月|がつ}12{日|にち}（{金|きん}）', 'Thời hạn tuyển: 8/1 (thứ Sáu) – 12/2 (thứ Sáu)'],
          ['i6', 'お{願|ねが}いする@gutaiteki([具体的|ぐたいてき])な{内容|ないよう}は、3{月|がつ}@gejun([下旬|げじゅん])に@yuusou([郵送|ゆうそう])でお{知|し}らせいたします。', 'Nội dung công việc cụ thể sẽ được gửi qua bưu điện vào cuối tháng 3.']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['i7', '@oubo([応募|おうぼ])できる{方|かた}：', 'Người có thể đăng ký:'],
          ['i8', '・[山川|やまかわ]{市民|しみん}で18[歳|さい]{以上|いじょう}の{方|かた}', '・Người dân thành phố Yamakawa từ 18 tuổi trở lên'],
          ['i9', '・{大会|たいかい}{当日|とうじつ}の{午前|ごぜん}7{時|じ}からの@setsumeikai({説明会|せつめいかい})に{参加|さんか}できる{方|かた}', '・Người có thể tham gia buổi hướng dẫn từ 7 giờ sáng ngày thi đấu'],
          ['i10', '{特|とく}に、マラソン{大会|たいかい}を[手伝|てつだ]った{経験|けいけん}がある{方|かた}は@kangei([歓迎|かんげい])します。', 'Đặc biệt hoan nghênh người đã từng giúp giải marathon.'],
          ['i11', '[応募|おうぼ]{方法|ほうほう}：スポーツ{課|か}ホームページからお{願|ねが}いします。ホームページが{見|み}られない{方|かた}は、スポーツ{課|か}@madoguchi([窓口|まどぐち])でも@uketsuke({受付|うけつけ})をいたします。', 'Cách đăng ký: qua trang chủ phòng Thể thao. Ai không xem được trang chủ có thể đăng ký tại quầy phòng Thể thao.']
        ] },
        { t: 'right', s: [['sg', '[山川|やまかわ]@yakusho({市|し}{役所|やくしょ})スポーツ{課|か}マラソン{大会|たいかい}[係|かかり]', 'Bộ phận giải marathon, phòng Thể thao, tòa thị chính Yamakawa']] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '23',
        question: ['q1', 'お{知|し}らせの{内容|ないよう}に{合|あ}っているのはどれか。', 'Điều nào khớp với nội dung thông báo?'],
        options: [
          ['[応募|おうぼ]は、1{月|がつ}8{日|か}までにスポーツ{課|か}ホームページからをしなければならない。', 'Phải đăng ký qua trang chủ trước 8/1.', 'Sai. 8/1 là ngày BẮT ĐẦU nhận; ngoài trang chủ còn đăng ký tại quầy được.'],
          ['[応募|おうぼ]した{人|ひと}がどんなことを[手伝|てつだ]うかは、{当日|とうじつ}にならないとわからない。', 'Phải đến ngày thi mới biết sẽ giúp việc gì.', 'Sai. Nội dung cụ thể được gửi bưu điện cuối tháng 3 (i6).'],
          ['{大会|たいかい}{当日|とうじつ}の{朝|あさ}の{説明会|せつめいかい}に{行|い}けない{人|ひと}は[応募|おうぼ]できない。', 'Ai không dự được buổi hướng dẫn sáng ngày thi thì không đăng ký được.', 'Đúng. Điều kiện đăng ký: "説明会に参加できる方" (i9).'],
          ['マラソン{大会|たいかい}を[手伝|てつだ]ったことがある{人|ひと}だけが[応募|おうぼ]できる。', 'Chỉ người từng giúp giải marathon mới được đăng ký.', 'Sai. Đó chỉ là "hoan nghênh", không phải điều kiện.']
        ],
        answer: 3, evidence: ['i8', 'i9']
      }],
      summary: 'Thành phố Yamakawa tuyển khoảng 100 người giúp giải marathon ngày 17/4 (chuẩn bị, hướng dẫn). Nhận đăng ký 8/1–12/2 qua trang chủ hoặc tại quầy. Điều kiện: dân thành phố từ 18 tuổi, dự được buổi hướng dẫn 7 giờ sáng ngày thi. Ưu tiên người có kinh nghiệm. Nội dung cụ thể gửi bưu điện cuối tháng 3.',
      structure: [['Tiêu đề', 'Giải marathon + tuyển người'], ['Thông tin', 'Ngày giờ, địa điểm, công việc, số người, thời hạn'], ['Điều kiện', 'Ai được đăng ký (điều kiện bắt buộc) / ai được hoan nghênh'], ['Cách đăng ký', 'Trang chủ hoặc quầy']],
      grammar: [
        ['〜てくださる方', 'Người (vui lòng) làm…', '手伝ってくださる方'],
        ['お〜いたします', 'Khiêm nhường: (chúng tôi) làm…', '郵送でお知らせいたします'],
        ['〜できる方', 'Người có thể…', '説明会に参加できる方'],
        ['特に〜は歓迎します', 'Đặc biệt hoan nghênh…', '経験がある方は歓迎します']
      ],
      tip: 'Phân biệt ĐIỀU KIỆN BẮT BUỘC (応募できる方) với ĐIỀU ƯU TIÊN (歓迎します). "期間：1月8日～" là ngày bắt đầu, không phải hạn chót.'
    },

    {
      id: '4-2',
      kind: '短文・説明文',
      kindVi: 'Đoạn văn ngắn – quy định thành phố',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '[朝日|あさひ]{市|し}は、@shimin({市民|しみん}){全員|ぜんいん}が@chikara({力|ちから}を{合|あ}わせて){美|うつく}しい{町|まち}を{作|つく}り、{気持|きも}ちのいい{生活|せいかつ}が{送|おく}れるように、{新|あたら}しい@kisoku([規則|きそく])を{作|つく}った。', 'Thành phố Asahi đã đặt ra quy định mới để toàn thể người dân chung sức xây dựng thành phố đẹp và sống dễ chịu.'],
          ['s2', 'その[規則|きそく]では、{次|つぎ}の{三|みっ}つのことを@kinshi([禁止|きんし])している。', 'Quy định đó cấm 3 việc sau.']
        ] },
        { t: 'list', s: [
          ['r1', '①ごみ{箱|ばこ}などの{決|き}められた{場所|ばしょ}@igai({以外|いがい})にごみを{捨|す}てること', '① Vứt rác ngoài nơi quy định như thùng rác'],
          ['r2', '②{歩|ある}きながら@tabako(たばこを[吸|す]う)こと', '② Vừa đi vừa hút thuốc'],
          ['r3', '③@shitei([指定|してい])の{場所|ばしょ}{以外|いがい}に{自転車|じてんしゃ}をとめることである。', '③ Đỗ xe đạp ngoài nơi chỉ định.']
        ] },
        { t: 'p', s: [['s3', '{守|まも}らなかった{場合|ばあい}は、お{金|かね}を{払|はら}わされることもあるそうだ。', 'Nghe nói nếu không tuân thủ, có khi sẽ bị bắt nộp tiền phạt.']] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '24',
        question: ['q1', 'この[規則|きそく]について、{正|ただ}しいものはどれか。', 'Điều nào đúng về quy định này?'],
        options: [
          ['{自分|じぶん}の{家|いえ}{以外|いがい}では、ごみを{捨|す}ててはならない。', 'Ngoài nhà mình thì không được vứt rác.', 'Sai. Được vứt ở nơi quy định như thùng rác.'],
          ['{道|みち}を{歩|ある}きながら、たばこを[吸|す]ってはいけない。', 'Không được vừa đi đường vừa hút thuốc.', 'Đúng. Điều cấm ② (r2).'],
          ['{自転車|じてんしゃ}は、{決|き}められた{場所|ばしょ}{以外|いがい}{走|はし}ってはいけない。', 'Xe đạp không được chạy ngoài nơi quy định.', 'Sai. Cấm ĐỖ, không phải cấm chạy.'],
          ['[規則|きそく]を{守|まも}らない{人|ひと}は、{全員|ぜんいん}お{金|かね}を{払|はら}わなければならない。', 'Ai vi phạm đều phải nộp tiền.', 'Sai. "払わされることもある" = có khi bị phạt, không phải tất cả.']
        ],
        answer: 2, evidence: ['r2']
      }],
      summary: 'Thành phố Asahi ra quy định mới cấm 3 việc: vứt rác ngoài nơi quy định, vừa đi vừa hút thuốc, đỗ xe đạp ngoài nơi chỉ định. Vi phạm có thể bị phạt tiền.',
      structure: [['Câu 1–2', 'Mục đích của quy định'], ['Danh sách', '3 điều cấm'], ['Câu cuối', 'Hình phạt (〜こともある)']],
      grammar: [
        ['〜ように', 'Để…', '気持ちのいい生活が送れるように'],
        ['〜ながら', 'Vừa… vừa…', '歩きながらたばこを吸うこと'],
        ['〜させられる', 'Bị bắt phải…', 'お金を払わされる'],
        ['〜こともある', 'Cũng có khi…', '払わされることもあるそうだ']
      ],
      tip: 'Chú ý động từ chính xác (とめる ↔ 走る) và mức độ (こともある ↔ 全員〜なければならない). Lựa chọn sai thường đổi động từ hoặc phóng đại.'
    },

    {
      id: '4-3',
      kind: '短文・ビジネス文書',
      kindVi: 'Đoạn văn ngắn – thư công việc',
      style: 'letter',
      before: null, lead: null,
      blocks: [
        { t: 'right', s: [['d', '10{月|がつ}15{日|にち}', 'Ngày 15/10']] },
        { t: 'lines', s: [
          ['a1', '[田中|たなか]{電気|でんき}@kabushikigaisha([株式|かぶしき]{会社|がいしゃ})@eigyoubu([営業部|えいぎょうぶ])', 'Phòng kinh doanh, công ty cổ phần Điện Tanaka'],
          ['a2', '[青山|あおやま]{一郎|いちろう}[様|さま]', 'Kính gửi Ngài Aoyama Ichiro']
        ] },
        { t: 'right', s: [
          ['f1', '[鈴木|すずき]{電気|でんき}{工業|こうぎょう}[株式|かぶしき]{会社|がいしゃ}', 'Công ty cổ phần Công nghiệp điện Suzuki'],
          ['f2', '[営業|えいぎょう]{第二|だいに}{課|か}　{山本|やまもと}[和男|かずお]', 'Phòng kinh doanh số 2, Yamamoto Kazuo']
        ] },
        { t: 'lines', s: [['h', '@haikei([拝啓|はいけい])', 'Kính gửi']] },
        { t: 'p', s: [
          ['s1', 'いつも@osewa(お[世話|せわ]になって)おります。', 'Cảm ơn Ngài luôn quan tâm giúp đỡ.'],
          ['s2', '[先日|せんじつ]は@waga(わが{社|しゃ})の@shinseihin({新|しん}[製品|せいひん]){説明会|せつめいかい}にご{参加|さんか}くださいまして、ありがとうございました。', 'Cảm ơn Ngài hôm trước đã tham dự buổi giới thiệu sản phẩm mới của công ty chúng tôi.'],
          ['s3', '@sonota(その{他|た})の[製品|せいひん]についての{説明|せつめい}を、ということでしたので、パンフレットと@setsumeisho({説明書|せつめいしょ})、@kakakuhyou([価格|かかく]{表|ひょう})をお{送|おく}りいたします。', 'Vì Ngài có nói muốn được giới thiệu về các sản phẩm khác, chúng tôi xin gửi tờ giới thiệu, sách hướng dẫn và bảng giá.'],
          ['s4', 'よろしくお{願|ねが}いいたします。', 'Rất mong được Ngài quan tâm.']
        ] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '25',
        question: ['q1', '{山本|やまもと}さんがしたことはどれか。', 'Yamamoto đã làm gì?'],
        options: [
          ['[田中|たなか]{電気|でんき}の{新|しん}[製品|せいひん]のパンフレットと{説明書|せつめいしょ}、[価格|かかく]{表|ひょう}を{送|おく}った。', 'Gửi tài liệu sản phẩm mới của Điện Tanaka.', 'Sai. Yamamoto làm ở Suzuki, gửi tài liệu của công ty mình.'],
          ['[鈴木|すずき]{電気|でんき}の{新|しん}[製品|せいひん]のパンフレットと{説明書|せつめいしょ}、[価格|かかく]{表|ひょう}を{送|おく}った。', 'Gửi tài liệu sản phẩm MỚI của Suzuki.', 'Sai. Sản phẩm mới đã giới thiệu ở buổi thuyết minh; lần này là "sản phẩm khác".'],
          ['[田中|たなか]{電気|でんき}の{新|しん}[製品|せいひん]{以外|いがい}のパンフレットと{説明書|せつめいしょ}、[価格|かかく]{表|ひょう}を{送|おく}った。', 'Gửi tài liệu sản phẩm khác của Điện Tanaka.', 'Sai. Không phải của Tanaka.'],
          ['[鈴木|すずき]{電気|でんき}の{新|しん}[製品|せいひん]{以外|いがい}のパンフレットと{説明書|せつめいしょ}、[価格|かかく]{表|ひょう}を{送|おく}った。', 'Gửi tài liệu các sản phẩm khác (ngoài sản phẩm mới) của Suzuki.', 'Đúng. わが社 = Suzuki; その他の製品 = sản phẩm ngoài sản phẩm mới (s2–s3).']
        ],
        answer: 4, evidence: ['s2', 's3']
      }],
      summary: 'Yamamoto (công ty Suzuki) viết thư cho Aoyama (công ty Tanaka), cảm ơn đã dự buổi giới thiệu sản phẩm mới của Suzuki, và gửi tờ giới thiệu, sách hướng dẫn, bảng giá các sản phẩm khác theo yêu cầu.',
      structure: [['Đầu thư', 'Ngày, người nhận (Tanaka), người gửi (Suzuki), 拝啓'], ['Thân', 'Cảm ơn tham dự → gửi tài liệu sản phẩm khác']],
      grammar: [
        ['お世話になっております', 'Câu chào trong thư công việc', 'いつもお世話になっております'],
        ['ご〜くださいまして', 'Vì đã (vui lòng)… (tôn kính)', 'ご参加くださいまして'],
        ['〜を、ということでした', 'Ngài có nói là muốn…', 'その他の製品についての説明を、ということでした'],
        ['お〜いたします', 'Khiêm nhường', 'お送りいたします']
      ],
      tip: 'Thư công việc: xác định rõ ai gửi (右下) – ai nhận (左上). "わが社" = công ty người viết. "その他" = ngoài thứ vừa nhắc (sản phẩm mới).'
    },

    {
      id: '4-4',
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '[先日|せんじつ]、{私|わたし}は{白|しろ}い{服|ふく}を@inku(インク)で@yogosu([汚|よご]して)しまった。', 'Hôm trước, tôi làm bẩn chiếc áo trắng vì dính mực.'],
          ['s2', '[近所|きんじょ]のクリーニング{店|てん}に{持|も}っていったら、この[汚|よご]れは{落|お}とせないと@kotowaru([断|ことわ]られて)しまった。', 'Mang ra tiệm giặt gần nhà thì bị từ chối vì vết này không tẩy được.'],
          ['s3', 'そこで、インターネットで{探|さが}すと、{家|いえ}からは{遠|とお}いが、@hikiukeru({引|ひ}き{受|う}けて)くれそうな{店|みせ}が{見|み}つかった。', 'Vì thế tôi tìm trên mạng, thấy một tiệm tuy xa nhà nhưng có vẻ sẽ nhận làm.'],
          ['s4', '{服|ふく}は[郵送|ゆうそう]しなければならないが、@soudan({相談|そうだん})のために{電話|でんわ}をしてみたら{落|お}とせそうだと{言|い}われたので、{送|おく}ってみることにした。', 'Phải gửi áo qua bưu điện, nhưng gọi điện hỏi thì họ nói có vẻ tẩy được, nên tôi quyết định gửi thử.'],
          ['s5', 'きれいになって{戻|もど}ってきたが、@nedan({値段|ねだん})が{高|たか}いので、この{店|みせ}に@tanomu([頼|たの]む)のは‹{今回|こんかい}のように@shikatanai({仕方|しかた}ない)とき›だけにしようと{思|おも}う。', 'Áo trở về sạch sẽ, nhưng giá đắt nên tôi định chỉ nhờ tiệm này những lúc không còn cách nào khác như lần này.']
        ] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '26',
        question: ['q1', '‹{今回|こんかい}のように{仕方|しかた}ないとき›とあるが、どのようなときか。', '"Những lúc không còn cách nào khác như lần này" là lúc nào?'],
        options: [
          ['[近所|きんじょ]の{店|みせ}に{行|い}く{時間|じかん}がないとき', 'Khi không có thời gian ra tiệm gần nhà.', 'Sai. Tác giả có mang áo ra tiệm gần nhà, chỉ là bị từ chối; không phải vì thiếu thời gian.'],
          ['[近所|きんじょ]の{店|みせ}に[断|ことわ]られたとき', 'Khi bị tiệm gần nhà từ chối.', 'Đúng. Lần này tác giả phải tìm tiệm xa vì tiệm gần nhà từ chối (s2–s3).'],
          ['{白|しろ}い{服|ふく}を[汚|よご]したとき', 'Khi làm bẩn áo trắng.', 'Sai. Làm bẩn áo trắng thì vẫn có thể nhờ tiệm gần nhà.'],
          ['あまりお{金|かね}がないとき', 'Khi không có nhiều tiền.', 'Sai. Ngược lại – tiệm này đắt.']
        ],
        answer: 2, evidence: ['s2', 's3', 's5']
      }],
      summary: 'Tác giả làm bẩn áo trắng vì mực; tiệm giặt gần nhà từ chối. Tìm được tiệm xa trên mạng, gửi bưu điện, áo sạch trở về nhưng đắt, nên chỉ nhờ tiệm đó khi không còn cách nào khác (bị tiệm gần nhà từ chối).',
      structure: [['Câu 1–2', 'Sự cố + bị từ chối'], ['Câu 3–4', 'Tìm tiệm khác (そこで)'], ['Câu 5', 'Kết quả + quyết định']],
      grammar: [
        ['〜たら（発見）', 'Khi… thì (kết quả)', '持っていったら…断られてしまった'],
        ['そこで', 'Vì thế (giải pháp)', 'そこで、インターネットで探すと'],
        ['〜そうな', 'Có vẻ sẽ…', '引き受けてくれそうな店'],
        ['〜ことにした', 'Đã quyết định…', '送ってみることにした'],
        ['〜ようにしようと思う', 'Định sẽ (cố gắng)…', '仕方ないときだけにしようと思う']
      ],
      tip: '"今回のように" → quay lại xem "lần này" vì sao phải dùng tiệm xa: nguyên nhân trực tiếp là bị tiệm gần nhà từ chối (断られた → そこで).'
    },

    {
      id: '5-1',
      srcNotes: ['Câu 29, lựa chọn 1 đề in 「生きる値段のある人間」 (値段 = giá tiền) – rõ ràng là lỗi in của 「生きる価値のある人間」 (người có giá trị để sống). Bài đã sửa.'],
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút về mẹ',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', 'スポーツクラブは{運動|うんどう}するために{行|い}くところだ。', 'Câu lạc bộ thể thao là nơi người ta đến để vận động.'],
          ['s2', 'しかし、{私|わたし}の{母|はは}にとっては、それ{以上|いじょう}の{場所|ばしょ}であった。', 'Nhưng với mẹ tôi, đó còn hơn thế.'],
          ['s3', '85[歳|さい]になる{母|はは}は、{今|いま}、スポーツクラブに{通|かよ}っている。', 'Mẹ tôi năm nay 85 tuổi, hiện đang đi câu lạc bộ thể thao.'],
          ['s4', '{実|じつ}は、{母|はは}は{半年|はんとし}{前|まえ}に{転|ころ}んで@ude([腕|うで])を@kossetsu([骨折|こっせつ])し、@irai(それ[以来|いらい])すっかり{元気|げんき}をなくしてしまっていた。', 'Thật ra nửa năm trước mẹ ngã gãy tay, từ đó hoàn toàn mất hết sức sống.'],
          ['s5', '@shokuyoku([食欲|しょくよく])が{落|お}ち、@taijuu({体重|たいじゅう})も{減|へ}った。', 'Mẹ ăn không ngon, cân nặng cũng giảm.'],
          ['s6', '[骨折|こっせつ]は3{週間|しゅうかん}で{治|なお}ったが、[腕|うで]を{動|うご}かす@kunren([訓練|くんれん])のための{病院|びょういん}へはあまり{行|い}きたがらなかった。', 'Chỗ gãy lành sau 3 tuần, nhưng mẹ không mấy muốn đến bệnh viện để tập vận động tay.']
        ] },
        { t: 'p', s: [
          ['s7', 'ところが、そんな{母|はは}がある{日|ひ}、{友達|ともだち}に@sasou([誘|さそ]われて){近|ちか}くのスポーツクラブに{通|かよ}い{始|はじ}めた。', 'Thế nhưng một ngày, mẹ được bạn rủ và bắt đầu đi câu lạc bộ thể thao gần nhà.'],
          ['s8', 'すると、@tatta(たった)1か{月|げつ}で{全|まった}く{違|ちが}う{人|ひと}のように{元気|げんき}になったのだ。', 'Thế là chỉ sau 1 tháng, mẹ khỏe khoắn như thành người khác.'],
          ['s9', '{病院|びょういん}でもスポーツクラブでも、@muri({無理|むり}をせずに)できるトレーニングを{一人|ひとり}{一人|ひとり}に{考|かんが}えてくれる。', 'Dù ở bệnh viện hay câu lạc bộ, người ta đều nghĩ ra bài tập vừa sức cho từng người.']
        ] },
        { t: 'p', s: [
          ['s10', 'しかし、{元気|げんき}な{若|わか}い{人|ひと}たちと{同|おな}じ{場所|ばしょ}で{運動|うんどう}したり、{同|おな}じくらいの{年|とし}の@nakama({仲間|なかま})と{一緒|いっしょ}に{頑張|がんば}ったりすることは、スポーツクラブだからできたのである。', 'Nhưng việc vận động cùng chỗ với những người trẻ khỏe mạnh, hay cùng cố gắng với bạn bè cùng tuổi, thì chỉ có ở câu lạc bộ mới làm được.'],
          ['s11', 'そして、»r1(それ)が{母|はは}の{生|い}きる{力|ちから}を@hikidasu({引|ひ}き{出|だ}して)くれたのだろう。', 'Và có lẽ chính điều đó đã khơi dậy sức sống của mẹ.'],
          ['s12', 'スポーツクラブは{運動|うんどう}するだけの{場所|ばしょ}ではない。', 'Câu lạc bộ thể thao không chỉ là nơi để vận động.'],
          ['s13', 'それ{以上|いじょう}の@kachi([価値|かち])があるのだ。', 'Nó có giá trị hơn thế.'],
          ['s14', '{私|わたし}は、{今|いま}、{母|はは}の{通|かよ}うスポーツクラブに{心|こころ}から@kansha([感謝|かんしゃ])している。', 'Giờ đây, tôi thật lòng biết ơn câu lạc bộ thể thao mẹ đang đi.']
        ] }
      ],
      notes: [],
      refs: { r1: 'それ = vận động cùng chỗ với người trẻ khỏe mạnh, cùng cố gắng với bạn bè cùng tuổi (câu trước).' },
      questions: [
        {
          label: '27',
          question: ['q1', '{母|はは}が{元気|げんき}をなくした{原因|げんいん}は{何|なに}か。', 'Nguyên nhân mẹ mất sức sống là gì?'],
          options: [
            ['[食欲|しょくよく]が{落|お}ちたから', 'Vì ăn không ngon.', 'Sai. Đây là KẾT QUẢ của việc mất sức sống.'],
            ['[体重|たいじゅう]が{減|へ}ったから', 'Vì giảm cân.', 'Sai. Giảm cân là KẾT QUẢ của việc mất sức sống (食欲が落ち、体重も減った), không phải nguyên nhân.'],
            ['[腕|うで]を[骨折|こっせつ]したから', 'Vì gãy tay.', 'Đúng. 「腕を骨折し、それ以来すっかり元気をなくしてしまっていた」 (s4).'],
            ['@kega([怪我|けが])が{治|なお}らないから', 'Vì vết thương không lành.', 'Sai. 3 tuần đã lành.']
          ],
          answer: 3, evidence: ['s4']
        },
        {
          label: '28',
          question: ['q2', '{母|はは}が{病院|びょういん}ではなく、スポーツクラブで{元気|げんき}になれたのはなぜか。', 'Vì sao mẹ khỏe lại ở câu lạc bộ chứ không phải bệnh viện?'],
          options: [
            ['{無理|むり}をせずにできるトレーニングを{自分|じぶん}{用|よう}に{作|つく}ってもらったから', 'Vì được thiết kế bài tập vừa sức riêng.', 'Sai. Bệnh viện cũng làm điều này (病院でもスポーツクラブでも).'],
            ['{若|わか}い{人|ひと}たちがいるところで{運動|うんどう}したり、{仲間|なかま}と{頑張|がんば}ったりできたから', 'Vì được vận động ở nơi có người trẻ và cùng cố gắng với bạn bè.', 'Đúng. 「スポーツクラブだからできた」 (s10).'],
            ['たった1か{月|げつ}で[効果|こうか]が{出|で}るようなトレーニングを{考|かんが}えてもらったから', 'Vì có bài tập hiệu quả sau 1 tháng.', 'Sai. "1 tháng" là thời gian mẹ khỏe lại, không phải đặc điểm của bài tập. Bài tập vừa sức thì bệnh viện cũng có.'],
            ['{元気|げんき}な{人|ひと}と{仲間|なかま}になったり、{若|わか}い{人|ひと}たちと{同|おな}じ{運動|うんどう}をしたりしたから', 'Vì làm bạn với người khỏe, tập cùng bài với người trẻ.', 'Sai. Bài nói "cùng CHỖ" với người trẻ, và bạn bè "cùng tuổi".']
          ],
          answer: 2, evidence: ['s9', 's10']
        },
        {
          label: '29',
          question: ['q3', 'この{文章|ぶんしょう}を{書|か}いた{人|ひと}は、スポーツクラブにはどんな{特別|とくべつ}な[価値|かち]があると{考|かんが}えているか。', 'Tác giả cho rằng câu lạc bộ có giá trị đặc biệt gì?'],
          options: [
            ['{自分|じぶん}は{生|い}きる[価値|かち]のある{人間|にんげん}だと{気|き}づかせてくれる。', 'Cho ta nhận ra mình là người đáng sống.', 'Sai. Bài không nói câu lạc bộ giúp nhận ra giá trị bản thân; giá trị được nêu là 「生きる力を引き出してくれた」.'],
            ['{運動|うんどう}{不足|ぶそく}にならないようにしてくれる。', 'Giúp không thiếu vận động.', 'Sai. Đó là chức năng "vận động" thông thường.'],
            ['けがを{早|はや}く{治|なお}す{方法|ほうほう}を{考|かんが}えてくれる。', 'Nghĩ cách chữa thương nhanh.', 'Sai. Vết gãy đã lành sau 3 tuần, trước khi mẹ đi câu lạc bộ.'],
            ['{生|い}きる{力|ちから}を{引|ひ}き{出|だ}してくれる。', 'Khơi dậy sức sống.', 'Đúng. 「それが母の生きる力を引き出してくれた…それ以上の価値がある」 (s11–s13).']
          ],
          answer: 4, evidence: ['s11', 's12', 's13']
        }
      ],
      summary: 'Mẹ tác giả 85 tuổi gãy tay nửa năm trước, từ đó mất hết sức sống, ăn kém, sụt cân, không muốn đi tập phục hồi. Được bạn rủ đi câu lạc bộ thể thao, chỉ 1 tháng mẹ khỏe hẳn. Bài tập vừa sức thì bệnh viện cũng có, nhưng vận động cùng người trẻ và cố gắng cùng bạn cùng tuổi thì chỉ ở câu lạc bộ – điều đó khơi dậy sức sống của mẹ. Tác giả biết ơn câu lạc bộ.',
      structure: [['Đoạn 1', 'Chủ đề (それ以上の場所) + mẹ mất sức sống vì gãy tay'], ['Đoạn 2', 'Đi câu lạc bộ → khỏe lại'], ['Đoạn 3', 'Lý do chỉ có ở câu lạc bộ → giá trị đặc biệt → biết ơn']],
      grammar: [
        ['〜にとっては', 'Đối với…', '私の母にとっては'],
        ['それ以来', 'Kể từ đó', 'それ以来すっかり元気をなくして'],
        ['〜たがらない', '(Người khác) không muốn…', 'あまり行きたがらなかった'],
        ['〜ずに', 'Mà không…', '無理をせずにできる'],
        ['〜だから〜できた', 'Chính vì là… nên mới…', 'スポーツクラブだからできたのである']
      ],
      tip: 'Câu hỏi "病院ではなく、スポーツクラブで" → tìm điều CHỈ câu lạc bộ có. Câu "病院でもスポーツクラブでも" cho biết điểm chung → loại lựa chọn đó.'
    },

    {
      id: '5-2',
      kind: '中文・意見文',
      kindVi: 'Đoạn văn trung bình – văn nêu ý kiến',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '「{部屋|へや}が@katazukeru({片付|かたづ}けられない)」と@nayamu([悩|なや]む){人|ひと}から{相談|そうだん}を{受|う}けることがある。', 'Tôi có khi nhận được lời tâm sự từ những người phiền lòng vì "không dọn dẹp được phòng".'],
          ['s2', '{詳|くわ}しく{話|はなし}を{聞|き}いてみると、@seiri([整理|せいり])が@heta({下手|へた})なのではなく、{買|か}い{物|もの}のしかたに{原因|げんいん}があることが{多|おお}い。', 'Nghe kỹ thì thường nguyên nhân không phải do kém sắp xếp, mà do cách mua sắm.'],
          ['s3', '「セール」や「[割引|わりびき]」の@kanban([看板|かんばん])を{見|み}つけると、{喜|よろこ}んで、@tsui(つい){店|みせ}に{入|はい}ってしまう。', 'Thấy biển "Sale" hay "Giảm giá" là mừng rỡ, bất giác bước vào cửa hàng.'],
          ['s4', 'そして、{安|やす}くなっているのを{見|み}ると、それが{必要|ひつよう}かどうか{深|ふか}く{考|かんが}えず、‹①@saifu([財布|さいふ])を{開|ひら}く›。', 'Rồi thấy hàng rẻ là chẳng suy nghĩ kỹ có cần hay không, cứ thế mở ví.'],
          ['s5', 'その{結果|けっか}、{部屋|へや}に{物|もの}が@afureru(あふれる)のだ。', 'Kết quả là phòng ngập đồ đạc.']
        ] },
        { t: 'p', s: [
          ['s6', 'このような{人|ひと}には、{次|つぎ}のような‹②アドバイス›をしている。', 'Với những người như vậy, tôi đưa ra lời khuyên sau.'],
          ['s7', '{買|か}う{前|まえ}に、まず、{必要|ひつよう}かどうかを{考|かんが}える。', 'Trước khi mua, trước hết hãy nghĩ xem có cần không.'],
          ['s8', '{必要|ひつよう}だと{思|おも}ったら、{次|つぎ}に、{同|おな}じような{物|もの}を{持|も}っていないかどうかを{考|かんが}える。', 'Nếu thấy cần, tiếp theo hãy nghĩ xem mình đã có thứ tương tự chưa.'],
          ['s9', '{持|も}っていなければ、{最後|さいご}に、それを@shimau(しまう){場所|ばしょ}があるかどうかを{考|かんが}える。', 'Nếu chưa có, cuối cùng hãy nghĩ xem có chỗ cất không.'],
          ['s10', '{場所|ばしょ}がなければ、@akirameru(あきらめる)。', 'Nếu không có chỗ thì từ bỏ.'],
          ['s11', 'そこまで{考|かんが}えて、{必要|ひつよう}だったら、{買|か}えばいい。', 'Suy nghĩ đến mức đó mà vẫn cần thì cứ mua.']
        ] },
        { t: 'p', s: [
          ['s12', '{安|やす}いからといって、{必要|ひつよう}のない{物|もの}やしまう{場所|ばしょ}のない{物|もの}を@tsugitsugi([次々|つぎつぎ]と){買|か}えば、{部屋|へや}が[片付|かたづ]かないのは@touzen([当然|とうぜん])だ。', 'Nếu chỉ vì rẻ mà liên tục mua đồ không cần hay không có chỗ cất, thì phòng không gọn là đương nhiên.'],
          ['s13', 'もうすぐ、あちこちのデパートでセールが{始|はじ}まるが、（　　）。', 'Sắp tới các cửa hàng bách hóa sẽ bắt đầu đợt giảm giá, (　　).']
        ] }
      ],
      notes: [], refs: {},
      questions: [
        {
          label: '30',
          question: ['q1', '‹①[財布|さいふ]を{開|ひら}く›とあるが、どうしてですか。', '"Mở ví" – vì sao?'],
          options: [
            ['まだ{部屋|へや}に{物|もの}を{入|い}れる{場所|ばしょ}があるから', 'Vì phòng vẫn còn chỗ để đồ.', 'Sai. Họ không hề nghĩ đến chỗ cất.'],
            ['{何|なに}も{買|か}わずに{店|みせ}を{出|で}るのは{悪|わる}いと{思|おも}うから', 'Vì thấy ngại ra về không mua gì.', 'Sai. Lý do bài nêu là thấy rẻ thì vui (喜んで), không có chuyện ngại với cửa hàng.'],
            ['{安|やす}い{値段|ねだん}がうれしくて{買|か}いたくなるから', 'Vì vui với giá rẻ nên muốn mua.', 'Đúng. Thấy sale "喜んで", thấy rẻ là mua không suy nghĩ (s3–s4).'],
            ['{自分|じぶん}にとって{必要|ひつよう}な{物|もの}@chigainai(に{違|ちが}いない)と{思|おも}うから', 'Vì nghĩ chắc chắn mình cần.', 'Sai. Họ "必要かどうか深く考えず".']
          ],
          answer: 3, evidence: ['s3', 's4']
        },
        {
          label: '31',
          question: ['q2', '{買|か}い{物|もの}についての‹②アドバイス›の{内容|ないよう}に{合|あ}っているものは、どれか。', 'Điều nào khớp với lời khuyên về mua sắm?'],
          options: [
            ['しまえる{場所|ばしょ}があったら、{同|おな}じような{物|もの}を{持|も}っていても、{買|か}えばいい。', 'Có chỗ cất thì dù đã có đồ tương tự vẫn mua.', 'Sai. Đã có đồ tương tự thì không mua.'],
            ['{必要|ひつよう}な{物|もの}だと{思|おも}ったら、いろいろなことを{考|かんが}えずに、すぐ{買|か}えばいい。', 'Thấy cần thì mua ngay không cần nghĩ.', 'Sai. Còn phải nghĩ thêm 2 bước.'],
            ['{必要|ひつよう}かどうか、{同|おな}じような{物|もの}がないか、しまう{場所|ばしょ}があるかを、よく{考|かんが}える。', 'Suy nghĩ kỹ: có cần không, đã có đồ tương tự chưa, có chỗ cất không.', 'Đúng. Đủ 3 bước: まず必要かどうか → 次に同じような物を持っていないか → 最後にしまう場所があるか (s7–s9).'],
            ['{似|に}た{物|もの}を{持|も}っていないか、しまう{場所|ばしょ}があるか、{本当|ほんとう}に{安|やす}いかを、よく{考|かんが}える。', 'Nghĩ: có đồ tương tự chưa, có chỗ cất không, có thật rẻ không.', 'Sai. Không có bước "thật sự rẻ không"; thiếu bước "có cần không".']
          ],
          answer: 3, evidence: ['s7', 's8', 's9']
        },
        {
          label: '32',
          question: ['q3', '（　　）に{入|い}れるのに、{最|もっと}もよいものはどれか。', 'Điền gì vào (　　) là phù hợp nhất?'],
          options: [
            ['{部屋|へや}の[整理|せいり]が{上手|じょうず}な{人|ひと}も、{買|か}い{物|もの}を{楽|たの}しもう', 'Người giỏi sắp xếp cũng hãy tận hưởng mua sắm.', 'Sai. Đối tượng của bài là người "không dọn được phòng", và bài không khuyến khích mua sắm.'],
            ['{買|か}い{物|もの}が{好|す}きな{人|ひと}は、[値段|ねだん]をよく{見|み}て{買|か}おう', 'Người thích mua sắm hãy xem kỹ giá.', 'Sai. Bài khuyên đừng chỉ nhìn giá.'],
            ['{安|やす}い{物|もの}を{買|か}いたい{人|ひと}は、{急|いそ}いで{店|みせ}に{行|い}こう', 'Ai muốn mua rẻ hãy nhanh chân đến cửa hàng.', 'Sai. Ngược với lời khuyên – bài cảnh báo đừng mua chỉ vì rẻ (安いからといって…).'],
            ['{部屋|へや}の[整理|せいり]に[悩|なや]んでいる{人|ひと}は、{気|き}をつけよう', 'Ai đang phiền vì phòng bừa bộn hãy cẩn thận.', 'Đúng. Đối tượng là người "片付けられない" (s1) và cảnh báo sale (s12–s13).']
          ],
          answer: 4, evidence: ['s1', 's12', 's13']
        }
      ],
      summary: 'Người không dọn được phòng thường không phải vì kém sắp xếp mà vì cách mua: thấy sale là vào, thấy rẻ là mua không suy nghĩ, nên phòng ngập đồ. Lời khuyên: trước khi mua hãy nghĩ (1) có cần không, (2) đã có đồ tương tự chưa, (3) có chỗ cất không – không có thì bỏ. Sắp đến mùa sale, ai đang khổ vì phòng bừa hãy cẩn thận.',
      structure: [['Đoạn 1', 'Vấn đề + nguyên nhân (cách mua sắm, ①)'], ['Đoạn 2', 'Lời khuyên 3 bước (②)'], ['Đoạn 3', 'Kết luận + lời nhắc ( )']],
      grammar: [
        ['〜のではなく', 'Không phải là… mà', '整理が下手なのではなく'],
        ['つい〜てしまう', 'Bất giác lỡ…', 'つい店に入ってしまう'],
        ['〜かどうか', 'Có… hay không', '必要かどうか深く考えず'],
        ['〜からといって', 'Chỉ vì… mà (không hẳn)', '安いからといって'],
        ['〜のは当然だ', '… là đương nhiên', '部屋が片付かないのは当然だ']
      ],
      tip: 'Câu điền cuối bài: kết hợp ĐỐI TƯỢNG của bài (người 片付けられない ở câu 1) với THÔNG ĐIỆP (cẩn thận khi sale). Lựa chọn khuyến khích mua sắm đều sai.'
    }
  ]
};
