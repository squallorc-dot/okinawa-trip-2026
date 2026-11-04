// 授權照片的來源放於維護紀錄，旅客頁面不呈現圖片授權段落。
// 正式封面僅採實際地點的橫式實景；使用者原始商品參考截圖不得上傳本站。
const commons = file=>"https://commons.wikimedia.org/wiki/Special:FilePath/"+encodeURIComponent(file)+"?width=960";
export const SCENE_PHOTOS={
  hotel:commons("Toyoko Inn Naha Asahibashi Ekimae.JPG"),
  manzamo:commons("Manzamo.jpg"),
  kouri:commons("Kouri Bridge 202006.jpg"),
  churaumi:commons("Churaumi Aquarium main tank 'Kuroshio Sea'.jpg"),
  american:commons("American Village in Okinawa.jpg"),
  rycom:commons("AEON Mall Okinawa Rycom 01.JPG"),
  parco:commons("SAN-A URASOE WEST COAST PARCO CITY.jpg"),
  chinen:commons("Chinen-Misaki-Park.jpg"),
  fishMarket:commons("Osakana Center, Itoman.JPG"),
  senaga:commons("Umikaji Terrace Senagajima.jpg"),
  mibaru:commons("南城市新原ビーチの西端 - panoramio.jpg"),
  okinawaWorld:commons("Gyokusendo-1.jpg"),
  outlet:commons("Okinawa Outlet Mall Ashibinaa01n4500.jpg"),
  iias:commons("Iias Okinawa Toyosaki 202006.jpg"),
  ryuBo:commons("Palette Kumoji 02.jpg"),
  mainPlace:commons("San-A Naha Main Place 20250505161500.jpg"),
  kokusai:commons("Kokusai Dori 01.JPG"),
  makishi:commons("Kokusai Dori 01.JPG"),
  naminoue:commons("Naminoue-Shrine-mainhall.JPG"),
  omoromachi:commons("Omoromachi.JPG")
};
// Day1 夜晚那霸 / Day2 古宇利大橋 / Day3 PARCO海岸購物 / Day4 知念岬 / Day5 國際通 / Day6 波上宮
export const DAY_PHOTOS={
  1:commons("Kokusaidori at night.jpg"),
  2:commons("Kouri Bridge 202006.jpg"),
  3:commons("SAN-A URASOE WEST COAST PARCO CITY.jpg"),
  4:commons("Chinen-Misaki-Park.jpg"),
  5:commons("Kokusai Dori 01.JPG"),
  6:commons("Naminoue-Shrine-mainhall.JPG")
};
// 這些是能對上精確包裝的品牌官方商城／正式零售商商品照，均為外部來源。
// 無法確認尺寸或正確產品的商品保持無圖；不可回退至私人截圖，也不可用相似型號替代。
export const OFFICIAL_PRODUCT_PHOTOS={
  p04:"https://webshop.montbell.jp/common/images/product/prod_c/c_1133374_pu.jpg",
  p06:"https://www.kao-kirei.com/content/dam/sites/kao/www-kao-kirei-com/jp/ja/item/khg/biore/25337644/GG01.jpg",
  p11:"https://jalplaza-airport.jalux.com/files_thumbnail/co/item/CTS/la%20tale_Wcream2.jpg/500.jpg",
  p15:"https://shop.r10s.jp/kodawarinouka/cabinet/sweet/okasi/imgrc0156272300.jpg",
  p17:"https://tshop.r10s.jp/syouwa/cabinet/iy/iy0501.jpg?fitin=720%3A720",
  p18:"https://image1.shopserve.jp/ryukyufront.jp/pic-labo/rfo0710.jpg",
  p19:"https://miyakojima-yukishio.com/cdn/shop/files/4529448980010_s2.png?v=1773904450&width=713",
  p20:"https://kaihou-okinawa.com/cdn/shop/files/kaiho02_1024x.jpg?v=1711523288",
  p01:"https://greenbeans.com/images-v3/89edeb69-fe10-49ca-baab-5c51900239b9/c3c9919a-7d62-4a67-b41c-e38f1042c7c8/1280x1280.jpg",
  p08a:"https://fitter.cosme.net/media/product/10221/skuimg-d_56383_xl.jpg?size=trimIfLarge&target=500x500",
  p08b:"https://www.matsukiyococokara-online.com/store/media/catalog/product/4/5/4571509300787_01_f08d666c09654f607bd9ce50a85f8fab.jpg",
  p13:"https://ec.jal.co.jp/img/0170/goods/L/4987045069307.jpg",
  p14:"https://mrmax.jp/static_files/product_images/4987188188279_01.jpg",
  p16:"https://muranokajiya.itembox.design/product/014/000000001410/000000001410-01-l.jpg?t=20260227163524",
  p07:"https://rakuraku-jp.com/cdn/shop/files/0-1-4987241139217_a66ad218-76cf-46fc-a862-98f30b463125.jpg?v=1744080105&width=1080",
  p12:"https://shop.r10s.jp/kyorindo/cabinet/item11/4987426300227.jpg",
  p10:"https://shop.r10s.jp/lokahi-oki/cabinet/product/cosmetics/orionfacemask_top.jpg",
  p21:"https://image.rakuten.co.jp/shinei-okinawa/cabinet/1bn403.jpg"
};
export const IMAGE_AUDIT=[
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
