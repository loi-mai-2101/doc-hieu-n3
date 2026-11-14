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
            ['[浴衣|ゆかた]を{着|き}れば、[夏祭|なつまつ]り[会場|かいじょう]まで、ホテルのバスが{利用|りよう}できる。', 'Nếu mặc yukata thì được đi xe buýt khách sạn tới lễ hội.', 'Sai. Xe buýt ai cũng đi được, không có điều kiện mặc yukata (s2).'],
            ['ホテルのレストランで、ドリンクが1[杯|ぱい][無料|むりょう]で{飲|の}める。', 'Được uống miễn phí 1 ly ở nhà hàng khách sạn.', 'Sai. Đồ uống miễn phí là ở các quầy TRONG KHU LỄ HỘI, và do lễ hội tặng chứ không phải khách sạn (s3).'],
            ['ホテルから、{好|す}きな[浴衣|ゆかた]と[帯|おび]を{特別|とくべつ}{料金|りょうきん}で{借|か}りられる。', 'Được thuê yukata và đai lưng tùy chọn với giá đặc biệt.', 'Đúng. 「お好きな浴衣と帯を特別料金でお貸しします」 (s5).'],
            ['[浴衣|ゆかた]と[帯|おび]の{料金|りょうきん}のほかに2,000{円|えん}{払|はら}えば、ホテルの{人|ひと}に{着|き}るのを[手伝|てつだ]ってもらえる。', 'Trả thêm 2.000 yên ngoài tiền thuê thì nhân viên giúp mặc.', 'Sai. 2.000 yên là tiền thuê; việc giúp mặc không tính thêm phí (s6).']
          ],
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
            ['{自分|じぶん}でも{忘|わす}れていた、アメリカに[留学|りゅうがく]したいという{夢|ゆめ}が{本当|ほんとう}になったから。', 'Vì ước mơ du học Mỹ mà chính mình đã quên đã thành sự thật.', 'Sai. Ước mơ trong bài văn là làm GIÁO VIÊN, không phải du học.'],
            ['{自分|じぶん}でも{忘|わす}れていた、{先生|せんせい}になりたいという{夢|ゆめ}が{本当|ほんとう}になったから。', 'Vì ước mơ làm giáo viên mà chính mình đã quên đã thành sự thật.', 'Đúng. 「先生になりたいと書いてあった」「すっかり忘れていた」「子供のころの夢が本当になったのだし」 (s4–s6).'],
            ['{子供|こども}のころからずっと{行|い}きたいと{思|おも}い{続|つづ}けていたアメリカに[留学|りゅうがく]できたから。', 'Vì đã du học được ở Mỹ – nơi luôn muốn đến từ nhỏ.', 'Sai. Bài không nói vậy.'],
            ['{子供|こども}のころからずっとなりたいと{思|おも}い{続|つづ}けていた{先生|せんせい}になれたから。', 'Vì đã trở thành giáo viên – điều luôn mong muốn từ nhỏ.', 'Sai. Tác giả đã "すっかり忘れていた" (quên hẳn), không phải "ずっと思い続けていた" (luôn nghĩ).']
          ],
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
            ['26{日|にち}までに{学校|がっこう}で[招待券|しょうたいけん]を{受|う}け{取|と}っておく。', 'Nhận vé mời ở trường trước ngày 26.', 'Đúng. Chỉ người đi cùng thầy cô mới được nhận vé hôm đó (s7); người tự đi phải tự lấy vé ở văn phòng trước ngày 26 (s4).'],
            ['26{日|にち}までに{学校|がっこう}で[招待券|しょうたいけん]を{受|う}け{取|と}って、{当日|とうじつ}、13{時|じ}に{野球場|やきゅうじょう}の{前|まえ}に[集合|しゅうごう]する。', 'Nhận vé trước ngày 26 và tập trung trước sân bóng lúc 13 giờ hôm đó.', 'Sai. Người tự đi không cần tập trung ở đâu cả (s8).'],
            ['{当日|とうじつ}、12{時|じ}に{学校|がっこう}に{行|い}って、[招待券|しょうたいけん]を[中川|なかがわ]{先生|せんせい}から{受|う}け{取|と}る。', 'Hôm đó 12 giờ đến trường nhận vé từ thầy/cô Nakagawa.', 'Sai. Đó là cách dành cho người đi CÙNG thầy cô (s6–s7).'],
            ['{当日|とうじつ}、13{時|じ}に{野球場|やきゅうじょう}に{行|い}って、[招待券|しょうたいけん]を[中川|なかがわ]{先生|せんせい}から{受|う}け{取|と}る。', 'Hôm đó 13 giờ đến sân bóng nhận vé từ thầy/cô Nakagawa.', 'Sai. Không có hẹn nhận vé ở sân bóng.']
          ],
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
            ['[鏡|かがみ]を{見|み}て、{自分|じぶん}に[汚|よご]れをつけるものがいる。', 'Có con nhìn gương rồi tự bôi bẩn lên mình.', 'Sai. Vết bẩn là do người làm thí nghiệm bôi.'],
            ['[鏡|かがみ]の{中|なか}の{魚|さかな}が{自分|じぶん}だとわかるものがいる。', 'Có con biết con cá trong gương là chính mình.', 'Đúng. 「魚にもそれができるものがいる」, それ = nhận ra mình trong gương (s5–s6).'],
            ['[鏡|かがみ]に{気|き}づくと、すぐに[鏡|かがみ]の{前|まえ}に{行|い}きたがるものがいる。', 'Có con hễ thấy gương là muốn đến trước gương ngay.', 'Sai. Bài không nói vậy.'],
            ['[鏡|かがみ]が[汚|よご]れていたら、きれいにしようとするものがいる。', 'Có con thấy gương bẩn thì muốn lau sạch.', 'Sai. Vết bẩn ở trên MẶT CÁ, không phải trên gương.']
          ],
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
            ['{運転|うんてん}に{自信|じしん}があったのに、{車|くるま}をぶつけてしまったから。', 'Vì dù tự tin nhưng đã đâm xe.', 'Sai. Người đâm xe là NGƯỜI BẠN, không phải tác giả.'],
            ['{自分|じぶん}も{安全|あんぜん}に{運転|うんてん}が{続|つづ}けられるか{心配|しんぱい}になったから。', 'Vì lo không biết mình có lái xe an toàn tiếp được không.', 'Đúng. 「安全に運転が続けられるか不安になってきた。それで、…」 (s2–s3).'],
            ['{若|わか}いころから{自分|じぶん}の{運転|うんてん}{技術|ぎじゅつ}に{不安|ふあん}があったから。', 'Vì từ trẻ đã không tự tin vào tay lái.', 'Sai. Tác giả vốn "運転に自信があった".'],
            ['{車|くるま}の{運転|うんてん}をやめたほうがいいと[妻|つま]に{言|い}われたから。', 'Vì bị vợ khuyên nên thôi lái.', 'Sai. Bài không nói vậy.']
          ],
          answer: 2,
          evidence: ['s2', 's3']
        },
        {
          label: '28',
          question: ['q2', '‹②[困|こま]ったこと›とあるが、どんなことか。', '"Chuyện khó khăn" là chuyện gì?'],
          options: [
            ['{毎日|まいにち}、[妻|つま]と{二人|ふたり}でスーパーに{買|か}い{物|もの}に{行|い}かなければならなくなったこと。', 'Ngày nào cũng phải cùng vợ đi siêu thị.', 'Sai. Việc đi chợ cùng vợ vẫn như trước (これまでと変わらず).'],
            ['{今|いま}までより{遠|とお}くのスーパーまで、{買|か}い{物|もの}に{行|い}かなければならなくなったこと。', 'Phải đi siêu thị xa hơn trước.', 'Sai. Vẫn là siêu thị dưới dốc.'],
            ['スーパーに{行|い}くとき、ついでにしていた{運動|うんどう}ができなくなり、{運動|うんどう}{不足|ぶそく}になったこと。', 'Không còn vận động khi đi siêu thị, nên thiếu vận động.', 'Sai. Ngược lại, đi bộ còn thành vận động.'],
            ['スーパーで{買|か}った{物|もの}を{歩|ある}いて{持|も}って{帰|かえ}ってくるのが、@yosou([予想|よそう])ほど{楽|らく}ではなかったこと。', 'Xách đồ mua ở siêu thị đi bộ về không nhẹ nhàng như dự tính.', 'Đúng. 「荷物を持って坂を上がって帰るのは、思ったより大変だった」 (s8).']
          ],
          answer: 4,
          evidence: ['s8']
        },
        {
          label: '29',
          question: ['q3', 'スーパーのサービスを{利用|りよう}して、「{私|わたし}」は{今|いま}、{引|ひ}っ{越|こ}しについてどう{考|かんが}えているか。', 'Sau khi dùng dịch vụ của siêu thị, giờ "tôi" nghĩ gì về việc chuyển nhà?'],
          options: [
            ['{買|か}った{商品|しょうひん}を{持|も}って{帰|かえ}るのが{大変|たいへん}なので、スーパーの{近|ちか}くに{引|ひ}っ{越|こ}したほうがいいかもしれない。', 'Xách đồ về vất vả nên có lẽ nên chuyển đến gần siêu thị.', 'Sai. Tác giả kết luận không cần chuyển nhà.'],
            ['{買|か}った{商品|しょうひん}を{届|とど}けてもらうと{配達料|はいたつりょう}がかかるので、スーパーの{近|ちか}くに{引|ひ}っ{越|こ}したほうがいいかもしれない。', 'Giao hàng tốn phí nên có lẽ nên chuyển nhà.', 'Sai. 「配達料はかかるが、便利さのほうが重要だ」.'],
            ['{届|とど}けてもらった{商品|しょうひん}に@manzoku([満足|まんぞく])したし、{今後|こんご}はこのサービスを{利用|りよう}すれば、{引|ひ}っ{越|こ}す{必要|ひつよう}はない。', 'Hài lòng với hàng được giao, sau này dùng dịch vụ thì không cần chuyển nhà.', 'Đúng. 「どれもとても良かった」「これで引っ越しをしなくてもよさそう」 (s12–s15).'],
            ['{届|とど}けてもらった{商品|しょうひん}の{中|なか}には{満足|まんぞく}できないものもあったが、このサービスを{利用|りよう}すれば、{引|ひ}っ{越|こ}す{必要|ひつよう}はないだろう。', 'Có món chưa hài lòng nhưng dùng dịch vụ thì không cần chuyển nhà.', 'Sai. Món nào cũng rất tốt (どれもとても良かった).']
          ],
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
            ['{音楽|おんがく}や{絵|え}や{映画|えいが}などを{楽|たの}しめる{場所|ばしょ}が、{近|ちか}くにないことが{多|おお}いから。', 'Vì thường không có nơi thưởng thức ở gần.', 'Sai. Bài không nói vậy.'],
            ['{子供|こども}の@sewa({世話|せわ})をするのに{忙|いそが}しくて、{時間|じかん}がないから。', 'Vì bận chăm con, không có thời gian.', 'Sai. Bài không nói vậy.'],
            ['{子供|こども}を{連|つ}れて{行|い}くのも、{親|おや}だけで{出|で}かけるのも{難|むずか}しいから。', 'Vì dẫn con theo cũng khó, mà bố mẹ đi riêng cũng khó.', 'Đúng. 「連れて行けないし、人に預けることも簡単ではない」 (s2) = dẫn theo không được, gửi con để đi một mình cũng khó.'],
            ['{大人|おとな}だけでなく、{子供|こども}の{料金|りょうきん}も{払|はら}わなければならないから。', 'Vì phải trả tiền vé cho cả trẻ em.', 'Sai. Bài không nói về tiền.']
          ],
          answer: 3,
          evidence: ['s2']
        },
        {
          label: '31',
          question: ['q2', '‹②{親子|おやこ}が{楽|たの}しめるように[工夫|くふう]をする›とあるが、どのようなことをしている{映画館|えいがかん}があると{言|い}っているか。', '"Nghĩ cách để cha mẹ và con cùng thưởng thức" – bài nói có rạp phim làm gì?'],
          options: [
            ['{子供|こども}と{親|おや}が{話|はな}しながら{映画|えいが}が{見|み}られる{特別|とくべつ}な{席|せき}を{用意|ようい}する。', 'Chuẩn bị ghế đặc biệt để vừa xem vừa nói chuyện.', 'Sai. Bài không nói vậy.'],
            ['{子供|こども}が[騒|さわ]ぐ{音|おと}が{気|き}にならないように、{映画|えいが}の{音|おと}を{大|おお}きくする。', 'Mở to tiếng phim để không để ý tiếng trẻ ồn.', 'Sai. Ngược lại, âm thanh được chỉnh KHÔNG quá lớn.'],
            ['{子供|こども}にも{大人|おとな}にも{楽|たの}しんで{見|み}てもらえるような{映画|えいが}を{選|えら}ぶ。', 'Chọn phim cả trẻ em lẫn người lớn đều thích.', 'Sai. Bài không nói vậy.'],
            ['{子供|こども}が[怖|こわ]がったり[驚|おどろ]いたりしないような{明|あか}るさや@onryou({音量|おんりょう})にする。', 'Chỉnh độ sáng và âm lượng để trẻ không sợ hay giật mình.', 'Đúng. Để hội trường hơi sáng (vì trẻ sợ tối) và âm thanh không quá to (vì trẻ giật mình) (s5–s7).']
          ],
          answer: 4,
          evidence: ['s5', 's6', 's7']
        },
        {
          label: '32',
          question: ['q3', 'この{文章|ぶんしょう}の@teema(テーマ)は{何|なに}か。', 'Chủ đề của đoạn văn là gì?'],
          options: [
            ['{日本|にほん}で、{子供|こども}がいる{親|おや}も{音楽|おんがく}や{映画|えいが}を{楽|たの}しめる@kankyou([環境|かんきょう])ができてきたこと。', 'Ở Nhật, môi trường để cha mẹ có con nhỏ cũng thưởng thức âm nhạc, phim ảnh đã hình thành.', 'Đúng. Câu kết 「このように、…小さな子供がいる人が安心して、出かけて楽しめる場所が増えてきています」 (s8).'],
            ['{日本|にほん}で、{大人|おとな}と{子供|こども}が{一緒|いっしょ}に{楽|たの}しめる{音楽|おんがく}や{映画|えいが}が{減|へ}ってきたこと。', 'Âm nhạc, phim cho cả người lớn và trẻ em giảm đi.', 'Sai. Ngược với bài (増えてきた).'],
            ['{日本|にほん}で、{大人|おとな}だけで{音楽会|おんがくかい}や{映画|えいが}に{出|で}かける{親|おや}が{増|ふ}えてきたこと。', 'Cha mẹ đi xem hòa nhạc, phim một mình tăng lên.', 'Sai. Cái tăng lên là "địa điểm", không phải số cha mẹ đi riêng.'],
            ['{日本|にほん}で、{音楽|おんがく}や{映画|えいが}を{楽|たの}しむ{子供|こども}が{増|ふ}えてきたこと。', 'Trẻ em thưởng thức âm nhạc, phim tăng lên.', 'Sai. Bài không nói vậy.']
          ],
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
