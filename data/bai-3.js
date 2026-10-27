/* Dữ liệu Bài 3 — 問題22, 23, 26, 27. Cú pháp đánh dấu: xem data/bai-1.js. °(…) = mục được khoanh tròn. */
window.BAI = {
  id: 3,
  title: 'Bài 3',
  subtitle: 'Quảng cáo tuyển học viên · Tờ rơi · Cách uống thuốc · Biểu đồ',

  vocab: {
    // 問題22
    narau: { w: '習う', r: 'ならう', hv: 'TẬP', vi: 'học (được ai dạy)' },
    boshuu: { w: '募集', r: 'ぼしゅう', hv: 'MỘ TẬP', vi: 'tuyển, chiêu mộ' },
    koukoku: { w: '広告', r: 'こうこく', hv: 'QUẢNG CÁO', vi: 'quảng cáo' },
    seito: { w: '生徒', r: 'せいと', hv: 'SINH ĐỒ', vi: 'học viên, học sinh' },
    taishou: { w: '対象', r: 'たいしょう', hv: 'ĐỐI TƯỢNG', vi: 'đối tượng', note: '〜を対象に / 〜を対象とした = dành cho…' },
    sai: { w: '〜歳', r: 'さい', hv: 'TUẾ', vi: '… tuổi' },
    ijou: { w: '以上', r: 'いじょう', hv: 'DĨ THƯỢNG', vi: 'trở lên' },
    zaijuu: { w: '在住', r: 'ざいじゅう', hv: 'TẠI TRÚ', vi: 'sống tại, cư trú ở' },
    zaikin: { w: '在勤', r: 'ざいきん', hv: 'TẠI CẦN', vi: 'làm việc tại' },
    zaigaku: { w: '在学', r: 'ざいがく', hv: 'TẠI HỌC', vi: 'đang đi học tại' },
    kikan: { w: '期間', r: 'きかん', hv: 'KỲ GIAN', vi: 'thời gian, thời hạn' },
    kaku: { w: '各〜', r: 'かく', hv: 'CÁC', vi: 'mỗi…, từng…' },
    zenkai: { w: '全〜回', r: 'ぜん〜かい', hv: 'TOÀN HỒI', vi: 'tổng cộng … buổi' },
    basho: { w: '場所', r: 'ばしょ', hv: 'TRƯỜNG SỞ', vi: 'địa điểm' },
    teiin: { w: '定員', r: 'ていいん', hv: 'ĐỊNH VIÊN', vi: 'số người tối đa, chỉ tiêu' },
    shimekiri: { w: 'しめきり（締め切り）', r: 'しめきり', hv: 'ĐẾ THIẾT', vi: 'đóng (nhận đăng ký), hạn chót', note: '定員になったらしめきり = đủ người là ngừng nhận' },
    hiyou: { w: '費用', r: 'ひよう', hv: 'PHÍ DỤNG', vi: 'chi phí' },
    moushikomi: { w: '申し込み', r: 'もうしこみ', hv: 'THÂN', kokuji: true, vi: 'đăng ký', note: 'Cũng viết là 申込. 申し込む = đăng ký. Chữ 込 do người Nhật tạo ra nên không có âm Hán Việt.' },
    houhou: { w: '方法', r: 'ほうほう', hv: 'PHƯƠNG PHÁP', vi: 'cách thức' },
    oufukuhagaki: { w: '往復はがき', r: 'おうふくはがき', hv: 'VÃNG PHỤC', vi: 'bưu thiếp hai chiều (kèm phần để bên kia trả lời)' },
    kibou: { w: '希望する', r: 'きぼうする', hv: 'HY VỌNG', vi: 'mong muốn, nguyện vọng' },
    youbi: { w: '曜日', r: 'ようび', hv: 'DIỆU NHẬT', vi: 'thứ (trong tuần)' },
    juusho: { w: '住所', r: 'じゅうしょ', hv: 'TRÚ SỞ', vi: 'địa chỉ' },
    kaki: { w: '下記', r: 'かき', hv: 'HẠ KÝ', vi: 'ghi dưới đây' },
    kekka: { w: '結果', r: 'けっか', hv: 'KẾT QUẢ', vi: 'kết quả' },
    henshin: { w: '返信', r: 'へんしん', hv: 'PHẢN TÍN', vi: 'thư trả lời', note: '返信はがき = phần bưu thiếp trả lời' },
    chuujun: { w: '中旬', r: 'ちゅうじゅん', hv: 'TRUNG TUẦN', vi: 'trung tuần (ngày 11–20)' },
    goro: { w: '〜頃', r: 'ごろ', hv: 'KHOẢNH', vi: 'khoảng (thời điểm)' },
    hassou: { w: '発送する', r: 'はっそうする', hv: 'PHÁT TỐNG', vi: 'gửi đi' },
    atesaki: { w: '宛て先', r: 'あてさき', hv: 'UYỂN TIÊN', vi: 'địa chỉ người nhận' },
    toiawase: { w: '問い合わせ', r: 'といあわせ', hv: 'VẤN HỢP', vi: 'hỏi thông tin, liên hệ' },
    shokyuu: { w: '初級', r: 'しょきゅう', hv: 'SƠ CẤP', vi: 'sơ cấp' },
    shochuukyuu: { w: '初中級', r: 'しょちゅうきゅう', hv: 'SƠ TRUNG CẤP', vi: 'sơ–trung cấp' },
    chuukyuu: { w: '中級', r: 'ちゅうきゅう', hv: 'TRUNG CẤP', vi: 'trung cấp' },
    chuujoukyuu: { w: '中上級', r: 'ちゅうじょうきゅう', hv: 'TRUNG THƯỢNG CẤP', vi: 'trung–cao cấp' },
    joukyuu: { w: '上級', r: 'じょうきゅう', hv: 'THƯỢNG CẤP', vi: 'cao cấp' },
    gogakugakkou: { w: '語学学校', r: 'ごがくがっこう', hv: 'NGỮ HỌC HỌC HIỆU', vi: 'trường ngoại ngữ' },
    toru: { w: '(クラスを) とる', r: 'とる', hv: '', vi: 'đăng ký học (lớp)' },
    shika: { w: '〜しか〜ない', r: 'しか〜ない', hv: '', vi: 'chỉ… (mà thôi)' },
    kanarazu: { w: '必ず', r: 'かならず', hv: 'TẤT', vi: 'chắc chắn, nhất định' },
    nyuukai: { w: '入会する', r: 'にゅうかいする', hv: 'NHẬP HỘI', vi: 'gia nhập (câu lạc bộ)' },
    chuusen: { w: '抽選', r: 'ちゅうせん', hv: 'TRỪU TUYỂN', vi: 'bốc thăm' },
    kyoudai: { w: '兄弟', r: 'きょうだい', hv: 'HUYNH ĐỆ', vi: 'anh chị em' },
    kimeru: { w: '決める', r: 'きめる', hv: 'QUYẾT', vi: 'quyết định', note: '決められる = được quyết định' },
    sorezore: { w: 'それぞれ', r: 'それぞれ', hv: '', vi: 'mỗi người, từng cái' },

    // 問題23
    eiga: { w: '映画', r: 'えいが', hv: 'ẢNH HỌA', vi: 'phim' },
    toshokan: { w: '図書館', r: 'としょかん', hv: 'ĐỒ THƯ QUÁN', vi: 'thư viện' },
    muryou: { w: '無料', r: 'むりょう', hv: 'VÔ LIỆU', vi: 'miễn phí' },
    jouei: { w: '上映', r: 'じょうえい', hv: 'THƯỢNG ẢNH', vi: 'chiếu phim', note: '上映会 = buổi chiếu phim' },
    annai: { w: '案内', r: 'あんない', hv: 'ÁN NỘI', vi: 'thông báo, hướng dẫn' },
    natsukashii: { w: 'なつかしい（懐かしい）', r: 'なつかしい', hv: 'HOÀI', vi: 'gợi nhớ, hoài niệm' },
    okoshi: { w: 'お越しください', r: 'おこしください', hv: 'VIỆT', vi: 'xin mời đến (kính ngữ của 来てください)' },
    meishou: { w: '名称', r: 'めいしょう', hv: 'DANH XƯNG', vi: 'tên gọi' },
    nichiji: { w: '日時', r: 'にちじ', hv: 'NHẬT THỜI', vi: 'ngày giờ' },
    tamokuteki: { w: '多目的ホール', r: 'たもくてきホール', hv: 'ĐA MỤC ĐÍCH', vi: 'hội trường đa năng' },
    ippan: { w: '一般', r: 'いっぱん', hv: 'NHẤT BAN', vi: 'người lớn nói chung, đại chúng' },
    hitsuyou: { w: '必要', r: 'ひつよう', hv: 'TẤT YẾU', vi: 'cần' },
    fuyou: { w: '不要', r: 'ふよう', hv: 'BẤT YẾU', vi: 'không cần' },
    senchakujun: { w: '先着順', r: 'せんちゃくじゅん', hv: 'TIÊN TRƯỚC THUẬN', vi: 'ai đến trước được trước', note: '先着30名 = 30 người đến trước' },
    naiyou: { w: '内容', r: 'ないよう', hv: 'NỘI DUNG', vi: 'nội dung' },
    muriyari: { w: '無理やり', r: 'むりやり', hv: 'VÔ LÝ', vi: 'bắt ép, cưỡng ép' },
    senpai: { w: '先輩', r: 'せんぱい', hv: 'TIÊN BỐI', vi: 'đàn anh, đàn chị' },
    taikai: { w: '大会', r: 'たいかい', hv: 'ĐẠI HỘI', vi: 'giải đấu, cuộc thi' },
    bakushou: { w: '爆笑', r: 'ばくしょう', hv: 'BỘC TIẾU', vi: 'cười vỡ bụng' },
    renai: { w: '恋愛', r: 'れんあい', hv: 'LUYẾN ÁI', vi: 'tình yêu, yêu đương' },
    shutsuen: { w: '出演', r: 'しゅつえん', hv: 'XUẤT DIỄN', vi: 'diễn xuất, diễn viên' },
    shuukaishitsu: { w: '集会室', r: 'しゅうかいしつ', hv: 'TẬP HỘI THẤT', vi: 'phòng họp, phòng sinh hoạt chung' },
    jidou: { w: '児童', r: 'じどう', hv: 'NHI ĐỒNG', vi: 'trẻ em (tuổi tiểu học)' },
    hogosha: { w: '保護者', r: 'ほごしゃ', hv: 'BẢO HỘ GIẢ', vi: 'phụ huynh, người giám hộ' },
    ningen: { w: '人間', r: 'にんげん', hv: 'NHÂN GIAN', vi: 'con người' },
    kikai: { w: '機械', r: 'きかい', hv: 'CƠ GIỚI', vi: 'máy móc' },
    hatsumei: { w: '発明する', r: 'はつめいする', hv: 'PHÁT MINH', vi: 'phát minh' },
    shounen: { w: '少年', r: 'しょうねん', hv: 'THIẾU NIÊN', vi: 'cậu bé, thiếu niên' },
    tatakai: { w: '戦い', r: 'たたかい', hv: 'CHIẾN', vi: 'cuộc chiến' },
    hitorigurashi: { w: '一人暮らし', r: 'ひとりぐらし', hv: 'NHẤT NHÂN MỘ', vi: 'sống một mình' },
    tou: { w: '問う', r: 'とう', hv: 'VẤN', vi: 'đặt câu hỏi, chất vấn' },
    mondaisaku: { w: '問題作', r: 'もんだいさく', hv: 'VẤN ĐỀ TÁC', vi: 'tác phẩm đặt ra vấn đề, gây suy ngẫm' },
    sekaiteki: { w: '世界的', r: 'せかいてき', hv: 'THẾ GIỚI ĐÍCH', vi: 'mang tầm thế giới' },
    ninkimono: { w: '人気者', r: 'にんきもの', hv: 'NHÂN KHÍ GIẢ', vi: 'người (nhân vật) được yêu thích' },
    honobono: { w: 'ほのぼの', r: 'ほのぼの', hv: '', vi: 'ấm áp, nhẹ nhàng' },
    muke: { w: '〜向け', r: 'むけ', hv: 'HƯỚNG', vi: 'dành cho…' },

    // 問題26
    jouzai: { w: '錠剤', r: 'じょうざい', hv: 'ĐĨNH TỄ', vi: 'thuốc viên nén' },
    konagusuri: { w: 'こな薬（粉薬）', r: 'こなぐすり', hv: 'PHẤN DƯỢC', vi: 'thuốc bột' },
    kapuseru: { w: 'カプセル', r: 'カプセル', hv: '', vi: 'viên nang' },
    nurigusuri: { w: '塗り薬', r: 'ぬりぐすり', hv: 'ĐỒ DƯỢC', vi: 'thuốc bôi' },
    harigusuri: { w: 'はり薬（貼り薬）', r: 'はりぐすり', hv: 'THIẾP DƯỢC', vi: 'thuốc dán' },
    chigai: { w: '違い', r: 'ちがい', hv: 'VI', vi: 'sự khác nhau' },
    kusuri: { w: '薬', r: 'くすり', hv: 'DƯỢC', vi: 'thuốc' },
    fukuro: { w: '袋', r: 'ふくろ', hv: 'ĐẠI', vi: 'túi' },
    naiyouyaku: { w: '内用薬', r: 'ないようやく', hv: 'NỘI DỤNG DƯỢC', vi: 'thuốc uống' },
    gaiyouyaku: { w: '外用薬', r: 'がいようやく', hv: 'NGOẠI DỤNG DƯỢC', vi: 'thuốc dùng ngoài da' },
    hifu: { w: '皮膚', r: 'ひふ', hv: 'BÌ PHU', vi: 'da' },
    sankou: { w: '参考', r: 'さんこう', hv: 'THAM KHẢO', vi: 'tham khảo' },
    sama: { w: '様', r: 'さま', hv: 'DẠNG', vi: 'kính gửi… (gắn sau tên)' },
    jou: { w: '〜錠', r: 'じょう', hv: 'ĐĨNH', vi: '… viên (đếm thuốc viên)' },
    hou: { w: '〜包', r: 'ほう', hv: 'BAO', vi: '… gói (đếm thuốc bột)' },
    zutsu: { w: '〜ずつ', r: 'ずつ', hv: '', vi: 'mỗi…' },
    kai: { w: '〜回', r: 'かい', hv: 'HỒI', vi: '… lần' },
    neru: { w: '寝る', r: 'ねる', hv: 'TẨM', vi: 'ngủ', note: '寝る前 = trước khi ngủ' },
    yuugata: { w: '夕方', r: 'ゆうがた', hv: 'TỊCH PHƯƠNG', vi: 'chiều tối' },
    nichibun: { w: '〜日分', r: 'にちぶん', hv: 'NHẬT PHÂN', vi: 'lượng dùng cho … ngày', note: '4日分 đọc là よっかぶん' },
    shokuzen: { w: '食前', r: 'しょくぜん', hv: 'THỰC TIỀN', vi: 'trước bữa ăn' },
    shokkan: { w: '食間', r: 'しょっかん', hv: 'THỰC GIAN', vi: 'giữa hai bữa ăn' },
    shokugo: { w: '食後', r: 'しょくご', hv: 'THỰC HẬU', vi: 'sau bữa ăn' },
    iin: { w: '医院', r: 'いいん', hv: 'Y VIỆN', vi: 'phòng khám' },
    kazoekata: { w: '数え方', r: 'かぞえかた', hv: 'SỐ PHƯƠNG', vi: 'cách đếm' },
    choushoku: { w: '朝食', r: 'ちょうしょく', hv: 'TRIÊU THỰC', vi: 'bữa sáng' },
    chuushoku: { w: '昼食', r: 'ちゅうしょく', hv: 'TRÚ THỰC', vi: 'bữa trưa' },
    yuushoku: { w: '夕食', r: 'ゆうしょく', hv: 'TỊCH THỰC', vi: 'bữa tối' },

    // 問題27
    mokuteki: { w: '目的', r: 'もくてき', hv: 'MỤC ĐÍCH', vi: 'mục đích' },
    ankeeto: { w: 'アンケート', r: 'アンケート', hv: '', vi: 'phiếu khảo sát' },
    chousa: { w: '調査する', r: 'ちょうさする', hv: 'ĐIỀU TRA', vi: 'điều tra, khảo sát' },
    baai: { w: '場合', r: 'ばあい', hv: 'TRƯỜNG HỢP', vi: 'trường hợp' },
    zentai: { w: '全体', r: 'ぜんたい', hv: 'TOÀN THỂ', vi: 'toàn bộ' },
    yaku: { w: '約', r: 'やく', hv: 'ƯỚC', vi: 'khoảng' },
    wari: { w: '〜割', r: 'わり', hv: 'CÁT', vi: '… phần mười (1割 = 10%)', note: '8割 = 80%' },
    danjobetsu: { w: '男女別', r: 'だんじょべつ', hv: 'NAM NỮ BIỆT', vi: 'theo giới tính' },
    nitaishite: { w: '〜に対して', r: 'にたいして', hv: 'ĐỐI', vi: 'trong khi… (so sánh đối lập)' },
    wariai: { w: '割合', r: 'わりあい', hv: 'CÁT HỢP', vi: 'tỉ lệ' },
    uwamawaru: { w: '上回る', r: 'うわまわる', hv: 'THƯỢNG HỒI', vi: 'vượt quá, cao hơn' },
    arawasu: { w: '表す', r: 'あらわす', hv: 'BIỂU', vi: 'thể hiện, biểu thị' },
    seikatsuhi: { w: '生活費', r: 'せいかつひ', hv: 'SINH HOẠT PHÍ', vi: 'chi phí sinh hoạt' },
    kasegu: { w: '稼ぐ', r: 'かせぐ', hv: 'GIÁ', vi: 'kiếm (tiền)' },
    seikatsu: { w: '生活', r: 'せいかつ', hv: 'SINH HOẠT', vi: 'cuộc sống, sinh hoạt' },
    hobo: { w: 'ほぼ', r: 'ほぼ', hv: '', vi: 'gần như, xấp xỉ' },
    dousuu: { w: '同数', r: 'どうすう', hv: 'ĐỒNG SỐ', vi: 'cùng số lượng' },
    shakaikeiken: { w: '社会経験', r: 'しゃかいけいけん', hv: 'XÃ HỘI KINH NGHIỆM', vi: 'trải nghiệm xã hội' },
    bengakuhi: { w: '勉学費', r: 'べんがくひ', hv: 'MIỄN HỌC PHÍ', vi: 'chi phí học tập' },
    fukumu: { w: '含める', r: 'ふくめる', hv: 'HÀM', vi: 'tính cả, bao gồm', note: '〜も含め = tính cả…' },
    shimeru: { w: '占める', r: 'しめる', hv: 'CHIẾM', vi: 'chiếm (tỉ lệ)' },
    chuumoku: { w: '注目する', r: 'ちゅうもくする', hv: 'CHÚ MỤC', vi: 'chú ý, để tâm' },
    mukaitou: { w: '無回答', r: 'むかいとう', hv: 'VÔ HỒI ĐÁP', vi: 'không trả lời' },
    noberu: { w: '述べる', r: 'のべる', hv: 'THUẬT', vi: 'trình bày, nêu' },
    bunno: { w: '〜分の〜', r: 'ぶんの', hv: 'PHÂN', vi: '… phần … (phân số)', note: '3分の2 = 2/3' },
    hotondo: { w: 'ほとんど', r: 'ほとんど', hv: '', vi: 'hầu hết' }
  },

  problems: [
    /* ───────────── 問題22 ───────────── */
    {
      id: '22',
      review: { pages: [78, 79], answerPage: 188, doubts: [] },
      kind: '募集広告',
      kindVi: 'Quảng cáo tuyển học viên',
      style: 'notice',
      before: ['b', '{今|いま}、@narau({習|なら}いたい)ことがありますか。それはどんなことですか。', 'Hiện giờ bạn có điều gì muốn học không? Đó là gì?'],
      lead: ['l', 'つぎの{文章|ぶんしょう}は{教室|きょうしつ}の@boshuu([募集|ぼしゅう])@koukoku({広告|こうこく})である。', 'Đoạn văn sau là quảng cáo tuyển học viên của một lớp học.'],
      blocks: [
        { t: 'title', s: [['t1', 'テニス{教室|きょうしつ}　@seito({生徒|せいと})[募集|ぼしゅう]！', 'Lớp tennis tuyển học viên!']] },
        { t: 'lines', s: [['s1', '{一緒|いっしょ}にテニスをしませんか？', 'Bạn có muốn chơi tennis cùng chúng tôi không?']] },
        { t: 'lines', cls: 'gap', s: [
          ['i1', '@taishou([対象|たいしょう])：20@sai([歳|さい])@ijou({以上|いじょう})。A{市|し}@zaijuu([在住|ざいじゅう])・@zaikin([在勤|ざいきん])※1・@zaigaku([在学|ざいがく])※2', 'Đối tượng: từ 20 tuổi trở lên. Người sống, làm việc (注1) hoặc đi học (注2) ở thành phố A.'],
          ['i2', '@kikan([期間|きかん])：4月～7月（@kaku([各|かく])コース@zenkai([全|ぜん]15[回|かい])）', 'Thời gian: tháng 4 – tháng 7 (mỗi khóa tổng cộng 15 buổi)'],
          ['i3', '@basho({場所|ばしょ})：さくらテニスコート', 'Địa điểm: sân tennis Sakura'],
          ['i4', '@teiin([定員|ていいん])：[各|かく]クラス14{人|にん}まで（[定員|ていいん]になったら@shimekiri(しめきり)）', 'Số người tối đa: mỗi lớp 14 người (đủ người thì ngừng nhận).'],
          ['i5', '@hiyou([費用|ひよう])：3,000{円|えん}', 'Học phí: 3.000 yên'],
          ['i6', '@moushikomi([申|もう]し[込|こ]み)@houhou({方法|ほうほう})：@oufukuhagaki([往復|おうふく]はがき)（1{人|り}1[枚|まい]）に@kibou([希望|きぼう]する)クラス{名|めい}、@youbi([曜日|ようび])、{時間|じかん}、@juusho([住所|じゅうしょ])、{名前|なまえ}、{電話|でんわ}{番号|ばんごう}を{書|か}いて、2月15日（{水|すい}）までに@kaki([下記|かき])までお{送|おく}りください。', 'Cách đăng ký: ghi tên lớp muốn học, thứ, giờ, địa chỉ, họ tên, số điện thoại lên bưu thiếp hai chiều (mỗi người 1 tấm) rồi gửi đến địa chỉ dưới đây trước thứ Tư ngày 15/2.'],
          ['i7', '@kekka([結果|けっか])は@henshin([返信|へんしん])はがきで、3{月|がつ}@chuujun([中旬|ちゅうじゅん])@goro([頃|ごろ])までに@hassou([発送|はっそう])します。', 'Kết quả sẽ được gửi bằng bưu thiếp trả lời, chậm nhất khoảng trung tuần tháng 3.']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['i8', 'はがきの@atesaki([宛|あ]て[先|さき])：〒101-2222　A{市|し}[山田町|やまだちょう]2-2-2　さくらテニスクラブ', 'Địa chỉ gửi bưu thiếp: 〒101-2222, 2-2-2 Yamada-chō, thành phố A, CLB tennis Sakura'],
          ['i9', '@toiawase({問|と}い{合|あ}わせ){先|さき}：☎ 033-111-2222', 'Liên hệ: ☎ 033-111-2222']
        ] },
        { t: 'table', head: ['', '{時間|じかん}', '{月|げつ}', '{火|か}', '{水|すい}', '{木|もく}', '{金|きん}'], rows: [
          ['r1', ['1', '9:00-10:20', '@shokyuu([初級|しょきゅう])　a', '@chuujoukyuu([中上級|ちゅうじょうきゅう])', '', '[初級|しょきゅう]　e', '[初級|しょきゅう]　f'], 'Ca 1 (9:00–10:20): T2 sơ cấp a · T3 trung–cao cấp · T5 sơ cấp e · T6 sơ cấp f'],
          ['r2', ['2', '10:40-12:00', '', '@joukyuu([上級|じょうきゅう])', '@shochuukyuu([初中級|しょちゅうきゅう])', '', '[上級|じょうきゅう]'], 'Ca 2 (10:40–12:00): T3 cao cấp · T4 sơ–trung cấp · T6 cao cấp'],
          ['r3', ['3', '15:00-16:20', '[中上級|ちゅうじょうきゅう]', '', '', '[初中級|しょちゅうきゅう]', ''], 'Ca 3 (15:00–16:20): T2 trung–cao cấp · T5 sơ–trung cấp'],
          ['r4', ['4', '17:00-18:20', '@chuukyuu([中級|ちゅうきゅう])　b', '[中級|ちゅうきゅう]　c', '[初級|しょきゅう]　d', '[上級|じょうきゅう]', '[中上級|ちゅうじょうきゅう]　g'], 'Ca 4 (17:00–18:20): T2 trung cấp b · T3 trung cấp c · T4 sơ cấp d · T5 cao cấp · T6 trung–cao cấp g']
        ] }
      ],
      notes: [
        '（注1）[在勤|ざいきん]：そこで{働|はたら}いていること',
        '（注2）[在学|ざいがく]：そこで{学校|がっこう}に[通|かよ]っていること'
      ],
      refs: {},
      questions: [
        {
          label: '問1',
          question: ['q1', 'ローラさんはテニスをしたことがないが、テニスを{習|なら}いたいと{思|おも}っている。{月|げつ}・{水|すい}・{木|もく}は9：30から16：00まで@gogakugakkou({語学|ごがく}{学校|がっこう})で{勉強|べんきょう}している。{学校|がっこう}からテニスクラブは{歩|ある}いて5{分|ふん}である。ローラさんが@toru(とる)ことができるクラスはどれか。', 'Laura chưa từng chơi tennis nhưng muốn học. Thứ Hai, Tư, Năm Laura học ở trường ngoại ngữ từ 9:30 đến 16:00. Từ trường đến CLB tennis đi bộ 5 phút. Laura có thể đăng ký lớp nào?'],
          options: [
            ['aとc', 'a và c', 'Sai. Lớp a (T2, 9:00) trùng giờ học ở trường; lớp c là trung cấp, không hợp với người mới.'],
            ['aとd', 'a và d', 'Sai. Lớp a (T2, 9:00–10:20) trùng giờ học ở trường ngoại ngữ.'],
            ['dとf', 'd và f', 'Đúng. Người chưa chơi bao giờ → lớp sơ cấp (a, d, e, f). a (T2) và e (T5) trùng giờ học. d (T4, 17:00, sau giờ học) và f (T6, không có giờ học) đều được.'],
            ['cとg', 'c và g', 'Sai. c là trung cấp, g là trung–cao cấp, không phải lớp cho người mới.']
          ],
          answer: 3,
          bookAnswer: 3,
          evidence: ['r1', 'r4']
        },
        {
          label: '問2',
          question: ['q2', '@moushikomi([申|もう]し[込|こ]み)について、{正|ただ}しいものはどれか。', 'Về việc đăng ký, điều nào đúng?'],
          options: [
            ['A{市|し}に{住|す}んでいる{人|ひと}@shika(しか)[申|もう]し[込|こ]めない。', 'Chỉ người sống ở thành phố A mới đăng ký được.', 'Sai. Người làm việc (在勤) hoặc đi học (在学) ở thành phố A cũng đăng ký được.'],
            ['2月15日までに[往復|おうふく]はがきを{送|おく}れば、@kanarazu([必|かなら]ず)@nyuukai([入会|にゅうかい])できる。', 'Nếu gửi bưu thiếp hai chiều trước ngày 15/2 thì chắc chắn được vào.', 'Sai. Mỗi lớp tối đa 14 người, đủ người là ngừng nhận (定員になったらしめきり), nên không chắc chắn.'],
            ['[申|もう]し[込|こ]み[者|しゃ]が[定員|ていいん]{以上|いじょう}になった@baai([場合|ばあい])は、@chuusen([抽選|ちゅうせん])で@kimeru([決|き]められる)。', 'Nếu người đăng ký vượt số tối đa thì sẽ bốc thăm.', 'Sai. Không có bốc thăm; đủ người là đóng đăng ký.'],
            ['@kyoudai({兄弟|きょうだい})で{入|はい}りたい[場合|ばあい]も@sorezore(それぞれ)[往復|おうふく]はがきを{送|おく}らなければならない。', 'Anh chị em muốn cùng vào học thì cũng phải gửi bưu thiếp riêng từng người.', 'Đúng. Mỗi người 1 tấm bưu thiếp (1人1枚).']
          ],
          answer: 4,
          bookAnswer: 4,
          evidence: ['i1', 'i4', 'i6']
        }
      ],
      summary: 'Quảng cáo tuyển học viên lớp tennis: dành cho người từ 20 tuổi sống, làm việc hoặc đi học ở thành phố A; học từ tháng 4 đến tháng 7 (15 buổi), mỗi lớp tối đa 14 người, đủ người là ngừng nhận; học phí 3.000 yên. Đăng ký bằng bưu thiếp hai chiều, mỗi người 1 tấm, gửi trước 15/2. Bảng lịch cho biết các lớp theo trình độ, ngày và giờ.',
      structure: [
        ['Tiêu đề', 'Lớp tennis tuyển học viên'],
        ['Thông tin', 'Đối tượng · thời gian · địa điểm · số người · học phí · cách đăng ký'],
        ['Liên hệ', 'Địa chỉ gửi bưu thiếp, số điện thoại'],
        ['Bảng lịch', 'Ca học × thứ trong tuần → trình độ và ký hiệu lớp']
      ],
      grammar: [
        ['〜たら、しめきり', 'Khi… thì ngừng nhận.', '定員になったらしめきり'],
        ['〜までに', 'Trước (thời hạn)…', '2月15日（水）までに…お送りください'],
        ['〜しか〜ない', 'Chỉ… mà thôi.', 'A市に住んでいる人しか申し込めない'],
        ['〜ば、必ず〜', 'Nếu… thì chắc chắn…', '往復はがきを送れば、必ず入会できる'],
        ['〜なければならない', 'Phải…', 'それぞれ往復はがきを送らなければならない']
      ],
      tip: 'Với bài tìm thông tin có bảng lịch: (1) xác định điều kiện của nhân vật (trình độ, ngày bận, giờ bận); (2) lọc bảng theo từng điều kiện; (3) đừng quên đọc kỹ phần ghi chú trong ngoặc như (1人1枚), (定員になったらしめきり).'
    },

    /* ───────────── 問題23 ───────────── */
    {
      id: '23',
      review: { pages: [80, 81], answerPage: 189, bookAnswer: 4, doubts: [] },
      kind: 'パンフレット',
      kindVi: 'Tờ rơi',
      style: 'notice',
      before: ['b', 'どんなところで@eiga({映画|えいが})を{見|み}ますか。', 'Bạn thường xem phim ở đâu?'],
      lead: ['l', 'これは、[南|みなみ]みなと{市|し}の@toshokan({図書館|としょかん})で{行|おこな}われている@muryou([無料|むりょう])の{映画|えいが}@jouei([上映|じょうえい]){会|かい}の@annai([案内|あんない])である。', 'Đây là thông báo về các buổi chiếu phim miễn phí tổ chức tại thư viện thành phố Minami-minato.'],
      blocks: [
        { t: 'title', s: [['t1', '[南|みなみ]みなと{図書館|としょかん}　{映画|えいが}[上映|じょうえい]{会|かい}', 'Buổi chiếu phim – Thư viện Minami-minato']] },
        { t: 'p', s: [
          ['s1', '[南|みなみ]みなと{図書館|としょかん}では、@natsukashii(なつかしい){映画|えいが}や{子|こ}どもを@taishou([対象|たいしょう]とした){映画|えいが}を[無料|むりょう]で[上映|じょうえい]しています。', 'Thư viện Minami-minato chiếu miễn phí những bộ phim hoài niệm và phim dành cho trẻ em.'],
          ['s2', 'ぜひみなさんで@okoshi(お[越|こ]しください)。', 'Rất mong mọi người đến xem.']
        ] },
        { t: 'table', head: ['@meishou([名称|めいしょう])', '@nichiji({日時|にちじ})・{場所|ばしょ}', '[対象|たいしょう]・[定員|ていいん]・[申込|もうしこみ]{方法|ほうほう}', '@naiyou([内容|ないよう])'], rows: [
          ['m1', ['①ラストダンスは[君|きみ]と', '3月2日　{午後|ごご}2{時|じ}～　3[階|かい]@tamokuteki([多目的|たもくてき]ホール)', '@ippan([一般|いっぱん])50[名|めい]（@moushikomi([申込|もうしこみ])@hitsuyou([必要|ひつよう])：ネットかはがきで。@senchakujun([先着順|せんちゃくじゅん])）', '{大学生|だいがくせい}の[康太|こうた]は@muriyari([無理|むり]やり)ダンス[部|ぶ]に{入|い}れられて、@senpai([先輩|せんぱい])と@taikai({大会|たいかい})に{出|で}ることに。@bakushou([爆笑|ばくしょう])@renai([恋愛|れんあい])コメディ。@shutsuen([出演|しゅつえん])：[大木健|おおきたける]、[中田真美|なかたまみ]'], '① "Last Dance with You" – 2/3, 2 giờ chiều, hội trường đa năng tầng 3. Người lớn, 50 người (cần đăng ký qua mạng hoặc bưu thiếp, ai trước được trước). Nội dung: sinh viên Kōta bị ép vào câu lạc bộ nhảy và phải cùng đàn anh, đàn chị dự thi. Phim hài tình cảm vui nhộn. Diễn viên: Ōki Takeru, Nakata Mami.'],
          ['m2', ['②ドキドキマシンをさがせ', '3月9日　{午後|ごご}2{時|じ}～　2[階|かい]@shuukaishitsu([集会室|しゅうかいしつ])', '@jidou([児童|じどう])、@hogosha([保護者|ほごしゃ])　[先着|せんちゃく]30[名|めい]（[申込|もうしこみ]@fuyou([不要|ふよう])）', '@ningen({人間|にんげん})の{心|こころ}がわかるという@kikai([機械|きかい])を@hatsumei([発明|はつめい])した@shounen([少年|しょうねん])と[悪|あく]の[大王|だいおう]との@tatakai([戦|たたか]い)。[出演|しゅつえん]：[小林|こばやし]ゆうき・[森雪菜|もりゆきな]。'], '② "Đi tìm cỗ máy hồi hộp" – 9/3, 2 giờ chiều, phòng sinh hoạt tầng 2. Trẻ em và phụ huynh, 30 người đến trước (không cần đăng ký). Nội dung: cuộc chiến giữa cậu bé phát minh ra cỗ máy hiểu được lòng người và Đại vương độc ác. Diễn viên: Kobayashi Yūki, Mori Yukina.'],
          ['m3', ['③トモばあちゃんの[涙|なみだ]', '3月16日　{午後|ごご}3{時|じ}～　3[階|かい][多目的|たもくてき]ホール', '[一般|いっぱん]50[名|めい]（[申込|もうしこみ][必要|ひつよう]：ネットかはがきで。[先着順|せんちゃくじゅん]）', '@hitorigurashi([一人暮|ひとりぐ]らし)のトモばあちゃんの{家|いえ}の{前|まえ}に{赤|あか}ちゃんが。{家族|かぞく}とは{何|なに}かを@tou([問|と]う)@mondaisaku({問題|もんだい}[作|さく])。[出演|しゅつえん]：[黒沢美香子|くろさわみかこ]、[中村利男|なかむらとしお]'], '③ "Nước mắt bà Tomo" – 16/3, 3 giờ chiều, hội trường đa năng tầng 3. Người lớn, 50 người (cần đăng ký, ai trước được trước). Nội dung: trước nhà bà Tomo sống một mình bỗng có một em bé. Tác phẩm đặt câu hỏi "gia đình là gì". Diễn viên: Kurosawa Mikako, Nakamura Toshio.'],
          ['m4', ['④ホヨヨンと{楽|たの}しいおともだち', '3月23日　{午後|ごご}3{時|じ}～　2[階|かい][集会室|しゅうかいしつ]', '[児童|じどう]、[保護者|ほごしゃ]　[先着|せんちゃく]30[名|めい]（[申込|もうしこみ][不要|ふよう]）', '@sekaiteki({世界的|せかいてき})な@ninkimono({人気者|にんきもの})のクマ、ホヨヨンと{元気|げんき}な{友|とも}だちの@honobono(ほのぼの)アニメ。'], '④ "Hoyoyon và những người bạn vui vẻ" – 23/3, 3 giờ chiều, phòng sinh hoạt tầng 2. Trẻ em và phụ huynh, 30 người đến trước (không cần đăng ký). Nội dung: phim hoạt hình ấm áp về chú gấu Hoyoyon nổi tiếng thế giới và những người bạn năng động.']
        ] }
      ],
      notes: [],
      refs: {},
      question: ['q', 'エバさんは5[歳|さい]の{子|こ}どもといっしょに{子|こ}ども@muke([向|む]け)のアニメを{見|み}たい。どれがよいか。', 'Eva muốn cùng con 5 tuổi xem phim hoạt hình dành cho trẻ em. Nên chọn phim nào?'],
      options: [
        ['①「ラストダンスは[君|きみ]と」', '① "Last Dance with You"', 'Sai. Đối tượng là người lớn (一般), nội dung là phim hài tình cảm có diễn viên, không phải hoạt hình.'],
        ['②「ドキドキマシンをさがせ」', '② "Đi tìm cỗ máy hồi hộp"', 'Sai. Phim dành cho trẻ em nhưng có diễn viên đóng (出演), không phải phim hoạt hình.'],
        ['③「トモばあちゃんの[涙|なみだ]」', '③ "Nước mắt bà Tomo"', 'Sai. Phim cho người lớn về chủ đề gia đình, có diễn viên đóng.'],
        ['④「ホヨヨンと{楽|たの}しいおともだち」', '④ "Hoyoyon và những người bạn vui vẻ"', 'Đúng. Đối tượng là trẻ em và phụ huynh (児童、保護者), nội dung là phim hoạt hình (アニメ).']
      ],
      answer: 4,
      evidence: ['m4'],
      summary: 'Thư viện Minami-minato chiếu miễn phí 4 bộ phim vào tháng 3. Phim ① và ③ dành cho người lớn, cần đăng ký trước; phim ② và ④ dành cho trẻ em và phụ huynh, không cần đăng ký. Trong đó chỉ có ④ là phim hoạt hình.',
      structure: [
        ['Tiêu đề + lời mời', 'Thư viện chiếu phim miễn phí'],
        ['Bảng', 'Tên phim · ngày giờ, địa điểm · đối tượng, số người, cách đăng ký · nội dung']
      ],
      grammar: [
        ['〜を対象とした', 'Dành cho…, lấy … làm đối tượng.', '子どもを対象とした映画'],
        ['お〜ください', 'Mời… (kính ngữ).', 'ぜひみなさんでお越しください'],
        ['〜向け', 'Dành cho…', '子ども向けのアニメ'],
        ['〜ことに（なる）', 'Câu bị lược phần cuối (thường gặp trong giới thiệu phim): "thế là phải…".', '先輩と大会に出ることに。']
      ],
      tip: 'Câu hỏi có HAI điều kiện (cho trẻ 5 tuổi + là phim hoạt hình) thì phải kiểm tra cả hai cột: cột 対象 (児童 = trẻ em) và cột 内容 (アニメ). Phim ② đúng đối tượng nhưng là phim người đóng (có 出演).'
    },

    /* ───────────── 問題26 ───────────── */
    {
      id: '26',
      review: {
        pages: [86, 87], answerPage: 190,
        doubts: []
      },
      kind: '薬の飲み方',
      kindVi: 'Cách uống thuốc',
      style: 'medbag',
      before: ['b', '「@jouzai([錠剤|じょうざい])、@konagusuri(こな[薬|ぐすり])、@kapuseru(カプセル)、@nurigusuri([塗|ぬ]り[薬|ぐすり])、@harigusuri(はり[薬|ぐすり])」の@chigai([違|ちが]い)がわかりますか。', 'Bạn có phân biệt được "thuốc viên nén, thuốc bột, viên nang, thuốc bôi, thuốc dán" không?'],
      lead: ['l', '{下|した}は@kusuri([薬|くすり])の{入|はい}った@fukuro([袋|ふくろ])である。', 'Dưới đây là túi đựng thuốc.'],
      blocks: [
        { t: 'title', s: [['t1', '@naiyouyaku([内用薬|ないようやく])※1', 'Thuốc uống']] },
        { t: 'right', s: [['n1', '[田中|たなか]　マリア　@sama([様|さま])', 'Gửi: Tanaka Maria']] },
        { t: 'lines', cls: 'gap', s: [
          ['s1', 'ピンクの@jouzai([錠剤|じょうざい])　1@kai([回|かい])　2°(@jou([錠|じょう]))・@hou([包|ほう])※2　@zutsu(ずつ)　1{日|にち}　2[回|かい]', 'Viên nén màu hồng: mỗi lần 2 viên (khoanh 錠 = viên), ngày 2 lần'],
          ['s2', '（°(あさ)・ひる・°(@yuugata({夕方|ゆうがた}))・@neru([寝|ね]る){前|まえ}）', 'Khoanh: sáng, chiều tối (không khoanh: trưa, trước khi ngủ)'],
          ['s3', '4日@nichibun([分|ぶん])　@shokuzen([食前|しょくぜん])・@shokkan([食間|しょっかん])・°(@shokugo([食後|しょくご]))', 'Lượng cho 4 ngày – khoanh: sau bữa ăn']
        ] },
        { t: 'lines', cls: 'gap', s: [
          ['s4', '{白|しろ}のカプセル　1[回|かい]　1°([錠|じょう])・[包|ほう]　ずつ　1{日|にち}　3[回|かい]', 'Viên nang màu trắng: mỗi lần 1 viên, ngày 3 lần'],
          ['s5', '（°(あさ)・°(ひる)・°({夕方|ゆうがた})・[寝|ね]る{前|まえ}）', 'Khoanh: sáng, trưa, chiều tối'],
          ['s6', '4日[分|ぶん]　[食前|しょくぜん]・[食間|しょっかん]・°([食後|しょくご])', 'Lượng cho 4 ngày – khoanh: sau bữa ăn']
        ] },
        { t: 'right', cls: 'gap', s: [
          ['n2', 'わたなべ@iin([医院|いいん])', 'Phòng khám Watanabe'],
          ['n3', '○○[区|く]××[町|ちょう]1-2-3', 'Số 1-2-3, khu phố ××, quận ○○'],
          ['n4', '{電話|でんわ}　03-3333-2222', 'Điện thoại: 03-3333-2222']
        ] }
      ],
      notes: [
        '（注1）[内用薬|ないようやく]：{飲|の}む[薬|くすり]。@sankou([参考|さんこう])：@gaiyouyaku([外用薬|がいようやく])（@hifu([皮膚|ひふ])につける[薬|くすり]）、[塗|ぬ]り[薬|ぐすり]',
        '（注2）[包|ほう]：こな[薬|ぐすり]の@kazoekata([数|かぞ]え{方|かた})'
      ],
      refs: {},
      questions: [
        {
          label: '問1',
          question: ['q1', 'ピンクの[錠剤|じょうざい]と{白|しろ}のカプセルの{飲|の}み{方|かた}で{正|ただ}しいものはどれか。', 'Cách uống viên nén hồng và viên nang trắng, điều nào đúng?'],
          options: [
            ['@choushoku({朝食|ちょうしょく})・@chuushoku([昼食|ちゅうしょく])・@yuushoku({夕食|ゆうしょく})を{食|た}べた{後|あと}、それぞれ1[錠|じょう]ずつ{飲|の}む。', 'Sau bữa sáng, trưa, tối, mỗi loại uống 1 viên.', 'Sai. Viên hồng chỉ uống sáng và chiều tối, mỗi lần 2 viên.'],
            ['{朝食|ちょうしょく}・[昼食|ちゅうしょく]・{夕食|ゆうしょく}を{食|た}べた{後|あと}、それぞれ2[錠|じょう]ずつ{飲|の}む。', 'Sau bữa sáng, trưa, tối, mỗi loại uống 2 viên.', 'Sai. Viên trắng chỉ uống 1 viên mỗi lần; viên hồng không uống buổi trưa.'],
            ['ピンクの[錠剤|じょうざい]は{朝食|ちょうしょく}[後|ご]・{夕食|ゆうしょく}[後|ご]に2[錠|じょう]、{白|しろ}のカプセルは{朝食|ちょうしょく}[後|ご]・[昼食|ちゅうしょく][後|ご]・{夕食|ゆうしょく}[後|ご]に3[錠|じょう]{飲|の}む。', 'Viên hồng uống 2 viên sau bữa sáng và tối; viên trắng uống 3 viên sau bữa sáng, trưa, tối.', 'Sai. Viên trắng mỗi lần chỉ 1 viên ("3回" là số lần trong ngày, không phải số viên).'],
            ['ピンクの[錠剤|じょうざい]は{朝食|ちょうしょく}[後|ご]・{夕食|ゆうしょく}[後|ご]に2[錠|じょう]、{白|しろ}のカプセルは{朝食|ちょうしょく}[後|ご]・[昼食|ちゅうしょく][後|ご]・{夕食|ゆうしょく}[後|ご]に1[錠|じょう]{飲|の}む。', 'Viên hồng uống 2 viên sau bữa sáng và tối; viên trắng uống 1 viên sau bữa sáng, trưa, tối.', 'Đúng. Viên hồng: 1 lần 2 viên, ngày 2 lần (sáng, chiều tối), sau ăn. Viên trắng: 1 lần 1 viên, ngày 3 lần (sáng, trưa, chiều tối), sau ăn.']
          ],
          answer: 4,
          bookAnswer: 4,
          evidence: ['s1', 's2', 's4', 's5']
        },
        {
          label: '問2',
          question: ['q2', 'マリアさんは{朝食|ちょうしょく}[後|ご]、[薬|くすり]を{飲|の}んだ。{次|つぎ}にいつどんな[薬|くすり]を{飲|の}めばよいか。', 'Maria đã uống thuốc sau bữa sáng. Lần tới nên uống thuốc gì, khi nào?'],
          options: [
            ['[錠剤|じょうざい]とカプセルを[昼食|ちゅうしょく][後|ご]に{飲|の}む。', 'Uống viên nén và viên nang sau bữa trưa.', 'Sai. Viên nén hồng không uống buổi trưa.'],
            ['[錠剤|じょうざい]を[昼食|ちゅうしょく][後|ご]に{飲|の}む。', 'Uống viên nén sau bữa trưa.', 'Sai. Buổi trưa chỉ uống viên nang trắng.'],
            ['カプセルを[昼食|ちゅうしょく][後|ご]に{飲|の}む。', 'Uống viên nang sau bữa trưa.', 'Đúng. Lần uống tiếp theo là sau bữa trưa, và buổi trưa chỉ có viên nang trắng được khoanh "ひる".'],
            ['[錠剤|じょうざい]とカプセルを{夕食|ゆうしょく}[後|ご]に{飲|の}む。', 'Uống viên nén và viên nang sau bữa tối.', 'Sai. Trước bữa tối còn lần uống sau bữa trưa (viên nang).']
          ],
          answer: 3,
          bookAnswer: 3,
          evidence: ['s2', 's5']
        }
      ],
      summary: 'Túi thuốc uống của Tanaka Maria gồm 2 loại, dùng trong 4 ngày, đều uống sau bữa ăn. Viên nén hồng: mỗi lần 2 viên, ngày 2 lần (sáng, chiều tối). Viên nang trắng: mỗi lần 1 viên, ngày 3 lần (sáng, trưa, chiều tối).',
      structure: [
        ['内用薬', 'Loại thuốc (thuốc uống) + tên bệnh nhân'],
        ['Mỗi loại thuốc', 'Số viên mỗi lần · số lần mỗi ngày · thời điểm (khoanh tròn) · trước/giữa/sau bữa ăn'],
        ['Cuối túi', 'Tên phòng khám, địa chỉ, điện thoại']
      ],
      grammar: [
        ['1回〜錠ずつ', 'Mỗi lần … viên.', '1回2錠ずつ'],
        ['1日〜回', 'Ngày … lần.', '1日3回'],
        ['食前・食間・食後', 'Trước bữa · giữa hai bữa · sau bữa ăn.', '食後に飲む'],
        ['〜ばよいか', 'Nên… thì được? (hỏi cách làm đúng).', '次にいつどんな薬を飲めばよいか']
      ],
      tip: 'Túi thuốc Nhật thường in sẵn mọi lựa chọn và KHOANH TRÒN mục áp dụng. Chỉ đọc mục được khoanh. Phân biệt "1回〜錠" (số viên mỗi lần) với "1日〜回" (số lần mỗi ngày).'
    },

    /* ───────────── 問題27 ───────────── */
    {
      id: '27',
      review: { pages: [88, 89], answerPage: 190, bookAnswer: 3, doubts: [] },
      kind: 'グラフ',
      kindVi: 'Biểu đồ',
      style: 'essay',
      before: ['b', 'アルバイトをしたことがありますか。アルバイトをした@mokuteki([目的|もくてき])は{何|なん}ですか。', 'Bạn đã từng làm thêm chưa? Mục đích làm thêm của bạn là gì?'],
      lead: null,
      blocks: [
        { t: 'p', s: [
          ['s1', 'ある{大学|だいがく}の{大学生|だいがくせい}を@taishou([対象|たいしょう]に)、アルバイトについて@ankeeto(アンケート)@chousa([調査|ちょうさ])した。', 'Đã khảo sát bằng phiếu hỏi về việc làm thêm với đối tượng là sinh viên của một trường đại học.'],
          ['s2', 'その@kekka([結果|けっか])、この{大学|だいがく}の@baai([場合|ばあい])、@zentai([全体|ぜんたい])の@yaku([約|やく])8@wari([割|わり])がアルバイトしていることがわかった。', 'Kết quả cho thấy ở trường này, khoảng 80% tổng số sinh viên đang làm thêm.'],
          ['s3', '@danjobetsu({男女|だんじょ}[別|べつ])にみると、{男子|だんし}{学生|がくせい}のうちの79.4%がアルバイトをしているの@nitaishite(に[対|たい]して)、{女子|じょし}{学生|がくせい}は83.4%であり、{女子|じょし}{学生|がくせい}の@wariai([割合|わりあい])のほうが、{男子|だんし}{学生|がくせい}を@uwamawaru([上回|うわまわ]って)※1いる。', 'Xét theo giới tính, trong khi 79,4% nam sinh làm thêm thì nữ sinh là 83,4%; tỉ lệ nữ sinh cao hơn nam sinh.']
        ] },
        { t: 'p', s: [
          ['s4', '{下|した}のグラフはアルバイトの[目的|もくてき]について[調査|ちょうさ]した[結果|けっか]を@arawasu([表|あらわ]して)いる。', 'Biểu đồ dưới đây thể hiện kết quả khảo sát về mục đích làm thêm.'],
          ['s5', 'アルバイトの[目的|もくてき]は、「@seikatsuhi([生活費|せいかつひ])を@kasegu([稼|かせ]ぐ)ため」（32.8%）と「{学生|がくせい}@seikatsu([生活|せいかつ])を{楽|たの}しむため」（32.4%）が@hobo(ほぼ)※2@dousuu([同数|どうすう])で、{次|つぎ}に「@shakaikeiken({社会|しゃかい}[経験|けいけん])のため」（24.2%）となる。', 'Về mục đích, "kiếm tiền sinh hoạt phí" (32,8%) và "để tận hưởng đời sống sinh viên" (32,4%) gần như ngang nhau, tiếp theo là "để có trải nghiệm xã hội" (24,2%).'],
          ['s6', '「{学生|がくせい}[生活|せいかつ]を{楽|たの}しむため」とは、{旅行|りょこう}や{遊|あそ}び、クラブ{活動|かつどう}など、[生活|せいかつ]を{楽|たの}しむお{金|かね}を[稼|かせ]ぐためという{意味|いみ}だ。', '"Để tận hưởng đời sống sinh viên" nghĩa là kiếm tiền để vui chơi, như đi du lịch, giải trí, hoạt động câu lạc bộ.'],
          ['s7', '「@bengakuhi([勉学費|べんがくひ])」も@fukumu([含|ふく]め)、「お{金|かね}を[稼|かせ]ぐため」が6[割|わり]{以上|いじょう}を@shimeru([占|し]めて)はいるが、アルバイトの[目的|もくてき]がお{金|かね}を[稼|かせ]ぐためだけでないことも@chuumoku({注目|ちゅうもく})すべきことだ。', 'Tính cả "chi phí học tập" thì "để kiếm tiền" chiếm hơn 60%, nhưng cũng cần chú ý rằng mục đích làm thêm không chỉ là kiếm tiền.']
        ] },
        { t: 'chart', title: ['g1', 'アルバイトの[目的|もくてき]', 'Mục đích làm thêm'], max: 35, items: [
          ['[生活費|せいかつひ]を[稼|かせ]ぐため', 32.8, 'Kiếm tiền sinh hoạt phí'],
          ['{学生|がくせい}[生活|せいかつ]を{楽|たの}しむため', 32.4, 'Để tận hưởng đời sống sinh viên'],
          ['{社会|しゃかい}[経験|けいけん]のため', 24.2, 'Để có trải nghiệm xã hội'],
          ['[勉学費|べんがくひ]を[稼|かせ]ぐため', 1.0, 'Kiếm tiền chi phí học tập'],
          ['その[他|た]', 4.5, 'Khác'],
          ['@mukaitou([無回答|むかいとう])', 5.1, 'Không trả lời']
        ], source: '{東京|とうきょう}{大学|だいがく}2008年（第58回）{学生|がくせい}[生活|せいかつ][実態|じったい][調査|ちょうさ]より[引用|いんよう]' }
      ],
      notes: [
        '（注1）[上回|うわまわ]る：ものごとがある{数|かず}や[量|りょう]や[程度|ていど]より{多|おお}くなる',
        '（注2）ほぼ：だいたい'
      ],
      refs: {},
      question: ['q', 'この[調査|ちょうさ]について@noberu([述|の]べて)いるもので[最|もっと]も{正|ただ}しいものはどれか。', 'Trong các nhận định về cuộc khảo sát này, điều nào đúng nhất?'],
      options: [
        ['アルバイトをしている{男子|だんし}{学生|がくせい}の[割合|わりあい]はアルバイトをしている{女子|じょし}{学生|がくせい}の[割合|わりあい]より{多|おお}い。', 'Tỉ lệ nam sinh làm thêm cao hơn tỉ lệ nữ sinh làm thêm.', 'Sai. Nam 79,4% < nữ 83,4%: tỉ lệ nữ cao hơn.'],
        ['{学生|がくせい}[生活|せいかつ]を{楽|たの}しむためにアルバイトをしている{学生|がくせい}は[全体|ぜんたい]の[約|やく]3@bunno([分|ぶん]の)2を[占|し]める。', 'Sinh viên làm thêm để tận hưởng đời sống sinh viên chiếm khoảng 2/3 tổng số.', 'Sai. Con số là 32,4%, tức khoảng 1/3, không phải 2/3.'],
        ['アルバイトの[目的|もくてき]は、お{金|かね}を[稼|かせ]ぐためだけではない。', 'Mục đích làm thêm không chỉ là để kiếm tiền.', 'Đúng. Câu cuối bài: 「アルバイトの目的がお金を稼ぐためだけでないことも注目すべきことだ」 (ví dụ: trải nghiệm xã hội 24,2%).'],
        ['@hotondo(ほとんど)の{学生|がくせい}がお{金|かね}を[稼|かせ]ぐためにアルバイトをしている。', 'Hầu hết sinh viên làm thêm để kiếm tiền.', 'Sai. "Để kiếm tiền" chỉ hơn 60%; vẫn có 24,2% làm thêm vì trải nghiệm xã hội, nên không thể nói là "hầu hết".']
      ],
      answer: 3,
      evidence: ['s7'],
      summary: 'Khảo sát sinh viên một trường đại học: khoảng 80% làm thêm, tỉ lệ nữ (83,4%) cao hơn nam (79,4%). Mục đích: kiếm sinh hoạt phí 32,8% và để tận hưởng đời sống sinh viên 32,4% (gần ngang nhau), trải nghiệm xã hội 24,2%. Tính cả chi phí học tập thì "kiếm tiền" chiếm hơn 60%, nhưng mục đích không chỉ là tiền.',
      structure: [
        ['Đoạn 1', 'Tỉ lệ làm thêm: toàn thể và theo giới tính'],
        ['Đoạn 2', 'Mục đích làm thêm (theo biểu đồ) + nhận xét cuối bài'],
        ['Biểu đồ', 'Tỉ lệ từng mục đích']
      ],
      grammar: [
        ['〜を対象に', 'Lấy… làm đối tượng.', '大学生を対象に、アンケート調査した'],
        ['〜のに対して', 'Trong khi… (so sánh hai bên).', '男子学生は79.4%…のに対して、女子学生は83.4%'],
        ['〜のほうが〜を上回る', '… cao hơn, vượt…', '女子学生の割合のほうが、男子学生を上回っている'],
        ['〜も含め', 'Tính cả…', '「勉学費」も含め'],
        ['〜てはいるが', 'Đúng là… nhưng… (thừa nhận rồi chuyển ý).', '6割以上を占めてはいるが'],
        ['〜べきだ', 'Nên…, cần phải…', '注目すべきことだ']
      ],
      tip: 'Với bài biểu đồ, hãy đổi các cách nói tỉ lệ ra số: 8割 = 80%, 3分の2 ≈ 67%, 3分の1 ≈ 33%, ほとんど ≈ gần 100%, 半数 = 50%. Lựa chọn sai thường cố tình làm lệch các con số này.'
    }
  ]
};
