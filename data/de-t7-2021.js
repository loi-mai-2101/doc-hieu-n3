/* Đề thi JLPT N3 tháng 7/2021 — Đọc hiểu: 問題4 (短文, câu 23–26) · 問題5 (中文, câu 27–32).
   Cú pháp đánh dấu: xem data/bai-1.js. Đáp án do giáo viên giải (đề không kèm đáp án). */
window.BAI = {
  id: 'de-t7-2021',
  title: 'Đề T7/2021',
  subtitle: 'JLPT N3 tháng 7/2021 · 短文 & 中文',

  vocab: {
    // 4-1
    kyuu: { w: '急な', r: 'きゅうな', hv: 'CẤP', vi: 'gấp, đột xuất' },
    youji: { w: '用事', r: 'ようじ', hv: 'DỤNG SỰ', vi: 'việc bận' },
    nokori: { w: '残り', r: 'のこり', hv: 'TÀN', vi: 'phần còn lại, đồ thừa' },
    atatameru: { w: '温める', r: 'あたためる', hv: 'ÔN', vi: 'hâm nóng' },
    sentakumono: { w: '洗濯物', r: 'せんたくもの', hv: 'TẨY TRẠC VẬT', vi: 'quần áo giặt' },
    hosu: { w: '干す', r: 'ほす', hv: 'CAN', vi: 'phơi' },
    torikomu: { w: '取り込む', r: 'とりこむ', hv: 'THỦ NHẬP', vi: 'thu vào (đồ phơi)' },
    tatamu: { w: 'たたむ（畳む）', r: 'たたむ', hv: 'ĐIỆP', vi: 'gấp (quần áo)' },
    // 4-2
    atesaki: { w: 'あて先', r: 'あてさき', hv: '', vi: 'địa chỉ người nhận' },
    soushin: { w: '送信日時', r: 'そうしんにちじ', hv: 'TỐNG TÍN NHẬT THỜI', vi: 'ngày giờ gửi' },
    genzai: { w: '現在', r: 'げんざい', hv: 'HIỆN TẠI', vi: 'hiện nay' },
    waribiki: { w: '割引', r: 'わりびき', hv: 'CÁT DẪN', vi: 'giảm giá' },
    ippaku: { w: '1泊', r: 'いっぱく', hv: 'BẠC', vi: 'một đêm (nghỉ trọ)' },
    choushoku: { w: '朝食', r: 'ちょうしょく', hv: 'TRIÊU THỰC', vi: 'bữa sáng' },
    muryou: { w: '無料', r: 'むりょう', hv: 'VÔ LIỆU', vi: 'miễn phí' },
    ohayame: { w: 'お早めに', r: 'おはやめに', hv: 'TẢO', vi: 'sớm (lịch sự)' },
    nao: { w: 'なお', r: 'なお', hv: '', vi: 'ngoài ra, xin lưu ý' },
    kokoro: { w: '心より', r: 'こころより', hv: 'TÂM', vi: 'từ đáy lòng' },
    kakari: { w: '係', r: 'かかり', hv: 'HỆ', vi: 'bộ phận phụ trách' },
    // 4-3
    kousaten: { w: '交差点', r: 'こうさてん', hv: 'GIAO SAI ĐIỂM', vi: 'ngã tư' },
    shingou: { w: '信号', r: 'しんごう', hv: 'TÍN HIỆU', vi: 'đèn giao thông' },
    tochuu: { w: '途中', r: 'とちゅう', hv: 'ĐỒ TRUNG', vi: 'giữa chừng' },
    wataru: { w: '渡る', r: 'わたる', hv: 'ĐỘ', vi: 'băng qua' },
    jikannai: { w: '時間内', r: 'じかんない', hv: 'THỜI GIAN NỘI', vi: 'trong thời gian' },
    hokousha: { w: '歩行者', r: 'ほこうしゃ', hv: 'BỘ HÀNH GIẢ', vi: 'người đi bộ' },
    keisatsu: { w: '警察', r: 'けいさつ', hv: 'CẢNH SÁT', vi: 'cảnh sát' },
    gakkari: { w: 'がっかりする', r: 'がっかりする', hv: '', vi: 'thất vọng' },
    sekkaku: { w: 'せっかく', r: 'せっかく', hv: '', vi: 'mất công, khó khăn lắm mới' },
    // 4-4
    zasshi: { w: '雑誌', r: 'ざっし', hv: 'TẠP CHÍ', vi: 'tạp chí' },
    ankeeto: { w: 'アンケート', r: 'アンケート', hv: '', vi: 'khảo sát' },
    migaku: { w: '磨く', r: 'みがく', hv: 'MA', vi: 'đánh (răng)' },
    seibetsu: { w: '性別', r: 'せいべつ', hv: 'TÍNH BIỆT', vi: 'giới tính' },
    nenrei: { w: '年齢', r: 'ねんれい', hv: 'NIÊN LINH', vi: 'tuổi tác' },
    wariai: { w: '割合', r: 'わりあい', hv: 'CÁT HỢP', vi: 'tỉ lệ' },
    shitagatte: { w: '〜にしたがって', r: 'にしたがって', hv: '', vi: 'càng… càng…' },
    naruhodo: { w: 'なるほど', r: 'なるほど', hv: '', vi: 'quả thật, thảo nào' },
    sofu: { w: '祖父', r: 'そふ', hv: 'TỔ PHỤ', vi: 'ông' },
    // 5-1
    kinjo: { w: '近所', r: 'きんじょ', hv: 'CẬN SỞ', vi: 'hàng xóm, gần nhà' },
    heiten: { w: '閉店する', r: 'へいてんする', hv: 'BẾ ĐIẾM', vi: 'đóng cửa (tiệm)' },
    omoide: { w: '思い出', r: 'おもいで', hv: 'TƯ XUẤT', vi: 'kỷ niệm' },
    kasanaru: { w: '重なる', r: 'かさなる', hv: 'TRÙNG', vi: 'trùng, chồng lên' },
    sotsugyou: { w: '卒業する', r: 'そつぎょうする', hv: 'TỐT NGHIỆP', vi: 'tốt nghiệp' },
    dashiau: { w: '出し合う', r: 'だしあう', hv: 'XUẤT HỢP', vi: 'cùng góp (tiền)' },
    tannin: { w: '担任', r: 'たんにん', hv: 'ĐẢM NHIỆM', vi: 'giáo viên chủ nhiệm' },
    hanataba: { w: '花束', r: 'はなたば', hv: 'HOA THÚC', vi: 'bó hoa' },
    orei: { w: 'お礼', r: 'おれい', hv: 'LỄ', vi: 'lời cảm ơn, quà cảm ơn' },
    arawasu: { w: '表す', r: 'あらわす', hv: 'BIỂU', vi: 'thể hiện' },
    okozukai: { w: 'おこづかい', r: 'おこづかい', hv: '', vi: 'tiền tiêu vặt' },
    dokidoki: { w: 'どきどきする', r: 'どきどきする', hv: '', vi: 'hồi hộp' },
    otsukaresama: { w: 'お疲れ様', r: 'おつかれさま', hv: 'BÌ', vi: 'cảm ơn vì đã vất vả' },
    muri: { w: '無理な', r: 'むりな', hv: 'VÔ LÝ', vi: 'quá sức, khó đáp ứng' },
    kansha: { w: '感謝', r: 'かんしゃ', hv: 'CẢM TẠ', vi: 'biết ơn' },
    // 5-2
    suzushii: { w: '涼しい', r: 'すずしい', hv: 'LƯƠNG', vi: 'mát' },
    shurui: { w: '種類', r: 'しゅるい', hv: 'CHỦNG LOẠI', vi: 'loại' },
    koi: { w: '濃い', r: 'こい', hv: 'NÙNG', vi: 'đậm' },
    kouri: { w: '氷', r: 'こおり', hv: 'BĂNG', vi: 'đá' },
    shuukan: { w: '習慣', r: 'しゅうかん', hv: 'TẬP QUÁN', vi: 'thói quen, tập quán' },
    seiki: { w: '〜世紀', r: 'せいき', hv: 'THẾ KỶ', vi: 'thế kỷ' },
    himuro: { w: '氷室', r: 'ひむろ', hv: 'BĂNG THẤT', vi: 'hầm chứa băng' },
    tokeru: { w: 'とける（溶ける）', r: 'とける', hv: 'DUNG', vi: 'tan chảy' },
    kezuru: { w: 'けずる（削る）', r: 'けずる', hv: 'TƯỚC', vi: 'bào' },
    gochisou: { w: 'ごちそう', r: 'ごちそう', hv: '', vi: 'món ngon, bữa thịnh soạn' },
    kisetsu: { w: '季節', r: 'きせつ', hv: 'QUÝ TIẾT', vi: 'mùa' },
    nichijouteki: { w: '日常的', r: 'にちじょうてき', hv: 'NHẬT THƯỜNG ĐÍCH', vi: 'thường ngày' }
  },

  problems: [
    {
      id: '4-1',
      kind: '短文・メモ',
      kindVi: 'Đoạn văn ngắn – mẩu ghi chú',
      style: 'memo',
      before: null,
      lead: ['l', 'たかしさんの{家|いえ}のテーブルの{上|うえ}に、このメモがある。', 'Trên bàn nhà Takashi có mẩu ghi chú này.'],
      blocks: [
        { t: 'lines', s: [['s0', 'たかしへ', 'Gửi Takashi']] },
        { t: 'p', s: [
          ['s1', '@kyuu([急|きゅう]な)@youji({用事|ようじ})で、ちょっとおじいちゃんの{所|ところ}へ{行|い}かなければならなくなりました。', 'Bố/mẹ có việc gấp nên phải đến chỗ ông một chút.'],
          ['s2', '7{時|じ}までには{帰|かえ}れると{思|おも}うけど、おなかがすいて{待|ま}てなかったら、{昨日|きのう}のカレーの@nokori({残|のこ}り)を@atatameru({温|あたた}めて){食|た}べてください。', 'Bố/mẹ nghĩ trước 7 giờ sẽ về, nhưng nếu đói không đợi được thì hâm cà ri còn lại hôm qua mà ăn nhé.']
        ] },
        { t: 'p', s: [
          ['s3', 'それから、@sentakumono([洗濯物|せんたくもの])が@hosu([干|ほ]した)ままになっているから、@torikomu({取|と}り[込|こ]んで)おいてね。', 'Còn nữa, quần áo vẫn đang phơi đấy, con thu vào giúp bố/mẹ nhé.'],
          ['s4', '{時間|じかん}があったら、@tatamu(たたんで)おいてください。', 'Nếu có thời gian thì gấp luôn giúp bố/mẹ.']
        ] },
        { t: 'p', s: [['s5', 'おいしいケーキでも{買|か}って{帰|かえ}るね。', 'Bố/mẹ sẽ mua bánh ngọt ngon gì đó mang về nhé.']] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '23',
        question: ['q1', 'このメモを{読|よ}んで、たかしさんがしなければならないことは{何|なに}か。', 'Đọc mẩu ghi chú, Takashi BẮT BUỘC phải làm gì?'],
        options: [
          ['おじいちゃんの{所|ところ}へ{行|い}く。', 'Đến chỗ ông.', 'Chưa đúng. Người đi sang nhà ông là người viết ghi chú, không phải Takashi.'],
          ['{昨日|きのう}のカレーの{残|のこ}りを{温|あたた}めて{食|た}べる。', 'Hâm cà ri còn lại để ăn.', 'Chưa đúng. Chỉ khi "đói không đợi được" (待てなかったら) thì mới hâm cà ri ăn. Đây không phải việc bắt buộc.'],
          ['[洗濯物|せんたくもの]を{取|と}り[込|こ]む。', 'Thu quần áo vào.', 'Đúng. Thu quần áo đang phơi (取り込んでおいてね) là lời nhờ không kèm điều kiện nào. Còn gấp quần áo thì chỉ "nếu có thời gian".'],
          ['ケーキを{買|か}って{帰|かえ}る。', 'Mua bánh mang về.', 'Chưa đúng. Người viết ghi chú mới là người mua bánh (おいしいケーキでも買って帰るね).']
        ],
        guide: 'Câu hỏi hỏi Takashi BẮT BUỘC phải làm gì (しなければならないこと). Ghi chú có nhiều việc, bạn hãy chia chúng thành ba loại:\n- Việc của người viết: đi sang nhà ông (行かなければならなくなりました), mua bánh mang về (買って帰るね).\n- Việc có điều kiện, chỉ làm khi cần: 「おなかがすいて待てなかったら」 – nếu đói không đợi được thì hâm cà ri ăn; 「時間があったら」 – nếu có thời gian thì gấp quần áo.\n- Việc bắt buộc, không kèm điều kiện: 「洗濯物が干したままになっているから、取り込んでおいてね」 – quần áo vẫn đang phơi, thu vào giúp nhé.\nChỉ có việc thu quần áo là được nhờ mà không kèm điều kiện. Đáp án 3.\nMẹo: câu có 「〜たら」 (nếu…) là việc tùy tình huống, không phải bắt buộc.',
        answer: 3, evidence: ['s3']
      }],
      summary: 'Người viết (bố/mẹ của Takashi) có việc gấp phải sang nhà ông, sẽ về trước 7 giờ. Nếu đói thì hâm cà ri ăn; phải thu quần áo đang phơi, có thời gian thì gấp luôn; người viết sẽ mua bánh về.',
      structure: [['Đoạn 1', 'Lý do vắng + việc tùy chọn (〜たら)'], ['Đoạn 2', 'Việc bắt buộc (thu quần áo) + việc tùy chọn (gấp)'], ['Đoạn 3', 'Mẹ sẽ mua bánh']],
      grammar: [
        ['〜なければならなくなる', 'Trở nên phải…', '行かなければならなくなりました'],
        ['〜たら', 'Nếu… (điều kiện)', 'おなかがすいて待てなかったら'],
        ['〜たまま', 'Vẫn để nguyên…', '干したままになっている'],
        ['〜ておいてね', 'Làm sẵn giúp nhé', '取り込んでおいてね']
      ],
      tip: '"しなければならないこと" → loại các việc có điều kiện (〜たら、時間があったら) và việc của người viết. Chọn việc được yêu cầu KHÔNG kèm điều kiện.'
    },

    {
      id: '4-2',
      kind: '短文・メール',
      kindVi: 'Đoạn văn ngắn – email khách sạn',
      style: 'mail',
      before: null,
      lead: ['l', 'これは、あるホテルから{山田|やまだ}さんに[届|とど]いたメールである。', 'Đây là email Yamada nhận được từ một khách sạn.'],
      blocks: [
        { t: 'meta', s: [
          ['m1', '@atesaki(あて{先|さき})：syamada@232mail.com', 'Người nhận: syamada@232mail.com'],
          ['m2', '@soushin({送信|そうしん}{日時|にちじ})：2{月|がつ}1{日|ついたち}　16:20', 'Gửi lúc: 16:20 ngày 1/2']
        ] },
        { t: 'lines', s: [['s0', '{山田|やまだ}[真二|しんじ][様|さま]', 'Kính gửi quý khách Yamada Shinji']] },
        { t: 'p', s: [
          ['s1', 'いつもご{利用|りよう}ありがとうございます。', 'Cảm ơn quý khách luôn sử dụng dịch vụ.'],
          ['s2', '@genzai({現在|げんざい})、{東京|とうきょう}ホテルでは、インターネット{予約|よやく}@waribiki({割引|わりびき})サービスを{行|おこな}っております。', 'Hiện nay, khách sạn Tokyo đang có dịch vụ giảm giá đặt phòng qua mạng.'],
          ['s3', 'インターネットで{予約|よやく}され、2{月|がつ}28{日|にち}までにお[泊|と]まりの{方|かた}は、@ippaku(1[泊|ぱく])の{料金|りょうきん}を10%[割引|わりびき]し、ご@choushoku({朝食|ちょうしょく})を@muryou({無料|むりょう})にいたします。', 'Khách đặt qua mạng và nghỉ trước ngày 28/2 sẽ được giảm 10% giá một đêm và miễn phí bữa sáng.']
        ] },
        { t: 'p', s: [
          ['s4', 'この[割引|わりびき]をご{利用|りよう}になれるお{部屋|へや}は{一日|いちにち}10{室|しつ}だけですので、@ohayame(お{早|はや}めに)ご{予約|よやく}ください。', 'Phòng áp dụng giảm giá chỉ 10 phòng mỗi ngày, xin đặt sớm.'],
          ['s5', '@nao(なお)、このサービスは、{電話|でんわ}、ファックスでご{予約|よやく}の{場合|ばあい}はご{利用|りよう}できません。', 'Lưu ý: dịch vụ này không áp dụng khi đặt qua điện thoại, fax.'],
          ['s6', 'ご{予約|よやく}を@kokoro({心|こころ}より)お{待|ま}ちしております。', 'Chúng tôi chân thành mong được quý khách đặt phòng.']
        ] },
        { t: 'lines', s: [['sg', '{東京|とうきょう}ホテルお{客様|きゃくさま}サービス@kakari([係|かかり])', 'Bộ phận dịch vụ khách hàng khách sạn Tokyo']] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '24',
        question: ['q1', 'このメールから、{東京|とうきょう}ホテルのサービスについて、どんなことがわかるか。', 'Qua email, biết được gì về dịch vụ của khách sạn Tokyo?'],
        options: [
          ['インターネットで{予約|よやく}すると、{料金|りょうきん}と{朝食|ちょうしょく}が10%[割引|わりびき]になる{場合|ばあい}がある。', 'Đặt qua mạng thì tiền phòng và bữa sáng được giảm 10%.', 'Chưa đúng. Bữa sáng được MIỄN PHÍ, chứ không phải giảm 10%. Giảm 10% chỉ áp dụng cho tiền phòng.'],
          ['インターネットで2{月|がつ}{中|ちゅう}に{予約|よやく}すると、{朝食|ちょうしょく}が10%[割引|わりびき]になる{場合|ばあい}がある。', 'Đặt qua mạng trong tháng 2 thì bữa sáng giảm 10%.', 'Chưa đúng. Sai hai chỗ: điều kiện là NGHỈ trước 28/2 (không phải đặt trong tháng 2), và bữa sáng miễn phí chứ không phải giảm 10%.'],
          ['インターネットで{予約|よやく}し、2{月|がつ}{中|ちゅう}に[泊|と]まると、1[泊|ぱく]{料金|りょうきん}が10%[割引|わりびき]され、{朝食|ちょうしょく}が{無料|むりょう}になる{場合|ばあい}がある。', 'Đặt qua mạng và nghỉ trong tháng 2 thì giảm 10% tiền phòng và miễn phí bữa sáng.', 'Đúng. Đặt qua mạng và nghỉ trong tháng 2 thì được giảm 10% tiền phòng một đêm và miễn phí bữa sáng, nhưng chỉ có 10 phòng mỗi ngày nên là "có trường hợp".'],
          ['インターネット、{電話|でんわ}、ファックスのどれで{予約|よやく}しても、2{月|がつ}{中|ちゅう}は{朝食|ちょうしょく}だけ{無料|むりょう}になる{場合|ばあい}がある。', 'Đặt bằng cách nào cũng được miễn phí bữa sáng.', 'Chưa đúng. Đặt qua điện thoại hay fax thì không được áp dụng (電話、ファックスでご予約の場合はご利用できません).']
        ],
        guide: 'Câu hỏi hỏi email cho biết gì về dịch vụ của khách sạn. Đây là dạng câu "mỗi lựa chọn sai một chi tiết", nên bạn cần ghi lại từng chi tiết của ưu đãi:\n- Điều kiện 1: đặt phòng qua MẠNG (インターネットで予約され).\n- Điều kiện 2: NGHỈ trước ngày 28/2 (2月28日までにお泊まりの方), tức là ngày nghỉ, không phải ngày đặt.\n- Ưu đãi: giảm 10% giá MỘT ĐÊM, và bữa sáng MIỄN PHÍ.\n- Giới hạn: mỗi ngày chỉ 10 phòng; đặt qua điện thoại, fax thì không áp dụng.\nLựa chọn 3 khớp mọi chi tiết. Chữ 「場合がある」 (có trường hợp) ở cuối cũng hợp lý, vì mỗi ngày chỉ có 10 phòng, không phải ai cũng được.',
        answer: 3, evidence: ['s3', 's4', 's5']
      }],
      summary: 'Khách sạn Tokyo giảm 10% tiền phòng/đêm và miễn phí bữa sáng cho khách đặt qua mạng và nghỉ trước 28/2. Mỗi ngày chỉ 10 phòng; đặt qua điện thoại, fax không được áp dụng.',
      structure: [['Mở đầu', 'Chào hỏi'], ['Đoạn 1', 'Nội dung ưu đãi + điều kiện'], ['Đoạn 2', 'Giới hạn số phòng + なお: không áp dụng điện thoại, fax']],
      grammar: [
        ['〜ております', 'Đang… (khiêm nhường)', 'サービスを行っております'],
        ['ご〜になれる', 'Quý khách có thể… (tôn kính)', 'ご利用になれるお部屋'],
        ['〜ですので', 'Vì… (lịch sự)', '10室だけですので'],
        ['〜の場合は', 'Trong trường hợp…', '電話、ファックスでご予約の場合は']
      ],
      tip: 'Mỗi lựa chọn trộn sai một chi tiết: đối tượng giảm (tiền phòng ↔ bữa sáng), mức ưu đãi (10% ↔ miễn phí), điều kiện (予約 ↔ 泊まる), kênh đặt (mạng ↔ điện thoại). Đối chiếu từng chi tiết.'
    },

    {
      id: '4-3',
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{駅|えき}{前|まえ}の@kousaten({交差点|こうさてん})の@shingou({信号|しんごう})は{赤|あか}になるのが{早|はや}く、{少|すこ}し{遅|おく}れると、@tochuu({途中|とちゅう})から{走|はし}って@wataru({渡|わた}ら)なければならないことも{多|おお}かった。', 'Đèn ở ngã tư trước ga chuyển đỏ rất nhanh, chậm một chút là thường phải chạy giữa chừng để qua đường.'],
          ['s2', 'しかし、{一|いっ}か{月|げつ}ぐらい{前|まえ}からは{走|はし}らなくても@jikannai({時間|じかん}{内|ない})に{渡|わた}れるようになった。', 'Nhưng khoảng một tháng nay, không chạy cũng qua kịp.'],
          ['s3', 'それで、{歩|ある}くのが{速|はや}くなったと{思|おも}って{喜|よろこ}んでいたのだが、{今朝|けさ}の{新聞|しんぶん}を{読|よ}んで{本当|ほんとう}の{理由|りゆう}がわかった。', 'Tôi cứ mừng vì nghĩ mình đi nhanh hơn, nhưng đọc báo sáng nay mới biết lý do thật.'],
          ['s4', 'あの@hokousha([歩行者|ほこうしゃ]){用|よう}{信号|しんごう}は{時間|じかん}{内|ない}に{渡|わた}れない{人|ひと}が{多|おお}かったので、@keisatsu([警察|けいさつ])が{青|あお}の{時間|じかん}を{少|すこ}し{長|なが}くしたのだそうだ。', 'Nghe nói vì nhiều người không qua kịp nên cảnh sát đã kéo dài thời gian đèn xanh cho người đi bộ.'],
          ['s5', 'それを{知|し}って、ちょっと‹@gakkari(がっかりして)しまった›。', 'Biết chuyện đó, tôi hơi thất vọng.']
        ] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '25',
        question: ['q1', '‹がっかりしてしまった›のはなぜか。', 'Vì sao lại thất vọng?'],
        options: [
          ['{自分|じぶん}では{歩|ある}くのが{速|はや}くなったと{思|おも}っていたが、{実|じつ}はそうではなかったから。', 'Vì tưởng mình đi nhanh hơn nhưng thật ra không phải.', 'Đúng. Tác giả mừng vì tưởng mình đi nhanh hơn, nhưng lý do thật là đèn xanh được kéo dài. Hóa ra mình không hề nhanh hơn.'],
          ['@sekkaku(せっかく){走|はし}って{渡|わた}れるようになったのに、その{必要|ひつよう}がなくなったから。', 'Vì khó khăn lắm mới chạy qua được thì lại không cần nữa.', 'Chưa đúng. Tác giả không hề muốn chạy. Trước đây phải chạy là vì đèn đổi đỏ nhanh.'],
          ['{自分|じぶん}は{時間|じかん}{内|ない}に{歩|ある}いて{渡|わた}れるのに、{歩行者|ほこうしゃ}{用|よう}{信号|しんごう}の{青|あお}の{時間|じかん}が{長|なが}くなったから。', 'Vì mình đi kịp mà đèn xanh lại bị kéo dài.', 'Chưa đúng. Trước khi đèn xanh được kéo dài, tác giả cũng không đi kịp, phải chạy.'],
          ['{警察|けいさつ}が、{歩行者|ほこうしゃ}{用|よう}{信号|しんごう}の{青|あお}の{時間|じかん}を{少|すこ}ししか{長|なが}くしてくれなかったから。', 'Vì cảnh sát chỉ kéo dài đèn xanh một chút.', 'Chưa đúng. Tác giả không phàn nàn về cảnh sát. Thất vọng là vì mình không thật sự đi nhanh hơn.']
        ],
        guide: 'Câu hỏi hỏi vì sao tác giả "hơi thất vọng". Bạn hãy so sánh suy nghĩ của tác giả với sự thật.\nSuy nghĩ của tác giả: trước đây phải chạy mới qua kịp đèn, nay đi bộ cũng kịp, nên 「歩くのが速くなったと思って喜んでいた」 – mừng vì nghĩ mình đi nhanh hơn.\nSự thật (đọc báo mới biết): 「警察が青の時間を少し長くしたのだそうだ」 – cảnh sát đã kéo dài thời gian đèn xanh.\nVậy qua kịp không phải vì mình đi nhanh hơn, mà vì đèn xanh dài hơn. Niềm vui hóa ra là hiểu lầm, nên thất vọng. Đáp án 1.',
        answer: 1, evidence: ['s3', 's4', 's5']
      }],
      summary: 'Đèn ngã tư trước ga đổi đỏ nhanh nên tác giả hay phải chạy. Một tháng nay đi bộ vẫn kịp, tác giả mừng vì nghĩ mình đi nhanh hơn, nhưng đọc báo mới biết cảnh sát đã kéo dài đèn xanh → thất vọng.',
      structure: [['Câu 1', 'Trước đây'], ['Câu 2–3', 'Thay đổi + hiểu lầm của tác giả'], ['Câu 4–5', 'Lý do thật → thất vọng']],
      grammar: [
        ['〜ようになった', 'Đã trở nên (có thể)…', '時間内に渡れるようになった'],
        ['〜のだが', 'Thì…, nhưng…', '喜んでいたのだが'],
        ['〜のだそうだ', 'Nghe nói là…', '青の時間を少し長くしたのだそうだ']
      ],
      tip: 'Cảm xúc tiêu cực sau khi "biết lý do thật" → so sánh suy nghĩ cũ (歩くのが速くなった) với sự thật. Đáp án = suy nghĩ cũ là sai.'
    },

    {
      id: '4-4',
      kind: '短文・記事',
      kindVi: 'Đoạn văn ngắn – bài tạp chí',
      style: 'essay',
      before: null,
      lead: ['l', 'これは、ある@zasshi([雑誌|ざっし])の[記事|きじ]である。', 'Đây là một bài báo trên tạp chí.'],
      blocks: [
        { t: 'p', s: [
          ['s1', 'ある@ankeeto(アンケート)で、{朝|あさ}、{歯|は}を@migaku([磨|みが]く){人|ひと}3,000{人|にん}に、[磨|みが]くのは「{食前|しょくぜん}」「{食後|しょくご}」「{食前|しょくぜん}と{食後|しょくご}」のどれかを{聞|き}いた。', 'Một khảo sát hỏi 3.000 người có đánh răng buổi sáng rằng họ đánh "trước ăn", "sau ăn" hay "cả trước và sau ăn".']
        ] },
        { t: 'p', s: [
          ['s2', '@seibetsu([性別|せいべつ])でみると、{男性|だんせい}も{女性|じょせい}も「{食後|しょくご}」に[磨|みが]く{人|ひと}が{最|もっと}も{多|おお}く（{男性|だんせい}64%、{女性|じょせい}72%）、{次|つぎ}は、{男性|だんせい}が「{食前|しょくぜん}」で、{女性|じょせい}が「{食前|しょくぜん}と{食後|しょくご}」だった。', 'Theo giới tính, cả nam lẫn nữ đều nhiều nhất là "sau ăn" (nam 64%, nữ 72%); kế đến nam là "trước ăn", nữ là "cả trước và sau".']
        ] },
        { t: 'p', s: [
          ['s3', '@nenrei([年齢|ねんれい])でみても、{各|かく}[年齢|ねんれい]で{一番|いちばん}{多|おお}いのはやはり「{食後|しょくご}」だった。', 'Theo độ tuổi, ở mọi lứa tuổi nhiều nhất vẫn là "sau ăn".'],
          ['s4', 'しかし、その@wariai({割合|わりあい})は、[年齢|ねんれい]が{高|たか}くなる@shitagatte(にしたがって)「{食後|しょくご}」が{減|へ}り、「{食前|しょくぜん}」が{増|ふ}えていく。', 'Tuy nhiên tỉ lệ đó thay đổi: tuổi càng cao thì "sau ăn" càng giảm, "trước ăn" càng tăng.'],
          ['s5', '@naruhodo(なるほど)、うちでは{私|わたし}と{両親|りょうしん}は{食後|しょくご}に、@sofu([祖父|そふ])は{食前|しょくぜん}に[磨|みが]いている。', 'Thảo nào, nhà tôi thì tôi và bố mẹ đánh sau ăn, còn ông đánh trước ăn.']
        ] }
      ],
      notes: [], refs: {},
      questions: [{
        label: '26',
        question: ['q1', '{朝|あさ}の{歯|は}[磨|みが]きについて、この{文章|ぶんしょう}からわかることは{何|なに}か。', 'Về việc đánh răng buổi sáng, bài cho biết điều gì?'],
        options: [
          ['{男性|だんせい}は「{食前|しょくぜん}」に[磨|みが]く{人|ひと}が「{食後|しょくご}」に[磨|みが]く{人|ひと}より{多|おお}い。', 'Nam đánh trước ăn nhiều hơn sau ăn.', 'Chưa đúng. Với nam, "sau ăn" đứng đầu (64%), "trước ăn" chỉ đứng thứ hai.'],
          ['{女性|じょせい}は「{食前|しょくぜん}と{食後|しょくご}」に[磨|みが]く{人|ひと}が「{食前|しょくぜん}」に[磨|みが]く{人|ひと}より{多|おお}い。', 'Nữ đánh cả trước và sau nhiều hơn chỉ trước ăn.', 'Đúng. Với nữ, nhiều nhất là "sau ăn", thứ hai là "cả trước và sau", nên nhóm này nhiều hơn nhóm "trước ăn".'],
          ['{性別|せいべつ}に{関係|かんけい}なく、「{食前|しょくぜん}」に{歯|は}を[磨|みが]いている{人|ひと}が60%{以上|いじょう}いる。', 'Bất kể giới tính, trên 60% đánh trước ăn.', 'Chưa đúng. Trên 60% là nhóm "sau ăn" (nam 64%, nữ 72%), không phải "trước ăn".'],
          ['[年齢|ねんれい]が{高|たか}くなると、「{食後|しょくご}」に[磨|みが]く{人|ひと}より「{食前|しょくぜん}」に[磨|みが]く{人|ひと}が{多|おお}くなる。', 'Tuổi càng cao thì người đánh trước ăn nhiều hơn người đánh sau ăn.', 'Chưa đúng. Tỉ lệ "trước ăn" tăng theo tuổi, nhưng ở mọi lứa tuổi "sau ăn" vẫn nhiều nhất, nên "trước ăn" chưa nhiều hơn "sau ăn".']
        ],
        guide: 'Câu hỏi hỏi bài cho biết điều gì về giờ đánh răng buổi sáng. Với bài số liệu, hãy ghi lại thứ hạng của từng nhóm:\n- Nam: nhiều nhất là "sau ăn" (64%), thứ hai là "trước ăn".\n- Nữ: nhiều nhất là "sau ăn" (72%), thứ hai là "cả trước và sau".\n- Theo tuổi: ở MỌI lứa tuổi, "sau ăn" vẫn nhiều nhất (各年齢で一番多いのはやはり「食後」). Chỉ có tỉ lệ là thay đổi: tuổi càng cao thì "sau ăn" giảm, "trước ăn" tăng.\nLựa chọn 2: với nữ, "cả trước và sau" đứng thứ hai, nên nhiều hơn "trước ăn". Đúng.\nLựa chọn 4 là bẫy lớn nhất: tỉ lệ "trước ăn" có TĂNG theo tuổi, nhưng bài nói ở mọi lứa tuổi "sau ăn" vẫn đứng đầu, nên "trước ăn" chưa bao giờ nhiều hơn "sau ăn".\nMẹo: phân biệt "tỉ lệ tăng dần" với "vượt lên đứng đầu". Tăng chưa chắc đã vượt.',
        answer: 2, evidence: ['s2']
      }],
      summary: 'Khảo sát 3.000 người về giờ đánh răng buổi sáng: cả nam và nữ nhiều nhất là sau ăn (nam 64%, nữ 72%); thứ hai, nam là trước ăn, nữ là cả trước và sau. Ở mọi lứa tuổi "sau ăn" vẫn nhiều nhất, nhưng tuổi càng cao thì tỉ lệ "trước ăn" càng tăng – giống gia đình tác giả (ông đánh trước ăn).',
      structure: [['Đoạn 1', 'Nội dung khảo sát'], ['Đoạn 2', 'Theo giới tính'], ['Đoạn 3', 'Theo tuổi + ví dụ gia đình']],
      grammar: [
        ['〜でみると', 'Xét theo…', '性別でみると・年齢でみても'],
        ['次は〜', 'Kế đến là…', '次は、男性が「食前」で、女性が「食前と食後」だった'],
        ['〜にしたがって', 'Càng… thì càng…', '年齢が高くなるにしたがって'],
        ['なるほど', 'Thảo nào, quả thật', 'なるほど、うちでは…']
      ],
      tip: 'Bài số liệu: chú ý "最も多い / 次は" và phân biệt "tỉ lệ tăng" với "vượt lên nhiều nhất". Câu "各年齢で一番多いのはやはり食後" loại lựa chọn 4.'
    },

    {
      id: '5-1',
      kind: '中文・随筆',
      kindVi: 'Đoạn văn trung bình – tùy bút về tiệm hoa',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{最近|さいきん}、@kinjo({近所|きんじょ})の{花屋|はなや}が@heiten([閉店|へいてん])した。', 'Gần đây, tiệm hoa gần nhà đã đóng cửa.'],
          ['s2', '30{年|ねん}{以上|いじょう}も「{町|まち}の{花屋|はなや}さん」として{愛|あい}されてきた{店|みせ}だ。', 'Đó là tiệm được yêu mến suốt hơn 30 năm như "tiệm hoa của khu phố".'],
          ['s3', 'この{店|みせ}がオープンしたのは、わたしがまだ{小学校|しょうがっこう}に{入|はい}る{前|まえ}だった。', 'Tiệm mở cửa khi tôi còn chưa vào tiểu học.'],
          ['s4', 'わたしにとって、‹①{店|みせ}の@omoide({思|おも}い{出|で})はそのまま{子|こ}どものころの{思|おも}い{出|で}と@kasanaru({重|かさ}なる)›。', 'Với tôi, kỷ niệm về tiệm cũng chính là kỷ niệm thời thơ ấu.'],
          ['s5', '{家族|かぞく}の{誕生日|たんじょうび}や{家|いえ}にお{客|きゃく}さんが{来|く}る{時|とき}などには、{母|はは}といっしょにこの{店|みせ}で{花|はな}を{買|か}っていた。', 'Vào sinh nhật người nhà hay khi nhà có khách, tôi cùng mẹ mua hoa ở tiệm này.']
        ] },
        { t: 'p', s: [
          ['s6', '{小学校|しょうがっこう}を@sotsugyou([卒業|そつぎょう])する{時|とき}には、こんなことがあった。', 'Khi tốt nghiệp tiểu học, đã có chuyện thế này.'],
          ['s7', 'クラス{全員|ぜんいん}でお{金|かね}を@dashiau({出|だ}し{合|あ}い)、@tannin([担任|たんにん])の{先生|せんせい}に@hanataba([花束|はなたば])をおくることになった。', 'Cả lớp góp tiền để tặng bó hoa cho cô giáo chủ nhiệm.'],
          ['s8', '「お@orei([礼|れい])の{気持|きも}ちを@arawasu({表|あらわ})すために、{見|み}たこともないほど{大|おお}きいのをおくろう」とわたしたちは{話|はな}し{合|あ}った。', 'Chúng tôi bàn: "Để thể hiện lòng biết ơn, tặng bó thật to chưa từng thấy đi".'],
          ['s9', 'しかし、{小学生|しょうがくせい}の@okozukai(おこづかい)の{中|なか}から{集|あつ}まったお{金|かね}は{少|すこ}しだけだった。', 'Nhưng tiền gom từ tiền tiêu vặt của học sinh tiểu học chỉ có chút ít.'],
          ['s10', 'それで、‹②わたしたちは@dokidoki(どきどきしながら)›、「{大好|だいす}きな{先生|せんせい}にあげるから、できるだけ{大|おお}きい{花束|はなたば}を{作|つく}ってください」とお{願|ねが}いした。', 'Vì thế, chúng tôi hồi hộp nhờ: "Để tặng cô giáo mà tụi cháu rất yêu quý, chú làm giúp bó hoa thật to nhất có thể ạ".'],
          ['s11', 'おじさんはいやな{顔|かお}もしないで、{特別|とくべつ}{大|おお}きなバラの{花束|はなたば}を{作|つく}ってくれた。', 'Chú chẳng hề tỏ vẻ khó chịu, làm cho chúng tôi một bó hoa hồng thật to.']
        ] },
        { t: 'p', s: [
          ['s12', '30{年|ねん}{以上|いじょう}もきれいな{花束|はなたば}を{作|つく}り{続|つづ}け、あたたかい{思|おも}い{出|で}を{作|つく}ってくれたおじさんに、「ありがとう、@otsukaresama(お[疲|つか]れ[様|さま])でした」と{言|い}いたい。', 'Tôi muốn nói với chú – người hơn 30 năm làm những bó hoa đẹp và tạo cho tôi những kỷ niệm ấm áp: "Cảm ơn chú, chú đã vất vả rồi".']
        ] }
      ],
      notes: [], refs: {},
      questions: [
        {
          label: '27',
          question: ['q1', '‹①{店|みせ}の{思|おも}い{出|で}はそのまま{子|こ}どものころの{思|おも}い{出|で}と{重|かさ}なる›とあるが、それはどんな{思|おも}い{出|で}か。', '"Kỷ niệm về tiệm trùng với kỷ niệm tuổi thơ" – đó là kỷ niệm gì?'],
          options: [
            ['わたしが{小学校|しょうがっこう}に{入学|にゅうがく}した{時|とき}に、この{花屋|はなや}が{開店|かいてん}したこと。', 'Tiệm khai trương khi tôi vào tiểu học.', 'Chưa đúng. Tiệm mở cửa khi tác giả còn CHƯA vào tiểu học (小学校に入る前), không phải đúng lúc vào tiểu học.'],
            ['{小学校|しょうがっこう}を[卒業|そつぎょう]する{時|とき}に、{先生|せんせい}といっしょにこの{花屋|はなや}で{花|はな}を{買|か}ったこと。', 'Khi tốt nghiệp, cùng cô giáo mua hoa ở tiệm.', 'Chưa đúng. Khi tốt nghiệp, cả lớp mua hoa để tặng cô giáo, chứ không đi mua cùng cô.'],
            ['{特別|とくべつ}なことがある{時|とき}には、よくこの{店|みせ}で{花|はな}を{買|か}っていたこと。', 'Khi có dịp đặc biệt hay mua hoa ở tiệm này.', 'Đúng. Sinh nhật người nhà, nhà có khách… là những dịp đặc biệt, và những lúc đó tác giả hay cùng mẹ mua hoa ở tiệm này.'],
            ['おじさんが{大好|だいす}きだったので、よくこの{店|みせ}で{花|はな}を{買|か}っていたこと。', 'Vì rất quý chú nên hay mua hoa ở đây.', 'Chưa đúng. Bài không nói tác giả mua hoa vì quý chú chủ tiệm. Kỷ niệm là mua hoa vào những dịp đặc biệt.']
          ],
          guide: 'Câu hỏi hỏi kỷ niệm về tiệm hoa trùng với kỷ niệm tuổi thơ là kỷ niệm gì. Câu ngay sau câu gạch chân trả lời: 「家族の誕生日や家にお客さんが来る時などには、母といっしょにこの店で花を買っていた」 – mỗi dịp sinh nhật người nhà hay nhà có khách, tôi cùng mẹ mua hoa ở tiệm này.\nSinh nhật, nhà có khách… đều là những dịp đặc biệt. Đáp án 3 tóm gọn lại: khi có dịp đặc biệt thì hay mua hoa ở tiệm này.\nHai bẫy: tiệm mở TRƯỚC khi tác giả vào tiểu học (không phải đúng lúc vào tiểu học), và khi tốt nghiệp thì mua hoa để TẶNG cô giáo chứ không đi cùng cô.',
          answer: 3, evidence: ['s4', 's5']
        },
        {
          label: '28',
          question: ['q2', '‹②わたしたちはどきどきしながら›とあるが、どうしてどきどきしたのか。', '"Hồi hộp" – vì sao?'],
          options: [
            ['もうすぐ[閉店|へいてん]する{花屋|はなや}のおじさんに、@muri({無理|むり}な)お{願|ねが}いをするから。', 'Vì nhờ việc khó với chú sắp đóng cửa tiệm.', 'Chưa đúng. Lúc đó tiệm chưa đóng cửa. Tiệm mới đóng cửa gần đây, hơn 30 năm sau.'],
            ['いやそうな{顔|かお}をしているおじさんに、{無理|むり}なお{願|ねが}いをするから。', 'Vì chú đang tỏ vẻ khó chịu.', 'Chưa đúng. Ngược lại, chú chủ tiệm "いやな顔もしないで" – không hề tỏ vẻ khó chịu.'],
            ['お{店|みせ}に{花|はな}があまりないのに、おじさんに{無理|むり}なお{願|ねが}いをするから。', 'Vì tiệm không có nhiều hoa.', 'Chưa đúng. Bài không nói tiệm thiếu hoa. Vấn đề là tiền gom được ít.'],
            ['お{金|かね}が{少|すこ}ししかないのに、おじさんに{無理|むり}なお{願|ねが}いをするから。', 'Vì ít tiền mà lại nhờ việc khó.', 'Đúng. Tiền gom được ít (少しだけ) mà lại muốn nhờ làm bó hoa thật to, nên bọn trẻ hồi hộp.']
          ],
          guide: 'Câu hỏi hỏi vì sao bọn trẻ hồi hộp. Hãy nhìn câu ngay trước câu gạch chân.\nBọn trẻ muốn tặng cô bó hoa 「見たこともないほど大きいの」 – to đến mức chưa ai thấy bao giờ. Nhưng 「小学生のおこづかいの中から集まったお金は少しだけだった」 – tiền gom được từ tiền tiêu vặt của học sinh tiểu học thì chỉ có chút ít. Chữ 「それで」 (vì thế) nối tiếp sang câu gạch chân.\nÍt tiền mà lại muốn nhờ làm bó hoa thật to, tức là một lời nhờ khó đáp ứng, nên hồi hộp không biết chú có đồng ý không. Đáp án 4.',
          answer: 4, evidence: ['s9', 's10']
        },
        {
          label: '29',
          question: ['q3', 'この{文章|ぶんしょう}を{書|か}いた{人|ひと}が{一番|いちばん}{伝|つた}えたいことは{何|なに}か。', 'Điều tác giả muốn truyền đạt nhất là gì?'],
          options: [
            ['{小学校|しょうがっこう}{時代|じだい}にとてもお{世話|せわ}になった{先生|せんせい}へのお[礼|れい]の{気持|き}ち。', 'Lòng biết ơn cô giáo thời tiểu học.', 'Chưa đúng. Chuyện tặng hoa cô giáo chỉ là một kỷ niệm minh họa. Người tác giả muốn cảm ơn là chú chủ tiệm.'],
            ['よい{思|おも}い{出|で}を{作|つく}ってくれた{花屋|はなや}のおじさんへの@kansha([感謝|かんしゃ])の{気持|き}ち。', 'Lòng biết ơn chú chủ tiệm hoa đã tạo nên kỷ niệm đẹp.', 'Đúng. Câu cuối là lời cảm ơn chú chủ tiệm hoa đã tạo ra những kỷ niệm ấm áp (あたたかい思い出を作ってくれた).'],
            ['{大好|だいす}きだった{花屋|はなや}さんが[閉店|へいてん]するので、さびしいという{気持|き}ち。', 'Buồn vì tiệm đóng cửa.', 'Chưa đúng. Bài không nhấn mạnh nỗi buồn. Đoạn cuối là lời cảm ơn.'],
            ['{近所|きんじょ}の{花屋|はなや}さんが[閉店|へいてん]したので、とても{不便|ふべん}だという{気持|き}ち。', 'Bất tiện vì tiệm đóng cửa.', 'Chưa đúng. Bài không nhắc đến sự bất tiện khi tiệm đóng cửa.']
          ],
          guide: 'Câu hỏi hỏi điều tác giả muốn truyền đạt nhất. Với tùy bút, điều tác giả muốn nói nhất thường nằm ở câu cuối.\nCâu cuối: 「30年以上もきれいな花束を作り続け、あたたかい思い出を作ってくれたおじさんに、『ありがとう、お疲れ様でした』と言いたい」 – tôi muốn nói "cảm ơn chú, chú đã vất vả rồi" với chú chủ tiệm, người hơn 30 năm làm những bó hoa đẹp và tạo cho tôi những kỷ niệm ấm áp.\nĐó là lòng biết ơn với chú chủ tiệm hoa. Đáp án 2.\nKỷ niệm tặng hoa cô giáo chỉ là một câu chuyện minh họa, không phải thông điệp chính.',
          answer: 2, evidence: ['s12']
        }
      ],
      summary: 'Tiệm hoa gần nhà, được yêu mến hơn 30 năm, vừa đóng cửa. Kỷ niệm về tiệm gắn với tuổi thơ: cùng mẹ mua hoa mỗi dịp đặc biệt. Khi tốt nghiệp tiểu học, cả lớp góp ít tiền mà hồi hộp nhờ chú làm bó hoa thật to tặng cô giáo; chú vui vẻ làm bó hồng rất to. Tác giả muốn cảm ơn chú.',
      structure: [['Đoạn 1', 'Tiệm đóng cửa + kỷ niệm tuổi thơ (①)'], ['Đoạn 2', 'Chuyện bó hoa tốt nghiệp (②)'], ['Đoạn 3', 'Lời cảm ơn → thông điệp chính']],
      grammar: [
        ['〜として', 'Với tư cách là…', '「町の花屋さん」として愛されてきた'],
        ['〜にとって', 'Đối với…', 'わたしにとって'],
        ['〜ほど', 'Đến mức…', '見たこともないほど大きい'],
        ['〜ないで', 'Mà không…', 'いやな顔もしないで'],
        ['〜続ける', 'Tiếp tục…', '花束を作り続け']
      ],
      tip: 'Câu hỏi "一番伝えたいこと" của tùy bút → câu cuối bài (〜と言いたい / 〜と思う).'
    },

    {
      id: '5-2',
      srcNotes: ['Câu 2 trong đề in 「暑い夏に食べること、体が涼しくなるし」 – thiếu nghĩa; hiểu đúng là 「食べると」 (ăn vào thì…). Bài đã sửa.', 'Câu 32, lựa chọn 2 đề in 「みんな氷がまんしていた」 – thiếu trợ từ; hiểu đúng là 「氷でがまんしていた」 (đành chịu ăn đá). Bài đã sửa.'],
      kind: '中文・説明文',
      kindVi: 'Đoạn văn trung bình – văn giải thích',
      style: 'essay',
      before: null, lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', 'あなたはアイスクリームが{好|す}きですか。', 'Bạn có thích kem không?'],
          ['s2', '{甘|あま}くて{冷|つめ}たいアイスクリームは{暑|あつ}い{夏|なつ}に{食|た}べると、{体|からだ}が@suzushii({涼|すず}しく)なるし、{寒|さむ}い{冬|ふゆ}に{暖|あたた}かい{部屋|へや}で{食|た}べるのも、おいしいものです。', 'Kem ngọt và lạnh, ăn vào mùa hè nóng thì mát người, ăn trong phòng ấm vào mùa đông lạnh cũng ngon.'],
          ['s3', '{今|いま}ではアイスクリームは{一年|いちねん}{中|じゅう}いつでも{食|た}べられますが、‹①{面白|おもしろ}いのは›、{夏|なつ}と{冬|ふゆ}ではよく{売|う}れるアイスの@shurui({種類|しゅるい})が{違|ちが}うことです。', 'Bây giờ quanh năm lúc nào cũng ăn được kem, nhưng điều thú vị là loại kem bán chạy ở mùa hè và mùa đông khác nhau.'],
          ['s4', '{夏|なつ}にはレモン{味|あじ}のシャーベットなどが、{冬|ふゆ}にはチョコレート{味|あじ}などの@koi([濃|こ]い){味|あじ}のものがよく{売|う}れるそうです。', 'Nghe nói mùa hè bán chạy kem que vị chanh, mùa đông bán chạy loại vị đậm như sô-cô-la.']
        ] },
        { t: 'p', s: [
          ['s5', 'アイスクリームは150{年|ねん}くらい{前|まえ}から{食|た}べられるようになったのですが、{実|じつ}は、{日本|にほん}で「@kouri([氷|こおり])」を{楽|たの}しむ@shuukan([習慣|しゅうかん])は10@seiki([世紀|せいき])には{始|はじ}まっていたようです。', 'Kem mới được ăn từ khoảng 150 năm trước, nhưng thật ra thói quen thưởng thức "đá" ở Nhật có vẻ đã bắt đầu từ thế kỷ 10.']
        ] },
        { t: 'p', s: [
          ['s6', 'そのころは、{冬|ふゆ}に{作|つく}った[氷|こおり]を、「@himuro([氷室|ひむろ])」と{呼|よ}ばれる{特別|とくべつ}な{部屋|へや}に{運|はこ}んで、@tokeru(とけ)ないようにしておきました。', 'Thời đó, người ta mang đá làm vào mùa đông vào căn phòng đặc biệt gọi là "himuro" để giữ cho không tan.'],
          ['s7', '{夏|なつ}になると、そこから{大|おお}きな[氷|こおり]を{取|と}り{出|だ}して{町|まち}まで{運|はこ}びます。', 'Đến mùa hè, họ lấy những tảng đá lớn từ đó ra chở về phố.'],
          ['s8', '{町|まち}までは{遠|とお}く、{運|はこ}ぶ{間|あいだ}に{少|すこ}しずつとけて{小|ちい}さくなりますから、‹②[氷|こおり]はとても{大事|だいじ}なものでした›。', 'Đường về phố xa, trong lúc chở đá tan dần và nhỏ lại, nên đá là thứ rất quý.'],
          ['s9', 'そのころは[氷|こおり]を@kezuru(けずって)、さとう{水|みず}をかけて{食|た}べていました。', 'Thời đó người ta bào đá, rưới nước đường lên ăn.'],
          ['s10', '{今|いま}とは{違|ちが}い、‹③{夏|なつ}の[氷|こおり]は{特別|とくべつ}な@gochisou(ごちそう)だったのでしょう›。', 'Khác với bây giờ, chắc đá mùa hè là món ngon đặc biệt.']
        ] }
      ],
      notes: [], refs: {},
      questions: [
        {
          label: '30',
          question: ['q1', '‹①{面白|おもしろ}いのは›とあるが、{筆者|ひっしゃ}はどこにその{原因|げんいん}があると{考|かんが}えているか。', '"Điều thú vị là" – tác giả cho rằng cái thú vị nằm ở đâu?'],
          options: [
            ['{暑|あつ}い{夏|なつ}に{冷|つめ}たいものを{食|た}べると、{体|からだ}が{涼|すず}しく{感|かん}じるから。', 'Ăn lạnh mùa hè thấy mát.', 'Chưa đúng. Đây là câu dẫn dắt ở đầu bài, không phải điều tác giả thấy thú vị.'],
            ['{寒|さむ}い{冬|ふゆ}に{冷|つめ}たいものを{食|た}べると、おいしく{感|かん}じられるから。', 'Ăn lạnh mùa đông thấy ngon.', 'Chưa đúng. Đây cũng là câu dẫn dắt, nói về cái ngon của kem mùa đông.'],
            ['@kisetsu([季節|きせつ])に{関係|かんけい}なく{一年|いちねん}{中|じゅう}アイスクリームが{売|う}られているから。', 'Kem bán quanh năm.', 'Chưa đúng. "Kem bán quanh năm" nằm ở vế trước chữ "が" – là điều ai cũng biết. Điều thú vị nằm ở vế sau.'],
            ['よく{売|う}れるアイスクリームの{種類|しゅるい}は[季節|きせつ]によって{違|ちが}うから。', 'Loại kem bán chạy khác nhau theo mùa.', 'Đúng. Sau 「面白いのは」 tác giả nói loại kem bán chạy mùa hè và mùa đông khác nhau.']
          ],
          guide: 'Câu hỏi hỏi điều "thú vị" (面白いのは) mà tác giả nói đến là gì. Câu có phần gạch chân viết: 「今ではアイスクリームは一年中いつでも食べられますが、面白いのは、夏と冬ではよく売れるアイスの種類が違うことです」.\nMẫu 「AがBますが、面白いのは〜ことです」 nghĩa là: A thì ai cũng biết, nhưng điều thú vị là… Phần sau 「面白いのは」 mới là điều tác giả thấy thú vị: loại kem bán chạy mùa hè và mùa đông khác nhau (hè: kem chanh; đông: vị đậm như sô-cô-la). Đáp án 4.\nCác lựa chọn 1, 2, 3 đều là những câu dẫn dắt ở đầu bài, không phải điều thú vị.',
          answer: 4, evidence: ['s3', 's4']
        },
        {
          label: '31',
          question: ['q2', '‹②[氷|こおり]はとても{大事|だいじ}なものでした›とあるが、それはどうしてか。', '"Đá là thứ rất quý" – vì sao?'],
          options: [
            ['{冬|ふゆ}に{特別|とくべつ}な{部屋|へや}で{作|つく}った[氷|こおり]だったし、とけないように{運|はこ}ぶのも{大変|たいへん}だったから。', 'Vì làm trong phòng đặc biệt, chở không tan cũng vất vả.', 'Chưa đúng. Đá được làm vào mùa đông rồi CẤT trong phòng đặc biệt. Phòng đó không phải nơi làm ra đá.'],
            ['{冬|ふゆ}に{作|つく}った[氷|こおり]は{特別|とくべつ}な{味|あじ}がしたし、{時間|じかん}がたつととけてなくなってしまうから。', 'Vì có vị đặc biệt, để lâu sẽ tan hết.', 'Chưa đúng. Bài không nói đá có vị đặc biệt.'],
            ['{夏|なつ}に{作|つく}った[氷|こおり]はとてもめずらしかったし、{暑|あつ}さですぐとけてしまうものだったから。', 'Vì đá làm vào mùa hè rất hiếm.', 'Chưa đúng. Đá được làm vào mùa ĐÔNG, không phải mùa hè.'],
            ['{夏|なつ}の[氷|こおり]はめずらしかったし、{町|まち}まで{運|はこ}ぶ{途中|とちゅう}でとけて{小|ちい}さくなってしまうから。', 'Vì đá mùa hè hiếm, lại tan nhỏ dần trên đường chở về phố.', 'Đúng. Đá mùa hè hiếm, lại tan nhỏ dần trên đường chở về phố (運ぶ間に少しずつとけて小さくなります), nên rất quý.']
          ],
          guide: 'Câu hỏi hỏi vì sao ngày xưa đá rất quý. Đoạn 3 kể cách người xưa có đá vào mùa hè: làm đá vào mùa ĐÔNG, cất trong căn phòng đặc biệt gọi là 「氷室」 để không tan. Đến hè mới lấy ra chở về phố.\nRồi đến lý do, có đuôi 「〜から」: 「町までは遠く、運ぶ間に少しずつとけて小さくなりますから」 – đường về phố xa, trong lúc chở đá tan dần và nhỏ lại. Vì vậy đá mùa hè rất hiếm, rất quý. Đáp án 4.\nHai bẫy: đá được làm vào mùa ĐÔNG (không phải mùa hè), và phòng đặc biệt dùng để CẤT đá (không phải để làm đá).',
          answer: 4, evidence: ['s6', 's7', 's8']
        },
        {
          label: '32',
          question: ['q3', '‹③{夏|なつ}の[氷|こおり]は{特別|とくべつ}なごちそうだったのでしょう›とあるが、ここで{言|い}いたいことはどのようなことか。', '"Đá mùa hè là món ngon đặc biệt" – muốn nói điều gì?'],
          options: [
            ['[氷|こおり]は{昔|むかし}は{冬|ふゆ}の{食|た}べ{物|もの}だったので、{夏|なつ}に{食|た}べることはとてもめずらしいことだった。', 'Đá xưa là đồ ăn mùa đông nên ăn vào hè rất hiếm.', 'Chưa đúng. Bài không nói đá là món ăn mùa đông. Đá được làm vào mùa đông nhưng để dành ăn vào mùa hè.'],
            ['まだアイスクリームを{買|か}うことは{難|むずか}しかったので、みんな[氷|こおり]でがまんしていた。', 'Chưa mua được kem nên đành chịu ăn đá.', 'Chưa đúng. Bài không so sánh với kem. Ý chính là đá mùa hè hiếm, không phải thứ ăn thường ngày.'],
            ['{暑|あつ}い{夏|なつ}に[氷|こおり]を{食|た}べて{涼|すず}しさを{感|かん}じることは、@nichijouteki([日常的|にちじょうてき])にできることではなかった。', 'Ăn đá giải nhiệt mùa hè không phải việc làm được thường ngày.', 'Đúng. "Khác với bây giờ" (今とは違い), ngày xưa ăn đá cho mát vào mùa hè là chuyện đặc biệt, không phải ngày nào cũng làm được.'],
            ['{涼|すず}しくなるように[氷|こおり]を{食|た}べることは、そのころ{人々|ひとびと}がよくやっていたことだった。', 'Ăn đá giải nhiệt là việc người ta hay làm.', 'Chưa đúng. Ngược nghĩa với chữ "特別" (đặc biệt): nếu ai cũng hay ăn thì đâu còn đặc biệt.']
          ],
          guide: 'Câu hỏi hỏi câu "đá mùa hè là món ngon đặc biệt" muốn nói gì. Chữ quan trọng là 「今とは違い」 – khác với bây giờ.\nBây giờ, mùa hè muốn ăn đá lạnh thì dễ dàng, ngày nào cũng ăn được. Ngày xưa thì khác: đá phải cất từ mùa đông, chở đường xa, tan dần, nên rất hiếm. Vì vậy được ăn đá mùa hè là chuyện "đặc biệt", không phải chuyện thường ngày.\nĐáp án 3: ăn đá cho mát vào mùa hè không phải việc làm được hằng ngày.\nMẹo: khi thấy 「今とは違い」, hãy nghĩ xem bây giờ như thế nào, rồi đảo ngược lại cho ngày xưa.',
          answer: 3, evidence: ['s8', 's10']
        }
      ],
      summary: 'Kem ăn được quanh năm, nhưng thú vị là loại bán chạy khác nhau theo mùa (hè: kem chanh; đông: vị đậm). Ở Nhật, thói quen ăn đá có từ thế kỷ 10: đá làm mùa đông được cất trong "himuro", hè mang ra chở về phố, trên đường tan dần nên rất quý. Đá bào rưới nước đường là món ngon đặc biệt mùa hè, khác hẳn bây giờ.',
      structure: [['Đoạn 1', 'Kem ngày nay + điều thú vị (①)'], ['Đoạn 2', 'Chuyển sang lịch sử ăn đá'], ['Đoạn 3', 'Himuro, đá quý (②) → món đặc biệt (③)']],
      grammar: [
        ['〜し、〜も', 'Vừa… mà… cũng', '体が涼しくなるし、…食べるのも、おいしい'],
        ['面白いのは〜ことです', 'Điều thú vị là…', '面白いのは、…種類が違うことです'],
        ['〜と呼ばれる', 'Được gọi là…', '「氷室」と呼ばれる特別な部屋'],
        ['〜ないようにしておく', 'Để sẵn sao cho không…', 'とけないようにしておきました'],
        ['〜のでしょう', 'Có lẽ là…', '特別なごちそうだったのでしょう']
      ],
      tip: 'Câu "〜ますが、面白いのは〜" → ý chính ở sau "が". Câu ③ có "今とは違い": hiểu ngược với hiện nay (ăn đá dễ dàng) → hồi đó không phải chuyện thường ngày.'
    }
  ]
};
