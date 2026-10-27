/* Bài tập về nhà 2 — 問題28, 51, 56 (chọn ngẫu nhiên). Cú pháp đánh dấu: xem data/bai-1.js. */
window.BAI = {
  id: 'btvn-2',
  title: 'Bài tập về nhà 2',
  subtitle: 'Email công việc · Giới thiệu sách · Hướng dẫn nhà hàng',

  vocab: {
    // 問題28
    yuujin: { w: '友人', r: 'ゆうじん', hv: 'HỮU NHÂN', vi: 'bạn bè' },
    tanjoubi: { w: '誕生日', r: 'たんじょうび', hv: 'ĐẢN SINH NHẬT', vi: 'sinh nhật' },
    okuru: { w: '贈る', r: 'おくる', hv: 'TẶNG', vi: 'tặng' },
    chuumon: { w: '注文する', r: 'ちゅうもんする', hv: 'CHÚ VĂN', vi: 'đặt hàng' },
    uketoru: { w: '受け取る', r: 'うけとる', hv: 'THỤ THỦ', vi: 'nhận' },
    sashidashinin: { w: '差出人', r: 'さしだしにん', hv: 'SAI XUẤT NHÂN', vi: 'người gửi' },
    kakunin: { w: '確認', r: 'かくにん', hv: 'XÁC NHẬN', vi: 'xác nhận, kiểm tra' },
    kyakusama: { w: 'お客様', r: 'おきゃくさま', hv: 'KHÁCH DẠNG', vi: 'quý khách' },
    riyou: { w: '利用', r: 'りよう', hv: 'LỢI DỤNG', vi: 'sử dụng' },
    makoto: { w: '誠に', r: 'まことに', hv: 'THÀNH', vi: 'thật sự, chân thành (trang trọng)' },
    uketsuke: { w: '受付', r: 'うけつけ', hv: 'THỤ PHÓ', vi: 'tiếp nhận' },
    tetsuzuki: { w: '手続き', r: 'てつづき', hv: 'THỦ TỤC', vi: 'thủ tục' },
    kanryou: { w: '完了', r: 'かんりょう', hv: 'HOÀN LIỄU', vi: 'hoàn tất' },
    itasu: { w: '致す', r: 'いたす', hv: 'TRÍ', vi: 'làm (khiêm nhường ngữ của する)' },
    kaki: { w: '下記', r: 'かき', hv: 'HẠ KÝ', vi: 'ghi dưới đây' },
    shouhin: { w: '商品', r: 'しょうひん', hv: 'THƯƠNG PHẨM', vi: 'sản phẩm, hàng hóa' },
    kakaku: { w: '価格', r: 'かかく', hv: 'GIÁ CÁCH', vi: 'giá' },
    shoukei: { w: '小計', r: 'しょうけい', hv: 'TIỂU KẾ', vi: 'tạm tính' },
    shiharai: { w: '支払い', r: 'しはらい', hv: 'CHI PHẤT', vi: 'thanh toán' },
    konbinibarai: { w: 'コンビニ払い', r: 'コンビニばらい', hv: 'PHẤT', vi: 'trả tiền tại cửa hàng tiện lợi' },
    souryou: { w: '送料', r: 'そうりょう', hv: 'TỐNG LIỆU', vi: 'phí vận chuyển' },
    seikyuu: { w: '請求', r: 'せいきゅう', hv: 'THỈNH CẦU', vi: 'yêu cầu thanh toán', note: 'ご請求金額 = số tiền phải trả' },
    todokesaki: { w: 'お届け先', r: 'おとどけさき', hv: 'GIỚI TIÊN', vi: 'nơi nhận hàng, người nhận' },
    yotei: { w: '予定', r: 'よてい', hv: 'DỰ ĐỊNH', vi: 'dự kiến' },
    haisoujoukyou: { w: '配送状況', r: 'はいそうじょうきょう', hv: 'PHỐI TỐNG TRẠNG HUỐNG', vi: 'tình trạng giao hàng' },
    okyakusamajouhou: { w: 'お客様情報', r: 'おきゃくさまじょうほう', hv: 'KHÁCH DẠNG TÌNH BÁO', vi: 'thông tin khách hàng' },
    soushinsenyou: { w: '送信専用', r: 'そうしんせんよう', hv: 'TỐNG TÍN CHUYÊN DỤNG', vi: 'chỉ dùng để gửi' },
    jidouteki: { w: '自動的に', r: 'じどうてきに', hv: 'TỰ ĐỘNG ĐÍCH', vi: 'một cách tự động' },
    henshin: { w: '返信', r: 'へんしん', hv: 'PHẢN TÍN', vi: 'trả lời (thư)' },
    henkou: { w: '変更する', r: 'へんこうする', hv: 'BIẾN CANH', vi: 'thay đổi' },
    shinamono: { w: '品物', r: 'しなもの', hv: 'PHẨM VẬT', vi: 'hàng hóa, món hàng' },
    shiraberu: { w: '調べる', r: 'しらべる', hv: 'ĐIỀU', vi: 'tìm hiểu, tra cứu' },
    toiawaseru: { w: '問い合わせる', r: 'といあわせる', hv: 'VẤN HỢP', vi: 'hỏi, liên hệ hỏi thông tin' },
    gamen: { w: '画面', r: 'がめん', hv: 'HỌA DIỆN', vi: 'màn hình' },
    bubun: { w: '部分', r: 'ぶぶん', hv: 'BỘ PHÂN', vi: 'phần' },

    // 問題51
    shousetsu: { w: '小説', r: 'しょうせつ', hv: 'TIỂU THUYẾT', vi: 'tiểu thuyết' },
    shoukai: { w: '紹介', r: 'しょうかい', hv: 'THIỆU GIỚI', vi: 'giới thiệu' },
    ikken: { w: '一軒', r: 'いっけん', hv: 'NHẤT HIÊN', vi: 'một (ngôi nhà, cửa hàng)' },
    butai: { w: '舞台', r: 'ぶたい', hv: 'VŨ ĐÀI', vi: 'sân khấu; bối cảnh (của truyện)' },
    tenin: { w: '店員', r: 'てんいん', hv: 'ĐIẾM VIÊN', vi: 'nhân viên cửa hàng' },
    kakawari: { w: '関わり', r: 'かかわり', hv: 'QUAN', vi: 'mối quan hệ, sự liên quan' },
    egaku: { w: '描く', r: 'えがく', hv: 'MIÊU', vi: 'miêu tả, khắc họa' },
    sakusha: { w: '作者', r: 'さくしゃ', hv: 'TÁC GIẢ', vi: 'tác giả' },
    saiyuushuushou: { w: '最優秀賞', r: 'さいゆうしゅうしょう', hv: 'TỐI ƯU TÚ THƯỞNG', vi: 'giải xuất sắc nhất' },
    chuumoku: { w: '注目の', r: 'ちゅうもくの', hv: 'CHÚ MỤC', vi: 'được chú ý' },
    sakka: { w: '作家', r: 'さっか', hv: 'TÁC GIA', vi: 'nhà văn' },
    wakamono: { w: '若者', r: 'わかもの', hv: 'NHƯỢC GIẢ', vi: 'người trẻ' },
    junsui: { w: '純粋さ', r: 'じゅんすいさ', hv: 'THUẦN TÚY', vi: 'sự trong sáng, thuần khiết' },
    aijou: { w: '愛情', r: 'あいじょう', hv: 'ÁI TÌNH', vi: 'tình cảm yêu thương' },
    hyougen: { w: '表現する', r: 'ひょうげんする', hv: 'BIỂU HIỆN', vi: 'thể hiện, diễn tả' },
    ninki: { w: '人気', r: 'にんき', hv: 'NHÂN KHÍ', vi: 'được yêu thích' },
    shujinkou: { w: '主人公', r: 'しゅじんこう', hv: 'CHỦ NHÂN CÔNG', vi: 'nhân vật chính' },
    kyoumi: { w: '興味', r: 'きょうみ', hv: 'HỨNG VỊ', vi: 'hứng thú' },
    rin: { w: '〜輪', r: 'りん', hv: 'LUÂN', vi: '… bông (đếm hoa)' },
    koukan: { w: '交換', r: 'こうかん', hv: 'GIAO HOÁN', vi: 'trao đổi', note: '〜と交換に = để đổi lấy…' },
    tsugitsugi: { w: '次々と', r: 'つぎつぎと', hv: 'THỨ THỨ', vi: 'lần lượt, liên tiếp' },
    arawareru: { w: '現れる', r: 'あらわれる', hv: 'HIỆN', vi: 'xuất hiện' },
    erabu: { w: '選ぶ', r: 'えらぶ', hv: 'TUYỂN', vi: 'chọn' },
    jijou: { w: '事情', r: 'じじょう', hv: 'SỰ TÌNH', vi: 'hoàn cảnh, lý do' },
    tazuneru: { w: 'たずねる（尋ねる）', r: 'たずねる', hv: 'TẦM', vi: 'hỏi' },
    kankei: { w: '関係', r: 'かんけい', hv: 'QUAN HỆ', vi: 'quan hệ' },
    yorokobi: { w: '喜び', r: 'よろこび', hv: 'HỈ', vi: 'niềm vui' },
    hibi: { w: '日々', r: 'ひび', hv: 'NHẬT NHẬT', vi: 'những ngày tháng' },
    yakunitatsu: { w: '役に立つ', r: 'やくにたつ', hv: 'DỊCH LẬP', vi: 'có ích, giúp ích' },
    yousu: { w: '様子', r: 'ようす', hv: 'DẠNG TỬ', vi: 'dáng vẻ, tình trạng' },
    dokusha: { w: '読者', r: 'どくしゃ', hv: 'ĐỘC GIẢ', vi: 'người đọc' },
    genkizukerareru: { w: '元気づけられる', r: 'げんきづけられる', hv: 'NGUYÊN KHÍ', vi: 'được tiếp thêm sức mạnh, được khích lệ' },
    eeru: { w: 'エール', r: 'エール', hv: '', vi: 'lời cổ vũ' },
    hanakotoba: { w: '花言葉', r: 'はなことば', hv: 'HOA NGÔN DIỆP', vi: 'ý nghĩa của các loài hoa' },
    chishiki: { w: '知識', r: 'ちしき', hv: 'TRI THỨC', vi: 'kiến thức' },
    eru: { w: '得る', r: 'える', hv: 'ĐẮC', vi: 'có được, đạt được' },
    ningenkankei: { w: '人間関係', r: 'にんげんかんけい', hv: 'NHÂN GIAN QUAN HỆ', vi: 'quan hệ giữa người với người' },
    tsukareru: { w: '疲れる', r: 'つかれる', hv: 'BÌ', vi: 'mệt mỏi' },
    mokuhyou: { w: '目標', r: 'もくひょう', hv: 'MỤC TIÊU', vi: 'mục tiêu' },
    issatsu: { w: '一冊', r: 'いっさつ', hv: 'NHẤT SÁCH', vi: 'một cuốn (sách)' },
    dounendai: { w: '同年代', r: 'どうねんだい', hv: 'ĐỒNG NIÊN ĐẠI', vi: 'cùng lứa tuổi' },
    shiai: { w: '試合', r: 'しあい', hv: 'THÍ HỢP', vi: 'trận đấu' },
    senshu: { w: '選手', r: 'せんしゅ', hv: 'TUYỂN THỦ', vi: 'vận động viên' },
    ouen: { w: '応援する', r: 'おうえんする', hv: 'ỨNG VIỆN', vi: 'cổ vũ' },
    nedan: { w: '値段', r: 'ねだん', hv: 'TRỊ ĐOẠN', vi: 'giá tiền' },
    mukanshin: { w: '無関心', r: 'むかんしん', hv: 'VÔ QUAN TÂM', vi: 'thờ ơ, không quan tâm' },
    tsutaeru: { w: '伝える', r: 'つたえる', hv: 'TRUYỀN', vi: 'truyền đạt' },

    // 問題56
    annai: { w: '案内', r: 'あんない', hv: 'ÁN NỘI', vi: 'hướng dẫn, giới thiệu' },
    shinsen: { w: '新鮮', r: 'しんせん', hv: 'TÂN TIÊN', vi: 'tươi' },
    yasai: { w: '野菜', r: 'やさい', hv: 'DÃ THÁI', vi: 'rau' },
    furusato: { w: 'ふるさと', r: 'ふるさと', hv: '', vi: 'quê hương' },
    sashimi: { w: 'さしみ', r: 'さしみ', hv: '', vi: 'món cá sống sashimi' },
    saikou: { w: '最高', r: 'さいこう', hv: 'TỐI CAO', vi: 'tuyệt nhất' },
    houfu: { w: '豊富', r: 'ほうふ', hv: 'PHONG PHÚ', vi: 'phong phú' },
    koshitsu: { w: '個室', r: 'こしつ', hv: 'CÁ THẤT', vi: 'phòng riêng' },
    nenjuumukyuu: { w: '年中無休', r: 'ねんじゅうむきゅう', hv: 'NIÊN TRUNG VÔ HƯU', vi: 'mở cửa quanh năm, không ngày nghỉ' },
    chuuka: { w: '中華', r: 'ちゅうか', hv: 'TRUNG HOA', vi: '(món) Trung Hoa' },
    tabehoudai: { w: '食べ放題', r: 'たべほうだい', hv: 'THỰC PHÓNG ĐỀ', vi: 'ăn thỏa thích (buffet)' },
    tomodachi: { w: '友達', r: 'ともだち', hv: 'HỮU ĐẠT', vi: 'bạn bè' },
    sagasu: { w: '探す', r: 'さがす', hv: 'THÁM', vi: 'tìm' },
    yosan: { w: '予算', r: 'よさん', hv: 'DỰ TOÁN', vi: 'ngân sách, số tiền định chi' },
    inai: { w: '以内', r: 'いない', hv: 'DĨ NỘI', vi: 'trong vòng, không quá' },
    washoku: { w: '和食', r: 'わしょく', hv: 'HÒA THỰC', vi: 'món Nhật' }
  },

  problems: [
    /* ───────────── 問題28 ───────────── */
    {
      id: '28',
      review: { pages: [90, 91], answerPage: 191, bookAnswer: 4, doubts: [] },
      kind: 'メール（ビジネス）',
      kindVi: 'Email công việc',
      style: 'mail',
      before: ['b', 'インターネットで{買|か}い{物|もの}をしますか。', 'Bạn có mua sắm trên mạng không?'],
      lead: ['l', 'ソウさんは@yuujin([友人|ゆうじん])の[中村花子|なかむらはなこ]さんの@tanjoubi([誕生日|たんじょうび])にチョコレートを@okuru([贈|おく]ろう)と{思|おも}い、インターネットで@chuumon({注文|ちゅうもん})した。その{後|ご}、{下|した}のメールを@uketoru([受|う]け[取|と]った)。', 'Sou muốn tặng sô-cô-la vào sinh nhật bạn mình là Nakamura Hanako nên đã đặt hàng trên mạng. Sau đó, Sou nhận được email dưới đây.'],
      blocks: [
        { t: 'meta', s: [
          ['m1', '@sashidashinin([差出人|さしだしにん])：○×ショップ［×××@marubatsu.co.jp］', 'Người gửi: ○× Shop'],
          ['m2', '[宛先|あてさき]：1234@○○○○.ne.jp', 'Người nhận: 1234@○○○○.ne.jp'],
          ['m3', '[件名|けんめい]：ご{注文|ちゅうもん}[内容|ないよう]の@kakunin([確認|かくにん])', 'Tiêu đề: Xác nhận nội dung đơn hàng']
        ] },
        { t: 'lines', s: [
          ['s1', 'ソウ　シューイー　[様|さま]　（@kyakusama(お[客様|きゃくさま]){番号|ばんごう}：123456）', 'Kính gửi Sou Shuyi (Mã khách hàng: 123456)'],
          ['s2', 'このたびは○×ショップをご@riyou([利用|りよう])いただき、@makoto([誠|まこと]に)ありがとうございます。', 'Xin chân thành cảm ơn quý khách đã sử dụng ○× Shop.'],
          ['s3', 'お[申|もう]し[込|こ]みの@uketsuke([受付|うけつけ])@tetsuzuki([手続|てつづ]き)が@kanryou([完了|かんりょう])いたしましたので、お{知|し}らせ@itasu([致|いた]します)。', 'Thủ tục tiếp nhận đơn hàng đã hoàn tất, chúng tôi xin thông báo.'],
          ['s4', '@kaki([下記|かき])のご{注文|ちゅうもん}[内容|ないよう]をご[確認|かくにん]ください。', 'Xin quý khách kiểm tra nội dung đơn hàng dưới đây.']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['o1', '［ご{注文|ちゅうもん}{番号|ばんごう}］1234-5678', 'Mã đơn hàng: 1234-5678'],
          ['o2', '［ご{注文|ちゅうもん}{日|び}］20XX-07-16　10:34:19', 'Ngày đặt hàng: 16/7/20XX, 10:34:19'],
          ['o3', '［@shouhin([商品|しょうひん]){番号|ばんごう}］900-800-700', 'Mã sản phẩm: 900-800-700'],
          ['o4', '［[商品|しょうひん]{名|めい}］"チョコレート　セットA"　@kakaku([価格|かかく])　2,900{円|えん}', 'Tên sản phẩm: "Bộ sô-cô-la A" – giá 2.900 yên'],
          ['o5', '［@shoukei([小計|しょうけい])］2,900{円|えん}', 'Tạm tính: 2.900 yên'],
          ['o6', '［お@shiharai([支払|しはら]い){方法|ほうほう}］@konbinibarai(コンビニ[払|ばら]い)', 'Hình thức thanh toán: trả tại cửa hàng tiện lợi']
        ] },
        { t: 'right', s: [
          ['p1', '[商品|しょうひん]{金額|きんがく}：2,900{円|えん}', 'Tiền hàng: 2.900 yên'],
          ['p2', '@souryou([送料|そうりょう])：600{円|えん}', 'Phí vận chuyển: 600 yên'],
          ['p3', 'ご@seikyuu([請求|せいきゅう]){金額|きんがく}：3,500{円|えん}', 'Tổng tiền phải trả: 3.500 yên']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['d1', '［@todokesaki(お[届|とど]け[先|さき])］[中村花子|なかむらはなこ]　[様|さま]', 'Người nhận: Nakamura Hanako'],
          ['d2', '〒XXX-XXXX　{東京都|とうきょうと}○○{市|し}　X-X-X　TEL　XX-XXXX-XXXX', 'Địa chỉ: thành phố ○○, Tokyo'],
          ['d3', '［お[届|とど]け@yotei([予定|よてい])］20XX年08月01日ごろ　9{時|じ}～14{時|じ}', 'Dự kiến giao: khoảng ngày 1/8/20XX, từ 9 đến 14 giờ']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['n1', '※ご{注文|ちゅうもん}の@haisoujoukyou([配送状況|はいそうじょうきょう])は{右|みぎ}の［@okyakusamajouhou(お[客様|きゃくさま][情報|じょうほう])］からご[確認|かくにん]いただけます。', '※ Có thể xem tình trạng giao hàng tại mục [Thông tin khách hàng] bên phải.'],
          ['n2', '※このメールは@soushinsenyou([送信|そうしん][専用|せんよう])アドレスより@jidouteki([自動的|じどうてき]に)[送信|そうしん]されています。ご@henshin([返信|へんしん])いただいてもお{答|こた}えできません。', '※ Email này được gửi tự động từ địa chỉ chỉ dùng để gửi. Nếu quý khách trả lời, chúng tôi không thể hồi đáp.'],
          ['n3', '※ご{注文|ちゅうもん}[内容|ないよう]を[確認|かくにん]・@henkou([変更|へんこう])する[場合|ばあい]は、○×ショップのホームページ（http://www.marubatsu.co.jp）の{右上|みぎうえ}にある「アカウントサービス」をクリックしてください。', '※ Nếu muốn xem hoặc thay đổi nội dung đơn hàng, vui lòng nhấn "Dịch vụ tài khoản" ở góc trên bên phải trang web của ○× Shop.']
        ] },
        { t: 'sign', cls: 'gap', s: [
          ['e1', 'またのご[利用|りよう]を{心|こころ}よりお{待|ま}ちしております。', 'Rất mong quý khách tiếp tục ủng hộ.'],
          ['e2', '（[株|かぶ]）○×ショップ　http://www.marubatsu.co.jp', 'Công ty cổ phần ○× Shop'],
          ['e3', '〒XXX-XXXX　{東京都|とうきょうと}○○{市|し}××　1-1-1', 'Địa chỉ: 1-1-1 ××, thành phố ○○, Tokyo']
        ] }
      ],
      notes: [],
      refs: {},
      question: ['q', '@shinamono([品物|しなもの])が[中村|なかむら]さんの{家|いえ}に[届|とど]けられたかどうかを{知|し}りたいが、どうしたらよいか。', 'Muốn biết món hàng đã được giao đến nhà Nakamura chưa thì nên làm gì?'],
      options: [
        ['8月1日ごろに[届|とど]くことはわかるが、それ{以上|いじょう}は@shiraberu([調|しら]べられない)。', 'Chỉ biết hàng sẽ đến khoảng ngày 1/8, ngoài ra không tra được gì thêm.', 'Sai. Có thể xem tình trạng giao hàng ở mục [お客様情報] (dòng ※ đầu tiên).'],
        ['このメールに[返信|へんしん]をして、いつ[届|とど]くかを@toiawaseru({問|と}い{合|あ}わせる)。', 'Trả lời email này để hỏi khi nào hàng đến.', 'Sai. Email gửi từ địa chỉ chỉ dùng để gửi, trả lời cũng không được hồi đáp (dòng ※ thứ hai).'],
        ['○×ショップのホームページへ{行|い}き、[調|しら]べる。', 'Vào trang web của ○× Shop để tra.', 'Sai. Trang web (アカウントサービス) dùng để xem/thay đổi nội dung đơn hàng, không phải tình trạng giao hàng.'],
        ['このメールの@gamen([画面|がめん])の「お[客様|きゃくさま][情報|じょうほう]」の@bubun([部分|ぶぶん])をクリックして[調|しら]べる。', 'Nhấn vào phần "Thông tin khách hàng" trên màn hình email này để tra.', 'Đúng. 「ご注文の配送状況は右の［お客様情報］からご確認いただけます」.']
      ],
      answer: 4,
      evidence: ['n1'],
      summary: 'Email tự động của cửa hàng trực tuyến ○× Shop xác nhận đơn hàng sô-cô-la của Sou: mã đơn, sản phẩm, giá, phí vận chuyển, người nhận (Nakamura Hanako), dự kiến giao khoảng 1/8. Cuối email có 3 lưu ý: xem tình trạng giao hàng ở mục [お客様情報]; không trả lời email này; muốn xem/đổi đơn hàng thì vào trang web.',
      structure: [
        ['Đầu email', 'Người gửi, người nhận, tiêu đề'],
        ['Lời chào', 'Cảm ơn + thông báo đã nhận đơn'],
        ['Nội dung đơn', 'Mã đơn, sản phẩm, giá, cách thanh toán, người nhận, dự kiến giao'],
        ['Các dòng ※', 'LƯU Ý QUAN TRỌNG → nơi có đáp án']
      ],
      grammar: [
        ['ご〜いただき、ありがとうございます', 'Cảm ơn quý khách đã… (kính ngữ)', 'ご利用いただき、誠にありがとうございます'],
        ['〜いたしましたので、お知らせ致します', 'Đã… nên xin thông báo (khiêm nhường ngữ)', '完了いたしましたので、お知らせ致します'],
        ['ご〜いただけます', 'Quý khách có thể… (kính ngữ)', '［お客様情報］からご確認いただけます'],
        ['〜ても〜できません', 'Dù… cũng không thể…', 'ご返信いただいてもお答えできません'],
        ['〜かどうか', '… hay không', '届けられたかどうかを知りたい']
      ],
      tip: 'Email của cửa hàng trực tuyến: thông tin quan trọng thường nằm ở các dòng có dấu ※ ở cuối. Đọc kỹ từng dòng ※ để biết việc gì làm ở đâu (xem giao hàng / xem đơn / không trả lời).'
    },

    /* ───────────── 問題51 ───────────── */
    {
      id: '51',
      review: { pages: [137, 138], answerPage: 207, doubts: [] },
      kind: '内容理解（長文）・本の紹介',
      kindVi: 'Đoạn văn dài – giới thiệu sách',
      style: 'essay',
      before: null,
      lead: ['l', 'つぎの{文章|ぶんしょう}は『[花屋|はなや]ダイヤリー』という@shousetsu([小説|しょうせつ])についての@shoukai([紹介|しょうかい])である。', 'Đoạn văn sau giới thiệu cuốn tiểu thuyết "Hanaya Diary" (Nhật ký tiệm hoa).'],
      blocks: [
        { t: 'p', s: [
          ['s1', '『[花屋|はなや]ダイヤリー』は@ikken([一軒|いっけん])の[花屋|はなや]が@butai([舞台|ぶたい])の[小説|しょうせつ]です。', '"Hanaya Diary" là tiểu thuyết lấy bối cảnh một tiệm hoa.'],
          ['s2', '[花屋|はなや]のアルバイト@tenin({店員|てんいん})と、{花|はな}を{買|か}いに{来|く}るさまざまな{客|きゃく}との@kakawari([関|かか]わり)が、ていねいに@egaku([描|えが]かれて)います。', 'Mối quan hệ giữa nhân viên làm thêm của tiệm hoa và đủ kiểu khách đến mua hoa được khắc họa tỉ mỉ.']
        ] },
        { t: 'p', s: [
          ['s3', '@sakusha({作者|さくしゃ})の[山口|やまぐち]しずかは2012年に『{一人|ひとり}』で{小説|しょうせつ}@saiyuushuushou([最優秀賞|さいゆうしゅうしょう])を{取|と}った@chuumoku({注目|ちゅうもく}の){女性|じょせい}@sakka({作家|さっか})です。', 'Tác giả Yamaguchi Shizuka là nữ nhà văn đang được chú ý, đã giành giải tiểu thuyết xuất sắc nhất năm 2012 với tác phẩm "Một mình".'],
          ['s4', '@wakamono([若者|わかもの])の@junsui([純粋|じゅんすい]さ)を、@aijou([愛情|あいじょう])を{持|も}って@hyougen([表現|ひょうげん])するところに@ninki({人気|にんき})があります。', 'Tác giả được yêu thích nhờ cách thể hiện sự trong sáng của người trẻ bằng tình cảm trìu mến.']
        ] },
        { t: 'p', s: [
          ['s5', '『[花屋|はなや]ダイヤリー』では、{学校|がっこう}にも{行|い}かず{仕事|しごと}もしない17[歳|さい]のユウが@shujinkou([主人公|しゅじんこう])※1です。', 'Trong "Hanaya Diary", nhân vật chính là Yū, 17 tuổi, không đi học cũng không đi làm.'],
          ['s6', '{何|なに}にも@kyoumi([興味|きょうみ])を{持|も}てなかったユウは、{小|ちい}さな[花屋|はなや]でアルバイトを{始|はじ}めます。', 'Yū – người chẳng có hứng thú với điều gì – bắt đầu làm thêm ở một tiệm hoa nhỏ.'],
          ['s7', 'そこには{毎日|まいにち}、1@rin([輪|りん])だけ{花|はな}を{買|か}いに{来|く}るおばあさんや、ゲーム{機|き}と@koukan([交換|こうかん])に{花|はな}を{買|か}いたいと{言|い}う{小学生|しょうがくせい}など、{少|すこ}し{変|か}わった{客|きゃく}が@tsugitsugi([次々|つぎつぎ]と)@arawareru([現|あらわ]れます)。', 'Ở đó, những vị khách hơi khác thường lần lượt xuất hiện: bà cụ ngày nào cũng đến mua đúng một bông hoa, em học sinh tiểu học muốn đổi máy chơi game lấy hoa…'],
          ['s8', '{客|きゃく}はみなユウに{花|はな}を@erabu([選|えら]んで)ほしいと{言|い}います。', 'Khách nào cũng muốn Yū chọn hoa giúp.'],
          ['s9', '[困|こま]ったユウは、どうしてその{花|はな}を{買|か}いたいのか、だれのための{花|はな}なのかなど、‹①@jijou([事情|じじょう])を{客|きゃく}に@tazuneru(たずねます)›。', 'Bối rối, Yū hỏi khách về hoàn cảnh: vì sao muốn mua hoa đó, hoa dành cho ai…']
        ] },
        { t: 'p', s: [
          ['s10', '{客|きゃく}と{話|はなし}をするうちに、ユウは{人|ひと}との@kankei([関係|かんけい])の{大切|たいせつ}さや{働|はたら}く{意味|いみ}など、いろいろなことを{考|かんが}え、{変|か}わりはじめます。', 'Qua những lần trò chuyện với khách, Yū suy nghĩ về nhiều điều như tầm quan trọng của quan hệ với người khác, ý nghĩa của việc làm việc… và bắt đầu thay đổi.'],
          ['s11', '«r1({何|なん}の@yorokobi([喜|よろこ]び)もない@hibi([日々|ひび])を{送|おく}っていたユウが、{働|はたら}いて{人|ひと}の@yakunitatsu([役|やく]に{立|た}つ){中|なか}で{明|あか}るく{強|つよ}くなっていく@yousu([様子|ようす]))に、@dokusha({読者|どくしゃ})は‹②@genkizukerareru({元気|げんき}づけられる)›でしょう。', 'Người đọc sẽ được tiếp thêm sức mạnh khi thấy Yū – vốn sống những ngày chẳng có niềm vui – trở nên vui tươi, mạnh mẽ hơn khi làm việc và giúp ích cho người khác.'],
          ['s12', '»r1(それ)は{作者|さくしゃ}から{読者|どくしゃ}への@eeru(エール)※2でもあります。', 'Đó cũng là lời cổ vũ của tác giả gửi đến người đọc.'],
          ['s13', 'また、たくさんの{花|はな}の{名前|なまえ}と@hanakotoba([花言葉|はなことば])※3が[紹介|しょうかい]されているので、だれかに{花|はな}を[贈|おく]るときに[役|やく]に{立|た}つ@chishiki([知識|ちしき])も@eru([得|え]られます)。', 'Ngoài ra, sách giới thiệu tên và ý nghĩa của nhiều loài hoa, nên người đọc còn có thêm kiến thức hữu ích khi tặng hoa cho ai đó.']
        ] },
        { t: 'p', s: [
          ['s14', '@ningenkankei({人間|にんげん}[関係|かんけい])に{少|すこ}し@tsukareru([疲|つか]れて)いるときや@mokuhyou([目標|もくひょう])が{見|み}つけられないときに{読|よ}むと、{人|ひと}が{好|す}きになり{心|こころ}が{元気|げんき}になる@issatsu([一冊|いっさつ])です。', 'Đây là cuốn sách mà nếu đọc lúc hơi mệt mỏi vì các mối quan hệ hoặc lúc chưa tìm được mục tiêu, bạn sẽ thấy yêu con người hơn và tinh thần phấn chấn hơn.'],
          ['s15', 'ユウと@dounendai({同|どう}[年代|ねんだい])の{人|ひと}にぜひ{読|よ}んでほしいです。', 'Tôi rất mong những bạn cùng lứa tuổi với Yū hãy đọc cuốn này.']
        ] }
      ],
      notes: [
        '（注1）[主人公|しゅじんこう]：[小説|しょうせつ]などの{中心|ちゅうしん}{人物|じんぶつ}',
        '（注2）エール：スポーツなどの@shiai([試合|しあい])で@senshu([選手|せんしゅ])を@ouen([応援|おうえん])するときの{声|こえ}・[声援|せいえん]',
        '（注3）[花言葉|はなことば]：{一|ひと}つ{一|ひと}つの{花|はな}に{意味|いみ}を{持|も}たせたもの。バラは「[愛|あい]」など'
      ],
      refs: {
        r1: 'それ = hình ảnh Yū trở nên vui tươi, mạnh mẽ khi làm việc và giúp ích cho người khác (câu trước).'
      },
      questions: [
        {
          label: '問1',
          question: ['q1', '{本文|ほんぶん}によると、[山口|やまぐち]しずかはどんな{人|ひと}だと{書|か}かれているか。', 'Theo bài, Yamaguchi Shizuka được miêu tả là người như thế nào?'],
          options: [
            ['{若|わか}い{女性|じょせい}の{作家|さっか}', 'Nữ nhà văn trẻ', 'Sai. Bài nói là nữ nhà văn, nhưng không nói là trẻ.'],
            ['{自分|じぶん}のことを[小説|しょうせつ]に{書|か}いた{人|ひと}', 'Người viết tiểu thuyết về chính mình', 'Sai. Bài không nói vậy.'],
            ['[若者|わかもの]に{人気|にんき}がある{作家|さっか}', 'Nhà văn được giới trẻ yêu thích', 'Sai. Tác giả được yêu thích vì CÁCH THỂ HIỆN sự trong sáng của người trẻ, không phải "được giới trẻ yêu thích".'],
            ['[賞|しょう]を{受|う}けたことのある{人気|にんき}の{作家|さっか}', 'Nhà văn được yêu thích, từng nhận giải thưởng', 'Đúng. Đã giành 小説最優秀賞 (câu 3) và 人気があります (câu 4).']
          ],
          answer: 4,
          bookAnswer: 4,
          evidence: ['s3', 's4']
        },
        {
          label: '問2',
          question: ['q2', '‹①[事情|じじょう]を{客|きゃく}にたずねます›とあるが、なぜか。', '"Hỏi khách về hoàn cảnh" – vì sao?'],
          options: [
            ['{何|なに}にも[興味|きょうみ]を{持|も}てなかったから。', 'Vì không có hứng thú với điều gì.', 'Sai. Đó là tính cách ban đầu của Yū, không phải lý do hỏi khách.'],
            ['1[輪|りん]だけ{花|はな}を[選|えら]ぶのは[難|むずか]しいから。', 'Vì chọn chỉ một bông hoa thì khó.', 'Sai. Bài không nói vậy.'],
            ['ゲーム{機|き}と{同|おな}じ@nedan([値段|ねだん])の{花|はな}がわからないから。', 'Vì không biết hoa nào có giá bằng máy chơi game.', 'Sai. Bài không nói vậy.'],
            ['{客|きゃく}がどの{花|はな}がいいか[選|えら]んでほしいと{言|い}うから。', 'Vì khách muốn Yū chọn giúp hoa nào thì hợp.', 'Đúng. Khách nào cũng nhờ Yū chọn hoa (câu 8), nên Yū bối rối và hỏi hoàn cảnh (câu 9).']
          ],
          answer: 4,
          bookAnswer: 4,
          evidence: ['s8', 's9']
        },
        {
          label: '問3',
          question: ['q3', '‹②{元気|げんき}づけられる›とあるが、なぜか。', '"Được tiếp thêm sức mạnh" – vì sao?'],
          options: [
            ['{学校|がっこう}にも{行|い}かず{仕事|しごと}もしなかったユウが{変|か}わったことをしたから。', 'Vì Yū – không đi học, không đi làm – đã làm một việc khác thường.', 'Sai. Bài không nói Yū làm việc gì khác thường.'],
            ['{学校|がっこう}に{行|い}かなかったユウが{学校|がっこう}に{行|い}くようになったから。', 'Vì Yū – vốn không đi học – đã đi học trở lại.', 'Sai. Bài không nói vậy.'],
            ['{何事|なにごと}にも@mukanshin([無関心|むかんしん])だったユウが{明|あか}るく{強|つよ}く{変|か}わっていったから。', 'Vì Yū – vốn thờ ơ với mọi thứ – đã dần trở nên vui tươi, mạnh mẽ.', 'Đúng. 「何の喜びもない日々を送っていたユウが…明るく強くなっていく様子に」 (câu 11).'],
            ['{仕事|しごと}をしなかったユウがアルバイトを{始|はじ}めたから。', 'Vì Yū – vốn không đi làm – đã bắt đầu làm thêm.', 'Sai. Việc bắt đầu làm thêm chỉ là khởi đầu; điều khiến người đọc phấn chấn là sự thay đổi của Yū.']
          ],
          answer: 3,
          bookAnswer: 3,
          evidence: ['s11']
        },
        {
          label: '問4',
          question: ['q4', '『[花屋|はなや]ダイヤリー』で{作者|さくしゃ}が{読者|どくしゃ}に{一番|いちばん}@tsutaeru([伝|つた]えたい)ことは{何|なに}か。', 'Qua "Hanaya Diary", điều tác giả muốn truyền đạt nhất đến người đọc là gì?'],
          options: [
            ['{人|ひと}は{人|ひと}の{中|なか}で{働|はたら}いて{変|か}わっていけるということ', 'Con người có thể thay đổi khi làm việc giữa những người khác.', 'Đúng. Sự thay đổi của Yū khi làm việc và giúp người khác chính là "lời cổ vũ của tác giả gửi người đọc" (câu 11–12).'],
            ['たくさんの{花|はな}には[花言葉|はなことば]があるということ', 'Nhiều loài hoa có ý nghĩa riêng.', 'Sai. Đây chỉ là kiến thức bổ sung (また…).'],
            ['ユウが{何|なん}の[喜|よろこ]びもない[日々|ひび]を{送|おく}っていること', 'Yū đang sống những ngày chẳng có niềm vui.', 'Sai. Đó là tình trạng ban đầu, không phải thông điệp.'],
            ['だれかに{花|はな}を[贈|おく]るときに[役|やく]に{立|た}つということ', 'Sách giúp ích khi tặng hoa cho ai đó.', 'Sai. Đây là lợi ích phụ, không phải điều tác giả muốn truyền đạt nhất.']
          ],
          answer: 1,
          bookAnswer: 1,
          evidence: ['s11', 's12']
        }
      ],
      summary: 'Bài giới thiệu tiểu thuyết "Hanaya Diary" của nữ nhà văn Yamaguchi Shizuka (từng đoạt giải). Nhân vật chính Yū, 17 tuổi, không đi học cũng không đi làm, bắt đầu làm thêm ở tiệm hoa. Khách nào cũng nhờ Yū chọn hoa nên Yū phải hỏi hoàn cảnh của họ, rồi dần thay đổi, trở nên vui tươi và mạnh mẽ. Đó là lời cổ vũ của tác giả; ngoài ra sách còn giới thiệu ý nghĩa các loài hoa.',
      structure: [
        ['Đoạn 1', 'Bối cảnh tiểu thuyết'],
        ['Đoạn 2', 'Giới thiệu tác giả'],
        ['Đoạn 3', 'Nhân vật chính và tình huống (câu gạch chân ①)'],
        ['Đoạn 4', 'Sự thay đổi của Yū → thông điệp (②, エール) + lợi ích phụ'],
        ['Đoạn 5', 'Lời khuyên đọc của người giới thiệu']
      ],
      grammar: [
        ['〜が舞台の〜', '… lấy bối cảnh ở…', '一軒の花屋が舞台の小説'],
        ['〜ず', 'Không… (văn viết của ないで)', '学校にも行かず仕事もしない'],
        ['〜と交換に', 'Để đổi lấy…', 'ゲーム機と交換に花を買いたい'],
        ['〜うちに', 'Trong lúc… (thì dần dần…)', '客と話をするうちに'],
        ['〜でもあります', 'Cũng là…', '作者から読者へのエールでもあります'],
        ['ぜひ〜てほしい', 'Rất mong (ai đó) hãy…', 'ぜひ読んでほしいです']
      ],
      tip: 'Bài giới thiệu sách: phân biệt rõ phần nói về TÁC GIẢ, phần tóm tắt TRUYỆN và phần ĐÁNH GIÁ của người giới thiệu. Câu hỏi "tác giả muốn truyền đạt nhất" thường ứng với các từ như エール, メッセージ, 伝えたい.'
    },

    /* ───────────── 問題56 ───────────── */
    {
      id: '56',
      review: {
        pages: [147, 148], answerPage: 210,
        doubts: []
      },
      kind: '情報検索・パンフレット',
      kindVi: 'Tìm thông tin – tờ giới thiệu nhà hàng',
      style: 'notice',
      before: null,
      lead: ['l', 'これはレストランの@annai([案内|あんない])である。', 'Đây là tờ giới thiệu các nhà hàng.'],
      blocks: [
        { t: 'title', s: [['t1', 'ひがし町　レストラン[案内|あんない]', 'Giới thiệu nhà hàng phố Higashi']] },
        { t: 'sub', s: [['h1', '①オリーブの[風|かぜ]', '① Gió Ô-liu']] },
        { t: 'lines', s: [
          ['r1a', '{南|みなみ}ヨーロッパのさまざまな{国|くに}の{料理|りょうり}が{楽|たの}しめる。パーティーにもよい。', 'Thưởng thức món ăn của nhiều nước Nam Âu. Cũng hợp để tổ chức tiệc.'],
          ['r1b', '［{昼|ひる}］800～1,500{円|えん}　［{夜|よる}］2,000～5,000{円|えん}', 'Trưa: 800–1.500 yên · Tối: 2.000–5.000 yên'],
          ['r1c', '{時間|じかん}：11:00～14:00　18:00～24:00', 'Giờ mở cửa: 11:00–14:00, 18:00–24:00'],
          ['r1d', '{休|やす}み：{木|もく}', 'Nghỉ: thứ Năm']
        ] },
        { t: 'sub', s: [['h2', '②山海', '② Sankai']] },
        { t: 'lines', s: [
          ['r2a', '@shinsen([新鮮|しんせん])な{魚|さかな}と@yasai({野菜|やさい})を{使|つか}った{日本|にほん}の@furusato(ふるさと)の{味|あじ}。@sashimi(さしみ)が@saikou([最高|さいこう])。', 'Hương vị quê nhà Nhật Bản với cá và rau tươi. Sashimi tuyệt hảo.'],
          ['r2b', '［{昼|ひる}］950～1,500{円|えん}　［{夜|よる}］3,500～8,000{円|えん}', 'Trưa: 950–1.500 yên · Tối: 3.500–8.000 yên'],
          ['r2c', '{時間|じかん}：11:30～14:30　18:00～22:00', 'Giờ mở cửa: 11:30–14:30, 18:00–22:00'],
          ['r2d', '{休|やす}み：{火|か}', 'Nghỉ: thứ Ba']
        ] },
        { t: 'sub', s: [['h3', '③よねやま', '③ Yoneyama']] },
        { t: 'lines', s: [
          ['r3a', 'てんぷら、すしなど{日本|にほん}{料理|りょうり}のメニューが@houfu([豊富|ほうふ])。@koshitsu([個室|こしつ])あり。', 'Thực đơn món Nhật phong phú như tempura, sushi. Có phòng riêng.'],
          ['r3b', '［{昼|ひる}］1,000～2,300{円|えん}　［{夜|よる}］3,800～8,800{円|えん}', 'Trưa: 1.000–2.300 yên · Tối: 3.800–8.800 yên'],
          ['r3c', '{時間|じかん}：12:00～14:00　17:30～21:30', 'Giờ mở cửa: 12:00–14:00, 17:30–21:30'],
          ['r3d', '@nenjuumukyuu({年中|ねんじゅう}[無休|むきゅう])', 'Mở cửa quanh năm']
        ] },
        { t: 'sub', s: [['h4', '④[李安|りあん]', '④ Rian']] },
        { t: 'lines', s: [
          ['r4a', 'カニ{料理|りょうり}が{有名|ゆうめい}な@chuuka([中華|ちゅうか]){料理|りょうり}{店|てん}。@tabehoudai({食|た}べ[放題|ほうだい])メニューもあり。', 'Nhà hàng Trung Hoa nổi tiếng với món cua. Có cả thực đơn ăn thỏa thích.'],
          ['r4b', '［{昼|ひる}］1,000～1,800{円|えん}　［{夜|よる}］2,500～12,000{円|えん}', 'Trưa: 1.000–1.800 yên · Tối: 2.500–12.000 yên'],
          ['r4c', '{時間|じかん}：11:00～22:00　17:00～23:00', 'Giờ mở cửa: 11:00–22:00, 17:00–23:00'],
          ['r4d', '{休|やす}み：{火|か}', 'Nghỉ: thứ Ba'],
          ['r4e', '[個室|こしつ]あり。', 'Có phòng riêng.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '問1',
          question: ['q1', 'チョウさんは、@tomodachi({友達|ともだち})と{夕食|ゆうしょく}が{食|た}べられる{店|みせ}を@sagasu([探|さが]して)いる。@yosan([予算|よさん])は3,000{円|えん}@inai([以内|いない])である。{日時|にちじ}は{来週|らいしゅう}の{火曜日|かようび}の19{時|じ}からである。どの{店|みせ}がよいか。', 'Chou đang tìm quán để ăn tối cùng bạn. Ngân sách trong vòng 3.000 yên. Thời gian là 19 giờ thứ Ba tuần sau. Quán nào phù hợp?'],
          options: [
            ['①', '①', 'Đúng. Bữa tối từ 2.000 yên (trong ngân sách), mở 18:00–24:00, chỉ nghỉ thứ Năm nên thứ Ba vẫn mở.'],
            ['②', '②', 'Sai. Nghỉ thứ Ba, và bữa tối từ 3.500 yên (vượt ngân sách).'],
            ['③', '③', 'Sai. Bữa tối từ 3.800 yên, vượt ngân sách 3.000 yên.'],
            ['④', '④', 'Sai. Bữa tối từ 2.500 yên thì vừa ngân sách, nhưng quán nghỉ thứ Ba.']
          ],
          answer: 1,
          bookAnswer: 1,
          evidence: ['r1b', 'r1c', 'r1d']
        },
        {
          label: '問2',
          question: ['q2', 'サムさんは、{木曜日|もくようび}の{昼|ひる}のできるだけ{早|はや}い{時間|じかん}に{友達|ともだち}と@washoku([和食|わしょく])が{食|た}べたい。{何時|なんじ}から{食|た}べることができるか。', 'Sam muốn ăn món Nhật với bạn vào buổi trưa thứ Năm, càng sớm càng tốt. Có thể ăn từ mấy giờ?'],
          options: [
            ['11{時|じ}', '11 giờ', 'Sai. Quán mở 11:00 là ① (món Nam Âu, lại nghỉ thứ Năm) và ④ (món Trung Hoa), không phải món Nhật.'],
            ['11{時|じ}30{分|ぷん}', '11 giờ 30', 'Đúng. Quán món Nhật ② Sankai mở từ 11:30 và chỉ nghỉ thứ Ba.'],
            ['12{時|じ}', '12 giờ', 'Sai. ③ Yoneyama (món Nhật) mở 12:00, nhưng ② còn mở sớm hơn.'],
            ['12{時|じ}30{分|ぷん}', '12 giờ 30', 'Sai. Không có quán nào mở lúc này mà sớm nhất.']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['r2a', 'r2c', 'r2d']
        }
      ],
      summary: 'Tờ giới thiệu 4 nhà hàng ở phố Higashi: ① món Nam Âu (nghỉ thứ Năm), ② món Nhật quê nhà, sashimi (nghỉ thứ Ba, mở từ 11:30), ③ món Nhật tempura, sushi (mở cả năm, từ 12:00), ④ món Trung Hoa, cua (nghỉ thứ Ba). Mỗi quán ghi giá trưa/tối, giờ mở cửa và ngày nghỉ.',
      structure: [
        ['Tiêu đề', 'Giới thiệu nhà hàng'],
        ['4 ô nhà hàng', 'Loại món · giá trưa/tối · giờ mở cửa · ngày nghỉ']
      ],
      grammar: [
        ['〜以内', 'Trong vòng, không vượt quá…', '予算は3,000円以内'],
        ['できるだけ〜', 'Càng… càng tốt', 'できるだけ早い時間に'],
        ['〜あり / 〜もあり', 'Có… (cách viết ngắn trong quảng cáo)', '個室あり。食べ放題メニューもあり。']
      ],
      tip: 'Bài tìm thông tin nhiều điều kiện: gạch chân từng điều kiện trong câu hỏi (ngày, giờ, ngân sách, loại món), rồi loại dần từng quán. Đừng quên kiểm tra NGÀY NGHỈ (休み).'
    }
  ]
};
