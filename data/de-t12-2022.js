/* Đề thi JLPT N3 tháng 12/2022 — Đọc hiểu: 問題4 (短文, câu 23–26) · 問題5 (中文, câu 27–32).
   Cú pháp đánh dấu: xem data/bai-1.js. Đáp án do giáo viên giải (đề không kèm đáp án). */
window.BAI = {
  id: 'de-t12-2022',
  title: 'Đề T12/2022',
  subtitle: 'JLPT N3 tháng 12/2022 · 短文 & 中文',

  vocab: {
    // 4-1
    koopiiki: { w: 'コピー機', r: 'コピーき', hv: 'CƠ', vi: 'máy photocopy' },
    eigyouka: { w: '営業課', r: 'えいぎょうか', hv: 'DOANH NGHIỆP KHÓA', vi: 'phòng kinh doanh' },
    koshou: { w: '故障する', r: 'こしょうする', hv: 'CỐ CHƯỚNG', vi: 'hỏng hóc' },
    shuuri: { w: '修理', r: 'しゅうり', hv: 'TU LÝ', vi: 'sửa chữa' },
    isogu: { w: '急ぐ', r: 'いそぐ', hv: 'CẤP', vi: 'gấp, vội' },
    shorui: { w: '書類', r: 'しょるい', hv: 'THƯ LOẠI', vi: 'giấy tờ' },
    kaikeika: { w: '会計課', r: 'かいけいか', hv: 'HỘI KẾ KHÓA', vi: 'phòng kế toán' },
    shiyou: { w: '使用する', r: 'しようする', hv: 'SỬ DỤNG', vi: 'sử dụng' },
    // 4-2
    musume: { w: '娘', r: 'むすめ', hv: 'NƯƠNG', vi: 'con gái' },
    nageru: { w: '投げる', r: 'なげる', hv: 'ĐẦU', vi: 'ném' },
    bangumi: { w: '番組', r: 'ばんぐみ', hv: 'PHIÊN TỔ', vi: 'chương trình (TV, radio)' },
    toriageru: { w: '取り上げる', r: 'とりあげる', hv: 'THỦ THƯỢNG', vi: 'đề cập, đưa lên' },
    omosa: { w: '重さ', r: 'おもさ', hv: 'TRỌNG', vi: 'trọng lượng' },
    kamihikouki: { w: '紙飛行機', r: 'かみひこうき', hv: 'CHỈ PHI HÀNH CƠ', vi: 'máy bay giấy' },
    choudo: { w: 'ちょうど', r: 'ちょうど', hv: '', vi: 'vừa vặn' },
    chikara: { w: '力の入れ方', r: 'ちからのいれかた', hv: 'LỰC NHẬP PHƯƠNG', vi: 'cách dùng lực' },
    kurikaesu: { w: '繰り返す', r: 'くりかえす', hv: 'SÀO PHẢN', vi: 'lặp lại' },
    // 4-3
    kawa: { w: '革製', r: 'かわせい', hv: 'CÁCH CHẾ', vi: 'làm bằng da' },
    shinagire: { w: '品切れ', r: 'しなぎれ', hv: 'PHẨM THIẾT', vi: 'hết hàng' },
    chokuzen: { w: '直前', r: 'ちょくぜん', hv: 'TRỰC TIỀN', vi: 'ngay trước' },
    moushiwake: { w: '申し訳ございません', r: 'もうしわけございません', hv: 'THÂN DỊCH', vi: 'thành thật xin lỗi' },
    joujun: { w: '上旬', r: 'じょうじゅん', hv: 'THƯỢNG TUẦN', vi: 'thượng tuần (10 ngày đầu tháng)' },
    kibou: { w: '希望', r: 'きぼう', hv: 'HY VỌNG', vi: 'mong muốn' },
    kentou: { w: '検討する', r: 'けんとうする', hv: 'KIỂM THẢO', vi: 'cân nhắc' },
    senmonten: { w: '専門店', r: 'せんもんてん', hv: 'CHUYÊN MÔN ĐIẾM', vi: 'cửa hàng chuyên' },
    // 4-4
    haku: { w: '履く', r: 'はく', hv: 'LÝ', vi: 'đi (giày)' },
    chirashi: { w: 'ちらし', r: 'ちらし', hv: '', vi: 'tờ rơi' },
    waribikiken: { w: '割引券', r: 'わりびきけん', hv: 'CÁT DẪN KHOÁN', vi: 'phiếu giảm giá' },
    koukan: { w: '交換する', r: 'こうかんする', hv: 'GIAO HOÁN', vi: 'đổi' },
    kaishuu: { w: '回収する', r: 'かいしゅうする', hv: 'HỒI THU', vi: 'thu gom' },
    moyasu: { w: '燃やす', r: 'もやす', hv: 'NHIÊN', vi: 'đốt' },
    enerugii: { w: 'エネルギー', r: 'エネルギー', hv: '', vi: 'năng lượng' },
    kankyou: { w: '環境', r: 'かんきょう', hv: 'HOÀN CẢNH', vi: 'môi trường' },
    eikyou: { w: '影響', r: 'えいきょう', hv: 'ẢNH HƯỞNG', vi: 'ảnh hưởng' },
    // 5-1
    oshiire: { w: '押し入れ', r: 'おしいれ', hv: 'ÁP NHẬP', vi: 'tủ âm tường' },
    natsukashii: { w: '懐かしい', r: 'なつかしい', hv: 'HOÀI', vi: 'thân quen, gợi nhớ' },
    anaunsaa: { w: 'アナウンサー', r: 'アナウンサー', hv: '', vi: 'phát thanh viên' },
    tsui: { w: 'つい', r: 'つい', hv: '', vi: 'bất giác' },
    saishin: { w: '最新', r: 'さいしん', hv: 'TỐI TÂN', vi: 'mới nhất' },
    joukou: { w: '情報', r: 'じょうほう', hv: 'TÌNH BÁO', vi: 'thông tin' },
    mijika: { w: '身近', r: 'みぢか', hv: 'THÂN CẬN', vi: 'gần gũi' },
    touzen: { w: '当然', r: 'とうぜん', hv: 'ĐƯƠNG NHIÊN', vi: 'đương nhiên' },
    hatake: { w: '畑', r: 'はたけ', hv: '', vi: 'ruộng, vườn' },
    teniiru: { w: '手に入る', r: 'てにはいる', hv: 'THỦ NHẬP', vi: 'có được' },
    teema: { w: 'テーマ', r: 'テーマ', hv: '', vi: 'chủ đề' },
    // 5-2
    fuufu: { w: '夫婦', r: 'ふうふ', hv: 'PHU PHỤ', vi: 'vợ chồng' },
    inaka: { w: '田舎', r: 'いなか', hv: 'ĐIỀN XÁ', vi: 'nông thôn' },
    nougyou: { w: '農業', r: 'のうぎょう', hv: 'NÔNG NGHIỆP', vi: 'nông nghiệp' },
    setsumeikai: { w: '説明会', r: 'せつめいかい', hv: 'THUYẾT MINH HỘI', vi: 'buổi giới thiệu' },
    jinkou: { w: '人口', r: 'じんこう', hv: 'NHÂN KHẨU', vi: 'dân số' },
    choumin: { w: '町民', r: 'ちょうみん', hv: 'ĐINH DÂN', vi: 'người dân thị trấn' },
    boshuu: { w: '募集する', r: 'ぼしゅうする', hv: 'MỘ TẬP', vi: 'tuyển' },
    utsurisumu: { w: '移り住む', r: 'うつりすむ', hv: 'DI TRÚ', vi: 'chuyển đến sống' },
    kyoutsuuten: { w: '共通点', r: 'きょうつうてん', hv: 'CỘNG THÔNG ĐIỂM', vi: 'điểm chung' },
    akogareru: { w: 'あこがれる', r: 'あこがれる', hv: '', vi: 'khao khát, ngưỡng mộ' },
    taikutsu: { w: '退屈', r: 'たいくつ', hv: 'THOÁI KHUẤT', vi: 'nhàm chán' },
    tokai: { w: '都会', r: 'とかい', hv: 'ĐÔ HỘI', vi: 'thành phố lớn' },
    amai: { w: '考えが甘い', r: 'かんがえがあまい', hv: 'CAM', vi: 'suy nghĩ đơn giản, ngây thơ' },
    keikaku: { w: '計画を立てる', r: 'けいかくをたてる', hv: 'KẾ HOẠCH LẬP', vi: 'lập kế hoạch' },
    jikkou: { w: '実行する', r: 'じっこうする', hv: 'THỰC HÀNH', vi: 'thực hiện' },
    kitai: { w: '期待する', r: 'きたいする', hv: 'KỲ ĐÃI', vi: 'kỳ vọng' },
    fuman: { w: '不満', r: 'ふまん', hv: 'BẤT MÃN', vi: 'bất mãn' },
    shippairei: { w: '失敗例', r: 'しっぱいれい', hv: 'THẤT BẠI LỆ', vi: 'trường hợp thất bại' }
  },

  problems: [
    {
      id: '4-1',
      kind: '短文・お知らせ',
      kindVi: 'Đoạn văn ngắn – thông báo trong công ty',
      style: 'memo',
      before: null,
      lead: ['l', '（{会社|かいしゃ}で）@koopiiki(コピー{機|き})の{上|うえ}に、この{紙|かみ}が{置|お}いてある。', '(Ở công ty) Trên máy photocopy có đặt tờ giấy này.'],
      blocks: [
        { t: 'lines', s: [['s0', '@eigyouka([営業|えいぎょう]{課|か})の[皆|みな]さん', 'Gửi mọi người phòng kinh doanh']] },
        { t: 'p', s: [
          ['s1', '[営業|えいぎょう]{課|か}のコピー{機|き}は{今|いま}、@koshou([故障|こしょう])していて{使|つか}えません。', 'Máy photocopy của phòng kinh doanh hiện bị hỏng, không dùng được.'],
          ['s2', '@shuuri([修理|しゅうり])を[頼|たの]んでいますが、{明日|あした}の{午後|ごご}まで{来|こ}られないそうです。', 'Đã gọi sửa nhưng nghe nói đến chiều mai họ mới đến được.'],
          ['s3', '@isogu({急|いそ})いでないコピーは、{明日|あした}まで{待|ま}ってください。', 'Bản photo không gấp xin đợi đến mai.']
        ] },
        { t: 'p', s: [
          ['s4', '{今日中|きょうじゅう}にコピーしなければならない@shorui([書類|しょるい])がある{場合|ばあい}は、@kaikeika({会計|かいけい}{課|か})のコピー{機|き}を@shiyou({使用|しよう})してください。', 'Nếu có giấy tờ phải photo trong hôm nay, hãy dùng máy của phòng kế toán.'],
          ['s5', '50{枚|まい}{以上|いじょう}コピーをする{場合|ばあい}は、{先|さき}に{会計|かいけい}{課|か}に{連絡|れんらく}をしておく{必要|ひつよう}がありますので、コピーをする{前|まえ}に[中島|なかじま]に{知|し}らせてください。', 'Nếu photo từ 50 tờ trở lên, cần báo trước cho phòng kế toán, nên trước khi photo hãy báo cho Nakajima.']
        ] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '23',
        question: ['q1', '[営業|えいぎょう]{課|か}のホンさんは、{明日|あした}の{朝|あさ}の{会議|かいぎ}で{使|つか}う{資料|しりょう}を{今日中|きょうじゅう}に5{枚|まい}コピーしたいと{考|かんが}えている。どうしなければならないか。', 'Hong (phòng kinh doanh) muốn photo trong hôm nay 5 tờ tài liệu cho cuộc họp sáng mai. Phải làm gì?'],
        options: [
          ['[営業|えいぎょう]{課|か}でコピーをする。[中島|なかじま]さんに{言|い}う{必要|ひつよう}はない。', 'Photo ở phòng kinh doanh, không cần báo Nakajima.', 'Sai. Máy phòng kinh doanh đang hỏng.'],
          ['{会計|かいけい}{課|か}でコピーをする。[中島|なかじま]さんに{言|い}う{必要|ひつよう}はない。', 'Photo ở phòng kế toán, không cần báo Nakajima.', 'Đúng. Cần trong hôm nay → dùng máy phòng kế toán (s4); chỉ 5 tờ (< 50) → không cần báo (s5).'],
          ['[中島|なかじま]さんに{言|い}ってから、[営業|えいぎょう]{課|か}でコピーをする。', 'Báo Nakajima rồi photo ở phòng kinh doanh.', 'Sai. Máy hỏng.'],
          ['[中島|なかじま]さんに{言|い}ってから、{会計|かいけい}{課|か}でコピーをする。', 'Báo Nakajima rồi photo ở phòng kế toán.', 'Sai. Chỉ cần báo khi photo từ 50 tờ.']
        ],
        answer: 2, evidence: ['s1', 's4', 's5']
      }],
      summary: 'Máy photo phòng kinh doanh hỏng đến chiều mai. Việc không gấp thì đợi; việc cần trong hôm nay thì dùng máy phòng kế toán. Photo từ 50 tờ phải báo Nakajima trước.',
      structure: [['Đoạn 1', 'Máy hỏng, sửa chiều mai'], ['Đoạn 2', 'Trường hợp gấp → phòng kế toán; ≥ 50 tờ → báo Nakajima']],
      grammar: [
        ['〜ていて', 'Đang… nên', '故障していて使えません'],
        ['〜場合は', 'Trường hợp…', '書類がある場合は・50枚以上コピーをする場合は'],
        ['〜必要がありますので', 'Vì cần…', '連絡をしておく必要がありますので'],
        ['〜前に', 'Trước khi…', 'コピーをする前に']
      ],
      tip: 'Áp từng điều kiện vào tình huống: gấp (今日中) → phòng kế toán; số lượng (5 < 50) → không cần báo. Câu hỏi có số liệu luôn đối chiếu với ngưỡng trong bài.'
    },

    {
      id: '4-2',
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '6[歳|さい]の@musume([娘|むすめ])がボールを{上手|じょうず}に@nageru([投|な]げ)られるようになりたいと{言|い}う。', 'Con gái 6 tuổi của tôi nói muốn ném bóng giỏi.'],
          ['s2', '{私|わたし}は[娘|むすめ]の[投|な]げ{方|かた}の{悪|わる}い{点|てん}をいろいろと{説明|せつめい}して、{何回|なんかい}もボールを[投|な]げさせているが、[娘|むすめ]はなかなかうまくならない。', 'Tôi giải thích đủ điểm chưa tốt trong cách ném của con, cho con ném nhiều lần, nhưng con mãi không tiến bộ.']
        ] },
        { t: 'p', s: [
          ['s3', '{昨日|きのう}、あるテレビ@bangumi([番組|ばんぐみ])でボール[投|な]げについて@toriageru({取|と}り{上|あ}げて)いた。', 'Hôm qua, một chương trình TV nói về việc ném bóng.'],
          ['s4', '[番組|ばんぐみ]では、{子供|こども}に{大|おお}きさや@omosa({重|おも}さ)の{違|ちが}うさまざまなボールを[投|な]げさせたり、@kamihikouki({紙|かみ}{飛行機|ひこうき})を{飛|と}ばさせたりして、@choudo(ちょうど)いい@chikara({力|ちから}の{入|い}れ{方|かた})を{体|からだ}で{覚|おぼ}えさせていた。', 'Trong chương trình, người ta cho trẻ ném nhiều loại bóng khác nhau về kích cỡ, trọng lượng, cho phóng máy bay giấy… để trẻ dùng cơ thể ghi nhớ cách dùng lực vừa phải.'],
          ['s5', '[娘|むすめ]に{必要|ひつよう}なのは、»r1(これ)かもしれない。', 'Có lẽ thứ con gái tôi cần chính là điều này.'],
          ['s6', '{次|つぎ}は、このやり{方|かた}を[娘|むすめ]にやらせてみようと{思|おも}う。', 'Lần tới tôi định cho con thử cách này.']
        ] }
      ],
      notes: [],
      refs: { r1: 'これ = cho trẻ ném nhiều loại bóng, phóng máy bay giấy để cơ thể nhớ cách dùng lực vừa phải.' },
      questions: [{
        label: '24',
        question: ['q1', 'テレビ[番組|ばんぐみ]を{見|み}て、「{私|わたし}」は[娘|むすめ]のボール[投|な]げがうまくならないのは、なぜだと{思|おも}ったか。', 'Xem chương trình xong, "tôi" nghĩ vì sao con ném bóng mãi không giỏi?'],
        options: [
          ['{上手|じょうず}な[投|な]げ{方|かた}についての「{私|わたし}」の{説明|せつめい}が{下手|へた}だったから。', 'Vì "tôi" giải thích kém.', 'Sai. Vấn đề không phải giải thích giỏi hay dở.'],
          ['@kurikaesu({繰|く}り{返|かえ})し{同|おな}じ[投|な]げ{方|かた}で[投|な]げる{練習|れんしゅう}をさせていなかったから。', 'Vì không cho tập lặp lại cùng một cách ném.', 'Sai. Tác giả đã cho ném nhiều lần.'],
          ['{実際|じっさい}に「{私|わたし}」が{上手|じょうず}に[投|な]げているところを{見|み}せていなかったから。', 'Vì không cho con xem mình ném giỏi.', 'Sai. Bài không nói vậy.'],
          ['ちょうどいい{力|ちから}の{入|い}れ{方|かた}を{体|からだ}で{覚|おぼ}える{練習|れんしゅう}をさせていなかったから。', 'Vì không cho con tập để cơ thể nhớ cách dùng lực vừa phải.', 'Đúng. 「娘に必要なのは、これかもしれない」 (s4–s5).']
        ],
        answer: 4, evidence: ['s4', 's5']
      }],
      summary: 'Con gái 6 tuổi muốn ném bóng giỏi; tác giả giải thích lỗi và cho ném nhiều lần nhưng không tiến bộ. Xem TV thấy trẻ được cho ném nhiều loại bóng, phóng máy bay giấy để cơ thể nhớ cách dùng lực – tác giả nghĩ con cần điều đó và định thử.',
      structure: [['Đoạn 1', 'Cách dạy hiện tại (giải thích + ném nhiều lần) → không hiệu quả'], ['Đoạn 2', 'Cách trên TV → "これ" là điều con cần']],
      grammar: [
        ['〜ようになりたい', 'Muốn trở nên (có thể)…', '上手に投げられるようになりたい'],
        ['〜させる（使役）', 'Cho / bắt (ai) làm…', '投げさせている・覚えさせていた'],
        ['〜たり〜たりして', 'Làm những việc như… để', '投げさせたり、飛ばさせたりして'],
        ['〜かもしれない', 'Có lẽ…', '必要なのは、これかもしれない']
      ],
      tip: 'So sánh cách CŨ (giải thích bằng lời) với cách MỚI (cơ thể tự nhớ). Đáp án là điều cách cũ còn thiếu.'
    },

    {
      id: '4-3',
      kind: '短文・メール',
      kindVi: 'Đoạn văn ngắn – email cửa hàng',
      style: 'mail',
      before: null,
      lead: ['l', 'これは、ある{店|みせ}が{客|きゃく}の[寺坂|てらさか]さんに{書|か}いたメールである。', 'Đây là email một cửa hàng viết cho khách là chị Terasaka.'],
      blocks: [
        { t: 'lines', s: [['s0', '[寺坂|てらさか]ゆき[様|さま]', 'Kính gửi chị Terasaka Yuki']] },
        { t: 'p', s: [
          ['s1', 'いつもご{利用|りよう}いただき、ありがとうございます。', 'Cảm ơn chị luôn sử dụng dịch vụ.'],
          ['s2', '2{月|がつ}4{日|か}にいただいたご{注文|ちゅうもん}についてのご{連絡|れんらく}です。', 'Đây là liên lạc về đơn hàng chị đặt ngày 4/2.'],
          ['s3', '[寺坂|てらさか][様|さま]がホームページからご{注文|ちゅうもん}になった@kawa([革製|かわせい])[財布|さいふ]（{茶色|ちゃいろ}）ですが、@chokuzen([直前|ちょくぜん])の{電話|でんわ}{注文|ちゅうもん}で@shinagire({品切|しなぎ}れ)になっておりました。', 'Chiếc ví da (màu nâu) chị đặt trên trang web đã hết hàng do có đơn đặt qua điện thoại ngay trước đó.'],
          ['s4', '{大変|たいへん}@moushiwake([申|もう]し[訳|わけ]ございません)。', 'Chúng tôi thành thật xin lỗi.'],
          ['s5', 'お[届|とど]けできるのは3{月|がつ}@joujun([上旬|じょうじゅん])になってしまいますが、いかがいたしましょうか。', 'Sớm nhất phải đầu tháng 3 mới giao được, chị muốn thế nào ạ?'],
          ['s6', 'キャンセルもお{受|う}けいたしますので、ご@kibou([希望|きぼう])をお{聞|き}かせください。', 'Chúng tôi cũng nhận hủy đơn, xin chị cho biết mong muốn.']
        ] },
        { t: 'p', s: [
          ['s7', 'なお、{同|おな}じ[商品|しょうひん]の{違|ちが}う{色|いろ}でしたら、すぐにお{送|おく}りできます。', 'Ngoài ra, nếu là cùng mẫu khác màu thì có thể gửi ngay.'],
          ['s8', 'あわせてご@kentou([検討|けんとう])ください。', 'Mong chị cân nhắc thêm.']
        ] },
        { t: 'right', s: [['sg', '[財布|さいふ]@senmonten({専門店|せんもんてん})タキグチ　[広田|ひろた]', 'Cửa hàng chuyên ví Takiguchi – Hirota']] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '25',
        question: ['q1', 'このメールで{言|い}いたいこととして、{合|あ}っているのはどれか。', 'Điều email muốn nói là gì?'],
        options: [
          ['[商品|しょうひん]が[品切|しなぎ]れになったから、3{月|がつ}[上旬|じょうじゅん]に{送|おく}る。', 'Hết hàng nên sẽ gửi đầu tháng 3.', 'Sai. Cửa hàng hỏi ý khách, chưa quyết định gửi.'],
          ['[商品|しょうひん]が[品切|しなぎ]れになったから、3{月|がつ}[上旬|じょうじゅん]にもう{一度|いちど}{注文|ちゅうもん}してほしい。', 'Hết hàng nên mong khách đặt lại đầu tháng 3.', 'Sai. Không yêu cầu đặt lại.'],
          ['[商品|しょうひん]が[品切|しなぎ]れで、[届|とど]けるまでに{時間|じかん}がかかるから、どうしたいか{知|し}らせてほしい。', 'Hết hàng, cần thời gian mới giao được, mong khách cho biết muốn thế nào.', 'Đúng. 「いかがいたしましょうか」「ご希望をお聞かせください」 (s5–s6).'],
          ['{注文|ちゅうもん}と{違|ちが}う{色|いろ}の[商品|しょうひん]を{送|おく}ってしまったから、{正|ただ}しい{色|いろ}のものをすぐに{送|おく}る。', 'Gửi nhầm màu nên sẽ gửi đúng màu ngay.', 'Sai. Chưa gửi gì cả.']
        ],
        answer: 3, evidence: ['s5', 's6']
      }],
      summary: 'Cửa hàng báo chiếc ví da nâu chị Terasaka đặt ngày 4/2 đã hết hàng, đầu tháng 3 mới giao được; hỏi chị muốn chờ hay hủy. Nếu khác màu thì gửi ngay được.',
      structure: [['Mở đầu', 'Chào + chủ đề (đơn hàng 4/2)'], ['Thân', 'Hết hàng → xin lỗi → hỏi ý khách (chờ / hủy)'], ['なお', 'Phương án khác màu']],
      grammar: [
        ['ご〜になる', 'Tôn kính ngữ', 'ご注文になった'],
        ['〜ておりました', 'Đã… (khiêm nhường)', '品切れになっておりました'],
        ['いかがいたしましょうか', 'Chúng tôi nên làm thế nào ạ?', 'いかがいたしましょうか'],
        ['お聞かせください', 'Xin cho chúng tôi biết', 'ご希望をお聞かせください']
      ],
      tip: 'Email hỏi ý kiến khách: câu chốt là câu hỏi / yêu cầu phản hồi (いかがいたしましょうか、お聞かせください), không phải thông tin đơn thuần.'
    },

    {
      id: '4-4',
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{私|わたし}の{家|いえ}には、@haku([履|は]か)なくなった{古|ふる}い{靴|くつ}がたくさんある。', 'Nhà tôi có nhiều giày cũ không còn đi nữa.'],
          ['s2', '{捨|す}てようかと{思|おも}っていたとき、ある{靴屋|くつや}の@chirashi(ちらし)を{見|み}た。', 'Đang định vứt thì tôi thấy tờ rơi của một tiệm giày.'],
          ['s3', 'いらない{靴|くつ}を{店|みせ}に{持|も}っていけば、その{店|みせ}で{使|つか}える@waribikiken([割引券|わりびきけん])と@koukan([交換|こうかん])してくれるそうだ。', 'Nghe nói mang giày không dùng đến tiệm thì sẽ được đổi lấy phiếu giảm giá dùng tại tiệm.'],
          ['s4', '@kaishuu([回収|かいしゅう])した{靴|くつ}を@moyasu([燃|も]やす)ときに{出|で}る{熱|ねつ}が、{電気|でんき}を{作|つく}るための@enerugii(エネルギー)に{利用|りよう}できて、@kankyou([環境|かんきょう])にいいとも{書|か}かれていた。', 'Tờ rơi còn viết rằng nhiệt sinh ra khi đốt giày thu gom có thể dùng làm năng lượng phát điện, tốt cho môi trường.'],
          ['s5', '{私|わたし}{一人|ひとり}が{持|も}っていっても、[環境|かんきょう]にそんなに{大|おお}きい@eikyou([影響|えいきょう])はないと{思|おも}うが、{新|あたら}しい{靴|くつ}が{安|やす}く{買|か}えるなら、{古|ふる}い{靴|くつ}は{捨|す}てないで{店|みせ}に{持|も}っていこうと{思|おも}った。', 'Tôi nghĩ một mình tôi mang đi cũng chẳng ảnh hưởng lớn đến môi trường, nhưng nếu mua được giày mới rẻ thì tôi sẽ mang giày cũ đến tiệm thay vì vứt.']
        ] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '26',
        question: ['q1', '「{私|わたし}」が{古|ふる}い{靴|くつ}を{店|みせ}に{持|も}っていこうと{思|おも}った{理由|りゆう}の{中|なか}で、{最|もっと}も{大|おお}きいものはどれか。', 'Lý do lớn nhất khiến "tôi" định mang giày cũ đến tiệm là gì?'],
        options: [
          ['{古|ふる}い{靴|くつ}を[割引券|わりびきけん]と[交換|こうかん]して、{新|あたら}しい{靴|くつ}を{買|か}うときに{使|つか}いたいと{思|おも}ったから。', 'Muốn đổi lấy phiếu giảm giá để dùng khi mua giày mới.', 'Đúng. 「新しい靴が安く買えるなら…持っていこう」 (s5).'],
          ['{古|ふる}い{靴|くつ}を{売|う}ってお{金|かね}をもらい、そのお{金|かね}で{新|あたら}しい{靴|くつ}を{買|か}いたいと{思|おも}ったから。', 'Bán giày lấy tiền mua giày mới.', 'Sai. Đổi lấy phiếu giảm giá, không phải tiền.'],
          ['{古|ふる}い{靴|くつ}をきれいに{直|なお}してもらって、もう{一度|いちど}[履|は]きたいと{思|おも}ったから。', 'Muốn sửa lại giày cũ để đi tiếp.', 'Sai. Bài không nói vậy.'],
          ['{古|ふる}い{靴|くつ}を{利用|りよう}してもらって、[環境|かんきょう]をよくしたいと{思|おも}ったから。', 'Muốn giày cũ được tận dụng để cải thiện môi trường.', 'Sai. Tác giả nghĩ một mình mình thì không ảnh hưởng lớn – đó không phải lý do chính.']
        ],
        answer: 1, evidence: ['s3', 's5']
      }],
      summary: 'Tác giả có nhiều giày cũ định vứt, thấy tờ rơi tiệm giày: mang giày cũ đến sẽ được đổi phiếu giảm giá, giày thu gom đốt lấy nhiệt phát điện, tốt cho môi trường. Tác giả nghĩ mình mình thì chẳng ảnh hưởng mấy tới môi trường, nhưng mua được giày mới rẻ nên sẽ mang đi.',
      structure: [['Câu 1–2', 'Tình huống'], ['Câu 3–4', 'Nội dung tờ rơi: phiếu giảm giá + môi trường'], ['Câu 5', '…が、…なら → lý do chính']],
      grammar: [
        ['〜ようかと思う', 'Định… không biết', '捨てようかと思っていた'],
        ['〜ば、〜てくれる', 'Nếu… thì (họ) sẽ…', '持っていけば…交換してくれる'],
        ['〜ても', 'Dù…', '私一人が持っていっても'],
        ['〜が、〜なら', '…nhưng nếu… thì', '影響はないと思うが、新しい靴が安く買えるなら']
      ],
      tip: 'Mẫu "Aと思うが、Bなら〜" → A là điều tác giả xem nhẹ, B mới là lý do thật. Lý do "lớn nhất" luôn nằm sau "が".'
    },

    {
      id: '5-1',
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút về radio',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '[先日|せんじつ]、@oshiire([押|お]し{入|い}れ)から{父|ちち}の{古|ふる}いラジオが{出|で}てきた。', 'Hôm trước, chiếc radio cũ của bố lòi ra từ trong tủ âm tường.'],
          ['s2', 'スイッチを{入|い}れてみたら、‹①@natsukashii([懐|なつ]かしい){声|こえ}›が{流|なが}れてきた。', 'Bật thử thì vang lên một giọng nói thân quen.'],
          ['s3', '{高校生|こうこうせい}のころ、{大好|だいす}きだったラジオの{音楽|おんがく}[番組|ばんぐみ]の@anaunsaa(アナウンサー)だった。', 'Đó là phát thanh viên của chương trình âm nhạc trên radio mà tôi rất thích hồi cấp ba.'],
          ['s4', '{私|わたし}は@tsui(つい)[番組|ばんぐみ]を{聞|き}き{続|つづ}けてしまった。', 'Tôi bất giác nghe chương trình mãi.']
        ] },
        { t: 'p', s: [
          ['s5', 'あのころ{私|わたし}はよくラジオを{聞|き}いていた。', 'Hồi đó tôi hay nghe radio.'],
          ['s6', 'ラジオのおかげで、{勉強|べんきょう}をしながらでも、ニュースや@saishin([最新|さいしん])の{音楽|おんがく}などさまざまな@joukou({情報|じょうほう})を{知|し}ることができた。', 'Nhờ radio, dù đang học bài tôi vẫn biết được đủ loại thông tin như tin tức, nhạc mới nhất.'],
          ['s7', '{今|いま}{考|かんが}えると、{私|わたし}にとってラジオはテレビよりも@mijika([身近|みぢか])で{便利|べんり}なものだった。', 'Giờ nghĩ lại, với tôi radio gần gũi và tiện hơn cả tivi.']
        ] },
        { t: 'p', s: [
          ['s8', '{今|いま}はラジオを{聞|き}く{人|ひと}が{減|へ}っているそうだ。', 'Nghe nói bây giờ người nghe radio đang giảm.'],
          ['s9', 'インターネットなどで、{好|す}きなときに{知|し}りたいニュースが{見|み}られるし、{聞|き}きたい{音楽|おんがく}も{聞|き}けるようになったのだから、@touzen([当然|とうぜん])だ。', 'Qua internet, muốn lúc nào cũng xem được tin cần biết, nghe được nhạc muốn nghe, nên điều đó là đương nhiên.']
        ] },
        { t: 'p', s: [
          ['s10', 'しかし、{考|かんが}えてみれば、{車|くるま}を{運転|うんてん}する{人|ひと}や@hatake([畑|はたけ])で{仕事|しごと}をする{人|ひと}などは、{今|いま}でもよくラジオを{聞|き}いている。', 'Nhưng nghĩ kỹ, người lái xe hay người làm ruộng bây giờ vẫn hay nghe radio.'],
          ['s11', 'ほかのことをしながらでも、さまざまな{情報|じょうほう}が@teniiru({手|て}に{入|はい}る)というラジオにしかない{良|よ}さ、{便利|べんり}さがあるのだ。', 'Radio có cái hay, cái tiện chỉ riêng nó có: vừa làm việc khác vẫn nhận được đủ loại thông tin.'],
          ['s12', '{私|わたし}も{掃除|そうじ}や{料理|りょうり}をするようなときには、‹②また、ラジオを{聞|き}こうと{思|おも}った›。', 'Tôi nghĩ những lúc dọn dẹp hay nấu ăn, mình sẽ lại nghe radio.']
        ] }
      ],
      notes: [], refs: {},
      questions: [
        {
          label: '27',
          question: ['q1', '‹①[懐|なつ]かしい{声|こえ}›とあるが、{何|なに}か。', '"Giọng nói thân quen" là gì?'],
          options: [
            ['「{私|わたし}」が{高校生|こうこうせい}のころの{父|ちち}の{声|こえ}。', 'Giọng bố hồi "tôi" học cấp ba.', 'Sai. Radio của bố, nhưng giọng là của phát thanh viên.'],
            ['「{私|わたし}」{高校生|こうこうせい}のころの{自分|じぶん}の{声|こえ}。', 'Giọng của chính mình hồi cấp ba.', 'Sai.'],
            ['「{私|わたし}」が{高校生|こうこうせい}のころ{大好|だいす}きだった{歌手|かしゅ}の{声|こえ}。', 'Giọng ca sĩ yêu thích hồi cấp ba.', 'Sai. Chương trình âm nhạc, nhưng người nói là phát thanh viên.'],
            ['「{私|わたし}」が{高校生|こうこうせい}のころ{聞|き}いていたアナウンサーの{声|こえ}。', 'Giọng phát thanh viên "tôi" hay nghe hồi cấp ba.', 'Đúng. (s3).']
          ],
          answer: 4, evidence: ['s3']
        },
        {
          label: '28',
          question: ['q2', '‹②また、ラジオを{聞|き}こうと{思|おも}った›のはどうしてか。', '"Sẽ lại nghe radio" – vì sao?'],
          options: [
            ['ラジオは、テレビより{小|ちい}さくて[身近|みぢか]に{置|お}くことができるから', 'Radio nhỏ hơn tivi, để gần được.', 'Sai. "身近" ở đây là gần gũi trong đời sống, không phải kích cỡ.'],
            ['ラジオは、インターネットより{多|おお}くのことを{教|おし}えてくれるから', 'Radio cho biết nhiều hơn internet.', 'Sai. Bài không so sánh vậy.'],
            ['ラジオは、{新|あたら}しいことだけでなく{古|ふる}いことも{伝|つた}えてくれるから', 'Radio truyền cả chuyện mới lẫn cũ.', 'Sai.'],
            ['ラジオは、{何|なに}かをしながらでも、いろいろなことを{知|し}ることができるから', 'Với radio, vừa làm việc khác vẫn biết được nhiều thứ.', 'Đúng. 「ほかのことをしながらでも、さまざまな情報が手に入る」 (s11).']
          ],
          answer: 4, evidence: ['s11', 's12']
        },
        {
          label: '29',
          question: ['q3', 'この{文章|ぶんしょう}の@teema(テーマ)は{何|なに}か。', 'Chủ đề của đoạn văn là gì?'],
          options: [
            ['ラジオ[番組|ばんぐみ]の{楽|たの}しさ。', 'Niềm vui của chương trình radio.', 'Sai. Chỉ là mở đầu.'],
            ['ラジオの{良|よ}さ。', 'Cái hay của radio.', 'Đúng. Bài nhấn mạnh 「ラジオにしかない良さ、便利さ」.'],
            ['ラジオの{歴史|れきし}の{長|なが}さ。', 'Lịch sử lâu đời của radio.', 'Sai.'],
            ['ラジオの{使|つか}い{方|かた}の[工夫|くふう]。', 'Mẹo dùng radio.', 'Sai.']
          ],
          answer: 2, evidence: ['s7', 's11']
        }
      ],
      summary: 'Tác giả tìm thấy radio cũ của bố, bật lên nghe giọng phát thanh viên chương trình yêu thích hồi cấp ba. Hồi đó nhờ radio vừa học vừa biết tin tức, nhạc mới – gần gũi và tiện hơn tivi. Nay người nghe radio giảm vì có internet, nhưng người lái xe, làm ruộng vẫn nghe vì radio có cái hay riêng: vừa làm việc khác vẫn nhận thông tin. Tác giả định nghe lại khi dọn dẹp, nấu ăn.',
      structure: [['Đoạn 1', 'Tìm thấy radio, giọng thân quen (①)'], ['Đoạn 2', 'Kỷ niệm: radio tiện lợi'], ['Đoạn 3', 'Hiện nay người nghe giảm'], ['Đoạn 4', 'しかし: cái hay riêng → sẽ nghe lại (②)']],
      grammar: [
        ['〜てみたら', 'Thử… thì', 'スイッチを入れてみたら'],
        ['つい〜てしまう', 'Bất giác…', 'つい番組を聞き続けてしまった'],
        ['〜おかげで', 'Nhờ…', 'ラジオのおかげで'],
        ['〜のだから、当然だ', 'Vì… nên đương nhiên', '聞けるようになったのだから、当然だ'],
        ['〜にしかない', 'Chỉ… mới có', 'ラジオにしかない良さ']
      ],
      tip: 'Chủ đề (テーマ) ≠ chi tiết mở đầu. Bài tùy bút mở bằng kỷ niệm, rồi chuyển sang nhận định (しかし…良さ、便利さがあるのだ) – đó là chủ đề.'
    },

    {
      id: '5-2',
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [['s1', '{私|わたし}たち@fuufu([夫婦|ふうふ])の{夢|ゆめ}は、@inaka([田舎|いなか])に{引|ひ}っ{越|こ}して@nougyou([農業|のうぎょう])を{始|はじ}めることです。', 'Ước mơ của vợ chồng chúng tôi là chuyển về quê làm nông.']] },
        { t: 'p', s: [
          ['s2', 'そこで{先日|せんじつ}、ある{町|まち}が{東京|とうきょう}で{開|ひら}いた‹①@setsumeikai({説明会|せつめいかい})›に{参加|さんか}してみました。', 'Vì thế hôm trước chúng tôi dự buổi giới thiệu một thị trấn tổ chức ở Tokyo.'],
          ['s3', 'その{町|まち}では@jinkou({人口|じんこう})が{減|へ}ったので、@choumin({町民|ちょうみん})を@boshuu([募集|ぼしゅう])するために{説明会|せつめいかい}を{開|ひら}いています。', 'Thị trấn đó dân số giảm nên tổ chức buổi giới thiệu để tuyển cư dân.'],
          ['s4', 'もう100{人|にん}{以上|いじょう}が@utsurisumu({移|うつ}り{住|す}んで)いて、{多|おお}くの{人|ひと}は{楽|たの}しく{生活|せいかつ}しています。', 'Đã có hơn 100 người chuyển đến, phần lớn sống vui vẻ.'],
          ['s5', 'しかし、うまくいかなかった{例|れい}もあるそうです。', 'Nhưng nghe nói cũng có trường hợp không suôn sẻ.']
        ] },
        { t: 'p', s: [
          ['s6', 'そのような{例|れい}には‹②@kyoutsuuten({共通点|きょうつうてん})›があると{思|おも}いました。', 'Tôi nghĩ những trường hợp đó có điểm chung.'],
          ['s7', 'ある{人|ひと}は、{田舎|いなか}の{生活|せいかつ}に@akogareru(あこがれて){引|ひ}っ{越|こ}して{来|き}ましたが、すぐに@taikutsu([退屈|たいくつ])な{毎日|まいにち}が{嫌|いや}になったそうです。', 'Có người vì mơ ước cuộc sống quê mà chuyển đến, nhưng chẳng bao lâu đã chán những ngày tẻ nhạt.'],
          ['s8', '{農業|のうぎょう}がしたくて{来|き}たのにあまりにも{大変|たいへん}で、@tokai({都会|とかい})に{戻|もど}ってしまった{例|れい}もありました。', 'Cũng có người đến vì muốn làm nông nhưng quá vất vả nên quay về thành phố.'],
          ['s9', '{毎月|まいつき}の{町内|ちょうない}の{掃除|そうじ}など、{都会|とかい}では{経験|けいけん}したことがなかったことが{意外|いがい}にめんどうくさいと{感|かん}じる{人|ひと}もいるそうです。', 'Có người thấy những việc chưa từng trải ở thành phố như dọn dẹp khu phố hằng tháng lại phiền phức ngoài dự đoán.'],
          ['s10', '{説明会|せつめいかい}では、このような{例|れい}も{知|し}ってから{検討|けんとう}してほしいと{言|い}っていました。', 'Ở buổi giới thiệu, họ nói mong mọi người biết cả những trường hợp như vậy rồi hãy cân nhắc.']
        ] },
        { t: 'p', s: [
          ['s11', '{成功|せいこう}{例|れい}ばかり{見|み}ていた{私|わたし}たちは、@amai({考|かんが}えが{甘|あま}かった)ようです。', 'Chúng tôi chỉ nhìn các trường hợp thành công, có vẻ suy nghĩ còn đơn giản.'],
          ['s12', 'でも、{夢|ゆめ}はあきらめたくないので、よく{調|しら}べて、@keikaku({計画|けいかく}を{立|た}てて)、@jikkou([実行|じっこう])できるように{頑張|がんば}りたいと{思|おも}います。', 'Nhưng chúng tôi không muốn từ bỏ ước mơ, nên sẽ tìm hiểu kỹ, lập kế hoạch và cố gắng để thực hiện được.']
        ] }
      ],
      notes: [], refs: {},
      questions: [
        {
          label: '30',
          question: ['q1', '{町|まち}が‹①{説明会|せつめいかい}›を{開|ひら}いた{目的|もくてき}は{何|なに}か。', 'Mục đích thị trấn tổ chức buổi giới thiệu là gì?'],
          options: [
            ['{町|まち}に{引|ひ}っ{越|こ}して{来|き}てくれる{人|ひと}を[募集|ぼしゅう]すること。', 'Tuyển người chuyển đến thị trấn.', 'Đúng. 「町民を募集するために説明会を開いています」 (s3).'],
            ['{町|まち}に{引|ひ}っ{越|こ}して{来|く}る{人|ひと}を{助|たす}けてくれる{町民|ちょうみん}を[募集|ぼしゅう]すること。', 'Tuyển cư dân giúp người mới đến.', 'Sai.'],
            ['{町|まち}の{農業|のうぎょう}について、アドバイスをしてくれる{専門家|せんもんか}を[募集|ぼしゅう]すること。', 'Tuyển chuyên gia nông nghiệp.', 'Sai.'],
            ['{町|まち}の{人口|じんこう}を{増|ふ}やすにはどうしたらいいか、{考|かんが}えてくれる{人|ひと}を[募集|ぼしゅう]すること。', 'Tuyển người nghĩ cách tăng dân số.', 'Sai.']
          ],
          answer: 1, evidence: ['s3']
        },
        {
          label: '31',
          question: ['q2', '‹②{共通点|きょうつうてん}›とあるが、それはどのような{点|てん}だと{考|かんが}えられるか。', '"Điểm chung" là điểm nào?'],
          options: [
            ['@kitai({期待|きたい})していた{生活|せいかつ}ができていないが、{我慢|がまん}して{生活|せいかつ}している{点|てん}。', 'Không được như kỳ vọng nhưng vẫn cố chịu.', 'Sai. Có người đã quay về thành phố.'],
            ['{期待|きたい}していた{生活|せいかつ}ができるようになり、{楽|たの}しく{生活|せいかつ}ができている{点|てん}。', 'Sống được như kỳ vọng, vui vẻ.', 'Sai. Đây là trường hợp thành công.'],
            ['{期待|きたい}していた{生活|せいかつ}と{実際|じっさい}の{生活|せいかつ}が{同|おな}じではなかったが、{満足|まんぞく}している{点|てん}。', 'Khác kỳ vọng nhưng hài lòng.', 'Sai.'],
            ['{期待|きたい}していた{生活|せいかつ}と{実際|じっさい}の{生活|せいかつ}が{違|ちが}い、@fuman([不満|ふまん])を{感|かん}じた{点|てん}。', 'Thực tế khác kỳ vọng nên thấy bất mãn.', 'Đúng. Mơ ước cuộc sống quê → chán; muốn làm nông → quá vất vả; việc khu phố → phiền (s7–s9).']
          ],
          answer: 4, evidence: ['s7', 's8', 's9']
        },
        {
          label: '32',
          question: ['q3', '{説明会|せつめいかい}に{行|い}ってから、{自分|じぶん}の{夢|ゆめ}について、「{私|わたし}」はどう{思|おも}うようになったか。', 'Sau buổi giới thiệu, "tôi" nghĩ gì về ước mơ của mình?'],
          options: [
            ['@shippairei([失敗|しっぱい]{例|れい})が{多|おお}すぎるから、[実行|じっこう]するのはあきらめたほうがよさそうだ。', 'Nhiều thất bại quá nên bỏ thì hơn.', 'Sai. "夢はあきらめたくない".'],
            ['[失敗|しっぱい]{例|れい}を{知|し}ったので、[実行|じっこう]するかしないかを{検討|けんとう}したい。', 'Biết thất bại rồi nên muốn cân nhắc có làm hay không.', 'Sai. Đã quyết định thực hiện.'],
            ['[失敗|しっぱい]{例|れい}のことも{考|かんが}えて、しっかり{計画|けいかく}を{立|た}てて[実行|じっこう]したい。', 'Tính cả các trường hợp thất bại, lập kế hoạch kỹ rồi thực hiện.', 'Đúng. (s11–s12).'],
            ['[失敗|しっぱい]{例|れい}より{成功|せいこう}{例|れい}がたくさんあるから、[失敗|しっぱい]{例|れい}は{気|き}にせずにすぐ[実行|じっこう]したい。', 'Thành công nhiều hơn nên không cần bận tâm, làm ngay.', 'Sai. Tác giả nhận ra mình từng chỉ nhìn thành công là "甘い".']
          ],
          answer: 3, evidence: ['s11', 's12']
        }
      ],
      summary: 'Vợ chồng tác giả mơ về quê làm nông nên dự buổi giới thiệu của một thị trấn đang tuyển cư dân vì dân số giảm. Hơn 100 người đã chuyển đến, phần lớn vui vẻ, nhưng có trường hợp thất bại với điểm chung là thực tế khác kỳ vọng (chán, quá vất vả, việc khu phố phiền). Tác giả nhận ra mình suy nghĩ đơn giản, nhưng không bỏ ước mơ – sẽ tìm hiểu kỹ, lập kế hoạch để thực hiện.',
      structure: [['Đoạn 1', 'Ước mơ'], ['Đoạn 2', 'Buổi giới thiệu (①): mục đích, thành công/thất bại'], ['Đoạn 3', 'Điểm chung của thất bại (②)'], ['Đoạn 4', 'Thay đổi suy nghĩ của tác giả']],
      grammar: [
        ['そこで', 'Vì thế', 'そこで先日、…説明会に参加してみました'],
        ['〜ために', 'Để…', '町民を募集するために'],
        ['〜のに', 'Vậy mà', '農業がしたくて来たのにあまりにも大変で'],
        ['〜てから〜てほしい', 'Mong (ai)… rồi hãy…', '知ってから検討してほしい'],
        ['〜ばかり', 'Chỉ toàn…', '成功例ばかり見ていた']
      ],
      tip: 'Câu hỏi "共通点" → khái quát các ví dụ: mỗi ví dụ đều là "kỳ vọng ↔ thực tế khác nhau". Chọn lựa chọn bao quát được tất cả.'
    }
  ]
};
