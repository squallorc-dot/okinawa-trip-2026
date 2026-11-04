// 沖繩母女自由行｜資料底稿 2026-11-05
// 旅行者在網頁看到的「建議／待確認」不代表已取得訂單或即時班次。
export const VERSION = "2026.11.05-05";
export const HOTEL = {
  name:"東橫INN 沖繩那霸旭橋站前", jp:"東横INN沖縄那覇旭橋駅前",
  address:"〒900-0033 沖縄県那覇市久米2-1-20", tel:"098-951-1045",
  location:"東横INN沖縄那覇旭橋駅前", checkin:"15:00", checkout:"10:00", breakfast:"06:30–09:00",
  official:"https://www.toyoko-inn.com/eng/search/detail/00076/"
};
export const FLIGHTS = [
  {direction:"去程",date:"2026-11-11",flight:"JX312",from:"台中 RMQ",to:"沖繩 OKA",depart:"17:00",arrival:"19:30",duration:"1 小時 30 分",fare:"經濟艙 Q",bag:"原訂 1 件／人，重量依電子機票",note:"台灣出發時間、沖繩抵達時間均為當地時間"},
  {direction:"回程",date:"2026-11-16",flight:"JX313",from:"沖繩 OKA",to:"台中 RMQ",depart:"20:30",arrival:"21:20",duration:"1 小時 50 分",fare:"經濟艙 N",bag:"原訂 1 件／人，重量依電子機票",note:"沖繩出發時間、台灣抵達時間均為當地時間"}
];
export const LINKS = {
  starlux:"https://www.starlux-airlines.com/zh-TW/check-in-fly/check-in-now/online-check-in",
  airport:"https://www.naha-airport.co.jp/",
  airporttax:"https://www.naha-airport.co.jp/news/22570/",
  tax:"https://www.japan.travel/tw/plan/japans-tax-exemption/",
  yui:"https://www.yui-rail.co.jp/",
  bus:"https://www.busnavi-okinawa.com/",
  airporter:"https://about.airporter.co.jp/okinawa-maas",
  aeon:"https://tw.aeonmall.global/mall/okinawarycom/shops-entertainment",
  aeoncoupon:"https://tw.aeonmall.global/coupons/discount?mall=mall52&couponid=22",
  parco:"https://www.parcocity.jp/tw-okinawa/",
  parcoVideo:"https://www.youtube.com/watch?v=dDtfwnjWd4Y",
  streetVideo:"https://www.youtube.com/watch?v=57DskR2qNrE",
  streetVideo2:"https://www.youtube.com/watch?v=_SgW4t3rJJM",
  streetShort:"https://www.youtube.com/shorts/I5dZWAnwsgI",
  ryubo:"https://ryubo.jp/",
  officialNahaPhotos:"https://www.naha-navi.or.jp/sitepage/photos/photo-download/"
};
export const PLACES = {
 hotel:{name:HOTEL.name,jp:HOTEL.jp,query:HOTEL.location,link:HOTEL.official,type:"hotel",desc:"六天五夜固定住宿｜旭橋、那霸巴士總站附近"},
 airport:{name:"那霸機場",jp:"那覇空港",query:"那覇空港 国際線旅客ターミナル",link:LINKS.airport,type:"airport"},
 beforeugo:{name:"Before U Go（行李領取）",jp:"Before U Go",query:"那覇空港 Before U Go",link:LINKS.airporter,type:"service",desc:"機場 2F 中央連接通道一帶；領取位置、時段依實際預約確認"},
 busTerminal:{name:"那霸巴士總站",jp:"那覇バスターミナル",query:"那覇バスターミナル",link:LINKS.bus,type:"bus"},
 asahibashi:{name:"旭橋站",jp:"旭橋駅",query:"ゆいレール旭橋駅",link:LINKS.yui,type:"rail"},
 bluseal:{name:"BLUE SEAL 久茂地店",jp:"ブルーシール 久茂地店",query:"ブルーシール 久茂地店 沖縄",type:"meeting",desc:"11/12 Klook 原訂集合點，仍以訂單指定照片／地圖為準"},
 kenmin:{name:"縣民廣場",jp:"県民広場",query:"沖縄県民広場",type:"meeting",desc:"11/14 Klook 原訂 07:50 集合"},
 ryuboWest:{name:"Ryubo 西町超市",jp:"リウボウストア 西町店",query:"リウボウストア 西町店",type:"shopping",desc:"抵達當晚的鄰近超市"},
 ryuBo:{name:"琉貿百貨",jp:"デパートリウボウ",query:"デパートリウボウ",link:LINKS.ryubo,type:"shopping",floors:[
  ["B1","Ryubo Food Market、食品與伴手禮、肯德基"],["2F","美食餐飲／Food Hall（依現場）"],["3F","日系女裝、女鞋與包款"],["6F","童裝、嬰兒用品"],["7F","迪士尼商品專區"],["8F","無印良品、Francfranc"],["9F","餐飲與休憩"],["10F","Palette Sky Garden 屋頂花園（開放依官方）"]]},
 manzamo:{name:"萬座毛",jp:"万座毛",query:"万座毛 沖縄",type:"sight"},
 kouri:{name:"古宇利島",jp:"古宇利島",query:"古宇利島 沖縄",type:"sight"},
 churaumi:{name:"美麗海水族館",jp:"沖縄美ら海水族館",query:"沖縄美ら海水族館",link:"https://www.oki-churaumi.jp/",type:"sight"},
 american:{name:"美國村",jp:"美浜タウンリゾート・アメリカンビレッジ",query:"美浜アメリカンビレッジ",type:"sight"},
 rycom:{name:"AEON MALL 沖繩來客夢",jp:"イオンモール沖縄ライカム",query:"イオンモール沖縄ライカム",link:LINKS.aeon,type:"shopping",floors:[
  ["1F","Pokémon Center、UNIQLO、GU、H&M、ABC-MART、DAISO、LOFT（依實際店鋪導覽）"],
  ["2F","mont-bell、NITORI、KOJIMA × BIC CAMERA、AEON STYLE 生鮮與食品、3COINS、Gap"],
  ["3F","餐飲、鞋包與生活用品"],["4F","Toys“R”Us、吉卜力、Sanrio、蠟筆小新、郵局（以官方店鋪為準）"]]},
 parco:{name:"PARCO CITY",jp:"サンエー浦添西海岸 PARCO CITY",query:"サンエー浦添西海岸 PARCO CITY",link:LINKS.parco,type:"shopping",floors:[
  ["1F","SAN-A 食品館、松本清、HANDS、3COINS、萬代扭蛋、首里石鹼"],
  ["2F","ZARA、H&M、GU、阿卡將、CHELSEA New York、餐飲"],
  ["3F","UNIQLO、無印良品、Standard Products、Can★Do"]]},
 chinen:{name:"知念岬公園",jp:"知念岬公園",query:"知念岬公園 沖縄",type:"sight"},
 mibaru:{name:"新原海灘",jp:"新原ビーチ",query:"新原ビーチ 南城市",type:"sight"},
 okinawaWorld:{name:"文化王國／玉泉洞",jp:"おきなわワールド 玉泉洞",query:"おきなわワールド 玉泉洞",link:"https://www.gyokusendo.co.jp/okinawaworld/",type:"sight"},
 fishMarket:{name:"糸滿海鮮市場",jp:"糸満お魚センター",query:"糸満お魚センター",type:"market"},
 outlet:{name:"ASHIBINAA Outlet",jp:"沖縄アウトレットモールあしびなー",query:"沖縄アウトレットモールあしびなー",type:"shopping"},
 iias:{name:"iias 沖繩豐崎",jp:"イーアス沖縄豊崎",query:"イーアス沖縄豊崎",type:"shopping",floors:[
  ["1F","AEON STYLE 生鮮超市、DAISO、札幌藥妝"],["2F","H&M、UNIQLO、首里石鹼"],["3F","西松屋、LOFT、萬代扭蛋"],["4F","景觀休憩空間（依現場開放）"]]},
 senaga:{name:"瀨長島 Umikaji Terrace",jp:"瀬長島ウミカジテラス",query:"瀬長島ウミカジテラス",type:"sight"},
 tsubogawa:{name:"壺川唐吉訶德",jp:"ドン・キホーテ 壺川店",query:"ドン・キホーテ 壺川店",type:"shopping",desc:"原筆記『到3點』指翌日凌晨03:00，出發前再次確認"},
 kanehide:{name:"金秀超市（壺川）",jp:"タウンプラザかねひで 壺川",query:"タウンプラザかねひで 壺川",type:"shopping"},
 furujima:{name:"古島站",jp:"古島駅",query:"ゆいレール古島駅",type:"rail"},
 omoromachi:{name:"歌町站",jp:"おもろまち駅",query:"ゆいレールおもろまち駅",type:"rail"},
 ameku:{name:"天久琉貿樂市",jp:"天久りうぼう楽市",query:"天久りうぼう楽市",type:"shopping",desc:"Ryubo Food Market、大創、無印良品、SPORTS DEPO；附近 UNIQLO、GU"},
 mainPlace:{name:"San-A Naha Main Place",jp:"サンエー那覇メインプレイス",query:"サンエー那覇メインプレイス",type:"shopping",floors:[["1F","3COINS+plus 等"],["2F","無印良品、大創、ABC-MART、卡牌等（依現場）"]]},
 appleTown:{name:"Co-op Apple Town",jp:"コープあっぷるタウン",query:"コープあっぷるタウン",type:"shopping",desc:"2F Can★Do"},
 makishi:{name:"牧志站",jp:"牧志駅",query:"ゆいレール牧志駅",type:"rail"},
 kokusai:{name:"國際通",jp:"国際通り",query:"那覇 国際通り 牧志",type:"shopping",desc:"約1.6公里，沿線有唐吉訶德、美麗海水族館直營店、公設市場、首里石鹼、沖繩文化屋"},
 makishiMarket:{name:"牧志公設市場",jp:"第一牧志公設市場",query:"第一牧志公設市場",type:"market"},
 makishiMax:{name:"MaxValu 牧志店",jp:"マックスバリュ牧志店",query:"マックスバリュ牧志店",type:"shopping",desc:"原筆記記載 24 小時營業，出發前以官方為準"},
 dnaha:{name:"D-naha 大樓",jp:"D-naha",query:"D-naha 那覇",type:"shopping",desc:"駿河屋、淳久堂書店、大創（依店鋪資料）"},
 shuriSoap:{name:"首里石鹼 國際通松尾店",jp:"首里石鹸 国際通り松尾ギャラリーショップ",query:"首里石鹸 国際通り松尾",type:"shopping"},
 miebashi:{name:"美榮橋站",jp:"美栄橋駅",query:"ゆいレール美栄橋駅",type:"rail"},
 kencho:{name:"縣政府前站",jp:"県庁前駅",query:"ゆいレール県庁前駅",type:"rail"},
 naminoue:{name:"波上宮",jp:"波上宮",query:"波上宮 沖縄",type:"sight"},
 oroku:{name:"小祿站／AEON 那霸店",jp:"小禄駅・イオン那覇店",query:"イオン那覇店",type:"shopping",desc:"小祿站 2F 連通道接商場；食品館、服飾、DAISO、兒童用品、餐飲"},
 akamine:{name:"赤嶺站",jp:"赤嶺駅",query:"ゆいレール赤嶺駅",type:"rail"},
 union:{name:"UNION 24 小時超市",jp:"フレッシュプラザユニオン 赤嶺周辺",query:"ユニオン 赤嶺駅",type:"shopping"},
 manga:{name:"漫畫倉庫",jp:"マンガ倉庫 那覇店",query:"マンガ倉庫 那覇店",type:"shopping"}
};
export const DAYS = [
 {n:1,date:"2026-11-11",weekday:"三",title:"抵達那霸・晚間散步",tag:"把第一晚過得輕鬆一點",kind:"自由移動",cover:"naha",events:[
  {t:"14:00",title:"台中出發前往機場",detail:"原訂從家中出發的參考時間，依當日交通調整",type:"plan"},
  {t:"17:00",title:"JX312 台中起飛",place:"airport",detail:"19:30 沖繩當地時間抵達。入境、領行李後找計程車。",type:"flight"},
  {t:"約20:30",title:"計程車到東橫INN，辦理入住",place:"hotel",route:"airport-hotel",detail:"原訂至那霸機場一樓計程車乘車區找指定排隊位置；8號區位置尚需依機場當日指引確認。",type:"move"},
  {t:"晚上",title:"飯店附近晚餐、認識巴士總站",place:"busTerminal",detail:"先吃晚餐，再走走旭橋／那霸巴士總站，順路找冰淇淋店。",type:"food"},
  {t:"有時間再去",title:"Ryubo 西町店超市",place:"ryuboWest",detail:"購買當晚需要的水、早餐以外的零食等，不用趕行程。",type:"shop"}
 ],tip:"抵達當晚以休息為優先；夜間步行以實際體力和店家營業時間決定。"},
 {n:2,date:"2026-11-12",weekday:"四",title:"北部海景・水族館",tag:"萬座毛、古宇利島與黑潮之海",kind:"Klook 一日遊",cover:"aquarium",events:[
  {t:"06:30–07:30",title:"飯店早餐",place:"hotel",detail:"免費早餐 06:30–09:00，記得預留步行集合時間。",type:"food"},
  {t:"08:20 集合",title:"BLUE SEAL 久茂地店",place:"bluseal",route:"hotel-bluseal",detail:"原規劃的 Klook 北部團集合點。請依實際預訂通知確認準確店面與集合照片。",type:"meeting"},
  {t:"跟團",title:"萬座毛",place:"manzamo",detail:"海岸斷崖、象鼻岩海景。",type:"sight"},
  {t:"跟團",title:"古宇利島",place:"kouri",detail:"古宇利大橋、海景與短暫散策，停留時間依導遊。",type:"sight"},
  {t:"跟團",title:"美麗海水族館",place:"churaumi",detail:"重點為黑潮之海大型水槽；順序以當日跟團為準。",type:"sight"},
  {t:"跟團",title:"美國村",place:"american",detail:"美式商店街、海景、餐飲。",type:"sight"},
  {t:"晚上",title:"琉貿百貨晚餐與購物",place:"ryuBo",route:"bluseal-ryubo",detail:"回到那霸後，若時間足夠再進百貨吃晚餐、逛無印與 Disney 商品。",type:"shop"}
 ],tip:"四個景點的停留及解散時間由 Klook 當天決定，不預填未確認的確切時間。"},
 {n:3,date:"2026-11-13",weekday:"五",title:"來客夢 × PARCO CITY",tag:"大商場慢慢逛，交通清楚最重要",kind:"購物日",cover:"mall",events:[
  {t:"06:30–08:40",title:"早餐與準備",place:"hotel",detail:"出門前查看當日 152 號巴士班次。",type:"food"},
  {t:"09:00 左右",title:"步行到那霸巴士總站",place:"busTerminal",route:"hotel-bus",detail:"原規劃 11 號月台候車；月台與時刻以現場及官方為準。",type:"move"},
  {t:"09:37（原訂）",title:"152 號巴士往來客夢",place:"rycom",route:"bus-rycom",detail:"上車領整理券；付費方式與下車站名需看現場資訊。官方資料有此班車，實際11/13以當日為準。",type:"move"},
  {t:"約10:15–14:30",title:"AEON MALL 沖繩來客夢",place:"rycom",detail:"優先購物：mont-bell、Pokémon、3COINS、LOFT、AEON 食品館。原規劃逛到14:30。",type:"shop"},
  {t:"14:30 之後",title:"計程車直達 PARCO CITY",place:"parco",route:"rycom-parco",detail:"優先計程車減少換車。保留92＋61號公車作替代，轉乘尚待當日班次核對。",type:"move"},
  {t:"下午～晚上",title:"PARCO CITY 購物與晚餐",place:"parco",detail:"SAN-A 食品館、HANDS、藥妝、服飾、無印、阿卡將、Can★Do。",type:"shop"},
  {t:"19:10 參考班次",title:"返回那霸巴士總站",place:"busTerminal",route:"parco-bus",detail:"優先查 385 號；當天可能有其他路線。19:10 是參考班次，不代表即時車況，候車點由現場確認。",type:"move"}
 ],tip:"最需要事先確認的日子：來客夢上車月台、PARCO 回程候車點與末班車。"},
 {n:4,date:"2026-11-14",weekday:"六",title:"南部風景・海邊購物",tag:"知念岬、玉泉洞與瀨長島",kind:"Klook 一日遊",cover:"ocean",events:[
  {t:"06:30–07:20",title:"早餐與準備",place:"hotel",detail:"07:50 集合，出發前先看縣民廣場導航。",type:"food"},
  {t:"07:50 集合",title:"縣民廣場",place:"kenmin",route:"hotel-kenmin",detail:"依太太原訂 Klook 南部行程；實際集合範圍以訂單指定照片為準。",type:"meeting"},
  {t:"跟團",title:"知念岬公園",place:"chinen",detail:"綠地與海岸線景觀。",type:"sight"},
  {t:"跟團",title:"新原海灘",place:"mibaru",detail:"南部海灘散策，活動內容以團型為準。",type:"sight"},
  {t:"跟團",title:"文化王國・玉泉洞",place:"okinawaWorld",detail:"鐘乳石洞與沖繩文化體驗。",type:"sight"},
  {t:"跟團",title:"海鮮市場",place:"fishMarket",detail:"原規劃的市場停留；實際市場名稱和時段以訂單確認。",type:"sight"},
  {t:"團型決定",title:"ASHIBINAA Outlet／iias 豐崎",place:"iias",detail:"兩座都保留資訊，但實際是否兩處皆停留須核對購買團型，勿當成必定全逛。",type:"shop"},
  {t:"跟團",title:"瀨長島",place:"senaga",detail:"海景、白色商店街，停留由實際團型決定。",type:"sight"},
  {t:"有體力再去",title:"壺川唐吉訶德、金秀超市",place:"tsubogawa",route:"kenmin-tsubogawa",detail:"不列為強制行程；唐吉訶德原標「3點」指翌日凌晨03:00。",type:"optional"}
 ],tip:"若 Klook 團型以 iias、Outlet、瀨長島三選一或部分停留，優先依實際行程，不為了全去而增加移動。"},
 {n:5,date:"2026-11-15",weekday:"日",title:"那霸購物・國際通",tag:"新都心到國際通，慢慢逛街",kind:"自由購物",cover:"street",events:[
  {t:"上午",title:"單軌前往古島／歌町",place:"omoromachi",route:"hotel-omoro",detail:"原規劃古島→歌町；若古島無指定店面，可直接到歌町省體力。",type:"move"},
  {t:"上午",title:"天久琉貿樂市",place:"ameku",detail:"RYUBO FOOD MARKET、大創、無印良品、SPORTS DEPO；附近有 UNIQLO／GU。",type:"shop"},
  {t:"中午前後",title:"San-A Naha Main Place",place:"mainPlace",detail:"3COINS、無印良品、大創、ABC-MART 等。",type:"shop"},
  {t:"順路才去",title:"Co-op Apple Town",place:"appleTown",detail:"主要想看 Can★Do，視腳力選擇。",type:"optional"},
  {t:"下午",title:"牧志站開始逛國際通",place:"makishi",route:"omoro-makishi",detail:"從牧志站往縣政府前方向慢慢逛；全長約1.6公里，途中可分段休息。",type:"move"},
  {t:"下午",title:"國際通・牧志公設市場",place:"kokusai",detail:"唐吉訶德、第一牧志公設市場、美麗海水族館直營店、沖繩文化屋、首里石鹼等。",type:"shop"},
  {t:"支線",title:"MaxValu 牧志店／D-naha",place:"dnaha",detail:"保留超市、藥妝、駿河屋、淳久堂、DAISO；需轉向美榮橋，為可選支線。",type:"optional"},
  {t:"傍晚",title:"首里石鹼與琉貿百貨",place:"ryuBo",detail:"從國際通回到縣政府前，再依體力逛百貨與晚餐。",type:"shop"}
 ],tip:"這天店很多，但不強求全部進店；原列商店、樓層資訊仍保留在對應商場。"},
 {n:6,date:"2026-11-16",weekday:"一",title:"波上宮・最後採買・回國",tag:"行李先安排好，再輕裝購物",kind:"回程日",cover:"shrine",events:[
  {t:"09:30",title:"退房、安排行李交件",place:"hotel",route:"hotel-naminoue",detail:"若已預訂 Airporter，依約定時間交件。若未預訂成功，改採回飯店取行李方案。",type:"critical"},
  {t:"上午",title:"波上宮參拜",place:"naminoue",detail:"由飯店步行約12–20分鐘（以實際路線為準）。",type:"sight"},
  {t:"中午～下午",title:"小祿站・AEON 那霸店",place:"oroku",route:"naminoue-oroku",detail:"商場與單軌站有連通道。超市、DAISO、UNIQLO、ABC-MART、藏壽司等。",type:"shop"},
  {t:"視時間與體力",title:"赤嶺站：UNION＋漫畫倉庫",place:"akamine",route:"oroku-akamine",detail:"原安排保留；如果時間緊或買太多，直接由小祿前往機場。",type:"optional"},
  {t:"16:00–16:30",title:"抵達那霸機場、取行李",place:"beforeugo",route:"akamine-airport",detail:"若預訂機場交付，先至 Before U Go 核對取件，並確認退稅作業。",type:"critical"},
  {t:"報到前",title:"先進行符合資格商品的退稅確認",place:"airport",detail:"2026/11/1新制：先支付含稅價，離境在海關確認。需要出示商品時，先確認再託運。",type:"critical"},
  {t:"約18:30",title:"星宇航空櫃檯預定開放",place:"airport",detail:"以起飛前兩小時估算；櫃檯號碼與實際開放時間以當日官方為準。",type:"flight"},
  {t:"20:30",title:"JX313 那霸起飛",place:"airport",detail:"21:20 抵達台中（台灣時間）。",type:"flight"}
 ],tip:"最後一天的行李配送必須先預約；機場退稅確認需在行李託運前完成。"}
];
export const ROUTES = [
 {id:"airport-hotel",day:1,from:"airport",to:"hotel",mode:"taxi",title:"機場 → 飯店",short:"機場計程車直達，不必拖行李轉乘",steps:["那霸機場入境、領取行李後依標示前往計程車乘車區。","出示飯店日文地址或手機畫面給司機。","抵達東横INN沖縄那覇旭橋駅前，先辦理入住。"],note:"原筆記的『1樓8號』尚未由機場官方核實，現場以計程車乘車標示為準。"},
 {id:"hotel-bluseal",day:2,from:"hotel",to:"bluseal",mode:"walking",title:"飯店 → BLUE SEAL 久茂地集合點",short:"提前步行到集合地點，集合前先定位",steps:["用地圖確認實際 Klook 訂單中的 BLUE SEAL 久茂地店定位。","預留步行與找團旗時間，08:20 前到達。","出示 Klook 憑證並確認導遊／車輛。"],note:"同品牌可能有不同分店，請以已購訂單的集合點位置為準。"},
 {id:"bluseal-ryubo",day:2,from:"bluseal",to:"ryuBo",mode:"walking",title:"解散地點 → 琉貿百貨",short:"解散後看現場位置決定步行或單軌",steps:["先確認導遊實際解散位置，與早上集合點不一定相同。","打開 Google Maps 導航琉貿百貨。","若晚間較累，直接回飯店休息。"]},
 {id:"hotel-bus",day:3,from:"hotel",to:"busTerminal",mode:"walking",title:"飯店 → 那霸巴士總站",short:"步行至巴士總站，找 152 號乘車站",steps:["確認目的地是那覇バスターミナル（不是旭橋站電車月台）。","原筆記 11 號月台；以現場電子顯示或詢問站務人員再次確認。","提早候車並準備付車資的零錢／支付工具。"]},
 {id:"bus-rycom",day:3,from:"busTerminal",to:"rycom",mode:"bus",title:"152 號：那霸巴士總站 → 來客夢",short:"原訂 09:37 出發，搭高速巴士前往大型商場",steps:["在那霸巴士總站確認『152 イオンモール沖縄ライカム行』顯示與乘車月台。","按該班車規定領取整理券或付款，確認『イオンモール沖縄ライカム』下車。","車程受交通影響，預留逛街時間不要排太緊。"],note:"班次依 2026/11/13 平日當日查詢為準；09:37 為原規劃參考。",official:LINKS.bus},
 {id:"rycom-parco",day:3,from:"rycom",to:"parco",mode:"taxi",title:"來客夢 → PARCO CITY",short:"主方案：計程車點對點；不需 92＋61 轉乘",steps:["來客夢預計 14:30 逛完後找到計程車乘車處。","將『サンエー浦添西海岸 PARCO CITY』給司機看。","原方案 92 號至真志喜，再搭 61 號，僅做備案；需即時確認。"],note:"車程可能隨堵車變動，不寫死約25–30分鐘。"},
 {id:"parco-bus",day:3,from:"parco",to:"busTerminal",mode:"bus",title:"PARCO CITY → 那霸巴士總站",short:"優先查 385 號往那霸巴士總站方向",steps:["從 PARCO CITY 出入口依站牌方向找到往那霸的車站。","選『那覇バスターミナル行』，不要搭成往 PARCO CITY 的方向。","可參考平日 19:10 與 21:00 左右發車班次，實際以當日站牌為準。","回到那霸巴士總站後步行到飯店。"],note:"來程／回程站牌不可混用。原筆記的『2號月台』是那霸巴士總站資訊，不應當作 PARCO 回程月台。",official:LINKS.bus},
 {id:"hotel-kenmin",day:4,from:"hotel",to:"kenmin",mode:"walking",title:"飯店 → 縣民廣場集合點",short:"提前出門，原訂 07:50 集合",steps:["07:50 是原訂 Klook 集合時間，實際請依已購憑證。","地圖定位沖縄県民広場，注意不是在縣廳站月台集合。","提早抵達找團旗、導遊或集合標示。"]},
 {id:"kenmin-tsubogawa",day:4,from:"kenmin",to:"tsubogawa",mode:"rail",title:"解散後 → 壺川購物區",short:"有體力才搭單軌到壺川再步行",steps:["先確定 Klook 當天解散位置與時間。","查詢最近單軌站前往壺川站，出站後步行至唐吉訶德。","如果晚間疲累或已購物很多，直接回飯店。"]},
 {id:"hotel-omoro",day:5,from:"asahibashi",to:"omoromachi",mode:"rail",title:"旭橋站 → 歌町站",short:"搭單軌往首里／てだこ浦西方向",steps:["由飯店步行到旭橋站。","搭往首里／てだこ浦西方向的列車。","原筆記有古島站，如果沒有指定商店可直接在歌町下車。","歌町站到天久樂市尚有步行距離，必要時短程計程車。"],official:LINKS.yui},
 {id:"omoro-makishi",day:5,from:"omoromachi",to:"makishi",mode:"rail",title:"歌町站 → 牧志站",short:"搭單軌往那霸機場方向，從牧志走國際通",steps:["到歌町站搭往那霸機場方向的單軌。","在牧志站下車，確認國際通方向。","沿國際通往縣政府前方向逛，可依體力中途休息。"],official:LINKS.yui},
 {id:"hotel-naminoue",day:6,from:"hotel",to:"naminoue",mode:"walking",title:"飯店 → 波上宮",short:"退房後步行參拜，先確認行李已交接",steps:["如果預訂 Airporter，按預訂規則在飯店交件。","輕裝從飯店步行至波上宮，沿 Google Maps 導航。","如果無行李配送，需在行程中安排回飯店取件。"]},
 {id:"naminoue-oroku",day:6,from:"naminoue",to:"oroku",mode:"rail",title:"波上宮 → 小祿 AEON",short:"步行／計程車接單軌，或直接計程車",steps:["由波上宮前往附近單軌站或搭短程計程車。","搭往那霸機場方向，在小祿站下車。","跟站內商場指示經連通道往 AEON 那霸店。"],official:LINKS.yui},
 {id:"oroku-akamine",day:6,from:"oroku",to:"akamine",mode:"rail",title:"小祿 → 赤嶺",short:"單軌往那霸機場方向一站；時間不足就跳過",steps:["小祿站搭往那霸機場方向，在赤嶺站下車。","要逛 UNION 與漫畫倉庫時，先比較距離與時間。","如果商品很多或機場退稅需預留時間，直接從小祿去機場。"],official:LINKS.yui},
 {id:"akamine-airport",day:6,from:"akamine",to:"airport",mode:"rail",title:"赤嶺／小祿 → 那霸機場",short:"最後到那霸空港站，預計16:00–16:30到機場",steps:["赤嶺站搭往那霸機場方向的列車。","抵達那霸機場站後依指標前往機場2F，確認 Before U Go 實際取件位置。","完成符合資格商品的海關確認，再辦理托運。"],official:LINKS.yui}
];
export const SHOPS = [
 {id:"rycom",day:3,group:"大型商場",priorities:["mont-bell","Pokémon Center","UNIQLO、GU","LOFT、3COINS","AEON 食品館"],ref:"rycom"},
 {id:"parco",day:3,group:"大型商場",priorities:["SAN-A 食品館","松本清、HANDS","3COINS、萬代扭蛋","阿卡將、GU、H&M","UNIQLO、無印、Can★Do"],ref:"parco"},
 {id:"ryuBo",day:2,group:"百貨",priorities:["Ryubo Food Market","女裝鞋包、童裝","Disney 專區","無印良品、Francfranc","餐飲與屋頂花園"],ref:"ryuBo"},
 {id:"iias",day:4,group:"大型商場",priorities:["AEON STYLE","大創、札幌藥妝","首里石鹼、LOFT","UNIQLO、H&M、西松屋"],ref:"iias"},
 {id:"outlet",day:4,group:"Outlet",priorities:["Outlet 品牌選購"],ref:"outlet"},
 {id:"ameku",day:5,group:"購物街區",priorities:["Ryubo Food Market","大創、無印良品","SPORTS DEPO","附近 UNIQLO、GU"],ref:"ameku"},
 {id:"mainPlace",day:5,group:"大型商場",priorities:["3COINS+plus","無印良品","大創、ABC-MART","卡牌店"],ref:"mainPlace"},
 {id:"appleTown",day:5,group:"購物街區",priorities:["Can★Do"],ref:"appleTown"},
 {id:"kokusai",day:5,group:"街道",priorities:["唐吉訶德","牧志公設市場","首里石鹼","沖繩文化屋","美麗海水族館直營店"],ref:"kokusai"},
 {id:"dnaha",day:5,group:"購物街區",priorities:["駿河屋","淳久堂書店","大創"],ref:"dnaha"},
 {id:"makishiMax",day:5,group:"超市",priorities:["MaxValu 超市","AEON Drug"],ref:"makishiMax"},
 {id:"tsubogawa",day:4,group:"藥妝",priorities:["唐吉訶德（晚間可選）","附近金秀超市"],ref:"tsubogawa"},
 {id:"ryuboWest",day:1,group:"超市",priorities:["水、飲料、晚間採買"],ref:"ryuboWest"},
 {id:"oroku",day:6,group:"大型商場",priorities:["AEON 食品館","大創、UNIQLO","ABC-MART","藏壽司","嬰幼兒用品"],ref:"oroku"},
 {id:"akamine",day:6,group:"超市",priorities:["UNION","附近藥妝","漫畫倉庫"],ref:"akamine"}
];
// 原始圖片共21張；1與2重複，同款去重仍保留原號碼作比對。
// 尚未取得可在公開儲存庫使用的完整官方商品圖時，不以近似商品照片冒充。
export const PRODUCTS = [
 {id:"p01",name:"DHC 鋅 60日份（60粒）",jp:"DHC 亜鉛 60日分",cat:"保健",photo:"1、2（相同照片）",where:["rycom","parco","kokusai","oroku"],priority:1,brand:"DHC",query:"DHC 亜鉛 60日分",official:"https://top.dhc.co.jp/shop/health/tempo/item/e00008/",status:"confirmed"},
 {id:"p03",name:"mont-bell 深藍色斜背包（附原圖 Kitty 掛飾）",jp:"mont-bell ショルダーバッグ（型號待核）",cat:"包包",photo:"3",where:["rycom"],priority:1,brand:"mont-bell",query:"mont-bell ショルダーバッグ ネイビー",official:"https://www.montbell.jp/",status:"variant"},
 {id:"p04",name:"mont-bell 零錢包 Coin Purse（六色）",jp:"モンベル コインパース #1133374",cat:"包包",photo:"4",where:["rycom"],priority:1,brand:"mont-bell",query:"モンベル コインパース 1133374",official:"https://webshop.montbell.jp/goods/disp.php?product_id=1133374",status:"confirmed"},
 {id:"p05",name:"mont-bell 黑色後背包",jp:"mont-bell デイパック（型號待核）",cat:"包包",photo:"5",where:["rycom"],priority:1,brand:"mont-bell",query:"mont-bell デイパック ブラック",official:"https://www.montbell.jp/",status:"variant"},
 {id:"p06",name:"Bioré おうちdeエステ 深層泥潔顏 180g",jp:"ビオレ おうちdeエステ ディープクレイ洗顔",cat:"美妝",photo:"6",where:["rycom","parco","kokusai","oroku"],priority:2,brand:"花王 Bioré",query:"ビオレ おうちdeエステ ディープクレイ洗顔 180g",official:"https://www.kao-kirei.com/ja/item/khg/biore/4901301464057/",status:"confirmed"},
 {id:"p07",name:"曼秀雷敦 ジンマート 15g（蕁麻疹止癢乳霜）",jp:"メンソレータム ジンマート 15g",cat:"藥妝",photo:"7",where:["rycom","parco","kokusai","oroku"],priority:2,brand:"ロート製薬",query:"ロート製薬 ジンマート 15g",official:"https://jp.rohto.com/jinmart/ointment/",status:"confirmed"},
 {id:"p08a",name:"ululis PINKme 粉紅瓶髮油 100mL",jp:"ウルリス ピンクミー ウォーターコンク コントロール ヘアオイル",cat:"美妝",photo:"8（左）",where:["rycom","parco","kokusai","oroku"],priority:2,brand:"ululis",query:"ululis PINKme コントロール ヘアオイル",official:"https://ululis.jp/pinkme/",status:"confirmed"},
 {id:"p08b",name:"ululis Kirameki 紫色瓶光澤髮油 100mL",jp:"ウルリス キラメキ ウォーターコンク シャイニー ヘアオイル",cat:"美妝",photo:"8（右）",where:["rycom","parco","kokusai","oroku"],priority:2,brand:"ululis",query:"ululis kirameki シャイニー ヘアオイル",official:"https://ululis.jp/kirameki/",status:"confirmed"},
 {id:"p09",name:"沖繩 Sea Glass 海玻璃杯與小碟／托盤",jp:"OKINAWA Sea Glass グラス・小皿",cat:"雜貨",photo:"9",where:["ryuBo","parco","iias","kokusai"],priority:2,brand:"OKINAWA Sea Glass",query:"OKINAWA Sea Glass グラス",status:"confirmed"},
 {id:"p10",name:"ORION 沖繩限定保濕面膜",jp:"ORION FACE MASK オリオン フェイスマスク",cat:"沖繩限定",photo:"10",where:["ryuBo","parco","kokusai","oroku"],priority:2,brand:"ORION",query:"オリオン フェイスマスク 沖縄",status:"confirmed"},
 {id:"p11",name:"FERME LA TERRE 美瑛奶油起司夾心餅 Petit",jp:"バターチーズサンド プチ〈ダブルクリーム〉",cat:"食品",photo:"11",where:["ryuBo","rycom","parco","oroku"],priority:2,brand:"フェルム ラ・テール美瑛",query:"バターチーズサンド プチ ダブルクリーム",official:"https://jalplaza-airport.jalux.com/product/detail/9200907242119/",note:"原圖標示北海道食材、那霸機場國內線2樓；不是沖繩限定商品",status:"confirmed"},
 {id:"p12",name:"MUHI 麵包超人止癢貼片 A1 76枚",jp:"ムヒパッチA1 76枚 アンパンマン",cat:"藥妝",photo:"12",where:["rycom","parco","kokusai","oroku"],priority:2,brand:"池田模範堂",query:"ムヒパッチA 76枚 公式",status:"confirmed"},
 {id:"p13",name:"Kracie 漢方葛根湯 30包裝",jp:"クラシエ漢方 葛根湯エキス顆粒 30包",cat:"藥妝",photo:"13",where:["rycom","parco","kokusai","oroku"],priority:2,brand:"クラシエ",query:"クラシエ 葛根湯 30包",status:"confirmed"},
 {id:"p14",name:"久光製藥 Butenalock Vα 抗黴菌乳霜 18g",jp:"ブテナロックVαクリーム 18g",cat:"藥妝",photo:"14",where:["rycom","parco","kokusai","oroku"],priority:2,brand:"久光製薬",query:"ブテナロックVαクリーム 18g",official:"https://www.hisamitsu.co.jp/healthcare/products/506.html",storeLink:"https://www.daikokudrug-taiwan.com/zh-TW/products/m84446045",status:"confirmed",note:"指定第2類醫藥品；用藥依藥師及產品說明"},
 {id:"p15",name:"石垣島車蝦仙貝 BIG PACK 54枚（2枚×27袋）",jp:"石垣島車えびせんべい Big Pack 54枚",cat:"食品",photo:"15",where:["ryuBo","rycom","parco","kokusai","oroku"],priority:2,brand:"沖縄南風堂",query:"石垣島車えびせんべい Big Pack 54枚",official:"https://www.okinawashooten.com/products/ishigakijima-kurumaebi-senbei-big-pack",status:"confirmed"},
 {id:"p16",name:"ほりにし 萬用香料（原味瓶）",jp:"アウトドアスパイス ほりにし",cat:"食品",photo:"16",where:["ryuBo","rycom","parco","kokusai"],priority:2,brand:"ほりにし",query:"アウトドアスパイス ほりにし 公式",official:"https://horinishi.jp/lineup/",status:"confirmed"},
 {id:"p17",name:"合利他命 EX Plus 270錠（瓶裝）",jp:"アリナミンEXプラス 270錠",cat:"保健",photo:"17",where:["rycom","parco","kokusai","oroku"],priority:2,brand:"アリナミン製薬",query:"アリナミンEXプラス 瓶",official:"https://alinamin.jp/lineup/alinaminexplus.html",status:"confirmed"},
 {id:"p18",name:"沖繩島辣椒粉 14g（紅蓋罐）",jp:"沖縄 島とうがらし粉",cat:"食品",photo:"18",where:["ryuBo","rycom","parco","kokusai","oroku"],priority:2,brand:"沖繩縣產",query:"激辛 島とうがらし粉 14g",official:"https://www.ryukyufront.jp/SHOP/rfo0710.html",status:"confirmed"},
 {id:"p19",name:"宮古島雪鹽ぱりん 鹽香草夾心薄餅 10枚",jp:"雪塩ぱりん 塩バニラクリーム 10枚",cat:"食品",photo:"19",where:["ryuBo","rycom","parco","kokusai"],priority:2,brand:"宮古島の雪塩",query:"雪塩ぱりん 10枚",official:"https://miyakojima-yukishio.com/products/4529448980010",status:"confirmed"},
 {id:"p20",name:"海寶沖繩海蘊與芽海帶沖泡湯包",jp:"沖縄もずくと芽かぶのとろーりスープ",cat:"食品",photo:"20",where:["ryuBo","rycom","parco","kokusai"],priority:2,brand:"海宝",query:"沖縄もずくと芽かぶのとろーりスープ",official:"https://kaihou-okinawa.com/products/001",status:"confirmed"},
 {id:"p21",name:"石垣島辣油（手工瓶裝／紙封）",jp:"石垣島ラー油",cat:"食品",photo:"21",where:["ryuBo","rycom","parco","kokusai"],priority:2,brand:"石垣島ラー油",query:"石垣島ラー油 手作り",official:"https://penshoku.jp/?pid=148533679",status:"confirmed"}
];
export const PHOTO_CREDITS = [
 {id:"aquarium",label:"美麗海水族館",file:"Big and small fish at Okinawa Churaumi Aquarium.jpg",source:"https://commons.wikimedia.org/wiki/File:Big_and_small_fish_at_Okinawa_Churaumi_Aquarium.jpg",credit:"Wikimedia Commons（請依來源檔頁授權）"},
 {id:"american",label:"美國村",file:"American Village in Okinawa.jpg",source:"https://commons.wikimedia.org/wiki/File:American_Village_in_Okinawa.jpg",credit:"Lee Geonju / CC BY-SA 4.0"},
 {id:"shrine",label:"波上宮",file:"Naminoue-Shrine-mainhall.JPG",source:"https://commons.wikimedia.org/wiki/File:Naminoue-Shrine-mainhall.JPG",credit:"LordAmeth / Public Domain"}
];
