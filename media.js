// 授權照片的來源放於維護紀錄，旅客頁面不呈現圖片授權段落。
// 正式封面僅採實際地點的橫式實景；使用者原始商品參考截圖不得上傳本站。
const commons = file=>"https://commons.wikimedia.org/wiki/Special:FilePath/"+encodeURIComponent(file)+"?width=960";
export const SCENE_PHOTOS={
  hotel:"./assets/photos/toyoko-inn-naha-asahibashi-ekimae-jpg.webp",
  manzamo:"./assets/photos/manzamo-jpg.webp",
  kouri:"./assets/photos/kouri-bridge-202006-jpg.webp",
  churaumi:"./assets/photos/churaumi-aquarium-main-tank-kuroshio-sea-jpg.webp",
  american:"./assets/photos/american-village-in-okinawa-jpg.webp",
  rycom:"./assets/photos/aeon-mall-okinawa-rycom-01-jpg.webp",
  parco:"./assets/photos/san-a-urasoe-west-coast-parco-city-jpg.webp",
  chinen:"./assets/photos/chinen-misaki-park-jpg.webp",
  fishMarket:"./assets/photos/osakana-center-itoman-jpg.webp",
  senaga:"./assets/photos/umikaji-terrace-senagajima-jpg.webp",
  mibaru:"./assets/photos/panoramio-jpg.webp",
  okinawaWorld:"./assets/photos/gyokusendo-cave-panoramio-jpg.webp",
  outlet:"./assets/photos/okinawa-outlet-mall-ashibinaa01n4500-jpg.webp",
  iias:"./assets/photos/iias-okinawa-toyosaki-202006-jpg.webp",
  ryuBo:"./assets/photos/palette-kumoji-02-jpg.webp",
  mainPlace:"./assets/photos/san-a-naha-main-place-20250505161500-jpg.webp",
  kokusai:"./assets/photos/kokusai-dori-01-jpg.webp",
  makishi:"./assets/photos/kokusai-dori-01-jpg.webp",
  naminoue:"./assets/photos/naminoue-shrine-mainhall-jpg.webp",
  omoromachi:"./assets/photos/omoromachi-jpg.webp",
  // Newtown shops: real photographed locations, original external image sources, no local rehosting.
  bianco:"https://www.osd-okinawa.com/userfiles/images/works/retai_store10-l.jpg",
  petbox:"https://jice.homemate-research.com/pubuser1/pubuser_facility_img/3/2/3/10000000000000022323/0000003328/10000000000000022323_0000003328_3.jpg",
  nishimatsuya:"https://img.wenkaiin.com/2017/07/1500022343-7b8ea2c62c9587754dd9286589d84d6f.jpg"
};
export const SCENE_PHOTO_FALLBACKS={
  bianco:"https://assets.st-note.com/production/uploads/images/39032418/picture_pc_0b5be75c730c03ab43cdea555017c74b.png",
  petbox:"https://pimg.1px.tw/zoymain0608/1457163672-1002819157.jpg",
  nishimatsuya:"https://pimg.1px.tw/jillxboom/1431963302-2676500894.jpg"
};

// Day1 夜晚那霸 / Day2 古宇利大橋 / Day3 PARCO海岸購物 / Day4 知念岬 / Day5 國際通 / Day6 波上宮
export const DAY_PHOTOS={
  1:"./assets/photos/kokusaidori-at-night-jpg.webp",
  2:"./assets/photos/kouri-bridge-202006-jpg.webp",
  3:"./assets/photos/san-a-urasoe-west-coast-parco-city-jpg.webp",
  4:"./assets/photos/chinen-misaki-park-jpg.webp",
  5:"./assets/photos/kokusai-dori-01-jpg.webp",
  6:"./assets/photos/naminoue-shrine-mainhall-jpg.webp"
};
// 這些是能對上精確包裝的品牌官方商城／正式零售商商品照，均為外部來源。
// 無法確認尺寸或正確產品的商品保持無圖；不可回退至私人截圖，也不可用相似型號替代。
export const OFFICIAL_PRODUCT_PHOTOS={
  p03:"https://webshop.montbell.jp/common/images/product/prod_k/k_1133394_nv.jpg",
  p05:"https://webshop.montbell.jp/common/images/product/prod_k/k_1133473_bk.jpg",
  p09:"https://www.okinawastory.jp/files/contents/000/000/997/block_6MfQ13y8_e15eaca58c6bec45a9642ff3135ddad08316d0ae-w1500.jpg",
  p04:"https://webshop.montbell.jp/common/images/product/prod_c/c_1133374_pu.jpg",
  p06:"https://www.kao-kirei.com/content/dam/sites/kao/www-kao-kirei-com/jp/ja/item/khg/biore/25337644/GG01.jpg",
  p11:"https://img06.weeecdn.com/item/image/631/201/60BF61413FF2965A.jpeg",
  p15:"https://shop.r10s.jp/kodawarinouka/cabinet/sweet/okasi/imgrc0156272300.jpg",
  p17:"https://tshop.r10s.jp/syouwa/cabinet/iy/iy0501.jpg?fitin=720%3A720",
  p18:"https://image1.shopserve.jp/ryukyufront.jp/pic-labo/rfo0710.jpg",
  p19:"https://miyakojima-yukishio.com/cdn/shop/files/4529448980010_s2.png?v=1773904450&width=713",
  p20:"https://kaihou-okinawa.com/cdn/shop/files/kaiho02_1024x.jpg?v=1711523288",
  p01:"https://top.dhc.co.jp/shop/health/tempo/item/e00008/img/img_e8_60d.jpg",
  p08a:"https://fitter.cosme.net/media/product/10221/skuimg-d_56383_xl.jpg?size=trimIfLarge&target=500x500",
  p08b:"https://buymejapan.com/cdn/shop/files/IMG-1870.heic?format=jpg&width=700",
  p13:"https://ec.jal.co.jp/img/0170/goods/L/4987045069307.jpg",
  p14:"https://mrmax.jp/static_files/product_images/4987188188279_01.jpg",
  p16:"https://muranokajiya.itembox.design/product/014/000000001410/000000001410-01-l.jpg?t=20260227163524",
  p07:"https://rakuraku-jp.com/cdn/shop/files/0-1-4987241139217_a66ad218-76cf-46fc-a862-98f30b463125.jpg?v=1744080105&width=1080",
  p12:"https://shop.r10s.jp/kyorindo/cabinet/item11/4987426300227.jpg",
  p10:"https://shop.r10s.jp/lokahi-oki/cabinet/product/cosmetics/orionfacemask_top.jpg",
  p21:"https://image.rakuten.co.jp/shinei-okinawa/cabinet/1bn403.jpg",
  // 11/10 新增：同款官方／正式零售來源，私人購物參考照片不公開
  p22:"https://www.fujicco.co.jp/products/upload/38.png",
  p23:"https://netsuper.r10s.jp/item/seiyu/90/4901159304390.jpg",
  p24:"https://kao-h.assetsadobe3.com/is/image/content/dam/sites/kao/www-kao-kirei-com/jp/ja/item/khg/atrix/25503423/GG01.jpg",
  p25:"https://shop.r10s.jp/sundrug/cabinet/202410_4/4580723060384.jpg",
  p26:"https://horinishi.jp/wp/wp-content/uploads/2026/03/b72f5aba-c5b0-4392-b039-04918090e829-500x500.jpg",
  p27:"https://shop.himeyuri.co.jp/html/upload/save_image/0414115626_69ddacda19fd4.jpg",
  // 11/14 official/retailer product pictures, not user's private reference photo
  p28:"https://baseec-img-mng.akamaized.net/images/item/origin/1ce3d5ef2df419b75f903396ef623385.png?im=Resize%2Cwidth%3D1280%2Ctype%3Dnormal&imformat=generic&q=90",
  p29:"https://www.hikari.info/gold/img/go_013_04.jpg"
};
// When a remote merchant blocks a hot-linked image, first try another exact variant from that merchant.
export const OFFICIAL_PRODUCT_PHOTO_FALLBACKS={
  p27:"https://shop.himeyuri.co.jp/html/upload/save_image/0306113129_69aa3c818360a.jpg"
};
export const IMAGE_AUDIT=[
 ["BIANCO店面","OKINAWA BIANCO real storefront","OSD 沖繩建設公司建築實績 | https://www.osd-okinawa.com/works/cat:%E7%89%A9%E8%B2%A9%E5%BA%97%E8%88%97/offset:20/"],
 ["BIANCO備援","OKINAWA BIANCO aquarium interior","Fish Farm Tsubota via note | https://note.com/fishfarm_t9013/n/nf61ffd8c0727"],
 ["PET BOX那霸店","PET BOX Animal Station Naha exterior","Homemate store page | https://www.homemate-research-pet-shop.com/dtl/10000000000000022323/"],
 ["PET BOX備援","PET BOX Naha exterior","Okinawa visit journal | https://zoymain0608.pixnet.net/blog/posts/12193700026"],
 ["西松屋那霸新都心店","Nishimatsuya Naha Shintoshin real storefront","雨立今旅遊實拍 | https://wenkaiin.com/blog/post/63734227"],
 ["花園鰻黃白條紋原子筆","ちんあなごフレンズ yellow-striped ballpoint pen","琉球の館商品頁 | https://shop.himeyuri.co.jp/products/detail/599"],
 ["Day 1","Kokusaidori at night.jpg","Wikimedia Commons | Alexander Synaptic | CC BY-SA 2.0"],
 ["Day 2","Kouri Bridge 202006.jpg","Wikimedia Commons | Kugel | CC BY-SA 4.0"],
 ["Day 3","SAN-A URASOE WEST COAST PARCO CITY.jpg","Wikimedia Commons | Recom | CC0"],
 ["Day 4","Chinen-Misaki-Park.jpg","Wikimedia Commons | MaedaAkihiko | CC0"],
 ["Day 5","Kokusai Dori 01.JPG","Wikimedia Commons | See file page"],
 ["Day 6","Naminoue-Shrine-mainhall.JPG","Wikimedia Commons | LordAmeth | Public domain"],
 ["美麗海水族館","Churaumi Aquarium main tank 'Kuroshio Sea'.jpg","Wikimedia Commons | Megapixie | Public domain"],
 ["萬座毛","Manzamo.jpg","Wikimedia Commons | Fg2 | Public domain"],
 ["PARCO City","SAN-A URASOE WEST COAST PARCO CITY.jpg","Wikimedia Commons | Recom | CC0"],
 ["來客夢","AEON Mall Okinawa Rycom 01.JPG","Wikimedia Commons | Kugel | CC BY-SA 4.0"],
 ["iias豐崎","Iias Okinawa Toyosaki 202006.jpg","Wikimedia Commons | Kugel | CC BY-SA 4.0"],
 ["琉貿","Palette Kumoji 02.jpg","Wikimedia Commons | Narumi.SBT | CC BY-SA 4.0"],
 ["Naha Main Place","San-A Naha Main Place 20250505161500.jpg","Wikimedia Commons | TurnOnTheNight | CC BY-SA 4.0"]
];
