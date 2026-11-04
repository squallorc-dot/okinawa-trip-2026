// 旅遊實景圖（明確對應的地點優先；找不到正確照片時不放別的景點冒充）。
// 圖片可供公開嵌入的來源與授權保存在專案維護資料，不顯示在旅客資訊頁。
const commons = name => "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(name) + "?width=960";
export const SCENE_PHOTOS = {
  airport: commons("JP 沖繩 Okinawa 那霸機場 Naha Airport interior February 2026 N13P 02.jpg"),
  hotel: commons("Toyoko Inn Naha Asahibashi Ekimae.JPG"),
  american: commons("American Village in Okinawa.jpg"),
  busTerminal: commons("JP 日本 Japan 沖繩 OKINAWA shuttle bus view from 那霸機場 Naha Airport to city via 國道58號 National Route evening January 2025 R12S 141.jpg"),
  manzamo: commons("Manzamo.jpg"),
  kouri: commons("Kouri Island.JPG"),
  churaumi: commons("Churaumi Aquarium main tank 'Kuroshio Sea'.jpg"),
  rycom: commons("AEON Mall Okinawa Rycom 03.JPG"),
  mibaru: commons("南城市新原ビーチの西端 - panoramio.jpg"),
  parco: commons("SAN-A URASOE WEST COAST PARCO CITY.jpg"),
  chinen: commons("Chinen-Misaki-Park.jpg"),
  okinawaWorld: commons("Gyokusendo-1.jpg"),
  iias: commons("Iias Okinawa Toyosaki 202006.jpg"),
  outlet: commons("Okinawa Outlet Mall Ashibinaa01n4500.jpg"),
  senaga: commons("Senagajima 01.JPG"),
  omoromachi: commons("Omoromachi.JPG"),
  mainPlace: commons("San-A Naha Main Place 20250505161500.jpg"),
  kokusai: commons("Kokusai Dori 01.JPG"),
  makishi: commons("Kokusai Dori 01.JPG"),
  ryuBo: commons("Palette Kumoji 02.jpg"),
  naminoue: commons("Naminoue-Shrine-mainhall.JPG"),
  oroku: commons("JP 日本 Japan 沖繩 OKINAWA 那霸 Naha AEON Mall outdoor carpark January 2025 R12S 02.jpg"),
  beforeugo: commons("JP 沖繩 Okinawa 那霸機場 Naha Airport interior February 2026 N13P 02.jpg")
};
export const DAY_PHOTOS = {1:SCENE_PHOTOS.hotel,2:SCENE_PHOTOS.churaumi,3:SCENE_PHOTOS.parco,4:SCENE_PHOTOS.chinen,5:SCENE_PHOTOS.kokusai,6:SCENE_PHOTOS.naminoue};
export const PHOTO_SOURCES = [
  ["hotel","Toyoko Inn Naha Asahibashi Ekimae.JPG","Wikimedia Commons"],
  ["manzamo","Manzamo.jpg","Public domain"],
  ["kouri","Kouri Island.JPG","Public domain"],
  ["american","American Village in Okinawa.jpg","CC BY-SA 4.0"],
  ["churaumi","Churaumi Aquarium main tank 'Kuroshio Sea'.jpg","Public domain"],
  ["rycom","AEON Mall Okinawa Rycom 03.JPG","CC BY-SA 4.0"],
  ["parco","SAN-A URASOE WEST COAST PARCO CITY.jpg","CC0"],
  ["chinen","Chinen-Misaki-Park.jpg","CC0"],
  ["okinawaWorld","Gyokusendo-1.jpg","Public domain"],
  ["mibaru","南城市新原ビーチの西端 - panoramio.jpg","CC BY-SA 3.0"],
  ["iias","Iias Okinawa Toyosaki 202006.jpg","CC BY-SA 4.0"],
  ["outlet","Okinawa Outlet Mall Ashibinaa01n4500.jpg","License to verify"],
  ["senaga","Senagajima 01.JPG","Public domain"],
  ["omoromachi","Omoromachi.JPG","Public domain"],
  ["kokusai","Kokusai Dori 01.JPG","Public domain"],
  ["ryuBo","Palette Kumoji 02.jpg","See source file"],
  ["mainPlace","San-A Naha Main Place 20250505161500.jpg","See source file"],
  ["naminoue","Naminoue-Shrine-mainhall.JPG","Public domain"]
];
// 可核對的品牌官方圖片，其他維持精準品名、官方商品連結，不取相似照片冒充。
export const OFFICIAL_PRODUCT_PHOTOS = {
  p01:"https://sundrug-online.com/cdn/shop/files/4511413403730_600x.jpg?v=1699341077",
  p07:"https://jp.rohto.com/-/media/com/mentholatum/top/products/img_product_07.jpg?update=251114",
  p13:"https://greenbeans.com/images-v3/89edeb69-fe10-49ca-baab-5c51900239b9/0cf4977c-6352-4458-a6bf-e0e91dafe403/960x960.jpg",
  p16:"https://shop-orange.info/cdn/shop/files/horinishi-001_eb0fbe52-fcf7-40ad-8025-103a0ed60e58_1800x1800.jpg?v=1782260475",
  p17:"https://alinamin.jp/assets/images/lineup/top/product/alinamin-ex-plus.png"
};
