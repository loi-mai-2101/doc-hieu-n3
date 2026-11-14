/* Đề thi JLPT N3 tháng 7/2022 — Đọc hiểu: 問題4 (短文, câu 23–26) · 問題5 (中文, câu 27–32).
   Cú pháp đánh dấu: xem data/bai-1.js. Đáp án do giáo viên giải (đề không kèm đáp án). */
window.BAI = {
  id: 'de-t7-2022',
  title: 'Đề T7/2022',
  subtitle: 'JLPT N3 tháng 7/2022 · 短文 & 中文',

  vocab: {
    // 4-1
    gakki: { w: '学期', r: 'がっき', hv: 'HỌC KỲ', vi: 'học kỳ' },
    sorezore: { w: 'それぞれ', r: 'それぞれ', hv: '', vi: 'mỗi người, từng' },
    mokuhyou: { w: '目標', r: 'もくひょう', hv: 'MỤC TIÊU', vi: 'mục tiêu' },
    haru: { w: 'はる（貼る）', r: 'はる', hv: 'THIẾP', vi: 'dán' },
    meniiru: { w: '目に入る', r: 'めにはいる', hv: 'MỤC NHẬP', vi: 'đập vào mắt' },
    okage: { w: 'おかげで', r: 'おかげで', hv: '', vi: 'nhờ có' },
    gakkimatsu: { w: '学期末', r: 'がっきまつ', hv: 'HỌC KỲ MẠT', vi: 'cuối học kỳ' },
    akirameru: { w: 'あきらめる', r: 'あきらめる', hv: '', vi: 'bỏ cuộc' },
    // 4-2
    ryokou: { w: '旅行会社', r: 'りょこうがいしゃ', hv: 'LỮ HÀNH HỘI XÃ', vi: 'công ty du lịch' },
    hakuu: { w: '2泊3日', r: 'にはくみっか', hv: 'BẠC NHẬT', vi: '3 ngày 2 đêm' },
    moushikomi: { w: '申し込み', r: 'もうしこみ', hv: 'THÂN NHẬP', vi: 'việc đăng ký' },
    shuppatsu: { w: '出発', r: 'しゅっぱつ', hv: 'XUẤT PHÁT', vi: 'khởi hành' },
    daikin: { w: '代金', r: 'だいきん', hv: 'ĐẠI KIM', vi: 'tiền' },
    furikomu: { w: '振り込む', r: 'ふりこむ', hv: 'CHẤN NHẬP', vi: 'chuyển khoản' },
    torikeshi: { w: '取り消し', r: 'とりけし', hv: 'THỦ TIÊU', vi: 'hủy' },
    hassei: { w: '発生する', r: 'はっせいする', hv: 'PHÁT SINH', vi: 'phát sinh' },
    zeikomi: { w: '税込', r: 'ぜいこみ', hv: 'THUẾ NHẬP', vi: 'đã gồm thuế' },
    shiten: { w: '支店', r: 'してん', hv: 'CHI ĐIẾM', vi: 'chi nhánh' },
    // 4-3
    yuubinkyoku: { w: '郵便局', r: 'ゆうびんきょく', hv: 'BƯU TIỆN CỤC', vi: 'bưu điện' },
    omoitsuku: { w: '思いつく', r: 'おもいつく', hv: 'TƯ', vi: 'nghĩ ra' },
    haitatsu: { w: '配達', r: 'はいたつ', hv: 'PHỐI ĐẠT', vi: 'giao, phát' },
    igai: { w: '意外', r: 'いがい', hv: 'Ý NGOẠI', vi: 'bất ngờ' },
    hitorigurashi: { w: '一人暮らし', r: 'ひとりぐらし', hv: 'NHẤT NHÂN MỘ', vi: 'sống một mình' },
    toshiyori: { w: 'お年寄り', r: 'おとしより', hv: 'NIÊN KÝ', vi: 'người cao tuổi' },
    anshin: { w: '安心', r: 'あんしん', hv: 'AN TÂM', vi: 'an tâm' },
    houmon: { w: '訪問する', r: 'ほうもんする', hv: 'PHỎNG VẤN', vi: 'thăm' },
    yousu: { w: '様子', r: 'ようす', hv: 'DẠNG TỬ', vi: 'tình trạng, dáng vẻ' },
    shitei: { w: '指定する', r: 'していする', hv: 'CHỈ ĐỊNH', vi: 'chỉ định' },
    // 4-4
    bunpou: { w: '文法', r: 'ぶんぽう', hv: 'VĂN PHÁP', vi: 'ngữ pháp' },
    kenkyuukai: { w: '研究会', r: 'けんきゅうかい', hv: 'NGHIÊN CỨU HỘI', vi: 'hội nghiên cứu, buổi chuyên đề' },
    yosou: { w: '予想', r: 'よそう', hv: 'DỰ TƯỞNG', vi: 'dự đoán' },
    sankasha: { w: '参加者', r: 'さんかしゃ', hv: 'THAM GIA GIẢ', vi: 'người tham gia' },
    shiryou: { w: '資料', r: 'しりょう', hv: 'TƯ LIỆU', vi: 'tài liệu' },
    bu: { w: '〜部', r: 'ぶ', hv: 'BỘ', vi: '… bản (tài liệu)' },
    jimusho: { w: '事務所', r: 'じむしょ', hv: 'SỰ VỤ SỞ', vi: 'văn phòng' },
    kaiin: { w: '会員', r: 'かいいん', hv: 'HỘI VIÊN', vi: 'hội viên' },
    // 5-1
    suitou: { w: '水筒', r: 'すいとう', hv: 'THỦY ĐỒNG', vi: 'bình nước' },
    pettobotoru: { w: 'ペットボトル', r: 'ペットボトル', hv: '', vi: 'chai nhựa' },
    chokusetsu: { w: '直接', r: 'ちょくせつ', hv: 'TRỰC TIẾP', vi: 'trực tiếp' },
    ondo: { w: '温度', r: 'おんど', hv: 'ÔN ĐỘ', vi: 'nhiệt độ' },
    choujikan: { w: '長時間', r: 'ちょうじかん', hv: 'TRƯỜNG THỜI GIAN', vi: 'thời gian dài' },
    mendoukusai: { w: 'めんどうくさい', r: 'めんどうくさい', hv: '', vi: 'phiền phức' },
    jubun: { w: '十分', r: 'じゅうぶん', hv: 'THẬP PHÂN', vi: 'đủ' },
    kekkyoku: { w: '結局', r: 'けっきょく', hv: 'KẾT CỤC', vi: 'rốt cuộc' },
    hiyasu: { w: '冷ます', r: 'さます', hv: 'LÃNH', vi: 'làm nguội' },
    soreho: { w: 'それほど', r: 'それほど', hv: '', vi: '(không) đến mức đó' },
    // 5-2
    karasu: { w: 'カラス', r: 'カラス', hv: '', vi: 'con quạ' },
    heiki: { w: '平気で', r: 'へいきで', hv: 'BÌNH KHÍ', vi: 'thản nhiên' },
    iyagaru: { w: '嫌がる', r: 'いやがる', hv: 'HIỀM', vi: 'ghét, khó chịu' },
    hijou: { w: '非常に', r: 'ひじょうに', hv: 'PHI THƯỜNG', vi: 'cực kỳ' },
    kaiketsu: { w: '解決', r: 'かいけつ', hv: 'GIẢI QUYẾT', vi: 'giải quyết' },
    senmonka: { w: '専門家', r: 'せんもんか', hv: 'CHUYÊN MÔN GIA', vi: 'chuyên gia' },
    kyouryoku: { w: '協力', r: 'きょうりょく', hv: 'HIỆP LỰC', vi: 'sự hợp tác' },
    jikken: { w: '実験', r: 'じっけん', hv: 'THỰC NGHIỆM', vi: 'thí nghiệm' },
    seikou: { w: '成功する', r: 'せいこうする', hv: 'THÀNH CÔNG', vi: 'thành công' },
    anzen: { w: '安全', r: 'あんぜん', hv: 'AN TOÀN', vi: 'an toàn' },
    joutai: { w: '状態', r: 'じょうたい', hv: 'TRẠNG THÁI', vi: 'trạng thái' },
    kiken: { w: '危険', r: 'きけん', hv: 'NGUY HIỂM', vi: 'nguy hiểm' },
    nakikata: { w: '鳴き方', r: 'なきかた', hv: 'MINH PHƯƠNG', vi: 'cách kêu' },
    idou: { w: '移動させる', r: 'いどうさせる', hv: 'DI ĐỘNG', vi: 'di chuyển (cái gì)' },
    mori: { w: '森', r: 'もり', hv: 'SÂM', vi: 'khu rừng' }
  },

  problems: [
    {
      id: '4-1',
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{日本語|にほんご}{学校|がっこう}の{新|しん}@gakki([学期|がっき])が{始|はじ}まったとき、クラス{全員|ぜんいん}が@sorezore(それぞれ)、[学期|がっき]の@mokuhyou([目標|もくひょう])を{紙|かみ}に{書|か}いて{教室|きょうしつ}に@haru(はって)おくことになった。', 'Khi học kỳ mới ở trường tiếng Nhật bắt đầu, cả lớp mỗi người viết mục tiêu học kỳ ra giấy rồi dán trong lớp.'],
          ['s2', '{私|わたし}は{漢字|かんじ}を500{字|じ}{覚|おぼ}えることにしたが、やってみると{大変|たいへん}だった。', 'Tôi quyết định học thuộc 500 chữ Hán, nhưng làm rồi mới thấy vất vả.'],
          ['s3', 'でも、{教室|きょうしつ}に{入|はい}ると、{自分|じぶん}で{書|か}いた[目標|もくひょう]が@meniiru({目|め}に{入|はい}る)し、クラスのみんなも{知|し}っているから、{簡単|かんたん}にはやめられない。', 'Nhưng vào lớp là thấy ngay mục tiêu mình viết, cả lớp cũng biết, nên không dễ bỏ cuộc.'],
          ['s4', '@okage(そのおかげで)、@gakkimatsu([学期末|がっきまつ])には[目標|もくひょう]の500{字|じ}を{覚|おぼ}えることができた。', 'Nhờ vậy, đến cuối kỳ tôi đã thuộc được 500 chữ như mục tiêu.'],
          ['s5', '[目標|もくひょう]を{心|こころ}の{中|なか}で{決|き}めるだけではなく、{紙|かみ}に{書|か}いて{教室|きょうしつ}にはったのがよかったのだ。', 'Không chỉ quyết định mục tiêu trong lòng, mà viết ra giấy dán trong lớp – đó là điều tốt.']
        ] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '23',
        question: ['q1', '「{私|わたし}」はどうして[目標|もくひょう]の500{字|じ}を{覚|おぼ}えることができたと{考|かんが}えているか。', 'Vì sao "tôi" cho rằng mình thuộc được 500 chữ?'],
        options: [
          ['「{私|わたし}」にとって{簡単|かんたん}な[目標|もくひょう]だったから。', 'Vì mục tiêu dễ.', 'Chưa đúng. Tác giả nói làm rồi mới thấy rất vất vả (やってみると大変だった).'],
          ['クラス{全員|ぜんいん}で{話|はな}し{合|あ}って、{同|おな}じ[目標|もくひょう]に{決|き}めたから。', 'Vì cả lớp bàn bạc chọn chung một mục tiêu.', 'Chưa đúng. Mỗi người tự đặt mục tiêu riêng (それぞれ), không phải cả lớp chọn chung một mục tiêu.'],
          ['{簡単|かんたん}に@akirameru(あきらめ)ないようにしようと、{心|こころ}の{中|なか}で{決|き}めていたから。', 'Vì đã quyết tâm trong lòng không bỏ cuộc.', 'Chưa đúng. Tác giả nói chỉ quyết định trong lòng là chưa đủ (心の中で決めるだけではなく), phải viết ra và dán lên.'],
          ['きめた[目標|もくひょう]が、{自分|じぶん}にもほかの{人|ひと}にも{見|み}えるようにしてあったから。', 'Vì mục tiêu được để sao cho mình và người khác đều thấy.', 'Đúng. Mục tiêu dán trong lớp nên mình ngày nào cũng thấy, cả lớp cũng biết, vì vậy không bỏ cuộc được.']
        ],
        guide: 'Câu hỏi hỏi tác giả nghĩ vì sao mình học thuộc được 500 chữ Hán. Câu kết bài đã nói ra lý do: 「目標を心の中で決めるだけではなく、紙に書いて教室にはったのがよかったのだ」 – không chỉ đặt mục tiêu trong lòng, mà viết ra giấy dán trong lớp, đó là điều tốt.\nVì sao dán lên lại có tác dụng? Câu giữa bài giải thích: 「教室に入ると、自分で書いた目標が目に入るし、クラスのみんなも知っているから、簡単にはやめられない」 – vào lớp là thấy ngay mục tiêu mình viết, cả lớp cũng biết, nên không dễ bỏ cuộc.\nHai điều đó gộp lại: mục tiêu được để sao cho cả mình lẫn người khác đều thấy. Đáp án 4.\nLựa chọn 3 là bẫy: tác giả nói rõ chỉ quyết tâm trong lòng thôi là CHƯA ĐỦ (だけではなく).',
        answer: 4, evidence: ['s3', 's5']
      }],
      summary: 'Đầu học kỳ, mỗi học sinh viết mục tiêu ra giấy dán trong lớp. Tác giả chọn học 500 chữ Hán, thấy vất vả nhưng vì ngày nào cũng thấy mục tiêu và cả lớp đều biết nên không bỏ được, cuối kỳ đã đạt. Viết ra và dán lên là điều tốt.',
      structure: [['Câu 1–2', 'Bối cảnh + mục tiêu'], ['Câu 3–4', 'Lý do không bỏ cuộc → kết quả'], ['Câu 5', 'Kết luận']],
      grammar: [
        ['〜ことになった', 'Được quyết định là…', '教室にはっておくことになった'],
        ['〜ことにした', '(Tôi) quyết định…', '500字覚えることにした'],
        ['〜し、〜から', 'Vừa… lại… nên', '目に入るし、みんなも知っているから'],
        ['〜だけではなく', 'Không chỉ…', '心の中で決めるだけではなく']
      ],
      tip: 'Kết luận ở câu cuối "〜のがよかったのだ" chính là lý do. Lựa chọn đúng diễn đạt lại: viết ra + dán = mình và người khác đều thấy.'
    },

    {
      id: '4-2',
      kind: '短文・メール',
      kindVi: 'Đoạn văn ngắn – email công ty du lịch',
      style: 'mail',
      before: null,
      lead: ['l', 'これはある@ryokou([旅行|りょこう]{会社|がいしゃ})が{客|きゃく}の[水川|みずかわ]さんに{書|か}いたメールである。', 'Đây là email một công ty du lịch viết cho khách là Mizukawa.'],
      blocks: [
        { t: 'lines', s: [['s0', '[水川|みずかわ][真理|まり][様|さま]', 'Kính gửi quý khách Mizukawa Mari']] },
        { t: 'p', s: [
          ['s1', '「{京都|きょうと}の{旅|たび}@hakuu(2[泊|はく]3{日|か})」へのお@moushikomi([申|もう]し[込|こ]み)、ありがとうございました。', 'Cảm ơn quý khách đã đăng ký tour "Du lịch Kyoto 3 ngày 2 đêm".'],
          ['s2', '{下|した}のご{予約|よやく}{内容|ないよう}を{確認|かくにん}していただき、ご@shuppatsu({出発|しゅっぱつ}){日|び}の1{週間|しゅうかん}{前|まえ}までに{旅行|りょこう}@daikin([代金|だいきん])をお@furikomu([振|ふ]り[込|こ]み)ください。', 'Xin quý khách kiểm tra nội dung đặt tour bên dưới và chuyển khoản tiền tour trước ngày khởi hành 1 tuần.']
        ] },
        { t: 'p', s: [
          ['s3', 'なお、ご{出発|しゅっぱつ}{日|び}の20{日|か}{前|まえ}{以降|いこう}のお@torikeshi({取|と}り{消|け}し)には、キャンセル{料|りょう}が@hassei([発生|はっせい])します（20{日|か}{前|まえ}～8{日|か}{前|まえ}まで20%、7{日|か}{前|まえ}～{前日|ぜんじつ}まで30%、{当日|とうじつ}100%）。', 'Lưu ý: hủy từ 20 ngày trước ngày khởi hành sẽ mất phí hủy (20–8 ngày trước: 20%; 7 ngày – ngày trước: 30%; ngày khởi hành: 100%).'],
          ['s4', 'ご{質問|しつもん}などございましたら、ご{連絡|れんらく}ください。', 'Nếu có câu hỏi, xin quý khách liên hệ.']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['i0', '＜ご{予約|よやく}{内容|ないよう}＞', '<Nội dung đặt tour>'],
          ['i1', 'ツアー{名|めい}：{京都|きょうと}の{旅|たび}2[泊|はく]3{日|か}', 'Tên tour: Du lịch Kyoto 3 ngày 2 đêm'],
          ['i2', '{出発|しゅっぱつ}{日|び}：2{月|がつ}13{日|にち}', 'Ngày khởi hành: 13/2'],
          ['i3', '[代金|だいきん]{合計|ごうけい}　86,000{円|えん}（@zeikomi({税込|ぜいこみ})）', 'Tổng tiền: 86.000 yên (đã gồm thuế)'],
          ['i4', '[振|ふ]り[込|こ]み{先|さき}：あおば{銀行|ぎんこう}[西島|にしじま]@shiten({支店|してん})　{普通|ふつう}　1234567　[石野|いしの]{旅行|りょこう}', 'Tài khoản nhận: ngân hàng Aoba chi nhánh Nishijima, tài khoản thường 1234567, Ishino Travel'],
          ['i5', '[石野|いしの]{旅行|りょこう}{予約|よやく}{課|か}　[岩坂|いわさか]', 'Phòng đặt tour Ishino Travel – Iwasaka'],
          ['i6', '{電話|でんわ}：051-960-7451　FAX：051-960-7452', 'Điện thoại: 051-960-7451 · Fax: 051-960-7452']
        ] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '24',
        question: ['q1', '{旅行|りょこう}{会社|がいしゃ}がこのメールで{最|もっと}も{言|い}いたい{事|こと}は{何|なに}か。', 'Điều công ty du lịch muốn nói nhất trong email là gì?'],
        options: [
          ['{旅行|りょこう}の{予約|よやく}{内容|ないよう}を{確認|かくにん}したら、{連絡|れんらく}してください。', 'Kiểm tra xong nội dung thì hãy liên lạc.', 'Chưa đúng. Chỉ cần kiểm tra nội dung (確認していただき). Liên lạc chỉ khi có câu hỏi.'],
          ['{旅行|りょこう}[代金|だいきん]を{出発|しゅっぱつ}{日|び}の1{週間|しゅうかん}{前|まえ}までに[振|ふ]り[込|こ]んでください。', 'Hãy chuyển khoản tiền tour trước ngày khởi hành 1 tuần.', 'Đúng. Đây là yêu cầu chính của email (お振り込みください): chuyển khoản trước ngày khởi hành một tuần.'],
          ['{旅行|りょこう}のキャンセル{料|りょう}を1{週間|しゅうかん}{以内|いない}に{支払|しはら}ってください。', 'Hãy trả phí hủy trong 1 tuần.', 'Chưa đúng. Phí hủy chỉ phát sinh khi khách hủy tour. Đây chỉ là lưu ý thêm (なお).'],
          ['{旅行|りょこう}について{何|なに}かわからないことがあれば{質問|しつもん}をしてください。', 'Có gì không hiểu thì hãy hỏi.', 'Chưa đúng. Đây chỉ là câu xã giao cuối email, không phải điều muốn nói nhất.']
        ],
        guide: 'Câu hỏi hỏi công ty du lịch muốn nói điều gì NHẤT. Email loại này luôn có một yêu cầu chính, thường ở đoạn đầu, dưới dạng 「お〜ください」.\nYêu cầu chính: 「ご出発日の1週間前までに旅行代金をお振り込みください」 – xin chuyển khoản tiền tour trước ngày khởi hành một tuần. Đáp án 2.\nCác thông tin còn lại là phụ: phí hủy (đoạn bắt đầu bằng 「なお」 – ngoài ra), lời mời liên hệ khi có câu hỏi, và bảng nội dung đặt tour.\nMẹo: "最も言いたいこと" thì hãy tìm câu mà người viết muốn người đọc phải LÀM. Thông tin sau なお là bổ sung.',
        answer: 2, evidence: ['s2']
      }],
      summary: 'Công ty du lịch cảm ơn Mizukawa đã đăng ký tour Kyoto 3 ngày 2 đêm (khởi hành 13/2, 86.000 yên), yêu cầu kiểm tra nội dung và chuyển khoản trước ngày khởi hành 1 tuần. Hủy từ 20 ngày trước sẽ mất phí.',
      structure: [['Đoạn 1', 'Cảm ơn + YÊU CẦU chuyển khoản → ý chính'], ['Đoạn 2', 'なお: phí hủy · liên hệ khi có câu hỏi'], ['Phụ lục', 'Nội dung đặt tour, tài khoản']],
      grammar: [
        ['〜ていただき', 'Xin (quý khách) vui lòng…', '確認していただき'],
        ['お〜ください', 'Xin hãy… (tôn kính)', 'お振り込みください'],
        ['〜以降', 'Từ… trở đi', '20日前以降のお取り消し'],
        ['〜ございましたら', 'Nếu có… (rất lịch sự)', 'ご質問などございましたら']
      ],
      tip: 'Câu hỏi "最も言いたい事" của email → tìm câu yêu cầu chính (お〜ください) ở đoạn đầu. Thông tin sau "なお" là bổ sung.'
    },

    {
      id: '4-3',
      srcNotes: ['Bài đọc trong đề in 「こんな意外サービス」 (thiếu な) và không gạch chân; câu hỏi lại viết 「意外なサービス」. Bài đã sửa thành 「意外なサービス」 và gạch chân cho khớp câu hỏi.'],
      kind: '短文・説明文',
      kindVi: 'Đoạn văn ngắn – văn giải thích',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '@yuubinkyoku([郵便局|ゆうびんきょく])と{聞|き}くと、まず@omoitsuku({思|おも}いつく)のは{手紙|てがみ}や{荷物|にもつ}の@haitatsu([配達|はいたつ])だろう。', 'Nghe đến bưu điện, điều đầu tiên nghĩ đến chắc là việc phát thư và hàng.'],
          ['s2', 'だが、こんな‹@igai({意外|いがい}な)サービス›があることを{知|し}っているだろうか。', 'Nhưng bạn có biết có một dịch vụ bất ngờ như thế này không?'],
          ['s3', '@hitorigurashi({一人|ひとり}[暮|ぐ]らし)をしている@toshiyori(お{年|とし}[寄|よ]り)とその{家族|かぞく}の@anshin({安心|あんしん})のため、{郵便局|ゆうびんきょく}{員|いん}がお{年|とし}[寄|よ]りの{家|いえ}を@houmon([訪問|ほうもん])する。', 'Để người cao tuổi sống một mình và gia đình họ yên tâm, nhân viên bưu điện đến thăm nhà người cao tuổi.'],
          ['s4', 'そして、そのときのお{年|とし}[寄|よ]りの@yousu([様子|ようす])をEメールで{家族|かぞく}に{教|おし}えてくれるのだ。', 'Rồi họ báo tình trạng của người cao tuổi lúc đó cho gia đình qua email.'],
          ['s5', '{親|おや}になかなか{会|あ}いに{行|い}けない{人|ひと}には、うれしいサービスだ。', 'Với những người khó có dịp về thăm bố mẹ, đây là dịch vụ đáng mừng.']
        ] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '25',
        question: ['q1', '‹{意外|いがい}なサービス›とあるが、{一人|ひとり}[暮|ぐ]らしのお{年|とし}[寄|よ]りとその{家族|かぞく}に{対|たい}するどのようなサービスか。', '"Dịch vụ bất ngờ" là dịch vụ gì dành cho người cao tuổi sống một mình và gia đình?'],
        options: [
          ['{家族|かぞく}の@shitei([指定|してい])した{時間|じかん}に、お{年|とし}[寄|よ]りに{荷物|にもつ}を[配達|はいたつ]する。', 'Giao hàng cho người già vào giờ gia đình chỉ định.', 'Chưa đúng. Đây là dịch vụ phát hàng thông thường, không phải dịch vụ "bất ngờ".'],
          ['お{年|とし}[寄|よ]りを[訪問|ほうもん]し、その[様子|ようす]を{家族|かぞく}にEメールで{連絡|れんらく}する。', 'Thăm người già rồi báo tình trạng cho gia đình qua email.', 'Đúng. Nhân viên bưu điện đến thăm người cao tuổi (訪問する), rồi báo tình trạng cho gia đình qua email.'],
          ['{家族|かぞく}からのEメールを{郵便局|ゆうびんきょく}{員|いん}が{受|う}け{取|と}り、{印刷|いんさつ}してお{年|とし}[寄|よ]りに{渡|わた}す。', 'Nhận email của gia đình, in ra đưa cho người già.', 'Chưa đúng. Ngược chiều: email gửi CHO gia đình, không phải gia đình gửi email.'],
          ['ふだんなかなか{会|あ}えない{家族|かぞく}のところに、お{年|とし}[寄|よ]りを{連|つ}れて{行|い}く。', 'Đưa người già đến chỗ gia đình.', 'Chưa đúng. Nhân viên bưu điện đến nhà người cao tuổi, không đưa họ đi đâu.']
        ],
        guide: 'Câu hỏi hỏi "dịch vụ bất ngờ" của bưu điện là gì. Câu đầu nói việc thông thường (phát thư, phát hàng), câu thứ hai báo sắp có một dịch vụ bất ngờ, và hai câu tiếp theo mô tả nó:\n「郵便局員がお年寄りの家を訪問する」 – nhân viên bưu điện đến thăm nhà người cao tuổi sống một mình.\n「そのときのお年寄りの様子をEメールで家族に教えてくれる」 – rồi báo tình trạng người cao tuổi cho gia đình qua email.\nĐáp án 2 nói đúng hai việc này.\nBẫy là lựa chọn 3, đảo chiều email: trong bài, email đi TỪ nhân viên bưu điện ĐẾN gia đình, không phải từ gia đình đến bưu điện.',
        answer: 2, evidence: ['s3', 's4']
      }],
      summary: 'Ngoài phát thư, bưu điện còn có dịch vụ bất ngờ: nhân viên đến thăm người cao tuổi sống một mình và gửi email báo tình trạng cho gia đình – rất tiện cho người khó về thăm bố mẹ.',
      structure: [['Câu 1–2', 'Hình ảnh thông thường ↔ dịch vụ bất ngờ'], ['Câu 3–4', 'Nội dung dịch vụ'], ['Câu 5', 'Đánh giá']],
      grammar: [
        ['〜と聞くと', 'Hễ nghe đến…', '郵便局と聞くと'],
        ['〜ため', 'Vì, để…', '家族の安心のため'],
        ['〜てくれるのだ', '(Họ) làm cho… (giải thích)', '家族に教えてくれるのだ'],
        ['なかなか〜ない', 'Mãi mà không…, khó…', 'なかなか会いに行けない']
      ],
      tip: 'Chú ý hướng của hành động: ai gửi email cho ai (郵便局員 → 家族). Lựa chọn đảo chiều là bẫy phổ biến.'
    },

    {
      id: '4-4',
      kind: '短文・メモ',
      kindVi: 'Đoạn văn ngắn – ghi chú công việc',
      style: 'memo',
      before: null, lead: null,
      blocks: [
        { t: 'lines', s: [['s0', 'ナムさん', 'Gửi Nam']] },
        { t: 'p', s: [
          ['s1', '{来週|らいしゅう}の「{会議|かいぎ}の@bunpou({文法|ぶんぽう})@kenkyuukai({研究会|けんきゅうかい})」ですが、[申|もう]し[込|こ]みが@yosou([予想|よそう])より{増|ふ}えています。', 'Về "buổi nghiên cứu ngữ pháp hội họp" tuần sau, số đăng ký nhiều hơn dự đoán.'],
          ['s2', '@sankasha({参加|さんか}{者|しゃ})は60{名|めい}ぐらいになりそうですから、@shiryou([資料|しりょう])をあと20@bu({部|ぶ})お{願|ねが}いします。', 'Người tham gia có vẻ khoảng 60 người, nên nhờ bạn chuẩn bị thêm 20 bộ tài liệu.'],
          ['s3', 'それから、{今日|きょう}、{大学|だいがく}の@jimusho({事務所|じむしょ})で、{教室|きょうしつ}の{予約|よやく}を304から201に{変|か}えてもらいました。', 'Ngoài ra, hôm nay tôi đã nhờ văn phòng trường đổi phòng đặt từ 304 sang 201.'],
          ['s4', '{研究会|けんきゅうかい}の@kaiin({会員|かいいん})にメールでお{知|し}らせしておきますが、{当日|とうじつ}も304のドアに、{教室|きょうしつ}が{変|か}わったことを{知|し}らせる{紙|かみ}をはったほうがいいと{思|おも}うので、{作|つく}っておいてください。', 'Tôi sẽ báo cho hội viên qua email, nhưng nghĩ hôm đó cũng nên dán giấy báo đổi phòng ở cửa phòng 304, nên bạn làm sẵn giúp nhé.']
        ] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '26',
        question: ['q1', 'ナムさんがこのメモで[頼|たの]まれていることは{何|なに}か。', 'Nam được nhờ làm gì?'],
        options: [
          ['[資料|しりょう]を60{部|ぶ}{準備|じゅんび}することと、{教室|きょうしつ}が{変|か}わったことを{全員|ぜんいん}にメールで{知|し}らせること。', 'Chuẩn bị 60 bộ tài liệu + email báo đổi phòng.', 'Chưa đúng. Chỉ cần thêm 20 bộ (người tham gia khoảng 60 người), và email báo đổi phòng là do người viết tự gửi.'],
          ['{準備|じゅんび}する[資料|しりょう]を20{部|ぶ}{増|ふ}やすことと、304のドアにはる{紙|かみ}を{作|つく}っておくこと。', 'Thêm 20 bộ tài liệu + làm sẵn giấy dán cửa 304.', 'Đúng. Nam được nhờ chuẩn bị thêm 20 bộ tài liệu (あと20部お願いします) và làm sẵn giấy dán ở cửa phòng 304 (作っておいてください).'],
          ['{教室|きょうしつ}の{予約|よやく}を304から201を{変|か}えることと、304のドアに{紙|かみ}をはること。', 'Đổi phòng + dán giấy.', 'Chưa đúng. Việc đổi phòng người viết đã làm xong. Nam chỉ cần LÀM tờ giấy, không phải đổi phòng.'],
          ['{教室|きょうしつ}が{変|か}わったことを{全員|ぜんいん}にメールで{知|し}らせることと、304のドアにはる{紙|かみ}を{作|つく}っておくこと。', 'Email báo mọi người + làm giấy.', 'Chưa đúng. Email báo hội viên là việc người viết sẽ làm (メールでお知らせしておきます).']
        ],
        guide: 'Câu hỏi hỏi Nam được NHỜ làm gì. Ghi chú có nhiều việc, bạn hãy chia theo người làm:\n- Việc người viết đã làm hoặc sẽ tự làm: đổi phòng 304 sang 201 (変えてもらいました – đã nhờ văn phòng đổi rồi); báo cho hội viên qua email (お知らせしておきます – tôi sẽ báo).\n- Việc nhờ Nam: 「資料をあと20部お願いします」 – chuẩn bị thêm 20 bộ tài liệu; và 「304のドアに…紙をはったほうがいいと思うので、作っておいてください」 – làm sẵn tờ giấy báo đổi phòng để dán ở cửa phòng 304.\nVậy Nam phải: thêm 20 bộ tài liệu, và làm sẵn giấy dán cửa 304. Đáp án 2.\nMẹo: 「お〜します」, 「〜てもらいました」 là việc người viết làm; 「お願いします」, 「〜ておいてください」 là việc nhờ người đọc.',
        answer: 2, evidence: ['s2', 's4']
      }],
      summary: 'Buổi nghiên cứu tuần sau có khoảng 60 người nên cần thêm 20 bộ tài liệu. Người viết đã đổi phòng 304 → 201 và sẽ email báo hội viên; nhờ Nam làm sẵn giấy báo dán ở cửa phòng 304.',
      structure: [['Câu 1–2', 'Số người tăng → nhờ thêm 20 bộ'], ['Câu 3–4', 'Đổi phòng (đã làm) · email (người viết làm) · giấy dán (nhờ Nam)']],
      grammar: [
        ['〜ですが', 'Về việc… thì (nêu chủ đề)', '「会議の文法研究会」ですが'],
        ['あと〜', 'Thêm…', 'あと20部お願いします'],
        ['〜てもらいました', 'Đã nhờ (ai) làm…', '304から201に変えてもらいました'],
        ['お〜しておきます', 'Tôi sẽ làm sẵn (khiêm nhường)', 'メールでお知らせしておきます']
      ],
      tip: 'Phân loại từng việc theo người làm: お〜します/〜てもらいました (người viết) ↔ お願いします/〜ておいてください (người nhận).'
    },

    {
      id: '5-1',
      srcNotes: ['Câu 27, lựa chọn 1 đề in 「飲み物温度」 (thiếu の); câu 28, lựa chọn 2 in 「入れら」 (thiếu た). Bài đã sửa thành 「飲み物の温度」「入れたら」.'],
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút về bình nước',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{今年|ことし}の{夏|なつ}、{初|はじ}めて@suitou({水筒|すいとう})を{買|か}った。', 'Mùa hè năm nay, lần đầu tiên tôi mua bình nước.'],
          ['s2', '{今|いま}まで、{飲|の}み{物|もの}は@pettobotoru(ペットボトル)を{買|か}っていたが、{一|いっ}ヶ{月|げつ}に{五千|ごせん}{円|えん}もかかっていたのだ。', 'Trước giờ tôi mua đồ uống đóng chai, mỗi tháng tốn tới 5.000 yên.']
        ] },
        { t: 'p', s: [
          ['s3', '{買|か}ったのは、コップが{付|つ}いていない、@chokusetsu([直接|ちょくせつ]){口|くち}をつけて{飲|の}む{水筒|すいとう}で、{飲|の}み{物|もの}の@ondo({温度|おんど})が@choujikan({長|ちょう}{時間|じかん}){変|か}わらない{物|もの}だ。', 'Cái tôi mua là bình không có cốc, uống trực tiếp, giữ nhiệt độ đồ uống lâu.'],
          ['s4', 'コップが{付|つ}いている{水筒|すいとう}もあったが、{毎回|まいかい}コップに{入|い}れるのは@mendoukusai(めんどうくさい)と{思|おも}ったので、‹①この{水筒|すいとう}›にした。', 'Cũng có loại kèm cốc, nhưng tôi thấy mỗi lần rót ra cốc thì phiền nên chọn cái bình này.']
        ] },
        { t: 'p', s: [
          ['s5', '{夏|なつ}は{一日|いちにち}{中|じゅう}{冷|つめ}たいものが{飲|の}めたので{良|よ}かったのだが、{冬|ふゆ}になって{熱|あつ}い{飲|の}み{物|もの}を{入|い}れたら、‹②[困|こま]ったこと›が{起|お}きた。', 'Mùa hè uống đồ lạnh cả ngày thì tốt, nhưng sang đông cho đồ uống nóng vào thì xảy ra chuyện rắc rối.'],
          ['s6', '{熱|あつ}すぎて、[直接|ちょくせつ]は{飲|の}めなかったのだ。', 'Nóng quá, không uống trực tiếp được.'],
          ['s7', '{最初|さいしょ}は1{本|ぽん}あれば@jubun({十分|じゅうぶん})だと{思|おも}っていたが、@kekkyoku([結局|けっきょく])、コップ{付|つ}きの{水筒|すいとう}も{買|か}った。', 'Ban đầu tôi nghĩ một bình là đủ, nhưng rốt cuộc mua thêm cả bình có cốc.'],
          ['s8', 'コップがあれば@hiyasu([冷|さ]ます)ことができる。', 'Có cốc thì có thể để nguội.'],
          ['s9', 'どちらの{水筒|すいとう}も@soreho(それほど){高|たか}くはなかったが、‹③{最初|さいしょ}に{考|かんが}えていたよりはお{金|かね}がかかってしまった›。', 'Cả hai bình đều không đắt lắm, nhưng tốn tiền hơn dự tính ban đầu.'],
          ['s10', 'でも、{季節|きせつ}によって{違|ちが}う{水筒|すいとう}を{使|つか}うのも{楽|たの}しいし、ペットボトルも{買|か}わなくなったのでこれでよかったと{思|おも}っている。', 'Nhưng dùng bình khác nhau theo mùa cũng vui, lại không mua nước đóng chai nữa nên tôi thấy thế là tốt.']
        ] }
      ],
      notes: [], refs: {},
      questions: [
        {
          label: '27',
          question: ['q1', '‹①この{水筒|すいとう}›とあるが、どのような{水筒|すいとう}か。', '"Cái bình này" là bình như thế nào?'],
          options: [
            ['{飲|の}み{物|もの}の[温度|おんど]が{変|か}わりにくい、[直接|ちょくせつ]{口|くち}をつけて{飲|の}む{水筒|すいとう}', 'Giữ nhiệt tốt, uống trực tiếp.', 'Đúng. Bình không có cốc, uống trực tiếp bằng miệng, và giữ nhiệt độ đồ uống lâu (温度が長時間変わらない).'],
            ['{飲|の}み{物|もの}の[温度|おんど]が{変|か}わりにくい、コップが{付|つ}いている{水筒|すいとう}', 'Giữ nhiệt tốt, có cốc.', 'Chưa đúng. Cái bình này KHÔNG có cốc (コップが付いていない).'],
            ['{熱|あつ}い{飲|の}み{物|もの}を[冷|さ]ましやすい、[直接|ちょくせつ]{口|くち}をつけて{飲|の}む{水筒|すいとう}', 'Dễ làm nguội, uống trực tiếp.', 'Chưa đúng. Ngược lại, chính vì bình này không làm nguội được nên mùa đông tác giả mới gặp rắc rối.'],
            ['{熱|あつ}い{飲|の}み{物|もの}を[冷|さ]ましやすい、コップがついている{水筒|すいとう}', 'Dễ làm nguội, có cốc.', 'Chưa đúng. Đây là bình thứ hai tác giả mua thêm vào mùa đông.']
          ],
          guide: 'Câu hỏi hỏi "cái bình này" là loại bình nào. Câu ngay trước có lý do chọn: có loại kèm cốc, nhưng rót ra cốc mỗi lần thì phiền, nên chọn loại không cốc.\nCâu trước đó nữa mô tả cái bình: 「コップが付いていない、直接口をつけて飲む水筒で、飲み物の温度が長時間変わらない物」 – không có cốc, uống trực tiếp, giữ nhiệt độ đồ uống lâu. Đáp án 1.\nLựa chọn 4 là bình THỨ HAI mà tác giả mua thêm vào mùa đông, không phải "cái bình này".',
          answer: 1, evidence: ['s3', 's4']
        },
        {
          label: '28',
          question: ['q2', '‹②[困|こま]ったこと›とあるが、どのようなことか。', '"Chuyện rắc rối" là gì?'],
          options: [
            ['{熱|あつ}い{飲|の}み{物|もの}を{外|そと}で{飲|の}む{機会|きかい}が{少|すく}なくなったこと。', 'Ít dịp uống đồ nóng bên ngoài.', 'Chưa đúng. Bài không nói về số lần uống đồ nóng bên ngoài.'],
            ['{熱|あつ}い{飲|の}み{物|もの}を{入|い}れたら、{水筒|すいとう}が{壊|こわ}れてしまったこと。', 'Bình bị hỏng khi cho đồ nóng vào.', 'Chưa đúng. Bình không hỏng. Vấn đề là đồ uống quá nóng.'],
            ['{熱|あつ}い{飲|の}み{物|もの}が{水筒|すいとう}から[直接|ちょくせつ]{飲|の}めなかったこと。', 'Không uống trực tiếp đồ nóng từ bình được.', 'Đúng. Đồ uống nóng quá nên không thể uống trực tiếp từ bình (熱すぎて、直接は飲めなかった).'],
            ['{熱|あつ}い{飲|の}み{物|もの}がすぐに[冷|さ]めてしまったこと。', 'Đồ nóng nguội nhanh.', 'Chưa đúng. Ngược lại, bình giữ nhiệt lâu nên đồ nóng vẫn nóng, đó mới là vấn đề.']
          ],
          guide: 'Câu hỏi hỏi "chuyện rắc rối" là gì. Câu ngay sau câu gạch chân trả lời luôn: 「熱すぎて、直接は飲めなかったのだ」 – nóng quá, không uống trực tiếp được.\nLý do là: bình giữ nhiệt rất tốt, mà lại không có cốc để rót ra cho nguội. Mùa hè đồ lạnh thì tốt, nhưng mùa đông đồ nóng thì không uống được. Đáp án 3.\nLựa chọn 4 là bẫy ngược: bình giữ nhiệt lâu, nên đồ nóng không hề nguội nhanh.',
          answer: 3, evidence: ['s6']
        },
        {
          label: '29',
          question: ['q3', '‹③{最初|さいしょ}に{考|かんが}えていたよりはお{金|かね}がかかってしまった›とあるが、それはなぜか。', '"Tốn tiền hơn dự tính" – vì sao?'],
          options: [
            ['ペットボトルを{買|か}うことが{増|ふ}えたから', 'Vì mua nước chai nhiều hơn.', 'Chưa đúng. Ngược lại, từ khi có bình tác giả không mua nước đóng chai nữa.'],
            ['とても{高|たか}い{水筒|すいとう}を{買|か}うことになったから', 'Vì phải mua bình rất đắt.', 'Chưa đúng. Tác giả nói cả hai bình đều không đắt lắm (それほど高くはなかった).'],
            ['{水筒|すいとう}とは{別|べつ}にコップも{買|か}うことになったから', 'Vì phải mua thêm cốc riêng.', 'Chưa đúng. Tác giả mua thêm một BÌNH có cốc, không phải mua cốc riêng.'],
            ['{水筒|すいとう}を2{本|ほん}も{買|か}うことになったから', 'Vì phải mua tới 2 bình.', 'Đúng. Định mua một bình là đủ, nhưng rốt cuộc phải mua thêm bình có cốc, thành hai bình.']
          ],
          guide: 'Câu hỏi hỏi vì sao tốn tiền hơn dự tính. Hãy theo dõi số lượng bình:\nLúc đầu: 「最初は1本あれば十分だと思っていた」 – nghĩ một bình là đủ.\nSau đó: 「結局、コップ付きの水筒も買った」 – rốt cuộc mua thêm cả bình có cốc. Chữ 「も」 (cũng) cho biết đây là bình thứ hai.\nDự tính một bình, thực tế hai bình, nên tốn hơn dự tính. Đáp án 4.\nChú ý: tác giả nói 「どちらの水筒もそれほど高くはなかった」 – cả hai bình đều không đắt lắm. Vậy tốn tiền là vì số lượng, không phải vì bình đắt.',
          answer: 4, evidence: ['s7', 's9']
        }
      ],
      summary: 'Tác giả lần đầu mua bình nước để khỏi tốn 5.000 yên/tháng tiền nước chai, chọn loại uống trực tiếp, giữ nhiệt (vì rót cốc phiền). Mùa hè ổn, nhưng mùa đông đồ nóng quá không uống trực tiếp được, nên mua thêm bình có cốc để làm nguội – tốn hơn dự tính, nhưng tác giả vẫn thấy hài lòng.',
      structure: [['Đoạn 1', 'Lý do mua bình'], ['Đoạn 2', 'Loại bình đã chọn (①)'], ['Đoạn 3', 'Rắc rối mùa đông (②) → mua thêm bình (③) → hài lòng']],
      grammar: [
        ['〜も（数量）', 'Tới tận…', '五千円もかかっていた・2本も'],
        ['〜にした', 'Đã chọn…', 'この水筒にした'],
        ['〜たら（発見）', 'Khi… thì (xảy ra)', '熱い飲み物を入れたら、困ったことが起きた'],
        ['それほど〜ない', 'Không… lắm', 'それほど高くはなかった'],
        ['〜よりは', 'So với… thì', '最初に考えていたよりは']
      ],
      tip: 'Theo dõi số lượng và loại bình: ban đầu 1 bình (không cốc) → sau thêm 1 bình (có cốc). Câu "最初は1本あれば十分だと思っていたが" là chìa khóa câu 29.'
    },

    {
      id: '5-2',
      kind: '中文・意見文',
      kindVi: 'Đoạn văn trung bình – văn nêu ý kiến',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{日本|にほん}では、{町|まち}の{中|なか}で@karasu(カラス)をよく{見|み}ます。', 'Ở Nhật, người ta hay thấy quạ trong thành phố.'],
          ['s2', 'カラスという{鳥|とり}は@heiki({平気|へいき}で){人間|にんげん}に{向|む}かって{飛|と}んできたり、{食|た}べ{物|もの}を{取|と}ったりするので、@iyagaru([嫌|いや]がる){人|ひと}もいます。', 'Quạ là loài chim thản nhiên bay về phía người hay cướp đồ ăn, nên có người ghét.']
        ] },
        { t: 'p', s: [
          ['s3', '{私|わたし}の{町|まち}では、{毎日|まいにち}{夕方|ゆうがた}になると、たくさんのカラスが、{公園|こうえん}の{木|き}で{寝|ね}るために{集|あつ}まってきます。', 'Ở thị trấn tôi, chiều nào cũng có rất nhiều quạ tụ về cây trong công viên để ngủ.'],
          ['s4', '{声|こえ}がうるさいし、{数|かず}が@hijou({非常|ひじょう}に){多|おお}いので{怖|こわ}さを{感|かん}じることもあります。', 'Tiếng kêu ồn ào, số lượng lại cực nhiều nên đôi khi thấy sợ.'],
          ['s5', 'それで{町|まち}の{人|ひと}たちはとても[困|こま]っています。', 'Vì vậy người dân rất khổ sở.'],
          ['s6', '‹①この{問題|もんだい}›の@kaiketsu([解決|かいけつ]){方法|ほうほう}はあるのでしょうか。', 'Liệu có cách giải quyết vấn đề này không?']
        ] },
        { t: 'p', s: [
          ['s7', 'ある{町|まち}では、@senmonka({専門家|せんもんか})の@kyouryoku([協力|きょうりょく])で{一|ひと}つの‹②@jikken([実験|じっけん])›に@seikou([成功|せいこう])しました。', 'Ở một thị trấn, nhờ sự hợp tác của chuyên gia, người ta đã thành công một thí nghiệm.'],
          ['s8', '@anzen({安全|あんぜん})な@joutai([状態|じょうたい])にいるときと@kiken([危険|きけん])を{感|かん}じたときのカラスの@nakikata([鳴|な]き{方|かた})の{違|ちが}いを{利用|りよう}して、「いてほしくない{場所|ばしょ}」から「{集|あつ}まっても{問題|もんだい}のない{場所|ばしょ}」にカラスを@idou({移動|いどう}させる)ことができたそうです。', 'Nghe nói họ đã tận dụng sự khác nhau trong tiếng kêu của quạ khi an toàn và khi cảm thấy nguy hiểm, để di chuyển quạ từ "nơi không muốn chúng ở" sang "nơi tụ tập cũng không sao".']
        ] },
        { t: 'p', s: [
          ['s9', 'しかし、{私|わたし}の{町|まち}には{大|おお}きな@mori({森|もり})など、カラスが「{集|あつ}まっても{問題|もんだい}のない{場所|ばしょ}」はありません。', 'Nhưng thị trấn tôi không có "nơi tụ tập cũng không sao" như khu rừng lớn.'],
          ['s10', 'ですから、{同|おな}じ{方法|ほうほう}は{使|つか}えそうにありません。', 'Vì thế, có vẻ không dùng được cách đó.'],
          ['s11', '{私|わたし}の{町|まち}に{合|あ}った[解決|かいけつ]{方法|ほうほう}が{見|み}つかればいいと{思|おも}います。', 'Tôi mong sẽ tìm được cách giải quyết phù hợp với thị trấn mình.']
        ] }
      ],
      notes: [], refs: {},
      questions: [
        {
          label: '30',
          question: ['q1', '‹①この{問題|もんだい}›とあるが、{何|なに}か。', '"Vấn đề này" là gì?'],
          options: [
            ['{日本|にほん}にカラスが{多|おお}すぎること。', 'Nhật Bản có quá nhiều quạ.', 'Chưa đúng. Quá chung chung. この問題 chỉ chuyện quạ tụ về công viên thị trấn tác giả (đoạn ngay trước).'],
            ['{日本|にほん}にカラスを[嫌|いや]がる{人|ひと}が{多|おお}いこと。', 'Ở Nhật nhiều người ghét quạ.', 'Chưa đúng. Đây là ý của đoạn 1 nói chung về người Nhật. この問題 chỉ chuyện ở thị trấn tác giả (đoạn 2).'],
            ['カラスが{人|ひと}に{向|む}かって{飛|と}んできたり、{食|た}べ{物|もの}を{取|と}ったりして、[危険|きけん]で[困|こま]ること。', 'Quạ bay về phía người, cướp đồ ăn, nguy hiểm.', 'Chưa đúng. Đây là nội dung đoạn 1, nói chung về quạ. "この" chỉ điều vừa nói ngay trước nó, tức đoạn 2.'],
            ['「{私|わたし}」の{町|まち}の{公園|こうえん}に、カラスが{夕方|ゆうがた}たくさん{集|あつ}まってきて、うるさくて{怖|こわ}いこと。', 'Quạ tụ về công viên thị trấn "tôi" mỗi chiều, ồn và đáng sợ.', 'Đúng. Ngay trước "この問題" là chuyện quạ tụ về công viên thị trấn tác giả mỗi chiều, kêu ồn và đông đến đáng sợ.']
          ],
          guide: 'Câu hỏi hỏi "vấn đề này" (この問題) là vấn đề gì. Chữ 「この」 chỉ điều vừa được nói ngay trước nó.\nBài có hai đoạn nói về quạ: đoạn 1 nói chung về quạ ở Nhật (bay về phía người, cướp đồ ăn); đoạn 2 nói về thị trấn của tác giả: chiều nào quạ cũng tụ về cây trong công viên để ngủ, kêu ồn ào, đông đến mức đáng sợ, người dân rất khổ sở. Ngay sau đó là câu có 「この問題」.\nVậy "vấn đề này" là chuyện quạ tụ tập ở công viên thị trấn tác giả. Đáp án 4.\nLựa chọn 3 là bẫy: nó nói đúng nội dung đoạn 1, nhưng "この" chỉ đoạn ngay trước (đoạn 2).',
          answer: 4, evidence: ['s3', 's4', 's5']
        },
        {
          label: '31',
          question: ['q2', 'どのような‹②[実験|じっけん]›か。', 'Đó là thí nghiệm gì?'],
          options: [
            ['カラスを「{集|あつ}まっても{問題|もんだい}のない{場所|ばしょ}」でよく{眠|ねむ}らせて、{静|しず}かにさせる[実験|じっけん]。', 'Cho quạ ngủ ngon ở nơi không sao để chúng im lặng.', 'Chưa đúng. Thí nghiệm không làm quạ ngủ hay im lặng. Nó chuyển quạ sang nơi khác.'],
            ['カラスが「いてほしくない{場所|ばしょ}」にいても、[鳴|な]き{声|ごえ}は{周|まわ}りに{聞|き}こえないようにする[実験|じっけん]。', 'Làm cho tiếng kêu không vọng ra xung quanh.', 'Chưa đúng. Thí nghiệm không làm tắt tiếng kêu. Ngược lại, nó tận dụng tiếng kêu.'],
            ['カラスの{苦手|にがて}な{食|た}べ{物|もの}を{利用|りよう}して、「いてほしくない{場所|ばしょ}」に{来|こ}ないようにする[実験|じっけん]。', 'Dùng thức ăn quạ ghét.', 'Chưa đúng. Thí nghiệm dùng tiếng kêu của quạ, không dùng thức ăn.'],
            ['カラスの[鳴|な]き{方|かた}の{違|ちが}いを{利用|りよう}して、「{集|あつ}まっても{問題|もんだい}のない{場所|ばしょ}」に{行|い}かせる[実験|じっけん]。', 'Dùng sự khác biệt tiếng kêu để đưa quạ đến nơi không sao.', 'Đúng. Dùng sự khác nhau giữa tiếng kêu khi an toàn và khi nguy hiểm để chuyển quạ đến "nơi tụ tập cũng không sao".']
          ],
          guide: 'Câu hỏi hỏi thí nghiệm ở thị trấn khác là gì. Câu ngay sau câu gạch chân mô tả nó: 「安全な状態にいるときと危険を感じたときのカラスの鳴き方の違いを利用して、『いてほしくない場所』から『集まっても問題のない場所』にカラスを移動させる」.\nNghĩa là: quạ kêu khác nhau khi thấy an toàn và khi thấy nguy hiểm. Người ta tận dụng sự khác biệt đó để chuyển quạ từ "nơi không muốn chúng ở" sang "nơi tụ tập cũng không sao". Đáp án 4.\nThí nghiệm này không làm quạ ngủ, không làm tắt tiếng kêu, cũng không dùng thức ăn.',
          answer: 4, evidence: ['s8']
        },
        {
          label: '32',
          question: ['q3', '「{私|わたし}」の{町|まち}のカラスの{問題|もんだい}について、「{私|わたし}」はどう{考|かんが}えているか。', '"Tôi" nghĩ gì về vấn đề quạ ở thị trấn mình?'],
          options: [
            ['「{私|わたし}」の{町|まち}で{成功|せいこう}した{方法|ほうほう}を、これからも{続|つづ}けていきたい。', 'Muốn tiếp tục cách đã thành công ở thị trấn mình.', 'Chưa đúng. Cách đó thành công ở thị trấn KHÁC, không phải ở thị trấn tác giả.'],
            ['「{私|わたし}」の{町|まち}でも、{別|べつ}の{町|まち}で{成功|せいこう}した{方法|ほうほう}を{使|つか}って[解決|かいけつ]してほしい。', 'Mong dùng cách của thị trấn khác.', 'Chưa đúng. Tác giả nói không dùng được cách đó (使えそうにありません).'],
            ['{別|べつ}の{町|まち}で{成功|せいこう}した{方法|ほうほう}とは{違|ちが}う、「{私|わたし}」の{町|まち}に{合|あ}った{新|あたら}しい{方法|ほうほう}が{必要|ひつよう}だ。', 'Cần cách mới phù hợp với thị trấn mình, khác cách của thị trấn kia.', 'Đúng. Tác giả nói không dùng được cách cũ, và mong tìm được cách phù hợp với thị trấn mình (私の町に合った解決方法).'],
            ['{別|べつ}の{町|まち}で{成功|せいこう}した{方法|ほうほう}は「{私|わたし}」の{町|まち}では{使|つか}えないから、[解決|かいけつ]はあきらめよう。', 'Không dùng được nên bỏ cuộc.', 'Chưa đúng. Tác giả không bỏ cuộc mà vẫn mong tìm được cách khác.']
          ],
          guide: 'Câu hỏi hỏi tác giả nghĩ gì về vấn đề quạ ở thị trấn mình. Ý kiến tác giả nằm ở đoạn cuối, sau chữ 「しかし」.\nĐoạn đó viết: thị trấn tác giả không có "nơi tụ tập cũng không sao" như rừng lớn, nên 「同じ方法は使えそうにありません」 – có vẻ không dùng được cách đó. Rồi: 「私の町に合った解決方法が見つかればいいと思います」 – mong tìm được cách phù hợp với thị trấn mình.\nVậy: cần một cách mới, phù hợp với thị trấn mình, khác cách của thị trấn kia. Đáp án 3.\nLựa chọn 4 là bẫy: tác giả nói không dùng được cách cũ, nhưng KHÔNG hề bỏ cuộc. Tác giả vẫn mong tìm ra cách khác.',
          answer: 3, evidence: ['s10', 's11']
        }
      ],
      summary: 'Quạ hay bị ghét vì bay về phía người, cướp đồ ăn. Ở thị trấn tác giả, chiều nào quạ cũng tụ về công viên, ồn và đáng sợ. Một thị trấn khác, nhờ chuyên gia, đã dùng sự khác biệt tiếng kêu của quạ (an toàn/nguy hiểm) để chuyển chúng sang nơi tụ tập không sao. Nhưng thị trấn tác giả không có nơi như rừng lớn nên không dùng được; tác giả mong tìm được cách phù hợp.',
      structure: [['Đoạn 1', 'Quạ nói chung'], ['Đoạn 2', 'Vấn đề ở thị trấn tác giả (①)'], ['Đoạn 3', 'Thí nghiệm thành công ở nơi khác (②)'], ['Đoạn 4', 'Không áp dụng được → cần cách riêng']],
      grammar: [
        ['〜たり〜たりする', 'Làm những việc như…', '飛んできたり、食べ物を取ったりする'],
        ['〜ために', 'Để…', '公園の木で寝るために'],
        ['〜てほしくない', 'Không muốn (ai) …', 'いてほしくない場所'],
        ['〜そうにありません', 'Có vẻ không thể…', '同じ方法は使えそうにありません'],
        ['〜ばいいと思います', 'Mong rằng…', '解決方法が見つかればいいと思います']
      ],
      tip: '"この問題" chỉ nội dung NGAY TRƯỚC nó (đoạn 2), không phải đoạn mở đầu nói chung. Ý kiến tác giả nằm ở đoạn cuối, sau "しかし".'
    }
  ]
};
