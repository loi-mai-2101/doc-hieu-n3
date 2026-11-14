/* Đề thi JLPT N3 tháng 7/2025 — Đọc hiểu: 問題4 (短文, câu 23–26) · 問題5 (中文, câu 27–32).
   Cú pháp đánh dấu: xem data/bai-1.js. Đáp án do giáo viên giải (đề không kèm đáp án). */
window.BAI = {
  id: 'de-t7-2025',
  title: 'Đề T7/2025',
  subtitle: 'JLPT N3 tháng 7/2025 · 短文 & 中文',

  vocab: {
    // 4-1
    seihin: { w: '製品', r: 'せいひん', hv: 'CHẾ PHẨM', vi: 'sản phẩm' },
    happyoukai: { w: '発表会', r: 'はっぴょうかい', hv: 'PHÁT BIỂU HỘI', vi: 'buổi ra mắt, buổi công bố' },
    shiryou: { w: '資料', r: 'しりょう', hv: 'TƯ LIỆU', vi: 'tài liệu' },
    kakikuwaeru: { w: '書き加える', r: 'かきくわえる', hv: 'THƯ GIA', vi: 'viết thêm' },
    naosu: { w: '直す', r: 'なおす', hv: 'TRỰC', vi: 'sửa' },
    gurafu: { w: 'グラフ', r: 'グラフ', hv: '', vi: 'biểu đồ' },
    bubun: { w: '部分', r: 'ぶぶん', hv: 'BỘ PHÂN', vi: 'phần' },
    konshuuchuu: { w: '今週中', r: 'こんしゅうちゅう', hv: 'KIM CHU TRUNG', vi: 'trong tuần này' },
    henshin: { w: '返信', r: 'へんしん', hv: 'PHẢN TÍN', vi: 'hồi âm' },
    tanomu: { w: '頼む', r: 'たのむ', hv: 'LẠI', vi: 'nhờ' },
    // 4-2
    toshokan: { w: '図書館', r: 'としょかん', hv: 'ĐỒ THƯ QUÁN', vi: 'thư viện' },
    noru: { w: '載る', r: 'のる', hv: 'TẢI', vi: 'được đăng' },
    kyuukan: { w: '休館', r: 'きゅうかん', hv: 'HƯU QUÁN', vi: 'đóng cửa (thư viện, bảo tàng)' },
    madoguchi: { w: '窓口', r: 'まどぐち', hv: 'SONG KHẨU', vi: 'quầy giao dịch' },
    kouji: { w: '工事', r: 'こうじ', hv: 'CÔNG SỰ', vi: 'thi công' },
    kikan: { w: '期間', r: 'きかん', hv: 'KỲ GIAN', vi: 'thời gian, giai đoạn' },
    ekibiru: { w: '駅ビル', r: 'えきビル', hv: 'DỊCH', vi: 'tòa nhà nhà ga' },
    kanou: { w: '可能', r: 'かのう', hv: 'KHẢ NĂNG', vi: 'có thể' },
    kimaru: { w: '決まる', r: 'きまる', hv: 'QUYẾT', vi: 'được quyết định' },
    fuben: { w: '不便', r: 'ふべん', hv: 'BẤT TIỆN', vi: 'bất tiện', note: 'ご不便をおかけします = xin lỗi vì gây bất tiện' },
    // 4-3
    kiji: { w: '記事', r: 'きじ', hv: 'KÝ SỰ', vi: 'bài báo' },
    kutsushita: { w: '靴下', r: 'くつした', hv: 'NGOA HẠ', vi: 'tất, vớ' },
    kamikoppu: { w: '紙コップ', r: 'かみコップ', hv: 'CHỈ', vi: 'cốc giấy' },
    joubu: { w: '丈夫', r: 'じょうぶ', hv: 'TRƯỢNG PHU', vi: 'bền, chắc' },
    ito: { w: '糸', r: 'いと', hv: 'MỊCH', vi: 'sợi chỉ' },
    sentaku: { w: '洗濯', r: 'せんたく', hv: 'TẨY TRẠC', vi: 'giặt giũ' },
    yosou: { w: '予想', r: 'よそう', hv: 'DỰ TƯỞNG', vi: 'dự đoán' },
    igai: { w: '意外', r: 'いがい', hv: 'Ý NGOẠI', vi: 'bất ngờ' },
    ase: { w: '汗', r: 'あせ', hv: 'HÃN', vi: 'mồ hôi' },
    suu: { w: '吸う', r: 'すう', hv: 'HẤP', vi: 'hút, thấm' },
    kawaku: { w: '乾く', r: 'かわく', hv: 'CAN', vi: 'khô' },
    kurikaesu: { w: '繰り返す', r: 'くりかえす', hv: 'SÀO PHẢN', vi: 'lặp lại' },
    // 4-4
    kanja: { w: '患者', r: 'かんじゃ', hv: 'HOẠN GIẢ', vi: 'bệnh nhân' },
    kayou: { w: '通う', r: 'かよう', hv: 'THÔNG', vi: 'đi lại (thường xuyên)' },
    naoru: { w: '治る', r: 'なおる', hv: 'TRỊ', vi: 'khỏi (bệnh)' },
    kanousei: { w: '可能性', r: 'かのうせい', hv: 'KHẢ NĂNG TÍNH', vi: 'khả năng' },
    itami: { w: '痛み', r: 'いたみ', hv: 'THỐNG', vi: 'cơn đau' },
    fukusuu: { w: '複数', r: 'ふくすう', hv: 'PHỨC SỐ', vi: 'nhiều (hơn một)' },
    // 5-1
    imouto: { w: '妹', r: 'いもうと', hv: 'MUỘI', vi: 'em gái' },
    niru: { w: '似る', r: 'にる', hv: 'TỰ', vi: 'giống' },
    shisei: { w: '姿勢', r: 'しせい', hv: 'TƯ THẾ', vi: 'thái độ, cách đối diện' },
    gyaku: { w: '逆', r: 'ぎゃく', hv: 'NGHỊCH', vi: 'ngược lại' },
    nigate: { w: '苦手', r: 'にがて', hv: 'KHỔ THỦ', vi: 'không thích, kém' },
    shukudai: { w: '宿題', r: 'しゅくだい', hv: 'TÚC ĐỀ', vi: 'bài tập về nhà' },
    awateru: { w: '慌てる', r: 'あわてる', hv: 'HOẢNG', vi: 'cuống cuồng' },
    ryoushin: { w: '両親', r: 'りょうしん', hv: 'LƯỠNG THÂN', vi: 'bố mẹ' },
    shikaru: { w: 'しかる（叱る）', r: 'しかる', hv: 'SẤT', vi: 'mắng' },
    homeru: { w: '褒める', r: 'ほめる', hv: 'BAO', vi: 'khen' },
    omoide: { w: '思い出', r: 'おもいで', hv: 'TƯ XUẤT', vi: 'kỷ niệm' },
    sakubun: { w: '作文', r: 'さくぶん', hv: 'TÁC VĂN', vi: 'bài văn' },
    naiyou: { w: '内容', r: 'ないよう', hv: 'NỘI DUNG', vi: 'nội dung' },
    uso: { w: 'うそ', r: 'うそ', hv: '', vi: 'lời nói dối, điều không thật' },
    kakinaosu: { w: '書き直す', r: 'かきなおす', hv: 'THƯ TRỰC', vi: 'viết lại' },
    seikaku: { w: '性格', r: 'せいかく', hv: 'TÍNH CÁCH', vi: 'tính cách' },
    kyouryoku: { w: '協力し合う', r: 'きょうりょくしあう', hv: 'HIỆP LỰC HỢP', vi: 'hợp tác với nhau' },
    jissai: { w: '実際に', r: 'じっさいに', hv: 'THỰC TẾ', vi: 'trên thực tế' },
    // 5-2
    karasu: { w: 'カラス', r: 'カラス', hv: '', vi: 'con quạ' },
    ubau: { w: '奪う', r: 'うばう', hv: 'ĐOẠT', vi: 'cướp, giật' },
    kaiketsu: { w: '解決する', r: 'かいけつする', hv: 'GIẢI QUYẾT', vi: 'giải quyết' },
    kenkyuujo: { w: '研究所', r: 'けんきゅうじょ', hv: 'NGHIÊN CỨU SỞ', vi: 'viện nghiên cứu' },
    souko: { w: '倉庫', r: 'そうこ', hv: 'THƯƠNG KHỐ', vi: 'nhà kho' },
    kowasu: { w: '壊す', r: 'こわす', hv: 'HOẠI', vi: 'làm hỏng' },
    yogosu: { w: '汚す', r: 'よごす', hv: 'Ô', vi: 'làm bẩn' },
    soudan: { w: '相談する', r: 'そうだんする', hv: 'TƯƠNG ĐÀM', vi: 'tham khảo ý kiến' },
    shinnyuukinshi: { w: '侵入禁止', r: 'しんにゅうきんし', hv: 'XÂM NHẬP CẤM CHỈ', vi: 'cấm xâm nhập' },
    joudan: { w: '冗談', r: 'じょうだん', hv: 'NHŨNG ĐÀM', vi: 'chuyện đùa' },
    hazu: { w: '〜はずがない', r: 'はずがない', hv: '', vi: 'không thể nào…' },
    kouka: { w: '効果', r: 'こうか', hv: 'HIỆU QUẢ', vi: 'hiệu quả' },
    fushigi: { w: '不思議', r: 'ふしぎ', hv: 'BẤT TƯ NGHỊ', vi: 'kỳ lạ' },
    kiken: { w: '危険', r: 'きけん', hv: 'NGUY HIỂM', vi: 'nguy hiểm' },
    koudou: { w: '行動', r: 'こうどう', hv: 'HÀNH ĐỘNG', vi: 'hành vi, hành động' },
    tachiirikinshi: { w: '立入禁止', r: 'たちいりきんし', hv: 'LẬP NHẬP CẤM CHỈ', vi: 'cấm vào' },
    omoitsuku: { w: '思いつく', r: 'おもいつく', hv: 'TƯ', vi: 'nghĩ ra' },
    kansatsu: { w: '観察する', r: 'かんさつする', hv: 'QUAN SÁT', vi: 'quan sát' },
    toriageru: { w: '取り上げる', r: 'とりあげる', hv: 'THỦ THƯỢNG', vi: 'đưa tin, nêu lên' }
  },

  problems: [
    /* ───────────── 問題4 (1) ───────────── */
    {
      id: '4-1',
      kind: '短文・メール（ビジネス）',
      kindVi: 'Đoạn văn ngắn – email công việc',
      style: 'mail',
      before: null,
      lead: ['l', 'これは、{同|おな}じ{会社|かいしゃ}の[木村|きむら]さんからジョンさんに[届|とど]いたメールである。', 'Đây là email John nhận được từ Kimura cùng công ty.'],
      blocks: [
        { t: 'lines', s: [['s0', 'ジョンさん', 'Gửi John']] },
        { t: 'p', s: [
          ['s1', '{先週|せんしゅう}は、@seihin([製品|せいひん])@happyoukai({発表会|はっぴょうかい})の{英語|えいご}@shiryou([資料|しりょう])のチェックをしてくれて、ありがとうございました。', 'Cảm ơn bạn tuần trước đã kiểm tra giúp tài liệu tiếng Anh cho buổi ra mắt sản phẩm.'],
          ['s2', 'チェックしてもらったあと、{少|すこ}し{文章|ぶんしょう}を@kakikuwaeru({書|か}き{加|くわ}え)ました。', 'Sau khi được bạn kiểm tra, tôi đã viết thêm một chút.'],
          ['s3', 'それから、@naosu({直|なお})したほうがいいとアドバイスをもらった@gurafu(グラフ)も{作|つく}り{直|なお}しました。', 'Ngoài ra, tôi cũng làm lại biểu đồ mà bạn khuyên nên sửa.'],
          ['s4', '{直|なお}した[資料|しりょう]をこのメールと{一緒|いっしょ}に{送|おく}りますので、もう{一度|いちど}{見|み}てもらえませんか。', 'Tôi gửi tài liệu đã sửa kèm email này, bạn xem lại giúp một lần nữa được không?'],
          ['s5', '{新|あたら}しく{書|か}き{加|くわ}えた@bubun({部分|ぶぶん})は、{赤|あか}い{字|じ}になっています。', 'Phần mới viết thêm được tô chữ đỏ.'],
          ['s6', 'すみませんが、@konshuuchuu({今週|こんしゅう}{中|ちゅう})にご@henshin([返信|へんしん])をお{願|ねが}いいたします。', 'Xin lỗi, nhưng mong bạn hồi âm trong tuần này.']
        ] },
        { t: 'lines', s: [['sg', '[木村|きむら]', 'Kimura']] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '23',
          question: ['q1', 'ジョンさんがこのメールで@tanomu([頼|たの]まれて)いることはどれか。', 'John được nhờ làm gì trong email này?'],
          options: [
            ['{今週|こんしゅう}{中|ちゅう}にもう{一度|いちど}、[資料|しりょう]のチェックをすること', 'Kiểm tra tài liệu thêm một lần nữa trong tuần này.', 'Đúng. 「もう一度見てもらえませんか」「今週中にご返信を」 (s4, s6).'],
            ['{今週|こんしゅう}{中|ちゅう}に[資料|しりょう]のチェックをするために[木村|きむら]さんと{会|あ}うこと', 'Gặp Kimura trong tuần để kiểm tra tài liệu.', 'Sai. Tài liệu gửi kèm email, không cần gặp.'],
            ['{今週|こんしゅう}{中|ちゅう}に{日本語|にほんご}の[資料|しりょう]を{英語|えいご}に{直|なお}すこと', 'Dịch tài liệu tiếng Nhật sang tiếng Anh.', 'Sai. Tài liệu đã là tiếng Anh; chỉ cần kiểm tra.'],
            ['{今週|こんしゅう}{中|ちゅう}に{新|あたら}しい[資料|しりょう]を{作|つく}ること', 'Làm tài liệu mới.', 'Sai. Kimura đã tự sửa, John chỉ xem lại.']
          ],
          answer: 1,
          evidence: ['s4', 's6']
        }
      ],
      summary: 'Kimura cảm ơn John đã kiểm tra tài liệu tiếng Anh cho buổi ra mắt sản phẩm; sau đó đã viết thêm và làm lại biểu đồ. Gửi kèm tài liệu đã sửa (phần thêm tô đỏ), nhờ John xem lại và hồi âm trong tuần này.',
      structure: [
        ['Câu 1', 'Cảm ơn lần kiểm tra trước'],
        ['Câu 2–3', 'Những gì Kimura đã sửa'],
        ['Câu 4–6', 'Lời nhờ: xem lại + hạn hồi âm → đáp án']
      ],
      grammar: [
        ['〜てくれて、ありがとう', 'Cảm ơn vì đã… cho tôi', 'チェックをしてくれて、ありがとうございました'],
        ['〜直す', 'Làm lại…', '作り直しました'],
        ['〜てもらえませんか', 'Có thể… giúp tôi không?', 'もう一度見てもらえませんか'],
        ['〜中に', 'Trong (khoảng thời gian)…', '今週中にご返信を']
      ],
      tip: 'Email nhờ vả: bỏ qua phần người viết tự làm (書き加えました、作り直しました), tìm mẫu 〜てもらえませんか / お願いいたします.'
    },

    /* ───────────── 問題4 (2) ───────────── */
    {
      id: '4-2',
      srcNotes: ['Đề in 「特別別窓口」 (lặp chữ 別). Bài đã sửa thành 「特別窓口」.'],
      kind: '短文・お知らせ',
      kindVi: 'Đoạn văn ngắn – thông báo thư viện',
      style: 'notice',
      before: null,
      lead: ['l', 'これは、ある@toshokan({図書館|としょかん})のホームページに@noru([載|の]って)いるお{知|し}らせである。', 'Đây là thông báo đăng trên trang chủ của một thư viện.'],
      blocks: [
        { t: 'title', s: [['t1', '[緑|みどり]{図書館|としょかん}', 'Thư viện Midori']] },
        { t: 'right', s: [['dt', '1{月|がつ}25{日|にち}', 'Ngày 25/1']] },
        { t: 'sub', s: [['h1', '{図書館|としょかん}の@kyuukan([休館|きゅうかん])と{特別|とくべつ}@madoguchi([窓口|まどぐち])のお{知|し}らせ', 'Thông báo đóng cửa thư viện và quầy đặc biệt']] },
        { t: 'p', s: [
          ['s1', '[緑|みどり]{図書館|としょかん}は、4{月|がつ}1{日|ついたち}から9{月|がつ}30{日|にち}まで、@kouji([工事|こうじ])のため[休館|きゅうかん]することになりました。', 'Thư viện Midori sẽ đóng cửa từ 1/4 đến 30/9 để thi công.'],
          ['s2', 'この@kikan({期間|きかん})は、[水森|みずもり]{駅|えき}の@ekibiru({駅|えき}ビル)「グラン」3{階|がい}に{特別|とくべつ}[窓口|まどぐち]を{開|ひら}きます。', 'Trong thời gian này, quầy đặc biệt sẽ mở ở tầng 3 tòa nhà ga "Gran" của ga Mizumori.']
        ] },
        { t: 'p', s: [
          ['s3', '{特別|とくべつ}[窓口|まどぐち]では、{予約|よやく}した{本|ほん}を{借|か}りることと{本|ほん}を{返|かえ}すことができます。', 'Ở quầy đặc biệt có thể mượn sách đã đặt trước và trả sách.'],
          ['s4', '{本|ほん}や{新聞|しんぶん}を{読|よ}む{場所|ばしょ}はありません。', 'Không có chỗ đọc sách, báo.'],
          ['s5', 'なお、{本|ほん}の{予約|よやく}は、インターネットでの{予約|よやく}が{便利|べんり}ですが、{特別|とくべつ}[窓口|まどぐち]でも@kanou({可能|かのう})です。', 'Ngoài ra, đặt sách thì đặt qua mạng tiện hơn, nhưng cũng có thể đặt ở quầy đặc biệt.']
        ] },
        { t: 'p', s: [
          ['s6', 'ご{利用|りよう}{可能|かのう}{時間|じかん}は、@kimaru({決|き}まり)ましたら、ホームページでお{知|し}らせします。', 'Giờ phục vụ sẽ được thông báo trên trang chủ khi quyết định.'],
          ['s7', 'ご@fuben({不便|ふべん})をおかけしますが、よろしくお{願|ねが}いいたします。', 'Xin lỗi vì sự bất tiện, mong quý vị thông cảm.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '24',
          question: ['q1', '{駅|えき}ビルの{特別|とくべつ}[窓口|まどぐち]でできることはなんですか。', 'Ở quầy đặc biệt trong tòa nhà ga có thể làm gì?'],
          options: [
            ['{予約|よやく}した{本|ほん}を{借|か}りることと、{本|ほん}を{返|かえ}すことと、{本|ほん}を{読|よ}むことと、{本|ほん}の{予約|よやく}をすること', 'Mượn sách đã đặt, trả sách, đọc sách, đặt sách.', 'Sai. Không có chỗ đọc sách (s4).'],
            ['{予約|よやく}した{本|ほん}を{借|か}りること、{本|ほん}を{返|かえ}すことと、{本|ほん}を{読|よ}むこと', 'Mượn sách đã đặt, trả sách, đọc sách.', 'Sai. Không đọc được; thiếu việc đặt sách.'],
            ['{予約|よやく}した{本|ほん}を{借|か}りること、{本|ほん}を{返|かえ}すことと、{本|ほん}の{予約|よやく}をすること', 'Mượn sách đã đặt, trả sách, đặt sách.', 'Đúng. Mượn + trả (s3), đặt sách cũng được ở quầy (s5).'],
            ['{予約|よやく}した{本|ほん}を{借|か}りること、{本|ほん}を{返|かえ}すことだけ', 'Chỉ mượn sách đã đặt và trả sách.', 'Sai. Bỏ sót: đặt sách cũng làm được ở quầy (なお…特別窓口でも可能).']
          ],
          answer: 3,
          evidence: ['s3', 's4', 's5']
        }
      ],
      summary: 'Thư viện Midori đóng cửa thi công từ 1/4 đến 30/9; mở quầy đặc biệt ở tầng 3 tòa nhà ga Mizumori. Quầy cho mượn sách đã đặt, trả sách, cũng nhận đặt sách (đặt qua mạng tiện hơn); không có chỗ đọc. Giờ phục vụ sẽ thông báo sau.',
      structure: [
        ['Tiêu đề', 'Đóng cửa + quầy đặc biệt'],
        ['Đoạn 1', 'Thời gian đóng cửa, vị trí quầy'],
        ['Đoạn 2', 'Làm được / không làm được + なお (thông tin bổ sung)'],
        ['Đoạn 3', 'Giờ phục vụ sẽ báo sau']
      ],
      grammar: [
        ['〜ため', 'Vì… (lý do, văn viết)', '工事のため休館することになりました'],
        ['〜ことができます', 'Có thể…', '本を借りることと本を返すことができます'],
        ['なお、〜', 'Ngoài ra, xin lưu ý…', 'なお、本の予約は…特別窓口でも可能です'],
        ['〜ましたら', 'Khi đã… (lịch sự)', '決まりましたら、ホームページでお知らせします']
      ],
      tip: 'Câu hỏi "できること" kiểu liệt kê: đọc cả câu "なお…" vì nó thường bổ sung thêm một việc làm được. Lựa chọn có "だけ" thường là bẫy bỏ sót.'
    },

    /* ───────────── 問題4 (3) ───────────── */
    {
      id: '4-3',
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{昨日|きのう}、[雑誌|ざっし]で「{紙|かみ}から{作|つく}られた@kutsushita([靴下|くつした])」という@kiji([記事|きじ])を{読|よ}んだ。', 'Hôm qua, tôi đọc trên tạp chí bài báo "Tất làm từ giấy".'],
          ['s2', 'そのタイトルを{見|み}たとき、{私|わたし}は、@kamikoppu({紙|かみ}コップ)のように、{一度|いちど}{使|つか}ったら{捨|す}ててしまう{物|もの}なのだろうと{思|おも}った。', 'Khi thấy tiêu đề, tôi nghĩ chắc đó là thứ dùng một lần rồi vứt như cốc giấy.'],
          ['s3', 'しかし、{記事|きじ}によると、その[靴下|くつした]は、{特別|とくべつ}な{紙|かみ}で{作|つく}った@joubu({丈夫|じょうぶ})な@ito({糸|いと})でできているそうだ。', 'Nhưng theo bài báo, đôi tất đó được làm từ sợi bền chế từ loại giấy đặc biệt.'],
          ['s4', '{紙|かみ}なのに{水|みず}に{強|つよ}く、@sentaku([洗濯|せんたく])をして{何度|なんど}も{使|つか}えると{書|か}かれていた。', 'Bài viết rằng dù là giấy nhưng chịu nước tốt, có thể giặt và dùng nhiều lần.'],
          ['s5', '‹@yosou([予想|よそう])と{違|ちが}っていて、@igai({意外|いがい})だった›。', 'Khác với dự đoán, thật bất ngờ.'],
          ['s6', 'よく@ase([汗|あせ])を@suu({吸|す}って)すぐ@kawaku([乾|かわ]く)ので、{長|なが}い{時間|じかん}[靴|くつ]をはく{人|ひと}にいいそうだ。', 'Nghe nói vì thấm mồ hôi tốt và mau khô nên hợp với người mang giày lâu.'],
          ['s7', '{今度|こんど}、{買|か}ってみようと{思|おも}う。', 'Lần tới tôi định mua thử.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '25',
          question: ['q1', '‹[予想|よそう]と{違|ちが}っていて、{意外|いがい}だった›とあるが、{何|なに}が{意外|いがい}だったのか。', '"Khác với dự đoán, thật bất ngờ" – điều gì bất ngờ?'],
          options: [
            ['{紙|かみ}コップのように、{一度|いちど}{使|つか}ったら{捨|す}てる{紙|かみ}の[靴下|くつした]があること', 'Có tất giấy dùng một lần rồi vứt như cốc giấy.', 'Sai. Đây là DỰ ĐOÁN ban đầu, không phải sự thật.'],
            ['{記事|きじ}で{紹介|しょうかい}されていた[靴下|くつした]は、[洗濯|せんたく]ができ、@kurikaesu({繰|く}り{返|かえ})して{使|つか}えること', 'Đôi tất trong bài giặt được và dùng lại nhiều lần.', 'Đúng. Dự đoán "dùng một lần" ↔ thực tế "giặt và dùng nhiều lần" (s2, s4) – ngay trước câu gạch chân.'],
            ['{記事|きじ}で{紹介|しょうかい}されていた[靴下|くつした]は、よく[汗|あせ]を{吸|す}ってすぐ[乾|かわ]くこと', 'Đôi tất thấm mồ hôi tốt và mau khô.', 'Sai. Thông tin này nằm SAU câu gạch chân, không đối lập với dự đoán.'],
            ['{長|なが}い{時間|じかん}[靴|くつ]をはく{人|ひと}のための[靴下|くつした]があること', 'Có loại tất dành cho người mang giày lâu.', 'Sai. Thông tin này nằm SAU câu gạch chân và không đối lập với dự đoán "dùng một lần".']
          ],
          answer: 2,
          evidence: ['s2', 's4', 's5']
        }
      ],
      summary: 'Tác giả đọc bài báo về tất làm từ giấy, ban đầu nghĩ là đồ dùng một lần như cốc giấy. Nhưng tất làm từ sợi bền chế từ giấy đặc biệt, chịu nước, giặt được và dùng nhiều lần – khác dự đoán nên bất ngờ. Tất còn thấm mồ hôi, mau khô; tác giả định mua thử.',
      structure: [
        ['Câu 1–2', 'Dự đoán ban đầu (dùng một lần)'],
        ['Câu 3–4', 'Thực tế (しかし): bền, giặt được, dùng nhiều lần'],
        ['Câu 5', 'Cảm nghĩ "意外だった"'],
        ['Câu 6–7', 'Ưu điểm khác + dự định']
      ],
      grammar: [
        ['〜という記事', 'Bài báo có tên / nói rằng…', '「紙から作られた靴下」という記事'],
        ['〜のように', 'Giống như…', '紙コップのように'],
        ['〜によると〜そうだ', 'Theo… thì nghe nói…', '記事によると…できているそうだ'],
        ['〜なのに', 'Mặc dù là…', '紙なのに水に強く']
      ],
      tip: 'Cảm xúc "意外だった / 予想と違っていた" → so sánh câu "〜と思った" (dự đoán) với câu sau "しかし" (thực tế). Điều bất ngờ là phần thực tế đối lập với dự đoán.'
    },

    /* ───────────── 問題4 (4) ───────────── */
    {
      id: '4-4',
      kind: '短文・説明文',
      kindVi: 'Đoạn văn ngắn – văn giải thích',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{体|からだ}が{痛|いた}くて{病院|びょういん}に@kayou({通|かよ}って)いる@kanja([患者|かんじゃ])が、{悪|わる}いところが@naoru({治|なお}って)きたときに、‹「{別|べつ}のところが{痛|いた}くなってきた。{今度|こんど}はそっちが{悪|わる}いみたいだ。」と{言|い}う›ことがある。', 'Có khi bệnh nhân đi viện vì đau, đến lúc chỗ đau đỡ dần lại nói: "Chỗ khác bắt đầu đau. Lần này có vẻ chỗ đó bị sao rồi."'],
          ['s2', 'このような{場合|ばあい}、{実|じつ}は、その{人|ひと}には{最初|さいしょ}から{悪|わる}いところがいくつかあった@kanousei([可能性|かのうせい])がある。', 'Trường hợp như vậy, thật ra có khả năng người đó ngay từ đầu đã có nhiều chỗ bị đau.'],
          ['s3', '{人|ひと}の{体|からだ}は、{同|おな}じときに{一|ひと}つの@itami({痛|いた}み)しか{感|かん}じない。', 'Cơ thể con người cùng một lúc chỉ cảm nhận được một cơn đau.'],
          ['s4', 'そのときにいちばん{強|つよ}い{痛|いた}みだけを{感|かん}じるのである。', 'Nó chỉ cảm nhận cơn đau mạnh nhất lúc đó.'],
          ['s5', 'この[患者|かんじゃ]は、{最|もっと}も{悪|わる}かったところが{治|なお}ってきたので、{次|つぎ}の{痛|いた}みを{感|かん}じるようになってきたと{考|かんが}えられる。', 'Có thể cho rằng bệnh nhân này vì chỗ đau nặng nhất đã đỡ nên bắt đầu cảm nhận được cơn đau tiếp theo.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '26',
          question: ['q1', 'この{文章|ぶんしょう}では、[患者|かんじゃ]が‹「{別|べつ}のところが{痛|いた}くなってきた。{今度|こんど}はそっちが{悪|わる}いみたいだ。」と{言|い}う›のは、なぜだと{言|い}っているか。', 'Bài nói vì sao bệnh nhân lại nói "Chỗ khác bắt đầu đau…"?'],
          options: [
            ['{悪|わる}いところが{治|なお}ってきたときに、@fukusuu([複数|ふくすう])の{痛|いた}みを{感|かん}じるようになることがあるから', 'Vì khi chỗ đau đỡ, có thể cảm nhận nhiều cơn đau cùng lúc.', 'Sai. Cơ thể chỉ cảm nhận MỘT cơn đau mỗi lúc (s3).'],
            ['{悪|わる}いところが{治|なお}って、{次|つぎ}に{悪|わる}かったところがもっと{悪|わる}くなってしまうことがあるから', 'Vì chỗ đau thứ hai trở nặng hơn.', 'Sai. Chỗ đó không nặng thêm, chỉ là giờ mới cảm thấy.'],
            ['{痛|いた}いところがいくつかあっても、[患者|かんじゃ]は{一|ひと}つずつしか{伝|つた}えないことがあるから', 'Vì bệnh nhân chỉ kể từng chỗ đau một.', 'Sai. Vấn đề là cảm nhận, không phải cách kể.'],
            ['{痛|いた}かったところがよくなると、{別|べつ}のところの{痛|いた}みを{感|かん}じるようになることがあるから', 'Vì khi chỗ đau đỡ thì bắt đầu cảm thấy cơn đau ở chỗ khác.', 'Đúng. 「最も悪かったところが治ってきたので、次の痛みを感じるようになってきた」 (s5).']
          ],
          answer: 4,
          evidence: ['s3', 's4', 's5']
        }
      ],
      summary: 'Bệnh nhân khi đỡ đau thường nói "giờ chỗ khác lại đau". Thật ra có thể ngay từ đầu đã có nhiều chỗ đau, nhưng cơ thể chỉ cảm nhận cơn đau mạnh nhất tại một thời điểm. Khi chỗ nặng nhất đỡ, người ta mới cảm thấy cơn đau tiếp theo.',
      structure: [
        ['Câu 1', 'Hiện tượng (gạch chân)'],
        ['Câu 2', 'Giải thích (実は…可能性がある)'],
        ['Câu 3–4', 'Cơ chế: chỉ cảm nhận 1 cơn đau mạnh nhất'],
        ['Câu 5', 'Kết luận áp dụng cho bệnh nhân → đáp án']
      ],
      grammar: [
        ['〜てきた', 'Dần dần trở nên…', '治ってきた・痛くなってきた'],
        ['〜みたいだ', 'Có vẻ như… (văn nói)', 'そっちが悪いみたいだ'],
        ['〜しか〜ない', 'Chỉ…', '一つの痛みしか感じない'],
        ['〜と考えられる', 'Có thể cho rằng…', '次の痛みを感じるようになってきたと考えられる']
      ],
      tip: 'Văn giải thích hiện tượng: câu cuối (〜と考えられる) là kết luận áp dụng trực tiếp. Loại các lựa chọn mâu thuẫn với "原理" (同じときに一つの痛みしか感じない).'
    },

    /* ───────────── 問題5 (1) ───────────── */
    {
      id: '5-1',
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút về chị em',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{私|わたし}と@imouto({妹|いもうと})は、{顔|かお}はとても@niru({似|に}て)いると{言|い}われますが、{嫌|きら}いな{物|もの}や[嫌|いや]なことに{対|たい}する@shisei([姿勢|しせい])は@gyaku([逆|ぎゃく])です。', 'Tôi và em gái hay bị nói là mặt rất giống nhau, nhưng cách đối diện với thứ mình ghét hay việc mình không thích thì ngược nhau.'],
          ['s2', '{例|たと}えば、{食事|しょくじ}で@nigate([苦手|にがて])な{物|もの}があったとき、{私|わたし}は{最後|さいご}に{食|た}べますが、{妹|いもうと}は{最初|さいしょ}に{食|た}べてしまいます。', 'Ví dụ, khi bữa ăn có món không thích, tôi để ăn cuối cùng, còn em gái thì ăn ngay đầu tiên.']
        ] },
        { t: 'p', s: [
          ['s3', 'もう{一|ひと}つ‹①{例|れい}›があります。', 'Còn một ví dụ nữa.'],
          ['s4', '{私|わたし}たちが{通|かよ}っていた{小学校|しょうがっこう}では、{毎年|まいとし}{夏休|なつやす}みに@shukudai({宿題|しゅくだい})がたくさん{出|で}ました。', 'Ở trường tiểu học chúng tôi học, mỗi năm nghỉ hè đều có rất nhiều bài tập.'],
          ['s5', '{妹|いもうと}はいつもすぐに{終|お}わらせましたが、{私|わたし}は{夏休|なつやす}みが{終|お}わる{数|すう}{日|じつ}{前|まえ}になって@awateru([慌|あわ]てて)やり{始|はじ}めました。', 'Em gái lúc nào cũng làm xong ngay, còn tôi đến vài ngày trước khi hết hè mới cuống cuồng làm.'],
          ['s6', 'それで、{毎年|まいとし}、{私|わたし}は@ryoushin({両親|りょうしん})に@shikaru(しかられ)ました。', 'Vì thế, năm nào tôi cũng bị bố mẹ mắng.']
        ] },
        { t: 'p', s: [
          ['s7', 'しかし、ある{年|とし}、‹②{妹|いもうと}もしかられた›ことがありました。', 'Nhưng có một năm, em gái cũng bị mắng.'],
          ['s8', 'その{年|とし}も、{妹|いもうと}は{夏休|なつやす}みが{始|はじ}まってすぐに、すべての{宿題|しゅくだい}を{終|お}わってしまいました。', 'Năm đó, em gái cũng làm xong hết bài tập ngay khi kỳ nghỉ hè vừa bắt đầu.'],
          ['s9', 'そのときは、{両親|りょうしん}は{妹|いもうと}を@homeru([褒|ほ]めて)いました。', 'Lúc đó, bố mẹ đã khen em.'],
          ['s10', 'でも、{両親|りょうしん}は、その{中|なか}に「{今年|ことし}の{夏休|なつやす}みの@omoide({思|おも}い{出|で})」という@sakubun({作文|さくぶん})の{宿題|しゅくだい}があったことに、{気|き}がついていなかったのです。', 'Nhưng bố mẹ đã không để ý rằng trong đó có bài tập làm văn "Kỷ niệm kỳ nghỉ hè năm nay".'],
          ['s11', '{夏休|なつやす}みの{最後|さいご}の{日|ひ}、{母|はは}は{作文|さくぶん}の@naiyou({内容|ないよう})が@uso(うそ)であることに{気|き}づいて、@kakinaosu({書|か}き{直|なお}させ)ました。', 'Ngày cuối kỳ nghỉ, mẹ phát hiện nội dung bài văn là bịa, nên bắt em viết lại.']
        ] },
        { t: 'p', s: [
          ['s12', 'その{日|ひ}は、{私|わたし}も{妹|いもうと}も、しかられながら{机|つくえ}に{向|む}かいました。', 'Hôm đó, cả tôi và em gái đều vừa bị mắng vừa ngồi vào bàn học.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '27',
          question: ['q1', '‹①{例|れい}›とあるが、{何|なに}についての{例|れい}か。', '"Ví dụ" – ví dụ về điều gì?'],
          options: [
            ['「{私|わたし}」と{妹|いもうと}は、{顔|かお}だけでなく、@seikaku({性格|せいかく})も{似|に}ているということ', 'Hai chị em không chỉ giống mặt mà còn giống tính cách.', 'Sai. Ngược lại – tính cách đối lập.'],
            ['「{私|わたし}」と{妹|いもうと}は、{嫌|きら}いな{物|もの}や[嫌|いや]なことに{対|たい}する[姿勢|しせい]が[逆|ぎゃく]だということ', 'Hai chị em có cách đối diện với điều không thích ngược nhau.', 'Đúng. "もう一つ例" = ví dụ thứ hai cho câu chủ đề s1 (ví dụ thứ nhất là món ăn).'],
            ['「{私|わたし}」と{妹|いもうと}は、@kyouryoku([協力|きょうりょく]し{合|あ}って){夏休|なつやす}みの{宿題|しゅくだい}をしていたということ', 'Hai chị em cùng nhau làm bài tập hè.', 'Sai. Mỗi người làm một kiểu.'],
            ['「{私|わたし}」と{妹|いもうと}は、{毎年|まいとし}{夏休|なつやす}みには{必|かなら}ず{両親|りょうしん}にしかられていたこと', 'Năm nào nghỉ hè hai chị em cũng bị mắng.', 'Sai. Chỉ "tôi" bị mắng hằng năm.']
          ],
          answer: 2,
          evidence: ['s1', 's2', 's3']
        },
        {
          label: '28',
          question: ['q2', '「{私|わたし}」と{妹|いもうと}は、{毎年|まいとし}の{夏休|なつやす}みの{宿題|しゅくだい}をどう{思|おも}っていたか。', '"Tôi" và em gái nghĩ gì về bài tập hè hằng năm?'],
          options: [
            ['「{私|わたし}」も{妹|いもうと}も{好|す}きだった。', 'Cả hai đều thích.', 'Sai. Nếu thích thì không phải ví dụ về "điều không thích".'],
            ['「{私|わたし}」も{妹|いもうと}も[嫌|いや]だった。', 'Cả hai đều không thích.', 'Đúng. Bài tập hè là ví dụ về "嫌なこと": em làm ngay (như ăn món ghét trước), tôi để cuối (như ăn món ghét sau) (s1–s5).'],
            ['「{私|わたし}」は{好|す}きだったが、{妹|いもうと}は[嫌|いや]だった。', 'Tôi thích, em không thích.', 'Sai. Điểm khác nhau là cách xử lý, không phải thích/ghét.'],
            ['「{私|わたし}」は[嫌|いや]だったが、{妹|いもうと}は{好|す}きだった。', 'Tôi không thích, em thích.', 'Sai. Em làm ngay không phải vì thích, mà vì kiểu người làm việc ghét trước.']
          ],
          answer: 2,
          evidence: ['s1', 's2', 's5']
        },
        {
          label: '29',
          question: ['q3', '‹②{妹|いもうと}もしかられた›とあるが、{妹|いもうと}はなぜしかられたのか。', '"Em gái cũng bị mắng" – vì sao?'],
          options: [
            ['{夏休|なつやす}みが{終|お}わる{数|すう}{日|じつ}{前|まえ}になって{宿題|しゅくだい}をやり{始|はじ}めたから', 'Vì vài ngày trước khi hết hè mới bắt đầu làm bài.', 'Sai. Đó là "tôi".'],
            ['「{私|わたし}」の{作文|さくぶん}と{同|おな}じことを「{今年|ことし}の{夏休|なつやす}みの{思|おも}い{出|で}」に{書|か}いたから', 'Vì viết giống bài văn của "tôi".', 'Sai. Bài không nói em chép bài của "tôi"; vấn đề là nội dung bài văn là bịa (うそ).'],
            ['「{今年|ことし}の{夏休|なつやす}みの{思|おも}い{出|で}」に、@jissai({実際|じっさい}に)はしていないことを{書|か}いたから', 'Vì viết vào bài "Kỷ niệm hè năm nay" những việc chưa thực sự làm.', 'Đúng. Em làm xong bài ngay đầu hè nên phải bịa kỷ niệm; mẹ phát hiện "うそ" (s8, s11).'],
            ['「{今年|ことし}の{夏休|なつやす}みの{思|おも}い{出|で}」を、{夏休|なつやす}みの{最後|さいご}の{日|ひ}まで{書|か}かなかったから', 'Vì đến ngày cuối hè mới viết bài.', 'Sai. Em đã viết xong ngay từ đầu hè.']
          ],
          answer: 3,
          evidence: ['s8', 's10', 's11']
        }
      ],
      summary: 'Hai chị em giống mặt nhưng cách đối diện với việc không thích thì ngược nhau: em làm ngay, tôi để cuối (món ăn, bài tập hè). Năm nào tôi cũng bị mắng vì cuối hè mới cuống cuồng làm bài. Có năm em làm hết bài ngay đầu hè, được khen, nhưng bài văn "Kỷ niệm hè năm nay" là bịa nên bị mẹ bắt viết lại. Hôm đó cả hai chị em đều bị mắng.',
      structure: [
        ['Đoạn 1', 'Chủ đề: tính cách đối lập + ví dụ 1 (món ăn)'],
        ['Đoạn 2', 'Ví dụ 2 (①): bài tập hè'],
        ['Đoạn 3', 'Một năm em cũng bị mắng (②) + lý do'],
        ['Đoạn 4', 'Kết thúc']
      ],
      grammar: [
        ['〜に対する', 'Đối với…', '嫌なことに対する姿勢'],
        ['〜てしまう', 'Làm xong luôn', '最初に食べてしまいます'],
        ['〜になって（やっと）', 'Mãi đến… mới', '数日前になって慌ててやり始めました'],
        ['〜ことに気がつく', 'Nhận ra rằng…', '宿題があったことに、気がついていなかった'],
        ['〜させる（使役）', 'Bắt (ai) làm…', '書き直させました'],
        ['〜ながら', 'Vừa… vừa…', 'しかられながら机に向かいました']
      ],
      tip: 'Câu 28 là câu suy luận: bài tập hè được đưa ra làm "ví dụ" cho câu chủ đề "嫌いな物や嫌なことに対する姿勢" → bài tập là "嫌なこと" với CẢ HAI. Luôn nối ví dụ với câu chủ đề mà nó minh họa.'
    },

    /* ───────────── 問題5 (2) ───────────── */
    {
      id: '5-2',
      srcNotes: ['Câu 32, lựa chọn 4 đề in 「「カラス侵入禁止」と聞かれた紙」 – lỗi in của 「書かれた紙」 (tờ giấy có ghi). Bài đã sửa.'],
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút về loài quạ',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '@karasu(カラス)は、{人間|にんげん}の{食|た}べ{物|もの}を@ubau([奪|うば]ったり)するので、{嫌|きら}われることが{多|おお}い{鳥|とり}だ。', 'Quạ là loài chim thường bị ghét vì hay cướp đồ ăn của con người.'],
          ['s2', 'そのカラスについて、ある{問題|もんだい}を@kaiketsu([解決|かいけつ])した{人|ひと}のニュースを{見|み}た。', 'Tôi đã xem bản tin về một người giải quyết được một vấn đề liên quan đến quạ.']
        ] },
        { t: 'p', s: [
          ['s3', 'ある{大学|だいがく}の@kenkyuujo({研究所|けんきゅうじょ})の{建物|たてもの}に、@souko([倉庫|そうこ])として{使|つか}っている{場所|ばしょ}がある。', 'Trong tòa nhà viện nghiên cứu của một trường đại học có một chỗ dùng làm nhà kho.'],
          ['s4', 'そこに、カラスが{入|はい}ってきて{物|もの}を@kowasu([壊|こわ]したり)@yogosu([汚|よご]したり)するので、{研究所|けんきゅうじょ}の{人|ひと}は[困|こま]っていた。', 'Quạ vào đó làm hỏng, làm bẩn đồ đạc, khiến người trong viện rất khổ sở.'],
          ['s5', 'それで、カラスの{研究者|けんきゅうしゃ}に@soudan({相談|そうだん})した。', 'Vì vậy họ đã hỏi ý kiến một nhà nghiên cứu về quạ.'],
          ['s6', '「カラス@shinnyuukinshi([侵入|しんにゅう][禁止|きんし])※」と{書|か}いた{紙|かみ}をはったらどうかと{言|い}われた。', 'Họ được khuyên: "Thử dán tờ giấy ghi \'Cấm quạ xâm nhập\' xem sao?"'],
          ['s7', '{最初|さいしょ}は‹①@joudan([冗談|じょうだん])だと{思|おも}った›が、{実際|じっさい}にやってみると、‹②{本当|ほんとう}に{来|こ}なくなった›そうだ。', 'Ban đầu họ nghĩ đó là chuyện đùa, nhưng làm thử thì nghe nói quạ thật sự không đến nữa.']
        ] },
        { t: 'p', s: [
          ['s8', 'カラスは{字|じ}が{読|よ}める@hazu(はずがない)のに、なぜこの{紙|かみ}に@kouka([効果|こうか])があったのだろうか。', 'Quạ không thể nào đọc được chữ, vậy tại sao tờ giấy này lại hiệu quả?'],
          ['s9', 'この{研究者|けんきゅうしゃ}によると、カラスはそこを{通|とお}って{紙|かみ}を{見|み}た{人|ひと}が@fushigi([不思議|ふしぎ])に{思|おも}って、{近|ちか}くにいるカラスをよく{見|み}る。', 'Theo nhà nghiên cứu này, người đi qua đó thấy tờ giấy sẽ thấy lạ và nhìn kỹ những con quạ ở gần.'],
          ['s10', 'すると、カラスは@kiken([危険|きけん])を{感|かん}じて{来|こ}なくなる。', 'Thế là quạ cảm thấy nguy hiểm và không đến nữa.'],
          ['s11', 'カラスは{人間|にんげん}に{見|み}られるのを{嫌|きら}うのだそうだ。', 'Nghe nói quạ ghét bị con người nhìn.']
        ] },
        { t: 'p', s: [
          ['s12', 'ニュースを{見|み}て{私|わたし}は、この{研究者|けんきゅうしゃ}がカラスの@koudou([行動|こうどう])だけでなく、{人間|にんげん}の[行動|こうどう]についても、しっかり‹③[予想|よそう]できていた›のだろうと{感|かん}じた。', 'Xem bản tin, tôi cảm thấy nhà nghiên cứu này không chỉ đoán trước được hành vi của quạ mà cả hành vi của con người.']
        ] }
      ],
      notes: ['（注）[侵入|しんにゅう][禁止|きんし]：@tachiirikinshi({立入|たちいり}[禁止|きんし])'],
      refs: {},
      questions: [
        {
          label: '30',
          question: ['q1', '‹①[冗談|じょうだん]だと{思|おも}った›とあるが、なぜそう{思|おも}ったのか。', '"Nghĩ là chuyện đùa" – vì sao?'],
          options: [
            ['カラスが{文字|もじ}を{読|よ}めないと{意味|いみ}がない{方法|ほうほう}だから', 'Vì đây là cách vô nghĩa nếu quạ không đọc được chữ.', 'Đúng. 「カラスは字が読めるはずがないのに」 (s8) – dán chữ cho quạ đọc nghe như đùa.'],
            ['カラスの{研究者|けんきゅうしゃ}でなくても@omoitsuku({思|おも}いつく)ような{方法|ほうほう}だから', 'Vì cách này ai cũng nghĩ ra được.', 'Sai. Bài không bàn chuyện ai nghĩ ra được; điều khiến họ tưởng đùa là quạ không thể đọc chữ.'],
            ['カラスの{研究者|けんきゅうしゃ}でないと{実行|じっこう}できないような{方法|ほうほう}だから', 'Vì chỉ nhà nghiên cứu mới làm được.', 'Sai. Dán giấy thì ai cũng làm được.'],
            ['カラスがいなくならず、[逆|ぎゃく]に、{集|あつ}まってしまいそうな{方法|ほうほう}だから', 'Vì có vẻ sẽ khiến quạ tụ tập nhiều hơn.', 'Sai. Không có ý nào nói tờ giấy sẽ làm quạ tụ tập.']
          ],
          answer: 1,
          evidence: ['s6', 's7', 's8']
        },
        {
          label: '31',
          question: ['q2', '‹②{本当|ほんとう}に{来|こ}なくなった›とあるが、なぜか。', '"Thật sự không đến nữa" – vì sao?'],
          options: [
            ['[倉庫|そうこ]が{汚|きたな}くなって、カラスが{好|す}きな{場所|ばしょ}ではなくなったから', 'Vì nhà kho bẩn, quạ không thích nữa.', 'Sai. Nhà kho bị quạ làm bẩn là VẤN ĐỀ ban đầu, không phải lý do quạ bỏ đi.'],
            ['カラスが{今|いま}までなかった{紙|かみ}を{見|み}て、[危険|きけん]な{場所|ばしょ}になったと{感|かん}じたから', 'Vì quạ thấy tờ giấy lạ nên cảm thấy nơi đó nguy hiểm.', 'Sai. Quạ sợ ÁNH NHÌN của người, không phải tờ giấy.'],
            ['{研究者|けんきゅうしゃ}が@kansatsu([観察|かんさつ])しに{来|く}るようになったことを、カラスが{嫌|きら}ったから', 'Vì quạ ghét nhà nghiên cứu đến quan sát.', 'Sai. Người nhìn quạ là người đi ngang qua.'],
            ['カラスをよく{見|み}る{人|ひと}が{増|ふ}えて、カラスが[危険|きけん]を{感|かん}じたから', 'Vì người nhìn quạ nhiều hơn, quạ cảm thấy nguy hiểm.', 'Đúng. Người thấy giấy → nhìn quạ → quạ cảm thấy nguy hiểm (s9–s11).']
          ],
          answer: 4,
          evidence: ['s9', 's10', 's11']
        },
        {
          label: '32',
          question: ['q3', '‹③[予想|よそう]できていた›とあるが、{人間|にんげん}の[行動|こうどう]について、{研究者|けんきゅうしゃ}はどのように[予想|よそう]していたと{考|かんが}えられるか。', '"Đã đoán trước được" – nhà nghiên cứu đã đoán hành vi con người thế nào?'],
          options: [
            ['ニュースで@toriageru({取|と}り{上|あ}げられて){有名|ゆうめい}になった{場所|ばしょ}には、{行|い}ってみたくなる。', 'Người ta muốn đến chỗ nổi tiếng nhờ lên bản tin.', 'Sai. Bài không nói gì về việc nơi đó nổi tiếng hay người ta muốn đến.'],
            ['カラスに{入|はい}って{欲|ほ}しくない{場所|ばしょ}には、カラスが{入|はい}らないような[工夫|くふう]をする。', 'Người ta nghĩ cách để quạ không vào chỗ mình không muốn.', 'Sai. Đó là việc của viện nghiên cứu; câu hỏi hỏi hành vi của NGƯỜI ĐI ĐƯỜNG khi thấy tờ giấy.'],
            ['カラスがいる{場所|ばしょ}では、[危険|きけん]を{感|かん}じてカラスの{近|ちか}くに{行|い}かないようにする。', 'Thấy quạ thì sợ, tránh lại gần.', 'Sai. Ngược lại – người ta tò mò và NHÌN quạ kỹ hơn.'],
            ['「カラス[侵入|しんにゅう][禁止|きんし]」と{書|か}かれた{紙|かみ}を{見|み}たら、{近|ちか}くにいるカラスを{観察|かんさつ}したくなる。', 'Thấy giấy "Cấm quạ xâm nhập" thì muốn quan sát quạ ở gần.', 'Đúng. 「紙を見た人が不思議に思って、近くにいるカラスをよく見る」 (s9). Con người thấy tờ giấy lạ sẽ nhìn quạ – đó chính là hành vi nhà nghiên cứu đã đoán trước.']
          ],
          answer: 4,
          evidence: ['s9', 's12']
        }
      ],
      summary: 'Quạ hay vào nhà kho viện nghiên cứu phá phách. Nhà nghiên cứu quạ khuyên dán giấy "Cấm quạ xâm nhập"; tưởng đùa (quạ đâu đọc được chữ) nhưng quạ thật sự không đến nữa. Lý do: người qua đường thấy giấy lạ nên nhìn kỹ quạ, quạ ghét bị người nhìn nên cảm thấy nguy hiểm. Tác giả cho rằng nhà nghiên cứu đã đoán trước cả hành vi của con người.',
      structure: [
        ['Đoạn 1', 'Giới thiệu: quạ bị ghét + bản tin'],
        ['Đoạn 2', 'Vấn đề → lời khuyên → tưởng đùa (①) → hiệu quả (②)'],
        ['Đoạn 3', 'Giải thích cơ chế (なぜ…だろうか → によると…)'],
        ['Đoạn 4', 'Cảm nghĩ của tác giả (③)']
      ],
      grammar: [
        ['〜たり〜たりする', 'Làm những việc như…', '物を壊したり汚したりする'],
        ['〜たらどうか', 'Thử… thì sao?', '紙をはったらどうかと言われた'],
        ['〜はずがない', 'Không thể nào…', 'カラスは字が読めるはずがない'],
        ['すると', 'Thế là, ngay sau đó', 'すると、カラスは危険を感じて来なくなる'],
        ['〜だけでなく〜も', 'Không chỉ… mà còn…', 'カラスの行動だけでなく、人間の行動についても']
      ],
      tip: 'Bài có chuỗi nhân quả nhiều bước (giấy → người thấy lạ → người nhìn quạ → quạ thấy nguy hiểm). Câu 31 hỏi bước CUỐI (vì sao quạ không đến), câu 32 hỏi bước GIỮA (hành vi con người). Vẽ chuỗi ra giấy giúp không chọn nhầm.'
    }
  ]
};
