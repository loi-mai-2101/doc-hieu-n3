/* Dữ liệu Bài 2 — 問題17, 18, 19. Cú pháp đánh dấu: xem data/bai-1.js. ‹…› = phần gạch chân trong sách. */
window.BAI = {
  id: 2,
  title: 'Bài 2',
  subtitle: 'Văn chỉ dẫn · Văn nêu ý kiến · Văn giải thích',

  vocab: {
    // 問題17
    nihonryouri: { w: '日本料理', r: 'にほんりょうり', hv: 'NHẬT BẢN LIỆU LÝ', vi: 'món ăn Nhật' },
    oyakodon: { w: '親子丼', r: 'おやこどん', hv: 'THÂN TỬ ĐẢM', vi: 'cơm thịt gà trứng (gà = "bố mẹ", trứng = "con")' },
    tsukurikata: { w: '作り方', r: 'つくりかた', hv: 'TÁC PHƯƠNG', vi: 'cách làm' },
    zairyou: { w: '材料', r: 'ざいりょう', hv: 'TÀI LIỆU', vi: 'nguyên liệu' },
    ninbun: { w: '〜人分', r: 'にんぶん', hv: 'NHÂN PHÂN', vi: 'phần cho … người' },
    donburi: { w: 'どんぶり', r: 'どんぶり', hv: '', vi: 'bát tô (bát to, sâu lòng)' },
    haibun: { w: '〜杯分', r: 'はいぶん', hv: 'BÔI PHÂN', vi: 'lượng … bát / chén' },
    toriniku: { w: 'とり肉（鶏肉）', r: 'とりにく', hv: 'KÊ NHỤC', vi: 'thịt gà' },
    mai: { w: '〜枚', r: 'まい', hv: 'MAI', vi: 'miếng, tờ (đếm vật mỏng, dẹt)' },
    yaku: { w: '約', r: 'やく', hv: 'ƯỚC', vi: 'khoảng, chừng' },
    dashijiru: { w: 'だし汁', r: 'だしじる', hv: 'TRẤP', vi: 'nước dùng dashi' },
    choumiryou: { w: '調味料', r: 'ちょうみりょう', hv: 'ĐIỀU VỊ LIỆU', vi: 'gia vị' },
    oosaji: { w: '大さじ', r: 'おおさじ', hv: 'ĐẠI', vi: 'thìa canh (khoảng 15 ml)' },
    hitokuchidai: { w: '一口大', r: 'ひとくちだい', hv: 'NHẤT KHẨU ĐẠI', vi: 'cỡ vừa một miếng ăn' },
    usugiri: { w: 'うす切り（薄切り）', r: 'うすぎり', hv: 'BẠC THIẾT', vi: 'thái mỏng' },
    waru: { w: '割る', r: 'わる', hv: 'CÁT', vi: 'đập (trứng), làm vỡ' },
    mazeru: { w: '混ぜる', r: 'まぜる', hv: 'HỖN', vi: 'trộn, khuấy', note: '混ぜておきます = trộn sẵn trước' },
    hinikakeru: { w: '火にかける', r: 'ひにかける', hv: 'HỎA', vi: 'bắc lên bếp, đun' },
    futtou: { w: '沸騰する', r: 'ふっとうする', hv: 'PHÍ ĐẰNG', vi: 'sôi' },
    chuubi: { w: '中火', r: 'ちゅうび', hv: 'TRUNG HỎA', vi: 'lửa vừa' },
    yowabi: { w: '弱火', r: 'よわび', hv: 'NHƯỢC HỎA', vi: 'lửa nhỏ' },
    niru: { w: '煮る', r: 'にる', hv: 'CHỬ', vi: 'ninh, nấu (trong nước)' },
    nieru: { w: '煮える', r: 'にえる', hv: 'CHỬ', vi: 'chín (khi nấu)' },
    mawashiireru: { w: '回し入れる', r: 'まわしいれる', hv: 'HỒI NHẬP', vi: 'rưới theo vòng tròn' },
    katamaru: { w: '固まる', r: 'かたまる', hv: 'CỐ', vi: 'đông lại, đặc lại' },
    hiwotomeru: { w: '火を止める', r: 'ひをとめる', hv: 'HỎA CHỈ', vi: 'tắt bếp', note: 'Trong bài viết bằng hiragana: 火をとめます.' },
    dekiagari: { w: '出来あがり', r: 'できあがり', hv: 'XUẤT LAI', vi: 'hoàn thành, xong' },
    chuui: { w: '注意', r: 'ちゅうい', hv: 'CHÚ Ý', vi: 'chú ý; lời dặn' },
    saigo: { w: '最後に', r: 'さいごに', hv: 'TỐI HẬU', vi: 'cuối cùng' },
    junban: { w: '順番', r: 'じゅんばん', hv: 'THUẬN PHIÊN', vi: 'thứ tự' },
    hajimeni: { w: 'はじめに', r: 'はじめに', hv: '', vi: 'đầu tiên, trước hết' },

    // 問題18
    keshou: { w: '化粧', r: 'けしょう', hv: 'HÓA TRANG', vi: 'trang điểm' },
    josei: { w: '女性', r: 'じょせい', hv: 'NỮ TÍNH', vi: 'phụ nữ' },
    mikakeru: { w: '見かける', r: 'みかける', hv: 'KIẾN', vi: 'bắt gặp, tình cờ thấy' },
    kanojotachi: { w: '彼女たち', r: 'かのじょたち', hv: 'BỈ NỮ', vi: 'họ (những người phụ nữ ấy)' },
    tanin: { w: '他人', r: 'たにん', hv: 'THA NHÂN', vi: 'người khác' },
    meiwakuwokakeru: { w: '迷惑をかける', r: 'めいわくをかける', hv: 'MÊ HOẶC', vi: 'gây phiền cho người khác' },
    wakejanai: { w: '〜わけじゃない', r: 'わけじゃない', hv: '', vi: 'đâu phải là…, không phải là…', note: 'Văn nói của 〜わけではない.' },
    betsuni: { w: '別に', r: 'べつに', hv: 'BIỆT', vi: '(không) … gì đặc biệt', note: '別にいいでしょ = cũng chẳng sao mà' },
    rashii: { w: '〜らしい', r: 'らしい', hv: '', vi: 'hình như, có vẻ là (suy đoán dựa trên điều nghe/thấy)' },
    tashikani: { w: '確かに', r: 'たしかに', hv: 'XÁC', vi: 'quả thật, đúng là' },
    setsuyaku: { w: '節約する', r: 'せつやくする', hv: 'TIẾT ƯỚC', vi: 'tiết kiệm' },
    fukai: { w: '不快', r: 'ふかい', hv: 'BẤT KHOÁI', vi: 'khó chịu' },
    junbi: { w: '準備', r: 'じゅんび', hv: 'CHUẨN BỊ', vi: 'sự chuẩn bị' },
    bekidewanai: { w: '〜べきではない', r: 'べきではない', hv: '', vi: 'không nên…', note: 'する → すべきではない' },
    ippou: { w: '一方', r: 'いっぽう', hv: 'NHẤT PHƯƠNG', vi: 'mặt khác, trong khi đó' },
    zenzen: { w: '全然', r: 'ぜんぜん', hv: 'TOÀN NHIÊN', vi: 'hoàn toàn (không)' },
    kankei: { w: '関係', r: 'かんけい', hv: 'QUAN HỆ', vi: 'liên quan, quan hệ' },
    mawari: { w: '周り', r: 'まわり', hv: 'CHU', vi: 'xung quanh' },
    joukyaku: { w: '乗客', r: 'じょうきゃく', hv: 'THỪA KHÁCH', vi: 'hành khách' },
    sugata: { w: '姿', r: 'すがた', hv: 'TƯ', vi: 'dáng vẻ, hình ảnh (của ai đó)' },
    kamawanai: { w: '構わない', r: 'かまわない', hv: 'CẤU', vi: 'không sao, không bận tâm' },
    fuukei: { w: '風景', r: 'ふうけい', hv: 'PHONG CẢNH', vi: 'phong cảnh, cảnh vật' },
    ichibu: { w: '一部', r: 'いちぶ', hv: 'NHẤT BỘ', vi: 'một phần' },
    kabe: { w: '壁', r: 'かべ', hv: 'BÍCH', vi: 'bức tường' },
    zaseki: { w: '座席', r: 'ざせき', hv: 'TỌA TỊCH', vi: 'chỗ ngồi, ghế' },
    kanjirareru: { w: '感じられる', r: 'かんじられる', hv: 'CẢM', vi: '(tôi) cảm thấy (dạng tự phát)' },
    taihen: { w: '大変', r: 'たいへん', hv: 'ĐẠI BIẾN', vi: 'rất, vô cùng; vất vả' },
    shitsurei: { w: '失礼', r: 'しつれい', hv: 'THẤT LỄ', vi: 'bất lịch sự, thất lễ' },
    inshou: { w: '印象', r: 'いんしょう', hv: 'ẤN TƯỢNG', vi: 'ấn tượng' },
    ataeru: { w: '与える', r: 'あたえる', hv: 'DỮ', vi: 'đem lại, gây ra (ấn tượng, ảnh hưởng)' },
    kizuku: { w: '気づく', r: 'きづく', hv: 'KHÍ', vi: 'nhận ra' },
    riyuu: { w: '理由', r: 'りゆう', hv: 'LÝ DO', vi: 'lý do' },
    koudou: { w: '行動', r: 'こうどう', hv: 'HÀNH ĐỘNG', vi: 'hành động' },
    nitaishite: { w: '〜に対して', r: 'にたいして', hv: 'ĐỐI', vi: 'đối với…' },
    hazukashii: { w: 'はずかしい（恥ずかしい）', r: 'はずかしい', hv: 'SỈ', vi: 'xấu hổ, đáng ngượng' },

    // 問題19
    hinankunren: { w: '避難訓練', r: 'ひなんくんれん', hv: 'TỴ NẠN HUẤN LUYỆN', vi: 'diễn tập sơ tán' },
    youchien: { w: '幼稚園', r: 'ようちえん', hv: 'ẤU TRĨ VIÊN', vi: 'trường mẫu giáo' },
    kotoba: { w: '言葉', r: 'ことば', hv: 'NGÔN DIỆP', vi: 'từ ngữ, lời nói' },
    narau: { w: '習う', r: 'ならう', hv: 'TẬP', vi: 'học (được ai dạy)' },
    okashi: { w: 'お菓子', r: 'おかし', hv: 'QUẢ TỬ', vi: 'bánh kẹo' },
    yasai: { w: '野菜', r: 'やさい', hv: 'DÃ THÁI', vi: 'rau' },
    jitsuwa: { w: '実は', r: 'じつは', hv: 'THỰC', vi: 'thật ra là…' },
    saigai: { w: '災害', r: 'さいがい', hv: 'TAI HẠI', vi: 'thảm họa, thiên tai' },
    jiko: { w: '事故', r: 'じこ', hv: 'SỰ CỐ', vi: 'tai nạn, sự cố' },
    anzen: { w: '安全', r: 'あんぜん', hv: 'AN TOÀN', vi: 'an toàn' },
    hinan: { w: '避難する', r: 'ひなんする', hv: 'TỴ NẠN', vi: 'lánh nạn, sơ tán' },
    osu: { w: '押す', r: 'おす', hv: 'ÁP', vi: 'đẩy, xô' },
    kakeru: { w: '駆ける', r: 'かける', hv: 'KHU', vi: 'chạy' },
    shaberu: { w: 'しゃべる', r: 'しゃべる', hv: '', vi: 'nói chuyện, tán gẫu' },
    modoru: { w: '戻る', r: 'もどる', hv: 'LỆ', vi: 'quay lại' },
    narabu: { w: '並べる', r: 'ならべる', hv: 'TỊNH', vi: 'xếp, ghép cạnh nhau' },
    okonau: { w: '行う', r: 'おこなう', hv: 'HÀNH', vi: 'tiến hành, tổ chức', note: '行われる = được tổ chức' },
    kyoushitsu: { w: '教室', r: 'きょうしつ', hv: 'GIÁO THẤT', vi: 'lớp học, phòng học' },
    koutei: { w: '校庭', r: 'こうてい', hv: 'HIỆU ĐÌNH', vi: 'sân trường' },
    nigeru: { w: '逃げる', r: 'にげる', hv: 'ĐÀO', vi: 'chạy trốn, thoát ra' },
    renshuu: { w: '練習', r: 'れんしゅう', hv: 'LUYỆN TẬP', vi: 'luyện tập' },
    subayaku: { w: '素早く', r: 'すばやく', hv: 'TỐ TẢO', vi: 'nhanh nhẹn, nhanh chóng' },
    koewokakeru: { w: '声をかける', r: 'こえをかける', hv: 'THANH', vi: 'gọi, nhắc (bằng lời)' },
    tabini: { w: '〜たびに', r: 'たびに', hv: '', vi: 'mỗi lần…' },
    mimini: { w: '耳にする', r: 'みみにする', hv: 'NHĨ', vi: 'nghe thấy' },
    hodo: { w: '〜ほどです', r: 'ほどです', hv: '', vi: 'đến mức…' },
    kunren: { w: '訓練', r: 'くんれん', hv: 'HUẤN LUYỆN', vi: 'huấn luyện, tập luyện' },
    minitsukeru: { w: '身につける', r: 'みにつける', hv: 'THÂN', vi: 'tiếp thu, thấm nhuần (kiến thức, thói quen)' },
    okagede: { w: '〜おかげで', r: 'おかげで', hv: '', vi: 'nhờ có… (kết quả tốt)' },
    kowagaru: { w: 'こわがる（怖がる）', r: 'こわがる', hv: 'BỐ', vi: 'sợ hãi' },
    awateru: { w: 'あわてる（慌てる）', r: 'あわてる', hv: 'HOẢNG', vi: 'hoảng hốt, cuống' },
    reisei: { w: '冷静', r: 'れいせい', hv: 'LÃNH TĨNH', vi: 'bình tĩnh' },
    wakedesu: { w: '〜というわけです', r: 'というわけです', hv: '', vi: 'nghĩa là…, chính vì vậy mà…' },
    kufuu: { w: '工夫', r: 'くふう', hv: 'CÔNG PHU', vi: 'sáng kiến, cách làm khéo léo' },
    jishin: { w: '地震', r: 'じしん', hv: 'ĐỊA CHẤN', vi: 'động đất' },
    taifuu: { w: '台風', r: 'たいふう', hv: 'ĐÀI PHONG', vi: 'bão' },
    higai: { w: '被害', r: 'ひがい', hv: 'BỊ HẠI', vi: 'thiệt hại' },
    dekigoto: { w: '出来事', r: 'できごと', hv: 'XUẤT LAI SỰ', vi: 'sự việc, sự kiện' },
    susumeru: { w: '勧める', r: 'すすめる', hv: 'KHUYẾN', vi: 'khuyên, mời' },
    mijikaku: { w: '短くする', r: 'みじかくする', hv: 'ĐOẢN', vi: 'rút ngắn, làm ngắn lại' },
    setsumei: { w: '説明', r: 'せつめい', hv: 'THUYẾT MINH', vi: 'giải thích' },
    niteiru: { w: '似ている', r: 'にている', hv: 'TỰ', vi: 'giống' }
  },

  problems: [
    /* ───────────── 問題17 ───────────── */
    {
      id: '17',
      review: {
        pages: [62, 63], answerPage: 187, bookAnswer: 4,
        doubts: []
      },
      kind: '指示文',
      kindVi: 'Văn chỉ dẫn (công thức nấu ăn)',
      style: 'recipe',
      before: ['b', '@nihonryouri({日本|にほん}[料理|りょうり])を{作|つく}ったことがありますか。どんなものを{作|つく}りましたか。', 'Bạn đã từng nấu món Nhật chưa? Bạn đã nấu món gì?'],
      lead: null,
      blocks: [
        { t: 'title', s: [['t1', '@oyakodon([親子丼|おやこどん])の@tsukurikata({作|つく}り{方|かた})', 'Cách làm Oyakodon (cơm thịt gà trứng)']] },
        { t: 'sub', s: [['h1', '@zairyou([材料|ざいりょう])（2@ninbun({人分|にんぶん})）', 'Nguyên liệu (cho 2 người)']] },
        { t: 'list', cls: 'plain', s: [
          ['m1', 'ごはん・・・@donburi(どんぶり)2@haibun([杯分|はいぶん])', 'Cơm: 2 bát tô'],
          ['m2', '@toriniku(とり{肉|にく})・・・1@mai([枚|まい])（@yaku([約|やく])150g）', 'Thịt gà: 1 miếng (khoảng 150 g)'],
          ['m3', 'たまご・・・4コ', 'Trứng: 4 quả'],
          ['m4', 'たまねぎ・・・1/4コ', 'Hành tây: 1/4 củ'],
          ['m5', '@dashijiru(だし[汁|じる])・・・カップ1[杯|ぱい]（200cc）', 'Nước dùng dashi: 1 cốc (200 cc)']
        ] },
        { t: 'sub', s: [['h2', '@choumiryou([調味料|ちょうみりょう])', 'Gia vị']] },
        { t: 'list', cls: 'plain', s: [
          ['m6', 'みりん・・・@oosaji({大|おお}さじ)2', 'Rượu ngọt mirin: 2 thìa canh'],
          ['m7', '[酒|さけ]・・・{大|おお}さじ1', 'Rượu sake: 1 thìa canh'],
          ['m8', 'しょうゆ・・・{大|おお}さじ2', 'Xì dầu: 2 thìa canh'],
          ['m9', 'さとう・・・{大|おお}さじ1', 'Đường: 1 thìa canh']
        ] },
        { t: 'sub', s: [['h3', '{作|つく}り{方|かた}', 'Cách làm']] },
        { t: 'lines', s: [
          ['s1', '1．まず、とり{肉|にく}を@hitokuchidai([一口大|ひとくちだい])※1に{切|き}り、たまねぎを@usugiri(うす{切|ぎ}り)にします。', '1. Trước tiên, cắt thịt gà thành miếng vừa ăn, thái mỏng hành tây.'],
          ['s2', 'ボールにたまごを@waru([割|わ]って)@mazeru([混|ま]ぜて)おきます。', 'Đập trứng vào bát to, đánh đều để sẵn.'],
          ['s3', '2．なべにだし[汁|じる]※2、みりん、[酒|さけ]、しょうゆ、さとうを{入|い}れて@hinikakeru({火|ひ}にかけます)。', '2. Cho nước dashi, mirin, rượu sake, xì dầu và đường vào nồi rồi bắc lên bếp.'],
          ['s4', '3．@futtou([沸騰|ふっとう]したら)、たまねぎ、とり{肉|にく}を{入|い}れて、@chuubi({中火|ちゅうび})～@yowabi([弱火|よわび])で@niru([煮|に]ます)。', '3. Khi sôi thì cho hành tây và thịt gà vào, ninh ở lửa vừa đến lửa nhỏ.'],
          ['s5', '4．とり{肉|にく}が@nieru([煮|に]えたら)、たまごを@mawashiireru([回|まわ]し{入|い}れます)※3。', '4. Khi thịt gà chín thì rưới trứng theo vòng tròn vào.'],
          ['s6', '@katamaru([固|かた]まり){始|はじ}めたら、@hiwotomeru({火|ひ}をとめます)。', 'Khi trứng bắt đầu đông lại thì tắt bếp.'],
          ['s7', '5．ごはんの{上|うえ}にのせて、@dekiagari({出来|でき}あがり)！', '5. Cho lên trên cơm là xong!']
        ] },
        { t: 'sub', s: [['h4', 'ここに@chuui({注意|ちゅうい})！', 'Chú ý điểm này!']] },
        { t: 'lines', s: [
          ['s8', '@saigo([最後|さいご]に)たまごを{入|い}れたら、あまり[混|ま]ぜないこと。', 'Sau khi cho trứng vào ở bước cuối, đừng khuấy nhiều.'],
          ['s9', 'そして{長|なが}く[煮|に]ないこと。', 'Và đừng nấu lâu.']
        ] }
      ],
      notes: [
        '（注1）[一口大|ひとくちだい]：{口|くち}に{入|はい}るくらいの{大|おお}きさ',
        '（注2）だし[汁|じる]：こんぶやかつおぶしで{作|つく}ったスープ',
        '（注3）[回|まわ]し{入|い}れる：まるをかくようにして{入|い}れる'
      ],
      refs: {},
      question: ['q', '@oyakodon([親子丼|おやこどん])の{作|つく}り{方|かた}の@junban([順番|じゅんばん])で、{正|ただ}しいものはどれか。', 'Về thứ tự cách làm Oyakodon, điều nào đúng?'],
      options: [
        ['なべにだし[汁|じる]、とり{肉|にく}、たまねぎ、たまごを{入|い}れてから{火|ひ}にかける。', 'Cho nước dashi, thịt gà, hành tây, trứng vào nồi rồi mới bắc lên bếp.', 'Sai. Ban đầu chỉ cho nước dashi và gia vị rồi bắc lên bếp (bước 2). Thịt và hành cho vào sau khi sôi, trứng cho vào cuối cùng.'],
        ['なべにだし[汁|じる]、[調味料|ちょうみりょう]、とり{肉|にく}を{入|い}れ、[沸騰|ふっとう]したら、たまねぎとたまごを{入|い}れる。', 'Cho dashi, gia vị, thịt gà vào nồi; khi sôi thì cho hành tây và trứng.', 'Sai. Thịt gà cho vào SAU khi sôi, cùng với hành tây (bước 3). Trứng cho vào sau khi thịt chín (bước 4).'],
        ['なべにだし[汁|じる]、[調味料|ちょうみりょう]を{入|い}れ、[沸騰|ふっとう]したら、@hajimeni(はじめに)たまごを{入|い}れる。', 'Cho dashi và gia vị vào nồi; khi sôi thì cho trứng vào trước tiên.', 'Sai. Khi sôi thì cho hành và thịt trước; trứng là thứ cho vào cuối cùng (最後にたまごを入れたら).'],
        ['なべにだし[汁|じる]、[調味料|ちょうみりょう]を{入|い}れ、[沸騰|ふっとう]したら、とり{肉|にく}とたまねぎを{入|い}れる。', 'Cho dashi và gia vị vào nồi; khi sôi thì cho thịt gà và hành tây vào.', 'Đúng. Khớp với bước 2 và bước 3 của cách làm.']
      ],
      answer: 4,
      evidence: ['s3', 's4', 's5'],
      summary: 'Công thức nấu Oyakodon cho 2 người. Sơ chế: cắt thịt, thái hành, đánh trứng sẵn. Cho nước dashi và gia vị vào nồi đun; khi sôi cho hành và thịt vào ninh; thịt chín thì rưới trứng, trứng bắt đầu đông thì tắt bếp, rồi cho lên cơm. Lưu ý: sau khi cho trứng đừng khuấy nhiều và đừng nấu lâu.',
      structure: [
        ['Tiêu đề', 'Tên món'],
        ['材料・調味料', 'Nguyên liệu và gia vị (định lượng)'],
        ['作り方 1–5', 'Các bước theo thứ tự: まず → 〜たら → 〜たら…'],
        ['ここに注意！', 'Điều cần chú ý (〜ないこと)']
      ],
      grammar: [
        ['まず〜。〜たら、〜。', 'Trình tự: trước tiên… → khi/sau khi… thì…', 'まず、とり肉を切り… 沸騰したら、… 煮えたら、…'],
        ['〜ておきます', 'Làm sẵn để chuẩn bị cho việc sau.', 'たまごを割って混ぜておきます'],
        ['〜始める', 'Bắt đầu…', '固まり始めたら、火をとめます'],
        ['〜ないこと', 'Lời dặn, quy định: "không được…".', 'あまり混ぜないこと。長く煮ないこと。'],
        ['〜くらい', 'Khoảng chừng, cỡ…', '口に入るくらいの大きさ']
      ],
      tip: 'Với văn chỉ dẫn (công thức, hướng dẫn sử dụng), hãy đánh dấu các từ chỉ trình tự như まず・〜たら・最後に, rồi đối chiếu từng bước với lựa chọn. Lựa chọn sai thường đảo thứ tự hoặc cho nguyên liệu vào sai thời điểm.'
    },

    /* ───────────── 問題18 ───────────── */
    {
      id: '18',
      review: { pages: [64], answerPage: 187, bookAnswer: 1, doubts: [] },
      kind: '意見文',
      kindVi: 'Văn nêu ý kiến',
      style: 'essay',
      before: ['b', '{電車|でんしゃ}の{中|なか}で@keshou([化粧|けしょう])をする{人|ひと}についてどう{思|おも}いますか。', 'Bạn nghĩ gì về những người trang điểm trên tàu điện?'],
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{電車|でんしゃ}に{乗|の}ると、«r1(@keshou([化粧|けしょう])をしている@josei([女性|じょせい]))をときどき@mikakeru({見|み}かける)。', 'Khi đi tàu điện, thỉnh thoảng tôi bắt gặp những phụ nữ đang trang điểm.'],
          ['s2', '@kanojotachi([彼女|かのじょ]たち)は、「{時間|じかん}がないんだし、@tanin([他人|たにん])に@meiwakuwokakeru([迷惑|めいわく]をかけて)いる@wakejanai(わけじゃない)んだから、@betsuni({別|べつ}に)いいでしょ」と{思|おも}っている@rashii(らしい)。', 'Có vẻ họ nghĩ: "Không có thời gian mà, với lại đâu có làm phiền ai, nên cũng chẳng sao chứ".'],
          ['s3', '@tashikani([確|たし]かに){忙|いそが}しい{毎日|まいにち}の{中|なか}、{少|すこ}しでも{時間|じかん}を@setsuyaku([節約|せつやく])したい{気持|きも}ちもわかるが、{私|わたし}は»r1(それ)を{見|み}ると、@fukai([不快|ふかい])な{気持|きも}ちになる。', 'Đúng là tôi cũng hiểu cảm giác muốn tiết kiệm dù chỉ một chút thời gian giữa những ngày bận rộn, nhưng mỗi khi thấy cảnh đó, tôi lại thấy khó chịu.'],
          ['s4', '[化粧|けしょう]は{人|ひと}に{会|あ}うための@junbi([準備|じゅんび])なので、{家|いえ}でするものであり、{電車|でんしゃ}で@bekidewanai(すべきではない)。', 'Trang điểm là sự chuẩn bị để gặp người khác, nên là việc làm ở nhà, không nên làm trên tàu.']
        ] },
        { t: 'p', s: [
          ['s5', '{電車|でんしゃ}で[化粧|けしょう]をする{人|ひと}たちに、これから{会|あ}う{人|ひと}の{前|まえ}でも»r2(そうやって)[化粧|けしょう]をするのかと{聞|き}くと、しないと{言|い}う。', 'Khi hỏi những người trang điểm trên tàu rằng họ có trang điểm như thế trước mặt người sắp gặp không, họ nói là không.'],
          ['s6', '«r3(@ippou([一方|いっぽう])、{自分|じぶん}とは@zenzen([全然|ぜんぜん])@kankei([関係|かんけい])ない@mawari([周|まわ]り)の@joukyaku([乗客|じょうきゃく])には、[化粧|けしょう]する@sugata([姿|すがた])を{見|み}られても{別|べつ}に@kamawanai([構|かま]わない)と{言|い}う)。', 'Mặt khác, họ nói rằng bị những hành khách xung quanh – những người chẳng liên quan gì đến mình – nhìn thấy cảnh trang điểm thì cũng không sao.']
        ] },
        { t: 'p', s: [
          ['s7', '»r3(これ)は、«r4([彼女|かのじょ]たちが[周|まわ]りの{人|ひと}たちを@fuukei([風景|ふうけい])の@ichibu({一部|いちぶ})、@kabe([壁|かべ])や@zaseki([座席|ざせき])などと{同|おな}じだと{考|かんが}えている)ように{私|わたし}には@kanjirareru([感|かん]じられる)。', 'Điều này khiến tôi cảm thấy như thể họ coi những người xung quanh là một phần của phong cảnh, giống như bức tường hay ghế ngồi.'],
          ['s8', '»r4(これ)は@taihen({大変|たいへん})@shitsurei([失礼|しつれい])ではないだろうか。', 'Chẳng phải như vậy là rất thất lễ sao?'],
          ['s9', '{電車|でんしゃ}で[化粧|けしょう]をするということは、»r5(そういう)@inshou([印象|いんしょう])を[周|まわ]りの{人|ひと}に@ataeru([与|あた]えて)いることに@kizuku({気|き}づいて)ほしい。', 'Tôi mong họ nhận ra rằng trang điểm trên tàu là đang để lại ấn tượng như thế cho người xung quanh.']
        ] }
      ],
      notes: [],
      refs: {
        r1: 'それ = cảnh phụ nữ trang điểm trên tàu (câu 1).',
        r2: 'そうやって = trang điểm giống như cách họ làm trên tàu.',
        r3: 'これ (câu 7) = việc họ không trang điểm trước người sắp gặp, nhưng lại không ngại bị hành khách xung quanh nhìn thấy (câu 5–6).',
        r4: 'これ (câu 8) = việc coi người xung quanh như phong cảnh, tường, ghế.',
        r5: 'そういう印象 = ấn tượng rằng người xung quanh không được đối xử như con người, mà như đồ vật, phong cảnh.'
      },
      question: ['q', 'この{文章|ぶんしょう}を{書|か}いた{人|ひと}は{電車|でんしゃ}の{中|なか}で[化粧|けしょう]をすべきではないと{言|い}っているが、その@riyuu({理由|りゆう})は{何|なに}か。', 'Người viết nói không nên trang điểm trên tàu điện. Lý do là gì?'],
      options: [
        ['[周|まわ]りの{人|ひと}が{人|ひと}として{見|み}られていないように[感|かん]じるから。', 'Vì cảm thấy người xung quanh không được nhìn nhận như con người.', 'Đúng. Đoạn 3: họ coi người xung quanh như phong cảnh, tường, ghế, và tác giả cho rằng điều đó rất thất lễ.'],
        ['[化粧|けしょう]をするのは[周|まわ]りの{人|ひと}に[迷惑|めいわく]をかける@koudou({行動|こうどう})だから。', 'Vì trang điểm là hành động gây phiền cho người xung quanh.', 'Sai. Bài không nói việc trang điểm gây phiền cho người khác. Câu "không làm phiền ai" là suy nghĩ của chính những người trang điểm.'],
        ['これから{会|あ}う{人|ひと}@nitaishite(に[対|たい]して){大変|たいへん}[失礼|しつれい]なことだから。', 'Vì đó là việc rất thất lễ đối với người sắp gặp.', 'Sai. Họ KHÔNG trang điểm trước người sắp gặp. Tác giả cho là thất lễ với hành khách xung quanh trên tàu.'],
        ['[化粧|けしょう]する{時間|じかん}を[節約|せつやく]するのは[女性|じょせい]として@hazukashii(はずかしい)ことだから。', 'Vì tiết kiệm thời gian trang điểm là điều đáng xấu hổ đối với phụ nữ.', 'Sai. Bài không nói điều này; tác giả còn nói hiểu được mong muốn tiết kiệm thời gian (câu 3).']
      ],
      answer: 1,
      evidence: ['s7', 's8'],
      summary: 'Tác giả thường thấy phụ nữ trang điểm trên tàu và cảm thấy khó chịu. Họ không trang điểm trước mặt người sắp gặp, nhưng lại không ngại hành khách xung quanh nhìn thấy. Tác giả cho rằng như thế là coi người xung quanh như phong cảnh, tường, ghế, tức là rất thất lễ, và mong họ nhận ra điều đó.',
      structure: [
        ['Đoạn 1', 'Hiện tượng + suy nghĩ của người trang điểm + ý kiến của tác giả (không nên)'],
        ['Đoạn 2', 'Dẫn chứng: trước người sắp gặp thì không, trước hành khách thì không ngại (一方)'],
        ['Đoạn 3', 'LÝ DO CHÍNH: coi người xung quanh như đồ vật → thất lễ; mong họ nhận ra']
      ],
      grammar: [
        ['〜わけじゃない', 'Đâu phải là… (phủ định một suy nghĩ có thể có).', '迷惑をかけているわけじゃない'],
        ['〜らしい', 'Hình như, có vẻ (suy đoán dựa trên thông tin).', 'と思っているらしい'],
        ['確かに〜が、…', 'Đúng là… nhưng… (thừa nhận một phần rồi phản bác).', '確かに…気持ちもわかるが、私は…不快な気持ちになる'],
        ['〜べきではない', 'Không nên…', '電車ですべきではない'],
        ['〜ではないだろうか', 'Chẳng phải là… sao? (nêu ý kiến một cách mềm mỏng).', '大変失礼ではないだろうか'],
        ['〜てほしい', 'Mong (người khác) làm…', '気づいてほしい']
      ],
      tip: 'Với văn nêu ý kiến, ý kiến chính và lý do thường nằm ở cuối bài, sau các câu như 〜ではないだろうか・〜てほしい. Cẩn thận với mẫu 確かに〜が: phần trước が là ý tác giả thừa nhận, phần sau mới là quan điểm thật.'
    },

    /* ───────────── 問題19 ───────────── */
    {
      id: '19',
      review: { pages: [66, 67], answerPage: 187, doubts: [] },
      kind: '説明文',
      kindVi: 'Văn giải thích',
      style: 'essay',
      before: ['b', 'あなたの{国|くに}では@hinankunren([避難訓練|ひなんくんれん])※0をしますか。どんなことをしますか。', 'Ở nước bạn có diễn tập sơ tán không? Diễn tập những gì?'],
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{日本|にほん}では@youchien([幼稚園|ようちえん])や{小学校|しょうがっこう}で«r1(「おかしも」)という@kotoba({言葉|ことば})を@narau({習|なら}います)。', 'Ở Nhật, trẻ em học từ "okashimo" ở trường mẫu giáo và tiểu học.'],
          ['s2', '「おかしも」とはどのような{意味|いみ}でしょう。', '"Okashimo" có nghĩa là gì nhỉ?'],
          ['s3', '「@okashi(お[菓子|かし])も」と{書|か}いて「{肉|にく}や@yasai({野菜|やさい})だけでなく『お[菓子|かし]も』{食|た}べましょう。」という{意味|いみ}でしょうか。', 'Có phải viết là "お菓子も" với nghĩa "không chỉ thịt và rau mà hãy ăn cả bánh kẹo nữa" không?'],
          ['s4', '@jitsuwa([実|じつ]は)、»r1(これ)は@saigai([災害|さいがい])※1や@jiko([事故|じこ])などが{起|お}きたときに、@anzen({安全|あんぜん})に@hinan([避難|ひなん])するための{注意|ちゅうい}を{一|ひと}つにした{言葉|ことば}です。', 'Thật ra, đây là từ gộp các lưu ý để sơ tán an toàn khi xảy ra thảm họa, tai nạn.'],
          ['s5', '「@osu([押|お]さない)、@kakeru([駆|か]けない)※2、@shaberu(しゃべらない)※3、@modoru([戻|もど]らない)」という{四|よっ}つの{言葉|ことば}の{初|はじ}めのひらがなを@narabu([並|なら]べた)ものです。', 'Nó được ghép từ chữ hiragana đầu tiên của bốn cụm: "không xô đẩy, không chạy, không nói chuyện, không quay lại".']
        ] },
        { t: 'p', s: [
          ['s6', '{小学校|しょうがっこう}で{一年|いちねん}に{何度|なんど}も@okonau({行|おこな}われる)«r3([避難訓練|ひなんくんれん])では、@kyoushitsu({教室|きょうしつ})を{出|で}て«r2(@koutei([校庭|こうてい])に@nigeru([逃|に]げる)@renshuu({練習|れんしゅう})をする)のですが、»r2(そのとき){子|こ}どもたちが@subayaku([素早|すばや]く)[避難|ひなん]できるように、{先生|せんせい}は「『おかしも』ですよ。」と{何度|なんど}も@koewokakeru({声|こえ}をかけます)。', 'Trong các buổi diễn tập sơ tán tổ chức nhiều lần mỗi năm ở trường tiểu học, học sinh tập ra khỏi lớp và chạy ra sân trường. Lúc đó, để các em sơ tán nhanh, giáo viên nhắc đi nhắc lại: "Nhớ okashimo nhé!".'],
          ['s7', '{一年|いちねん}に{何度|なんど}も、[避難訓練|ひなんくんれん]の@tabini(たびに)»r1(この{言葉|ことば})を@mimini({耳|みみ}にする)ので、‹{日本|にほん}の{子|こ}どもたちで「おかしも」の{意味|いみ}を{知|し}らない{子|こ}どもはいない@hodo(ほど)です。›', 'Vì mỗi năm nhiều lần, cứ mỗi buổi diễn tập lại được nghe từ này, nên gần như không có đứa trẻ Nhật nào không biết nghĩa của "okashimo".']
        ] },
        { t: 'p', s: [
          ['s8', '{本当|ほんとう}に{何|なに}かがあったときには、»r3(この@kunren([訓練|くんれん]))で「おかしも」を@minitsukeru({身|み}につけた)@okagede(おかげで){子|こ}どもたちは@kowagaru(こわがったり)@awateru(あわてたり)せずに@reisei([冷静|れいせい])に[避難|ひなん]できる@wakedesu(というわけです)。', 'Khi có chuyện thật sự xảy ra, nhờ đã thấm nhuần "okashimo" qua các buổi diễn tập, các em có thể sơ tán bình tĩnh mà không sợ hãi hay hoảng loạn.'],
          ['s9', '「おかしも」は{子|こ}どもたちを{安全|あんぜん}に[避難|ひなん]させるために{考|かんが}えられた@kufuu([工夫|くふう])なのです。', '"Okashimo" là một sáng kiến được nghĩ ra để giúp trẻ em sơ tán an toàn.']
        ] }
      ],
      notes: [
        '（注）[避難訓練|ひなんくんれん]：{安全|あんぜん}な{所|ところ}へ[逃|に]げる{練習|れんしゅう}',
        '（注1）[災害|さいがい]：@jishin([地震|じしん])・@taifuu([台風|たいふう])などの{大|おお}きな@higai([被害|ひがい])が{出|で}る@dekigoto({出来事|できごと})',
        '（注2）[駆|か]ける：{走|はし}る',
        '（注3）しゃべる：{話|はな}す'
      ],
      refs: {
        r1: 'これ / この言葉 = từ "おかしも".',
        r2: 'そのとき = lúc học sinh tập ra khỏi lớp và chạy ra sân trường.',
        r3: 'この訓練 = buổi diễn tập sơ tán (避難訓練) được nói đến ở đoạn 2.'
      },
      questions: [
        {
          label: '問1',
          question: ['q1', '「おかしも」とは{何|なに}か。', '"Okashimo" là gì?'],
          options: [
            ['{肉|にく}や[野菜|やさい]だけでなくお[菓子|かし]も{食|た}べようと@susumeru([勧|すす]める){言葉|ことば}', 'Lời khuyên hãy ăn cả bánh kẹo chứ không chỉ thịt và rau.', 'Sai. Đây là cách hiểu sai mà bài đưa ra rồi phủ định ngay bằng 実は (thật ra) ở câu 4.'],
            ['[避難|ひなん]するときの{注意|ちゅうい}を@mijikaku({短|みじか}くした){言葉|ことば}', 'Từ rút gọn các lưu ý khi sơ tán.', 'Đúng. "Okashimo" gộp 4 lưu ý khi sơ tán bằng chữ cái đầu: 押さない・駆けない・しゃべらない・戻らない (câu 4–5).'],
            ['[避難訓練|ひなんくんれん]のとき、{教室|きょうしつ}を{出|で}て[校庭|こうてい]に[素早|すばや]く[避難|ひなん]すること', 'Việc ra khỏi lớp và nhanh chóng sơ tán ra sân trường trong buổi diễn tập.', 'Sai. Đó là nội dung buổi diễn tập, không phải nghĩa của từ "okashimo".'],
            ['[避難訓練|ひなんくんれん]のとき、{子|こ}どもたちが[冷静|れいせい]に{行動|こうどう}すること', 'Việc trẻ em hành động bình tĩnh khi diễn tập sơ tán.', 'Sai. Bình tĩnh là KẾT QUẢ nhờ thuộc "okashimo" (câu 8), không phải nghĩa của từ.']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['s4', 's5']
        },
        {
          label: '問2',
          question: ['q2', '「‹{日本|にほん}の{子|こ}どもたちで「おかしも」の{意味|いみ}を{知|し}らない{子|こ}どもはいないほどです。›」とあるが、それはなぜか。', 'Bài viết "gần như không có đứa trẻ Nhật nào không biết nghĩa của okashimo". Vì sao vậy?'],
          options: [
            ['{毎日|まいにち}{学校|がっこう}で{先生|せんせい}から@setsumei({説明|せつめい})してもらうから。', 'Vì ngày nào cũng được giáo viên giải thích ở trường.', 'Sai. Không phải mỗi ngày, mà là nhiều lần mỗi năm trong các buổi diễn tập.'],
            ['[避難訓練|ひなんくんれん]をするときにはいつもその{言葉|ことば}を{聞|き}くから。', 'Vì lần nào diễn tập sơ tán cũng được nghe từ đó.', 'Đúng. 「避難訓練のたびにこの言葉を耳にするので」 (câu 7): ので chỉ ra lý do ngay trước câu gạch chân.'],
            ['{大人|おとな}たちが[工夫|くふう]して{考|かんが}えた{言葉|ことば}だから。', 'Vì đó là từ người lớn đã khéo léo nghĩ ra.', 'Sai. "Okashimo" đúng là một sáng kiến (câu 9), nhưng đó không phải lý do khiến trẻ nào cũng biết.'],
            ['お[菓子|かし]に@niteiru([似|に]ている){言葉|ことば}だから。', 'Vì đó là từ giống với "bánh kẹo".', 'Sai. Bài không nói đây là lý do.']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['s7']
        }
      ],
      summary: 'Bài giải thích từ "okashimo" mà trẻ em Nhật học ở trường. Đây không phải "お菓子も" (cả bánh kẹo), mà là từ ghép chữ cái đầu của 4 lưu ý khi sơ tán: không xô đẩy, không chạy, không nói chuyện, không quay lại. Vì được nghe nhiều lần trong các buổi diễn tập mỗi năm, trẻ nào cũng biết, nhờ vậy khi có thảm họa thật các em có thể bình tĩnh sơ tán.',
      structure: [
        ['Đoạn 1', 'Giới thiệu từ "おかしも" → hỏi nghĩa → 実は: giải thích nghĩa thật'],
        ['Đoạn 2', 'Diễn tập nhiều lần mỗi năm → trẻ nào cũng biết (câu gạch chân)'],
        ['Đoạn 3', 'Kết luận: nhờ đó sơ tán bình tĩnh → "おかしも" là một sáng kiến']
      ],
      grammar: [
        ['〜でしょうか。実は、〜', 'Đặt câu hỏi rồi đưa ra câu trả lời thật (cách mở bài hay gặp).', '…という意味でしょうか。実は、これは…言葉です。'],
        ['〜たびに', 'Mỗi lần…', '避難訓練のたびにこの言葉を耳にする'],
        ['〜ほどです', 'Đến mức…', '知らない子どもはいないほどです'],
        ['〜おかげで', 'Nhờ… (kết quả tốt).', '「おかしも」を身につけたおかげで'],
        ['〜たり〜たりせずに', 'Không… cũng không… (mà làm việc khác).', 'こわがったりあわてたりせずに冷静に避難できる'],
        ['〜というわけです', 'Nghĩa là…, chính vì vậy mà… (rút ra kết luận).', '冷静に避難できるというわけです']
      ],
      tip: 'Câu hỏi "なぜか" về một câu gạch chân: lý do thường nằm ngay trước câu đó, sau các từ như ので・から・ため. Với văn giải thích, phần đặt câu hỏi ở đầu bài (〜でしょうか) thường là bẫy, câu trả lời thật nằm sau 実は.'
    }
  ]
};
