/* Đề thi JLPT N3 tháng 7/2024 — Đọc hiểu: 問題4 (短文, câu 23–26) · 問題5 (中文, câu 27–32).
   Cú pháp đánh dấu: xem data/bai-1.js. Đáp án do giáo viên giải (đề không kèm đáp án). */
window.BAI = {
  id: 'de-t7-2024',
  title: 'Đề T7/2024',
  subtitle: 'JLPT N3 tháng 7/2024 · 短文 & 中文',

  vocab: {
    // 4-1
    buchoukaigi: { w: '部長会議', r: 'ぶちょうかいぎ', hv: 'BỘ TRƯỞNG HỘI NGHỊ', vi: 'cuộc họp trưởng phòng' },
    shusseki: { w: '出席', r: 'しゅっせき', hv: 'XUẤT TỊCH', vi: 'tham dự' },
    yoteisha: { w: '予定者', r: 'よていしゃ', hv: 'DỰ ĐỊNH GIẢ', vi: 'người dự kiến (tham gia)' },
    renraku: { w: '連絡', r: 'れんらく', hv: 'LIÊN LẠC', vi: 'liên lạc, thông báo' },
    tenkiyohou: { w: '天気予報', r: 'てんきよほう', hv: 'THIÊN KHÍ DỰ BÁO', vi: 'dự báo thời tiết' },
    taifuu: { w: '台風', r: 'たいふう', hv: 'ĐÀI PHONG', vi: 'bão' },
    yosou: { w: '予想する', r: 'よそうする', hv: 'DỰ TƯỞNG', vi: 'dự đoán' },
    koutsuukikan: { w: '交通機関', r: 'こうつうきかん', hv: 'GIAO THÔNG CƠ QUAN', vi: 'phương tiện giao thông' },
    eikyou: { w: '影響', r: 'えいきょう', hv: 'ẢNH HƯỞNG', vi: 'ảnh hưởng' },
    kanousei: { w: '可能性', r: 'かのうせい', hv: 'KHẢ NĂNG TÍNH', vi: 'khả năng' },
    kakujitsu: { w: '確実', r: 'かくじつ', hv: 'XÁC THỰC', vi: 'chắc chắn' },
    enki: { w: '延期する', r: 'えんきする', hv: 'DIÊN KỲ', vi: 'hoãn lại' },
    saishuuteki: { w: '最終的', r: 'さいしゅうてき', hv: 'TỐI CHUNG ĐÍCH', vi: 'cuối cùng' },
    eigyoubu: { w: '営業部', r: 'えいぎょうぶ', hv: 'DOANH NGHIỆP BỘ', vi: 'phòng kinh doanh' },
    kankeinaku: { w: '〜に関係なく', r: 'にかんけいなく', hv: 'QUAN HỆ', vi: 'bất kể…, không liên quan đến…' },
    // 4-2
    mago: { w: '孫', r: 'まご', hv: 'TÔN', vi: 'cháu (của ông bà)' },
    taikai: { w: '大会', r: 'たいかい', hv: 'ĐẠI HỘI', vi: 'giải đấu, cuộc thi lớn' },
    setsumei: { w: '説明する', r: 'せつめいする', hv: 'THUYẾT MINH', vi: 'giải thích' },
    fushigi: { w: '不思議', r: 'ふしぎ', hv: 'BẤT TƯ NGHỊ', vi: 'kỳ lạ, khó hiểu' },
    ruuru: { w: 'ルール', r: 'ルール', hv: '', vi: 'luật, quy tắc' },
    mamoru: { w: '守る', r: 'まもる', hv: 'THỦ', vi: 'tuân thủ, bảo vệ' },
    katsu: { w: '勝つ', r: 'かつ', hv: 'THẮNG', vi: 'thắng' },
    makeru: { w: '負ける', r: 'まける', hv: 'PHỤ', vi: 'thua' },
    imi: { w: '意味', r: 'いみ', hv: 'Ý VỊ', vi: 'ý nghĩa' },
    ugokasu: { w: '動かす', r: 'うごかす', hv: 'ĐỘNG', vi: 'làm chuyển động, vận động' },
    // 4-3
    keijiban: { w: '掲示板', r: 'けいじばん', hv: 'YẾT THỊ BẢN', vi: 'bảng thông báo' },
    haru: { w: '貼る', r: 'はる', hv: 'THIẾP', vi: 'dán' },
    sankasha: { w: '参加者', r: 'さんかしゃ', hv: 'THAM GIA GIẢ', vi: 'người tham gia' },
    boshuu: { w: '募集', r: 'ぼしゅう', hv: 'MỘ TẬP', vi: 'tuyển, chiêu mộ' },
    ryuugakuseika: { w: '留学生課', r: 'りゅうがくせいか', hv: 'LƯU HỌC SINH KHÓA', vi: 'phòng du học sinh' },
    moushikomu: { w: '申し込む', r: 'もうしこむ', hv: 'THÂN NHẬP', vi: 'đăng ký' },
    nao: { w: 'なお', r: 'なお', hv: '', vi: 'ngoài ra, xin lưu ý thêm' },
    shuugoujikan: { w: '集合時間', r: 'しゅうごうじかん', hv: 'TẬP HỢP THỜI GIAN', vi: 'giờ tập trung' },
    kibousha: { w: '希望者', r: 'きぼうしゃ', hv: 'HY VỌNG GIẢ', vi: 'người có nguyện vọng' },
    gozenchuu: { w: '午前中', r: 'ごぜんちゅう', hv: 'NGỌ TIỀN TRUNG', vi: 'trong buổi sáng' },
    renshuu: { w: '練習', r: 'れんしゅう', hv: 'LUYỆN TẬP', vi: 'luyện tập' },
    // 4-4
    nemurenai: { w: '眠れない', r: 'ねむれない', hv: 'MIÊN', vi: 'không ngủ được' },
    hirune: { w: '昼寝', r: 'ひるね', hv: 'TRÚ TẨM', vi: 'ngủ trưa' },
    shuuchuuryoku: { w: '集中力', r: 'しゅうちゅうりょく', hv: 'TẬP TRUNG LỰC', vi: 'khả năng tập trung' },
    sokode: { w: 'そこで', r: 'そこで', hv: '', vi: 'vì vậy, thế nên (đưa ra giải pháp)' },
    megasameru: { w: '目が覚める', r: 'めがさめる', hv: 'MỤC GIÁC', vi: 'tỉnh giấc' },
    kouka: { w: '効果', r: 'こうか', hv: 'HIỆU QUẢ', vi: 'tác dụng' },
    shizen: { w: '自然に', r: 'しぜんに', hv: 'TỰ NHIÊN', vi: 'một cách tự nhiên' },
    chokuzen: { w: '直前', r: 'ちょくぜん', hv: 'TRỰC TIỀN', vi: 'ngay trước' },
    // 5-1
    sodateru: { w: '育てる', r: 'そだてる', hv: 'DỤC', vi: 'nuôi, trồng' },
    niwa: { w: '庭', r: 'にわ', hv: 'ĐÌNH', vi: 'vườn' },
    akirameru: { w: '諦める', r: 'あきらめる', hv: 'ĐẾ', vi: 'từ bỏ' },
    hourensou: { w: 'ホウレンソウ', r: 'ほうれんそう', hv: '', vi: 'rau chân vịt (cải bó xôi)' },
    shitsunai: { w: '室内', r: 'しつない', hv: 'THẤT NỘI', vi: 'trong phòng' },
    junbi: { w: '準備', r: 'じゅんび', hv: 'CHUẨN BỊ', vi: 'chuẩn bị' },
    kankyou: { w: '環境', r: 'かんきょう', hv: 'HOÀN CẢNH', vi: 'môi trường' },
    me: { w: '芽', r: 'め', hv: 'NHA', vi: 'mầm' },
    ha: { w: '葉', r: 'は', hv: 'DIỆP', vi: 'lá' },
    kareru: { w: '枯れる', r: 'かれる', hv: 'KHÔ', vi: 'khô héo, chết (cây)' },
    taiyou: { w: '太陽', r: 'たいよう', hv: 'THÁI DƯƠNG', vi: 'mặt trời' },
    tariru: { w: '足りる', r: 'たりる', hv: 'TÚC', vi: 'đủ' },
    gakkari: { w: 'がっかりする', r: 'がっかりする', hv: '', vi: 'thất vọng' },
    ataru: { w: '当たる', r: 'あたる', hv: 'ĐƯƠNG', vi: '(ánh sáng) chiếu vào' },
    danbooru: { w: '段ボール箱', r: 'だんボールばこ', hv: 'ĐOẠN TƯƠNG', vi: 'thùng các-tông' },
    kabaa: { w: 'カバー', r: 'カバー', hv: '', vi: 'che phủ' },
    chishiki: { w: '知識', r: 'ちしき', hv: 'TRI THỨC', vi: 'kiến thức' },
    // 5-2
    bunbouguten: { w: '文房具店', r: 'ぶんぼうぐてん', hv: 'VĂN PHÒNG CỤ ĐIẾM', vi: 'cửa hàng văn phòng phẩm' },
    narabu: { w: '並ぶ', r: 'ならぶ', hv: 'TỊNH', vi: 'xếp hàng, bày ra' },
    shin: { w: '芯', r: 'しん', hv: 'TÂM', vi: 'ruột (bút chì, bút chì kim)' },
    futosa: { w: '太さ', r: 'ふとさ', hv: 'THÁI', vi: 'độ to, độ dày' },
    kosa: { w: '濃さ', r: 'こさ', hv: 'NÙNG', vi: 'độ đậm' },
    fukuzatsu: { w: '複雑', r: 'ふくざつ', hv: 'PHỨC TẠP', vi: 'phức tạp' },
    oreru: { w: '折れる', r: 'おれる', hv: 'CHIẾT', vi: 'gãy' },
    charenji: { w: 'チャレンジする', r: 'チャレンジする', hv: '', vi: 'thử thách, thử sức' },
    seikou: { w: '成功する', r: 'せいこうする', hv: 'THÀNH CÔNG', vi: 'thành công' },
    rainichi: { w: '来日する', r: 'らいにちする', hv: 'LAI NHẬT', vi: 'đến Nhật' },
    aiyou: { w: '愛用する', r: 'あいようする', hv: 'ÁI DỤNG', vi: 'dùng quen, ưa dùng' },
    enpitsu: { w: '鉛筆', r: 'えんぴつ', hv: 'DIÊN BÚT', vi: 'bút chì' },
    saki: { w: '先', r: 'さき', hv: 'TIÊN', vi: 'đầu, mũi (bút)' },
    shuushoku: { w: '就職する', r: 'しゅうしょくする', hv: 'TỰU CHỨC', vi: 'đi làm, có việc' },
    senmon: { w: '専門', r: 'せんもん', hv: 'CHUYÊN MÔN', vi: 'chuyên (về)' }
  },

  problems: [
    /* ───────────── 問題4 (1) ───────────── */
    {
      id: '4-1',
      srcNotes: ['Câu 3 trong đề in 「台風が東京を通るこが確実になった」 – thiếu と. Bài đã sửa thành 「通ることが」.'],
      kind: '短文・メール（ビジネス）',
      kindVi: 'Đoạn văn ngắn – email công việc',
      style: 'mail',
      before: null,
      lead: ['l', 'これは、[野村|のむら]さんが@buchoukaigi({部長|ぶちょう}{会議|かいぎ})の@shusseki({出席|しゅっせき})@yoteisha({予定|よてい}{者|しゃ})に{書|か}いたメールである。', 'Đây là email Nomura viết cho những người dự kiến tham dự cuộc họp trưởng phòng.'],
      blocks: [
        { t: 'lines', s: [
          ['s1', '{部長|ぶちょう}{会議|かいぎ}にご{出席|しゅっせき}{予定|よてい}の[皆様|みなさま]', 'Kính gửi quý vị dự kiến tham dự cuộc họp trưởng phòng'],
          ['s2', 'あさって12{日|にち}（{金|きん}）の{部長|ぶちょう}{会議|かいぎ}について、ご@renraku({連絡|れんらく})します。', 'Tôi xin thông báo về cuộc họp trưởng phòng ngày kia, 12 (thứ Sáu).']
        ] },
        { t: 'p', s: [
          ['s3', '@tenkiyohou({天気|てんき}{予報|よほう})では、{明日|あした}の{夜|よる}、@taifuu([台風|たいふう])が{東京|とうきょう}の{近|ちか}くを{通|とお}ることが@yosou([予想|よそう])されています。', 'Theo dự báo thời tiết, đêm mai bão được dự đoán sẽ đi qua gần Tokyo.'],
          ['s4', 'そのため、あさってまで@koutsuukikan({交通|こうつう}[機関|きかん])に@eikyou([影響|えいきょう])が{残|のこ}る@kanousei([可能性|かのうせい])があります。', 'Vì vậy, có khả năng giao thông vẫn bị ảnh hưởng đến ngày kia.'],
          ['s5', '{明日|あした}の{予報|よほう}で[台風|たいふう]が{東京|とうきょう}を{通|とお}ることが@kakujitsu([確実|かくじつ])になった{場合|ばあい}は、{来週|らいしゅう}に{会議|かいぎ}を@enki([延期|えんき])することにします。', 'Nếu theo dự báo ngày mai, bão chắc chắn đi qua Tokyo thì chúng tôi sẽ hoãn cuộc họp sang tuần sau.'],
          ['s6', '@saishuuteki([最終的|さいしゅうてき])なご{連絡|れんらく}は、{明日|あした}11{日|にち}（{木|もく}）の15{時|じ}にメールいたします。', 'Thông báo cuối cùng sẽ được gửi qua email lúc 15 giờ ngày mai, 11 (thứ Năm).'],
          ['s7', '{以上|いじょう}、よろしくお{願|ねが}いします。', 'Trân trọng.']
        ] },
        { t: 'lines', s: [
          ['sg1', '{第一|だいいち}@eigyoubu([営業部|えいぎょうぶ])', 'Phòng kinh doanh số 1'],
          ['sg2', '[野村|のむら]マリア', 'Nomura Maria']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '23',
          question: ['q1', '[野村|のむら]さんがこのメールで{知|し}らせたいことは{何|なに}か。', 'Điều Nomura muốn thông báo trong email này là gì?'],
          options: [
            ['{部長|ぶちょう}{会議|かいぎ}は、{来週|らいしゅう}に[延期|えんき]する。', 'Cuộc họp hoãn sang tuần sau.', 'Sai. Chỉ hoãn NẾU bão chắc chắn đi qua – chưa quyết định.'],
            ['{部長|ぶちょう}{会議|かいぎ}は、{明日|あした}の15{時|じ}から{行|おこな}う。', 'Cuộc họp diễn ra từ 15 giờ ngày mai.', 'Sai. 15 giờ ngày mai là giờ gửi thông báo cuối cùng.'],
            ['{部長|ぶちょう}{会議|かいぎ}は{天気|てんき}@kankeinaku(に[関係|かんけい]なく)、あさって{行|おこな}う。', 'Cuộc họp diễn ra ngày kia bất kể thời tiết.', 'Sai. Có thể hoãn tùy theo bão.'],
            ['{部長|ぶちょう}{会議|かいぎ}を[延期|えんき]するかどうか、{明日|あした}の15{時|じ}に{連絡|れんらく}する。', 'Ngày mai 15 giờ sẽ thông báo có hoãn họp hay không.', 'Đúng. Hoãn hay không còn tùy dự báo (s5), thông báo cuối cùng lúc 15 giờ ngày mai (s6).']
          ],
          answer: 4,
          evidence: ['s5', 's6']
        }
      ],
      summary: 'Email thông báo về cuộc họp trưởng phòng ngày 12 (thứ Sáu): bão có thể đi qua gần Tokyo đêm mai, giao thông có thể bị ảnh hưởng. Nếu chắc chắn bão qua Tokyo thì hoãn sang tuần sau. Thông báo cuối cùng sẽ gửi lúc 15 giờ ngày 11.',
      structure: [
        ['Mở đầu', 'Đối tượng + chủ đề: cuộc họp ngày 12'],
        ['Thân', 'Dự báo bão → điều kiện hoãn (〜場合は)'],
        ['Kết', 'Thời điểm thông báo cuối cùng → đáp án']
      ],
      grammar: [
        ['〜ことが予想されています', 'Được dự đoán là…', '台風が東京の近くを通ることが予想されています'],
        ['〜可能性があります', 'Có khả năng…', '影響が残る可能性があります'],
        ['〜場合は、〜ことにします', 'Trong trường hợp… thì sẽ quyết định…', '確実になった場合は、…延期することにします'],
        ['〜かどうか', 'Có… hay không', '延期するかどうか']
      ],
      tip: 'Email thông báo có điều kiện (〜場合は): việc chưa được quyết định. Câu hỏi "知らせたいこと" thường ứng với câu cuối (最終的なご連絡は…).'
    },

    /* ───────────── 問題4 (2) ───────────── */
    {
      id: '4-2',
      srcNotes: ['Câu 24, lựa chọn 4 trong đề (「子供のころからずっとなりたいと思い続けていた先生になれたから。」) bị in nhầm từ câu 24 của đề T7/2023, không liên quan đến bài này. Bài giữ nguyên như đề để học viên làm giống đề thật; khi gặp lựa chọn lạc đề như vậy cứ loại.'],
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{高校生|こうこうせい}の@mago([孫|まご])が「{来週|らいしゅう}、Eスポーツ@taikai({大会|たいかい})に{出|で}るんだ」と{言|い}った。', 'Đứa cháu học cấp ba nói: "Tuần sau cháu sẽ tham gia giải E-sports".'],
          ['s2', 'コンピューターゲームの{大会|たいかい}だと@setsumei({説明|せつめい})され、{私|わたし}は‹@fushigi([不思議|ふしぎ])な{気|き}がした›。', 'Được giải thích đó là giải đấu game máy tính, tôi thấy khó hiểu.'],
          ['s3', 'なぜ、»r1(それ)がスポーツの{大会|たいかい}なのだろうか。', 'Tại sao cái đó lại là giải đấu thể thao?']
        ] },
        { t: 'p', s: [
          ['s4', '{聞|き}いてみると、{英語|えいご}の「スポーツ」には、@ruuru(ルール)を@mamoru({守|まも})りながら@katsu({勝|か}ったり)@makeru({負|ま}けたり)することを{楽|たの}しむものという@imi({意味|いみ})があるそうだ。', 'Hỏi ra mới biết, "sports" trong tiếng Anh nghe nói có nghĩa là hoạt động vừa tuân thủ luật vừa tận hưởng việc thắng thua.'],
          ['s5', 'それで、{最近|さいきん}ではコンピューターゲームもスポーツと{言|い}うらしい。', 'Vì vậy, gần đây hình như game máy tính cũng được gọi là thể thao.']
        ] },
        { t: 'p', s: [
          ['s6', '{体|からだ}を@ugokasu({動|うご}かす)ことをスポーツだと{思|おも}っていた{私|わたし}は[驚|おどろ]いた。', 'Tôi – người vẫn nghĩ thể thao là vận động cơ thể – đã rất ngạc nhiên.']
        ] }
      ],
      notes: [],
      refs: { r1: 'それ = giải đấu game máy tính (Eスポーツ大会).' },
      questions: [
        {
          label: '24',
          question: ['q1', '‹[不思議|ふしぎ]な{気|き}がした›とあるが、どうしてか。', '"Thấy khó hiểu" – vì sao?'],
          options: [
            ['{高校生|こうこうせい}なのに、[孫|まご]が{有名|ゆうめい}なEスポーツの{大会|たいかい}に{出|で}ると{言|い}っているから。', 'Vì cháu mới học cấp ba mà nói sẽ dự giải E-sports nổi tiếng.', 'Sai. Bài không nói giải nổi tiếng hay tuổi tác là vấn đề.'],
            ['コンピューターゲームにも{大会|たいかい}があると{聞|き}いたから。', 'Vì nghe nói game máy tính cũng có giải đấu.', 'Sai. Điều khó hiểu là "tại sao lại là THỂ THAO", không phải việc có giải đấu.'],
            ['{体|からだ}を{動|うご}かさないのに、コンピューターゲームをスポーツと{言|い}っているから。', 'Vì không vận động cơ thể mà lại gọi game máy tính là thể thao.', 'Đúng. 「なぜ、それがスポーツの大会なのだろうか」 + 「体を動かすことをスポーツだと思っていた」 (s3, s6).'],
            ['{子供|こども}のころからずっとなりたいと{思|おも}い{続|つづ}けていた{先生|せんせい}になれたから。', 'Trở thành giáo viên – điều luôn mong muốn từ nhỏ. (Lựa chọn bị in nhầm từ đề khác.)', 'Sai. Lựa chọn này không liên quan gì đến bài (bị in nhầm từ câu 24 đề T7/2023). Loại ngay.']
          ],
          answer: 3,
          evidence: ['s3', 's6']
        }
      ],
      summary: 'Cháu nói sẽ dự giải E-sports (giải game máy tính), tác giả thấy khó hiểu vì sao game lại là thể thao. Hỏi ra mới biết "sports" trong tiếng Anh nghĩa là tận hưởng thắng thua theo luật, nên game cũng được gọi là thể thao. Tác giả vốn nghĩ thể thao là vận động cơ thể nên rất ngạc nhiên.',
      structure: [
        ['Đoạn 1', 'Chuyện của cháu → cảm giác khó hiểu (gạch chân) + câu hỏi なぜ'],
        ['Đoạn 2', 'Giải thích nghĩa của "sports"'],
        ['Đoạn 3', 'Quan niệm cũ của tác giả → lý do khó hiểu']
      ],
      grammar: [
        ['〜んだ', 'Thể giải thích trong văn nói', 'Eスポーツ大会に出るんだ'],
        ['〜気がする', 'Có cảm giác…', '不思議な気がした'],
        ['〜ながら', 'Vừa… vừa…', 'ルールを守りながら'],
        ['〜らしい', 'Hình như, nghe nói…', 'スポーツと言うらしい']
      ],
      tip: 'Lý do của cảm xúc thường được nói rõ ở cuối bài (〜と思っていた私は驚いた): quan niệm cũ của tác giả trái ngược với thông tin mới.'
    },

    /* ───────────── 問題4 (3) ───────────── */
    {
      id: '4-3',
      kind: '短文・お知らせ',
      kindVi: 'Đoạn văn ngắn – thông báo',
      style: 'notice',
      before: null,
      lead: ['l', '（{大学|だいがく}で）このお{知|し}らせが@keijiban([掲示板|けいじばん])に@haru([貼|は]って)ある。', '(Ở trường đại học) Thông báo này được dán trên bảng tin.'],
      blocks: [
        { t: 'title', s: [['t1', '[留学生|りゅうがくせい]{日本語|にほんご}カラオケ{大会|たいかい}　@sankasha({参加|さんか}{者|しゃ})@boshuu([募集|ぼしゅう])', 'Tuyển người tham gia "Cuộc thi karaoke tiếng Nhật dành cho du học sinh"']] },
        { t: 'p', s: [
          ['s1', '5{月|がつ}29{日|にち}（{土|ど}）の13{時|じ}から、{大|だい}{教室|きょうしつ}（A103）で「[留学生|りゅうがくせい]{日本語|にほんご}カラオケ{大会|たいかい}」を{行|おこな}います。', 'Từ 13 giờ ngày 29/5 (thứ Bảy), "Cuộc thi karaoke tiếng Nhật dành cho du học sinh" sẽ được tổ chức tại phòng học lớn (A103).']
        ] },
        { t: 'p', s: [
          ['s2', '{参加|さんか}したい{人|ひと}は、{歌|うた}いたい{日本語|にほんご}の{歌|うた}を{決|き}めて、5{月|がつ}7{日|か}（{金|きん}）までに@ryuugakuseika([留学生|りゅうがくせい]{課|か})で@moushikomu([申|もう]し[込|こ]んで)ください。', 'Ai muốn tham gia, hãy chọn bài hát tiếng Nhật muốn hát và đăng ký ở phòng du học sinh trước ngày 7/5 (thứ Sáu).']
        ] },
        { t: 'p', s: [
          ['s3', '@nao(なお)、{当日|とうじつ}の@shuugoujikan([集合|しゅうごう]{時間|じかん})は12{時|じ}ですが、@kibousha([希望|きぼう]{者|しゃ})は@gozenchuu({午前中|ごぜんちゅう})に{会場|かいじょう}のA103で@renshuu({練習|れんしゅう})することができます。', 'Ngoài ra, giờ tập trung hôm đó là 12 giờ, nhưng ai có nguyện vọng có thể luyện tập tại hội trường A103 vào buổi sáng.'],
          ['s4', 'その{場合|ばあい}の[集合|しゅうごう]{時間|じかん}は10{時|じ}になります。', 'Trong trường hợp đó, giờ tập trung là 10 giờ.'],
          ['s5', '[希望|きぼう]{者|しゃ}は、{参加|さんか}の[申|もう]し[込|こ]みのときに、{練習|れんしゅう}も[申|もう]し[込|こ]んでください。', 'Ai có nguyện vọng, hãy đăng ký luyện tập cùng lúc đăng ký tham gia.']
        ] },
        { t: 'p', s: [['s6', '{参加|さんか}をお{待|ま}ちしています。', 'Rất mong các bạn tham gia.']] },
        { t: 'right', s: [['sg', '[留学生|りゅうがくせい]{課|か}', 'Phòng du học sinh']] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '25',
          question: ['q1', 'カラオケ{大会|たいかい}に{参加|さんか}したい{人|ひと}で、{当日|とうじつ}、{会場|かいじょう}で{練習|れんしゅう}したい{人|ひと}はどうしなければならないか。', 'Người muốn tham gia cuộc thi và muốn luyện tập ở hội trường vào hôm đó phải làm gì?'],
          options: [
            ['5{月|がつ}7{日|か}までに[留学生|りゅうがくせい]{課|か}で{参加|さんか}と{練習|れんしゅう}の[申|もう]し[込|こ]みをして、29{日|にち}の10{時|じ}に{会場|かいじょう}へ{行|い}く。', 'Đăng ký tham gia + luyện tập trước 7/5, rồi 10 giờ ngày 29 đến hội trường.', 'Đúng. Đăng ký luyện tập cùng lúc đăng ký tham gia (hạn 7/5) (s2, s5); người luyện tập tập trung lúc 10 giờ (s4).'],
            ['5{月|がつ}7{日|か}までに[留学生|りゅうがくせい]{課|か}で{参加|さんか}と{練習|れんしゅう}の[申|もう]し[込|こ]みをして、29{日|にち}の12{時|じ}に{会場|かいじょう}へ{行|い}く。', 'Đăng ký trước 7/5, rồi 12 giờ ngày 29 đến hội trường.', 'Sai. 12 giờ là giờ tập trung của người KHÔNG luyện tập.'],
            ['5{月|がつ}7{日|か}までに[留学生|りゅうがくせい]{課|か}で{参加|さんか}の[申|もう]し[込|こ]みだけして、29{日|にち}の10{時|じ}に{会場|かいじょう}へ{行|い}く。', 'Chỉ đăng ký tham gia trước 7/5, rồi 10 giờ đến hội trường.', 'Sai. Phải đăng ký cả luyện tập.'],
            ['5{月|がつ}29{日|にち}の10{時|じ}までに[留学生|りゅうがくせい]{課|か}で{参加|さんか}と{練習|れんしゅう}の[申|もう]し[込|こ]みをして、12{時|じ}に{会場|かいじょう}へ{行|い}く。', 'Đăng ký trước 10 giờ ngày 29, rồi 12 giờ đến hội trường.', 'Sai. Hạn đăng ký là 7/5.']
          ],
          answer: 1,
          evidence: ['s2', 's4', 's5']
        }
      ],
      summary: 'Thông báo tuyển người tham gia cuộc thi karaoke tiếng Nhật cho du học sinh ngày 29/5 từ 13 giờ, phòng A103. Đăng ký kèm bài hát ở phòng du học sinh trước 7/5. Tập trung 12 giờ; ai muốn luyện tập buổi sáng thì tập trung 10 giờ và đăng ký luyện tập cùng lúc đăng ký tham gia.',
      structure: [
        ['Tiêu đề', 'Tuyển người tham gia'],
        ['Đoạn 1', 'Thời gian, địa điểm'],
        ['Đoạn 2', 'Cách đăng ký, hạn chót 7/5'],
        ['Đoạn 3 (なお)', 'Giờ tập trung + luyện tập buổi sáng (10 giờ)']
      ],
      grammar: [
        ['〜までに', 'Trước (hạn)…', '5月7日（金）までに…申し込んでください'],
        ['なお、', 'Ngoài ra (thông tin bổ sung quan trọng)', 'なお、当日の集合時間は12時ですが…'],
        ['その場合', 'Trong trường hợp đó', 'その場合の集合時間は10時になります'],
        ['〜のときに', 'Vào lúc…', '参加の申し込みのときに、練習も申し込んでください']
      ],
      tip: 'Thông báo có 2 giờ tập trung khác nhau cho 2 nhóm: xác định người trong câu hỏi thuộc nhóm nào (練習したい人 → 10 giờ). Thông tin sau "なお" thường là chỗ ra đề.'
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
          ['s1', 'コーヒーを{飲|の}むと@nemurenai({眠|ねむ}れなく)なるから、{寝|ね}る{前|まえ}には{飲|の}まないという{人|ひと}が{多|おお}いだろう。', 'Chắc nhiều người không uống cà phê trước khi ngủ vì uống vào sẽ khó ngủ.'],
          ['s2', 'しかし{最近|さいきん}、@hirune({昼寝|ひるね})の{前|まえ}にはコーヒーを{飲|の}むといいと{言|い}われるようになってきた。', 'Nhưng gần đây, người ta bắt đầu nói rằng nên uống cà phê trước khi ngủ trưa.']
        ] },
        { t: 'p', s: [
          ['s3', '{昼寝|ひるね}をすると{起|お}きたあとの@shuuchuuryoku([集中力|しゅうちゅうりょく])が{上|あ}がるが、{長|なが}く{寝|ね}るのはよくない。', 'Ngủ trưa giúp tăng khả năng tập trung sau khi dậy, nhưng ngủ lâu thì không tốt.'],
          ['s4', '@sokode(そこで)、{飲|の}むと@megasameru({目|め}が[覚|さ]める)というコーヒーの@kouka([効果|こうか])を{利用|りよう}するのだ。', 'Vì thế, người ta tận dụng tác dụng làm tỉnh ngủ của cà phê.'],
          ['s5', 'この[効果|こうか]は、{飲|の}んでから{約|やく}30{分|ぷん}{後|ご}に{出|で}るので、{昼寝|ひるね}の{前|まえ}に{飲|の}むと、30{分|ぷん}ぐらいで@shizen({自然|しぜん}に){目|め}が[覚|さ]める。', 'Tác dụng này xuất hiện khoảng 30 phút sau khi uống, nên nếu uống trước khi ngủ trưa thì khoảng 30 phút sau sẽ tự nhiên tỉnh dậy.']
        ] },
        { t: 'p', s: [['s6', 'ぜひやってみてほしい。', 'Rất mong bạn hãy thử.']] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '26',
          question: ['q1', 'この{文章|ぶんしょう}を{書|か}いた{人|ひと}が{言|い}いたいことは{何|なに}か。', 'Người viết muốn nói điều gì?'],
          options: [
            ['コーヒーを{飲|の}むと{眠|ねむ}れなくなるから、{昼寝|ひるね}の{前|まえ}には{飲|の}まないほうがいい。', 'Cà phê làm khó ngủ nên không nên uống trước khi ngủ trưa.', 'Sai. Đây là quan niệm thông thường được nêu ra để phản bác (しかし…); bài khuyên NÊN uống trước khi ngủ trưa.'],
            ['[集中力|しゅうちゅうりょく]が{高|たか}くなるから、{昼寝|ひるね}のあとで30{分|ぷん}{以内|いない}にコーヒーを{飲|の}むといい。', 'Nên uống cà phê trong 30 phút sau khi ngủ trưa.', 'Sai. Uống TRƯỚC khi ngủ trưa.'],
            ['{昼寝|ひるね}で{寝|ね}すぎないためには、{昼寝|ひるね}をする30{分|ぷん}{前|まえ}にコーヒーを{飲|の}むといい。', 'Nên uống cà phê 30 phút trước khi ngủ trưa.', 'Sai. Uống 30 phút trước thì vừa nằm xuống đã tỉnh. Phải uống NGAY TRƯỚC khi ngủ để 30 phút sau tỉnh dậy.'],
            ['{昼寝|ひるね}で、30{分|ぷん}ぐらいで{自然|しぜん}に{起|お}きるためには、{昼寝|ひるね}の@chokuzen([直前|ちょくぜん])にコーヒーを{飲|の}むといい。', 'Để tự nhiên dậy sau khoảng 30 phút ngủ trưa, nên uống cà phê ngay trước khi ngủ.', 'Đúng. Tác dụng xuất hiện sau 30 phút → uống trước khi ngủ trưa thì 30 phút sau tự tỉnh (s5).']
          ],
          answer: 4,
          evidence: ['s4', 's5', 's6']
        }
      ],
      summary: 'Nhiều người không uống cà phê trước khi ngủ, nhưng gần đây người ta khuyên uống cà phê trước khi ngủ trưa: ngủ trưa giúp tập trung nhưng không nên ngủ lâu; tác dụng tỉnh ngủ của cà phê xuất hiện sau khoảng 30 phút, nên uống trước khi ngủ trưa sẽ tự tỉnh sau khoảng 30 phút.',
      structure: [
        ['Đoạn 1', 'Quan niệm thường ↔ xu hướng mới (しかし)'],
        ['Đoạn 2', 'Lý do + cơ chế (そこで、〜ので)'],
        ['Đoạn 3', 'Lời khuyên']
      ],
      grammar: [
        ['〜と言われるようになってきた', 'Người ta bắt đầu nói rằng…', '飲むといいと言われるようになってきた'],
        ['そこで', 'Vì vậy (đưa ra cách giải quyết)', 'そこで、…コーヒーの効果を利用するのだ'],
        ['〜てから', 'Sau khi…', '飲んでから約30分後に出る'],
        ['ぜひ〜てほしい', 'Rất mong (bạn) hãy…', 'ぜひやってみてほしい']
      ],
      tip: 'Chú ý mốc thời gian: "飲んでから30分後に効果が出る" → muốn ngủ 30 phút thì uống NGAY TRƯỚC khi ngủ. Lựa chọn "30分前に飲む" là bẫy tính nhầm.'
    },

    /* ───────────── 問題5 (1) ───────────── */
    {
      id: '5-1',
      srcNotes: ['Câu 29 trong đề in 「とありあるが」 (thừa あり). Bài đã sửa thành 「とあるが」.'],
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{私|わたし}は、{前|まえ}から{自分|じぶん}で{野菜|やさい}を@sodateru({育|そだ}てたい)と{思|おも}っていました。', 'Từ lâu tôi đã muốn tự trồng rau.'],
          ['s2', '{私|わたし}のうちには@niwa({庭|にわ})もベランダもないので、‹①@akirameru([諦|あきら]めていた)›のですが、{先月|せんげつ}、{友達|ともだち}から{部屋|へや}の{中|なか}で@hourensou(ホウレンソウ)を{育|そだ}てているという{話|はなし}を{聞|き}きました。', 'Nhà tôi không có vườn cũng không có ban công nên tôi đã từ bỏ, nhưng tháng trước tôi nghe bạn kể đang trồng rau chân vịt trong phòng.'],
          ['s3', '@shitsunai([室内|しつない])でできるなら{私|わたし}もやってみたいと{思|おも}い、@junbi({準備|じゅんび})をしました。', 'Nghĩ rằng nếu trồng trong nhà được thì mình cũng muốn thử, tôi đã chuẩn bị.']
        ] },
        { t: 'p', s: [
          ['s4', '{外|そと}に{似|に}た@kankyou([環境|かんきょう])がいいだろうと{考|かんが}え、{窓|まど}の{近|ちか}くで{育|そだ}て{始|はじ}めたら、4{日|か}で@me([芽|め])が{出|で}{始|はじ}めました。', 'Nghĩ rằng môi trường giống ngoài trời sẽ tốt, tôi trồng gần cửa sổ, 4 ngày sau mầm bắt đầu nhú.'],
          ['s5', '{少|すこ}しずつ{大|おお}きくなるのがうれしかったです。', 'Tôi vui khi thấy cây lớn dần.'],
          ['s6', 'ところが、だんだん@ha({葉|は})が{黄色|きいろ}くなって、{全部|ぜんぶ}@kareru([枯|か]れて)しまったのです。', 'Thế nhưng lá dần chuyển vàng, rồi tất cả đều chết héo.'],
          ['s7', '@taiyou({太陽|たいよう})の{光|ひかり}が@tariru({足|た}りなかった)のかもしれないと{思|おも}いました。', 'Tôi nghĩ có lẽ do thiếu ánh nắng mặt trời.']
        ] },
        { t: 'p', s: [
          ['s8', '‹②@gakkari(がっかりして)›、{友達|ともだち}に{電話|でんわ}をして{聞|き}いてみると、ホウレンソウは{夜|よる}になったら、{光|ひかり}が@ataru({当|あ}たって)はいけないということがわかりました。', 'Thất vọng, tôi gọi điện hỏi bạn thì mới biết rau chân vịt không được để ánh sáng chiếu vào khi trời tối.'],
          ['s9', '{私|わたし}の{場合|ばあい}は、{部屋|へや}の{電気|でんき}の{光|ひかり}がよくなかったようです。', 'Trường hợp của tôi, có vẻ ánh đèn điện trong phòng là nguyên nhân.'],
          ['s10', '{友達|ともだち}は、@danbooru([段|だん]ボール[箱|ばこ])でホウレンソウに@kabaa(カバー)をしているのだそうです。', 'Nghe nói bạn tôi dùng thùng các-tông để che rau chân vịt.'],
          ['s11', '{私|わたし}も{同|おな}じようにやってみたら、‹③{今度|こんど}は{元気|げんき}に{育|そだ}ちました›。', 'Tôi cũng làm y như vậy thì lần này cây lớn rất khỏe.'],
          ['s12', 'サラダにして{食|た}べたら、とてもおいしかったです。', 'Làm salad ăn thì rất ngon.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '27',
          question: ['q1', '‹①[諦|あきら]めていた›とあるが、{何|なに}を[諦|あきら]めていたのか。', '"Đã từ bỏ" – từ bỏ điều gì?'],
          options: [
            ['{自分|じぶん}で{野菜|やさい}を{育|そだ}てること。', 'Tự trồng rau.', 'Đúng. Muốn tự trồng rau (s1) nhưng nhà không có vườn, ban công nên đã từ bỏ (s2).'],
            ['{庭|にわ}やベランダがある{家|いえ}に{住|す}むこと。', 'Sống ở nhà có vườn, ban công.', 'Sai. Không có vườn là lý do, không phải điều từ bỏ.'],
            ['{友達|ともだち}に{野菜|やさい}の{育|そだ}て{方|かた}を{教|おし}えてもらうこと。', 'Nhờ bạn dạy cách trồng rau.', 'Sai. Tác giả chưa từng muốn nhờ bạn dạy rồi bỏ cuộc; chính bạn sau này là người chỉ cách.'],
            ['{部屋|へや}の{中|なか}でホウレンソウを{育|そだ}てること。', 'Trồng rau chân vịt trong phòng.', 'Sai. Đây là việc tác giả làm SAU khi nghe bạn kể.']
          ],
          answer: 1,
          evidence: ['s1', 's2']
        },
        {
          label: '28',
          question: ['q2', '‹②がっかりして›とあるが、どうしてがっかりしたのか。', '"Thất vọng" – vì sao?'],
          options: [
            ['ホウレンソウの[芽|め]が{出|で}なかったから。', 'Vì mầm không nhú.', 'Sai. 4 ngày đã nhú mầm.'],
            ['ホウレンソウが{全部|ぜんぶ}[枯|か]れてしまったから。', 'Vì rau chân vịt chết héo hết.', 'Đúng. 「全部枯れてしまったのです」 (s6) ngay trước "がっかりして".'],
            ['ホウレンソウについての{友達|ともだち}の@chishiki([知識|ちしき])が{間違|まちが}っていたから。', 'Vì kiến thức của bạn về rau chân vịt sai.', 'Sai. Lời khuyên của bạn đúng (lần sau cây lớn khỏe).'],
            ['うまく{育|そだ}ったホウレンソウが{少|すく}なかったから。', 'Vì cây lớn tốt quá ít.', 'Sai. Toàn bộ đã chết.']
          ],
          answer: 2,
          evidence: ['s6', 's8']
        },
        {
          label: '29',
          question: ['q3', '‹③{今度|こんど}は{元気|げんき}に{育|そだ}ちました›とあるが、どうして{元気|げんき}に{育|そだ}ったのか。', '"Lần này cây lớn khỏe" – vì sao?'],
          options: [
            ['{昼|ひる}、ホウレンソウにも{光|ひかり}が{当|あ}たるようにしたから。', 'Vì ban ngày cho ánh sáng chiếu vào.', 'Sai. Cây chết không phải do thiếu sáng ban ngày.'],
            ['{昼|ひる}、ホウレンソウにあまり{光|ひかり}が{当|あ}たらないようにしたから。', 'Vì ban ngày hạn chế ánh sáng.', 'Sai. Vấn đề là ban ĐÊM.'],
            ['{夜|よる}、ホウレンソウに{光|ひかり}が{当|あ}たるようにしたから。', 'Vì ban đêm cho ánh sáng chiếu vào.', 'Sai. Ngược lại – ban đêm KHÔNG được để ánh sáng chiếu vào (夜になったら、光が当たってはいけない).'],
            ['{夜|よる}、ホウレンソウに{光|ひかり}が{当|あ}たらないようにしたから。', 'Vì ban đêm không để ánh sáng chiếu vào.', 'Đúng. Ban đêm không được để ánh sáng chiếu (s8); che bằng thùng các-tông như bạn (s10–s11).']
          ],
          answer: 4,
          evidence: ['s8', 's10', 's11']
        }
      ],
      summary: 'Tác giả muốn trồng rau nhưng nhà không có vườn hay ban công nên đã từ bỏ. Nghe bạn trồng rau chân vịt trong phòng, tác giả thử trồng gần cửa sổ: mầm nhú nhưng rồi lá vàng và chết hết. Hỏi bạn mới biết ban đêm không được để ánh sáng chiếu vào (ánh đèn phòng là nguyên nhân). Che bằng thùng các-tông thì lần này cây lớn khỏe, làm salad rất ngon.',
      structure: [
        ['Đoạn 1', 'Mong muốn – từ bỏ (①) – nghe chuyện của bạn'],
        ['Đoạn 2', 'Lần 1: nhú mầm → chết héo (ところが)'],
        ['Đoạn 3', 'Thất vọng (②) → nguyên nhân → cách khắc phục → thành công (③)']
      ],
      grammar: [
        ['〜のですが', 'Thì…, nhưng (dẫn vào chuyện tiếp)', '諦めていたのですが、先月…'],
        ['〜たら（発見）', 'Khi… thì (phát hiện kết quả)', '窓の近くで育て始めたら、4日で芽が出始めました'],
        ['ところが', 'Thế nhưng (kết quả trái mong đợi)', 'ところが、だんだん葉が黄色くなって'],
        ['〜てはいけない', 'Không được…', '光が当たってはいけない'],
        ['〜ようです', 'Có vẻ như…', '電気の光がよくなかったようです']
      ],
      tip: 'Câu hỏi về câu gạch chân thường có đáp án ngay trước hoặc sau nó. Với câu ③, phải nhớ nguyên nhân thất bại (ánh sáng BAN ĐÊM) để chọn giữa 4 lựa chọn đối xứng 昼/夜 × 当たる/当たらない.'
    },

    /* ───────────── 問題5 (2) ───────────── */
    {
      id: '5-2',
      srcNotes: ['Câu 1 đoạn 1 trong đề in 「0.3mmから 1.mmまで」 – mất một chữ số sau dấu chấm. Bài để 「1.□mm」; con số này không ảnh hưởng đến câu hỏi.', 'Câu 30, lựa chọn 4 đề in 「シャーペンのだけを売る」 (thừa の). Bài đã sửa.'],
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút du học sinh',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{日本|にほん}に[留学|りゅうがく]したばかりのころ、@bunbouguten({文房具|ぶんぼうぐ}{店|てん})に{入|はい}って‹[驚|おどろ]いてしまった›。', 'Hồi mới sang Nhật du học, tôi bước vào một cửa hàng văn phòng phẩm và đã rất ngạc nhiên.'],
          ['s2', '{私|わたし}の{国|くに}では、シャープペンシルはあまり{売|う}られていないが、その{店|みせ}には100{円|えん}の{安|やす}い{物|もの}から5000{円|えん}{以上|いじょう}する{高|たか}い{物|もの}まで、すごい{数|かず}のシャーペンが@narabu({並|なら}んで)いたのだ。', 'Ở nước tôi bút chì kim không được bán nhiều, nhưng cửa hàng đó bày vô số bút chì kim, từ loại rẻ 100 yên đến loại đắt trên 5.000 yên.'],
          ['s3', '@shin([芯|しん])も@futosa({太|ふと}さ)が0.3mmから1.□mmまであって、@kosa([濃|こ]さ)もいろいろな{物|もの}が{売|う}られていた。', 'Ruột bút cũng có độ to từ 0,3 mm đến 1,□ mm, độ đậm cũng đủ loại.']
        ] },
        { t: 'p', s: [
          ['s4', 'イギリスで{生|う}まれたシャーペンだが、{初|はじ}めは1.5mmや1.0mmのしかなかった。', 'Bút chì kim ra đời ở Anh, nhưng ban đầu chỉ có loại 1,5 mm hay 1,0 mm.'],
          ['s5', 'だが、{約|やく}60{年|ねん}{前|まえ}、ある{日本|にほん}の{会社|かいしゃ}が、@fukuzatsu([複雑|ふくざつ])な{漢字|かんじ}でも{美|うつく}しく{書|か}けるよう、{世界|せかい}で{初|はじ}めて0.5mmの@oreru([折|お]れ)にくい[芯|しん]を{作|つく}ることに@charenji(チャレンジ)して、@seikou([成功|せいこう])したのだそうだ。', 'Nhưng khoảng 60 năm trước, một công ty Nhật đã thử thách chế tạo ruột 0,5 mm khó gãy – lần đầu tiên trên thế giới – để có thể viết đẹp cả những chữ Hán phức tạp, và đã thành công.'],
          ['s6', 'それからシャーペンが{日本|にほん}{中|じゅう}で{使|つか}われるようになったらしい。', 'Nghe nói từ đó bút chì kim được dùng khắp Nhật Bản.']
        ] },
        { t: 'p', s: [
          ['s7', '{私|わたし}は、@rainichi({来日|らいにち})してからずっとシャーペンを@aiyou([愛用|あいよう])している。', 'Từ khi đến Nhật, tôi luôn dùng bút chì kim.'],
          ['s8', '@enpitsu([鉛筆|えんぴつ])のように@saki({先|さき})が{丸|まる}くならず、{小|ちい}さい{字|じ}がきれいに{書|か}けるからだ。', 'Vì đầu bút không bị tù như bút chì gỗ, viết chữ nhỏ cũng đẹp.'],
          ['s9', '{今|いま}、{使|つか}っているのは{安|やす}い{物|もの}だが、{来年|らいねん}、@shuushoku([就職|しゅうしょく])したら、{少|すこ}しいい{物|もの}を{買|か}おうと{思|おも}っている。', 'Cây tôi đang dùng là loại rẻ, nhưng sang năm khi đi làm, tôi định mua một cây tốt hơn chút.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '30',
          question: ['q1', '‹[驚|おどろ]いてしまった›とあるが、{文房具|ぶんぼうぐ}{店|てん}のどんなことに[驚|おどろ]いたのか。', '"Đã rất ngạc nhiên" – ngạc nhiên về điều gì ở cửa hàng văn phòng phẩm?'],
          options: [
            ['シャーペンがあまり{売|う}られていなかったこと。', 'Bút chì kim không được bán nhiều.', 'Sai. Đó là tình hình ở NƯỚC tác giả.'],
            ['たくさんの{種類|しゅるい}のシャーペンや[芯|しん]が{売|う}られていたこと。', 'Có bán rất nhiều loại bút chì kim và ruột bút.', 'Đúng. Vô số bút từ 100 yên đến trên 5.000 yên, ruột nhiều độ to, độ đậm (s2–s3).'],
            ['{値段|ねだん}の{高|たか}いシャーペンばかりが{売|う}られていたこと。', 'Toàn bán bút chì kim đắt tiền.', 'Sai. Có cả loại rẻ 100 yên.'],
            ['シャーペンだけを{売|う}る@senmon([専門|せんもん])の{店|みせ}だったこと。', 'Là cửa hàng chuyên bán bút chì kim.', 'Sai. Đó là cửa hàng văn phòng phẩm thông thường.']
          ],
          answer: 2,
          evidence: ['s2', 's3']
        },
        {
          label: '31',
          question: ['q2', 'シャーペンが{日本|にほん}{中|じゅう}で{使|つか}われるようになったのは、いつからか。', 'Bút chì kim được dùng khắp Nhật từ khi nào?'],
          options: [
            ['{日本|にほん}の{会社|かいしゃ}が、{太|ふと}くて[折|お]れにくい[芯|しん]を{作|つく}ってから。', 'Từ khi công ty Nhật làm ra ruột to, khó gãy.', 'Sai. Ruột 0,5 mm là ruột NHỎ hơn loại ban đầu (1,0–1,5 mm).'],
            ['{日本|にほん}の{会社|かいしゃ}が、{細|ほそ}くて[折|お]れにくい[芯|しん]を{作|つく}ってから。', 'Từ khi công ty Nhật làm ra ruột nhỏ, khó gãy.', 'Đúng. Ruột 0,5 mm khó gãy → 「それから日本中で使われるようになった」 (s5–s6).'],
            ['{日本|にほん}の{会社|かいしゃ}が、{日本|にほん}でイギリスのシャーペンを{売|う}るようになってから。', 'Từ khi công ty Nhật bán bút chì kim của Anh ở Nhật.', 'Sai. Bài không nói công ty Nhật bán bút của Anh; công ty Nhật tự làm ruột 0,5 mm.'],
            ['{日本|にほん}の{会社|かいしゃ}が、{世界|せかい}で{初|はじ}めてシャーペンを{作|つく}ってから。', 'Từ khi công ty Nhật làm ra bút chì kim đầu tiên trên thế giới.', 'Sai. Bút chì kim ra đời ở Anh; "đầu tiên trên thế giới" là ruột 0,5 mm.']
          ],
          answer: 2,
          evidence: ['s4', 's5', 's6']
        },
        {
          label: '32',
          question: ['q3', '「{私|わたし}」が{今|いま}、シャーペンを{使|つか}っているのはなぜか。', 'Vì sao bây giờ "tôi" dùng bút chì kim?'],
          options: [
            ['{日本|にほん}{中|じゅう}で{使|つか}われているから。', 'Vì khắp Nhật đều dùng.', 'Sai. Không phải lý do của tác giả.'],
            ['{小|ちい}さい{字|じ}が{書|か}きやすいから。', 'Vì dễ viết chữ nhỏ.', 'Đúng. 「先が丸くならず、小さい字がきれいに書けるからだ」 (s8).'],
            ['[鉛筆|えんぴつ]より{安|やす}く{買|か}えるから。', 'Vì rẻ hơn bút chì gỗ.', 'Sai. Bài không so sánh giá.'],
            ['{高|たか}くていい{物|もの}を{買|か}ったから。', 'Vì đã mua được cây đắt, tốt.', 'Sai. Đang dùng loại rẻ; sang năm mới định mua loại tốt.']
          ],
          answer: 2,
          evidence: ['s7', 's8']
        }
      ],
      summary: 'Du học sinh ngạc nhiên vì cửa hàng văn phòng phẩm Nhật bày vô số bút chì kim (100 yên – trên 5.000 yên) và nhiều loại ruột. Bút chì kim ra đời ở Anh, ban đầu chỉ có ruột 1,5/1,0 mm; khoảng 60 năm trước, một công ty Nhật làm ra ruột 0,5 mm khó gãy để viết đẹp chữ Hán phức tạp, từ đó bút được dùng khắp Nhật. Tác giả dùng bút chì kim vì viết chữ nhỏ đẹp, định khi đi làm sẽ mua cây tốt hơn.',
      structure: [
        ['Đoạn 1', 'Sự ngạc nhiên ở cửa hàng + chi tiết'],
        ['Đoạn 2', 'Lịch sử bút chì kim (Anh → công ty Nhật, ruột 0,5 mm)'],
        ['Đoạn 3', 'Lý do tác giả dùng + dự định']
      ],
      grammar: [
        ['〜たばかりのころ', 'Hồi vừa mới…', '日本に留学したばかりのころ'],
        ['〜から〜まで', 'Từ… đến…', '100円の安い物から5000円以上する高い物まで'],
        ['〜よう（に）', 'Để có thể…', '美しく書けるよう'],
        ['〜にくい', 'Khó…', '折れにくい芯'],
        ['〜ず', 'Không… (= ないで)', '先が丸くならず']
      ],
      tip: 'Bài có số liệu (1.5mm, 1.0mm → 0.5mm): đổi số thành tính chất (細い / 太い) để khớp với lựa chọn. Câu hỏi "いつから" → tìm "それから".'
    }
  ]
};
