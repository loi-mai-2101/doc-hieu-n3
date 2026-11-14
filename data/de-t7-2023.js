/* Đề thi JLPT N3 tháng 7/2023 — Đọc hiểu: 問題4 (短文, câu 23–26) · 問題5 (中文, câu 27–32).
   Cú pháp đánh dấu: xem data/bai-1.js. Đáp án do giáo viên giải (đề không kèm đáp án). */
window.BAI = {
  id: 'de-t7-2023',
  title: 'Đề T7/2023',
  subtitle: 'JLPT N3 tháng 7/2023 · 短文 & 中文',

  vocab: {
    // 4-1
    chirashi: { w: 'ちらし', r: 'ちらし', hv: '', vi: 'tờ rơi' },
    tomari: { w: 'お泊まり', r: 'おとまり', hv: 'BẠC', vi: 'việc nghỉ lại (khách sạn)' },
    natsumatsuri: { w: '夏祭り', r: 'なつまつり', hv: 'HẠ TẾ', vi: 'lễ hội mùa hè' },
    kaijou: { w: '会場', r: 'かいじょう', hv: 'HỘI TRƯỜNG', vi: 'địa điểm tổ chức' },
    kanou: { w: '可能', r: 'かのう', hv: 'KHẢ NĂNG', vi: 'có thể' },
    yukata: { w: '浴衣', r: 'ゆかた', hv: 'DỤC Y', vi: 'yukata (kimono mùa hè)' },
    muryou: { w: '無料', r: 'むりょう', hv: 'VÔ LIỆU', vi: 'miễn phí' },
    obi: { w: '帯', r: 'おび', hv: 'ĐỚI', vi: 'đai lưng (của kimono)' },
    tokubetsuryoukin: { w: '特別料金', r: 'とくべつりょうきん', hv: 'ĐẶC BIỆT LIỆU KIM', vi: 'giá đặc biệt' },
    kasu: { w: '貸す', r: 'かす', hv: 'THẢI', vi: 'cho mượn, cho thuê', note: 'お貸しします = (chúng tôi) cho thuê (khiêm nhường)' },
    kikata: { w: '着方', r: 'きかた', hv: 'TRƯỚC PHƯƠNG', vi: 'cách mặc' },
    tetsudai: { w: '手伝い', r: 'てつだい', hv: 'THỦ TRUYỀN', vi: 'sự giúp đỡ', note: 'お手伝いいたします = chúng tôi xin giúp' },
    kibou: { w: '希望', r: 'きぼう', hv: 'HY VỌNG', vi: 'mong muốn', note: 'ご希望の方 = quý khách nào có nhu cầu' },
    moushikomu: { w: '申し込む', r: 'もうしこむ', hv: 'THÂN NHẬP', vi: 'đăng ký' },
    // 4-2
    ryuugaku: { w: '留学する', r: 'りゅうがくする', hv: 'LƯU HỌC', vi: 'du học' },
    kikoku: { w: '帰国する', r: 'きこくする', hv: 'QUY QUỐC', vi: 'về nước' },
    shiriai: { w: '知り合い', r: 'しりあい', hv: 'TRI HỢP', vi: 'người quen' },
    tanomu: { w: '頼む', r: 'たのむ', hv: 'LẠI', vi: 'nhờ' },
    jikka: { w: '実家', r: 'じっか', hv: 'THỰC GIA', vi: 'nhà bố mẹ, nhà mình ở quê' },
    seiri: { w: '整理する', r: 'せいりする', hv: 'CHỈNH LÝ', vi: 'sắp xếp, dọn dẹp' },
    sakubun: { w: '作文', r: 'さくぶん', hv: 'TÁC VĂN', vi: 'bài văn' },
    sukkari: { w: 'すっかり', r: 'すっかり', hv: '', vi: 'hoàn toàn' },
    odoroku: { w: '驚く', r: 'おどろく', hv: 'KINH', vi: 'ngạc nhiên' },
    ganbaru: { w: '頑張る', r: 'がんばる', hv: 'NGOAN TRƯƠNG', vi: 'cố gắng' },
    // 4-3
    shoutaiken: { w: '招待券', r: 'しょうたいけん', hv: 'CHIÊU ĐÃI KHOÁN', vi: 'vé mời' },
    shiai: { w: '試合', r: 'しあい', hv: 'THÍ HỢP', vi: 'trận đấu' },
    kaijou2: { w: '開場', r: 'かいじょう', hv: 'KHAI TRƯỜNG', vi: 'mở cửa (hội trường, sân)' },
    yakyuujou: { w: '野球場', r: 'やきゅうじょう', hv: 'DÃ CẦU TRƯỜNG', vi: 'sân bóng chày' },
    jimushitsu: { w: '事務室', r: 'じむしつ', hv: 'SỰ VỤ THẤT', vi: 'văn phòng' },
    shuugou: { w: '集合する', r: 'しゅうごうする', hv: 'TẬP HỢP', vi: 'tập trung' },
    toujitsu: { w: '当日', r: 'とうじつ', hv: 'ĐƯƠNG NHẬT', vi: 'ngày hôm đó' },
    fukusou: { w: '服装', r: 'ふくそう', hv: 'PHỤC TRANG', vi: 'trang phục' },
    kanarazu: { w: '必ず', r: 'かならず', hv: 'TẤT', vi: 'nhất định, bắt buộc' },
    // 4-4
    jikken: { w: '実験', r: 'じっけん', hv: 'THỰC NGHIỆM', vi: 'thí nghiệm' },
    kenkyuusha: { w: '研究者', r: 'けんきゅうしゃ', hv: 'NGHIÊN CỨU GIẢ', vi: 'nhà nghiên cứu' },
    yogore: { w: '汚れ', r: 'よごれ', hv: 'Ô', vi: 'vết bẩn' },
    kagami: { w: '鏡', r: 'かがみ', hv: 'KÍNH', vi: 'cái gương' },
    suna: { w: '砂', r: 'すな', hv: 'SA', vi: 'cát' },
    otosu: { w: '落とす', r: 'おとす', hv: 'LẠC', vi: 'làm rơi; tẩy (vết bẩn)' },
    ugoki: { w: '動き', r: 'うごき', hv: 'ĐỘNG', vi: 'chuyển động, động tác' },
    kakunin: { w: '確認する', r: 'かくにんする', hv: 'XÁC NHẬN', vi: 'kiểm tra lại' },
    dousa: { w: '動作', r: 'どうさ', hv: 'ĐỘNG TÁC', vi: 'động tác' },
    jibunjishin: { w: '自分自身', r: 'じぶんじしん', hv: 'TỰ PHÂN TỰ THÂN', vi: 'chính bản thân mình' },
    saru: { w: 'サル（猿）', r: 'さる', hv: 'VIÊN', vi: 'con khỉ' },
    // 5-1
    yuujin: { w: '友人', r: 'ゆうじん', hv: 'HỮU NHÂN', vi: 'bạn bè' },
    shako: { w: '車庫', r: 'しゃこ', hv: 'XA KHỐ', vi: 'nhà để xe, ga-ra' },
    kabe: { w: '壁', r: 'かべ', hv: 'BÍCH', vi: 'bức tường' },
    butsukeru: { w: 'ぶつける', r: 'ぶつける', hv: '', vi: 'đâm vào, va vào' },
    jishin: { w: '自信', r: 'じしん', hv: 'TỰ TÍN', vi: 'sự tự tin' },
    anzen: { w: '安全', r: 'あんぜん', hv: 'AN TOÀN', vi: 'an toàn' },
    fuan: { w: '不安', r: 'ふあん', hv: 'BẤT AN', vi: 'lo lắng, bất an' },
    oka: { w: '丘', r: 'おか', hv: 'KHÂU', vi: 'ngọn đồi' },
    saka: { w: '坂', r: 'さか', hv: 'PHẢN', vi: 'con dốc' },
    nimotsu: { w: '荷物', r: 'にもつ', hv: 'HÀ VẬT', vi: 'hành lý, đồ đạc' },
    hikkosu: { w: '引っ越す', r: 'ひっこす', hv: 'DẪN VIỆT', vi: 'chuyển nhà' },
    kinjo: { w: '近所', r: 'きんじょ', hv: 'CẬN SỞ', vi: 'hàng xóm, gần nhà' },
    chuumon: { w: '注文する', r: 'ちゅうもんする', hv: 'CHÚ VĂN', vi: 'đặt hàng' },
    shouhin: { w: '商品', r: 'しょうひん', hv: 'THƯƠNG PHẨM', vi: 'hàng hóa' },
    todokeru: { w: '届ける', r: 'とどける', hv: 'GIỚI', vi: 'giao tới, mang tới' },
    chokusetsu: { w: '直接', r: 'ちょくせつ', hv: 'TRỰC TIẾP', vi: 'trực tiếp' },
    yokujitsu: { w: '翌日', r: 'よくじつ', hv: 'DỰC NHẬT', vi: 'ngày hôm sau' },
    shinamono: { w: '品物', r: 'しなもの', hv: 'PHẨM VẬT', vi: 'món hàng' },
    haitatsuryou: { w: '配達料', r: 'はいたつりょう', hv: 'PHỐI ĐẠT LIỆU', vi: 'phí giao hàng' },
    juuyou: { w: '重要', r: 'じゅうよう', hv: 'TRỌNG YẾU', vi: 'quan trọng' },
    yosou: { w: '予想', r: 'よそう', hv: 'DỰ TƯỞNG', vi: 'dự đoán' },
    manzoku: { w: '満足する', r: 'まんぞくする', hv: 'MÃN TÚC', vi: 'hài lòng' },
    // 5-2
    gaman: { w: '我慢する', r: 'がまんする', hv: 'NGÃ MẠN', vi: 'nhịn, chịu đựng' },
    sawagu: { w: '騒ぐ', r: 'さわぐ', hv: 'TAO', vi: 'làm ồn' },
    azukeru: { w: '預ける', r: 'あずける', hv: 'DỰ', vi: 'gửi (nhờ trông)' },
    azukaru: { w: '預かる', r: 'あずかる', hv: 'DỰ', vi: 'nhận trông giữ' },
    bijutsukan: { w: '美術館', r: 'びじゅつかん', hv: 'MỸ THUẬT QUÁN', vi: 'bảo tàng mỹ thuật' },
    oyako: { w: '親子', r: 'おやこ', hv: 'THÂN TỬ', vi: 'cha mẹ và con cái' },
    kufuu: { w: '工夫する', r: 'くふうする', hv: 'CÔNG PHU', vi: 'nghĩ cách, sáng tạo cách làm' },
    kowagaru: { w: '怖がる', r: 'こわがる', hv: 'BỐ', vi: 'sợ hãi' },
    anshin: { w: '安心する', r: 'あんしんする', hv: 'AN TÂM', vi: 'yên tâm' },
    sewa: { w: '世話', r: 'せわ', hv: 'THẾ THOẠI', vi: 'chăm sóc' },
    onryou: { w: '音量', r: 'おんりょう', hv: 'ÂM LƯỢNG', vi: 'âm lượng' },
    kankyou: { w: '環境', r: 'かんきょう', hv: 'HOÀN CẢNH', vi: 'môi trường' },
    teema: { w: 'テーマ', r: 'テーマ', hv: '', vi: 'chủ đề' }
  },

  problems: [
    /* ───────────── 問題4 (1) ───────────── */
    {
      id: '4-1',
      kind: '短文・ちらし',
      kindVi: 'Đoạn văn ngắn – tờ rơi khách sạn',
      style: 'notice',
      before: null,
      lead: ['l', 'これは、あるホテルにチェックインした{人|ひと}が、フロントでもらった@chirashi(ちらし)である。', 'Đây là tờ rơi mà một người check-in ở khách sạn nhận được tại quầy lễ tân.'],
      blocks: [
        { t: 'title', s: [
          ['t1', '8{月|がつ}11{日|にち}・12{日|にち}にホテル[岩中|いわなか]に@tomari(お[泊|と]まり)のお{客様|きゃくさま}', 'Kính gửi quý khách nghỉ tại khách sạn Iwanaka ngày 11 và 12/8'],
          ['t2', '「[岩中|いわなか]{村|むら}@natsumatsuri([夏祭|なつまつ]り)」のご[案内|あんない]', 'Thông tin về "Lễ hội mùa hè làng Iwanaka"']
        ] },
        { t: 'p', s: [
          ['s1', '8{月|がつ}11{日|にち}（{土|ど}）・12{日|にち}（{日|にち}）に、[岩中|いわなか]{公園|こうえん}で[夏祭|なつまつ]りが{行|おこな}われます。', 'Ngày 11 (thứ Bảy) và 12 (Chủ nhật) tháng 8, lễ hội mùa hè sẽ được tổ chức tại công viên Iwanaka.'],
          ['s2', '@kaijou({会場|かいじょう})とホテルの{間|あいだ}は、ホテルのバスのご{利用|りよう}が@kanou({可能|かのう})です（{約|やく}5{分|ふん}）。', 'Giữa địa điểm lễ hội và khách sạn, quý khách có thể sử dụng xe buýt của khách sạn (khoảng 5 phút).']
        ] },
        { t: 'p', s: [
          ['s3', '@yukata([浴衣|ゆかた])を{着|き}ている{方|かた}は、{会場|かいじょう}{内|ない}の{店|みせ}でもドリンクが1[杯|ぱい]@muryou({無料|むりょう})になります。', 'Ai mặc yukata sẽ được miễn phí 1 ly đồ uống ở các quầy trong khu lễ hội.'],
          ['s4', '[皆様|みなさま]も、[浴衣|ゆかた]を{着|き}て{出|で}かけてみてはいかがでしょうか。', 'Quý khách cũng thử mặc yukata ra ngoài xem sao nhé?']
        ] },
        { t: 'p', s: [
          ['s5', 'ホテルでは、お{好|す}きな[浴衣|ゆかた]と@obi([帯|おび])を@tokubetsuryoukin({特別|とくべつ}{料金|りょうきん})【1{日|にち}2000{円|えん}】で@kasu(お[貸|か]しします)', 'Khách sạn cho thuê yukata và đai lưng tùy chọn với giá đặc biệt [2.000 yên/ngày]'],
          ['s6', '（[浴衣|ゆかた]の@kikata({着方|きかた})がわからない{方|かた}は、@tetsudai(お[手伝|てつだ]いいたします)）。', '(Ai không biết cách mặc yukata, chúng tôi sẽ giúp).'],
          ['s7', 'ご@kibou([希望|きぼう])の{方|かた}は、フロントでお@moushikomu([申|もう]し[込|こ]み)ください。', 'Quý khách có nhu cầu xin đăng ký tại quầy lễ tân.']
        ] },
        { t: 'right', s: [['sg', 'ホテル[岩中|いわなか]', 'Khách sạn Iwanaka']] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '23',
          question: ['q1', '[夏祭|なつまつ]りの{日|ひ}にホテル[岩中|いわなか]に[泊|と]まっている{人|ひと}が、ホテルから{受|う}けられるサービスとして{合|あ}っているのはどれか。', 'Dịch vụ mà người nghỉ tại khách sạn Iwanaka vào ngày lễ hội có thể nhận từ khách sạn là gì?'],
          options: [
            ['[浴衣|ゆかた]を{着|き}れば、[夏祭|なつまつ]り[会場|かいじょう]まで、ホテルのバスが{利用|りよう}できる。', 'Nếu mặc yukata thì được đi xe buýt khách sạn tới lễ hội.', 'Chưa đúng. Xe buýt của khách sạn thì ai cũng đi được, bài không đặt điều kiện phải mặc yukata. Lựa chọn này đã lấy điều kiện "mặc yukata" của ưu đãi đồ uống gắn nhầm sang xe buýt.'],
            ['ホテルのレストランで、ドリンクが1[杯|ぱい][無料|むりょう]で{飲|の}める。', 'Được uống miễn phí 1 ly ở nhà hàng khách sạn.', 'Chưa đúng. Đồ uống miễn phí là ở các quầy trong khu lễ hội (会場内の店), không phải ở nhà hàng của khách sạn, và đó là ưu đãi của lễ hội chứ không phải của khách sạn.'],
            ['ホテルから、{好|す}きな[浴衣|ゆかた]と[帯|おび]を{特別|とくべつ}{料金|りょうきん}で{借|か}りられる。', 'Được thuê yukata và đai lưng tùy chọn với giá đặc biệt.', 'Đúng. Bài viết rõ khách sạn cho thuê yukata và đai lưng theo ý thích với giá đặc biệt (お好きな浴衣と帯を特別料金でお貸しします). Đây đúng là dịch vụ "từ khách sạn".'],
            ['[浴衣|ゆかた]と[帯|おび]の{料金|りょうきん}のほかに2,000{円|えん}{払|はら}えば、ホテルの{人|ひと}に{着|き}るのを[手伝|てつだ]ってもらえる。', 'Trả thêm 2.000 yên ngoài tiền thuê thì nhân viên giúp mặc.', 'Chưa đúng. 2.000 yên chính là tiền thuê yukata và đai lưng cho một ngày. Việc nhân viên giúp mặc (お手伝いいたします) không tính thêm tiền, nên "trả thêm 2.000 yên" là sai.']
          ],
          guide: 'Câu hỏi hỏi: người nghỉ ở khách sạn Iwanaka được KHÁCH SẠN cung cấp dịch vụ gì? Chữ quan trọng nhất là 「ホテルから」 (từ phía khách sạn). Tờ rơi này nói về hai bên khác nhau: lễ hội và khách sạn, nên bạn phải tách rõ cái nào của ai.\nĐoạn thứ hai nói về lễ hội: ai mặc yukata thì được một ly đồ uống miễn phí ở các quầy trong khu lễ hội. Đây là ưu đãi của lễ hội, không phải của khách sạn.\nĐoạn thứ ba mới nói về khách sạn: 「ホテルでは、お好きな浴衣と帯を特別料金【1日2000円】でお貸しします」 – khách sạn cho thuê yukata và đai lưng theo ý thích với giá đặc biệt 2.000 yên một ngày. Đây chính là đáp án 3.\nMẹo: với loại tờ rơi nhiều thông tin, hãy gạch chân "ai làm – ở đâu – điều kiện gì" cho từng câu. Các lựa chọn sai thường lấy điều kiện của câu này ghép vào câu khác.',
          answer: 3,
          evidence: ['s5']
        }
      ],
      summary: 'Khách sạn Iwanaka thông báo lễ hội mùa hè ngày 11–12/8: có xe buýt khách sạn đưa đón (5 phút); ai mặc yukata được 1 ly miễn phí tại lễ hội; khách sạn cho thuê yukata + đai 2.000 yên/ngày, có người giúp mặc; đăng ký ở quầy lễ tân.',
      structure: [
        ['Tiêu đề', 'Đối tượng: khách nghỉ ngày 11–12/8'],
        ['Đoạn 1', 'Thời gian, địa điểm, xe buýt'],
        ['Đoạn 2', 'Ưu đãi của LỄ HỘI cho người mặc yukata'],
        ['Đoạn 3', 'Dịch vụ của KHÁCH SẠN: cho thuê yukata, giúp mặc → đáp án']
      ],
      grammar: [
        ['ご〜が可能です', 'Có thể… (lịch sự)', 'バスのご利用が可能です'],
        ['〜てみてはいかがでしょうか', 'Thử… xem sao? (gợi ý lịch sự)', '浴衣を着て出かけてみてはいかがでしょうか'],
        ['お〜します / 〜いたします', 'Khiêm nhường ngữ: (chúng tôi) làm…', 'お貸しします・お手伝いいたします'],
        ['お〜ください', 'Xin hãy… (tôn kính)', 'フロントでお申し込みください']
      ],
      tip: 'Câu hỏi "サービスとして合っているのは" → phân biệt rõ AI cung cấp (khách sạn hay lễ hội), Ở ĐÂU (khách sạn hay hội trường) và ĐIỀU KIỆN (mặc yukata, trả tiền…). Các lựa chọn sai thường ghép nhầm điều kiện của câu này sang câu khác.'
    },

    /* ───────────── 問題4 (2) ───────────── */
    {
      id: '4-2',
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{先月|せんげつ}、@ryuugaku([留学|りゅうがく])していたアメリカから@kikoku([帰国|きこく])した。', 'Tháng trước, tôi đã về nước từ Mỹ, nơi tôi du học.'],
          ['s2', 'そして、@shiriai({知|し}り{合|あ}い)に@tanomu([頼|たの]まれ)、4{月|がつ}から{大学|だいがく}で[数学|すうがく]を{教|おし}えることになった。', 'Rồi được người quen nhờ, từ tháng 4 tôi sẽ dạy toán ở trường đại học.'],
          ['s3', '{働|はたら}き{始|はじ}める{前|まえ}に、@jikka([実家|じっか])の{部屋|へや}を@seiri([整理|せいり])しようと{思|おも}って[掃除|そうじ]をしていたら、{小学生|しょうがくせい}のときに{書|か}いた「{私|わたし}の{夢|ゆめ}」という@sakubun({作文|さくぶん})が{出|で}てきた。', 'Trước khi bắt đầu đi làm, tôi định dọn dẹp phòng ở nhà bố mẹ, đang lau dọn thì thấy bài văn "Ước mơ của em" tôi viết hồi tiểu học.'],
          ['s4', 'そこには、{先生|せんせい}になりたいと{書|か}いてあった。', 'Trong đó có viết rằng em muốn trở thành giáo viên.'],
          ['s5', 'そんなことは@sukkari(すっかり){忘|わす}れていたが、{小|ちい}さいときにそう{書|か}いていたのだ。', 'Tôi đã hoàn toàn quên chuyện đó, nhưng hồi nhỏ mình đã viết như vậy.'],
          ['s6', 'とても@odoroku([驚|おどろ]いた)が、{子供|こども}のころの{夢|ゆめ}が{本当|ほんとう}になったのだし、‹@ganbaru([頑張|がんば]ろう)›と{思|おも}う。', 'Tôi rất ngạc nhiên, nhưng vì ước mơ hồi nhỏ đã thành sự thật, nên tôi nghĩ mình sẽ cố gắng.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '24',
          question: ['q1', '‹[頑張|がんば]ろう›とあるが、どうしてそう{思|おも}ったのか。', '"Sẽ cố gắng" – vì sao tác giả nghĩ vậy?'],
          options: [
            ['{自分|じぶん}でも{忘|わす}れていた、アメリカに[留学|りゅうがく]したいという{夢|ゆめ}が{本当|ほんとう}になったから。', 'Vì ước mơ du học Mỹ mà chính mình đã quên đã thành sự thật.', 'Chưa đúng. Ước mơ viết trong bài văn hồi nhỏ là làm giáo viên, không phải đi du học Mỹ. Du học chỉ là chuyện tác giả đã làm xong trước đó.'],
            ['{自分|じぶん}でも{忘|わす}れていた、{先生|せんせい}になりたいという{夢|ゆめ}が{本当|ほんとう}になったから。', 'Vì ước mơ làm giáo viên mà chính mình đã quên đã thành sự thật.', 'Đúng. Tác giả từng viết muốn làm giáo viên, rồi quên hẳn (すっかり忘れていた), nay lại sắp dạy đại học. Ước mơ đã quên mà vẫn thành sự thật, nên tác giả quyết tâm cố gắng.'],
            ['{子供|こども}のころからずっと{行|い}きたいと{思|おも}い{続|つづ}けていたアメリカに[留学|りゅうがく]できたから。', 'Vì đã du học được ở Mỹ – nơi luôn muốn đến từ nhỏ.', 'Chưa đúng. Bài không nói du học Mỹ là ước mơ từ nhỏ, cũng không phải điều làm tác giả muốn cố gắng.'],
            ['{子供|こども}のころからずっとなりたいと{思|おも}い{続|つづ}けていた{先生|せんせい}になれたから。', 'Vì đã trở thành giáo viên – điều luôn mong muốn từ nhỏ.', 'Chưa đúng. Nghe rất giống đáp án đúng, nhưng có chữ "ずっと…思い続けていた" (luôn luôn mong muốn). Thực tế tác giả đã quên hẳn ước mơ này, nên lựa chọn này sai ở đúng chi tiết đó.']
          ],
          guide: 'Câu hỏi hỏi lý do tác giả nghĩ "mình sẽ cố gắng" (頑張ろう). Lý do nằm ngay trước câu đó: 「子供のころの夢が本当になったのだし」 – "vì ước mơ hồi nhỏ đã thành sự thật".\nVậy ước mơ hồi nhỏ là gì? Quay lên trên: trong bài văn hồi tiểu học, tác giả viết 「先生になりたい」 – muốn làm giáo viên. Và bây giờ tác giả sắp dạy toán ở đại học, tức là đã thành giáo viên.\nCòn một chi tiết nữa để chọn giữa đáp án 2 và 4: tác giả nói 「そんなことはすっかり忘れていた」 – "tôi đã quên hẳn chuyện đó". Nghĩa là tác giả KHÔNG hề luôn ấp ủ ước mơ này, mà đã quên rồi mới tình cờ nhớ lại. Vì vậy đáp án là 2 (ước mơ mà chính mình đã quên).\nMẹo: khi hai lựa chọn gần giống nhau, hãy so những từ chỉ mức độ như すっかり (hoàn toàn), ずっと (suốt, luôn luôn). Chỉ một từ đó thôi là đủ để đúng hay sai.',
          answer: 2,
          evidence: ['s4', 's5', 's6']
        }
      ],
      summary: 'Tác giả du học Mỹ về, được nhờ dạy toán ở đại học từ tháng 4. Khi dọn phòng, tác giả tìm thấy bài văn hồi tiểu học viết "muốn làm giáo viên" – điều đã quên hẳn. Ngạc nhiên nhưng vì ước mơ thành thật nên quyết tâm cố gắng.',
      structure: [
        ['Câu 1–2', 'Bối cảnh: về nước, sắp dạy đại học'],
        ['Câu 3–5', 'Tìm thấy bài văn "ước mơ làm giáo viên" – đã quên'],
        ['Câu 6', 'Cảm xúc và quyết tâm (gạch chân)']
      ],
      grammar: [
        ['〜ことになった', 'Đã được quyết định / thành ra là…', '大学で数学を教えることになった'],
        ['〜ていたら', 'Đang… thì (phát hiện ra)', '掃除をしていたら作文が出てきた'],
        ['〜てあった', 'Có ghi sẵn (trạng thái)', '先生になりたいと書いてあった'],
        ['〜のだし', 'Vì (lý do đã rõ) nên…', '夢が本当になったのだし、頑張ろう']
      ],
      tip: 'Hai lựa chọn gần giống nhau (2 và 4) chỉ khác ở "忘れていた" và "ずっと思い続けていた". Luôn đối chiếu trạng từ / cụm chỉ mức độ (すっかり、ずっと) với bài.'
    },

    /* ───────────── 問題4 (3) ───────────── */
    {
      id: '4-3',
      kind: '短文・メール',
      kindVi: 'Đoạn văn ngắn – email của trường',
      style: 'mail',
      before: null,
      lead: ['l', 'これはある{日本語|にほんご}{学校|がっこう}から{学生|がくせい}に[届|とど]いたメールである。', 'Đây là email một trường tiếng Nhật gửi đến học sinh.'],
      blocks: [
        { t: 'lines', s: [
          ['s1', '{学校|がっこう}がもらった@shoutaiken([招待券|しょうたいけん])の@shiai([試合|しあい])は{今週末|こんしゅうまつ}です。', 'Trận đấu mà trường nhận được vé mời sẽ diễn ra vào cuối tuần này.']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['s2', '{日時|にちじ}：2{月|がつ}27{日|にち}（{土|ど}）@kaijou2({開場|かいじょう})13{時|じ}　[試合|しあい]{開始|かいし}14{時|じ}', 'Thời gian: 27/2 (thứ Bảy), mở cửa 13 giờ, trận đấu bắt đầu 14 giờ'],
          ['s3', '{場所|ばしょ}：[春山|はるやま]{公園|こうえん}@yakyuujou({野球場|やきゅうじょう})', 'Địa điểm: sân bóng chày công viên Haruyama']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['s4', 'まだ[招待券|しょうたいけん]を{受|う}け{取|と}っていない{人|ひと}は、26{日|にち}（{金|きん}）までに@jimushitsu({事務室|じむしつ})に{取|と}りに{来|き}てください。', 'Ai chưa nhận vé mời, hãy đến văn phòng lấy trước ngày 26 (thứ Sáu).'],
          ['s5', '{自分|じぶん}だけで{行|い}くのが[不安|ふあん]だと{言|い}う{人|ひと}がいたので、[中川|なかがわ]{先生|せんせい}が{一緒|いっしょ}に{行|い}くことになりました。', 'Vì có bạn nói đi một mình thì lo, nên thầy/cô Nakagawa sẽ đi cùng.'],
          ['s6', '{一緒|いっしょ}に{行|い}きたい{人|ひと}は、12{時|じ}に{学校|がっこう}に@shuugou([集合|しゅうごう])してください。', 'Ai muốn đi cùng, hãy tập trung ở trường lúc 12 giờ.'],
          ['s7', 'その{場合|ばあい}、[招待券|しょうたいけん]は@toujitsu({当日|とうじつ})、[中川|なかがわ]{先生|せんせい}からもらってもいいです。', 'Khi đó, có thể nhận vé mời từ thầy/cô Nakagawa vào hôm đó.'],
          ['s8', '{自分|じぶん}で{行|い}く{人|ひと}は、{学校|がっこう}にも{野球場|やきゅうじょう}にも[集合|しゅうごう]する{必要|ひつよう}はありません。', 'Ai tự đi thì không cần tập trung ở trường hay ở sân bóng.'],
          ['s9', '{寒|さむ}いですから、{暖|あたた}かい@fukusou([服装|ふくそう])で{行|い}きましょう。', 'Trời lạnh, hãy mặc ấm khi đi nhé.']
        ] },
        { t: 'right', s: [['sg', '[川野|かわの]{日本語|にほんご}{学校|がっこう}', 'Trường tiếng Nhật Kawano']] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '25',
          question: ['q1', 'このメールによると、{自分|じぶん}で{野球場|やきゅうじょう}に{行|い}こうと{思|おも}っている{学生|がくせい}が、@kanarazu([必|かなら]ず)しなければならないことは{何|なに}か。', 'Theo email, học sinh định tự đi đến sân bóng nhất định phải làm gì?'],
          options: [
            ['26{日|にち}までに{学校|がっこう}で[招待券|しょうたいけん]を{受|う}け{取|と}っておく。', 'Nhận vé mời ở trường trước ngày 26.', 'Đúng. Người tự đi không được nhận vé vào hôm đó (đó là quyền của nhóm đi cùng thầy/cô), nên bắt buộc phải lấy vé ở văn phòng trường trước ngày 26.'],
            ['26{日|にち}までに{学校|がっこう}で[招待券|しょうたいけん]を{受|う}け{取|と}って、{当日|とうじつ}、13{時|じ}に{野球場|やきゅうじょう}の{前|まえ}に[集合|しゅうごう]する。', 'Nhận vé trước ngày 26 và tập trung trước sân bóng lúc 13 giờ hôm đó.', 'Chưa đúng. Nửa đầu đúng, nhưng nửa sau sai: bài nói rõ người tự đi không cần tập trung ở trường hay ở sân bóng, nên không có chuyện tập trung trước sân lúc 13 giờ.'],
            ['{当日|とうじつ}、12{時|じ}に{学校|がっこう}に{行|い}って、[招待券|しょうたいけん]を[中川|なかがわ]{先生|せんせい}から{受|う}け{取|と}る。', 'Hôm đó 12 giờ đến trường nhận vé từ thầy/cô Nakagawa.', 'Chưa đúng. Đến trường lúc 12 giờ và nhận vé từ thầy/cô Nakagawa là cách dành cho nhóm muốn đi CÙNG thầy/cô, không phải nhóm tự đi.'],
            ['{当日|とうじつ}、13{時|じ}に{野球場|やきゅうじょう}に{行|い}って、[招待券|しょうたいけん]を[中川|なかがわ]{先生|せんせい}から{受|う}け{取|と}る。', 'Hôm đó 13 giờ đến sân bóng nhận vé từ thầy/cô Nakagawa.', 'Chưa đúng. Bài không có cuộc hẹn nào để nhận vé ở sân bóng. 13 giờ chỉ là giờ mở cửa sân.']
          ],
          guide: 'Câu hỏi hỏi về người TỰ ĐI đến sân bóng (自分で野球場に行こうと思っている学生) và việc họ BẮT BUỘC phải làm. Email chia học sinh thành hai nhóm: nhóm đi cùng thầy/cô Nakagawa và nhóm tự đi. Bạn cần tìm đúng thông tin cho nhóm tự đi.\nVới nhóm đi cùng thầy/cô: tập trung ở trường lúc 12 giờ, và 「その場合、招待券は当日、中川先生からもらってもいい」 – trong trường hợp đó có thể nhận vé vào hôm đi. Chữ 「その場合」 nghĩa là ưu đãi này CHỈ dành cho nhóm đi cùng thầy/cô.\nVới nhóm tự đi: 「学校にも野球場にも集合する必要はありません」 – không cần tập trung ở đâu cả. Nhưng vì họ không được nhận vé hôm đó, họ phải lấy vé trước theo câu chung: 「26日（金）までに事務室に取りに来てください」 – đến văn phòng lấy vé trước ngày 26. Vậy đáp án là 1.\nMẹo: khi thấy 「その場合」 (trong trường hợp đó), hãy hỏi lại "trường hợp nào?". Điều kiện sau nó chỉ áp dụng cho trường hợp vừa nói.',
          answer: 1,
          evidence: ['s4', 's7', 's8']
        }
      ],
      summary: 'Trường thông báo trận bóng chày (vé mời) ngày 27/2. Ai chưa nhận vé thì lấy ở văn phòng trước ngày 26. Thầy/cô Nakagawa sẽ đi cùng những ai muốn: tập trung ở trường 12 giờ, có thể nhận vé hôm đó. Ai tự đi không cần tập trung.',
      structure: [
        ['Dòng 1', 'Chủ đề: trận đấu cuối tuần'],
        ['Thông tin', 'Ngày giờ, địa điểm'],
        ['Hướng dẫn', 'Nhận vé (trước 26) · nhóm đi cùng thầy cô · người tự đi']
      ],
      grammar: [
        ['〜までに', 'Trước (hạn chót)…', '26日（金）までに事務室に取りに来てください'],
        ['〜ことになりました', 'Đã quyết định là…', '中川先生が一緒に行くことになりました'],
        ['その場合', 'Trong trường hợp đó (chỉ áp dụng cho câu trước)', 'その場合、招待券は当日…もらってもいいです'],
        ['〜必要はありません', 'Không cần…', '集合する必要はありません']
      ],
      tip: 'Email có nhiều nhóm người: hãy xác định câu hỏi nói về nhóm nào (自分で行く人). Chú ý "その場合" – điều kiện chỉ áp dụng cho nhóm vừa nhắc, nên người tự đi KHÔNG được nhận vé hôm đó.'
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
          ['s1', '{面白|おもしろ}い@jikken([実験|じっけん])を{行|おこな}った@kenkyuusha({研究者|けんきゅうしゃ})がいる。', 'Có một nhà nghiên cứu đã làm một thí nghiệm thú vị.'],
          ['s2', '»r1(その)[実験|じっけん]では、ある{魚|さかな}の{顔|かお}に@yogore([汚|よご]れ)をつけて@kagami([鏡|かがみ])を{見|み}せた。', 'Trong thí nghiệm đó, người ta bôi vết bẩn lên mặt một loài cá rồi cho nó xem gương.'],
          ['s3', 'すると、その{魚|さかな}は@suna([砂|すな])で[汚|よご]れを@otosu({落|お}とす)ような@ugoki({動|うご}き)をしてから、また[鏡|かがみ]を{見|み}た。', 'Thế là con cá làm động tác như cọ vết bẩn vào cát rồi lại nhìn gương.'],
          ['s4', '»r2(これ)は、{自分|じぶん}の{顔|かお}についた[汚|よご]れを{落|お}とし、その{後|ご}、[汚|よご]れが{消|き}えたかどうかを@kakunin([確認|かくにん])する@dousa({動作|どうさ})なのだそうだ。', 'Nghe nói đây là động tác tẩy vết bẩn trên mặt mình, rồi kiểm tra xem vết bẩn đã mất chưa.'],
          ['s5', '[鏡|かがみ]の{中|なか}にいる{自分|じぶん}を{見|み}て、それが@jibunjishin({自分|じぶん}{自身|じしん})だとわかるのは、@saru(サル)などの{頭|あたま}のいい{動物|どうぶつ}だけだと{考|かんが}えられていた。', 'Người ta từng cho rằng chỉ những động vật thông minh như khỉ mới nhìn mình trong gương mà biết đó là chính mình.'],
          ['s6', 'しかし、{魚|さかな}にも»r3(それ)ができるものがいるのだと、この{研究者|けんきゅうしゃ}は{言|い}っている。', 'Nhưng nhà nghiên cứu này nói rằng trong loài cá cũng có loài làm được điều đó.']
        ] }
      ],
      notes: [],
      refs: {
        r1: 'その実験 = thí nghiệm thú vị mà nhà nghiên cứu đã làm (câu 1).',
        r2: 'これ = động tác cọ mặt vào cát rồi lại nhìn gương của con cá (câu 3).',
        r3: 'それ = nhìn mình trong gương và nhận ra đó là chính mình (câu 5).'
      },
      questions: [
        {
          label: '26',
          question: ['q1', 'この[実験|じっけん]から、{魚|さかな}の{中|なか}には、どのようなものがいることがわかったか。', 'Qua thí nghiệm, người ta biết rằng trong loài cá có những con như thế nào?'],
          options: [
            ['[鏡|かがみ]を{見|み}て、{自分|じぶん}に[汚|よご]れをつけるものがいる。', 'Có con nhìn gương rồi tự bôi bẩn lên mình.', 'Chưa đúng. Vết bẩn là do người làm thí nghiệm bôi lên mặt cá, cá không tự bôi bẩn lên mình.'],
            ['[鏡|かがみ]の{中|なか}の{魚|さかな}が{自分|じぶん}だとわかるものがいる。', 'Có con biết con cá trong gương là chính mình.', 'Đúng. Câu cuối nói trong loài cá cũng có con làm được "điều đó", tức là nhìn gương và biết con cá trong gương là chính mình.'],
            ['[鏡|かがみ]に{気|き}づくと、すぐに[鏡|かがみ]の{前|まえ}に{行|い}きたがるものがいる。', 'Có con hễ thấy gương là muốn đến trước gương ngay.', 'Chưa đúng. Cá soi gương để kiểm tra xem vết bẩn còn không, bài không nói cá thích đến trước gương.'],
            ['[鏡|かがみ]が[汚|よご]れていたら、きれいにしようとするものがいる。', 'Có con thấy gương bẩn thì muốn lau sạch.', 'Chưa đúng. Vết bẩn nằm trên mặt con cá, không phải trên mặt gương. Cá cọ mặt mình chứ không lau gương.']
          ],
          guide: 'Câu hỏi hỏi: qua thí nghiệm, người ta biết trong loài cá có những con như thế nào? Câu trả lời nằm ở câu cuối của bài: 「魚にもそれができるものがいる」 – "trong loài cá cũng có con làm được điều đó".\n"Điều đó" (それ) là gì? Nhìn câu ngay trước: 「鏡の中にいる自分を見て、それが自分自身だとわかる」 – nhìn mình trong gương và biết đó là chính mình. Trước đây người ta nghĩ chỉ động vật thông minh như khỉ mới làm được, nhưng nhà nghiên cứu nói có loài cá cũng làm được. Vậy đáp án là 2.\nThí nghiệm cụ thể: người ta bôi bẩn lên mặt cá, cho cá soi gương; cá cọ mặt xuống cát rồi lại soi gương để xem vết bẩn đã hết chưa. Cá biết vết bẩn nằm trên mặt MÌNH, tức là nó nhận ra mình trong gương.\nMẹo: bài có mẫu "trước đây người ta nghĩ… (と考えられていた). しかし…" thì ý chính luôn nằm sau しかし. Và nếu câu kết có それ, hãy tìm nó chỉ cái gì – đó thường là đáp án.',
          answer: 2,
          evidence: ['s5', 's6']
        }
      ],
      summary: 'Nhà nghiên cứu bôi bẩn lên mặt một loài cá rồi cho xem gương. Cá cọ mặt vào cát rồi lại xem gương – tức là nó tẩy vết bẩn trên mặt mình rồi kiểm tra. Trước đây người ta nghĩ chỉ động vật thông minh như khỉ mới nhận ra mình trong gương, nhưng có loài cá cũng làm được.',
      structure: [
        ['Câu 1–3', 'Mô tả thí nghiệm'],
        ['Câu 4', 'Ý nghĩa của động tác'],
        ['Câu 5–6', 'Quan niệm cũ ↔ phát hiện mới (しかし) → đáp án']
      ],
      grammar: [
        ['すると', 'Thế là, ngay sau đó', 'すると、その魚は…動きをしてから'],
        ['〜かどうか', 'Có… hay không', '汚れが消えたかどうかを確認する'],
        ['〜のだそうだ', 'Nghe nói là… (truyền đạt + giải thích)', '確認する動作なのだそうだ'],
        ['〜と考えられていた', 'Từng được cho là…', '頭のいい動物だけだと考えられていた']
      ],
      tip: 'Mẫu "以前は〜と考えられていた。しかし〜" → ý chính nằm sau しかし. Khi thấy それ trong câu kết, quay lại câu trước để biết nó chỉ gì – đó thường là đáp án.'
    },

    /* ───────────── 問題5 (1) ───────────── */
    {
      id: '5-1',
      srcNotes: ['Đoạn 2 trong đề in 「荷物を持って板を上がって帰る」 (板 = tấm ván) – lỗi in của 「坂」 (con dốc), vì câu trước nói nhà ở trên đồi, siêu thị ở dưới dốc. Bài đã sửa.'],
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{最近|さいきん}、{私|わたし}と{同|おな}じ70[歳|さい]の@yuujin([友人|ゆうじん])が、{自宅|じたく}の@shako([車庫|しゃこ])の@kabe([壁|かべ])に{車|くるま}を@butsukeru(ぶつけて)しまったそうだ。', 'Gần đây, nghe nói một người bạn 70 tuổi như tôi đã đâm xe vào tường nhà để xe của mình.'],
          ['s2', '{私|わたし}は{運転|うんてん}に@jishin({自信|じしん})があったが、その{話|はなし}を{聞|き}いて、@anzen({安全|あんぜん})に{運転|うんてん}が{続|つづ}けられるか@fuan({不安|ふあん})になってきた。', 'Tôi vốn tự tin vào tay lái, nhưng nghe chuyện đó, tôi bắt đầu lo không biết mình có thể tiếp tục lái xe an toàn không.'],
          ['s3', 'それで、‹①{運転|うんてん}をやめることにして›、{車|くるま}を{売|う}った。', 'Vì thế, tôi quyết định thôi lái xe và đã bán xe.']
        ] },
        { t: 'p', s: [
          ['s4', 'ただ、{一|ひと}つ‹②[困|こま]ったこと›があった。', 'Có điều, có một chuyện khó khăn.'],
          ['s5', '{私|わたし}は[妻|つま]と{二人|ふたり}で@oka([丘|おか])の{上|うえ}の{家|いえ}に{住|す}んでいる。', 'Tôi sống cùng vợ trong căn nhà trên đồi.'],
          ['s6', '{毎日|まいにち}の{買|か}い{物|もの}はこれまでと{変|か}わらず、{二人|ふたり}で@saka([坂|さか])の{下|した}のスーパーまで{行|い}く。', 'Việc mua sắm hằng ngày vẫn như trước, hai vợ chồng đi đến siêu thị dưới chân dốc.'],
          ['s7', '{初|はじ}めは、{運動|うんどう}にもなるし、スーパーまで{歩|ある}けばいいと{考|かんが}えていた。', 'Lúc đầu tôi nghĩ đi bộ đến siêu thị là được, lại còn thành vận động.'],
          ['s8', 'しかし、{車|くるま}を{使|つか}わず@nimotsu({荷物|にもつ})を{持|も}って[坂|さか]を{上|あ}がって{帰|かえ}るのは、{思|おも}ったより{大変|たいへん}だったのだ。', 'Nhưng không dùng xe mà xách đồ leo dốc về nhà thì vất vả hơn tôi tưởng.']
        ] },
        { t: 'p', s: [
          ['s9', '@hikkosu({引|ひ}っ{越|こ}そう)かと{話|はな}すようになったとき、@kinjo({近所|きんじょ})にスーパーの{車|くるま}がとまっているのを{見|み}た。', 'Khi hai vợ chồng bắt đầu bàn chuyện chuyển nhà, tôi thấy xe của siêu thị đỗ ở gần nhà.'],
          ['s10', 'インターネットで@chuumon({注文|ちゅうもん})すると、{店|みせ}の@shouhin([商品|しょうひん])は{何|なん}でも@todokeru([届|とど]けて)くれるそうだ。', 'Nghe nói đặt hàng qua mạng thì cửa hàng giao bất cứ mặt hàng nào.'],
          ['s11', '@chokusetsu([直接|ちょくせつ]){見|み}て{選|えら}べないので[不安|ふあん]もあったが、まずは、{肉|にく}と{野菜|やさい}を{注文|ちゅうもん}してみた。', 'Vì không được tận mắt xem và chọn nên cũng hơi lo, nhưng trước hết tôi thử đặt thịt và rau.']
        ] },
        { t: 'p', s: [
          ['s12', '@yokujitsu([翌日|よくじつ])[届|とど]いた@shinamono({品物|しなもの})はどれもとても{良|よ}かった。', 'Hàng giao đến hôm sau món nào cũng rất tốt.'],
          ['s13', '@haitatsuryou([配達料|はいたつりょう])はかかるが、{便利|べんり}さのほうが@juuyou([重要|じゅうよう])だ。', 'Tuy mất phí giao hàng nhưng sự tiện lợi quan trọng hơn.'],
          ['s14', 'いい{方法|ほうほう}が{見|み}つかった。', 'Tôi đã tìm ra cách hay.'],
          ['s15', 'これで{引|ひ}っ{越|こ}しをしなくてもよさそうである。', 'Thế này thì có vẻ không cần chuyển nhà nữa.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '27',
          question: ['q1', '‹①{運転|うんてん}をやめることにして›とあるが、それはなぜか。', '"Quyết định thôi lái xe" – vì sao?'],
          options: [
            ['{運転|うんてん}に{自信|じしん}があったのに、{車|くるま}をぶつけてしまったから。', 'Vì dù tự tin nhưng đã đâm xe.', 'Chưa đúng. Người đâm xe vào tường là người bạn của tác giả, không phải tác giả. Lựa chọn này đã đổi chủ ngữ.'],
            ['{自分|じぶん}も{安全|あんぜん}に{運転|うんてん}が{続|つづ}けられるか{心配|しんぱい}になったから。', 'Vì lo không biết mình có lái xe an toàn tiếp được không.', 'Đúng. Nghe chuyện người bạn, tác giả lo không biết mình còn lái an toàn được không (不安になってきた), và vì thế (それで) quyết định thôi lái.'],
            ['{若|わか}いころから{自分|じぶん}の{運転|うんてん}{技術|ぎじゅつ}に{不安|ふあん}があったから。', 'Vì từ trẻ đã không tự tin vào tay lái.', 'Chưa đúng. Ngược lại, bài nói tác giả vốn rất tự tin vào tay lái (運転に自信があった).'],
            ['{車|くるま}の{運転|うんてん}をやめたほうがいいと[妻|つま]に{言|い}われたから。', 'Vì bị vợ khuyên nên thôi lái.', 'Chưa đúng. Bài hoàn toàn không nhắc đến việc vợ khuyên. Tác giả tự quyết định sau khi nghe chuyện của bạn.']
          ],
          guide: 'Câu hỏi hỏi vì sao tác giả quyết định thôi lái xe. Hãy nhìn ngay trước câu gạch chân: có chữ 「それで」 (vì thế). Phần trước 「それで」 chính là lý do.\nPhần đó viết: tác giả nghe chuyện người bạn cùng 70 tuổi đâm xe vào tường nhà, và 「安全に運転が続けられるか不安になってきた」 – bắt đầu lo không biết mình có tiếp tục lái xe an toàn được không. Vì lo như vậy nên tác giả thôi lái. Đáp án là 2.\nChú ý: người đâm xe là NGƯỜI BẠN, không phải tác giả. Còn bản thân tác giả thì vốn rất tự tin vào tay lái (運転に自信があった).\nMẹo: câu hỏi "なぜか" thường có đáp án ngay trước các từ nối chỉ kết quả như それで, だから, そのため.',
          answer: 2,
          evidence: ['s2', 's3']
        },
        {
          label: '28',
          question: ['q2', '‹②[困|こま]ったこと›とあるが、どんなことか。', '"Chuyện khó khăn" là chuyện gì?'],
          options: [
            ['{毎日|まいにち}、[妻|つま]と{二人|ふたり}でスーパーに{買|か}い{物|もの}に{行|い}かなければならなくなったこと。', 'Ngày nào cũng phải cùng vợ đi siêu thị.', 'Chưa đúng. Đi siêu thị cùng vợ là việc hai người vẫn làm từ trước (これまでと変わらず), không phải chuyện mới gây khó khăn.'],
            ['{今|いま}までより{遠|とお}くのスーパーまで、{買|か}い{物|もの}に{行|い}かなければならなくなったこと。', 'Phải đi siêu thị xa hơn trước.', 'Chưa đúng. Vẫn là siêu thị cũ dưới chân dốc, không phải siêu thị xa hơn.'],
            ['スーパーに{行|い}くとき、ついでにしていた{運動|うんどう}ができなくなり、{運動|うんどう}{不足|ぶそく}になったこと。', 'Không còn vận động khi đi siêu thị, nên thiếu vận động.', 'Chưa đúng. Ngược lại, tác giả còn nghĩ đi bộ đến siêu thị sẽ thành một cách vận động. Không có chuyện thiếu vận động.'],
            ['スーパーで{買|か}った{物|もの}を{歩|ある}いて{持|も}って{帰|かえ}ってくるのが、@yosou([予想|よそう])ほど{楽|らく}ではなかったこと。', 'Xách đồ mua ở siêu thị đi bộ về không nhẹ nhàng như dự tính.', 'Đúng. Bài viết xách đồ leo dốc về nhà "vất vả hơn mình tưởng" (思ったより大変だった), đúng với "không nhẹ nhàng như dự tính".']
          ],
          guide: 'Câu hỏi hỏi "chuyện khó khăn" (困ったこと) là gì. Ngay sau câu gạch chân, tác giả kể: hai vợ chồng sống trên đồi, vẫn đi siêu thị dưới dốc như trước. Lúc đầu nghĩ đi bộ cũng được, lại thành vận động.\nRồi đến câu quan trọng có 「しかし」: 「車を使わず荷物を持って坂を上がって帰るのは、思ったより大変だった」 – không có xe, xách đồ leo dốc về nhà vất vả hơn mình tưởng. Đây chính là chuyện khó khăn. Đáp án 4 nói lại ý này bằng từ khác: 予想ほど楽ではなかった (không nhẹ nhàng như dự tính) = 思ったより大変だった.\nMẹo: đề thi hay đổi cách nói. "思ったより大変" và "予想ほど楽ではない" là cùng một nghĩa. Hãy hiểu ý, đừng chỉ dò chữ giống nhau.',
          answer: 4,
          evidence: ['s8']
        },
        {
          label: '29',
          question: ['q3', 'スーパーのサービスを{利用|りよう}して、「{私|わたし}」は{今|いま}、{引|ひ}っ{越|こ}しについてどう{考|かんが}えているか。', 'Sau khi dùng dịch vụ của siêu thị, giờ "tôi" nghĩ gì về việc chuyển nhà?'],
          options: [
            ['{買|か}った{商品|しょうひん}を{持|も}って{帰|かえ}るのが{大変|たいへん}なので、スーパーの{近|ちか}くに{引|ひ}っ{越|こ}したほうがいいかもしれない。', 'Xách đồ về vất vả nên có lẽ nên chuyển đến gần siêu thị.', 'Chưa đúng. Đây là suy nghĩ của tác giả TRƯỚC khi biết dịch vụ giao hàng. Đến đoạn cuối, tác giả đã thấy không cần chuyển nhà.'],
            ['{買|か}った{商品|しょうひん}を{届|とど}けてもらうと{配達料|はいたつりょう}がかかるので、スーパーの{近|ちか}くに{引|ひ}っ{越|こ}したほうがいいかもしれない。', 'Giao hàng tốn phí nên có lẽ nên chuyển nhà.', 'Chưa đúng. Tác giả có nhắc phí giao hàng, nhưng nói ngay là tiện lợi quan trọng hơn (便利さのほうが重要だ). Phí đó không phải lý do để chuyển nhà.'],
            ['{届|とど}けてもらった{商品|しょうひん}に@manzoku([満足|まんぞく])したし、{今後|こんご}はこのサービスを{利用|りよう}すれば、{引|ひ}っ{越|こ}す{必要|ひつよう}はない。', 'Hài lòng với hàng được giao, sau này dùng dịch vụ thì không cần chuyển nhà.', 'Đúng. Hàng giao đến món nào cũng tốt, và tác giả kết luận "thế này thì không cần chuyển nhà" (引っ越しをしなくてもよさそう).'],
            ['{届|とど}けてもらった{商品|しょうひん}の{中|なか}には{満足|まんぞく}できないものもあったが、このサービスを{利用|りよう}すれば、{引|ひ}っ{越|こ}す{必要|ひつよう}はないだろう。', 'Có món chưa hài lòng nhưng dùng dịch vụ thì không cần chuyển nhà.', 'Chưa đúng. Bài nói "món nào cũng rất tốt" (どれもとても良かった), không có món nào làm tác giả không hài lòng.']
          ],
          guide: 'Câu hỏi hỏi suy nghĩ HIỆN TẠI của tác giả về chuyện chuyển nhà, sau khi dùng dịch vụ giao hàng của siêu thị. Suy nghĩ hiện tại luôn nằm ở đoạn cuối.\nĐoạn cuối có ba ý: (1) 「翌日届いた品物はどれもとても良かった」 – hàng giao hôm sau món nào cũng rất tốt; (2) 「配達料はかかるが、便利さのほうが重要だ」 – tuy mất phí giao hàng nhưng tiện lợi quan trọng hơn; (3) 「これで引っ越しをしなくてもよさそうである」 – thế này thì có vẻ không cần chuyển nhà.\nĐáp án 3 gói đủ hai ý: hài lòng với hàng, và không cần chuyển nhà nữa.\nHai bẫy cần chú ý: đáp án 2 lấy chi tiết "phí giao hàng" ra làm lý do chuyển nhà, trong khi tác giả nói phí đó không quan trọng bằng sự tiện lợi; đáp án 4 nói "có món chưa hài lòng", ngược với "どれも" (món nào cũng tốt).',
          answer: 3,
          evidence: ['s12', 's13', 's14', 's15']
        }
      ],
      summary: 'Tác giả 70 tuổi nghe bạn đâm xe nên lo, quyết định thôi lái và bán xe. Khó khăn là nhà trên đồi, đi bộ xách đồ từ siêu thị leo dốc về rất vất vả, hai vợ chồng tính chuyển nhà. Rồi phát hiện dịch vụ giao hàng của siêu thị: hàng tốt, tuy mất phí nhưng tiện, nên không cần chuyển nhà nữa.',
      structure: [
        ['Đoạn 1', 'Lý do thôi lái xe (①)'],
        ['Đoạn 2', 'Khó khăn: xách đồ leo dốc (②)'],
        ['Đoạn 3', 'Phát hiện dịch vụ giao hàng, thử đặt'],
        ['Đoạn 4', 'Kết quả: hài lòng → không cần chuyển nhà']
      ],
      grammar: [
        ['〜てしまったそうだ', 'Nghe nói đã lỡ…', '車をぶつけてしまったそうだ'],
        ['〜ことにする', 'Quyết định (bản thân) làm…', '運転をやめることにして'],
        ['〜ず', 'Không… (= ないで)', '車を使わず荷物を持って'],
        ['〜ようになる', 'Trở nên, bắt đầu…', '引っ越そうかと話すようになったとき'],
        ['〜なくてもよさそうだ', 'Có vẻ không cần…', '引っ越しをしなくてもよさそうである']
      ],
      tip: 'Câu hỏi lý do (なぜか) thường có đáp án ngay trước "それで / だから". Câu hỏi về suy nghĩ cuối cùng → đọc đoạn cuối; cẩn thận các lựa chọn nói ngược (満足できないものもあった) hoặc lấy ý bị bác bỏ (配達料がかかる).'
    },

    /* ───────────── 問題5 (2) ───────────── */
    {
      id: '5-2',
      kind: '中文・説明文',
      kindVi: 'Đoạn văn trung bình – văn giải thích',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{日本|にほん}では、{音楽|おんがく}を{聞|き}きに{行|い}ったり、{絵|え}や{映画|えいが}を{見|み}に{行|い}ったりすることが{好|す}きな{人|ひと}でも、{子供|こども}が{小|ちい}さいうちは、‹①{行|い}くのを@gaman([我慢|がまん])してしまうことがあります›。', 'Ở Nhật, kể cả người thích đi nghe nhạc, xem tranh hay xem phim, khi con còn nhỏ đôi khi cũng đành nhịn không đi.'],
          ['s2', '{子供|こども}は、@sawagu([騒|さわ]いで)しまう{心配|しんぱい}があるので{連|つ}れて{行|い}けないし、{人|ひと}に@azukeru([預|あず]ける)ことも{簡単|かんたん}ではないからです。', 'Vì lo trẻ làm ồn nên không thể dẫn theo, mà gửi con cho người khác trông cũng không dễ.']
        ] },
        { t: 'p', s: [
          ['s3', 'しかし、{最近|さいきん}は{少|すこ}しずつですが、{子供|こども}を@azukaru([預|あず]かって)くれる{音楽|おんがく}{会場|かいじょう}や@bijutsukan({美術館|びじゅつかん})、{映画館|えいがかん}などが{増|ふ}えてきました。', 'Nhưng gần đây, tuy từng chút một, các hội trường âm nhạc, bảo tàng mỹ thuật, rạp chiếu phim… có nhận trông trẻ đã tăng lên.'],
          ['s4', 'また、‹②@oyako({親子|おやこ})が{楽|たの}しめるように@kufuu([工夫|くふう])をする›ところも{出|で}てきています。', 'Ngoài ra, cũng xuất hiện những nơi nghĩ cách để cả cha mẹ và con cái cùng thưởng thức được.'],
          ['s5', '{例|たと}えば、ある{映画館|えいがかん}では、{映画|えいが}の{間|あいだ}も{会場|かいじょう}を{少|すこ}し{明|あか}るくしておくそうです。', 'Ví dụ, nghe nói một rạp chiếu phim để hội trường hơi sáng cả trong lúc chiếu phim.'],
          ['s6', '{暗|くら}いと、@kowagaru([怖|こわ]がって){泣|な}いてしまう{子供|こども}がいるからです。', 'Vì nếu tối thì có trẻ sợ mà khóc.'],
          ['s7', '{大|おお}きな{音|おと}を{聞|き}くと、びっくりする{子供|こども}もいるので、{音|おと}も{大|おお}きすぎないようにしてあります。', 'Cũng có trẻ giật mình khi nghe tiếng to, nên âm thanh cũng được chỉnh để không quá lớn.']
        ] },
        { t: 'p', s: [
          ['s8', 'このように、{最近|さいきん}は、{小|ちい}さな{子供|こども}がいる{人|ひと}が@anshin({安心|あんしん})して、{出|で}かけて{楽|たの}しめる{場所|ばしょ}が{増|ふ}えてきています。', 'Như vậy, gần đây những nơi mà người có con nhỏ có thể yên tâm ra ngoài vui chơi đang tăng lên.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '30',
          question: ['q1', '‹①{行|い}くのを[我慢|がまん]してしまうことがあります›とあるが、どうしてか。', '"Đành nhịn không đi" – vì sao?'],
          options: [
            ['{音楽|おんがく}や{絵|え}や{映画|えいが}などを{楽|たの}しめる{場所|ばしょ}が、{近|ちか}くにないことが{多|おお}いから。', 'Vì thường không có nơi thưởng thức ở gần.', 'Chưa đúng. Bài không nói thiếu nơi giải trí ở gần. Vấn đề là chuyện có con nhỏ.'],
            ['{子供|こども}の@sewa({世話|せわ})をするのに{忙|いそが}しくて、{時間|じかん}がないから。', 'Vì bận chăm con, không có thời gian.', 'Chưa đúng. Bài không nói cha mẹ bận chăm con. Lý do là sợ con làm ồn và khó gửi con.'],
            ['{子供|こども}を{連|つ}れて{行|い}くのも、{親|おや}だけで{出|で}かけるのも{難|むずか}しいから。', 'Vì dẫn con theo cũng khó, mà bố mẹ đi riêng cũng khó.', 'Đúng. Dẫn con đi thì sợ con làm ồn (連れて行けない), mà gửi con để cha mẹ đi một mình cũng không dễ (預けることも簡単ではない).'],
            ['{大人|おとな}だけでなく、{子供|こども}の{料金|りょうきん}も{払|はら}わなければならないから。', 'Vì phải trả tiền vé cho cả trẻ em.', 'Chưa đúng. Bài không nhắc đến tiền vé của trẻ em.']
          ],
          guide: 'Câu hỏi hỏi vì sao người thích đi nghe nhạc, xem tranh, xem phim lại phải nhịn không đi khi con còn nhỏ. Câu tiếp theo trả lời luôn, có đuôi 「〜からです」 (là vì…): 「子供は、騒いでしまう心配があるので連れて行けないし、人に預けることも簡単ではないからです」.\nCâu này có HAI vế: (1) dẫn con đi thì sợ con làm ồn nên không dẫn được; (2) gửi con cho người khác trông để tự đi cũng không dễ. Tức là: dẫn con đi cũng khó, mà đi một mình cũng khó. Đáp án 3 nói đúng cả hai vế.\nMẹo: câu có 「〜し、〜も」 là đang liệt kê hai lý do. Đáp án đúng phải bao gồm cả hai.',
          answer: 3,
          evidence: ['s2']
        },
        {
          label: '31',
          question: ['q2', '‹②{親子|おやこ}が{楽|たの}しめるように[工夫|くふう]をする›とあるが、どのようなことをしている{映画館|えいがかん}があると{言|い}っているか。', '"Nghĩ cách để cha mẹ và con cùng thưởng thức" – bài nói có rạp phim làm gì?'],
          options: [
            ['{子供|こども}と{親|おや}が{話|はな}しながら{映画|えいが}が{見|み}られる{特別|とくべつ}な{席|せき}を{用意|ようい}する。', 'Chuẩn bị ghế đặc biệt để vừa xem vừa nói chuyện.', 'Chưa đúng. Ví dụ chỉ nói về ánh sáng và âm thanh, không có ghế đặc biệt nào.'],
            ['{子供|こども}が[騒|さわ]ぐ{音|おと}が{気|き}にならないように、{映画|えいが}の{音|おと}を{大|おお}きくする。', 'Mở to tiếng phim để không để ý tiếng trẻ ồn.', 'Chưa đúng. Ngược lại, rạp chỉnh âm thanh để KHÔNG quá to (大きすぎないように), chứ không mở to lên.'],
            ['{子供|こども}にも{大人|おとな}にも{楽|たの}しんで{見|み}てもらえるような{映画|えいが}を{選|えら}ぶ。', 'Chọn phim cả trẻ em lẫn người lớn đều thích.', 'Chưa đúng. Rạp chỉnh không gian xem phim (ánh sáng, âm thanh), bài không nói chuyện chọn phim.'],
            ['{子供|こども}が[怖|こわ]がったり[驚|おどろ]いたりしないような{明|あか}るさや@onryou({音量|おんりょう})にする。', 'Chỉnh độ sáng và âm lượng để trẻ không sợ hay giật mình.', 'Đúng. Để đèn hơi sáng vì trẻ sợ tối (怖がって), và giảm âm lượng vì trẻ giật mình với tiếng to (びっくりする). Đây đúng là "độ sáng và âm lượng giúp trẻ không sợ, không giật mình".']
          ],
          guide: 'Câu hỏi hỏi: rạp phim trong ví dụ đã làm gì để cả cha mẹ và con đều thưởng thức được? Tìm chữ 「例えば」 (ví dụ) ngay sau câu gạch chân, phần ví dụ có hai chi tiết.\nChi tiết 1: trong lúc chiếu phim vẫn để hội trường hơi sáng, vì nếu tối thì có trẻ sợ mà khóc. Chi tiết 2: âm thanh được chỉnh để không quá to, vì có trẻ nghe tiếng to là giật mình.\nGộp hai chi tiết lại: rạp chỉnh độ sáng và âm lượng để trẻ không sợ, không giật mình. Đáp án là 4.\nMẹo: khi bài đưa ví dụ có nhiều chi tiết, đáp án đúng thường là câu tóm được TẤT CẢ các chi tiết đó.',
          answer: 4,
          evidence: ['s5', 's6', 's7']
        },
        {
          label: '32',
          question: ['q3', 'この{文章|ぶんしょう}の@teema(テーマ)は{何|なに}か。', 'Chủ đề của đoạn văn là gì?'],
          options: [
            ['{日本|にほん}で、{子供|こども}がいる{親|おや}も{音楽|おんがく}や{映画|えいが}を{楽|たの}しめる@kankyou([環境|かんきょう])ができてきたこと。', 'Ở Nhật, môi trường để cha mẹ có con nhỏ cũng thưởng thức âm nhạc, phim ảnh đã hình thành.', 'Đúng. Câu kết bài (このように…) nói những nơi cha mẹ có con nhỏ có thể yên tâm đến thưởng thức đang tăng lên, đúng với "môi trường đã hình thành".'],
            ['{日本|にほん}で、{大人|おとな}と{子供|こども}が{一緒|いっしょ}に{楽|たの}しめる{音楽|おんがく}や{映画|えいが}が{減|へ}ってきたこと。', 'Âm nhạc, phim cho cả người lớn và trẻ em giảm đi.', 'Chưa đúng. Bài nói những nơi như vậy đang TĂNG lên (増えてきた), không phải giảm đi.'],
            ['{日本|にほん}で、{大人|おとな}だけで{音楽会|おんがくかい}や{映画|えいが}に{出|で}かける{親|おや}が{増|ふ}えてきたこと。', 'Cha mẹ đi xem hòa nhạc, phim một mình tăng lên.', 'Chưa đúng. Cái tăng lên là "nơi dành cho gia đình có con nhỏ", bài không nói số cha mẹ đi xem một mình tăng lên.'],
            ['{日本|にほん}で、{音楽|おんがく}や{映画|えいが}を{楽|たの}しむ{子供|こども}が{増|ふ}えてきたこと。', 'Trẻ em thưởng thức âm nhạc, phim tăng lên.', 'Chưa đúng. Bài nói về cha mẹ có con nhỏ, không nói số trẻ em thích âm nhạc, phim ảnh tăng lên.']
          ],
          guide: 'Câu hỏi hỏi chủ đề (テーマ) của cả bài. Với bài văn giải thích, câu tóm tắt thường nằm cuối bài và bắt đầu bằng 「このように」 (như vậy).\nCâu đó viết: 「このように、最近は、小さな子供がいる人が安心して、出かけて楽しめる場所が増えてきています」 – như vậy, gần đây những nơi mà người có con nhỏ có thể yên tâm đi chơi đang tăng lên.\nĐáp án 1 nói đúng ý đó: ở Nhật, môi trường để cha mẹ có con nhỏ cũng thưởng thức âm nhạc, phim ảnh đã hình thành. Các lựa chọn còn lại hoặc nói ngược (giảm đi), hoặc đổi đối tượng (cha mẹ đi một mình, trẻ em thích phim).\nMẹo: câu hỏi テーマ hãy đọc câu đầu và câu cuối của bài trước, nhất là câu có このように, つまり, 要するに.',
          answer: 1,
          evidence: ['s8']
        }
      ],
      summary: 'Ở Nhật, cha mẹ có con nhỏ thường phải nhịn không đi nghe nhạc, xem tranh, xem phim vì không thể dẫn con (sợ trẻ ồn) mà gửi con cũng khó. Gần đây các nơi nhận trông trẻ, hoặc nghĩ cách cho cả nhà cùng xem (rạp để đèn hơi sáng, âm lượng vừa phải) đã tăng lên. Những nơi cha mẹ có con nhỏ yên tâm đi chơi đang nhiều hơn.',
      structure: [
        ['Đoạn 1', 'Vấn đề: cha mẹ có con nhỏ phải nhịn (①) + lý do'],
        ['Đoạn 2', 'Thay đổi gần đây (しかし): nhận trông trẻ, cách làm cho cả nhà (②) + ví dụ rạp phim'],
        ['Đoạn 3', 'Kết luận (このように) → chủ đề']
      ],
      grammar: [
        ['〜たり〜たりする', 'Lúc thì…, lúc thì… (liệt kê)', '音楽を聞きに行ったり、絵や映画を見に行ったり'],
        ['〜うちは', 'Trong khi còn…', '子供が小さいうちは'],
        ['〜ように', 'Để (có thể)…', '親子が楽しめるように工夫をする'],
        ['〜ておく', 'Làm sẵn, để nguyên trạng thái', '会場を少し明るくしておく'],
        ['〜すぎないようにしてある', 'Đã được chỉnh để không quá…', '音も大きすぎないようにしてあります']
      ],
      tip: 'Câu hỏi テーマ → tìm câu tóm tắt bắt đầu bằng "このように" ở cuối bài. Câu hỏi về ví dụ (例えば…) → gom đủ mọi chi tiết của ví dụ (độ sáng + âm lượng) rồi chọn lựa chọn bao quát cả hai.'
    }
  ]
};
