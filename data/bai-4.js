/* Dữ liệu Bài 4 — 問題29, 31, 32, 33 (Phần 4: bài tập thực tế). Cú pháp đánh dấu: xem data/bai-1.js. */
window.BAI = {
  id: 4,
  title: 'Bài 4',
  subtitle: 'Văn giải thích · Hướng dẫn sử dụng · Email · Đoạn văn trung bình',

  vocab: {
    // 問題29
    onigiri: { w: 'おにぎり', r: 'おにぎり', hv: '', vi: 'cơm nắm' },
    kantan: { w: '簡単', r: 'かんたん', hv: 'GIẢN ĐƠN', vi: 'đơn giản, dễ' },
    ninki: { w: '人気', r: 'にんき', hv: 'NHÂN KHÍ', vi: 'được ưa chuộng', note: '人気がある = được yêu thích' },
    tada: { w: 'ただ〜だけ', r: 'ただ〜だけ', hv: '', vi: 'chỉ… mà thôi' },
    marui: { w: '丸い', r: 'まるい', hv: 'HOÀN', vi: 'tròn', note: '丸くする = làm tròn, vo tròn' },
    gyuugyuu: { w: 'ぎゅうぎゅう', r: 'ぎゅうぎゅう', hv: '', vi: '(ép, nén) thật chặt' },
    komeru: { w: '込める', r: 'こめる', hv: '', kokuji: true, vi: 'dồn vào (sức lực, tình cảm)', note: '力を込める = dùng sức. Chữ 込 do người Nhật tạo ra nên không có âm Hán Việt.' },
    katai: { w: '固い', r: 'かたい', hv: 'CỐ', vi: 'cứng, chặt' },
    nigiru: { w: 'にぎる（握る）', r: 'にぎる', hv: 'ÁC', vi: 'nắm (cơm), nặn' },
    boroboro: { w: 'ぼろぼろ', r: 'ぼろぼろ', hv: '', vi: 'vụn ra, rời rạc' },
    kuzureru: { w: 'くずれる（崩れる）', r: 'くずれる', hv: 'BĂNG', vi: 'vỡ, sụp, rã ra' },
    kome: { w: '米', r: 'こめ', hv: 'MỄ', vi: 'gạo, cơm' },
    gu: { w: '具', r: 'ぐ', hv: 'CỤ', vi: 'nhân (cho vào cơm nắm, món ăn)' },
    mazaru: { w: '混ざる', r: 'まざる', hv: 'HỖN', vi: 'hòa lẫn, trộn lẫn' },
    fuwafuwa: { w: 'ふわふわ', r: 'ふわふわ', hv: '', vi: 'mềm xốp, bồng bềnh' },
    teido: { w: '程度', r: 'ていど', hv: 'TRÌNH ĐỘ', vi: 'mức độ', note: 'くずれない程度に = ở mức không bị vỡ' },
    yasashii: { w: '優しい', r: 'やさしい', hv: 'ƯU', vi: 'nhẹ nhàng, dịu dàng' },
    susumeru: { w: 'すすめる（勧める）', r: 'すすめる', hv: 'KHUYẾN', vi: 'khuyên' },
    taku: { w: '炊く', r: 'たく', hv: 'XUY', vi: 'nấu (cơm)' },
    sankakukei: { w: '三角形', r: 'さんかくけい', hv: 'TAM GIÁC HÌNH', vi: 'hình tam giác' },
    katachi: { w: '形', r: 'かたち', hv: 'HÌNH', vi: 'hình dáng' },
    kowareru: { w: 'こわれる（壊れる）', r: 'こわれる', hv: 'HOẠI', vi: 'vỡ, hỏng' },
    matomeru: { w: 'まとめる', r: 'まとめる', hv: '', vi: 'gom lại, nén lại thành khối' },
    yawarakai: { w: 'やわらかい（柔らかい）', r: 'やわらかい', hv: 'NHU', vi: 'mềm' },

    // 問題31
    shudouhatsuden: { w: '手動発電式', r: 'しゅどうはつでんしき', hv: 'THỦ ĐỘNG PHÁT ĐIỆN THỨC', vi: 'loại phát điện bằng tay (quay tay)' },
    setsumeisho: { w: '説明書', r: 'せつめいしょ', hv: 'THUYẾT MINH THƯ', vi: 'sách hướng dẫn' },
    shiyou: { w: '使用', r: 'しよう', hv: 'SỬ DỤNG', vi: 'sử dụng' },
    houhou: { w: '方法', r: 'ほうほう', hv: 'PHƯƠNG PHÁP', vi: 'cách thức' },
    migigawa: { w: '右側', r: 'みぎがわ', hv: 'HỮU TRẮC', vi: 'bên phải' },
    hikidasu: { w: '引き出す', r: 'ひきだす', hv: 'DẪN XUẤT', vi: 'kéo ra' },
    yajirushi: { w: '矢印', r: 'やじるし', hv: 'THỈ ẤN', vi: 'mũi tên (ký hiệu)' },
    houkou: { w: '方向', r: 'ほうこう', hv: 'PHƯƠNG HƯỚNG', vi: 'hướng' },
    kurikaesu: { w: 'くり返す（繰り返す）', r: 'くりかえす', hv: 'SÀO PHẢN', vi: 'lặp đi lặp lại' },
    mawasu: { w: '回す', r: 'まわす', hv: 'HỒI', vi: 'quay, xoay' },
    hatsuden: { w: '発電', r: 'はつでん', hv: 'PHÁT ĐIỆN', vi: 'phát điện' },
    yaku: { w: '約', r: 'やく', hv: 'ƯỚC', vi: 'khoảng' },
    kanou: { w: '可能', r: 'かのう', hv: 'KHẢ NĂNG', vi: 'có thể', note: '〜が可能です = có thể…' },
    osu: { w: '押す', r: 'おす', hv: 'ÁP', vi: 'bấm, ấn' },
    tsuku: { w: '(ライトが) つく', r: 'つく', hv: '', vi: '(đèn) sáng, bật' },
    tenmetsu: { w: '点滅', r: 'てんめつ', hv: 'ĐIỂM DIỆT', vi: 'nhấp nháy' },
    jou: { w: '〜上', r: 'じょう', hv: 'THƯỢNG', vi: 'về mặt…', note: '使用上の注意 = lưu ý khi sử dụng' },
    chuui: { w: '注意', r: 'ちゅうい', hv: 'CHÚ Ý', vi: 'lưu ý, chú ý' },
    baai: { w: '場合', r: 'ばあい', hv: 'TRƯỜNG HỢP', vi: 'trường hợp' },
    kurai: { w: '暗い', r: 'くらい', hv: 'ÁM', vi: 'tối' },
    koshou: { w: '故障', r: 'こしょう', hv: 'CỐ CHƯỚNG', vi: 'hỏng hóc' },
    genin: { w: '原因', r: 'げんいん', hv: 'NGUYÊN NHÂN', vi: 'nguyên nhân' },
    bunkai: { w: '分解する', r: 'ぶんかいする', hv: 'PHÂN GIẢI', vi: 'tháo rời' },
    honseihin: { w: '本製品', r: 'ほんせいひん', hv: 'BẢN CHẾ PHẨM', vi: 'sản phẩm này' },
    bousuisei: { w: '防水性', r: 'ぼうすいせい', hv: 'PHÒNG THỦY TÍNH', vi: 'tính chống nước' },
    nurasu: { w: 'ぬらす（濡らす）', r: 'ぬらす', hv: 'NHU', vi: 'làm ướt' },
    naiyou: { w: '内容', r: 'ないよう', hv: 'NỘI DUNG', vi: 'nội dung' },
    denchi: { w: '電池', r: 'でんち', hv: 'ĐIỆN TRÌ', vi: 'pin' },
    torikaeru: { w: '取り替える', r: 'とりかえる', hv: 'THỦ THẾ', vi: 'thay (cái mới)' },

    // 問題32
    kenkyuushitsu: { w: '研究室', r: 'けんきゅうしつ', hv: 'NGHIÊN CỨU THẤT', vi: 'phòng nghiên cứu (của giáo viên đại học)' },
    yakusoku: { w: '約束', r: 'やくそく', hv: 'ƯỚC THÚC', vi: 'lời hẹn' },
    todoku: { w: '届く', r: 'とどく', hv: 'GIỚI', vi: '(thư) được gửi tới' },
    jitsuwa: { w: '実は', r: 'じつは', hv: 'THỰC', vi: 'thật ra là…' },
    kyuuni: { w: '急に', r: 'きゅうに', hv: 'CẤP', vi: 'đột nhiên' },
    kaigi: { w: '会議', r: 'かいぎ', hv: 'HỘI NGHỊ', vi: 'cuộc họp' },
    tsugougawarui: { w: '都合が悪い', r: 'つごうがわるい', hv: 'ĐÔ HỢP ÁC', vi: 'không tiện, bận' },
    tsugou: { w: '都合', r: 'つごう', hv: 'ĐÔ HỢP', vi: 'sự thuận tiện (về thời gian)' },
    moushiwake: { w: '申し訳ない', r: 'もうしわけない', hv: 'THÂN DỊCH', vi: 'thật xin lỗi' },
    henkou: { w: '変更する', r: 'へんこうする', hv: 'BIẾN CANH', vi: 'thay đổi' },
    ikou: { w: '以降', r: 'いこう', hv: 'DĨ GIÁNG', vi: 'từ … trở đi' },
    enki: { w: '延期する', r: 'えんきする', hv: 'DIÊN KỲ', vi: 'hoãn lại' },
    ayamaru: { w: 'あやまる（謝る）', r: 'あやまる', hv: 'TẠ', vi: 'xin lỗi' },

    // 問題33
    okuen: { w: '億円', r: 'おくえん', hv: 'ỨC VIÊN', vi: 'trăm triệu yên', note: '3億円 = 300 triệu yên' },
    ataru: { w: '当たる', r: 'あたる', hv: 'ĐƯƠNG', vi: 'trúng (xổ số)' },
    takarakuji: { w: '宝くじ', r: 'たからくじ', hv: 'BẢO', vi: 'xổ số' },
    uketoru: { w: '受け取る', r: 'うけとる', hv: 'THỤ THỦ', vi: 'nhận' },
    dai: { w: '〜代', r: 'だい', hv: 'ĐẠI', vi: 'độ tuổi …', note: '70代 = độ tuổi 70' },
    hitorigurashi: { w: '一人暮らし', r: 'ひとりぐらし', hv: 'NHẤT NHÂN MỘ', vi: 'sống một mình' },
    dansei: { w: '男性', r: 'だんせい', hv: 'NAM TÍNH', vi: 'đàn ông' },
    riyuu: { w: '理由', r: 'りゆう', hv: 'LÝ DO', vi: 'lý do' },
    dasouda: { w: '〜そうだ', r: 'そうだ', hv: '', vi: 'nghe nói là…' },
    shizuka: { w: '静か', r: 'しずか', hv: 'TĨNH', vi: 'yên tĩnh, lặng lẽ' },
    seikatsu: { w: '生活', r: 'せいかつ', hv: 'SINH HOẠT', vi: 'cuộc sống' },
    fuman: { w: '不満', r: 'ふまん', hv: 'BẤT MÃN', vi: 'bất mãn, không hài lòng' },
    nakunaru: { w: '亡くなる', r: 'なくなる', hv: 'VONG', vi: 'qua đời' },
    tsuma: { w: '妻', r: 'つま', hv: 'THÊ', vi: 'vợ' },
    hoshii: { w: '欲しい', r: 'ほしい', hv: 'DỤC', vi: 'muốn có' },
    wakeru: { w: '分ける', r: 'わける', hv: 'PHÂN', vi: 'chia' },
    shinseki: { w: '親せき（親戚）', r: 'しんせき', hv: 'THÂN THÍCH', vi: 'họ hàng' },
    koukyuusha: { w: '高級車', r: 'こうきゅうしゃ', hv: 'CAO CẤP XA', vi: 'xe hơi sang trọng' },
    hitsuyou: { w: '必要', r: 'ひつよう', hv: 'TẤT YẾU', vi: 'cần thiết' },
    mokuteki: { w: '〜を目的に', r: 'をもくてきに', hv: 'MỤC ĐÍCH', vi: 'nhắm vào…, vì mục đích…' },
    yoru: { w: '寄る', r: 'よる', hv: 'KÝ', vi: 'tụ lại gần', note: '人が寄ってくる = người ta kéo đến' },
    taihen: { w: '大変', r: 'たいへん', hv: 'ĐẠI BIẾN', vi: 'vất vả, rắc rối' },
    mono: { w: '者', r: 'もの', hv: 'GIẢ', vi: 'người (cách nói viết)' },
    mottainai: { w: 'もったいない', r: 'もったいない', hv: '', vi: 'phí, uổng' },
    handan: { w: '判断', r: 'はんだん', hv: 'PHÁN ĐOÁN', vi: 'phán đoán, quyết định' },
    bangou: { w: '番号', r: 'ばんごう', hv: 'PHIÊN HIỆU', vi: 'số (dãy số)' },
    ken: { w: '券', r: 'けん', hv: 'KHOÁN', vi: 'vé, phiếu' },
    shoukin: { w: '賞金', r: 'しょうきん', hv: 'THƯỞNG KIM', vi: 'tiền thưởng' },
    yume: { w: '夢', r: 'ゆめ', hv: 'MỘNG', vi: 'giấc mơ' },
    soudan: { w: '相談する', r: 'そうだんする', hv: 'TƯƠNG ĐÀM', vi: 'bàn bạc, hỏi ý kiến' },
    iken: { w: '意見', r: 'いけん', hv: 'Ý KIẾN', vi: 'ý kiến' },
    mendou: { w: '面倒', r: 'めんどう', hv: 'DIỆN ĐẢO', vi: 'phiền phức' },
    kanousei: { w: '可能性', r: 'かのうせい', hv: 'KHẢ NĂNG TÍNH', vi: 'khả năng (xảy ra)' },
    yakudatsu: { w: '役立つ', r: 'やくだつ', hv: 'DỊCH LẬP', vi: 'có ích' }
  },

  problems: [
    /* ───────────── 問題29 ───────────── */
    {
      id: '29',
      review: { pages: [97], answerPage: 191, bookAnswer: 4, doubts: [] },
      kind: '内容理解（短文）・説明文',
      kindVi: 'Đoạn văn ngắn – văn giải thích',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '@onigiri(おにぎり)※1は@kantan([簡単|かんたん])に{食|た}べられるので、とても@ninki({人気|にんき})がある。', 'Cơm nắm có thể ăn một cách dễ dàng nên rất được ưa chuộng.']
        ] },
        { t: 'p', s: [
          ['s2', 'このおにぎり、@tada(ただ)ご[飯|はん]を@marui([丸|まる]く)しただけのように{見|み}えるが、{上手|じょうず}に{作|つく}るのは[簡単|かんたん]ではない。', 'Cơm nắm trông như chỉ là vo tròn cơm lại, nhưng làm cho khéo thì không dễ.'],
          ['s3', '@gyuugyuu(ぎゅうぎゅう)と{力|ちから}を@komeru([込|こ]めて)@katai([固|かた]く)@nigiru(にぎって)は、おいしいおにぎりにならない。', 'Nếu dồn sức nắm thật chặt, thật cứng thì sẽ không thành cơm nắm ngon.'],
          ['s4', 'けれどもあまり{力|ちから}を{入|い}れないと、{食|た}べるときに@boroboro(ぼろぼろ)と@kuzureru(くずれて)しまう。', 'Nhưng nếu không dùng sức mấy thì khi ăn cơm sẽ bị vỡ vụn.'],
          ['s5', '{食|た}べるときにお@kome({米|こめ})と@gu([具|ぐ])※2の{味|あじ}が@mazaru([混|ま]ざる)ように@fuwafuwa(ふわふわ)と、でも、くずれない@teido([程度|ていど])に{力|ちから}を[込|こ]めてにぎらなければならない。', 'Phải nắm sao cho mềm xốp để khi ăn vị cơm và nhân hòa vào nhau, nhưng vẫn dùng sức ở mức không bị vỡ.']
        ] },
        { t: 'p', s: [
          ['s6', '{自分|じぶん}の{作|つく}ったおにぎりがあまりおいしくないと{思|おも}っているなら、くずれない[程度|ていど]に{強|つよ}く、{味|あじ}が[混|ま]ざるように@yasashii([優|やさ]しく)にぎってみることを@susumeru(すすめる)。', 'Nếu bạn thấy cơm nắm mình làm không ngon lắm, tôi khuyên hãy thử nắm đủ chặt để không vỡ, nhưng nhẹ tay để vị hòa quyện.']
        ] }
      ],
      notes: [
        '（注1）おにぎり：@taku([炊|た]いた)ご[飯|はん]を@sankakukei([三角形|さんかくけい])や[丸|まる]の@katachi([形|かたち])にして{作|つく}った{日本|にほん}の{食|た}べ{物|もの}',
        '（注2）[具|ぐ]：おにぎりの{中|なか}に{入|い}れるおかずになるもの'
      ],
      refs: {},
      question: ['q', '{上手|じょうず}なおにぎりの{作|つく}り{方|かた}として{正|ただ}しいのはどれか。', 'Cách làm cơm nắm khéo, điều nào đúng?'],
      options: [
        ['{食|た}べるときに@kowareru(こわれて)しまわないようにご[飯|はん]を[固|かた]く@matomeru(まとめる)。', 'Nén cơm thật chặt để khi ăn không bị vỡ.', 'Sai. Nắm chặt quá thì không ngon (câu 3).'],
        ['[形|かたち]が[丸|まる]くなるように{力|ちから}を[込|こ]めて{何度|なんど}もにぎる。', 'Dồn sức nắm nhiều lần cho tròn.', 'Sai. Bài không nói về việc làm cho tròn; dồn sức nắm chặt là cách làm không ngon.'],
        ['{食|た}べるときに[形|かたち]がこわれるぐらい@yawarakai(やわらかく)にぎる。', 'Nắm mềm đến mức khi ăn bị vỡ hình.', 'Sai. Bị vỡ vụn khi ăn là điều cần tránh (câu 4).'],
        ['くずれないけれども{食|た}べるときにはやわらかいと[感|かん]じるようににぎる。', 'Nắm sao cho không vỡ nhưng khi ăn thấy mềm.', 'Đúng. Câu 5: nắm mềm xốp (ふわふわ) nhưng đủ sức để không vỡ (くずれない程度に).']
      ],
      answer: 4,
      evidence: ['s5', 's6'],
      summary: 'Cơm nắm trông đơn giản nhưng làm khéo không dễ. Nắm quá chặt thì không ngon, nắm quá lỏng thì vỡ khi ăn. Phải nắm mềm xốp để cơm và nhân hòa vị, nhưng đủ sức để không vỡ.',
      structure: [
        ['Đoạn 1', 'Cơm nắm được ưa chuộng'],
        ['Đoạn 2', 'Làm khéo không dễ: quá chặt ✗, quá lỏng ✗ → cách đúng'],
        ['Đoạn 3', 'Lời khuyên của người viết (すすめる)']
      ],
      grammar: [
        ['ただ〜だけ', 'Chỉ… mà thôi.', 'ただご飯を丸くしただけのように見える'],
        ['〜ては', 'Nếu… thì (kết quả xấu).', '固くにぎっては、おいしいおにぎりにならない'],
        ['〜ないと〜てしまう', 'Nếu không… thì sẽ (lỡ) …', '力を入れないと…くずれてしまう'],
        ['〜程度に', 'Ở mức…', 'くずれない程度に力を込めて'],
        ['〜なければならない', 'Phải…', 'にぎらなければならない'],
        ['〜ことをすすめる', 'Khuyên nên…', 'にぎってみることをすすめる']
      ],
      tip: 'Bài kiểu "không được quá A, cũng không được quá B" thì đáp án đúng thường là mức ở giữa (vừa không vỡ vừa mềm). Lựa chọn sai thường nghiêng hẳn về một phía.'
    },

    /* ───────────── 問題31 ───────────── */
    {
      id: '31',
      review: { pages: [99], answerPage: 192, bookAnswer: 2, doubts: [] },
      kind: '指示文',
      kindVi: 'Hướng dẫn sử dụng',
      style: 'memo',
      before: null,
      lead: ['l', 'つぎの{文章|ぶんしょう}は@shudouhatsuden([手動|しゅどう][発電|はつでん][式|しき])ライトの@setsumeisho([説明書|せつめいしょ])である。', 'Đoạn văn sau là sách hướng dẫn của đèn pin phát điện bằng tay quay.'],
      blocks: [
        { t: 'sub', s: [['h1', '@shiyou([使用|しよう])@houhou({方法|ほうほう})', 'Cách sử dụng']] },
        { t: 'lines', s: [
          ['s1', '①@migigawa({右|みぎ}[側|がわ])のハンドルを@hikidasu([引|ひ]き{出|だ}します)。', '① Kéo tay quay ở bên phải ra.'],
          ['s2', '②ハンドルを@yajirushi([矢印|やじるし])の@houkou([方向|ほうこう])に@kurikaesu(くり[返|かえ]し)@mawasu([回|まわ]す)ことで、@hatsuden([発電|はつでん])ができます。', '② Quay tay quay liên tục theo chiều mũi tên để phát điện.'],
          ['s3', '1{分間|ふんかん}の[発電|はつでん]で、@yaku([約|やく])10{分|ぷん}の[使用|しよう]が@kanou([可能|かのう])です。', 'Phát điện 1 phút thì dùng được khoảng 10 phút.'],
          ['s4', '③ライトスイッチを@osu([押|お]す)と、ライトが@tsuku(つきます)。', '③ Bấm công tắc đèn thì đèn sáng.'],
          ['s5', '④ライトスイッチを[押|お]してから、{白|しろ}いボタンを[押|お]すと、ライトを@tenmetsu([点滅|てんめつ])※1させることができます。', '④ Sau khi bấm công tắc đèn, bấm tiếp nút trắng thì có thể làm đèn nhấp nháy.']
        ] },
        { t: 'sub', s: [['h2', '[使用|しよう]@jou([上|じょう])の@chuui({注意|ちゅうい})', 'Lưu ý khi sử dụng']] },
        { t: 'lines', s: [
          ['s6', '・{長時間|ちょうじかん}ご[使用|しよう]の@baai([場合|ばあい])、ライトが@kurai([暗|くら]く)なることがあります。', '・Khi dùng trong thời gian dài, đèn có thể tối đi.'],
          ['s7', '　[暗|くら]くなりましたら、[発電|はつでん]{用|よう}ハンドルを[回|まわ]してください。', '  Khi đèn tối, hãy quay tay quay phát điện.'],
          ['s8', '・@koshou([故障|こしょう])の@genin([原因|げんいん])となりますので、{中|なか}を{開|あ}けて@bunkai([分解|ぶんかい])しないでください。', '・Không mở ra tháo rời vì sẽ gây hỏng.'],
          ['s9', '・@honseihin([本製品|ほんせいひん])は@bousuisei([防水性|ぼうすいせい])ではありませんので、@nurasu(ぬらさないで)ください。', '・Sản phẩm này không chống nước, nên đừng để bị ướt.']
        ] }
      ],
      notes: [
        '（注1）[点滅|てんめつ]：ライトがついたり[消|き]えたりすること'
      ],
      refs: {},
      question: ['q', '{本文|ほんぶん}の@naiyou([内容|ないよう])と{合|あ}っているものはどれか。', 'Điều nào khớp với nội dung bài?'],
      options: [
        ['ライトがつかなくなったら、@denchi([電池|でんち])を@torikaeru([取|と]り[替|か]えれば)よい。', 'Khi đèn không sáng thì thay pin là được.', 'Sai. Đây là đèn phát điện bằng tay quay; bài không nói gì về pin.'],
        ['ライトが[暗|くら]くなったら、ハンドルを[回|まわ]して[発電|はつでん]すればよい。', 'Khi đèn tối thì quay tay quay để phát điện là được.', 'Đúng. 「暗くなりましたら、発電用ハンドルを回してください」 (phần lưu ý).'],
        ['ライトスイッチを[押|お]せば、ライトを[点滅|てんめつ]させることができる。', 'Chỉ cần bấm công tắc đèn là đèn nhấp nháy.', 'Sai. Phải bấm công tắc đèn RỒI bấm thêm nút trắng (bước ④).'],
        ['{長時間|ちょうじかん}{使|つか}うとライトが[暗|くら]くなるので、{短|みじか}い{時間|じかん}だけ{使|つか}うようにする。', 'Dùng lâu đèn sẽ tối nên chỉ dùng trong thời gian ngắn.', 'Sai. Bài không bảo chỉ dùng ngắn; khi tối thì quay tay quay để phát điện là được.']
      ],
      answer: 2,
      evidence: ['s6', 's7'],
      summary: 'Hướng dẫn dùng đèn pin quay tay: kéo tay quay ra, quay theo chiều mũi tên để phát điện (1 phút quay ≈ 10 phút dùng), bấm công tắc để bật đèn, bấm thêm nút trắng để đèn nhấp nháy. Lưu ý: dùng lâu đèn sẽ tối → quay tay quay; không tháo rời; không để bị ướt.',
      structure: [
        ['使用方法 ①–④', 'Các bước sử dụng'],
        ['使用上の注意', 'Lưu ý: đèn tối → quay tay quay; không tháo; không làm ướt']
      ],
      grammar: [
        ['〜ことで', 'Bằng cách…', 'くり返し回すことで、発電ができます'],
        ['〜で〜が可能です', 'Với… thì có thể…', '1分間の発電で、約10分の使用が可能です'],
        ['〜てから', 'Sau khi…', 'ライトスイッチを押してから、白いボタンを押す'],
        ['〜ことがあります', 'Đôi khi có thể…', 'ライトが暗くなることがあります'],
        ['〜ましたら', 'Khi… (cách nói lịch sự của 〜たら).', '暗くなりましたら'],
        ['〜ので、〜ないでください', 'Vì… nên xin đừng…', '故障の原因となりますので、分解しないでください']
      ],
      tip: 'Với sách hướng dẫn, chú ý những thao tác có NHIỀU BƯỚC (bấm A rồi mới bấm B). Lựa chọn sai thường bỏ bớt một bước, hoặc thêm thông tin không có trong bài (như "thay pin").'
    },

    /* ───────────── 問題32 ───────────── */
    {
      id: '32',
      review: { pages: [100], answerPage: 192, bookAnswer: 2, doubts: [] },
      kind: 'メール（プライベート）',
      kindVi: 'Email',
      style: 'mail',
      before: null,
      lead: ['l', '○×{大学|だいがく}のサラさんは[山田|やまだ]{先生|せんせい}の@kenkyuushitsu([研究室|けんきゅうしつ])に{月曜日|げつようび}に{行|い}く@yakusoku([約束|やくそく])をしていたが、[山田|やまだ]{先生|せんせい}から{下|した}のようなメールが@todoku([届|とど]いた)。', 'Sara, sinh viên trường đại học ○×, đã hẹn đến phòng nghiên cứu của giáo viên Yamada vào thứ Hai, nhưng nhận được email như dưới đây từ giáo viên Yamada.'],
      blocks: [
        { t: 'meta', s: [
          ['m1', 'あて{先|さき}：1234abc@lits.ac.jp', 'Người nhận: 1234abc@lits.ac.jp'],
          ['m2', '[件名|けんめい]：{月曜日|げつようび}の[約束|やくそく]', 'Tiêu đề: Cuộc hẹn thứ Hai'],
          ['m3', '[送信|そうしん]{日時|にちじ}：20XX年7月16日　13:16', 'Ngày giờ gửi: 16/7/20XX, 13:16']
        ] },
        { t: 'lines', s: [
          ['s1', 'サラさん', 'Gửi Sara,'],
          ['s2', 'こんにちは、[山田|やまだ]です。', 'Xin chào, tôi là Yamada.'],
          ['s3', '{来週|らいしゅう}の{月曜日|げつようび}に[研究室|けんきゅうしつ]に{来|き}てくれるという[約束|やくそく]でしたが、', 'Chúng ta đã hẹn em sẽ đến phòng nghiên cứu vào thứ Hai tuần sau, nhưng'],
          ['s4', '@jitsuwa([実|じつ]は)@kyuuni({急|きゅう}に)@kaigi([会議|かいぎ])が{入|はい}ってしまい、@tsugougawarui([都合|つごう]が{悪|わる}く)なってしまいました。', 'thật ra tôi đột nhiên có cuộc họp nên không tiện nữa.'],
          ['s5', '@moushiwake([申|もう]し[訳|わけ]ない)けれど、{日時|にちじ}を@henkou([変更|へんこう])させてください。', 'Thật xin lỗi, nhưng cho tôi đổi ngày giờ nhé.'],
          ['s6', 'もし{早|はや}いほうがよければ{明日|あした}、17日の5:00@ikou([以降|いこう])、', 'Nếu em muốn sớm thì ngày mai, 17, từ 5 giờ trở đi;'],
          ['s7', '{月曜日|げつようび}よりも{後|あと}でよければ、{水|すい}、{木|もく}なら10{時|じ}からOKです。', 'nếu sau thứ Hai cũng được thì thứ Tư hoặc thứ Năm, từ 10 giờ là được.'],
          ['s8', 'サラさんの@tsugou([都合|つごう])を{教|おし}えてください。', 'Em cho tôi biết lịch của em nhé.']
        ] },
        { t: 'sign', cls: 'gap', s: [
          ['e1', '○×{大学|だいがく}　{外国語|がいこくご}[学部|がくぶ]', 'Khoa Ngoại ngữ, Đại học ○×'],
          ['e2', '[山田|やまだ]　はな', 'Yamada Hana'],
          ['e3', 'e-mail　yamadahana@marubatsu.ac.jp', 'e-mail: yamadahana@marubatsu.ac.jp']
        ] }
      ],
      notes: [],
      refs: {},
      question: ['q', 'このメールを{読|よ}んだ{後|あと}、サラさんは[山田|やまだ]{先生|せんせい}にどんなメールを{出|だ}せばよいか。', 'Sau khi đọc email này, Sara nên gửi email như thế nào cho giáo viên Yamada?'],
      options: [
        ['もう{一度|いちど}{先生|せんせい}の[都合|つごう]を{聞|き}くメール', 'Email hỏi lại lịch của giáo viên.', 'Sai. Giáo viên đã đưa ra các lựa chọn (ngày 17 từ 5 giờ, hoặc thứ Tư, thứ Năm từ 10 giờ), không cần hỏi lại.'],
        ['{自分|じぶん}の[都合|つごう]を{教|おし}えるメール', 'Email cho biết lịch của mình.', 'Đúng. Câu cuối: 「サラさんの都合を教えてください」.'],
        ['[約束|やくそく]を@enki([延期|えんき])したことを@ayamaru(あやまる)メール', 'Email xin lỗi vì đã hoãn cuộc hẹn.', 'Sai. Người hoãn hẹn là giáo viên, không phải Sara.'],
        ['[都合|つごう]が{悪|わる}くなったことをあやまるメール', 'Email xin lỗi vì không còn tiện.', 'Sai. Người bận đột xuất là giáo viên (và giáo viên đã xin lỗi), không phải Sara.']
      ],
      answer: 2,
      evidence: ['s8'],
      summary: 'Giáo viên Yamada báo với Sara rằng do đột xuất có cuộc họp nên không thể gặp vào thứ Hai như đã hẹn, xin đổi ngày: ngày mai (17) từ 5 giờ, hoặc thứ Tư, thứ Năm từ 10 giờ, và nhờ Sara cho biết lịch của mình.',
      structure: [
        ['Câu 1–2', 'Gọi tên, chào'],
        ['Câu 3–5', 'Lý do (実は…) + xin đổi lịch'],
        ['Câu 6–7', 'Các ngày giờ có thể gặp'],
        ['Câu 8', 'NỘI DUNG CẦN LÀM: cho biết lịch của Sara']
      ],
      grammar: [
        ['〜てくれるという約束', 'Lời hẹn rằng (người kia) sẽ… cho mình.', '研究室に来てくれるという約束でしたが'],
        ['〜てしまい、〜てしまいました', 'Lỡ…, (kết quả không mong muốn).', '会議が入ってしまい、都合が悪くなってしまいました'],
        ['〜させてください', 'Xin cho phép tôi…', '日時を変更させてください'],
        ['〜ほうがよければ / 〜でよければ', 'Nếu… thì tốt hơn / nếu… cũng được thì…', '早いほうがよければ… 後でよければ…']
      ],
      tip: 'Câu hỏi "nên gửi email thế nào" → tìm câu nhờ vả ở cuối email (〜てください). Cẩn thận lựa chọn đảo vai: người xin lỗi, người hoãn hẹn là ai.'
    },

    /* ───────────── 問題33 ───────────── */
    {
      id: '33',
      review: { pages: [101, 102], answerPage: 192, doubts: [] },
      kind: '内容理解（中文）・説明文',
      kindVi: 'Đoạn văn trung bình – văn giải thích',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '3@okuen([億円|おくえん])が@ataru([当|あ]たる)@takarakuji([宝|たから]くじ)※1がある。', 'Có loại xổ số trúng 300 triệu yên.'],
          ['s2', '«r1(それが[当|あ]たったのにお{金|かね}を@uketoru([受|う]け[取|と]らなかった){人|ひと})がいる。', 'Có người trúng giải đó mà lại không nhận tiền.'],
          ['s3', '»r1([彼|かれ])は70@dai({代|だい})の@hitorigurashi([一人暮|ひとりぐ]らし)の@dansei([男性|だんせい])で、[受|う]け[取|と]らない@riyuu({理由|りゆう})は「どう{使|つか}えばいいかわからないから。」@dasouda(だそうだ)。', 'Đó là một người đàn ông ngoài 70 tuổi sống một mình; nghe nói lý do ông không nhận là "vì không biết nên tiêu thế nào".']
        ] },
        { t: 'p', s: [
          ['s4', '{今|いま}は«r2(@shizuka([静|しず]かに)@seikatsu([生活|せいかつ])をしていて)、»r2(それ)に{何|なん}の@fuman([不満|ふまん])もない。', 'Hiện ông sống lặng lẽ và không có gì bất mãn với cuộc sống ấy.'],
          ['s5', '[彼|かれ]が[宝|たから]くじを{買|か}ったのは、@nakunaru([亡|な]くなった)@tsuma([妻|つま])が[宝|たから]くじを{楽|たの}しんでいたためで、お{金|かね}が@hoshii([欲|ほ]しい)からではなかった。', 'Ông mua xổ số là vì người vợ đã mất từng thích chơi xổ số, chứ không phải vì muốn có tiền.'],
          ['s6', '3[億円|おくえん]を[受|う]け[取|と]っても、»r3(それ)を@wakeru({分|わ}ける)ような{子|こ}どもや@shinseki({親|しん}せき)もいないし、@koukyuusha([高級車|こうきゅうしゃ])や{大|おお}きな{家|いえ}を{買|か}う@hitsuyou([必要|ひつよう])もない。', 'Dù nhận 300 triệu yên, ông cũng không có con cái hay họ hàng để chia, và cũng không cần mua xe sang hay nhà lớn.'],
          ['s7', 'それよりも、もし3[億円|おくえん]を[受|う]け[取|と]ったら、その{金|かね}@mokuteki(を[目的|もくてき]に){人|ひと}が@yoru([寄|よ]って)きていろいろな{問題|もんだい}が{起|お}きるかもしれない。', 'Hơn thế, nếu nhận 300 triệu yên, có thể người ta sẽ kéo đến vì tiền và nảy sinh đủ thứ rắc rối.'],
          ['s8', '{楽|たの}しい{事|こと}より@taihen({大変|たいへん})な{事|こと}が{多|おお}いと{考|かんが}えたのだろう。', 'Có lẽ ông nghĩ rằng chuyện phiền phức sẽ nhiều hơn chuyện vui.']
        ] },
        { t: 'p', s: [
          ['s9', '{何人|なんにん}もの{人|ひと}が[受|う]け[取|と]るようにすすめたが、[彼|かれ]の{気持|きも}ちは{変|か}わらなかった。', 'Nhiều người khuyên ông nhận tiền, nhưng ông không đổi ý.'],
          ['s10', '[当|あ]たらない@mono([者|もの])から{見|み}たら@mottainai(もったいない){話|はなし}だが、‹[彼|かれ]はかしこい@handan([判断|はんだん])をしたのかもしれない。›', 'Với người không trúng thì đây là chuyện thật phí, nhưng có lẽ ông đã có một quyết định khôn ngoan.']
        ] }
      ],
      notes: [
        '（注1）[宝|たから]くじ：@bangou([番号|ばんごう])などのついた@ken([券|けん])を{買|か}い、[当|あ]たれば@shoukin([賞金|しょうきん])がもらえる。'
      ],
      refs: {
        r1: '彼 = người đã trúng xổ số mà không nhận tiền (câu 2).',
        r2: 'それ = cuộc sống lặng lẽ hiện tại của ông.',
        r3: 'それ = số tiền 300 triệu yên.'
      },
      questions: [
        {
          label: '問1',
          question: ['q1', '[彼|かれ]はどうして3[億円|おくえん]の[宝|たから]くじを{買|か}ったのか。', 'Vì sao ông ấy mua tờ xổ số 300 triệu yên?'],
          options: [
            ['3[億円|おくえん]を{何|なに}かに{使|つか}う@yume([夢|ゆめ])を{見|み}たかったから。', 'Vì muốn mơ về việc tiêu 300 triệu yên vào việc gì đó.', 'Sai. Bài không nói vậy.'],
            ['[亡|な]くなった[妻|つま]が[宝|たから]くじが{好|す}きだったから。', 'Vì người vợ đã mất thích xổ số.', 'Đúng. 「亡くなった妻が宝くじを楽しんでいたため」 (câu 5).'],
            ['お{金|かね}が[欲|ほ]しいと{思|おも}ったから。', 'Vì muốn có tiền.', 'Sai. Bài nói rõ: 「お金が欲しいからではなかった」.'],
            ['{楽|たの}しいことがあると{思|おも}ったから。', 'Vì nghĩ sẽ có chuyện vui.', 'Sai. Bài không nói vậy; ngược lại ông nghĩ chuyện phiền sẽ nhiều hơn.']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['s5']
        },
        {
          label: '問2',
          question: ['q2', '3[億円|おくえん]が[当|あ]たった{後|あと}で[彼|かれ]はどうしようと{思|おも}ったか。', 'Sau khi trúng 300 triệu yên, ông ấy định làm gì?'],
          options: [
            ['{子|こ}どもや{親|しん}せきと{分|わ}けようと{思|おも}った。', 'Định chia cho con cái và họ hàng.', 'Sai. Ông không có con cái hay họ hàng để chia (câu 6).'],
            ['[高級車|こうきゅうしゃ]を{買|か}おうと{思|おも}った。', 'Định mua xe sang.', 'Sai. Ông không cần mua xe sang (câu 6).'],
            ['{大|おお}きな{家|いえ}を{買|か}おうと{思|おも}った。', 'Định mua nhà lớn.', 'Sai. Ông không cần mua nhà lớn (câu 6).'],
            ['[受|う]け[取|と]らないことにしようと{思|おも}った。', 'Quyết định không nhận tiền.', 'Đúng. Ông không nhận tiền, và dù nhiều người khuyên vẫn không đổi ý (câu 2, 9).']
          ],
          answer: 4,
          bookAnswer: 4,
          evidence: ['s2', 's9']
        },
        {
          label: '問3',
          question: ['q3', '‹[彼|かれ]はかしこい[判断|はんだん]をしたのかもしれない。›とあるが、それはなぜか。', 'Bài viết "có lẽ ông đã có một quyết định khôn ngoan". Vì sao?'],
          options: [
            ['{何人|なんにん}もの{人|ひと}に@soudan([相談|そうだん])して@iken({意見|いけん})を{聞|き}いたから。', 'Vì đã hỏi ý kiến nhiều người.', 'Sai. Nhiều người khuyên ông, nhưng ông không nghe theo; bài không nói ông đi hỏi ý kiến.'],
            ['@mendou([面倒|めんどう])な{問題|もんだい}が{起|お}きる@kanousei([可能性|かのうせい])がなくなったから。', 'Vì không còn khả năng xảy ra rắc rối.', 'Đúng. Nếu nhận tiền, người ta có thể kéo đến vì tiền và gây rắc rối (câu 7–8). Không nhận thì tránh được điều đó.'],
            ['お{金|かね}を@yakudatsu([役立|やくだ]つ)ように{使|つか}おうとしたから。', 'Vì định dùng tiền vào việc có ích.', 'Sai. Ông không nhận tiền nên không dùng tiền.'],
            ['{車|くるま}や{家|いえ}を{買|か}って[周|まわ]りの{人|ひと}にあげようと{思|おも}ったから。', 'Vì định mua xe, nhà tặng người xung quanh.', 'Sai. Bài không nói vậy.']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['s7', 's8']
        }
      ],
      summary: 'Một ông lão ngoài 70 tuổi sống một mình trúng xổ số 300 triệu yên nhưng không nhận tiền. Ông mua xổ số vì người vợ quá cố thích chơi, không phải vì muốn tiền. Ông hài lòng với cuộc sống hiện tại, không có người để chia, không cần mua xe hay nhà; nhận tiền còn có thể kéo theo rắc rối. Dù nhiều người khuyên, ông vẫn không đổi ý; người viết cho rằng có lẽ đó là quyết định khôn ngoan.',
      structure: [
        ['Đoạn 1', 'Sự việc: trúng 300 triệu yên mà không nhận + lý do ông nói'],
        ['Đoạn 2', 'Hoàn cảnh và suy nghĩ của ông: mua vì vợ; không cần tiền; sợ rắc rối'],
        ['Đoạn 3', 'Không đổi ý + đánh giá của người viết (câu gạch chân)']
      ],
      grammar: [
        ['〜のに', 'Vậy mà… (trái với mong đợi).', '当たったのにお金を受け取らなかった'],
        ['〜そうだ', 'Nghe nói là…', '「…わからないから。」だそうだ'],
        ['〜ためで、〜からではない', 'Là vì… chứ không phải vì…', '妻が宝くじを楽しんでいたためで、お金が欲しいからではなかった'],
        ['〜を目的に', 'Nhắm vào…, vì mục đích…', 'その金を目的に人が寄ってきて'],
        ['〜のだろう', 'Có lẽ là… (người viết suy đoán).', '大変な事が多いと考えたのだろう'],
        ['〜から見たら', 'Nhìn từ phía…', '当たらない者から見たらもったいない話だが']
      ],
      tip: 'Câu hỏi "tại sao" với câu gạch chân ở cuối bài: tìm lý do ở các câu phía trên thể hiện suy nghĩ của nhân vật (〜かもしれない、〜と考えたのだろう). Ở bài này, lý do là tránh được rắc rối (câu 7–8).'
    }
  ]
};
