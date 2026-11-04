# 沖繩，慢慢走。｜2026 沖繩母女自由行

正式網站（需啟用 GitHub Pages）：https://squallorc-dot.github.io/okinawa-trip-2026/

2026/11/11（三）–11/16（一）沖繩兩人自由行，6天5夜。參考東京互動旅遊手冊，針對沖繩重構為四分頁：**行程／交通／必買／資訊**。

## 網站內容
- 六天行程：航班、固定住宿、Klook 北部／南部一日遊、AEON Mall Rycom、PARCO CITY、國際通、波上宮等。
- 交通：機場計程車、那霸巴士總站 152 號、PARCO CITY 385 號、單軌與步行，重要路段有上下車指南和外部 Google Maps。
- 必買：原 Google Drive 21 張圖片整理為去重後的商品清單，支援未買／已買／沒找到及商場篩選；狀態僅保存在當前裝置。
- 資訊：星宇航班、飯店正確電話地址、行李配送與 2026 年 11 月起新版退稅、官方連結和優惠券。

## 技術
無外部 JS 框架，ES Modules + PWA + GitHub Pages。檔案：`index.html`、`data.js`、`app.js`、`styles.css`、`sw.js`、`manifest.webmanifest`、`refresh.html`、`version.json`、`assets/`。

修改版本需同步 `app.js` 載入 `data.js` 的查詢參數、`index.html` 版本參數、`sw.js` 快取清單與 `version.json`。

## 圖片與商品
原始購物照片 21 張（1 和 2 同款），網站上提供去重後 20 張參考照片，照片8拆成兩款髮油，因此商品清單共 21 筆。已把原參考照片加入產品圖卡，部分款式能使用品牌商品圖作主圖，並可點開原圖對照。重要景點使用與其地點一致的實景照片，不能以不同地點影像冒充。部分外部實景照片在無網路或來源限流時會回退至原創沖繩色系底圖。

## 操作與資料限制
- 日期與航班依旅客提供的訂單文字，艙等與託運重量依電子機票。
- Klook 的集合時間與路線按原行程保留，但團型停留細節應對照已購憑證。
- 152、385 號時間及站台需在 2026/11/13 出發前核對；站名、到站時間、價格可臨時變動。
- 行李配送需提前向 Airporter 完成預訂；無法安排則改為回飯店領取行李。
- 2026/11/1 日本退稅新制：機場託運前須先處理符合條件商品的海關確認。
- 公開頁不放護照、機票條碼、私人電話、訂位代碼、Klook 票券或敏感資訊。
- 搜尋引擎 `noindex` 不等於密碼保護。

## 部署步驟
GitHub Repository Settings → Pages → Build and deployment → Deploy from a branch → Branch `main` / `(root)` → Save。

網址：https://squallorc-dot.github.io/okinawa-trip-2026/

若 LINE 或手機快取舊版，可使用：https://squallorc-dot.github.io/okinawa-trip-2026/refresh.html

## 後續核對
1. Klook 11/12、11/14 的已購商品內容、集合地點與實際停留。
2. Day 3 巴士 152、385 的指定日期官方時刻與候車位置，並補公車 92→61 轉乘備案。
3. 繼續核對 mont-bell 及包裝有歧義的商品型號，補充更多可合法使用的官方商品主圖。
4. 核對目前各實景圖的正確地點、圖片能否正常載入；再補充更多有使用權的正式景點與交通位置照片。
5. 完成手機、LINE、離線與分享預覽實機驗收。
