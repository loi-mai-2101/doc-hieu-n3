/* Đề thi JLPT N3 tháng 12/2023 — Đọc hiểu: 問題4 (短文, câu 23–26) · 問題5 (中文, câu 27–32).
   Cú pháp đánh dấu: xem data/bai-1.js. Đáp án do giáo viên giải (đề không kèm đáp án). */
window.BAI = {
  id: 'de-t12-2023',
  title: 'Đề T12/2023',
  subtitle: 'JLPT N3 tháng 12/2023 · 短文 & 中文',

  vocab: {
    // 4-1
    eigakan: { w: '映画館', r: 'えいがかん', hv: 'ÁNH HỌA QUÁN', vi: 'rạp chiếu phim' },
    yoyaku: { w: '予約', r: 'よやく', hv: 'DỰ ƯỚC', vi: 'đặt trước' },
    daikin: { w: '代金', r: 'だいきん', hv: 'ĐẠI KIM', vi: 'tiền (trả cho hàng, dịch vụ)' },
    shiharau: { w: '支払う', r: 'しはらう', hv: 'CHI PHẤT', vi: 'thanh toán' },
    goukei: { w: '合計', r: 'ごうけい', hv: 'HỢP KẾ', vi: 'tổng cộng' },
    sekibangou: { w: '席番号', r: 'せきばんごう', hv: 'TỊCH PHIÊN HIỆU', vi: 'số ghế' },
    chuui: { w: '注意', r: 'ちゅうい', hv: 'CHÚ Ý', vi: 'chú ý' },
    hakken: { w: '発券する', r: 'はっけんする', hv: 'PHÁT KHOÁN', vi: 'in / xuất vé' },
    kenbaiki: { w: '券売機', r: 'けんばいき', hv: 'KHOÁN MẠI CƠ', vi: 'máy bán vé' },
    nyuuryoku: { w: '入力する', r: 'にゅうりょくする', hv: 'NHẬP LỰC', vi: 'nhập (dữ liệu)' },
    sugiru: { w: '過ぎる', r: 'すぎる', hv: 'QUÁ', vi: 'quá, vượt qua (thời gian)' },
    irai: { w: '以降', r: 'いこう', hv: 'DĨ GIÁNG', vi: 'từ đó trở đi' },
    toiawase: { w: '問い合わせ', r: 'といあわせ', hv: 'VẤN HỢP', vi: 'liên hệ hỏi đáp' },
    // 4-2
    jimusho: { w: '事務所', r: 'じむしょ', hv: 'SỰ VỤ SỞ', vi: 'văn phòng' },
    kyoujuu: { w: '今日中に', r: 'きょうじゅうに', hv: 'KIM NHẬT TRUNG', vi: 'trong hôm nay' },
    shorui: { w: '書類', r: 'しょるい', hv: 'THƯ LOẠI', vi: 'giấy tờ, hồ sơ' },
    reizouko: { w: '冷蔵庫', r: 'れいぞうこ', hv: 'LÃNH TÀNG KHỐ', vi: 'tủ lạnh' },
    tekitou: { w: '適当に', r: 'てきとうに', hv: 'THÍCH ĐƯƠNG', vi: 'tùy ý, cho phù hợp' },
    kaeri: { w: '帰りに', r: 'かえりに', hv: 'QUY', vi: 'trên đường về' },
    // 4-3
    zasshi: { w: '雑誌', r: 'ざっし', hv: 'TẠP CHÍ', vi: 'tạp chí' },
    machiawaseru: { w: '待ち合わせる', r: 'まちあわせる', hv: 'ĐÃI HỢP', vi: 'hẹn gặp' },
    chousa: { w: '調査', r: 'ちょうさ', hv: 'ĐIỀU TRA', vi: 'khảo sát, điều tra' },
    kiji: { w: '記事', r: 'きじ', hv: 'KÝ SỰ', vi: 'bài báo' },
    zentai: { w: '全体', r: 'ぜんたい', hv: 'TOÀN THỂ', vi: 'toàn bộ' },
    maniau: { w: '間に合う', r: 'まにあう', hv: 'GIAN HỢP', vi: 'kịp giờ' },
    ippoude: { w: '一方で', r: 'いっぽうで', hv: 'NHẤT PHƯƠNG', vi: 'mặt khác' },
    tashou: { w: '多少', r: 'たしょう', hv: 'ĐA THIỂU', vi: 'chút ít' },
    mezurashii: { w: '珍しい', r: 'めずらしい', hv: 'TRÂN', vi: 'hiếm, hiếm thấy' },
    kekka: { w: '結果', r: 'けっか', hv: 'KẾT QUẢ', vi: 'kết quả' },
    igai: { w: '意外', r: 'いがい', hv: 'Ý NGOẠI', vi: 'bất ngờ, ngoài dự đoán' },
    hantai: { w: '反対', r: 'はんたい', hv: 'PHẢN ĐỐI', vi: 'ngược lại' },
    // 4-4
    nattou: { w: '納豆', r: 'なっとう', hv: 'NẠP ĐẬU', vi: 'natto (đậu nành lên men)' },
    sonomama: { w: 'そのまま', r: 'そのまま', hv: '', vi: 'để nguyên như thế' },
    mazeru: { w: '混ぜる', r: 'まぜる', hv: 'HỖN', vi: 'trộn' },
    misoshiru: { w: 'みそ汁', r: 'みそしる', hv: 'TRẤP', vi: 'canh miso' },
    shurui: { w: '種類', r: 'しゅるい', hv: 'CHỦNG LOẠI', vi: 'loại' },
    kouso: { w: '酵素', r: 'こうそ', hv: 'DIẾU TỐ', vi: 'enzym' },
    ketsueki: { w: '血液', r: 'けつえき', hv: 'HUYẾT DỊCH', vi: 'máu' },
    nagare: { w: '流れ', r: 'ながれ', hv: 'LƯU', vi: 'dòng chảy' },
    kouka: { w: '効果', r: 'こうか', hv: 'HIỆU QUẢ', vi: 'hiệu quả, tác dụng' },
    netsu: { w: '熱', r: 'ねつ', hv: 'NHIỆT', vi: 'nhiệt' },
    heru: { w: '減る', r: 'へる', hv: 'GIẢM', vi: 'giảm' },
    mottainai: { w: 'もったいない', r: 'もったいない', hv: '', vi: 'lãng phí, tiếc' },
    eiyou: { w: '栄養', r: 'えいよう', hv: 'DINH DƯỠNG', vi: 'dinh dưỡng' },
    // 5-1
    manga: { w: '漫画', r: 'まんが', hv: 'MẠN HỌA', vi: 'truyện tranh' },
    shakai: { w: '社会', r: 'しゃかい', hv: 'XÃ HỘI', vi: 'xã hội' },
    jugyou: { w: '授業', r: 'じゅぎょう', hv: 'THỤ NGHIỆP', vi: 'giờ học, môn học' },
    shippai: { w: '失敗', r: 'しっぱい', hv: 'THẤT BẠI', vi: 'thất bại' },
    shitei: { w: '指定する', r: 'していする', hv: 'CHỈ ĐỊNH', vi: 'chỉ định' },
    tokoroga: { w: 'ところが', r: 'ところが', hv: '', vi: 'thế nhưng (trái với dự đoán)' },
    atsukau: { w: '扱う', r: 'あつかう', hv: 'TRÁP', vi: 'xử lý, đề cập, dùng (làm tài liệu)' },
    gakkimatsu: { w: '学期末', r: 'がっきまつ', hv: 'HỌC KỲ MẠT', vi: 'cuối học kỳ' },
    shiken: { w: '試験', r: 'しけん', hv: 'THÍ NGHIỆM', vi: 'kỳ thi' },
    kan: { w: '〜巻', r: 'かん', hv: 'QUYỂN', vi: '… tập (sách)' },
    shikkari: { w: 'しっかり', r: 'しっかり', hv: '', vi: 'kỹ càng, chắc chắn' },
    kezuru: { w: '削る', r: 'けずる', hv: 'TƯỚC', vi: 'cắt bớt, gọt' },
    gyaku: { w: '逆', r: 'ぎゃく', hv: 'NGHỊCH', vi: 'ngược lại' },
    gaman: { w: '我慢する', r: 'がまんする', hv: 'NGÃ MẠN', vi: 'nhịn, chịu đựng' },
    shibaraku: { w: 'しばらく', r: 'しばらく', hv: '', vi: 'một thời gian' },
    kibun: { w: '気分', r: 'きぶん', hv: 'KHÍ PHÂN', vi: 'tâm trạng' },
    joutai: { w: '状態', r: 'じょうたい', hv: 'TRẠNG THÁI', vi: 'trạng thái' },
    // 5-2
    keshiki: { w: '景色', r: 'けしき', hv: 'CẢNH SẮC', vi: 'phong cảnh' },
    umizoi: { w: '海沿い', r: 'うみぞい', hv: 'HẢI DUYÊN', vi: 'ven biển' },
    minato: { w: '港', r: 'みなと', hv: 'CẢNG', vi: 'bến cảng' },
    asaichi: { w: '朝市', r: 'あさいち', hv: 'TRIÊU THỊ', vi: 'chợ phiên buổi sáng' },
    ichiba: { w: '市場', r: 'いちば', hv: 'THỊ TRƯỜNG', vi: 'chợ' },
    oozei: { w: '大勢', r: 'おおぜい', hv: 'ĐẠI THẾ', vi: 'đông người' },
    shujin: { w: '主人', r: 'しゅじん', hv: 'CHỦ NHÂN', vi: 'chủ (cửa hàng)' },
    urikireru: { w: '売り切れる', r: 'うりきれる', hv: 'MẠI THIẾT', vi: 'bán hết' },
    mokuteki: { w: '目的', r: 'もくてき', hv: 'MỤC ĐÍCH', vi: 'mục đích' },
    kasegu: { w: '稼ぐ', r: 'かせぐ', hv: 'GIÁ', vi: 'kiếm (tiền)' },
    fudan: { w: 'ふだん', r: 'ふだん', hv: '', vi: 'thường ngày' },
    senden: { w: '宣伝する', r: 'せんでんする', hv: 'TUYÊN TRUYỀN', vi: 'quảng bá' },
    heijitsu: { w: '平日', r: 'へいじつ', hv: 'BÌNH NHẬT', vi: 'ngày thường' }
  },

  problems: [
    /* ───────────── 問題4 (1) ───────────── */
    {
      id: '4-1',
      kind: '短文・メール',
      kindVi: 'Đoạn văn ngắn – email đặt vé xem phim',
      style: 'mail',
      before: null,
      lead: ['l', 'これは、ある@eigakan({映画館|えいがかん})のインターネットチケット@yoyaku({予約|よやく})サービスから、[村田|むらた]さんに[届|とど]いたメールである。', 'Đây là email mà anh/chị Murata nhận được từ dịch vụ đặt vé qua mạng của một rạp chiếu phim.'],
      blocks: [
        { t: 'lines', s: [
          ['s1', '[村田新一|むらたしんいち][様|さま]', 'Kính gửi anh Murata Shinichi'],
          ['s2', 'チケット@daikin([代金|だいきん])を@shiharau([支払|しはら]って)いただき、ありがとうございました。', 'Cảm ơn quý khách đã thanh toán tiền vé.']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['i1', '＜{予約|よやく}{番号|ばんごう}＞　0832　＜{電話|でんわ}{番号|ばんごう}＞　090-0911-4215', 'Mã đặt vé: 0832 · Số điện thoại: 090-0911-4215'],
          ['i2', '＜{日時|にちじ}＞　4{月|がつ}11{日|にち}（{土|ど}）14{時|じ}', 'Ngày giờ: 11/4 (thứ Bảy) 14 giờ'],
          ['i3', '＜@goukei([合計|ごうけい])[代金|だいきん]＞　{大人|おとな}2{枚|まい}　3,600{円|えん}', 'Tổng tiền: 2 vé người lớn, 3.600 yên'],
          ['i4', '＜{映画|えいが}{名|めい}＞　「{海|うみ}」', 'Tên phim: "Biển"'],
          ['i5', '＜@sekibangou({席|せき}{番号|ばんごう})＞　K13　K14', 'Số ghế: K13, K14']
        ] },
        { t: 'list', s: [
          ['s3', 'ご{予約|よやく}はキャンセルできませんので、ご@chuui({注意|ちゅうい})ください。', 'Vé đã đặt không thể hủy, xin quý khách lưu ý.'],
          ['s4', '{当日|とうじつ}は、{映画館|えいがかん}でチケットを@hakken([発券|はっけん])していただく{必要|ひつよう}がございます。@kenbaiki([券売機|けんばいき])に＜{予約|よやく}{番号|ばんごう}＞と＜{電話|でんわ}{番号|ばんごう}＞をご@nyuuryoku({入力|にゅうりょく})ください。', 'Vào hôm đó, quý khách cần in vé tại rạp. Xin hãy nhập "mã đặt vé" và "số điện thoại" vào máy bán vé.'],
          ['s5', '{映画|えいが}{開始|かいし}から15{分|ふん}を@sugiru({過|す}ぎます)と、[券売機|けんばいき]での[発券|はっけん]はできなくなります。それ@irai([以降|いこう])は、チケットオフィスで[発券|はっけん]いたします。', 'Quá 15 phút kể từ lúc phim bắt đầu thì không thể in vé ở máy nữa. Sau đó, vé sẽ được in tại quầy bán vé.']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['s6', '[東王|とうおう]{映画館|えいがかん}インターネットチケット{予約|よやく}サービス', 'Dịch vụ đặt vé qua mạng rạp phim Tōō'],
          ['s7', 'お@toiawase({問|と}い{合|あ}わせ)　061-987-6543', 'Liên hệ: 061-987-6543']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '23',
          question: ['q1', '{当日|とうじつ}、{予約|よやく}したチケットを[券売機|けんばいき]で[発券|はっけん]したい{場合|ばあい}、どうしなければならないか。', 'Hôm đó, nếu muốn in vé đã đặt bằng máy bán vé thì phải làm gì?'],
          options: [
            ['{映画|えいが}{開始|かいし}{時間|じかん}の15{分|ふん}{前|まえ}までに、[券売機|けんばいき]に{必要|ひつよう}な{情報|じょうほう}を{入力|にゅうりょく}する。', 'Nhập thông tin cần thiết vào máy trước giờ chiếu 15 phút.', 'Sai. Hạn là 15 phút SAU khi phim bắt đầu (開始から15分を過ぎますと).'],
            ['{映画|えいが}{開始|かいし}{時間|じかん}の15{分|ふん}{前|まえ}までに、[券売機|けんばいき]でお{金|かね}を{払|はら}う。', 'Trả tiền ở máy trước giờ chiếu 15 phút.', 'Sai. Tiền đã thanh toán rồi (s2).'],
            ['{映画|えいが}{開始|かいし}{時間|じかん}の15{分|ふん}{後|ご}までに、[券売機|けんばいき]に{必要|ひつよう}な{情報|じょうほう}を{入力|にゅうりょく}する。', 'Nhập thông tin cần thiết vào máy chậm nhất 15 phút sau giờ chiếu.', 'Đúng. Nhập mã đặt vé + số điện thoại (s4); quá 15 phút sau khi bắt đầu thì máy không in được (s5).'],
            ['{映画|えいが}{開始|かいし}{時間|じかん}の15{分|ふん}{後|ご}までに、[券売機|けんばいき]でお{金|かね}を{払|はら}う。', 'Trả tiền ở máy chậm nhất 15 phút sau giờ chiếu.', 'Sai. Không cần trả tiền nữa.']
          ],
          answer: 3,
          evidence: ['s2', 's4', 's5']
        }
      ],
      summary: 'Email xác nhận đã thanh toán 2 vé xem phim "Biển" ngày 11/4 lúc 14 giờ. Vé không hủy được. Hôm đó phải in vé ở máy bằng mã đặt vé + số điện thoại; quá 15 phút sau giờ chiếu thì phải in ở quầy.',
      structure: [
        ['Mở đầu', 'Cảm ơn đã THANH TOÁN (tiền đã trả)'],
        ['Thông tin', 'Mã đặt vé, ngày giờ, tiền, phim, ghế'],
        ['Lưu ý', 'Không hủy · in vé bằng máy · hạn 15 phút sau giờ chiếu → đáp án']
      ],
      grammar: [
        ['〜ていただき、ありがとうございました', 'Cảm ơn vì đã… (kính ngữ)', '支払っていただき、ありがとうございました'],
        ['〜必要がございます', 'Cần phải… (cách nói rất lịch sự của 必要があります)', '発券していただく必要がございます'],
        ['〜から〜を過ぎますと', 'Khi quá … kể từ …', '映画開始から15分を過ぎますと'],
        ['それ以降', 'Kể từ đó trở đi', 'それ以降は、チケットオフィスで発券いたします']
      ],
      tip: 'Phân biệt "開始から15分" (15 phút SAU khi bắt đầu) với "開始15分前" (15 phút TRƯỚC). Câu "代金を支払っていただき" cho biết đã trả tiền → loại ngay các lựa chọn "お金を払う".'
    },

    /* ───────────── 問題4 (2) ───────────── */
    {
      id: '4-2',
      kind: '短文・メモ',
      kindVi: 'Đoạn văn ngắn – mẩu ghi nhớ',
      style: 'memo',
      before: null,
      lead: ['l', 'アリサさんが{家|いえ}に{帰|かえ}ると、テーブルの{上|うえ}に、{一緒|いっしょ}に{住|す}んでいる[春美|はるみ]さんが{書|か}いたメモが{置|お}いてあった。', 'Khi Arisa về nhà, trên bàn có mẩu ghi chú do Harumi – người sống cùng – viết.'],
      blocks: [
        { t: 'lines', s: [['s0', 'アリサさん', 'Gửi Arisa']] },
        { t: 'p', s: [
          ['s1', '{大学|だいがく}の@jimusho({事務所|じむしょ})に@kyoujuu({今日中|きょうじゅう}に){出|だ}さなければならない@shorui([書類|しょるい])があるのを{忘|わす}れていたので、ちょっと{行|い}ってきます。', 'Mình quên mất có giấy tờ phải nộp cho văn phòng trường đại học trong hôm nay, nên mình đi một chút.']
        ] },
        { t: 'p', s: [
          ['s2', 'カレーとスープはできたんだけど、サラダがまだできていないので、お{願|ねが}いできますか。', 'Cà ri và súp thì xong rồi, nhưng salad chưa làm, bạn làm giúp được không?'],
          ['s3', '@reizouko([冷蔵庫|れいぞうこ])にトマトやレタスがあるから、@tekitou([適当|てきとう]に){使|つか}ってください。', 'Trong tủ lạnh có cà chua, xà lách, bạn cứ dùng tùy ý nhé.']
        ] },
        { t: 'p', s: [
          ['s4', '{今日|きょう}は{私|わたし}が{晩|ばん}ご{飯|はん}を{作|つく}ると{言|い}ったのに、ごめんなさい。', 'Hôm nay mình đã nói sẽ nấu cơm tối mà, xin lỗi nhé.'],
          ['s5', '@kaeri({帰|かえ}りに){何|なに}か{甘|あま}いものを{買|か}ってきますね。', 'Trên đường về mình sẽ mua đồ ngọt gì đó nhé.']
        ] },
        { t: 'right', s: [['sg', '[春美|はるみ]', 'Harumi']] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '24',
          question: ['q1', 'アリサさんがこのメモで[頼|たの]まれていることは{何|なに}か。', 'Arisa được nhờ làm gì trong mẩu ghi chú này?'],
          options: [
            ['{大学|だいがく}の{事務所|じむしょ}に{行|い}って、[書類|しょるい]を{出|だ}すこと', 'Đến văn phòng trường nộp giấy tờ.', 'Sai. Đó là việc Harumi tự đi làm.'],
            ['カレーとスープを{作|つく}ること', 'Nấu cà ri và súp.', 'Sai. Cà ri và súp đã xong (できたんだけど).'],
            ['サラダを{作|つく}ること', 'Làm salad.', 'Đúng. 「サラダがまだできていないので、お願いできますか」 (s2).'],
            ['{甘|あま}いものを{買|か}うこと', 'Mua đồ ngọt.', 'Sai. Harumi sẽ mua đồ ngọt trên đường về.']
          ],
          answer: 3,
          evidence: ['s2', 's3']
        }
      ],
      summary: 'Harumi để lại ghi chú: phải đi nộp giấy tờ ở văn phòng trường; cà ri và súp đã nấu xong nhưng chưa làm salad nên nhờ Arisa làm (dùng cà chua, xà lách trong tủ lạnh); xin lỗi vì đã hứa nấu cơm, sẽ mua đồ ngọt khi về.',
      structure: [
        ['Đoạn 1', 'Lý do vắng nhà'],
        ['Đoạn 2', 'Lời nhờ: làm salad → đáp án'],
        ['Đoạn 3', 'Xin lỗi + sẽ mua đồ ngọt']
      ],
      grammar: [
        ['〜のを忘れていた', 'Đã quên (việc)…', '書類があるのを忘れていた'],
        ['〜てきます', 'Đi… rồi về', 'ちょっと行ってきます・甘いものを買ってきます'],
        ['お願いできますか', 'Nhờ bạn được không?', 'サラダが…、お願いできますか'],
        ['〜のに', 'Vậy mà, mặc dù (tiếc nuối)', '私が晩ご飯を作ると言ったのに']
      ],
      tip: 'Câu hỏi "頼まれていること" → tìm mẫu nhờ vả: お願いできますか / 〜てください / 〜てくれる?. Những việc người viết tự làm (行ってきます、買ってきます) là bẫy.'
    },

    /* ───────────── 問題4 (3) ───────────── */
    {
      id: '4-3',
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút về khảo sát',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '@zasshi([雑誌|ざっし])で「{友達|ともだち}や{家族|かぞく}と@machiawaseru({待|ま}ち{合|あ}わせる)とき、その{場所|ばしょ}に{行|い}く{時間|じかん}」についての@chousa([調査|ちょうさ])の@kiji([記事|きじ])を{読|よ}んだ。', 'Tôi đọc trên tạp chí một bài báo khảo sát về "thời điểm đến chỗ hẹn khi hẹn gặp bạn bè hay gia đình".'],
          ['s2', '{早|はや}めに{行|い}く{人|ひと}は、@zentai({全体|ぜんたい})の59%で{最|もっと}も{多|おお}く、{次|つぎ}に{多|おお}かったのが、{時間|じかん}に@maniau({間|ま}に{合|あ})うように{行|い}く{人|ひと}で36%だった。', 'Người đến sớm chiếm 59% – nhiều nhất; nhiều thứ hai là người đi sao cho kịp giờ, 36%.'],
          ['s3', '@ippoude({一方|いっぽう}で)、@tashou([多少|たしょう]){遅|おく}れても{気|き}にしないという{人|ひと}は、3%しかいなかった。', 'Mặt khác, người không bận tâm dù có trễ một chút chỉ có 3%.']
        ] },
        { t: 'p', s: [
          ['s4', '{私|わたし}はいつも{早|はや}めに{行|い}くが、[友人|ゆうじん]たちはたいてい{遅|おく}れて{来|く}る。', 'Tôi lúc nào cũng đến sớm, còn bạn bè tôi thường đến muộn.'],
          ['s5', '{私|わたし}が@mezurashii([珍|めずら]しい)タイプなのかと{思|おも}っていたが、この@kekka({結果|けっか})から、そうではないとわかって、‹@igai({意外|いがい})だった›。', 'Tôi cứ nghĩ mình thuộc kiểu hiếm, nhưng nhờ kết quả này mới biết không phải vậy, thật bất ngờ.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '25',
          question: ['q1', '‹{意外|いがい}だった›とあるが、[調査|ちょうさ]{結果|けっか}のどのような{点|てん}からそう{思|おも}ったか。', '"Bất ngờ" – tác giả nghĩ vậy từ điểm nào trong kết quả khảo sát?'],
          options: [
            ['「{私|わたし}」と{同|おな}じタイプの{人|ひと}が、{最|もっと}も{多|おお}い{点|てん}', 'Người cùng kiểu với "tôi" là nhiều nhất.', 'Đúng. "Tôi" đến sớm = nhóm 59%, nhiều nhất, trái với suy nghĩ "mình là kiểu hiếm" (s2, s5).'],
            ['「{私|わたし}」と{同|おな}じタイプの{人|ひと}が、{二番目|にばんめ}に{多|おお}い{点|てん}', 'Người cùng kiểu với "tôi" nhiều thứ hai.', 'Sai. Nhiều thứ hai là nhóm "đi cho kịp giờ".'],
            ['「{私|わたし}」と{同|おな}じタイプの{人|ひと}が、{最|もっと}も{少|すく}ない{点|てん}', 'Người cùng kiểu với "tôi" ít nhất.', 'Sai. Ít nhất là nhóm không ngại trễ (3%).'],
            ['「{私|わたし}」と@hantai([反対|はんたい])のタイプの{人|ひと}が、{最|もっと}も{多|おお}い{点|てん}', 'Người kiểu ngược với "tôi" là nhiều nhất.', 'Sai. Nhóm ngược lại (trễ cũng được) chỉ 3%.']
          ],
          answer: 1,
          evidence: ['s2', 's4', 's5']
        }
      ],
      summary: 'Khảo sát về giờ đến chỗ hẹn: đến sớm 59% (nhiều nhất), đến vừa kịp 36%, không ngại trễ 3%. Tác giả luôn đến sớm, bạn bè thì hay trễ nên tưởng mình hiếm, nhưng hóa ra mình thuộc nhóm đông nhất → bất ngờ.',
      structure: [
        ['Đoạn 1', 'Kết quả khảo sát (59% – 36% – 3%)'],
        ['Đoạn 2', 'Bản thân tác giả → cảm nghĩ "意外だった"']
      ],
      grammar: [
        ['〜で最も多く、次に多かったのが〜', 'Nhiều nhất là…, kế đến là…', '全体の59%で最も多く、次に多かったのが…'],
        ['〜ように', 'Sao cho…', '時間に間に合うように行く'],
        ['〜ても気にしない', 'Dù… cũng không bận tâm', '多少遅れても気にしない'],
        ['〜しかいない', 'Chỉ có… (ít)', '3%しかいなかった']
      ],
      tip: 'Bài có số liệu + cảm nghĩ: xác định "tôi" thuộc nhóm nào trong số liệu (いつも早めに行く → 59%), rồi so với suy nghĩ ban đầu (珍しいタイプ).'
    },

    /* ───────────── 問題4 (4) ───────────── */
    {
      id: '4-4',
      kind: '短文・随筆',
      kindVi: 'Đoạn văn ngắn – tùy bút về món ăn',
      style: 'essay',
      before: null,
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', '@nattou([納豆|なっとう])は、{体|からだ}にいいし、おいしいので、{私|わたし}は{毎日|まいにち}{食|た}べている。', 'Natto tốt cho sức khỏe lại ngon nên ngày nào tôi cũng ăn.'],
          ['s2', '@sonomama(そのまま){食|た}べる{人|ひと}も{多|おお}いが、{私|わたし}は[卵|たまご]に@mazeru([混|ま]ぜて)[焼|や]いたり、@misoshiru(みそ[汁|しる])に{入|い}れたり、いろいろな{料理|りょうり}に{使|つか}っている。', 'Nhiều người ăn nguyên như thế, còn tôi thì trộn với trứng rồi chiên, cho vào canh miso… dùng trong nhiều món.']
        ] },
        { t: 'p', s: [
          ['s3', 'しかし、{今朝|けさ}テレビを{見|み}て[驚|おどろ]いた。', 'Nhưng sáng nay xem tivi tôi đã giật mình.'],
          ['s4', '[納豆|なっとう]には、ほかの{食|た}べ{物|もの}にはない@shurui({種類|しゅるい})の@kouso([酵素|こうそ])※が{入|はい}っている。', 'Trong natto có loại enzym mà các thực phẩm khác không có.'],
          ['s5', '»r1(これ)には@ketsueki([血液|けつえき])の@nagare({流|なが}れ)をよくする@kouka([効果|こうか])があるが、50{度|ど}{以上|いじょう}の@netsu({熱|ねつ})で@heru({減|へ}って)しまうそうなのだ。', 'Nó có tác dụng làm máu lưu thông tốt, nhưng nghe nói bị giảm đi khi gặp nhiệt độ từ 50 độ trở lên.'],
          ['s6', 'そうだとすると、{私|わたし}は{今|いま}まで、‹とても@mottainai(もったいない){食|た}べ{方|かた}をしていた›ことになる。', 'Nếu vậy thì từ trước đến giờ tôi đã ăn theo cách rất lãng phí.']
        ] }
      ],
      notes: ['（注）[酵素|こうそ]：ここでは、{食|た}べ{物|もの}に{入|はい}っている@eiyou([栄養|えいよう])のような{物|もの}'],
      refs: { r1: 'これ = loại enzym đặc biệt chỉ có trong natto (câu trước).' },
      questions: [
        {
          label: '26',
          question: ['q1', '‹もったいない{食|た}べ{方|かた}をしていた›とあるが、なぜもったいないと{思|おも}ったのか。', '"Đã ăn theo cách lãng phí" – vì sao tác giả nghĩ là lãng phí?'],
          options: [
            ['{体|からだ}へのよい[効果|こうか]が{弱|よわ}くなってしまう{料理|りょうり}のしかたで、[納豆|なっとう]を{食|た}べていたから', 'Vì đã ăn natto theo cách nấu làm yếu đi tác dụng tốt cho cơ thể.', 'Đúng. Tác giả chiên với trứng, cho vào canh nóng → nhiệt trên 50 độ làm giảm enzym có lợi (s2, s5).'],
            ['{体|からだ}へのよい[効果|こうか]が{消|き}えるような、たくさんの{量|りょう}の[納豆|なっとう]を{食|た}べていたから', 'Vì ăn quá nhiều natto đến mức mất tác dụng.', 'Sai. Bài không nói về lượng.'],
            ['おいしさがわからなくなるような{料理|りょうり}のしかたで、[納豆|なっとう]を{食|た}べていたから', 'Vì nấu theo cách làm mất vị ngon.', 'Sai. Vấn đề là tác dụng với sức khỏe, không phải vị ngon.'],
            ['おいしくなる{料理|りょうり}{方法|ほうほう}があるのに、それを{知|し}らないで[納豆|なっとう]を{食|た}べていたから', 'Vì không biết cách nấu cho ngon hơn.', 'Sai. Bài không nói vậy.']
          ],
          answer: 1,
          evidence: ['s2', 's5', 's6']
        }
      ],
      summary: 'Tác giả ăn natto mỗi ngày, thường chiên với trứng hoặc cho vào canh miso. Xem tivi mới biết enzym đặc biệt trong natto giúp máu lưu thông nhưng giảm khi gặp nhiệt trên 50 độ → cách ăn nấu nóng của mình thật lãng phí.',
      structure: [
        ['Đoạn 1', 'Thói quen ăn natto (nấu nóng)'],
        ['Đoạn 2', 'Thông tin mới (しかし): enzym giảm khi gặp nhiệt → kết luận "もったいない"']
      ],
      grammar: [
        ['〜し、〜ので', 'Vừa… lại… nên', '体にいいし、おいしいので'],
        ['〜たり〜たり', 'Lúc thì…, lúc thì…', '焼いたり、みそ汁に入れたり'],
        ['〜そうなのだ', 'Nghe nói là… (giải thích)', '熱で減ってしまうそうなのだ'],
        ['そうだとすると〜ことになる', 'Nếu vậy thì hóa ra là…', 'そうだとすると…食べ方をしていたことになる']
      ],
      tip: 'Nối hai thông tin: cách làm của tác giả (đoạn 1: 焼く、みそ汁) + kiến thức mới (đoạn 2: 50度以上の熱で減る). Đáp án là sự kết hợp của cả hai.'
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
          ['s1', '{私|わたし}の[留学|りゅうがく]している{日本|にほん}の{大学|だいがく}には、@manga([漫画|まんが])を{読|よ}んで@shakai({社会|しゃかい})について{考|かんが}える@jugyou([授業|じゅぎょう])があります。', 'Ở trường đại học Nhật nơi tôi du học có môn học đọc truyện tranh rồi suy nghĩ về xã hội.'],
          ['s2', '{私|わたし}は{子供|こども}のころから{日本|にほん}の[漫画|まんが]が{大好|だいす}きだったので、この[授業|じゅぎょう]を{取|と}りました。', 'Tôi rất thích truyện tranh Nhật từ nhỏ nên đã đăng ký môn này.'],
          ['s3', 'しかし、これは@shippai([失敗|しっぱい])でした。', 'Nhưng đó là một thất bại.']
        ] },
        { t: 'p', s: [
          ['s4', 'この[授業|じゅぎょう]では、{学生|がくせい}は{毎週|まいしゅう}の[授業|じゅぎょう]の{前|まえ}に、{先生|せんせい}が@shitei([指定|してい])した[漫画|まんが]を{読|よ}んでいくことになっていました。', 'Ở môn này, sinh viên phải đọc trước bộ truyện tranh giáo viên chỉ định trước mỗi buổi học hằng tuần.'],
          ['s5', '@tokoroga(ところが)、@atsukau([扱|あつか]う)[漫画|まんが]はどれも{私|わたし}が{知|し}らないものばかりだったので、{読|よ}むのに{時間|じかん}がかかって、{毎回|まいかい}とても{大変|たいへん}でした。', 'Thế nhưng, truyện được dùng toàn là truyện tôi không biết, nên đọc mất nhiều thời gian, lần nào cũng rất vất vả.']
        ] },
        { t: 'p', s: [
          ['s6', 'いちばん[困|こま]ったのは@gakkimatsu({学期末|がっきまつ})の@shiken({試験|しけん})です。', 'Khó khăn nhất là kỳ thi cuối học kỳ.'],
          ['s7', '{試験|しけん}の{前|まえ}に、ある[漫画|まんが]を{読|よ}んでおくように{先生|せんせい}に{言|い}われました。', 'Trước kỳ thi, tôi được thầy/cô dặn phải đọc trước một bộ truyện.'],
          ['s8', 'その[漫画|まんが]は{全部|ぜんぶ}で3@kan([巻|かん])もあり、@shikkari(しっかり){読|よ}むのにはとても{時間|じかん}がかかりました。', 'Bộ truyện đó có tới 3 tập, đọc kỹ thì tốn rất nhiều thời gian.'],
          ['s9', 'そのために、ほかの{試験|しけん}の{勉強|べんきょう}ができなくなり、{寝|ね}る{時間|じかん}も@kezuru([削|けず]らなければ)ならなくなりました。', 'Vì thế, tôi không thể học cho các môn thi khác, đến cả thời gian ngủ cũng phải cắt bớt.'],
          ['s10', 'いつもなら、{試験|しけん}{期間|きかん}{中|ちゅう}は[漫画|まんが]を{読|よ}むのを@gaman([我慢|がまん])するのですが、‹このときの{私|わたし}›は@gyaku([逆|ぎゃく])だったのです。', 'Bình thường, trong mùa thi tôi phải nhịn đọc truyện tranh, nhưng lúc này thì ngược lại.']
        ] },
        { t: 'p', s: [
          ['s11', '{試験|しけん}はうまくいきましたが、{今|いま}は@shibaraku(しばらく)[漫画|まんが]はお{休|やす}みにしたい@kibun({気分|きぶん})です。', 'Kỳ thi suôn sẻ, nhưng giờ tôi muốn tạm nghỉ đọc truyện tranh một thời gian.']
        ] }
      ],
      notes: [],
      refs: {},
      questions: [
        {
          label: '27',
          question: ['q1', '{毎回|まいかい}の[授業|じゅぎょう]の{前|まえ}に、{学生|がくせい}がしなければならなかったことは{何|なに}か。', 'Trước mỗi buổi học, sinh viên phải làm gì?'],
          options: [
            ['[授業|じゅぎょう]で{先生|せんせい}に[扱|あつか]ってもらいたい[漫画|まんが]を{見|み}つけてくること', 'Tìm truyện muốn giáo viên dùng trong giờ học.', 'Sai. Truyện do giáo viên chỉ định.'],
            ['{社会|しゃかい}{問題|もんだい}がテーマになっている[漫画|まんが]を{見|み}つけてくること', 'Tìm truyện có chủ đề vấn đề xã hội.', 'Sai. Không phải tự tìm.'],
            ['{先生|せんせい}に{読|よ}んでくるように{言|い}われた[漫画|まんが]を{読|よ}んでおくこと', 'Đọc trước truyện giáo viên bảo đọc.', 'Đúng. 「先生が指定した漫画を読んでいくことになっていました」 (s4).'],
            ['{自分|じぶん}が{読|よ}んだことがない[漫画|まんが]を{探|さが}して、{読|よ}んでおくこと', 'Tự tìm truyện chưa đọc bao giờ để đọc trước.', 'Sai. Truyện chưa biết là do giáo viên chọn, không phải tự tìm.']
          ],
          answer: 3,
          evidence: ['s4']
        },
        {
          label: '28',
          question: ['q2', '‹このときの{私|わたし}›は、どのような@joutai([状態|じょうたい])だったか。', '"Tôi lúc đó" ở trạng thái thế nào?'],
          options: [
            ['ほかの{試験|しけん}の{勉強|べんきょう}がしたいのに、[漫画|まんが]を{読|よ}まなければならなかった。', 'Muốn học cho các môn thi khác mà phải đọc truyện tranh.', 'Đúng. Bình thường nhịn đọc truyện để học; lần này ngược lại – phải đọc truyện nên không học được môn khác (s9–s10).'],
            ['[漫画|まんが]が{読|よ}みたいのに、{試験|しけん}の{勉強|べんきょう}をしなければならなかった。', 'Muốn đọc truyện mà phải học thi.', 'Sai. Đây là trạng thái "bình thường" (いつもなら), không phải "lần này".'],
            ['{好|す}きな[漫画|まんが]が{読|よ}みたいのに、{好|す}きではない[漫画|まんが]を{読|よ}まなければならなかった。', 'Muốn đọc truyện mình thích mà phải đọc truyện không thích.', 'Sai. Bài không nói là không thích, mà là không biết.'],
            ['{試験|しけん}の{勉強|べんきょう}をしなければならないのに、[漫画|まんが]を{読|よ}むのを[我慢|がまん]できなかった。', 'Phải học thi mà không nhịn được đọc truyện.', 'Sai. Tác giả đọc truyện vì bị BẮT, không phải vì không nhịn được.']
          ],
          answer: 1,
          evidence: ['s9', 's10']
        },
        {
          label: '29',
          question: ['q3', '「{私|わたし}」は{今|いま}、どんな{気持|きも}ちになっているか。', 'Bây giờ "tôi" có cảm giác thế nào?'],
          options: [
            ['しばらくは、{休|やす}みの{日|ひ}だけに[漫画|まんが]を{読|よ}もう。', 'Tạm thời chỉ đọc truyện vào ngày nghỉ.', 'Sai. "お休みにしたい" = muốn tạm nghỉ đọc, không phải đọc vào ngày nghỉ.'],
            ['しばらくは、{好|す}きな[漫画|まんが]しか{読|よ}みたくない。', 'Tạm thời chỉ muốn đọc truyện mình thích.', 'Sai. Bài không nói vậy.'],
            ['しばらくは、[我慢|がまん]して[漫画|まんが]を{読|よ}もう。', 'Tạm thời cố nhịn mà đọc truyện.', 'Sai. Ngược nghĩa.'],
            ['しばらくは、[漫画|まんが]は{読|よ}みたくない。', 'Tạm thời không muốn đọc truyện tranh.', 'Đúng. 「しばらく漫画はお休みにしたい気分です」 (s11).']
          ],
          answer: 4,
          evidence: ['s11']
        }
      ],
      summary: 'Du học sinh mê truyện tranh Nhật nên đăng ký môn "đọc truyện tranh để suy nghĩ về xã hội", nhưng đó là thất bại: mỗi tuần phải đọc truyện do giáo viên chỉ định, toàn truyện lạ nên mất thời gian. Trước kỳ thi cuối kỳ phải đọc bộ 3 tập, không học được môn khác, phải bớt ngủ. Thi ổn nhưng giờ muốn tạm nghỉ truyện tranh.',
      structure: [
        ['Đoạn 1', 'Đăng ký môn học → "失敗"'],
        ['Đoạn 2', 'Bài tập hằng tuần: đọc truyện được chỉ định'],
        ['Đoạn 3', 'Kỳ thi: phải đọc 3 tập → "逆" (gạch chân)'],
        ['Đoạn 4', 'Cảm giác hiện tại']
      ],
      grammar: [
        ['〜ことになっていました', 'Theo quy định thì phải…', '漫画を読んでいくことになっていました'],
        ['〜ものばかり', 'Toàn là…', '私が知らないものばかりだった'],
        ['〜ておくように言われる', 'Được dặn làm sẵn…', '漫画を読んでおくように先生に言われました'],
        ['〜も（数量）', 'Tới tận… (nhấn mạnh số lượng nhiều)', '全部で3巻もあり'],
        ['いつもなら〜が、〜', 'Nếu như mọi khi thì…, nhưng…', 'いつもなら…我慢するのですが、このときの私は逆だった']
      ],
      tip: '"逆" (ngược lại) → xác định rõ trạng thái "bình thường" trước (いつもなら: nhịn truyện để học) rồi đảo lại. Lựa chọn mô tả trạng thái bình thường là bẫy.'
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
          ['s1', 'A{町|まち}は@keshiki([景色|けしき])の{美|うつく}しい@umizoi([海沿|うみぞ]い)の{町|まち}で、{毎週|まいしゅう}{日曜|にちよう}の{朝|あさ}に@minato([港|みなと])で{開|ひら}かれる「@asaichi({朝市|あさいち})」も{人気|にんき}がある。', 'Thị trấn A là thị trấn ven biển phong cảnh đẹp, chợ phiên buổi sáng mở ở bến cảng vào sáng Chủ nhật hằng tuần cũng rất được ưa chuộng.'],
          ['s2', '{朝市|あさいち}は、A{町|まち}にある{店|みせ}が、{魚|さかな}や{肉|にく}、{野菜|やさい}、パン、ケーキなどを{売|う}る@ichiba({市場|いちば})で、{近|ちか}くの{市|し}や{町|まち}からも{客|きゃく}が@oozei([大勢|おおぜい])やってくる。', 'Chợ phiên là nơi các cửa hàng trong thị trấn A bán cá, thịt, rau, bánh mì, bánh ngọt…, khách từ các thành phố, thị trấn lân cận cũng đến rất đông.']
        ] },
        { t: 'p', s: [
          ['s3', '{朝市|あさいち}を{始|はじ}めたのは、A{町|まち}に{昔|むかし}からある{店|みせ}の@shujin({主人|しゅじん})たちである。', 'Người khởi xướng chợ phiên là chủ các cửa hàng lâu đời ở thị trấn A.'],
          ['s4', '{約|やく}30{年|ねん}{前|まえ}、{大|おお}きなスーパーマーケットができた。', 'Khoảng 30 năm trước, một siêu thị lớn được mở ra.'],
          ['s5', '{多|おお}くの{人|ひと}がスーパーを{利用|りよう}するようになってしまったため、{店|みせ}の{主人|しゅじん}たちは、{自分|じぶん}たちの{店|みせ}の[商品|しょうひん]の{良|よ}さをもっと{知|し}ってもらおうと、{朝市|あさいち}を{始|はじ}めたのだ。', 'Vì nhiều người chuyển sang dùng siêu thị, các chủ cửa hàng đã mở chợ phiên để mọi người biết thêm về cái hay của hàng hóa ở cửa hàng mình.']
        ] },
        { t: 'p', s: [
          ['s6', '{朝市|あさいち}では、{人気|にんき}がある[商品|しょうひん]はすぐ@urikireru({売|う}り{切|き}れて)しまう。', 'Ở chợ phiên, hàng được ưa chuộng bán hết ngay.'],
          ['s7', 'そんなに{人気|にんき}があるなら、«r1(たくさん{売|う}れば)いいのだが、‹»r1(それ)›はしないそうだ。', 'Nếu được ưa chuộng đến thế thì bán thật nhiều là được, nhưng nghe nói họ không làm điều đó.'],
          ['s8', 'この{朝市|あさいち}の@mokuteki({目的|もくてき})は、{朝市|あさいち}でお{金|かね}を@kasegu([稼|かせ]ぐ)ことではなく、まず{朝市|あさいち}で{自分|じぶん}たちの{店|みせ}について{知|し}ってもらって、@fudan(ふだん)A{町|まち}の{店|みせ}で{買|か}い{物|もの}をする{客|きゃく}を{増|ふ}やすことだからだ。', 'Vì mục đích của chợ phiên không phải là kiếm tiền ở chợ, mà là trước hết để khách biết đến cửa hàng mình qua chợ, rồi tăng số khách mua sắm thường ngày ở các cửa hàng thị trấn A.'],
          ['s9', 'そのため、{朝市|あさいち}に[商品|しょうひん]が{出|だ}せる{人|ひと}は（　　）だけ、ということになっている。', 'Vì thế, quy định là chỉ (　　) mới được bày hàng ở chợ phiên.']
        ] }
      ],
      notes: [],
      refs: { r1: 'それ = bán thật nhiều món hàng được ưa chuộng ngay tại chợ phiên (たくさん売る).' },
      questions: [
        {
          label: '30',
          question: ['q1', 'A{町|まち}にある{店|みせ}の{主人|しゅじん}たちは、{何|なん}のために{朝市|あさいち}を{始|はじ}めたのか。', 'Các chủ cửa hàng ở thị trấn A mở chợ phiên để làm gì?'],
          options: [
            ['{町|まち}の{中|なか}に、{安|やす}く{買|か}い{物|もの}ができるところを{増|ふ}やすため', 'Để tăng chỗ mua sắm rẻ trong thị trấn.', 'Sai. Bài không nói về giá rẻ.'],
            ['{町|まち}の{中|なか}に、{近|ちか}くの{市|し}や{町|まち}から{来|く}る{客|きゃく}が{楽|たの}しめる{場所|ばしょ}を{作|つく}るため', 'Để tạo nơi vui chơi cho khách từ nơi khác.', 'Sai. Khách nơi khác đến là kết quả, không phải mục đích.'],
            ['{自分|じぶん}たちの{町|まち}の[景色|けしき]の{美|うつく}しさをもっと@senden([宣伝|せんでん])するため', 'Để quảng bá phong cảnh đẹp của thị trấn.', 'Sai. Bài không nói vậy.'],
            ['{自分|じぶん}たちの{店|みせ}の[商品|しょうひん]の{良|よ}さをもっと{知|し}ってもらうため', 'Để mọi người biết thêm cái hay của hàng hóa cửa hàng mình.', 'Đúng. 「自分たちの店の商品の良さをもっと知ってもらおうと、朝市を始めた」 (s5).']
          ],
          answer: 4,
          evidence: ['s5']
        },
        {
          label: '31',
          question: ['q2', '‹それ›とあるが、{何|なに}か。', '"Điều đó" là gì?'],
          options: [
            ['{朝市|あさいち}で{人気|にんき}がある[商品|しょうひん]を、{店|みせ}で{売|う}るより{高|たか}く{売|う}ること', 'Bán hàng được ưa chuộng ở chợ với giá cao hơn ở cửa hàng.', 'Sai. Bài không nói về giá.'],
            ['{朝市|あさいち}で{人気|にんき}がある[商品|しょうひん]を、{朝市|あさいち}でもっと{売|う}ること', 'Bán thêm nhiều hàng được ưa chuộng ngay tại chợ phiên.', 'Đúng. それ = 「（人気がある商品を）たくさん売る」 (s7).'],
            ['{朝市|あさいち}でしか{買|か}えない[商品|しょうひん]の[種類|しゅるい]を{増|ふ}やすこと', 'Tăng loại hàng chỉ mua được ở chợ.', 'Sai. Không được nhắc đến.'],
            ['{朝市|あさいち}でしか{買|か}えない[商品|しょうひん]を@heijitsu([平日|へいじつ])に{店|みせ}でも{売|う}ること', 'Bán hàng chỉ có ở chợ vào ngày thường ở cửa hàng.', 'Sai. Không được nhắc đến.']
          ],
          answer: 2,
          evidence: ['s6', 's7']
        },
        {
          label: '32',
          question: ['q3', '（　　）に{入|い}れるのに{最|もっと}もよいものはどれか。', 'Điền gì vào (　　) là phù hợp nhất?'],
          options: [
            ['A{町|まち}に{店|みせ}がある{人|ひと}', 'Người có cửa hàng ở thị trấn A.', 'Đúng. Mục đích là để khách biết đến và mua ở cửa hàng thị trấn A thường ngày (s8), nên chỉ người có cửa hàng ở A mới được bày hàng.'],
            ['A{町|まち}{以外|いがい}の{市|し}や{町|まち}に{店|みせ}がある{人|ひと}', 'Người có cửa hàng ở nơi khác ngoài thị trấn A.', 'Sai. Ngược với mục đích.'],
            ['A{町|まち}で{店|みせ}を{開|ひら}きたいと{思|おも}っている{人|ひと}', 'Người muốn mở cửa hàng ở thị trấn A.', 'Sai. Chưa có cửa hàng thì khách không thể "ふだん買い物" ở đó.'],
            ['A{町|まち}の{店|みせ}でふだんから{買|か}い{物|もの}をしている{人|ひと}', 'Người thường mua sắm ở cửa hàng thị trấn A.', 'Sai. Đây là khách hàng, không phải người bán.']
          ],
          answer: 1,
          evidence: ['s2', 's8', 's9']
        }
      ],
      summary: 'Thị trấn ven biển A có chợ phiên sáng Chủ nhật rất đông khách. Chợ do chủ các cửa hàng lâu đời mở ra từ khi có siêu thị lớn, nhằm cho mọi người biết cái hay của hàng hóa cửa hàng mình. Hàng được ưa chuộng bán hết ngay nhưng họ không bán thêm, vì mục đích không phải kiếm tiền mà là tăng khách mua thường ngày ở các cửa hàng thị trấn A – nên chỉ người có cửa hàng ở thị trấn A mới được bày hàng.',
      structure: [
        ['Đoạn 1', 'Giới thiệu thị trấn A và chợ phiên'],
        ['Đoạn 2', 'Lịch sử: siêu thị lớn → mở chợ (mục đích)'],
        ['Đoạn 3', 'Không bán thêm hàng hot (それ) → lý do (目的) → quy định ( )']
      ],
      grammar: [
        ['〜ようになってしまった', 'Đã (đáng tiếc) trở nên…', 'スーパーを利用するようになってしまった'],
        ['〜てもらおうと', 'Với ý định nhờ / để (ai) …', '良さをもっと知ってもらおうと'],
        ['〜ば〜のだが', 'Nếu… thì tốt, nhưng…', 'たくさん売ればいいのだが'],
        ['〜ではなく、〜', 'Không phải… mà là…', 'お金を稼ぐことではなく、…客を増やすこと'],
        ['〜ということになっている', 'Quy định là…', '（　）だけ、ということになっている']
      ],
      tip: 'Câu điền chỗ trống ở cuối bài: dựa vào câu ngay trước (そのため) – tức là "mục đích" của chợ. Mục đích là tăng khách cho cửa hàng thị trấn A → người bán phải là người có cửa hàng ở A.'
    }
  ]
};
