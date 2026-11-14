/* Đề thi JLPT N3 tháng 12/2024 — Đọc hiểu: 問題4 (短文, câu 23–26) · 問題5 (中文, câu 27–32).
   Cú pháp đánh dấu: xem data/bai-1.js. Đáp án do giáo viên giải (đề không kèm đáp án). */
window.BAI = {
  id: 'de-t12-2024',
  title: 'Đề T12/2024',
  subtitle: 'JLPT N3 tháng 12/2024 · 短文 & 中文',

  vocab: {
    // 4-1
    kouhai: { w: '後輩', r: 'こうはい', hv: 'HẬU BỐI', vi: 'đàn em, hậu bối' },
    adobaisu: { w: 'アドバイス', r: 'アドバイス', hv: '', vi: 'lời khuyên' },
    mawari: { w: '周り', r: 'まわり', hv: 'CHU', vi: 'xung quanh' },
    hotondo: { w: 'ほとんど', r: 'ほとんど', hv: '', vi: 'hầu như' },
    tsuukin: { w: '通勤', r: 'つうきん', hv: 'THÔNG CẦN', vi: 'đi làm (đi lại hằng ngày)' },
    izen: { w: '以前', r: 'いぜん', hv: 'DĨ TIỀN', vi: 'trước đây' },
    benri: { w: '便利', r: 'べんり', hv: 'TIỆN LỢI', vi: 'tiện lợi' },
    tanoshimi: { w: '楽しみにする', r: 'たのしみにする', hv: 'LẠC', vi: 'mong chờ' },
    // 4-2
    un: { w: '運', r: 'うん', hv: 'VẬN', vi: 'vận may' },
    kizuku: { w: '気づく', r: 'きづく', hv: 'KHÍ', vi: 'nhận ra' },
    senjitsu: { w: '先日', r: 'せんじつ', hv: 'TIÊN NHẬT', vi: 'hôm trước' },
    jiko: { w: '事故', r: 'じこ', hv: 'SỰ CỐ', vi: 'tai nạn, sự cố' },
    iya: { w: '嫌', r: 'いや', hv: 'HIỀM', vi: 'ghét, khó chịu' },
    sanpo: { w: '散歩する', r: 'さんぽする', hv: 'TẢN BỘ', vi: 'đi dạo' },
    kanjiru: { w: '感じる', r: 'かんじる', hv: 'CẢM', vi: 'cảm thấy' },
    keiken: { w: '経験する', r: 'けいけんする', hv: 'KINH NGHIỆM', vi: 'trải qua' },
    yorokobu: { w: '喜ぶ', r: 'よろこぶ', hv: 'HỈ', vi: 'vui mừng' },
    // 4-3
    seki: { w: '席', r: 'せき', hv: 'TỊCH', vi: 'chỗ ngồi' },
    kachou: { w: '課長', r: 'かちょう', hv: 'KHÓA TRƯỞNG', vi: 'trưởng phòng (nhóm)' },
    netsu: { w: '熱を出す', r: 'ねつをだす', hv: 'NHIỆT', vi: 'bị sốt' },
    soutai: { w: '早退する', r: 'そうたいする', hv: 'TẢO THOÁI', vi: 'về sớm' },
    shinkou: { w: '進行', r: 'しんこう', hv: 'TIẾN HÀNH', vi: 'tiến trình, cách điều hành' },
    yakusoku: { w: '約束', r: 'やくそく', hv: 'ƯỚC THÚC', vi: 'hẹn, lời hứa' },
    hanashiai: { w: '話し合い', r: 'はなしあい', hv: 'THOẠI HỢP', vi: 'cuộc trao đổi' },
    kaigishitsu: { w: '会議室', r: 'かいぎしつ', hv: 'HỘI NGHỊ THẤT', vi: 'phòng họp' },
    shiryou: { w: '資料', r: 'しりょう', hv: 'TƯ LIỆU', vi: 'tài liệu' },
    insatsu: { w: '印刷する', r: 'いんさつする', hv: 'ẤN LOÁT', vi: 'in' },
    // 4-4
    famiresu: { w: 'ファミリーレストラン', r: 'ファミリーレストラン', hv: '', vi: 'nhà hàng gia đình' },
    kabe: { w: '壁', r: 'かべ', hv: 'BÍCH', vi: 'bức tường' },
    atatakasa: { w: '暖かさ', r: 'あたたかさ', hv: 'NOÃN', vi: 'sự ấm áp' },
    tsumari: { w: 'つまり', r: 'つまり', hv: '', vi: 'tức là' },
    danshoku: { w: '暖色', r: 'だんしょく', hv: 'NOÃN SẮC', vi: 'màu ấm' },
    shokuyoku: { w: '食欲', r: 'しょくよく', hv: 'THỰC DỤC', vi: 'cảm giác thèm ăn' },
    kakomu: { w: '囲む', r: 'かこむ', hv: 'VI', vi: 'bao quanh' },
    jissai: { w: '実際', r: 'じっさい', hv: 'THỰC TẾ', vi: 'thực tế' },
    keiei: { w: '経営', r: 'けいえい', hv: 'KINH DOANH', vi: 'kinh doanh, điều hành' },
    kufuu: { w: '工夫', r: 'くふう', hv: 'CÔNG PHU', vi: 'sự sáng tạo, mẹo' },
    danbou: { w: '暖房', r: 'だんぼう', hv: 'NOÃN PHÒNG', vi: 'máy sưởi' },
    inshou: { w: '印象', r: 'いんしょう', hv: 'ẤN TƯỢNG', vi: 'ấn tượng' },
    // 5-1
    kona: { w: '粉', r: 'こな', hv: 'PHẤN', vi: 'bột' },
    koushinryou: { w: '香辛料', r: 'こうしんりょう', hv: 'HƯƠNG TÂN LIỆU', vi: 'gia vị' },
    fudan: { w: '普段', r: 'ふだん', hv: 'PHỔ ĐOẠN', vi: 'thường ngày' },
    yakunitatsu: { w: '役に立つ', r: 'やくにたつ', hv: 'DỊCH LẬP', vi: 'có ích' },
    nimotsu: { w: '荷物', r: 'にもつ', hv: 'HÀ VẬT', vi: 'hành lý' },
    kouryuukai: { w: '交流会', r: 'こうりゅうかい', hv: 'GIAO LƯU HỘI', vi: 'buổi giao lưu' },
    tokui: { w: '得意', r: 'とくい', hv: 'ĐẮC Ý', vi: 'sở trường, giỏi' },
    zairyou: { w: '材料', r: 'ざいりょう', hv: 'TÀI LIỆU', vi: 'nguyên liệu' },
    chaahan: { w: 'チャーハン', r: 'チャーハン', hv: '', vi: 'cơm rang' },
    futsuu: { w: '普通', r: 'ふつう', hv: 'PHỔ THÔNG', vi: 'bình thường' },
    kaori: { w: '香り', r: 'かおり', hv: 'HƯƠNG', vi: 'mùi thơm' },
    tokubetsu: { w: '特別', r: 'とくべつ', hv: 'ĐẶC BIỆT', vi: 'đặc biệt' },
    anshin: { w: '安心する', r: 'あんしんする', hv: 'AN TÂM', vi: 'yên tâm' },
    yosou: { w: '予想する', r: 'よそうする', hv: 'DỰ TƯỞNG', vi: 'dự đoán' },
    // 5-2
    puragomi: { w: 'プラスチックごみ', r: 'プラスチックごみ', hv: '', vi: 'rác nhựa' },
    choukikan: { w: '長期間', r: 'ちょうきかん', hv: 'TRƯỜNG KỲ GIAN', vi: 'thời gian dài' },
    kankyou: { w: '環境', r: 'かんきょう', hv: 'HOÀN CẢNH', vi: 'môi trường' },
    juudai: { w: '重大', r: 'じゅうだい', hv: 'TRỌNG ĐẠI', vi: 'nghiêm trọng' },
    eikyou: { w: '影響', r: 'えいきょう', hv: 'ẢNH HƯỞNG', vi: 'ảnh hưởng' },
    kanshin: { w: '関心', r: 'かんしん', hv: 'QUAN TÂM', vi: 'sự quan tâm' },
    kigyou: { w: '企業', r: 'きぎょう', hv: 'XÍ NGHIỆP', vi: 'doanh nghiệp' },
    shouhisha: { w: '消費者', r: 'しょうひしゃ', hv: 'TIÊU PHÍ GIẢ', vi: 'người tiêu dùng' },
    kaigai: { w: '海外', r: 'かいがい', hv: 'HẢI NGOẠI', vi: 'nước ngoài' },
    kutsu: { w: '靴', r: 'くつ', hv: 'NGOA', vi: 'giày' },
    katsudou: { w: '活動', r: 'かつどう', hv: 'HOẠT ĐỘNG', vi: 'hoạt động' },
    ryoushi: { w: '漁師', r: 'りょうし', hv: 'NGƯ SƯ', vi: 'ngư dân' },
    minato: { w: '港', r: 'みなと', hv: 'CẢNG', vi: 'bến cảng' },
    kaishuu: { w: '回収する', r: 'かいしゅうする', hv: 'HỒI THU', vi: 'thu gom' },
    bunbetsu: { w: '分別する', r: 'ぶんべつする', hv: 'PHÂN BIỆT', vi: 'phân loại' },
    sen_i: { w: '繊維', r: 'せんい', hv: 'TIÊM DUY', vi: 'sợi' },
    risaikuru: { w: 'リサイクル', r: 'リサイクル', hv: '', vi: 'tái chế' },
    jitsuha: { w: '実は', r: 'じつは', hv: 'THỰC', vi: 'thật ra' },
    modosu: { w: '戻す', r: 'もどす', hv: 'LỆ', vi: 'trả lại' },
    ishiki: { w: '意識', r: 'いしき', hv: 'Ý THỨC', vi: 'ý thức' },
    henka: { w: '変化する', r: 'へんかする', hv: 'BIẾN HÓA', vi: 'thay đổi' },
    ukeireru: { w: '受け入れる', r: 'うけいれる', hv: 'THỤ NHẬP', vi: 'chấp nhận, đón nhận' },
    genryou: { w: '原料', r: 'げんりょう', hv: 'NGUYÊN LIỆU', vi: 'nguyên liệu (thô)' },
    kyouryoku: { w: '協力', r: 'きょうりょく', hv: 'HIỆP LỰC', vi: 'hợp tác' },
    seihin: { w: '製品', r: 'せいひん', hv: 'CHẾ PHẨM', vi: 'sản phẩm' }
  },

  problems: [
    /* ───────────── 問題4 (1) ───────────── */
    {
      id: '4-1',
      kind: '短文・メール',
      kindVi: 'Đoạn văn ngắn – email cho đàn em',
      style: 'mail',
      before: null,
      lead: ['l', 'これは、[今川|いまがわ]さんが@kouhai([後輩|こうはい])のミゲルさんに{書|か}いたメールである。', 'Đây là email Imagawa viết cho đàn em là Miguel.'],
      blocks: [
        { t: 'lines', s: [['s0', 'ミゲルさん', 'Gửi Miguel']] },
        { t: 'lines', cls: 'gap', s: [
          ['s1', 'メールをありがとう。', 'Cảm ơn email của bạn.'],
          ['s2', '{同|おな}じ{会社|かいしゃ}で{働|はたら}くことになって、うれしいです。', 'Tôi rất vui vì chúng ta sẽ làm cùng công ty.']
        ] },
        { t: 'p', s: [
          ['s3', '{住|す}む{所|ところ}について@adobaisu(アドバイス)をくださいと{書|か}いてあったので、お{答|こた}えします。', 'Bạn có viết nhờ cho lời khuyên về chỗ ở, nên tôi xin trả lời.'],
          ['s4', '{会社|かいしゃ}まで{歩|ある}いて{行|い}きたいと{書|か}いてありましたが、{会社|かいしゃ}の@mawari({周|まわ}り)はオフィスばかりで、アパートは@hotondo(ほとんど)ありません。', 'Bạn viết là muốn đi bộ đến công ty, nhưng xung quanh công ty toàn là văn phòng, hầu như không có căn hộ.'],
          ['s5', '{電車|でんしゃ}@tsuukin([通勤|つうきん])になりますが、{私|わたし}が@izen({以前|いぜん}){住|す}んでいた[緑野|みどりの]という{町|まち}はいいですよ。', 'Sẽ phải đi làm bằng tàu, nhưng thị trấn Midorino nơi tôi từng sống rất được đấy.'],
          ['s6', '[緑野|みどりの]{駅|えき}から{会社|かいしゃ}のある[北園|きたぞの]{駅|えき}まで{電車|でんしゃ}で15{分|ふん}だし、いろいろなお{店|みせ}があって@benri({便利|べんり})です。', 'Từ ga Midorino đến ga Kitazono – nơi có công ty – đi tàu mất 15 phút, lại có nhiều cửa hàng, rất tiện.']
        ] },
        { t: 'lines', s: [
          ['s7', 'いい{所|ところ}が{見|み}つかるといいですね。{会|あ}えるのを@tanoshimi({楽|たの}しみにして)います。', 'Mong bạn tìm được chỗ tốt. Tôi mong được gặp bạn.'],
          ['sg', '[今川|いまがわ]', 'Imagawa']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '23',
          question: ['q1', '[今川|いまがわ]さんは、ミゲルさんのすむ{所|ところ}について、どんなアドバイスをしているか。', 'Imagawa cho Miguel lời khuyên gì về chỗ ở?'],
          options: [
            ['{生活|せいかつ}に{便利|べんり}なところより、[通勤|つうきん]のしやすいところにしたらどうか。', 'Nên chọn chỗ dễ đi làm hơn là chỗ tiện sinh hoạt.', 'Sai. Midorino vừa đi làm nhanh vừa tiện sinh hoạt; không có so sánh này.'],
            ['{会社|かいしゃ}に{歩|ある}いて{行|い}きたいなら、[緑野|みどりの]にしたらどうか。', 'Nếu muốn đi bộ đến công ty thì chọn Midorino.', 'Sai. Ở Midorino phải đi tàu (電車通勤になります).'],
            ['[北園|きたぞの]{駅|えき}まで{電車|でんしゃ}で15{分|ふん}で{行|い}けるし、{店|みせ}も{多|おお}いので、[緑野|みどりの]にしたらどうか。', 'Đến ga Kitazono đi tàu 15 phút, nhiều cửa hàng, nên chọn Midorino.', 'Đúng. 「緑野駅から…北園駅まで電車で15分だし、いろいろなお店があって便利です」 (s6).'],
            ['いろいろな{店|みせ}があって{便利|べんり}なので、[北園|きたぞの]{駅|えき}の{近|ちか}くにしたらどうか。', 'Nhiều cửa hàng tiện lợi nên chọn gần ga Kitazono.', 'Sai. Gần công ty (ga Kitazono) hầu như không có căn hộ.']
          ],
          answer: 3,
          evidence: ['s5', 's6']
        }
      ],
      summary: 'Imagawa trả lời đàn em Miguel về chỗ ở: quanh công ty toàn văn phòng, gần như không có căn hộ nên không đi bộ được; khuyên chọn thị trấn Midorino – đi tàu 15 phút tới ga Kitazono (gần công ty), có nhiều cửa hàng tiện lợi.',
      structure: [
        ['Mở đầu', 'Cảm ơn, vui vì làm cùng công ty'],
        ['Thân', 'Nguyện vọng của Miguel (đi bộ) → thực tế → đề xuất Midorino + lý do'],
        ['Kết', 'Lời chúc']
      ],
      grammar: [
        ['〜ことになって', 'Vì (được quyết định) sẽ…', '同じ会社で働くことになって'],
        ['〜と書いてありました', 'Có viết rằng…', '歩いて行きたいと書いてありましたが'],
        ['〜ばかり', 'Toàn là…', 'オフィスばかりで'],
        ['〜し、〜', 'Vừa… lại… (liệt kê lý do)', '電車で15分だし、いろいろなお店があって'],
        ['〜といいですね', 'Mong là…', 'いい所が見つかるといいですね']
      ],
      tip: 'Email khuyên nhủ: người viết thường phủ định mong muốn ban đầu của người nhận (歩いて行きたい → アパートはほとんどない) rồi mới đưa ra đề xuất. Đáp án là đề xuất + lý do.'
    },

    /* ───────────── 問題4 (2) ───────────── */
    {
      id: '4-2',
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút về bạn bè',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{友達|ともだち}のマキは、いいことがあったという{話|はなし}をよくする。', 'Bạn tôi là Maki hay kể chuyện có điều tốt xảy ra.'],
          ['s2', 'だから{私|わたし}は、マキは@un({運|うん})がいいのだと{思|おも}っていた。', 'Vì thế tôi cứ nghĩ Maki là người may mắn.'],
          ['s3', 'しかし、{最近|さいきん}、そうではないと@kizuku({気|き}づいた)。', 'Nhưng gần đây tôi nhận ra không phải vậy.']
        ] },
        { t: 'p', s: [
          ['s4', '@senjitsu({先日|せんじつ}){二人|ふたり}で{出|で}かけたとき、@jiko({事故|じこ})で{電車|でんしゃ}が{止|と}まっていて、{何|なん}キロも{歩|ある}いて{帰|かえ}ることになった。', 'Hôm trước hai đứa đi chơi, tàu dừng vì sự cố nên phải đi bộ về mấy cây số.'],
          ['s5', '@iya([嫌|いや])だなと{思|おも}っている{私|わたし}に、マキは「{知|し}らない{町|まち}を@sanpo({散歩|さんぽ})できるね。」とうれしそうに{言|い}った。', 'Tôi đang thấy chán thì Maki vui vẻ nói: "Được đi dạo ở thị trấn lạ nhỉ."'],
          ['s6', 'こんなことでも、マキは{楽|たの}しめてしまうのだ。', 'Ngay cả chuyện như thế, Maki cũng tận hưởng được.'],
          ['s7', '{今|いま}まで{私|わたし}が{聞|き}いた{話|はなし}も、マキだから「いいこと」だと@kanjiru({感|かん}じた)のだろうと{思|おも}う。', 'Tôi nghĩ những chuyện tôi từng nghe trước giờ, có lẽ cũng vì là Maki nên mới cảm thấy đó là "chuyện tốt".']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '24',
          question: ['q1', '{最近|さいきん}、「{私|わたし}」はマキのことをどのような{人|ひと}だと{思|おも}うようになったか。', 'Gần đây "tôi" nghĩ Maki là người như thế nào?'],
          options: [
            ['「いいこと」ばかりが{起|お}きる、{運|うん}がいい{人|ひと}', 'Người may mắn, toàn gặp chuyện tốt.', 'Sai. Đây là suy nghĩ CŨ, đã bị phủ định (そうではないと気づいた).'],
            ['「{私|わたし}」と{一緒|いっしょ}に@keiken([経験|けいけん])したことは、{何|なん}でも「いいこと」だと{思|おも}える{人|ひと}', 'Người thấy mọi việc trải qua cùng "tôi" đều là chuyện tốt.', 'Sai. Không giới hạn ở việc làm cùng "tôi".'],
            ['ほかの{人|ひと}に{起|お}こった「いいこと」を{一緒|いっしょ}に@yorokobu([喜|よろこ]んで)あげられる{人|ひと}', 'Người biết vui cùng chuyện tốt của người khác.', 'Sai. Ví dụ trong bài là chuyện chính Maki gặp (phải đi bộ về), không phải chuyện vui của người khác.'],
            ['ほかの{人|ひと}が「いいこと」だと{思|おも}わないことも「いいこと」だと{思|おも}える{人|ひと}', 'Người thấy cả những điều người khác không cho là tốt cũng là chuyện tốt.', 'Đúng. "Tôi" thấy đi bộ về là chán, Maki lại thấy vui (s5–s7).']
          ],
          answer: 4,
          evidence: ['s5', 's6', 's7']
        }
      ],
      summary: 'Tác giả từng nghĩ Maki may mắn vì hay kể chuyện tốt. Nhưng khi tàu dừng phải đi bộ về, tác giả thấy chán còn Maki lại vui vì "được dạo thị trấn lạ". Tác giả nhận ra Maki là người biết biến cả chuyện người khác thấy không vui thành "chuyện tốt".',
      structure: [
        ['Đoạn 1', 'Suy nghĩ cũ (運がいい) → しかし nhận ra không phải'],
        ['Đoạn 2', 'Ví dụ cụ thể → nhận định mới']
      ],
      grammar: [
        ['〜という話', 'Câu chuyện rằng…', 'いいことがあったという話'],
        ['〜ことになった', 'Thành ra phải…', '歩いて帰ることになった'],
        ['〜そうに', 'Với vẻ…', 'うれしそうに言った'],
        ['〜てしまう', '(Làm) được luôn, hoàn toàn', 'マキは楽しめてしまうのだ']
      ],
      tip: 'Mẫu "〜と思っていた。しかし、そうではないと気づいた" → suy nghĩ trước しかし là đáp án SAI. Đáp án nằm ở phần ví dụ và kết luận phía sau.'
    },

    /* ───────────── 問題4 (3) ───────────── */
    {
      id: '4-3',
      kind: '短文・メモ',
      kindVi: 'Đoạn văn ngắn – ghi chú ở công ty',
      style: 'memo',
      before: null,
      lead: ['l', '（{会社|かいしゃ}で）ミンさんが@seki({席|せき})に{戻|もど}ると、{机|つくえ}の{上|うえ}に、[原口|はらぐち]@kachou({課長|かちょう})からのメモが{置|お}いてあった。', '(Ở công ty) Khi Minh quay về chỗ ngồi, trên bàn có mẩu ghi chú của trưởng phòng Haraguchi.'],
      blocks: [
        { t: 'lines', s: [['s0', 'ミンさん', 'Gửi Minh']] },
        { t: 'p', s: [
          ['s1', '{子|こ}どもが@netsu({熱|ねつ}を{出|だ}した)ので、@soutai([早退|そうたい])します。', 'Con tôi bị sốt nên tôi về sớm.'],
          ['s2', '{午後|ごご}、{明日|あした}の{会議|かいぎ}の@shinkou([進行|しんこう])について[確認|かくにん]する@yakusoku({約束|やくそく})だったのに、すみません。', 'Chiều nay đã hẹn kiểm tra lại cách điều hành cuộc họp ngày mai, vậy mà xin lỗi nhé.'],
          ['s3', '{午後|ごご}の@hanashiai({話|はな}し{合|あ}い)のために{予約|よやく}していた{小|しょう}@kaigishitsu({会議室|かいぎしつ})はキャンセルしてくれますか。', 'Bạn hủy giúp phòng họp nhỏ đã đặt cho buổi trao đổi chiều nay được không?'],
          ['s4', '{席|せき}に{戻|もど}ったら、すぐお{願|ねが}いします。', 'Về chỗ là làm ngay giúp tôi nhé.'],
          ['s5', '{会議|かいぎ}の[進行|しんこう]については、{明日|あした}の{朝|あさ}、{最初|さいしょ}に[確認|かくにん]して、そのあとに{会議室|かいぎしつ}の{準備|じゅんび}をしましょう。', 'Về cách điều hành cuộc họp, sáng mai chúng ta kiểm tra đầu tiên, sau đó chuẩn bị phòng họp.']
        ] },
        { t: 'p', s: [
          ['s6', 'それから、ミンさんの{作|つく}った@shiryou([資料|しりょう])ですが、{問題|もんだい}ないので、{今日中|きょうじゅう}に8{人|にん}{分|ぶん}@insatsu([印刷|いんさつ])しておいてください。', 'Ngoài ra, tài liệu bạn làm không có vấn đề gì, nên trong hôm nay hãy in sẵn 8 bản.'],
          ['s7', 'よろしくお{願|ねが}いします。', 'Nhờ bạn nhé.']
        ] },
        { t: 'right', s: [['sg1', '9{月|がつ}8{日|か}　12:10', '8/9, 12:10'], ['sg2', '[原口|はらぐち]', 'Haraguchi']] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '25',
          question: ['q1', 'このメモを{読|よ}んで、ミンさんはまず{何|なに}をしなければならないか。', 'Đọc ghi chú xong, Minh phải làm gì TRƯỚC TIÊN?'],
          options: [
            ['{会議|かいぎ}の[進行|しんこう]について[原口|はらぐち]{課長|かちょう}と[確認|かくにん]する。', 'Kiểm tra cách điều hành cuộc họp với trưởng phòng.', 'Sai. Việc này để sáng mai.'],
            ['{小|しょう}{会議室|かいぎしつ}をキャンセルする。', 'Hủy phòng họp nhỏ.', 'Đúng. 「席に戻ったら、すぐお願いします」 (s3–s4).'],
            ['{会議室|かいぎしつ}の{準備|じゅんび}をする。', 'Chuẩn bị phòng họp.', 'Sai. Làm vào sáng mai, sau khi kiểm tra.'],
            ['{会議|かいぎ}の[資料|しりょう]を8{人|にん}{分|ぶん}[印刷|いんさつ]する。', 'In tài liệu 8 bản.', 'Sai. Làm trong hôm nay, nhưng không phải "ngay lập tức".']
          ],
          answer: 2,
          evidence: ['s3', 's4']
        }
      ],
      summary: 'Trưởng phòng Haraguchi về sớm vì con sốt. Nhờ Minh: hủy ngay phòng họp nhỏ đã đặt cho chiều nay; sáng mai kiểm tra cách điều hành cuộc họp rồi chuẩn bị phòng họp; in sẵn 8 bản tài liệu trong hôm nay.',
      structure: [
        ['Đoạn 1', 'Lý do về sớm · việc cần làm NGAY (hủy phòng) · lịch sáng mai'],
        ['Đoạn 2', 'Việc trong hôm nay (in tài liệu)']
      ],
      grammar: [
        ['〜のに、すみません', 'Đã… vậy mà, xin lỗi', '確認する約束だったのに、すみません'],
        ['〜てくれますか', 'Làm giúp… được không?', 'キャンセルしてくれますか'],
        ['〜たら、すぐ', 'Hễ… thì ngay', '席に戻ったら、すぐお願いします'],
        ['〜ておいてください', 'Hãy làm sẵn…', '8人分印刷しておいてください']
      ],
      tip: 'Câu hỏi "まず何を" → so sánh MỐC THỜI GIAN của từng việc: すぐ (ngay) > 今日中に (trong hôm nay) > 明日の朝 (sáng mai).'
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
          ['s1', '{日本|にほん}の@famiresu(ファミリーレストラン)は、{店|みせ}の@kabe([壁|かべ])やソファーなどに、{赤|あか}やオレンジ{色|いろ}のような@atatakasa({暖|あたた}かさ)を{感|かん}じさせる{色|いろ}、@tsumari(つまり)、@danshoku([暖色|だんしょく])を{使|つか}うことが{多|おお}い。', 'Các nhà hàng gia đình ở Nhật thường dùng những màu gợi cảm giác ấm áp như đỏ, cam – tức là màu ấm – cho tường, ghế sofa…']
        ] },
        { t: 'p', s: [
          ['s2', '[暖色|だんしょく]には@shokuyoku([食欲|しょくよく])を{感|かん}じさせる{効果|こうか}があるので、[暖色|だんしょく]に@kakomu([囲|かこ]まれて)いると、{料理|りょうり}がおいしそうに{見|み}える。', 'Màu ấm có tác dụng gợi cảm giác thèm ăn, nên khi được bao quanh bởi màu ấm, món ăn trông ngon hơn.'],
          ['s3', 'また、[暖色|だんしょく]は、{時間|じかん}を@jissai([実際|じっさい])より{長|なが}く{感|かん}じさせる{効果|こうか}もある。', 'Ngoài ra, màu ấm còn có tác dụng khiến thời gian cảm giác dài hơn thực tế.'],
          ['s4', '{客|きゃく}は、{店|みせ}にいた{時間|じかん}が{短|みじか}くても、ゆっくりできたように{感|かん}じるのだ。', 'Khách dù ở quán thời gian ngắn cũng cảm thấy đã được thư thả.']
        ] },
        { t: 'p', s: [
          ['s5', '[暖色|だんしょく]を{多|おお}く{使|つか}うのは、ファミリーレストランの@keiei([経営|けいえい])の@kufuu([工夫|くふう])の{一|ひと}つなのである。', 'Dùng nhiều màu ấm là một trong những bí quyết kinh doanh của nhà hàng gia đình.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '26',
          question: ['q1', '{日本|にほん}のファミリーレストランが、[暖色|だんしょく]を{多|おお}く{使|つか}うのはなぜか。', 'Vì sao nhà hàng gia đình Nhật dùng nhiều màu ấm?'],
          options: [
            ['{店|みせ}の@danbou([暖房|だんぼう])にあまりお{金|かね}がかからないようにするため', 'Để tiết kiệm tiền sưởi.', 'Sai. Bài không nói đến sưởi.'],
            ['{客|きゃく}に、{店|みせ}の{料理|りょうり}と{店|みせ}で{過|す}ごす{時間|じかん}にいい@inshou([印象|いんしょう])を{持|も}ってもらうため', 'Để khách có ấn tượng tốt về món ăn và thời gian ở quán.', 'Đúng. Món ăn trông ngon (s2) + cảm thấy được thư thả (s3–s4).'],
            ['{店|みせ}をおしゃれに{見|み}せて、{客|きゃく}に{店|みせ}に{入|はい}りたいと{思|おも}ってもらうため', 'Để quán trông sành điệu, khách muốn vào.', 'Sai. Bài nói màu ấm tác động đến cảm giác thèm ăn và cảm nhận thời gian, không nói đến vẻ sành điệu để thu hút khách vào.'],
            ['{客|きゃく}に{長|なが}く{店|みせ}にいてもらって、{料理|りょうり}をたくさん{注文|ちゅうもん}してもらうため', 'Để khách ngồi lâu và gọi nhiều món.', 'Sai. Khách ở thời gian NGẮN nhưng CẢM THẤY thư thả.']
          ],
          answer: 2,
          evidence: ['s2', 's3', 's4']
        }
      ],
      summary: 'Nhà hàng gia đình ở Nhật hay dùng màu ấm (đỏ, cam) vì màu ấm làm món ăn trông ngon và khiến khách cảm thấy thời gian dài hơn – dù ở ngắn vẫn thấy thư thả. Đó là một bí quyết kinh doanh.',
      structure: [
        ['Đoạn 1', 'Hiện tượng: dùng màu ấm (つまり = định nghĩa)'],
        ['Đoạn 2', 'Hai tác dụng: thèm ăn + cảm nhận thời gian (また)'],
        ['Đoạn 3', 'Kết luận: bí quyết kinh doanh']
      ],
      grammar: [
        ['〜させる', 'Khiến cho… (sai khiến)', '暖かさを感じさせる色'],
        ['つまり', 'Tức là', 'つまり、暖色を使うことが多い'],
        ['〜に囲まれている', 'Được bao quanh bởi…', '暖色に囲まれていると'],
        ['〜ても〜ように感じる', 'Dù… vẫn cảm thấy như…', '短くても、ゆっくりできたように感じる']
      ],
      tip: 'Khi bài nêu HAI tác dụng (〜。また、〜), đáp án đúng thường gộp cả hai. Cẩn thận lựa chọn đảo ý (長く店にいて ↔ thật ra 短くても).'
    },

    /* ───────────── 問題5 (1) ───────────── */
    {
      id: '5-1',
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút du học sinh',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{日本|にほん}に[留学|りゅうがく]に{来|く}る{前|まえ}、{母|はは}が{持|も}っていきなさいと{言|い}って、{私|わたし}の{国|くに}でよく{売|う}っている@kona([粉|こな])の@koushinryou([香辛料|こうしんりょう])をくれました。', 'Trước khi sang Nhật du học, mẹ bảo "mang theo đi" rồi đưa cho tôi gói gia vị dạng bột vẫn bán nhiều ở nước tôi.'],
          ['s2', '{私|わたし}が@fudan([普段|ふだん])あまり{使|つか}わないものでしたが、@yakunitatsu([役|やく]に{立|た}つ)かもしれないと{母|はは}が{言|い}うので、@nimotsu({荷物|にもつ})に{入|い}れました。', 'Đó là thứ thường ngày tôi ít dùng, nhưng mẹ nói biết đâu sẽ có ích nên tôi cho vào hành lý.'],
          ['s3', '{最近|さいきん}、»r1(それ)が{本当|ほんとう}に[役|やく]に{立|た}ちました。', 'Gần đây, thứ đó đã thực sự có ích.']
        ] },
        { t: 'p', s: [
          ['s4', '{先月|せんげつ}、‹①ちょっと[困|こま]ったことがありました›。', 'Tháng trước, tôi gặp một chuyện hơi khó xử.'],
          ['s5', 'ある[留学生|りゅうがくせい]@kouryuukai([交流会|こうりゅうかい])に、{国|くに}の{料理|りょうり}を{何|なに}か{作|つく}ってきてほしいと{言|い}われたのです。', 'Tôi được nhờ nấu một món ăn của nước mình mang đến buổi giao lưu du học sinh.'],
          ['s6', '{私|わたし}にも@tokui([得意|とくい])な{料理|りょうり}はあるのですが、{日本|にほん}では{買|か}えない@zairyou([材料|ざいりょう])を{使|つか}うので{作|つく}れません。', 'Tôi cũng có món sở trường, nhưng nó dùng nguyên liệu không mua được ở Nhật nên không nấu được.'],
          ['s7', 'そのとき、{私|わたし}はあの[香辛料|こうしんりょう]を{思|おも}い{出|だ}したのです。', 'Lúc đó, tôi nhớ ra gói gia vị kia.']
        ] },
        { t: 'p', s: [
          ['s8', '{私|わたし}は、{肉|にく}と[卵|たまご]を{使|つか}って@chaahan(チャーハン)を{作|つく}り、[香辛料|こうしんりょう]をかけてみました。', 'Tôi dùng thịt và trứng làm cơm rang, rồi thử rắc gia vị lên.'],
          ['s9', 'すると、{日本|にほん}によくある@futsuu({普通|ふつう})のチャーハンが、{私|わたし}の{国|くに}らしい{味|あじ}と@kaori([香|かお]り)の‹②@tokubetsu({特別|とくべつ})なチャーハン›になったのです。', 'Thế là món cơm rang bình thường thường thấy ở Nhật đã thành món cơm rang đặc biệt mang hương vị đậm chất nước tôi.'],
          ['s10', '{交流会|こうりゅうかい}でも、みんな、おいしいおいしいと{言|い}って{食|た}べてくれて、@anshin({安心|あんしん})しました。', 'Ở buổi giao lưu, mọi người đều khen ngon và ăn hết, tôi thấy yên tâm.']
        ] },
        { t: 'p', s: [
          ['s11', 'あのとき、{母|はは}はこういうことを@yosou([予想|よそう])していたのでしょうか。', 'Không biết lúc đó mẹ đã đoán trước được chuyện như thế này chưa nhỉ.'],
          ['s12', '{明日|あした}{電話|でんわ}するので、‹③{母|はは}に{聞|き}いてみようと{思|おも}います›。', 'Ngày mai tôi sẽ gọi điện, nên định hỏi mẹ thử.']
        ] }
      ],
      notes: [],
      refs: { r1: 'それ = gói gia vị dạng bột mà mẹ đưa (câu 1–2).' },
      questions: [
        {
          label: '27',
          question: ['q1', '‹①ちょっと[困|こま]ったことがありました›とあるが、「{私|わたし}」が[困|こま]ったのはなぜか。', '"Gặp chuyện hơi khó xử" – vì sao "tôi" khó xử?'],
          options: [
            ['{母|はは}に、[普段|ふだん]あまり{使|つか}わない[香辛料|こうしんりょう]を{持|も}っていくように{言|い}われたから', 'Vì bị mẹ bảo mang theo gia vị ít dùng.', 'Sai. Đó là chuyện trước khi sang Nhật, không phải chuyện khó xử tháng trước.'],
            ['[得意|とくい]な{料理|りょうり}がないのに、{国|くに}の{料理|りょうり}を{作|つく}ってきてほしいと{言|い}われたから', 'Vì không có món sở trường mà bị nhờ nấu món nước mình.', 'Sai. Tác giả CÓ món sở trường.'],
            ['{国|くに}の{料理|りょうり}を{作|つく}ってきてほしいと{言|い}われたが、{日本|にほん}では[得意|とくい]な{料理|りょうり}が{作|つく}れないから', 'Vì bị nhờ nấu món nước mình nhưng ở Nhật không nấu được món sở trường.', 'Đúng. Món sở trường cần nguyên liệu không mua được ở Nhật (s5–s6).'],
            ['チャーハンが{作|つく}れないのに、チャーハンを{作|つく}ってきてほしいと{言|い}われたから', 'Vì không biết làm cơm rang mà bị nhờ làm cơm rang.', 'Sai. Không ai yêu cầu cơm rang.']
          ],
          answer: 3,
          evidence: ['s5', 's6']
        },
        {
          label: '28',
          question: ['q2', '‹②[特別|とくべつ]なチャーハン›とは、どのようなチャーハンか。', '"Cơm rang đặc biệt" là cơm rang như thế nào?'],
          options: [
            ['{日本|にほん}で{売|う}っている[材料|ざいりょう]でチャーハンを{作|つく}って、{国|くに}の[香辛料|こうしんりょう]をかけたもの', 'Nấu cơm rang bằng nguyên liệu bán ở Nhật, rắc gia vị nước mình.', 'Đúng. Cơm rang bình thường kiểu Nhật (thịt, trứng) + gia vị mẹ đưa (s8–s9).'],
            ['{日本|にほん}で{売|う}っている[材料|ざいりょう]でチャーハンを{作|つく}って、{日本|にほん}の[香辛料|こうしんりょう]をかけたもの', 'Nguyên liệu Nhật + gia vị Nhật.', 'Sai. Gia vị là của nước tác giả.'],
            ['{国|くに}から{持|も}ってきた[材料|ざいりょう]でチャーハンを{作|つく}って、{国|くに}の[香辛料|こうしんりょう]をかけたもの', 'Nguyên liệu mang từ nước mình + gia vị nước mình.', 'Sai. Chỉ mang gia vị, nguyên liệu (thịt, trứng) mua ở Nhật.'],
            ['{国|くに}から{持|も}ってきた[材料|ざいりょう]でチャーハンを{作|つく}って、{日本|にほん}の[香辛料|こうしんりょう]をかけたもの', 'Nguyên liệu nước mình + gia vị Nhật.', 'Sai. Ngược cả hai: nguyên liệu (thịt, trứng) mua ở Nhật, còn gia vị là của nước tác giả.']
          ],
          answer: 1,
          evidence: ['s8', 's9']
        },
        {
          label: '29',
          question: ['q3', '‹③{母|はは}に{聞|き}いてみようと{思|おも}います›とあるが、「{私|わたし}」はどのようなことを{聞|き}くと{考|かんが}えられるか。', '"Định hỏi mẹ thử" – có thể đoán "tôi" sẽ hỏi gì?'],
          options: [
            ['{国|くに}の[香辛料|こうしんりょう]が、どうして{日本|にほん}で[役|やく]に{立|た}つと{思|おも}ったのか。', 'Vì sao mẹ nghĩ gia vị nước mình sẽ có ích ở Nhật.', 'Đúng. 「母はこういうことを予想していたのでしょうか」 → hỏi mẹ đã đoán trước việc gia vị có ích như thế nào (s2, s11).'],
            ['どんな{料理|りょうり}を{作|つく}るときに、{国|くに}の[香辛料|こうしんりょう]を{使|つか}えばいいのか。', 'Nên dùng gia vị khi nấu món gì.', 'Sai. Không liên quan đến "予想".'],
            ['「{私|わたし}」が{日本|にほん}に[留学|りゅうがく]することを[予想|よそう]していたかどうか。', 'Mẹ có đoán trước việc "tôi" đi du học không.', 'Sai. Mẹ đưa gia vị khi biết con sắp đi du học.'],
            ['{次|つぎ}の[留学生|りゅうがくせい]{交流会|こうりゅうかい}に、どんな{料理|りょうり}を{持|も}っていけばいいと{思|おも}うか。', 'Buổi giao lưu sau nên mang món gì.', 'Sai. Câu hỏi với mẹ gắn với 「予想していたのでしょうか」 – tức mẹ có đoán trước việc gia vị sẽ có ích không, không phải chuyện lần sau.']
          ],
          answer: 1,
          evidence: ['s2', 's11', 's12']
        }
      ],
      summary: 'Trước khi đi du học, mẹ đưa gói gia vị bột của nước mình, nói biết đâu có ích. Tháng trước, tác giả được nhờ nấu món nước mình cho buổi giao lưu nhưng món sở trường cần nguyên liệu không có ở Nhật. Tác giả làm cơm rang bằng thịt, trứng rồi rắc gia vị đó → thành món đặc biệt, mọi người khen ngon. Tác giả định hỏi mẹ có phải đã đoán trước chuyện này không.',
      structure: [
        ['Đoạn 1', 'Mẹ đưa gia vị → gần đây có ích'],
        ['Đoạn 2', 'Chuyện khó xử (①) + nhớ ra gia vị'],
        ['Đoạn 3', 'Cơm rang đặc biệt (②) → thành công'],
        ['Đoạn 4', 'Thắc mắc về mẹ (③)']
      ],
      grammar: [
        ['〜なさい', 'Hãy… (mệnh lệnh của cha mẹ, thầy cô)', '持っていきなさい'],
        ['〜かもしれない', 'Có thể…', '役に立つかもしれない'],
        ['〜てほしいと言われる', 'Được nhờ làm…', '作ってきてほしいと言われたのです'],
        ['〜らしい', 'Đậm chất…, đúng kiểu…', '私の国らしい味と香り'],
        ['〜のでしょうか', 'Không biết có phải… không nhỉ', '母はこういうことを予想していたのでしょうか']
      ],
      tip: 'Câu hỏi "どのようなことを聞くと考えられるか" → nội dung câu hỏi nằm ngay câu trước (〜のでしょうか). こういうこと = việc gia vị trở nên có ích ở Nhật.'
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
          ['s1', '{今|いま}、{世界|せかい}{中|じゅう}の{海|うみ}でごみが{増|ふ}え{続|つづ}けている。', 'Hiện nay, rác ở các đại dương trên khắp thế giới vẫn không ngừng tăng.'],
          ['s2', '{特|とく}に@puragomi(プラスチックゴミ)は@choukikan({長|ちょう}{期間|きかん}){海|うみ}に{残|のこ}るので、@kankyou([環境|かんきょう])に@juudai([重大|じゅうだい])な@eikyou([影響|えいきょう])が{出|で}ている。', 'Đặc biệt rác nhựa tồn tại lâu dài trong biển nên gây ảnh hưởng nghiêm trọng đến môi trường.'],
          ['s3', 'このような{問題|もんだい}に@kanshin([関心|かんしん])を{持|も}つ@kigyou([企業|きぎょう])や@shouhisha({消費者|しょうひしゃ})は、{日本|にほん}でも@kaigai({海外|かいがい})でも{増|ふ}えている。', 'Doanh nghiệp và người tiêu dùng quan tâm đến vấn đề này đang tăng lên cả ở Nhật lẫn nước ngoài.']
        ] },
        { t: 'p', s: [
          ['s4', '{服|ふく}や@kutsu([靴|くつ])を{作|つく}っている、ある{海外|かいがい}のファッションの{会社|かいしゃ}が{始|はじ}めた@katsudou({活動|かつどう})がある。', 'Có một hoạt động do một công ty thời trang nước ngoài chuyên làm quần áo, giày dép khởi xướng.'],
          ['s5', 'まず、@ryoushi([漁師|りょうし])たち、つまり{魚|さかな}をとって{生活|せいかつ}している{人|ひと}たちに[頼|たの]んで、{魚|さかな}をとるときに{一緒|いっしょ}にとれるごみを、@minato([港|みなと])に{持|も}ち{帰|かえ}ってもらう。', 'Trước hết, họ nhờ ngư dân – tức những người sống bằng nghề đánh cá – mang về cảng rác bị kéo lên cùng khi đánh cá.'],
          ['s6', 'そして、{会社|かいしゃ}がそのごみを@kaishuu([回収|かいしゅう])、@bunbetsu([分別|ぶんべつ])※1し、その{中|なか}のプラスチックを@sen_i([繊維|せんい])※2に{変|か}え、{服|ふく}や[靴|くつ]にして{売|う}るという@risaikuru(リサイクル){活動|かつどう}である。', 'Sau đó, công ty thu gom, phân loại rác đó, biến phần nhựa thành sợi, làm thành quần áo, giày dép để bán – đó là hoạt động tái chế.']
        ] },
        { t: 'p', s: [
          ['s7', '@jitsuha({実|じつ}は)、{以前|いぜん}、[漁師|りょうし]たちはごみがとれても{海|うみ}に@modosu([戻|もど]して)いた。', 'Thật ra, trước đây ngư dân dù kéo được rác lên cũng thả lại xuống biển.'],
          ['s8', '[港|みなと]に{持|も}ち{帰|かえ}ると{捨|す}てるのにお{金|かね}がかかるからだ。', 'Vì mang về cảng thì phải tốn tiền để vứt bỏ.'],
          ['s9', 'この{活動|かつどう}は、[漁師|りょうし]にとっても、{自分|じぶん}のお{金|かね}を{使|つか}わずに{海|うみ}をきれいにできる{良|よ}さがあるのだ。', 'Hoạt động này đối với ngư dân cũng có cái lợi là làm sạch biển mà không phải tốn tiền của mình.']
        ] },
        { t: 'p', s: [
          ['s10', 'これらの{服|ふく}や[靴|くつ]は、{最近|さいきん}{日本|にほん}でも{売|う}られ{始|はじ}めた。', 'Những bộ quần áo, đôi giày này gần đây cũng bắt đầu được bán ở Nhật.'],
          ['s11', 'デザインも{悪|わる}くない。', 'Thiết kế cũng không tệ.'],
          ['s12', '{消費者|しょうひしゃ}の@ishiki([意識|いしき])が@henka({変化|へんか})している{今|いま}、{日本|にほん}でもきっと@ukeireru({受|う}け{入|い}れられる)だろう。', 'Trong lúc ý thức người tiêu dùng đang thay đổi, chắc chắn ở Nhật chúng cũng sẽ được đón nhận.']
        ] }
      ],
      notes: [
        '（注1）[分別|ぶんべつ]する：[種類|しゅるい]ごとに{分|わ}ける',
        '（注2）[繊維|せんい]：ここでは、{糸|いと}の@genryou([原料|げんりょう])'
      ],
      refs: {},
      questions: [
        {
          label: '30',
          question: ['q1', '「{海外|かいがい}のファッションの{会社|かいしゃ}」がしていることとして、{合|あ}っているのはどれか。', 'Điều "công ty thời trang nước ngoài" đang làm là gì?'],
          options: [
            ['[漁師|りょうし]たちと{一緒|いっしょ}に、{海|うみ}にごみをとりに{行|い}っている。', 'Cùng ngư dân ra biển nhặt rác.', 'Sai. Ngư dân tự mang rác về khi đánh cá.'],
            ['[漁師|りょうし]たちから{海|うみ}でごみを{受|う}け{取|と}って、[港|みなと]に{持|も}ち{帰|かえ}っている。', 'Nhận rác từ ngư dân trên biển rồi mang về cảng.', 'Sai. Ngư dân là người mang về cảng.'],
            ['[漁師|りょうし]たちがプラスチックごみから{服|ふく}や[靴|くつ]を{作|つく}るのを{助|たす}けて、それを{売|う}っている。', 'Giúp ngư dân làm quần áo, giày từ rác nhựa rồi bán.', 'Sai. Công ty tự làm, ngư dân không làm.'],
            ['[漁師|りょうし]たちが{海|うみ}でとったプラスチックごみを{利用|りよう}して、{服|ふく}や[靴|くつ]を{作|つく}っている。', 'Dùng rác nhựa ngư dân vớt được để làm quần áo, giày.', 'Đúng. Thu gom, phân loại, biến nhựa thành sợi, làm quần áo, giày (s5–s6).']
          ],
          answer: 4,
          evidence: ['s5', 's6']
        },
        {
          label: '31',
          question: ['q2', '[漁師|りょうし]たちは、なぜ「{海外|かいがい}のファッションの{会社|かいしゃ}」が{始|はじ}めた{活動|かつどう}に{参加|さんか}するのか。', 'Vì sao ngư dân tham gia hoạt động này?'],
          options: [
            ['ほかの[漁師|りょうし]たちとの@kyouryoku([協力|きょうりょく]){関係|かんけい}ができるから', 'Vì tạo được quan hệ hợp tác với ngư dân khác.', 'Sai. Lợi ích nêu trong bài là không tốn tiền vứt rác, không nói về quan hệ giữa các ngư dân.'],
            ['{自分|じぶん}たちのお{金|かね}をかけずに、{海|うみ}のごみを{減|へ}らすことができるから', 'Vì giảm được rác biển mà không tốn tiền của mình.', 'Đúng. 「自分のお金を使わずに海をきれいにできる良さがある」 (s9).'],
            ['{魚|さかな}をとるためにかかっていたお{金|かね}を{減|へ}らすことができるから', 'Vì giảm được chi phí đánh cá.', 'Sai. Chi phí được nói là phí vứt rác, không phải phí đánh cá.'],
            ['{自分|じぶん}たちが{少|すこ}しお{金|かね}を{出|だ}すだけで、{海|うみ}をきれいにしてもらえるから', 'Vì chỉ cần bỏ ra chút tiền là biển được làm sạch.', 'Sai. Ngư dân không phải trả tiền.']
          ],
          answer: 2,
          evidence: ['s8', 's9']
        },
        {
          label: '32',
          question: ['q3', 'この{文章|ぶんしょう}を{書|か}いた{人|ひと}は、{日本|にほん}で{売|う}られ{始|はじ}めた「{海外|かいがい}のファッションの{会社|かいしゃ}」の{服|ふく}や[靴|くつ]について、どのように{考|かんが}えているか。', 'Người viết nghĩ gì về quần áo, giày của công ty này bắt đầu được bán ở Nhật?'],
          options: [
            ['{海外|かいがい}のファッションに[関心|かんしん]を{持|も}つ{人|ひと}が{増|ふ}えているので、{売|う}れるだろう。', 'Sẽ bán được vì người quan tâm thời trang nước ngoài tăng.', 'Sai. Cái tăng là sự quan tâm đến vấn đề môi trường.'],
            ['[環境|かんきょう]{問題|もんだい}に[関心|かんしん]を{持|も}つ{人|ひと}が{増|ふ}えているし、デザインも{悪|わる}くないので、{売|う}れるだろう。', 'Sẽ bán được vì người quan tâm môi trường tăng và thiết kế không tệ.', 'Đúng. 「デザインも悪くない」「消費者の意識が変化している今…受け入れられるだろう」 (s3, s11–s12).'],
            ['デザインの{良|よ}さで@seihin([製品|せいひん])を[選|えら]ぶ{人|ひと}が{増|ふ}えているので、{値段|ねだん}が{高|たか}くても{売|う}れるだろう。', 'Sẽ bán được dù đắt vì người chọn theo thiết kế tăng.', 'Sai. Bài không nói về giá.'],
            ['{製品|せいひん}のデザインが{日本|にほん}の{消費者|しょうひしゃ}には{合|あ}わないので、あまり{売|う}れないだろう。', 'Thiết kế không hợp người Nhật nên khó bán.', 'Sai. Ngược với ý bài – tác giả khen 「デザインも悪くない」 và cho rằng sẽ được đón nhận.']
          ],
          answer: 2,
          evidence: ['s3', 's11', 's12']
        }
      ],
      summary: 'Rác nhựa ở biển gây ảnh hưởng nghiêm trọng; người quan tâm đến vấn đề này ngày càng nhiều. Một công ty thời trang nước ngoài nhờ ngư dân mang rác vớt được về cảng, rồi thu gom, phân loại, biến nhựa thành sợi để làm quần áo, giày. Trước đây ngư dân thả rác lại biển vì vứt tốn tiền; nay họ làm sạch biển mà không tốn tiền. Sản phẩm bắt đầu bán ở Nhật, thiết kế không tệ, chắc chắn sẽ được đón nhận.',
      structure: [
        ['Đoạn 1', 'Vấn đề rác nhựa + sự quan tâm tăng'],
        ['Đoạn 2', 'Hoạt động tái chế của công ty (まず → そして)'],
        ['Đoạn 3', 'Lợi ích cho ngư dân (実は…)'],
        ['Đoạn 4', 'Ý kiến của người viết về triển vọng ở Nhật']
      ],
      grammar: [
        ['〜続ける', 'Tiếp tục…', 'ごみが増え続けている'],
        ['〜に頼んで〜てもらう', 'Nhờ (ai) làm…', '漁師たちに頼んで…持ち帰ってもらう'],
        ['〜ても', 'Dù…', 'ごみがとれても海に戻していた'],
        ['〜にとっても', 'Đối với… cũng', '漁師にとっても'],
        ['〜ずに', 'Mà không…', '自分のお金を使わずに'],
        ['きっと〜だろう', 'Chắc chắn sẽ…', 'きっと受け入れられるだろう']
      ],
      tip: 'Câu hỏi "ai làm gì" (30): xác định chủ ngữ của từng hành động – ngư dân (持ち帰る) và công ty (回収・分別・繊維に変える・売る). Câu hỏi ý kiến người viết (32): đọc đoạn cuối và nối với đoạn đầu (関心を持つ消費者が増えている).'
    }
  ]
};
