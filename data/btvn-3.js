/* Bài tập về nhà 3 — 問題45, 52, 54 (chọn ngẫu nhiên). Cú pháp đánh dấu: xem data/bai-1.js. */
window.BAI = {
  id: 'btvn-3',
  title: 'Bài tập về nhà 3',
  subtitle: 'Văn giải thích dài · Quảng cáo giảm giá · Tin cho thuê căn hộ',

  vocab: {
    // 問題45
    tetsudou: { w: '鉄道', r: 'てつどう', hv: 'THIẾT ĐẠO', vi: 'đường sắt' },
    seikaku: { w: '正確', r: 'せいかく', hv: 'CHÍNH XÁC', vi: 'chính xác' },
    kankeisuru: { w: '関係する', r: 'かんけいする', hv: 'QUAN HỆ', vi: 'liên quan' },
    hitobito: { w: '人々', r: 'ひとびと', hv: 'NHÂN NHÂN', vi: 'mọi người, những người' },
    doryoku: { w: '努力', r: 'どりょく', hv: 'NỖ LỰC', vi: 'nỗ lực' },
    kakasenai: { w: '欠かせない', r: 'かかせない', hv: 'KHIẾM', vi: 'không thể thiếu' },
    ressha: { w: '列車', r: 'れっしゃ', hv: 'LIỆT XA', vi: 'đoàn tàu' },
    souji: { w: '掃除', r: 'そうじ', hv: 'TẢO TRỪ', vi: 'dọn dẹp, làm vệ sinh' },
    shinkansen: { w: '新幹線', r: 'しんかんせん', hv: 'TÂN CÁN TUYẾN', vi: 'tàu cao tốc Shinkansen' },
    baai: { w: '場合', r: 'ばあい', hv: 'TRƯỜNG HỢP', vi: 'trường hợp' },
    ryou: { w: '〜両', r: 'りょう', hv: 'LƯỠNG', vi: '… toa (đếm toa tàu)' },
    tantou: { w: '担当する', r: 'たんとうする', hv: 'ĐẢM ĐƯƠNG', vi: 'phụ trách' },
    seki: { w: '〜席', r: 'せき', hv: 'TỊCH', vi: '… ghế, chỗ ngồi' },
    futsuu: { w: '普通', r: 'ふつう', hv: 'PHỔ THÔNG', vi: 'thông thường' },
    okureru: { w: '遅れる', r: 'おくれる', hv: 'TRÌ', vi: 'trễ, chậm' },
    joukyaku: { w: '乗客', r: 'じょうきゃく', hv: 'THỪA KHÁCH', vi: 'hành khách' },
    meiwaku: { w: '迷惑をかける', r: 'めいわくをかける', hv: 'MÊ HOẶC', vi: 'gây phiền' },
    shuppatsujikoku: { w: '出発時刻', r: 'しゅっぱつじこく', hv: 'XUẤT PHÁT THỜI KHẮC', vi: 'giờ khởi hành' },
    okuraseru: { w: '遅らせる', r: 'おくらせる', hv: 'TRÌ', vi: 'làm chậm lại' },
    tantousha: { w: '担当者', r: 'たんとうしゃ', hv: 'ĐẢM ĐƯƠNG GIẢ', vi: 'người phụ trách' },
    shanai: { w: '車内', r: 'しゃない', hv: 'XA NỘI', vi: 'trong toa tàu' },
    aku: { w: '空く', r: 'あく', hv: 'KHÔNG', vi: 'trống, rỗng', note: '空いたペットボトル = chai nhựa đã uống hết' },
    kan: { w: '缶', r: 'かん', hv: 'PHẪU', vi: 'lon' },
    zaseki: { w: '座席', r: 'ざせき', hv: 'TỌA TỊCH', vi: 'ghế ngồi' },
    semotare: { w: '背もたれ', r: 'せもたれ', hv: 'BỐI', vi: 'lưng ghế' },
    nuno: { w: '布', r: 'ぬの', hv: 'BỐ', vi: 'tấm vải' },
    torihazusu: { w: '取り外す', r: 'とりはずす', hv: 'THỦ NGOẠI', vi: 'tháo ra' },
    moto: { w: '元', r: 'もと', hv: 'NGUYÊN', vi: 'ban đầu, như cũ' },
    ichi: { w: '位置', r: 'いち', hv: 'VỊ TRÍ', vi: 'vị trí' },
    modosu: { w: '戻す', r: 'もどす', hv: 'LỆ', vi: 'trả về (chỗ cũ)' },
    houki: { w: 'ほうき', r: 'ほうき', hv: '', vi: 'cái chổi' },
    hijikake: { w: 'ひじかけ', r: 'ひじかけ', hv: '', vi: 'tay vịn ghế' },
    kagami: { w: '鏡', r: 'かがみ', hv: 'KÍNH', vi: 'cái gương' },
    wasuremono: { w: '忘れ物', r: 'わすれもの', hv: 'VONG VẬT', vi: 'đồ bỏ quên' },
    kakunin: { w: '確認する', r: 'かくにんする', hv: 'XÁC NHẬN', vi: 'kiểm tra, xác nhận' },
    saigo: { w: '最後に', r: 'さいごに', hv: 'TỐI HẬU', vi: 'cuối cùng' },
    yuka: { w: '床', r: 'ゆか', hv: 'SÀNG', vi: 'sàn nhà' },
    haku: { w: '掃く', r: 'はく', hv: 'TẢO', vi: 'quét' },
    jikannai: { w: '時間内', r: 'じかんない', hv: 'THỜI GIAN NỘI', vi: 'trong thời gian quy định' },
    shufu: { w: '主婦', r: 'しゅふ', hv: 'CHỦ PHỤ', vi: 'nội trợ' },
    chigau: { w: '違う', r: 'ちがう', hv: 'VI', vi: 'khác' },
    kizukasareru: { w: '気づかされる', r: 'きづかされる', hv: 'KHÍ', vi: 'được (khiến) nhận ra' },
    kyuujitsu: { w: '休日', r: 'きゅうじつ', hv: 'HƯU NHẬT', vi: 'ngày nghỉ' },
    jitaku: { w: '自宅', r: 'じたく', hv: 'TỰ TRẠCH', vi: 'nhà riêng' },
    ima: { w: '居間', r: 'いま', hv: 'CƯ GIAN', vi: 'phòng khách' },
    naraberu: { w: '並べる', r: 'ならべる', hv: 'TỊNH', vi: 'xếp hàng, bày' },
    hakaru: { w: '計る', r: 'はかる', hv: 'KẾ', vi: 'đo, bấm (giờ)' },
    renshuu: { w: '練習', r: 'れんしゅう', hv: 'LUYỆN TẬP', vi: 'luyện tập' },
    nokori: { w: '残り', r: 'のこり', hv: 'TÀN', vi: 'phần còn lại' },
    mitomeru: { w: '認める', r: 'みとめる', hv: 'NHẬN', vi: 'công nhận' },
    shain: { w: '社員', r: 'しゃいん', hv: 'XÃ VIÊN', vi: 'nhân viên chính thức' },
    sagyouchou: { w: '作業長', r: 'さぎょうちょう', hv: 'TÁC NGHIỆP TRƯỞNG', vi: 'trưởng nhóm tác nghiệp' },
    shidou: { w: '指導する', r: 'しどうする', hv: 'CHỈ ĐẠO', vi: 'hướng dẫn, chỉ đạo' },
    kanrishoku: { w: '管理職', r: 'かんりしょく', hv: 'QUẢN LÝ CHỨC', vi: 'chức vụ quản lý' },
    izen: { w: '以前', r: 'いぜん', hv: 'DĨ TIỀN', vi: 'trước đây' },
    taifuu: { w: '台風', r: 'たいふう', hv: 'ĐÀI PHONG', vi: 'bão' },
    saiteigen: { w: '最低限', r: 'さいていげん', hv: 'TỐI ĐÊ HẠN', vi: 'mức tối thiểu' },
    hitsuyou: { w: '必要', r: 'ひつよう', hv: 'TẤT YẾU', vi: 'cần thiết' },
    sagyou: { w: '作業', r: 'さぎょう', hv: 'TÁC NGHIỆP', vi: 'công việc, thao tác' },
    fuan: { w: '不安', r: 'ふあん', hv: 'BẤT AN', vi: 'lo lắng, bất an' },
    osaeru: { w: 'おさえる（抑える）', r: 'おさえる', hv: 'ỨC', vi: 'kìm nén' },
    komakaku: { w: '細かく', r: 'こまかく', hv: 'TẾ', vi: 'chi tiết, tỉ mỉ' },
    shiji: { w: '指示する', r: 'しじする', hv: 'CHỈ THỊ', vi: 'chỉ thị, ra lệnh' },
    torikaeru: { w: '取り替える', r: 'とりかえる', hv: 'THỦ THẾ', vi: 'thay' },
    keiken: { w: '経験', r: 'けいけん', hv: 'KINH NGHIỆM', vi: 'kinh nghiệm' },
    hassha: { w: '発車', r: 'はっしゃ', hv: 'PHÁT XA', vi: '(tàu, xe) xuất phát' },
    riyuu: { w: '理由', r: 'りゆう', hv: 'LÝ DO', vi: 'lý do' },
    kakutantousha: { w: '各担当者', r: 'かくたんとうしゃ', hv: 'CÁC ĐẢM ĐƯƠNG GIẢ', vi: 'từng người phụ trách' },
    atama: { w: '頭のいい', r: 'あたまのいい', hv: 'ĐẦU', vi: 'thông minh' },
    kanri: { w: '管理する', r: 'かんりする', hv: 'QUẢN LÝ', vi: 'quản lý' },
    inai: { w: '以内', r: 'いない', hv: 'DĨ NỘI', vi: 'trong vòng' },
    sharyou: { w: '車両', r: 'しゃりょう', hv: 'XA LƯỠNG', vi: 'toa tàu' },

    // 問題52
    benri: { w: '便利', r: 'べんり', hv: 'TIỆN LỢI', vi: 'tiện lợi' },
    otoku: { w: 'お得な', r: 'おとくな', hv: 'ĐẮC', vi: 'có lợi, hời' },
    waribiki: { w: '割引', r: 'わりびき', hv: 'CÁT DẪN', vi: 'giảm giá' },
    kikan: { w: '期間', r: 'きかん', hv: 'KỲ GIAN', vi: 'thời gian, thời hạn' },
    waribikiken: { w: '割引券', r: 'わりびきけん', hv: 'CÁT DẪN KHOÁN', vi: 'phiếu giảm giá' },
    shouhin: { w: '商品', r: 'しょうひん', hv: 'THƯƠNG PHẨM', vi: 'sản phẩm' },
    koukoku: { w: '広告', r: 'こうこく', hv: 'QUẢNG CÁO', vi: 'tờ quảng cáo' },
    kagiri: { w: '〜限り', r: 'かぎり', hv: 'HẠN', vi: 'chỉ giới hạn trong…', note: 'お一人様1枚限り = mỗi người chỉ 1 tờ' },
    ko: { w: '〜個', r: 'こ', hv: 'CÁ', vi: '… cái, chiếc' },
    riyou: { w: '利用する', r: 'りようする', hv: 'LỢI DỤNG', vi: 'sử dụng' },
    kakaku: { w: '価格', r: 'かかく', hv: 'GIÁ CÁCH', vi: 'giá' },
    biki: { w: '〜円引き', r: 'えんびき', hv: 'VIÊN DẪN', vi: 'giảm … yên' },
    harau: { w: '払う', r: 'はらう', hv: 'PHẤT', vi: 'trả (tiền)' },

    // 問題54
    jouhou: { w: '情報', r: 'じょうほう', hv: 'TÌNH BÁO', vi: 'thông tin' },
    genzai: { w: '現在', r: 'げんざい', hv: 'HIỆN TẠI', vi: 'hiện tại, tính đến' },
    toho: { w: '徒歩', r: 'とほ', hv: 'ĐỒ BỘ', vi: 'đi bộ' },
    chiku: { w: '築', r: 'ちく', hv: 'TRÚC', vi: '(nhà) đã xây được…', note: '築10年 = xây được 10 năm' },
    yachin: { w: '家賃', r: 'やちん', hv: 'GIA NHẪM', vi: 'tiền thuê nhà' },
    shikikin: { w: '敷金', r: 'しききん', hv: 'PHU KIM', vi: 'tiền đặt cọc (khi thuê nhà)' },
    reikin: { w: '礼金', r: 'れいきん', hv: 'LỄ KIM', vi: 'tiền lễ (tặng chủ nhà, không hoàn lại)' },
    minamimuki: { w: '南向き', r: 'みなみむき', hv: 'NAM HƯỚNG', vi: 'hướng Nam' },
    kaidate: { w: '〜階建て', r: 'かいだて', hv: 'GIAI KIẾN', vi: 'nhà … tầng' },
    tesuuryou: { w: '手数料', r: 'てすうりょう', hv: 'THỦ SỐ LIỆU', vi: 'phí môi giới, phí dịch vụ' },
    muryou: { w: '無料', r: 'むりょう', hv: 'VÔ LIỆU', vi: 'miễn phí' },
    keiyaku: { w: '契約', r: 'けいやく', hv: 'KHẾ ƯỚC', vi: 'hợp đồng, ký hợp đồng' },
    soudanka: { w: '相談可', r: 'そうだんか', hv: 'TƯƠNG ĐÀM KHẢ', vi: 'có thể thương lượng' },
    madorizu: { w: '間取り図', r: 'まどりず', hv: 'GIAN THỦ ĐỒ', vi: 'sơ đồ phòng' },
    hoshoukin: { w: '保証金', r: 'ほしょうきん', hv: 'BẢO CHỨNG KIM', vi: 'tiền bảo đảm' },
    ooyasan: { w: '大家さん', r: 'おおやさん', hv: 'ĐẠI GIA', vi: 'chủ nhà' },
    azukeru: { w: '預ける', r: 'あずける', hv: 'DỰ', vi: 'gửi (tiền, đồ) cho ai giữ' },
    shiharau: { w: '支払う', r: 'しはらう', hv: 'CHI PHẤT', vi: 'chi trả' },
    setsumei: { w: '説明', r: 'せつめい', hv: 'THUYẾT MINH', vi: 'mô tả, giải thích' },
    minamigawa: { w: '南側', r: 'みなみがわ', hv: 'NAM TRẮC', vi: 'phía Nam' },
    kau: { w: '飼う', r: 'かう', hv: 'TỰ', vi: 'nuôi (thú vật)' },
    furo: { w: 'お風呂', r: 'おふろ', hv: 'PHONG LỮ', vi: 'bồn tắm, phòng tắm' }
  },

  problems: [
    /* ───────────── 問題45 ───────────── */
    {
      id: '45',
      review: {
        pages: [125, 126], answerPage: 202,
        doubts: ['Chú thích 注3, 注4 của 問題45 có ghi 「イラスト参照」 (xem hình minh họa ghế tàu), và 問題54 có sơ đồ phòng. Trên web mình chưa chèn hình, chỉ giữ chữ (với 問題54 mình mô tả lại sơ đồ bằng chữ). Thầy/cô có muốn chèn ảnh cắt từ sách vào không?']
      },
      kind: '内容理解（長文）・説明文',
      kindVi: 'Đoạn văn dài – văn giải thích',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '{日本|にほん}の@tetsudou([鉄道|てつどう])は{時間|じかん}が@seikaku([正確|せいかく])なことで{有名|ゆうめい}だ。', 'Đường sắt Nhật Bản nổi tiếng vì đúng giờ.'],
          ['s2', 'それには[鉄道|てつどう]に@kankeisuru([関係|かんけい]する)@hitobito({人々|ひとびと})の@doryoku([努力|どりょく])が@kakasenai([欠|か]かせない)※1。', 'Để làm được điều đó, nỗ lực của những người làm việc trong ngành đường sắt là không thể thiếu.'],
          ['s3', '@ressha([列車|れっしゃ])の@souji([掃除|そうじ])もその{一|ひと}つである。', 'Việc dọn vệ sinh tàu cũng là một trong số đó.']
        ] },
        { t: 'p', s: [
          ['s4', '@shinkansen([新幹線|しんかんせん])の@baai([場合|ばあい])を{見|み}てみよう。', 'Hãy cùng xem trường hợp của tàu Shinkansen.'],
          ['s5', '16@ryou([両|りょう])の[新幹線|しんかんせん]ならゴミ{出|だ}しやトイレの[掃除|そうじ]なども{入|い}れて55{人|にん}が@tantou([担当|たんとう]する)。', 'Với tàu Shinkansen 16 toa, kể cả đổ rác và dọn nhà vệ sinh, có 55 người phụ trách.'],
          ['s6', '1[両|りょう]（63～100@seki([席|せき])）は@futsuu([普通|ふつう])、2{人|り}で[担当|たんとう]する。', 'Mỗi toa (63–100 ghế) thường do 2 người phụ trách.'],
          ['s7', '{時間|じかん}は10～12分。', 'Thời gian là 10–12 phút.'],
          ['s8', '@okureru([遅|おく]れる)と@joukyaku([乗客|じょうきゃく])に@meiwaku([迷惑|めいわく]をかけ)、@shuppatsujikoku({出発|しゅっぱつ}[時刻|じこく])も@okuraseru([遅|おく]らせて)しまう。', 'Nếu chậm sẽ gây phiền cho hành khách và làm trễ cả giờ khởi hành.']
        ] },
        { t: 'p', s: [
          ['s9', '@tantousha([担当者|たんとうしゃ])は@shanai([車内|しゃない])に{入|はい}ると、まず@aku({空|あ}いた)ペットボトル※2や@kan([缶|かん])を{集|あつ}め、@zaseki([座席|ざせき])の@semotare([背|せ]もたれ)※3にかかっている{白|しろ}い@nuno([布|ぬの])を@torihazusu([取|と]り[外|はず]す)。', 'Vào trong toa, người phụ trách trước tiên gom chai nhựa, lon rỗng, rồi tháo tấm vải trắng phủ trên lưng ghế.'],
          ['s10', '{次|つぎ}に[座席|ざせき]を@moto({元|もと})の@ichi([位置|いち])に@modosu([戻|もど]し)、{新|あたら}しい[布|ぬの]をつける。', 'Tiếp theo, đưa ghế về vị trí ban đầu và phủ tấm vải mới.'],
          ['s11', '@houki(ほうき)で[座席|ざせき]をきれいにし、@hijikake(ひじかけ)※4をふく。', 'Dùng chổi làm sạch ghế, lau tay vịn.'],
          ['s12', '@kagami([鏡|かがみ])を{使|つか}って、たなに@wasuremono([忘|わす]れ{物|もの})がないか@kakunin([確認|かくにん])する。', 'Dùng gương kiểm tra xem trên giá hành lý có đồ bỏ quên không.'],
          ['s13', '@saigo([最後|さいご]に)@yuka([床|ゆか])を@haku([掃|は]く)。', 'Cuối cùng quét sàn.'],
          ['s14', 'これを@jikannai({時間|じかん}[内|ない])で{終|お}わらせなければならない。', 'Phải làm xong tất cả trong thời gian quy định.']
        ] },
        { t: 'p', s: [
          ['s15', 'この{仕事|しごと}を12{年|ねん}{前|まえ}にパート※5{仕事|しごと}で{始|はじ}めた[安喰|あじき]さんは、それまで@shufu([主婦|しゅふ])をしていたが、{家|いえ}の[掃除|そうじ]とはまったく@chigau([違|ちが]う)ことに@kizukasareru({気|き}づかされた)。', 'Anh/chị Ajiki – người bắt đầu công việc này 12 năm trước dưới dạng làm bán thời gian, trước đó là nội trợ – đã nhận ra việc này hoàn toàn khác với dọn nhà.'],
          ['s16', 'そのため、@kyuujitsu({休日|きゅうじつ})に@jitaku([自宅|じたく])の@ima([居間|いま])にいすを@naraberu([並|なら]べて)、{時間|じかん}を@hakaru([計|はか]って)@renshuu({練習|れんしゅう})したそうだ。', 'Vì vậy, nghe nói vào ngày nghỉ, Ajiki xếp ghế trong phòng khách ở nhà và bấm giờ luyện tập.'],
          ['s17', '2{年|ねん}たつと、{時計|とけい}を{見|み}なくても@nokori([残|のこ]り){時間|じかん}がわかるようになった。', 'Sau 2 năm, Ajiki biết được thời gian còn lại mà không cần nhìn đồng hồ.'],
          ['s18', 'その{後|ご}、{仕事|しごと}が@mitomeru([認|みと]められて)@shain({社員|しゃいん})となり、8{年目|ねんめ}は@sagyouchou([作業長|さぎょうちょう])に、{今|いま}は550{人|にん}を@shidou([指導|しどう]する)@kanrishoku([管理職|かんりしょく])になった。', 'Sau đó, Ajiki được công nhận năng lực, trở thành nhân viên chính thức, năm thứ 8 làm trưởng nhóm, và nay là quản lý hướng dẫn 550 người.']
        ] },
        { t: 'p', s: [
          ['s19', '@izen([以前|いぜん])、@taifuu([台風|たいふう])のため[新幹線|しんかんせん]が[遅|おく]れて[掃除|そうじ]{時間|じかん}が4分しかないことがあった。', 'Trước đây, có lần vì bão nên tàu Shinkansen bị trễ, thời gian dọn chỉ còn 4 phút.'],
          ['s20', '@saiteigen([最低限|さいていげん])@hitsuyou([必要|ひつよう])な@sagyou([作業|さぎょう])をどうするか、@fuan({不安|ふあん})な{気持|きも}ちを@osaeru(おさえ)、[担当者|たんとうしゃ]を{集|あつ}めて@komakaku([細|こま]かく)@shiji([指示|しじ])した。', 'Kìm nén lo lắng, Ajiki tập hợp những người phụ trách và chỉ thị chi tiết xem làm những việc tối thiểu cần thiết như thế nào.'],
          ['s21', '[決|き]められた{時間|じかん}に{出発|しゅっぱつ}したときの‹①うれしさ›は[忘|わす]れられなかったという。', 'Nghe nói niềm vui khi tàu khởi hành đúng giờ quy định là điều Ajiki không thể quên.']
        ] },
        { t: 'p', s: [
          ['s22', 'このようにさまざまな{人々|ひとびと}のおかげで‹②[鉄道|てつどう]は[正確|せいかく]な{時間|じかん}に{走|はし}れる›のである。', 'Chính nhờ những con người như vậy mà đường sắt có thể chạy đúng giờ.']
        ] },
        { t: 'right', s: [['src', '（[朝日|あさひ]{新聞|しんぶん}[夕刊|ゆうかん]2011年9月5日より）', 'Theo báo Asahi Shimbun, số buổi chiều ngày 5/9/2011']] }
      ],
      notes: [
        '（注1）[欠|か]かせない：[必要|ひつよう]である。なくてはならない。',
        '（注2）ペットボトル：{飲|の}み{物|もの}を{入|い}れるプラスチックの{入|い}れもの',
        '（注3）[背|せ]もたれ：[座席|ざせき]の[背中|せなか]をささえる[部分|ぶぶん]（イラスト[参照|さんしょう]）',
        '（注4）ひじかけ：[座席|ざせき]の[腕|うで]を[休|やす]めることができる[部分|ぶぶん]（イラスト[参照|さんしょう]）',
        '（注5）パート：[普通|ふつう]よりも{短|みじか}い{時間|じかん}だけ{働|はたら}くこと'
      ],
      refs: {},
      questions: [
        {
          label: '問1',
          question: ['q1', '[新幹線|しんかんせん]の[掃除|そうじ]について、{本文|ほんぶん}と{合|あ}っているものはどれか。', 'Về việc dọn vệ sinh tàu Shinkansen, điều nào khớp với bài?'],
          options: [
            ['10～12分@inai([以内|いない])に、1{人|り}が1つの@sharyou([車両|しゃりょう])の[掃除|そうじ]をする。', 'Trong vòng 10–12 phút, 1 người dọn 1 toa.', 'Sai. Mỗi toa thường do 2 người phụ trách (câu 6).'],
            ['10～12分の{間|あいだ}に、ゴミ{出|だ}し、トイレや[車両|しゃりょう]の[掃除|そうじ]を{終|お}わらせる。', 'Trong 10–12 phút phải xong việc đổ rác, dọn nhà vệ sinh và dọn toa.', 'Đúng. Câu 5–7 và câu 14.'],
            ['[車両|しゃりょう]では、はじめに[忘|わす]れ{物|もの}がないか[確認|かくにん]して、[床|ゆか]を[掃除|そうじ]する。', 'Trong toa, trước tiên kiểm tra đồ bỏ quên rồi dọn sàn.', 'Sai. Việc đầu tiên là gom chai, lon và tháo vải; kiểm tra đồ bỏ quên là gần cuối.'],
            ['[車両|しゃりょう]の[座席|ざせき]をきれいにしてから、[背|せ]もたれの[布|ぬの]を@torikaeru([取|と]り[替|か]える)。', 'Làm sạch ghế rồi mới thay vải lưng ghế.', 'Sai. Thay vải trước, làm sạch ghế sau (câu 9–11).']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['s5', 's6', 's7', 's14']
        },
        {
          label: '問2',
          question: ['q2', '[安喰|あじき]さんは、どうして{仕事|しごと}がうまくできるようになったか。', 'Vì sao Ajiki làm việc giỏi lên?'],
          options: [
            ['[主婦|しゅふ]をしていて、その@keiken([経験|けいけん])が[新幹線|しんかんせん]の[掃除|そうじ]に[役|やく]に{立|た}ったから。', 'Vì kinh nghiệm làm nội trợ có ích cho việc dọn tàu.', 'Sai. Ajiki nhận ra việc này hoàn toàn khác với dọn nhà.'],
            ['{家|いえ}の[掃除|そうじ]とは[違|ちが]うのに{気|き}づき、{休|やす}みの{日|ひ}に{家|いえ}で{練習|れんしゅう}したから。', 'Vì nhận ra khác với dọn nhà, nên luyện tập ở nhà vào ngày nghỉ.', 'Đúng. Câu 15–16.'],
            ['{一緒|いっしょ}に{働|はたら}く{人|ひと}たちのやり{方|かた}を{見|み}て{仕事|しごと}をしていたから。', 'Vì vừa làm vừa xem cách làm của đồng nghiệp.', 'Sai. Bài không nói vậy.'],
            ['{早|はや}く{終|お}わらせるために、{時計|とけい}を{見|み}ないで{仕事|しごと}をしたから。', 'Vì không nhìn đồng hồ khi làm để xong nhanh.', 'Sai. Biết giờ mà không cần nhìn đồng hồ là KẾT QUẢ của việc luyện tập, không phải cách làm.']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['s15', 's16']
        },
        {
          label: '問3',
          question: ['q3', '‹①うれしさ›とあるが、{何|なに}がうれしかったのか。', '"Niềm vui" – Ajiki vui vì điều gì?'],
          options: [
            ['いつもほど{長|なが}く[掃除|そうじ]をしなくてもよかったこと', 'Không phải dọn lâu như mọi khi.', 'Sai. Không phải vui vì được làm ít.'],
            ['{短|みじか}い{時間|じかん}で{仕事|しごと}を{終|お}わらせ、{時間|じかん}どおりに@hassha([発車|はっしゃ])できたこと', 'Làm xong trong thời gian ngắn và tàu xuất phát đúng giờ.', 'Đúng. 「決められた時間に出発したときのうれしさ」 (câu 21).'],
            ['{時間|じかん}が{短|みじか}くても、いつもと{同|おな}じ[作業|さぎょう]が{全部|ぜんぶ}できたこと', 'Dù ít thời gian vẫn làm được hết mọi việc như thường lệ.', 'Sai. Chỉ làm những việc TỐI THIỂU cần thiết (最低限必要な作業).'],
            ['[台風|たいふう]でも[新幹線|しんかんせん]がいつもどおり{動|うご}いていて、[掃除|そうじ]ができたこと', 'Dù bão, tàu vẫn chạy bình thường nên dọn được.', 'Sai. Tàu bị trễ vì bão.']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['s19', 's20', 's21']
        },
        {
          label: '問4',
          question: ['q4', '‹②[鉄道|てつどう]が[正確|せいかく]な{時間|じかん}に{走|はし}れる›とあるが、その@riyuu({理由|りゆう})は{何|なに}か。', '"Đường sắt chạy đúng giờ" – lý do là gì?'],
          options: [
            ['[列車|れっしゃ]が[遅|おく]れないように@kakutantousha([各|かく][担当者|たんとうしゃ])が{仕事|しごと}をきちんとやろうとしているから。', 'Vì từng người phụ trách cố gắng làm tốt công việc để tàu không bị trễ.', 'Đúng. Bài mở đầu bằng 「人々の努力が欠かせない」 và kết bằng 「さまざまな人々のおかげで」.'],
            ['それぞれの{仕事|しごと}が[非常|ひじょう]に{多|おお}くの{人々|ひとびと}によって{行|おこな}われているから。', 'Vì mỗi công việc được rất nhiều người thực hiện.', 'Sai. Điều quan trọng là NỖ LỰC của mọi người, không phải số lượng người.'],
            ['{仕事|しごと}のやり{方|かた}が[細|こま]かく[決|き]められていて、だれでも{問題|もんだい}なくできるから。', 'Vì cách làm được quy định chi tiết, ai cũng làm được.', 'Sai. Bài cho thấy phải luyện tập nhiều mới làm tốt được.'],
            ['@atama({頭|あたま}のいい)[管理職|かんりしょく]が[担当者|たんとうしゃ]をうまく[指導|しどう]し、@kanri([管理|かんり])しているから。', 'Vì người quản lý thông minh hướng dẫn, quản lý tốt.', 'Sai. Bài không nói lý do là sự thông minh của người quản lý.']
          ],
          answer: 1,
          bookAnswer: 1,
          evidence: ['s2', 's22']
        }
      ],
      summary: 'Đường sắt Nhật nổi tiếng đúng giờ nhờ nỗ lực của nhiều người, trong đó có đội dọn vệ sinh tàu. Với Shinkansen 16 toa, 55 người dọn, mỗi toa 2 người, trong 10–12 phút, theo trình tự chặt chẽ. Ajiki – từng là nội trợ – nhận ra việc này khác hẳn dọn nhà nên tự luyện tập ở nhà, sau này trở thành quản lý 550 người. Có lần vì bão chỉ còn 4 phút, Ajiki chỉ đạo làm những việc tối thiểu và tàu vẫn chạy đúng giờ.',
      structure: [
        ['Đoạn 1', 'Đường sắt đúng giờ nhờ nỗ lực của con người'],
        ['Đoạn 2–3', 'Việc dọn Shinkansen: số người, thời gian, trình tự'],
        ['Đoạn 4', 'Câu chuyện của Ajiki: luyện tập, thăng tiến'],
        ['Đoạn 5', 'Lần chỉ còn 4 phút vì bão (①)'],
        ['Đoạn 6', 'Kết luận (②)']
      ],
      grammar: [
        ['〜ことで有名だ', 'Nổi tiếng vì…', '時間が正確なことで有名だ'],
        ['まず〜、次に〜、最後に〜', 'Trình tự công việc', ''],
        ['〜なければならない', 'Phải…', '時間内で終わらせなければならない'],
        ['〜させられる / 気づかされる', 'Bị/được khiến cho… (thể sai khiến bị động)', '家の掃除とはまったく違うことに気づかされた'],
        ['〜そうだ / 〜という', 'Nghe nói… (truyền đạt lại)', '練習したそうだ・忘れられなかったという'],
        ['〜おかげで', 'Nhờ…', 'さまざまな人々のおかげで']
      ],
      tip: 'Bài dài có nhiều con số (16 toa, 55 người, 2 người/toa, 10–12 phút): khi gặp lựa chọn có số, quay lại đúng câu chứa con số đó để đối chiếu. Với câu hỏi về trình tự, đánh dấu まず・次に・最後に.'
    },

    /* ───────────── 問題52 ───────────── */
    {
      id: '52',
      review: { pages: [139, 140], answerPage: 208, doubts: [] },
      kind: '情報検索・広告',
      kindVi: 'Tìm thông tin – quảng cáo',
      style: 'notice',
      before: null,
      lead: null,
      blocks: [
        { t: 'title', s: [['t1', 'Sマート（24hオープン）は{近|ちか}くて@benri([便利|べんり])！', 'S-Mart (mở cửa 24 giờ) gần và tiện lợi!']] },
        { t: 'lines', cls: 'gap', s: [
          ['a1', '6{月|がつ}の@otoku(お[得|とく]な)@waribiki([割引|わりびき])セール！　18{時|じ}～24{時|じ}だけ！', 'Đợt giảm giá hời tháng 6! Chỉ từ 18 đến 24 giờ!'],
          ['a2', 'セール@kikan([期間|きかん])：2014年　6月2日（{月|げつ}）～6月28日（{土|ど}）', 'Thời gian giảm giá: thứ Hai 2/6 – thứ Bảy 28/6/2014']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['a3', '＊{下|した}の@waribikiken([割引券|わりびきけん])は{切|き}って、かならず@shouhin([商品|しょうひん])と{一緒|いっしょ}にレジにお{出|だ}しください！', '＊ Hãy cắt phiếu giảm giá bên dưới và nhất định nộp ở quầy thu ngân cùng sản phẩm!'],
          ['a4', '＊この@koukoku({広告|こうこく})はお{一人|ひとり}[様|さま]1[枚|まい]@kagiri([限|かぎ]り)とさせていただきます。', '＊ Mỗi khách chỉ được dùng 1 tờ quảng cáo này.'],
          ['a5', '＊[割引券|わりびきけん]1[枚|まい]につき[商品|しょうひん]1@ko([個|こ])が[割引|わりびき]となります。', '＊ Mỗi phiếu giảm giá áp dụng cho 1 sản phẩm.'],
          ['a6', '＊お{店|みせ}によっては、[商品|しょうひん]がない[場合|ばあい]もあります。', '＊ Tùy cửa hàng, có thể không có sản phẩm.'],
          ['a7', '＊[割引券|わりびきけん]が@riyou([利用|りよう])できるのは、18{時|じ}～24{時|じ}です。', '＊ Phiếu giảm giá chỉ dùng được từ 18 đến 24 giờ.']
        ] },
        { t: 'table', head: ['2日（{月|げつ}）～14日（{土|ど}）', '2日（{月|げつ}）～14日（{土|ど}）', '15日（{日|にち}）～28日（{土|ど}）', '15日（{日|にち}）～28日（{土|ど}）'], rows: [
          ['c1', ['チョコレート', 'ドーナッツ', 'アイスクリーム', 'ホットコーヒー'], 'Phiếu 1: sô-cô-la · Phiếu 2: bánh donut (cùng 2–14/6) · Phiếu 3: kem · Phiếu 4: cà phê nóng (cùng 15–28/6)'],
          ['c2', ['{書|か}かれた@kakaku([価格|かかく])より30{円|えん}@biki([引|び]き)', '{書|か}かれた[価格|かかく]より20{円|えん}[引|び]き', '{書|か}かれた[価格|かかく]より20{円|えん}[引|び]き', '{書|か}かれた[価格|かかく]より30{円|えん}[引|び]き'], 'Giảm so với giá niêm yết: sô-cô-la 30 yên · donut 20 yên · kem 20 yên · cà phê 30 yên']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '問1',
          question: ['q1', 'アリさんは6月18日{午後|ごご}10{時|じ}[頃|ごろ]、この[広告|こうこく]を1[枚|まい]{持|も}ってコンビニに{行|い}った。アイスクリームを2[個|こ]{買|か}った。アイスクリームは100{円|えん}と{書|か}いてあった。いくら@harau([払|はら]った)か。', 'Khoảng 10 giờ tối ngày 18/6, Ali mang 1 tờ quảng cáo này đến cửa hàng tiện lợi và mua 2 cây kem. Kem ghi giá 100 yên. Ali đã trả bao nhiêu?'],
          options: [
            ['200{円|えん}', '200 yên', 'Sai. Ngày 18/6, 22 giờ nằm trong thời gian dùng phiếu kem (15–28/6, 18–24 giờ), nên được giảm.'],
            ['180{円|えん}', '180 yên', 'Đúng. Mỗi người 1 tờ quảng cáo, 1 phiếu chỉ giảm cho 1 sản phẩm → chỉ 1 cây được giảm 20 yên: 80 + 100 = 180 yên.'],
            ['160{円|えん}', '160 yên', 'Sai. Như vậy là cả 2 cây đều được giảm, nhưng 1 phiếu chỉ áp dụng cho 1 sản phẩm.'],
            ['140{円|えん}', '140 yên', 'Sai. Kem chỉ được giảm 20 yên, không phải 30 yên.']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['a4', 'a5', 'a7', 'c2']
        },
        {
          label: '問2',
          question: ['q2', 'ドーナッツを{安|やす}く{買|か}いたい。この[広告|こうこく]を{持|も}って、いつ{買|か}いに{行|い}けばよいか。', 'Muốn mua donut giá rẻ. Mang tờ quảng cáo này đi mua lúc nào thì được?'],
          options: [
            ['6月10日　{午前|ごぜん}10{時|じ}ごろ', 'Khoảng 10 giờ sáng ngày 10/6', 'Sai. Phiếu chỉ dùng từ 18 đến 24 giờ.'],
            ['6月12日　{午後|ごご}10{時|じ}ごろ', 'Khoảng 10 giờ tối ngày 12/6', 'Đúng. Phiếu donut dùng từ 2 đến 14/6, trong khung 18–24 giờ.'],
            ['6月16日　{午前|ごぜん}8{時|じ}ごろ', 'Khoảng 8 giờ sáng ngày 16/6', 'Sai. Đã hết hạn phiếu donut, và cũng ngoài khung giờ.'],
            ['6月20日　{午後|ごご}8{時|じ}ごろ', 'Khoảng 8 giờ tối ngày 20/6', 'Sai. Đúng khung giờ nhưng phiếu donut chỉ đến 14/6.']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['a7', 'c1']
        }
      ],
      summary: 'Quảng cáo giảm giá tháng 6 của S-Mart: mỗi khách 1 tờ, mỗi phiếu giảm cho 1 sản phẩm, chỉ dùng từ 18 đến 24 giờ. Từ 2 đến 14/6: sô-cô-la giảm 30 yên, donut giảm 20 yên. Từ 15 đến 28/6: kem giảm 20 yên, cà phê nóng giảm 30 yên.',
      structure: [
        ['Tiêu đề', 'Tên cửa hàng + đợt giảm giá'],
        ['Các dòng ＊', 'ĐIỀU KIỆN dùng phiếu (số tờ, số sản phẩm, giờ)'],
        ['Phiếu giảm giá', 'Thời hạn · sản phẩm · mức giảm']
      ],
      grammar: [
        ['お一人様1枚限り', 'Mỗi người chỉ 1 tờ', 'この広告はお一人様1枚限りとさせていただきます'],
        ['〜につき', 'Cứ mỗi…', '割引券1枚につき商品1個'],
        ['〜によっては', 'Tùy theo…', 'お店によっては、商品がない場合もあります'],
        ['〜させていただきます', 'Xin phép được… (khiêm nhường, lịch sự)', '1枚限りとさせていただきます']
      ],
      tip: 'Phiếu giảm giá luôn có 3 điều kiện: NGÀY, GIỜ, SỐ LƯỢNG. Đối chiếu câu hỏi với cả ba. Bẫy hay gặp: mua 2 sản phẩm nhưng chỉ có 1 phiếu.'
    },

    /* ───────────── 問題54 ───────────── */
    {
      id: '54',
      review: { pages: [143, 144], answerPage: 209, doubts: [] },
      kind: '情報検索・広告',
      kindVi: 'Tìm thông tin – tin cho thuê căn hộ',
      style: 'notice',
      before: null,
      lead: null,
      blocks: [
        { t: 'title', s: [['t1', 'アパート@jouhou([情報|じょうほう])サイト「マイハウスネット」（20XX年3月@genzai([現在|げんざい])）', 'Trang thông tin căn hộ "My House Net" (tính đến tháng 3/20XX)']] },
        { t: 'sub', s: [['h1', '中山田駅　@toho([徒歩|とほ])3分', 'Đi bộ 3 phút từ ga Nakayamada']] },
        { t: 'lines', s: [
          ['p1', 'アパート　@chiku([築|ちく])10{年|ねん}', 'Căn hộ, đã xây được 10 năm'],
          ['p2', '@yachin([家賃|やちん])　30,000{円|えん}', 'Tiền thuê: 30.000 yên'],
          ['p3', '@shikikin([敷金|しききん])※1／@reikin([礼金|れいきん])※2　1か{月|げつ}／1か{月|げつ}', 'Tiền đặt cọc / tiền lễ: 1 tháng / 1 tháng'],
          ['p4', 'ワンルーム　19.84m²', 'Căn hộ 1 phòng, 19,84 m²']
        ] },
        { t: 'list', s: [
          ['p5', '@minamimuki({南|みなみ}[向|む]き)', 'Hướng Nam'],
          ['p6', '5@kaidate([階建|かいだ]て)の2[階|かい]', 'Tầng 2 của tòa nhà 5 tầng'],
          ['p7', 'スーパーまで400m', 'Cách siêu thị 400 m'],
          ['p8', '@tesuuryou([手数料|てすうりょう])@muryou([無料|むりょう])！　@keiyaku([契約|けいやく]){時|じ}には[家賃|やちん]1か{月|げつ}{分|ぶん}と[敷金|しききん]・[礼金|れいきん][各|かく]1か{月|げつ}{分|ぶん}だけでOK！', 'Miễn phí môi giới! Khi ký hợp đồng chỉ cần 1 tháng tiền thuê cùng tiền cọc và tiền lễ, mỗi khoản 1 tháng!'],
          ['p9', 'ペットは@soudanka([相談|そうだん][可|か])！', 'Thú cưng: có thể thương lượng!']
        ] },
        { t: 'sub', s: [['h2', '（@madorizu([間取|まど]り{図|ず})）', 'Sơ đồ phòng (trong sách là hình vẽ; ở đây mô tả lại bằng chữ)']] },
        { t: 'lines', s: [
          ['f1', '[玄関|げんかん]・[浴室|よくしつ]・トイレ・[収納|しゅうのう]・[洗濯|せんたく]・[洋室|ようしつ]19.84m²・ベランダ', 'Sơ đồ gồm: lối vào, phòng tắm, nhà vệ sinh, tủ đồ, chỗ đặt máy giặt, phòng kiểu Tây 19,84 m², ban công. Mũi tên chỉ hướng Bắc hướng lên trên, ban công nằm ở phía dưới, tức phía Nam.']
        ] }
      ],
      notes: [
        '（注1）[敷金|しききん]：アパートを[契約|けいやく]するときに、@hoshoukin([保証金|ほしょうきん])として@ooyasan({大家|おおや}さん)に@azukeru([預|あず]ける)お{金|かね}',
        '（注2）[礼金|れいきん]：アパートを[契約|けいやく]するときに、お[礼|れい]として{大家|おおや}さんに@shiharau([支払|しはら]う)お{金|かね}'
      ],
      refs: {},
      questions: [
        {
          label: '問1',
          question: ['q1', '[契約|けいやく]するときにいくら[必要|ひつよう]か。', 'Khi ký hợp đồng cần bao nhiêu tiền?'],
          options: [
            ['3{万|まん}{円|えん}', '30.000 yên', 'Sai. Đây mới chỉ là 1 tháng tiền thuê.'],
            ['3{万|まん}5{千|せん}{円|えん}', '35.000 yên', 'Sai. Không có khoản 5.000 yên nào; phí môi giới miễn phí.'],
            ['9{万|まん}{円|えん}', '90.000 yên', 'Đúng. 1 tháng tiền thuê + tiền cọc 1 tháng + tiền lễ 1 tháng = 30.000 × 3 = 90.000 yên (phí môi giới 0).'],
            ['9{万|まん}5{千|せん}{円|えん}', '95.000 yên', 'Sai. Phí môi giới miễn phí (手数料無料).']
          ],
          answer: 3,
          bookAnswer: 3,
          evidence: ['p2', 'p3', 'p8']
        },
        {
          label: '問2',
          question: ['q2', 'このアパートの@setsumei({説明|せつめい})として{本文|ほんぶん}の[内容|ないよう]と{合|あ}っているものはどれか。', 'Mô tả nào về căn hộ này khớp với nội dung?'],
          options: [
            ['[部屋|へや]は5[階|かい]にある。', 'Phòng ở tầng 5.', 'Sai. Tòa nhà 5 tầng, phòng ở tầng 2.'],
            ['ベランダは@minamigawa({南|みなみ}[側|がわ])にある。', 'Ban công ở phía Nam.', 'Đúng. Căn hộ hướng Nam (南向き), và sơ đồ cho thấy ban công ở phía Nam.'],
            ['{犬|いぬ}を@kau([飼|か]う)ことはできない。', 'Không được nuôi chó.', 'Sai. Thú cưng có thể thương lượng (ペットは相談可).'],
            ['[部屋|へや]にお@furo({風呂|ふろ})がない。', 'Phòng không có bồn tắm.', 'Sai. Sơ đồ có phòng tắm (浴室).']
          ],
          answer: 2,
          bookAnswer: 2,
          evidence: ['p5', 'f1']
        }
      ],
      summary: 'Tin cho thuê căn hộ 1 phòng 19,84 m² cách ga Nakayamada 3 phút đi bộ, xây được 10 năm, tiền thuê 30.000 yên, cọc 1 tháng, tiền lễ 1 tháng. Hướng Nam, tầng 2 của tòa 5 tầng, miễn phí môi giới, thú cưng có thể thương lượng. Sơ đồ có phòng tắm, nhà vệ sinh, tủ đồ, ban công phía Nam.',
      structure: [
        ['Tiêu đề', 'Trang web, thời điểm đăng tin'],
        ['Thông tin chính', 'Ga, tuổi nhà, tiền thuê, tiền cọc/lễ, diện tích'],
        ['Các dòng ・', 'Đặc điểm: hướng, tầng, siêu thị, chi phí ký hợp đồng, thú cưng'],
        ['Sơ đồ', 'Các phòng và hướng']
      ],
      grammar: [
        ['築〜年', 'Đã xây được … năm', '築10年'],
        ['〜か月分', 'Lượng tương đương … tháng', '家賃1か月分'],
        ['各〜', 'Mỗi…', '敷金・礼金各1か月分'],
        ['〜可', 'Có thể… (cách viết ngắn)', '相談可']
      ],
      tip: 'Tin thuê nhà ở Nhật thường dùng nhiều từ viết tắt: 築 (tuổi nhà), 徒歩 (đi bộ), 敷金/礼金 (cọc/lễ), 〜可 (được phép). Học thuộc các từ này giúp đọc nhanh. Tính tiền ký hợp đồng thì cộng tất cả các khoản "か月分".'
    }
  ]
};
