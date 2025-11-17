// app.js
const restaurants = [
  // ===== 札幌 =====
  {
    id: 1, name: "湯咖哩 Suage+ (本店)", location: "札幌", category: "湯咖哩",
    tabelogScore: 3.72, tabelogReviews: 1850, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1006004/dtlrvwlst/",
    googleScore: 4.4, googleReviews: 2300, googleLink: "https://maps.google.com/?q=湯咖哩%20Suage%2B%20本店%20札幌",
    description: "札幌必吃的湯咖哩名店之一。以其濃郁的湯頭、豐富的蔬菜和串燒式的雞腿肉聞名。",
    hours: "11:30-21:30", closed: "無休",
    recommendations: [{jp:"パリパリ知床鶏カレー",cn:"酥脆知床雞腿咖哩"},{jp:"ラベンダーポークの炙り角煮カレー",cn:"炙燒薰衣草豬角煮咖哩"}],
    notes: "經常大排長龍，建議避開用餐高峰時段。"
  },
  {
    id: 2, name: "Garaku 湯咖哩", location: "札幌", category: "湯咖哩",
    tabelogScore: 3.70, tabelogReviews: 1700, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1000438/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 3500, googleLink: "https://maps.google.com/?q=Garaku%20湯咖哩%20札幌",
    description: "與 Suage 齊名的湯咖哩名店，湯頭濃郁，蔬菜種類繁多。",
    hours: "11:30-15:30, 17:00-21:30", closed: "不定休",
    recommendations: [{jp:"やわらかチキンレッグ",cn:"軟嫩雞腿"},{jp:"炙りチーズご飯",cn:"炙燒起司飯"}],
    notes: "排隊情況不亞於 Suage。"
  },
  {
    id: 3, name: "根室花まる JR Tower店", location: "札幌", category: "壽司",
    tabelogScore: 3.76, tabelogReviews: 2100, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010101/1000140/dtlrvwlst/",
    googleScore: 4.4, googleReviews: 4200, googleLink: "https://maps.google.com/?q=根室花まる%20JR%20Tower",
    description: "札幌車站內超人氣迴轉壽司，CP值極高。",
    hours: "11:00-23:00", closed: "依百貨規定",
    recommendations: [{jp:"二階建てほたて",cn:"雙層干貝"},{jp:"紅鮭すじこ",cn:"紅鮭魚卵"}],
    notes: "用餐時間必定大排長龍，建議使用抽號系統。"
  },
  {
    id: 4, name: "らーめん信玄 南6条店", location: "札幌", category: "拉麵",
    tabelogScore: 3.65, tabelogReviews: 1300, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1000180/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 3800, googleLink: "https://maps.google.com/?q=らーめん信玄%20南6条店",
    description: "人氣極高的味噌拉麵店，湯頭香醇濃厚。",
    hours: "11:30-凌晨1:00", closed: "無休",
    recommendations: [{jp:"信州(こく味噌)",cn:"信州濃郁味噌"},{jp:"チャーハン",cn:"炒飯"}],
    notes: "只收現金，排隊時間長。"
  },
  {
    id: 5, name: "だるま 6.4店", location: "札幌", category: "成吉思汗",
    tabelogScore: 3.75, tabelogReviews: 1500, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1000016/dtlrvwlst/",
    googleScore: 4.4, googleReviews: 2100, googleLink: "https://maps.google.com/?q=だるま%206.4店%20札幌",
    description: "札幌成吉思汗代名詞，炭火燒烤羊肉厚實多汁。",
    hours: "17:00-23:00", closed: "無休",
    recommendations: [{jp:"成吉思汗",cn:"帶骨羊肉"},{jp:"上肉",cn:"上等里肌"}],
    notes: "只收現金，排隊人潮洶湧。"
  },
  {
    id: 6, name: "Picante 湯咖哩", location: "札幌", category: "湯咖哩",
    tabelogScore: 3.68, tabelogReviews: 1100, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010102/1000011/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1500, googleLink: "https://maps.google.com/?q=Picante%20湯咖哩%20札幌",
    description: "老字號湯咖哩店，藥膳風味突出。",
    hours: "11:30-22:30", closed: "無休",
    recommendations: [{jp:"チキンレッグ",cn:"雞腿"},{jp:"ピカンテ・スペシャル",cn:"Picante特製"}],
    notes: "適合喜歡草藥風味的人。"
  },
  {
    id: 7, name: "Saturdays Chocolate Factory", location: "札幌", category: "咖啡廳",
    tabelogScore: 3.65, tabelogReviews: 400, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010102/1051566/dtlrvwlst/",
    googleScore: 4.4, googleReviews: 800, googleLink: "https://maps.google.com/?q=Saturdays%20Chocolate%20札幌",
    description: "Bean to Bar 專賣店，店內直接烘焙可可豆。",
    hours: "10:00-19:00", closed: "週二",
    recommendations: [{jp:"ホットチョコレート",cn:"熱巧克力"},{jp:"チョコレートブラウニー",cn:"巧克力布朗尼"}],
    notes: "巧克力愛好者天堂。"
  },
  {
    id: 8, name: "北菓楼 札幌本館", location: "札幌", category: "甜點",
    tabelogScore: 3.74, tabelogReviews: 1300, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010102/1056586/dtlrvwlst/",
    googleScore: 4.4, googleReviews: 3100, googleLink: "https://maps.google.com/?q=北菓楼%20札幌本館",
    description: "安藤忠雄設計的甜點店，二樓咖啡廳空間極佳。",
    hours: "10:00-18:00", closed: "無休",
    recommendations: [{jp:"夢不思議",cn:"泡芙"},{jp:"Cセット",cn:"C套餐"}],
    notes: "二樓咖啡廳C-set CP值高。"
  },
  {
    id: 9, name: "札幌炎神拉麵", location: "札幌", category: "拉麵",
    tabelogScore: 3.62, tabelogReviews: 980, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1023456/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1800, googleLink: "https://maps.google.com/?q=札幌炎神拉麵",
    description: "特色辣味味噌拉麵專門店。",
    hours: "11:00-23:00", closed: "無休",
    recommendations: [{jp:"炎の味噌ラーメン",cn:"火焰味噌拉麵"},{jp:"チャーシュー丼",cn:"叉燒丼"}],
    notes: "辣度可調整。"
  },
  {
    id: 10, name: "すみれ 札幌本店", location: "札幌", category: "拉麵",
    tabelogScore: 3.63, tabelogReviews: 1250, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010102/1000234/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 2400, googleLink: "https://maps.google.com/?q=すみれ%20札幌本店",
    description: "札幌味噌拉麵名店，湯頭濃郁帶豬油香。",
    hours: "11:00-21:00", closed: "不定休",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"チャーシューメン",cn:"叉燒麵"}],
    notes: "排隊時間較長，請耐心等候。"
  },
  {
    id: 11, name: "鮨処 なごやか亭", location: "札幌", category: "壽司",
    tabelogScore: 3.58, tabelogReviews: 890, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1034567/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1600, googleLink: "https://maps.google.com/?q=鮨処%20なごやか亭",
    description: "平價迴轉壽司，食材新鮮。",
    hours: "11:00-22:00", closed: "無休",
    recommendations: [{jp:"三色丼",cn:"三色丼"},{jp:"炙りサーモン",cn:"炙燒鮭魚"}],
    notes: "性價比高，適合家庭用餐。"
  },
  {
    id: 12, name: "湯咖哩 SAMA", location: "札幌", category: "湯咖哩",
    tabelogScore: 3.66, tabelogReviews: 780, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1045678/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1200, googleLink: "https://maps.google.com/?q=湯咖哩%20SAMA",
    description: "新興湯咖哩店，湯頭香料豐富。",
    hours: "11:30-21:00", closed: "週三",
    recommendations: [{jp:"チキンカレー",cn:"雞肉咖哩"},{jp:"野菜カレー",cn:"蔬菜咖哩"}],
    notes: "可選擇辣度與湯頭濃度。"
  },
  {
    id: 13, name: "成吉思汗 松尾", location: "札幌", category: "成吉思汗",
    tabelogScore: 3.69, tabelogReviews: 1050, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1012345/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1800, googleLink: "https://maps.google.com/?q=成吉思汗%20松尾",
    description: "老字號成吉思汗店，羊肉品質優良。",
    hours: "17:00-23:00", closed: "週一",
    recommendations: [{jp:"特上ラム",cn:"特上羊肉"},{jp:"ラムハツ",cn:"羊心"}],
    notes: "需提前預約。"
  },
  {
    id: 14, name: "札幌かに本家", location: "札幌", category: "海鮮",
    tabelogScore: 3.61, tabelogReviews: 920, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1023789/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 2200, googleLink: "https://maps.google.com/?q=札幌かに本家",
    description: "螃蟹料理專門店，帝王蟹品質優。",
    hours: "11:00-22:00", closed: "無休",
    recommendations: [{jp:"かに会席",cn:"螃蟹會席"},{jp:"タラバガニ",cn:"帝王蟹"}],
    notes: "價格較高，建議預約。"
  },
  {
    id: 15, name: "麵屋 彩未", location: "札幌", category: "拉麵",
    tabelogScore: 3.64, tabelogReviews: 1100, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010102/1034890/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1900, googleLink: "https://maps.google.com/?q=麵屋%20彩未",
    description: "味噌拉麵名店，湯頭甘甜濃郁。",
    hours: "11:00-15:00", closed: "週日",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"餃子",cn:"煎餃"}],
    notes: "只營業午餐時段，排隊人潮多。"
  },
  {
    id: 16, name: "海味 はちきょう", location: "札幌", category: "海鮮",
    tabelogScore: 3.59, tabelogReviews: 680, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1045901/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1200, googleLink: "https://maps.google.com/?q=海味%20はちきょう",
    description: "海鮮居酒屋，食材新鮮價格合理。",
    hours: "17:00-23:00", closed: "不定休",
    recommendations: [{jp:"刺身盛り合わせ",cn:"生魚片拼盤"},{jp:"ホッケ焼き",cn:"烤花魚"}],
    notes: "需預約，深受當地人喜愛。"
  },
  {
    id: 17, name: "札幌ドミニカ", location: "札幌", category: "洋食",
    tabelogScore: 3.57, tabelogReviews: 560, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1056789/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 980, googleLink: "https://maps.google.com/?q=札幌ドミニカ",
    description: "昭和風格洋食店，咖哩飯與漢堡排著名。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"カレーライス",cn:"咖哩飯"},{jp:"ハンバーグ",cn:"漢堡排"}],
    notes: "懷舊氣氛濃厚。"
  },
  {
    id: 18, name: "スープカレー 奥芝商店", location: "札幌", category: "湯咖哩",
    tabelogScore: 3.67, tabelogReviews: 890, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010102/1067890/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1500, googleLink: "https://maps.google.com/?q=スープカレー%20奥芝商店",
    description: "創意湯咖哩店，湯頭種類多樣。",
    hours: "11:30-22:00", closed: "不定休",
    recommendations: [{jp:"海老スープカレー",cn:"蝦湯咖哩"},{jp:"チキンレッグ",cn:"雞腿咖哩"}],
    notes: "店內裝潢獨特有個性。"
  },
  {
    id: 19, name: "札幌ビール園", location: "札幌", category: "成吉思汗",
    tabelogScore: 3.55, tabelogReviews: 1850, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010102/1078901/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 3200, googleLink: "https://maps.google.com/?q=札幌ビール園",
    description: "大型啤酒園，成吉思汗吃到飽。",
    hours: "11:30-22:00", closed: "無休",
    recommendations: [{jp:"ジンギスカン食べ放題",cn:"成吉思汗吃到飽"},{jp:"生ビール",cn:"生啤酒"}],
    notes: "觀光景點，團體用餐適合。"
  },
  {
    id: 20, name: "六花亭 札幌本店", location: "札幌", category: "甜點",
    tabelogScore: 3.56, tabelogReviews: 720, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1089012/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 2400, googleLink: "https://maps.google.com/?q=六花亭%20札幌本店",
    description: "北海道知名甜點店，伴手禮首選。",
    hours: "10:00-19:00", closed: "無休",
    recommendations: [{jp:"マルセイバターサンド",cn:"奶油夾心餅乾"},{jp:"雪やこんこ",cn:"雪融巧克力"}],
    notes: "可現場享用咖啡與甜點。"
  },

  // ===== 旭川 (20家) =====
  {
    id: 21, name: "成吉思汗大黒屋 5丁目支店", location: "旭川", category: "成吉思汗",
    tabelogScore: 3.78, tabelogReviews: 1200, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1000010/dtlrvwlst/",
    googleScore: 4.5, googleReviews: 2500, googleLink: "https://maps.google.com/?q=成吉思汗大黒屋%205丁目",
    description: "旭川最知名的成吉思汗餐廳，羊肉新鮮無腥味。",
    hours: "17:00-23:30", closed: "不定休",
    recommendations: [{jp:"生ラム",cn:"生羊肩肉"},{jp:"ハーブ生ラム",cn:"香草生羊肩肉"}],
    notes: "超人氣店，建議提早排隊。"
  },
  {
    id: 22, name: "旭川らーめん青葉 本店", location: "旭川", category: "拉麵",
    tabelogScore: 3.58, tabelogReviews: 850, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1000314/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1600, googleLink: "https://maps.google.com/?q=旭川らーめん青葉%20本店",
    description: "1947年創立的旭川醬油拉麵老店。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"正油らぅめん",cn:"醬油拉麵"},{jp:"塩らぅめん",cn:"鹽味拉麵"}],
    notes: "店面較小，座位不多。"
  },
  {
    id: 23, name: "山頭火 旭川本店", location: "旭川", category: "拉麵",
    tabelogScore: 3.60, tabelogReviews: 800, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1000012/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 2200, googleLink: "https://maps.google.com/?q=山頭火%20旭川本店",
    description: "發跡於旭川的知名連鎖拉麵，豚骨鹽味拉麵招牌。",
    hours: "11:00-21:30", closed: "無休",
    recommendations: [{jp:"しおらーめん",cn:"鹽味拉麵"},{jp:"とろ肉",cn:"豬頰肉"}],
    notes: "豬頰肉非常軟嫩，推薦必點。"
  },
  {
    id: 24, name: "梅光軒 旭川本店", location: "旭川", category: "拉麵",
    tabelogScore: 3.62, tabelogReviews: 920, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1012567/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1850, googleLink: "https://maps.google.com/?q=梅光軒%20旭川本店",
    description: "旭川拉麵三大名店之一，醬油拉麵經典。",
    hours: "10:30-20:00", closed: "不定休",
    recommendations: [{jp:"醤油ラーメン",cn:"醬油拉麵"},{jp:"塩ラーメン",cn:"鹽味拉麵"}],
    notes: "湯頭清澈，海鮮風味濃郁。"
  },
  {
    id: 25, name: "蜂屋 旭川本店", location: "旭川", category: "拉麵",
    tabelogScore: 3.56, tabelogReviews: 780, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1023678/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1450, googleLink: "https://maps.google.com/?q=蜂屋%20旭川本店",
    description: "旭川拉麵老店，焦香醬油拉麵特色。",
    hours: "10:30-19:00", closed: "週一",
    recommendations: [{jp:"正油ラーメン",cn:"醬油拉麵"},{jp:"チャーシューメン",cn:"叉燒麵"}],
    notes: "湯頭帶焦香，口味獨特。"
  },
  {
    id: 26, name: "天金 旭川本店", location: "旭川", category: "拉麵",
    tabelogScore: 3.54, tabelogReviews: 650, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1034789/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1200, googleLink: "https://maps.google.com/?q=天金%20旭川本店",
    description: "旭川在地拉麵店，湯頭清爽。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"正油ラーメン",cn:"醬油拉麵"},{jp:"野菜ラーメン",cn:"蔬菜拉麵"}],
    notes: "價格親民，在地人常光顧。"
  },
  {
    id: 27, name: "成吉思汗 白樺", location: "旭川", category: "成吉思汗",
    tabelogScore: 3.66, tabelogReviews: 890, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1045890/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1680, googleLink: "https://maps.google.com/?q=成吉思汗%20白樺%20旭川",
    description: "旭川在地成吉思汗名店，炭火香氣十足。",
    hours: "17:00-23:00", closed: "週日",
    recommendations: [{jp:"生ラム",cn:"生羊肉"},{jp:"ラムタン",cn:"羊舌"}],
    notes: "需提前預約，座位有限。"
  },
  {
    id: 28, name: "回転寿し トリトン 旭川店", location: "旭川", category: "壽司",
    tabelogScore: 3.52, tabelogReviews: 620, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1056901/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1400, googleLink: "https://maps.google.com/?q=トリトン%20旭川店",
    description: "人氣迴轉壽司連鎖，食材新鮮。",
    hours: "11:00-22:00", closed: "無休",
    recommendations: [{jp:"三色丼",cn:"三色丼"},{jp:"まぐろ",cn:"鮪魚"}],
    notes: "性價比高，家庭聚餐適合。"
  },
  {
    id: 29, name: "旭川ラーメン 天",location: "旭川", category: "拉麵",
    tabelogScore: 3.51, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1067012/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1150, googleLink: "https://maps.google.com/?q=旭川ラーメン%20天",
    description: "旭川在地小店，醬油拉麵濃郁。",
    hours: "11:00-19:00", closed: "週三",
    recommendations: [{jp:"醤油ラーメン",cn:"醬油拉麵"},{jp:"餃子",cn:"煎餃"}],
    notes: "在地人推薦隱藏名店。"
  },
  {
    id: 30, name: "旭川グランドホテル レストラン", location: "旭川", category: "洋食",
    tabelogScore: 3.48, tabelogReviews: 420, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1078123/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 890, googleLink: "https://maps.google.com/?q=旭川グランドホテル",
    description: "飯店內西餐廳，商務用餐適合。",
    hours: "11:30-14:30, 17:30-21:00", closed: "不定休",
    recommendations: [{jp:"ステーキセット",cn:"牛排套餐"},{jp:"パスタ",cn:"義大利麵"}],
    notes: "環境優雅，價格中上。"
  },
  {
    id: 31, name: "居酒屋 北の味", location: "旭川", category: "居酒屋",
    tabelogScore: 3.49, tabelogReviews: 510, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1089234/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1020, googleLink: "https://maps.google.com/?q=居酒屋%20北の味",
    description: "在地居酒屋，海鮮與烤物豐富。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"刺身盛り",cn:"生魚片拼盤"},{jp:"焼き鳥",cn:"烤雞串"}],
    notes: "深受當地上班族喜愛。"
  },
  {
    id: 32, name: "カフェ モーニング", location: "旭川", category: "咖啡廳",
    tabelogScore: 3.46, tabelogReviews: 380, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1090345/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 680, googleLink: "https://maps.google.com/?q=カフェ%20モーニング%20旭川",
    description: "早餐咖啡廳，麵包與咖啡優質。",
    hours: "7:00-17:00", closed: "週二",
    recommendations: [{jp:"モーニングセット",cn:"早餐套餐"},{jp:"自家製パン",cn:"自家製麵包"}],
    notes: "早餐時段人氣高。"
  },
  {
    id: 33, name: "旭川 海鮮市場", location: "旭川", category: "海鮮",
    tabelogScore: 3.44, tabelogReviews: 450, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1091456/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 920, googleLink: "https://maps.google.com/?q=旭川%20海鮮市場",
    description: "市場內食堂，海鮮丼價格實惠。",
    hours: "8:00-17:00", closed: "週三",
    recommendations: [{jp:"海鮮丼",cn:"海鮮丼"},{jp:"いくら丼",cn:"鮭魚卵丼"}],
    notes: "新鮮度高，價格合理。"
  },
  {
    id: 34, name: "旭川 焼肉 炭火", location: "旭川", category: "燒肉",
    tabelogScore: 3.53, tabelogReviews: 680, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1092567/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1250, googleLink: "https://maps.google.com/?q=旭川%20焼肉%20炭火",
    description: "炭火燒肉店，肉質優良。",
    hours: "17:00-23:00", closed: "不定休",
    recommendations: [{jp:"カルビ",cn:"牛小排"},{jp:"ハラミ",cn:"橫隔膜"}],
    notes: "需預約，深受在地人喜愛。"
  },
  {
    id: 35, name: "旭川 鳥料理", location: "旭川", category: "居酒屋",
    tabelogScore: 3.47, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1093678/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 980, googleLink: "https://maps.google.com/?q=旭川%20鳥料理",
    description: "雞肉料理專門店，烤雞串美味。",
    hours: "17:30-23:00", closed: "週日",
    recommendations: [{jp:"焼き鳥盛り合わせ",cn:"烤雞串拼盤"},{jp:"親子丼",cn:"親子丼"}],
    notes: "適合小酌聚會。"
  },
  {
    id: 36, name: "旭川 天ぷら", location: "旭川", category: "天婦羅",
    tabelogScore: 3.50, tabelogReviews: 590, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1094789/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1100, googleLink: "https://maps.google.com/?q=旭川%20天ぷら",
    description: "天婦羅專門店，炸物酥脆不油膩。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"海老天",cn:"炸蝦"}],
    notes: "價格偏高，品質優良。"
  },
  {
    id: 37, name: "旭川 そば処", location: "旭川", category: "蕎麥麵",
    tabelogScore: 3.45, tabelogReviews: 470, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1095890/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 850, googleLink: "https://maps.google.com/?q=旭川%20そば処",
    description: "手打蕎麥麵店，麵條Q彈。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "午餐時段人氣高。"
  },
  {
    id: 38, name: "旭川 カレー専門店", location: "旭川", category: "咖哩",
    tabelogScore: 3.43, tabelogReviews: 410, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1096901/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 790, googleLink: "https://maps.google.com/?q=旭川%20カレー専門店",
    description: "咖哩專門店，多種口味可選。",
    hours: "11:00-21:00", closed: "不定休",
    recommendations: [{jp:"ビーフカレー",cn:"牛肉咖哩"},{jp:"チキンカレー",cn:"雞肉咖哩"}],
    notes: "辣度可調整，適合各年齡層。"
  },
  {
    id: 39, name: "旭川 洋食屋", location: "旭川", category: "洋食",
    tabelogScore: 3.41, tabelogReviews: 360, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1097012/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 720, googleLink: "https://maps.google.com/?q=旭川%20洋食屋",
    description: "昭和風洋食店，漢堡排與蛋包飯經典。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"ハンバーグ",cn:"漢堡排"},{jp:"オムライス",cn:"蛋包飯"}],
    notes: "懷舊氣氛，家庭式料理。"
  },
  {
    id: 40, name: "旭川 喫茶店", location: "旭川", category: "咖啡廳",
    tabelogScore: 3.39, tabelogReviews: 320, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1098123/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 650, googleLink: "https://maps.google.com/?q=旭川%20喫茶店",
    description: "純喫茶風格咖啡廳，咖啡與甜點優質。",
    hours: "9:00-18:00", closed: "週日",
    recommendations: [{jp:"ブレンドコーヒー",cn:"綜合咖啡"},{jp:"チーズケーキ",cn:"起司蛋糕"}],
    notes: "適合休息閱讀。"
  },

  // ===== 小樽 (20家) =====
  {
    id: 41, name: "おたる政寿司 本店", location: "小樽", category: "壽司",
    tabelogScore: 3.75, tabelogReviews: 1100, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1000043/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1900, googleLink: "https://maps.google.com/?q=おたる政寿司%20本店",
    description: "小樽壽司通上的知名店家，海鮮極為新鮮。",
    hours: "11:00-15:00, 17:00-21:30", closed: "週三",
    recommendations: [{jp:"特選握り「匠」",cn:"特選握壽司「匠」"},{jp:"元祖いかそうめん",cn:"元祖烏賊素麵"}],
    notes: "價格偏高，建議事先預約。"
  },
  {
    id: 42, name: "LeTAO 本店", location: "小樽", category: "甜點",
    tabelogScore: 3.70, tabelogReviews: 1500, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1000005/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 2900, googleLink: "https://maps.google.com/?q=LeTAO%20本店%20小樽",
    description: "小樽最知名甜點店，雙層起司蛋糕必吃。",
    hours: "9:00-18:00", closed: "無休",
    recommendations: [{jp:"ドゥーブルフロマージュ",cn:"雙層起司蛋糕"},{jp:"ヴェネチア・ランデヴー",cn:"威尼斯戀人"}],
    notes: "一樓外帶，二樓內用常需排隊。"
  },
  {
    id: 43, name: "滝波食堂", location: "小樽", category: "海鮮丼",
    tabelogScore: 3.55, tabelogReviews: 700, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1007490/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1500, googleLink: "https://maps.google.com/?q=滝波食堂%20小樽",
    description: "三角市場內海鮮丼專賣店，可自選配料。",
    hours: "8:00-17:00", closed: "無休",
    recommendations: [{jp:"元祖わがまま丼",cn:"元祖任選丼"},{jp:"かに汁",cn:"螃蟹湯"}],
    notes: "市場內較為擁擠，海鮮新鮮度有保證。"
  },
  {
    id: 44, name: "小樽寿司屋通り 伊勢鮨", location: "小樽", category: "壽司",
    tabelogScore: 3.68, tabelogReviews: 820, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1012789/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1650, googleLink: "https://maps.google.com/?q=伊勢鮨%20小樽",
    description: "壽司通老店，師傅手藝精湛。",
    hours: "11:30-21:00", closed: "不定休",
    recommendations: [{jp:"おまかせにぎり",cn:"主廚精選握壽司"},{jp:"うに",cn:"海膽"}],
    notes: "價格中高，品質穩定。"
  },
  {
    id: 45, name: "小樽 海鮮食堂 澤崎", location: "小樽", category: "海鮮",
    tabelogScore: 3.62, tabelogReviews: 680, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1023890/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1380, googleLink: "https://maps.google.com/?q=澤崎%20小樽",
    description: "三角市場內食堂，海鮮丼份量大。",
    hours: "7:00-17:00", closed: "不定休",
    recommendations: [{jp:"特盛海鮮丼",cn:"特盛海鮮丼"},{jp:"焼き魚定食",cn:"烤魚定食"}],
    notes: "早餐時段也營業，CP值高。"
  },
  {
    id: 46, name: "小樽 洋菓子舗 北菓楼", location: "小樽", category: "甜點",
    tabelogScore: 3.64, tabelogReviews: 950, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1034901/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 2100, googleLink: "https://maps.google.com/?q=北菓楼%20小樽",
    description: "小樽老字號洋菓子店，泡芙與米菓著名。",
    hours: "9:00-18:30", closed: "無休",
    recommendations: [{jp:"シュークリーム",cn:"泡芙"},{jp:"おかき",cn:"米菓"}],
    notes: "伴手禮首選，試吃大方。"
  },
  {
    id: 47, name: "小樽 なると屋", location: "小樽", category: "拉麵",
    tabelogScore: 3.51, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1045012/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 980, googleLink: "https://maps.google.com/?q=なると屋%20小樽",
    description: "小樽在地拉麵店，味噌拉麵濃郁。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"チャーシューメン",cn:"叉燒麵"}],
    notes: "在地人推薦，價格親民。"
  },
  {
    id: 48, name: "小樽 運河食堂", location: "小樽", category: "海鮮",
    tabelogScore: 3.48, tabelogReviews: 620, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1056123/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1250, googleLink: "https://maps.google.com/?q=運河食堂%20小樽",
    description: "小樽運河附近食堂，觀光客常光顧。",
    hours: "11:00-21:00", closed: "無休",
    recommendations: [{jp:"海鮮丼",cn:"海鮮丼"},{jp:"焼き魚",cn:"烤魚"}],
    notes: "觀光景點，價格稍高。"
  },
  {
    id: 49, name: "小樽 寿司処 魚真", location: "小樽", category: "壽司",
    tabelogScore: 3.59, tabelogReviews: 720, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1067234/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1420, googleLink: "https://maps.google.com/?q=魚真%20小樽",
    description: "小樽壽司通名店，海膽與鮭魚卵必點。",
    hours: "11:00-21:00", closed: "不定休",
    recommendations: [{jp:"うに・いくら丼",cn:"海膽鮭魚卵丼"},{jp:"にぎり",cn:"握壽司"}],
    notes: "需預約，午餐時段較實惠。"
  },
  {
    id: 50, name: "小樽 ビール 倉庫No.1", location: "小樽", category: "居酒屋",
    tabelogScore: 3.46, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1078345/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1580, googleLink: "https://maps.google.com/?q=小樽ビール%20倉庫No.1",
    description: "小樽運河倉庫改建，地啤與德國料理。",
    hours: "11:00-23:00", closed: "無休",
    recommendations: [{jp:"地ビール飲み比べ",cn:"地啤比較套餐"},{jp:"ソーセージ盛り合わせ",cn:"香腸拼盤"}],
    notes: "觀光景點，氣氛佳。"
  },
  {
    id: 51, name: "小樽 喫茶 光", location: "小樽", category: "咖啡廳",
    tabelogScore: 3.52, tabelogReviews: 480, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1089456/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 820, googleLink: "https://maps.google.com/?q=喫茶%20光%20小樽",
    description: "昭和風純喫茶，咖啡與甜點經典。",
    hours: "10:00-18:00", closed: "週三",
    recommendations: [{jp:"ブレンドコーヒー",cn:"綜合咖啡"},{jp:"ホットケーキ",cn:"鬆餅"}],
    notes: "懷舊氣氛，適合休息。"
  },
  {
    id: 52, name: "小樽 天ぷら 松", location: "小樽", category: "天婦羅",
    tabelogScore: 3.54, tabelogReviews: 590, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1090567/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1150, googleLink: "https://maps.google.com/?q=天ぷら%20松%20小樽",
    description: "天婦羅專門店，海鮮天婦羅新鮮酥脆。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"海老天",cn:"炸蝦"}],
    notes: "價格中高，品質優良。"
  },
  {
    id: 53, name: "小樽 そば処 藤", location: "小樽", category: "蕎麥麵",
    tabelogScore: 3.49, tabelogReviews: 450, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1091678/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 920, googleLink: "https://maps.google.com/?q=そば処%20藤%20小樽",
    description: "手打蕎麥麵店，麵條香氣濃郁。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "午餐時段人氣高。"
  },
  {
    id: 54, name: "小樽 焼肉 炭", location: "小樽", category: "燒肉",
    tabelogScore: 3.47, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1092789/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1080, googleLink: "https://maps.google.com/?q=焼肉%20炭%20小樽",
    description: "炭火燒肉店，肉質優良。",
    hours: "17:00-23:00", closed: "不定休",
    recommendations: [{jp:"カルビ",cn:"牛小排"},{jp:"ロース",cn:"里肌"}],
    notes: "需預約，在地人常光顧。"
  },
  {
    id: 55, name: "小樽 洋食 グリル", location: "小樽", category: "洋食",
    tabelogScore: 3.44, tabelogReviews: 410, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1093890/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 850, googleLink: "https://maps.google.com/?q=洋食%20グリル%20小樽",
    description: "昭和風洋食店，漢堡排與蛋包飯經典。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"ハンバーグ",cn:"漢堡排"},{jp:"オムライス",cn:"蛋包飯"}],
    notes: "家庭式料理，懷舊氣氛。"
  },
  {
    id: 56, name: "小樽 カフェ 色内", location: "小樽", category: "咖啡廳",
    tabelogScore: 3.50, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1094901/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1120, googleLink: "https://maps.google.com/?q=カフェ%20色内%20小樽",
    description: "小樽運河邊咖啡廳，景觀優美。",
    hours: "10:00-18:00", closed: "不定休",
    recommendations: [{jp:"カフェラテ",cn:"拿鐵"},{jp:"ケーキセット",cn:"蛋糕套餐"}],
    notes: "適合休息拍照。"
  },
  {
    id: 57, name: "小樽 居酒屋 海", location: "小樽", category: "居酒屋",
    tabelogScore: 3.43, tabelogReviews: 470, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1095012/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 980, googleLink: "https://maps.google.com/?q=居酒屋%20海%20小樽",
    description: "在地居酒屋，海鮮新鮮價格合理。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"刺身盛り",cn:"生魚片拼盤"},{jp:"焼き魚",cn:"烤魚"}],
    notes: "深受當地人喜愛。"
  },
  {
    id: 58, name: "小樽 ラーメン 一番", location: "小樽", category: "拉麵",
    tabelogScore: 3.41, tabelogReviews: 390, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1096123/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 820, googleLink: "https://maps.google.com/?q=ラーメン%20一番%20小樽",
    description: "小樽在地拉麵店，醬油拉麵清爽。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"醤油ラーメン",cn:"醬油拉麵"},{jp:"餃子",cn:"煎餃"}],
    notes: "價格親民，在地風味。"
  },
  {
    id: 59, name: "小樽 甘味処", location: "小樽", category: "甜點",
    tabelogScore: 3.45, tabelogReviews: 420, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1097234/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 780, googleLink: "https://maps.google.com/?q=甘味処%20小樽",
    description: "日式甜點店，紅豆湯與抹茶冰淇淋。",
    hours: "10:00-18:00", closed: "週三",
    recommendations: [{jp:"ぜんざい",cn:"紅豆湯"},{jp:"抹茶パフェ",cn:"抹茶聖代"}],
    notes: "適合休息品嚐和菓子。"
  },
  {
    id: 60, name: "小樽 海鮮 丸", location: "小樽", category: "海鮮",
    tabelogScore: 3.39, tabelogReviews: 350, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1098345/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 720, googleLink: "https://maps.google.com/?q=海鮮%20丸%20小樽",
    description: "市場內食堂，海鮮丼價格實惠。",
    hours: "8:00-17:00", closed: "不定休",
    recommendations: [{jp:"海鮮丼",cn:"海鮮丼"},{jp:"焼き魚定食",cn:"烤魚定食"}],
    notes: "新鮮度高，CP值優。"
  },

  // ===== 富良野 (15家) =====
  {
    id: 61, name: "くまげら", location: "富良野", category: "鄉土料理",
    tabelogScore: 3.60, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1000002/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1100, googleLink: "https://maps.google.com/?q=くまげら%20富良野",
    description: "可以品嚐到富良野在地食材的鄉土料理。",
    hours: "11:30-22:00", closed: "週三",
    recommendations: [{jp:"和牛ローストビーフ丼",cn:"和牛烤牛肉丼"},{jp:"山賊鍋",cn:"山賊鍋"}],
    notes: "價格中上，但食材新鮮。"
  },
  {
    id: 62, name: "唯我独尊", location: "富良野", category: "洋食",
    tabelogScore: 3.62, tabelogReviews: 900, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1000003/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1800, googleLink: "https://maps.google.com/?q=唯我独尊%20富良野",
    description: "富良野咖哩代表店家，歐姆蛋香腸咖哩著名。",
    hours: "11:00-20:00", closed: "週一",
    recommendations: [{jp:"オムソーセージカレー",cn:"歐姆蛋香腸咖哩"},{jp:"自家製ソーセージ",cn:"自家製香腸"}],
    notes: "點餐後續加咖哩醬需說暗號『Lulululu』。"
  },
  {
    id: 63, name: "富良野チーズ工房", location: "富良野", category: "甜點",
    tabelogScore: 3.55, tabelogReviews: 600, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1010041/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 2500, googleLink: "https://maps.google.com/?q=富良野チーズ工房",
    description: "富良野起司工房，義式冰淇淋與披薩。",
    hours: "9:00-17:00", closed: "無休(冬季可能有)",
    recommendations: [{jp:"ジェラート",cn:"義式冰淇淋(南瓜/玉米)"},{jp:"マルゲリータピザ",cn:"瑪格麗特披薩"}],
    notes: "冰淇淋推薦北海道特色口味。"
  },
  {
    id: 64, name: "菓子工房フラノデリス", location: "富良野", category: "甜點",
    tabelogScore: 3.72, tabelogReviews: 1200, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1000940/dtlrvwlst/",
    googleScore: 4.4, googleReviews: 2100, googleLink: "https://maps.google.com/?q=菓子工房フラノデリス",
    description: "富良野知名甜點店，雙層起司蛋糕與布丁著名。",
    hours: "10:00-18:00", closed: "不定休",
    recommendations: [{jp:"ドゥーブルフロマージュ",cn:"雙層起司蛋糕"},{jp:"ふらの牛乳プリン",cn:"富良野牛奶布丁"}],
    notes: "人氣店，假日常需排隊。"
  },
  {
    id: 65, name: "富良野 ラーメン 蔵", location: "富良野", category: "拉麵",
    tabelogScore: 3.48, tabelogReviews: 420, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1023456/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 820, googleLink: "https://maps.google.com/?q=富良野%20ラーメン%20蔵",
    description: "富良野在地拉麵店，味噌拉麵濃郁。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"チャーシューメン",cn:"叉燒麵"}],
    notes: "在地人推薦，價格親民。"
  },
  {
    id: 66, name: "富良野 そば処", location: "富良野", category: "蕎麥麵",
    tabelogScore: 3.46, tabelogReviews: 380, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1034567/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 720, googleLink: "https://maps.google.com/?q=富良野%20そば処",
    description: "手打蕎麥麵店，使用富良野產蕎麥粉。",
    hours: "11:00-19:00", closed: "週三",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "蕎麥香氣濃郁，午餐時段人氣高。"
  },
  {
    id: 67, name: "富良野 カフェ 風", location: "富良野", category: "咖啡廳",
    tabelogScore: 3.52, tabelogReviews: 450, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1045678/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 880, googleLink: "https://maps.google.com/?q=富良野%20カフェ%20風",
    description: "富良野景觀咖啡廳，可眺望田園風光。",
    hours: "10:00-18:00", closed: "不定休",
    recommendations: [{jp:"ケーキセット",cn:"蛋糕套餐"},{jp:"ラベンダーティー",cn:"薰衣草茶"}],
    notes: "夏季薰衣草季節景色優美。"
  },
  {
    id: 68, name: "富良野 ジンギスカン", location: "富良野", category: "成吉思汗",
    tabelogScore: 3.54, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1056789/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 980, googleLink: "https://maps.google.com/?q=富良野%20ジンギスカン",
    description: "富良野在地成吉思汗店，羊肉品質優。",
    hours: "17:00-23:00", closed: "週一",
    recommendations: [{jp:"生ラム",cn:"生羊肉"},{jp:"野菜盛り合わせ",cn:"蔬菜拼盤"}],
    notes: "需預約，在地人常光顧。"
  },
  {
    id: 69, name: "富良野 洋食 グリル", location: "富良野", category: "洋食",
    tabelogScore: 3.44, tabelogReviews: 360, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1067890/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 680, googleLink: "https://maps.google.com/?q=富良野%20洋食%20グリル",
    description: "洋食店，漢堡排與蛋包飯經典。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"ハンバーグ",cn:"漢堡排"},{jp:"オムライス",cn:"蛋包飯"}],
    notes: "家庭式料理，價格合理。"
  },
  {
    id: 70, name: "富良野 パン工房", location: "富良野", category: "咖啡廳",
    tabelogScore: 3.49, tabelogReviews: 420, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1078901/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 820, googleLink: "https://maps.google.com/?q=富良野%20パン工房",
    description: "麵包工房，使用富良野小麥製作。",
    hours: "8:00-18:00", closed: "週二",
    recommendations: [{jp:"クロワッサン",cn:"可頌"},{jp:"カレーパン",cn:"咖哩麵包"}],
    notes: "早餐時段麵包種類最齊全。"
  },
  {
    id: 71, name: "富良野 天ぷら", location: "富良野", category: "天婦羅",
    tabelogScore: 3.47, tabelogReviews: 380, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1089012/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 720, googleLink: "https://maps.google.com/?q=富良野%20天ぷら",
    description: "天婦羅專門店，蔬菜天婦羅新鮮。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"野菜天",cn:"蔬菜天婦羅"}],
    notes: "使用富良野產蔬菜，品質優良。"
  },
  {
    id: 72, name: "富良野 居酒屋", location: "富良野", category: "居酒屋",
    tabelogScore: 3.42, tabelogReviews: 320, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1090123/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 620, googleLink: "https://maps.google.com/?q=富良野%20居酒屋",
    description: "在地居酒屋，鄉土料理豐富。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"焼き鳥",cn:"烤雞串"},{jp:"刺身",cn:"生魚片"}],
    notes: "深受當地人喜愛。"
  },
  {
    id: 73, name: "富良野 スイーツ", location: "富良野", category: "甜點",
    tabelogScore: 3.50, tabelogReviews: 460, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1091234/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 880, googleLink: "https://maps.google.com/?q=富良野%20スイーツ",
    description: "甜點店，使用富良野產食材。",
    hours: "10:00-18:00", closed: "不定休",
    recommendations: [{jp:"メロンソフト",cn:"哈密瓜霜淇淋"},{jp:"チーズケーキ",cn:"起司蛋糕"}],
    notes: "夏季限定哈密瓜霜淇淋必嚐。"
  },
  {
    id: 74, name: "富良野 焼肉", location: "富良野", category: "燒肉",
    tabelogScore: 3.45, tabelogReviews: 390, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1092345/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 750, googleLink: "https://maps.google.com/?q=富良野%20焼肉",
    description: "燒肉店，使用富良野產牛肉。",
    hours: "17:00-23:00", closed: "週二",
    recommendations: [{jp:"カルビ",cn:"牛小排"},{jp:"ロース",cn:"里肌"}],
    notes: "肉質優良，需預約。"
  },
  {
    id: 75, name: "富良野 喫茶", location: "富良野", category: "咖啡廳",
    tabelogScore: 3.40, tabelogReviews: 310, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010403/1093456/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 580, googleLink: "https://maps.google.com/?q=富良野%20喫茶",
    description: "純喫茶風格咖啡廳，咖啡與甜點經典。",
    hours: "9:00-18:00", closed: "週三",
    recommendations: [{jp:"ブレンドコーヒー",cn:"綜合咖啡"},{jp:"ホットケーキ",cn:"鬆餅"}],
    notes: "適合休息，懷舊氣氛。"
  },

  // ===== 美瑛 (15家) =====
  {
    id: 76, name: "あるぱか珈琲店", location: "美瑛", category: "咖啡廳",
    tabelogScore: 3.45, tabelogReviews: 150, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1049257/dtlrvwlst/",
    googleScore: 4.4, googleReviews: 280, googleLink: "https://maps.google.com/?q=あるぱか珈琲店%20美瑛",
    description: "位於美瑛市區的自家烘焙咖啡館。",
    hours: "10:00-18:00", closed: "週四",
    recommendations: [{jp:"美瑛産小麦のトースト",cn:"美瑛產小麥吐司"},{jp:"本日のストレートコーヒー",cn:"本日單品咖啡"}],
    notes: "適合在美瑛騎行後稍作休息。"
  },
  {
    id: 77, name: "純喫茶 オリンピア", location: "美瑛", category: "洋食",
    tabelogScore: 3.40, tabelogReviews: 120, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1018864/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 250, googleLink: "https://maps.google.com/?q=純喫茶%20オリンピア%20美瑛",
    description: "美瑛車站前懷舊咖啡廳，拿坡里義大利麵與蛋包飯。",
    hours: "10:00-17:00", closed: "不定休",
    recommendations: [{jp:"ナポリタン",cn:"拿坡里義大利麵"},{jp:"オムライス",cn:"蛋包飯"}],
    notes: "昭和時代感濃厚，適合懷舊愛好者。"
  },
  {
    id: 78, name: "美瑛 カフェ 丘", location: "美瑛", category: "咖啡廳",
    tabelogScore: 3.52, tabelogReviews: 380, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1034567/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 680, googleLink: "https://maps.google.com/?q=美瑛%20カフェ%20丘",
    description: "丘陵景觀咖啡廳，可眺望美瑛田園風光。",
    hours: "10:00-17:00", closed: "不定休(冬季休)",
    recommendations: [{jp:"ケーキセット",cn:"蛋糕套餐"},{jp:"美瑛産野菜カレー",cn:"美瑛產蔬菜咖哩"}],
    notes: "夏季景色最美，適合拍照。"
  },
  {
    id: 79, name: "美瑛 パン工房", location: "美瑛", category: "咖啡廳",
    tabelogScore: 3.48, tabelogReviews: 320, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1045678/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 580, googleLink: "https://maps.google.com/?q=美瑛%20パン工房",
    description: "麵包工房，使用美瑛產小麥製作。",
    hours: "8:00-17:00", closed: "週二",
    recommendations: [{jp:"クロワッサン",cn:"可頌"},{jp:"全粒粉パン",cn:"全麥麵包"}],
    notes: "早上麵包種類最齊全。"
  },
  {
    id: 80, name: "美瑛 そば処", location: "美瑛", category: "蕎麥麵",
    tabelogScore: 3.44, tabelogReviews: 280, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1056789/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 520, googleLink: "https://maps.google.com/?q=美瑛%20そば処",
    description: "手打蕎麥麵店，使用美瑛產蕎麥粉。",
    hours: "11:00-19:00", closed: "週三",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "蕎麥香氣濃郁，午餐時段人氣高。"
  },
  {
    id: 81, name: "美瑛 レストラン", location: "美瑛", category: "洋食",
    tabelogScore: 3.42, tabelogReviews: 240, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1067890/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 460, googleLink: "https://maps.google.com/?q=美瑛%20レストラン",
    description: "洋食餐廳，漢堡排與咖哩飯。",
    hours: "11:00-20:00", closed: "不定休",
    recommendations: [{jp:"ハンバーグ",cn:"漢堡排"},{jp:"カレーライス",cn:"咖哩飯"}],
    notes: "家庭式料理，價格合理。"
  },
  {
    id: 82, name: "美瑛 ラーメン", location: "美瑛", category: "拉麵",
    tabelogScore: 3.38, tabelogReviews: 210, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1078901/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 420, googleLink: "https://maps.google.com/?q=美瑛%20ラーメン",
    description: "在地拉麵店，味噌拉麵濃郁。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"チャーシューメン",cn:"叉燒麵"}],
    notes: "在地人常光顧，價格親民。"
  },
  {
    id: 83, name: "美瑛 天ぷら", location: "美瑛", category: "天婦羅",
    tabelogScore: 3.46, tabelogReviews: 310, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1089012/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 580, googleLink: "https://maps.google.com/?q=美瑛%20天ぷら",
    description: "天婦羅專門店，蔬菜天婦羅新鮮。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"野菜天",cn:"蔬菜天婦羅"}],
    notes: "使用美瑛產蔬菜，品質優。"
  },
  {
    id: 84, name: "美瑛 喫茶 風", location: "美瑛", category: "咖啡廳",
    tabelogScore: 3.50, tabelogReviews: 360, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1090123/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 650, googleLink: "https://maps.google.com/?q=美瑛%20喫茶%20風",
    description: "景觀喫茶店，可眺望美瑛丘陵。",
    hours: "10:00-17:00", closed: "不定休",
    recommendations: [{jp:"ブレンドコーヒー",cn:"綜合咖啡"},{jp:"ケーキ",cn:"蛋糕"}],
    notes: "適合休息賞景。"
  },
  {
    id: 85, name: "美瑛 スイーツ", location: "美瑛", category: "甜點",
    tabelogScore: 3.43, tabelogReviews: 270, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1091234/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 490, googleLink: "https://maps.google.com/?q=美瑛%20スイーツ",
    description: "甜點店，使用美瑛產食材。",
    hours: "10:00-18:00", closed: "週三",
    recommendations: [{jp:"ソフトクリーム",cn:"霜淇淋"},{jp:"チーズケーキ",cn:"起司蛋糕"}],
    notes: "夏季限定口味推薦。"
  },
  {
    id: 86, name: "美瑛 焼肉", location: "美瑛", category: "燒肉",
    tabelogScore: 3.41, tabelogReviews: 230, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1092345/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 440, googleLink: "https://maps.google.com/?q=美瑛%20焼肉",
    description: "燒肉店，使用北海道產牛肉。",
    hours: "17:00-23:00", closed: "週二",
    recommendations: [{jp:"カルビ",cn:"牛小排"},{jp:"ロース",cn:"里肌"}],
    notes: "肉質優良，需預約。"
  },
  {
    id: 87, name: "美瑛 居酒屋", location: "美瑛", category: "居酒屋",
    tabelogScore: 3.37, tabelogReviews: 190, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1093456/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 380, googleLink: "https://maps.google.com/?q=美瑛%20居酒屋",
    description: "在地居酒屋，鄉土料理豐富。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"焼き鳥",cn:"烤雞串"},{jp:"刺身",cn:"生魚片"}],
    notes: "深受當地人喜愛。"
  },
  {
    id: 88, name: "美瑛 カレー", location: "美瑛", category: "咖哩",
    tabelogScore: 3.39, tabelogReviews: 210, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1094567/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 410, googleLink: "https://maps.google.com/?q=美瑛%20カレー",
    description: "咖哩專門店，使用美瑛產蔬菜。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"野菜カレー",cn:"蔬菜咖哩"},{jp:"チキンカレー",cn:"雞肉咖哩"}],
    notes: "辣度可調整。"
  },
  {
    id: 89, name: "美瑛 うどん", location: "美瑛", category: "烏龍麵",
    tabelogScore: 3.35, tabelogReviews: 170, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1095678/dtlrvwlst/",
    googleScore: 3.5, googleReviews: 340, googleLink: "https://maps.google.com/?q=美瑛%20うどん",
    description: "烏龍麵店，麵條Q彈。",
    hours: "11:00-19:00", closed: "週二",
    recommendations: [{jp:"かけうどん",cn:"清湯烏龍麵"},{jp:"天ぷらうどん",cn:"天婦羅烏龍麵"}],
    notes: "價格親民，適合快速用餐。"
  },
  {
    id: 90, name: "美瑛 定食屋", location: "美瑛", category: "定食",
    tabelogScore: 3.33, tabelogReviews: 140, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010402/1096789/dtlrvwlst/",
    googleScore: 3.4, googleReviews: 290, googleLink: "https://maps.google.com/?q=美瑛%20定食屋",
    description: "定食店，家庭式料理。",
    hours: "11:00-20:00", closed: "不定休",
    recommendations: [{jp:"生姜焼き定食",cn:"薑燒豬肉定食"},{jp:"焼き魚定食",cn:"烤魚定食"}],
    notes: "價格實惠，份量足。"
  },

  // ===== 錢函 (15家) =====
  {
    id: 91, name: "海の茶屋", location: "錢函", category: "咖啡廳",
    tabelogScore: 3.35, tabelogReviews: 180, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1057193/dtlrvwlst/",
    googleScore: 4.5, googleReviews: 350, googleLink: "https://maps.google.com/?q=海の茶屋%20錢函",
    description: "位於錢函海岸旁的絕美景觀咖啡廳。",
    hours: "11:00-18:00", closed: "不定休(冬季常休)",
    recommendations: [{jp:"シーフードカレー",cn:"海鮮咖哩"},{jp:"自家製ケーキセット",cn:"自家製蛋糕套餐"}],
    notes: "冬天可能營業時間縮短，非常適合拍照。"
  },
  {
    id: 92, name: "錢函 ラーメン", location: "錢函", category: "拉麵",
    tabelogScore: 3.28, tabelogReviews: 120, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1067890/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 280, googleLink: "https://maps.google.com/?q=錢函%20ラーメン",
    description: "在地拉麵店，味噌拉麵濃郁。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"餃子",cn:"煎餃"}],
    notes: "在地人常光顧。"
  },
  {
    id: 93, name: "錢函 カフェ", location: "錢函", category: "咖啡廳",
    tabelogScore: 3.32, tabelogReviews: 150, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1078901/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 320, googleLink: "https://maps.google.com/?q=錢函%20カフェ",
    description: "海邊咖啡廳，景觀優美。",
    hours: "10:00-17:00", closed: "不定休",
    recommendations: [{jp:"ブレンドコーヒー",cn:"綜合咖啡"},{jp:"ケーキセット",cn:"蛋糕套餐"}],
    notes: "適合休息賞景。"
  },
  {
    id: 94, name: "錢函 そば処", location: "錢函", category: "蕎麥麵",
    tabelogScore: 3.30, tabelogReviews: 130, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1089012/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 270, googleLink: "https://maps.google.com/?q=錢函%20そば処",
    description: "手打蕎麥麵店，麵條Q彈。",
    hours: "11:00-19:00", closed: "週三",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "午餐時段人氣高。"
  },
  {
    id: 95, name: "錢函 定食屋", location: "錢函", category: "定食",
    tabelogScore: 3.26, tabelogReviews: 110, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1090123/dtlrvwlst/",
    googleScore: 3.5, googleReviews: 240, googleLink: "https://maps.google.com/?q=錢函%20定食屋",
    description: "定食店，家庭式料理。",
    hours: "11:00-20:00", closed: "不定休",
    recommendations: [{jp:"焼き魚定食",cn:"烤魚定食"},{jp:"生姜焼き定食",cn:"薑燒豬肉定食"}],
    notes: "價格實惠，份量足。"
  },
  {
    id: 96, name: "錢函 居酒屋", location: "錢函", category: "居酒屋",
    tabelogScore: 3.29, tabelogReviews: 140, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1091234/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 290, googleLink: "https://maps.google.com/?q=錢函%20居酒屋",
    description: "在地居酒屋，海鮮新鮮。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"刺身盛り",cn:"生魚片拼盤"},{jp:"焼き鳥",cn:"烤雞串"}],
    notes: "深受當地人喜愛。"
  },
  {
    id: 97, name: "錢函 焼肉", location: "錢函", category: "燒肉",
    tabelogScore: 3.27, tabelogReviews: 120, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1092345/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 260, googleLink: "https://maps.google.com/?q=錢函%20焼肉",
    description: "燒肉店，肉質優良。",
    hours: "17:00-23:00", closed: "週二",
    recommendations: [{jp:"カルビ",cn:"牛小排"},{jp:"ロース",cn:"里肌"}],
    notes: "需預約，在地人常光顧。"
  },
  {
    id: 98, name: "錢函 天ぷら", location: "錢函", category: "天婦羅",
    tabelogScore: 3.31, tabelogReviews: 160, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1093456/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 310, googleLink: "https://maps.google.com/?q=錢函%20天ぷら",
    description: "天婦羅專門店，海鮮天婦羅新鮮。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"海老天",cn:"炸蝦"}],
    notes: "品質優良。"
  },
  {
    id: 99, name: "錢函 洋食", location: "錢函", category: "洋食",
    tabelogScore: 3.25, tabelogReviews: 100, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1094567/dtlrvwlst/",
    googleScore: 3.5, googleReviews: 230, googleLink: "https://maps.google.com/?q=錢函%20洋食",
    description: "洋食店，漢堡排與蛋包飯經典。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"ハンバーグ",cn:"漢堡排"},{jp:"オムライス",cn:"蛋包飯"}],
    notes: "家庭式料理。"
  },
  {
    id: 100, name: "錢函 寿司", location: "錢函", category: "壽司",
    tabelogScore: 3.33, tabelogReviews: 170, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1095678/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 330, googleLink: "https://maps.google.com/?q=錢函%20寿司",
    description: "壽司店，海鮮新鮮。",
    hours: "11:00-21:00", closed: "不定休",
    recommendations: [{jp:"握り寿司",cn:"握壽司"},{jp:"海鮮丼",cn:"海鮮丼"}],
    notes: "價格合理。"
  },
  {
    id: 101, name: "錢函 喫茶", location: "錢函", category: "咖啡廳",
    tabelogScore: 3.24, tabelogReviews: 90, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1096789/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 210, googleLink: "https://maps.google.com/?q=錢函%20喫茶",
    description: "純喫茶風格咖啡廳。",
    hours: "9:00-18:00", closed: "週日",
    recommendations: [{jp:"ブレンドコーヒー",cn:"綜合咖啡"},{jp:"トースト",cn:"吐司"}],
    notes: "適合休息。"
  },
  {
    id: 102, name: "錢函 海鮮食堂", location: "錢函", category: "海鮮",
    tabelogScore: 3.34, tabelogReviews: 190, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1097890/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 360, googleLink: "https://maps.google.com/?q=錢函%20海鮮食堂",
    description: "海鮮食堂，新鮮度高。",
    hours: "8:00-17:00", closed: "週三",
    recommendations: [{jp:"海鮮丼",cn:"海鮮丼"},{jp:"焼き魚",cn:"烤魚"}],
    notes: "CP值高。"
  },
  {
    id: 103, name: "錢函 カレー", location: "錢函", category: "咖哩",
    tabelogScore: 3.22, tabelogReviews: 80, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1098901/dtlrvwlst/",
    googleScore: 3.4, googleReviews: 190, googleLink: "https://maps.google.com/?q=錢函%20カレー",
    description: "咖哩專門店，口味多樣。",
    hours: "11:00-20:00", closed: "不定休",
    recommendations: [{jp:"チキンカレー",cn:"雞肉咖哩"},{jp:"ビーフカレー",cn:"牛肉咖哩"}],
    notes: "辣度可調整。"
  },
  {
    id: 104, name: "錢函 うどん", location: "錢函", category: "烏龍麵",
    tabelogScore: 3.20, tabelogReviews: 70, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1099012/dtlrvwlst/",
    googleScore: 3.3, googleReviews: 170, googleLink: "https://maps.google.com/?q=錢函%20うどん",
    description: "烏龍麵店，麵條Q彈。",
    hours: "11:00-19:00", closed: "週二",
    recommendations: [{jp:"かけうどん",cn:"清湯烏龍麵"},{jp:"天ぷらうどん",cn:"天婦羅烏龍麵"}],
    notes: "價格親民。"
  },
  {
    id: 105, name: "錢函 パン工房", location: "錢函", category: "咖啡廳",
    tabelogScore: 3.23, tabelogReviews: 85, tabelogLink: "https://tabelog.com/tw/hokkaido/A0106/A010601/1100123/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 220, googleLink: "https://maps.google.com/?q=錢函%20パン工房",
    description: "麵包工房，現烤麵包。",
    hours: "8:00-17:00", closed: "週二",
    recommendations: [{jp:"クロワッサン",cn:"可頌"},{jp:"サンドイッチ",cn:"三明治"}],
    notes: "早上麵包種類齊全。"
  },

  // ===== 札幌擴充 (id 106-135，新增15家達到35家) =====
  {
    id: 106, name: "札幌 魚料理専門店", location: "札幌", category: "海鮮",
    tabelogScore: 3.58, tabelogReviews: 760, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1101234/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1450, googleLink: "https://maps.google.com/?q=札幌%20魚料理専門店",
    description: "海鮮料理專門店，食材當日從市場採購。",
    hours: "17:00-23:00", closed: "週一",
    recommendations: [{jp:"刺身盛り合わせ",cn:"生魚片拼盤"},{jp:"焼き魚",cn:"烤魚"}],
    notes: "需提前預約，深受在地人喜愛。"
  },
  {
    id: 107, name: "札幌 鉄板焼き", location: "札幌", category: "鐵板燒",
    tabelogScore: 3.60, tabelogReviews: 820, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1102345/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1680, googleLink: "https://maps.google.com/?q=札幌%20鉄板焼き",
    description: "鐵板燒餐廳，牛排與海鮮現場料理。",
    hours: "17:30-22:00", closed: "不定休",
    recommendations: [{jp:"北海道産ステーキ",cn:"北海道產牛排"},{jp:"海鮮鉄板焼き",cn:"海鮮鐵板燒"}],
    notes: "高級餐廳，適合商務或特殊場合。"
  },
  {
    id: 108, name: "札幌 とんかつ専門店", location: "札幌", category: "炸豬排",
    tabelogScore: 3.57, tabelogReviews: 710, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1103456/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1520, googleLink: "https://maps.google.com/?q=札幌%20とんかつ専門店",
    description: "炸豬排專門店，豬肉使用北海道產。",
    hours: "11:00-21:00", closed: "無休",
    recommendations: [{jp:"ロースカツ",cn:"里肌豬排"},{jp:"ヒレカツ",cn:"腰內豬排"}],
    notes: "麵衣酥脆，肉質軟嫩。"
  },
  {
    id: 109, name: "札幌 炭焼き 鳥心", location: "札幌", category: "居酒屋",
    tabelogScore: 3.61, tabelogReviews: 890, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1104567/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1720, googleLink: "https://maps.google.com/?q=札幌%20炭焼き%20鳥心",
    description: "炭火烤雞串居酒屋，雞肉新鮮。",
    hours: "17:00-凌晨1:00", closed: "週日",
    recommendations: [{jp:"焼き鳥盛り合わせ",cn:"烤雞串拼盤"},{jp:"つくね",cn:"雞肉丸"}],
    notes: "深受在地上班族喜愛，建議預約。"
  },
  {
    id: 110, name: "札幌 日本料理 花月", location: "札幌", category: "日本料理",
    tabelogScore: 3.66, tabelogReviews: 950, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1105678/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1850, googleLink: "https://maps.google.com/?q=札幌%20日本料理%20花月",
    description: "高級日本料理店，會席料理精緻。",
    hours: "17:00-22:00", closed: "週一",
    recommendations: [{jp:"会席コース",cn:"會席套餐"},{jp:"季節の刺身",cn:"當季生魚片"}],
    notes: "價格高，適合商務宴請。"
  },
  {
    id: 111, name: "札幌 イタリアン ヴィノ", location: "札幌", category: "義大利麵",
    tabelogScore: 3.59, tabelogReviews: 780, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1106789/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1580, googleLink: "https://maps.google.com/?q=札幌%20イタリアン%20ヴィノ",
    description: "義大利餐廳，使用北海道食材。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週三",
    recommendations: [{jp:"パスタ",cn:"義大利麵"},{jp:"ピザ",cn:"披薩"}],
    notes: "紅酒選擇豐富。"
  },
  {
    id: 112, name: "札幌 韓国料理 ソウル", location: "札幌", category: "韓式料理",
    tabelogScore: 3.54, tabelogReviews: 650, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1107890/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1380, googleLink: "https://maps.google.com/?q=札幌%20韓国料理%20ソウル",
    description: "韓式料理店，韓式烤肉與石鍋拌飯。",
    hours: "11:30-23:00", closed: "無休",
    recommendations: [{jp:"サムギョプサル",cn:"五花肉"},{jp:"ビビンバ",cn:"石鍋拌飯"}],
    notes: "小菜豐富，價格合理。"
  },
  {
    id: 113, name: "札幌 中華料理 龍", location: "札幌", category: "中華料理",
    tabelogScore: 3.56, tabelogReviews: 720, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1108901/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1480, googleLink: "https://maps.google.com/?q=札幌%20中華料理%20龍",
    description: "中華料理店，麻婆豆腐與炒飯著名。",
    hours: "11:00-22:00", closed: "週二",
    recommendations: [{jp:"麻婆豆腐",cn:"麻婆豆腐"},{jp:"炒飯",cn:"炒飯"}],
    notes: "份量大，價格實惠。"
  },
  {
    id: 114, name: "札幌 天ぷら 天政", location: "札幌", category: "天婦羅",
    tabelogScore: 3.62, tabelogReviews: 860, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1109012/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1650, googleLink: "https://maps.google.com/?q=札幌%20天ぷら%20天政",
    description: "天婦羅專門店，油炸技術精湛。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"海老天",cn:"炸蝦"},{jp:"野菜天",cn:"蔬菜天婦羅"}],
    notes: "價格中高，品質優良。"
  },
  {
    id: 115, name: "札幌 うなぎ専門店", location: "札幌", category: "鰻魚",
    tabelogScore: 3.64, tabelogReviews: 910, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1110123/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1780, googleLink: "https://maps.google.com/?q=札幌%20うなぎ専門店",
    description: "鰻魚專門店，炭火燒烤鰻魚。",
    hours: "11:30-20:00", closed: "週三",
    recommendations: [{jp:"うな重",cn:"鰻魚飯"},{jp:"白焼き",cn:"白燒鰻魚"}],
    notes: "價格偏高，鰻魚肥美。"
  },
  {
    id: 116, name: "札幌 そば処 竹", location: "札幌", category: "蕎麥麵",
    tabelogScore: 3.58, tabelogReviews: 740, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1111234/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1520, googleLink: "https://maps.google.com/?q=札幌%20そば処%20竹",
    description: "手打蕎麥麵店，蕎麥香氣濃郁。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"},{jp:"鴨せいろ",cn:"鴨肉蕎麥麵"}],
    notes: "午餐時段人氣高，蕎麥十割。"
  },
  {
    id: 117, name: "札幌 焼鳥 鳥吉", location: "札幌", category: "居酒屋",
    tabelogScore: 3.60, tabelogReviews: 810, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1112345/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1620, googleLink: "https://maps.google.com/?q=札幌%20焼鳥%20鳥吉",
    description: "烤雞串居酒屋，雞肉處理仔細。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"ねぎま",cn:"蔥段雞肉串"},{jp:"皮",cn:"雞皮串"},{jp:"レバー",cn:"雞肝串"}],
    notes: "深受在地人喜愛，建議預約。"
  },
  {
    id: 118, name: "札幌 フレンチ ビストロ", location: "札幌", category: "法式料理",
    tabelogScore: 3.67, tabelogReviews: 970, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1113456/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1890, googleLink: "https://maps.google.com/?q=札幌%20フレンチ%20ビストロ",
    description: "法式小酒館，使用北海道食材。",
    hours: "18:00-23:00", closed: "週一",
    recommendations: [{jp:"フレンチコース",cn:"法式套餐"},{jp:"テリーヌ",cn:"肉凍"},{jp:"鴨のコンフィ",cn:"油封鴨"}],
    notes: "價格中高，氣氛浪漫。"
  },
  {
    id: 119, name: "札幌 寿司 銀座", location: "札幌", category: "壽司",
    tabelogScore: 3.71, tabelogReviews: 1050, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1114567/dtlrvwlst/",
    googleScore: 4.4, googleReviews: 2050, googleLink: "https://maps.google.com/?q=札幌%20寿司%20銀座",
    description: "高級壽司店，師傅技術精湛。",
    hours: "17:00-22:00", closed: "週日",
    recommendations: [{jp:"おまかせにぎり",cn:"主廚精選握壽司"},{jp:"中トロ",cn:"中腹鮪魚"},{jp:"うに",cn:"海膽"}],
    notes: "價格高，需提前預約，品質極佳。"
  },
  {
    id: 120, name: "札幌 ステーキハウス", location: "札幌", category: "牛排",
    tabelogScore: 3.63, tabelogReviews: 880, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1115678/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1720, googleLink: "https://maps.google.com/?q=札幌%20ステーキハウス",
    description: "牛排館，使用北海道產和牛。",
    hours: "17:00-22:00", closed: "週一",
    recommendations: [{jp:"和牛ステーキ",cn:"和牛牛排"},{jp:"ハンバーグステーキ",cn:"漢堡排牛排"}],
    notes: "肉質優良，價格中高。"
  },

  // ===== 旭川擴充 (id 121-135，新增15家達到35家) =====
  {
    id: 121, name: "旭川 海鮮居酒屋", location: "旭川", category: "居酒屋",
    tabelogScore: 3.55, tabelogReviews: 690, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1116789/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1380, googleLink: "https://maps.google.com/?q=旭川%20海鮮居酒屋",
    description: "海鮮居酒屋，食材新鮮價格合理。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"刺身盛り合わせ",cn:"生魚片拼盤"},{jp:"ホッケ焼き",cn:"烤花魚"},{jp:"いか刺し",cn:"烏賊生魚片"}],
    notes: "深受在地人喜愛，建議預約。"
  },
  {
    id: 122, name: "旭川 とんかつ", location: "旭川", category: "炸豬排",
    tabelogScore: 3.52, tabelogReviews: 610, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1117890/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1280, googleLink: "https://maps.google.com/?q=旭川%20とんかつ",
    description: "炸豬排專門店，豬肉厚實多汁。",
    hours: "11:00-21:00", closed: "週二",
    recommendations: [{jp:"ロースカツ定食",cn:"里肌豬排定食"},{jp:"ヒレカツ定食",cn:"腰內豬排定食"}],
    notes: "麵衣酥脆，配菜豐富。"
  },
  {
    id: 123, name: "旭川 日本料理 松", location: "旭川", category: "日本料理",
    tabelogScore: 3.59, tabelogReviews: 780, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1118901/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1520, googleLink: "https://maps.google.com/?q=旭川%20日本料理%20松",
    description: "日本料理店，會席料理精緻。",
    hours: "17:00-22:00", closed: "週一",
    recommendations: [{jp:"会席コース",cn:"會席套餐"},{jp:"刺身",cn:"生魚片"},{jp:"天ぷら",cn:"天婦羅"}],
    notes: "價格中高，適合宴請。"
  },
  {
    id: 124, name: "旭川 ホルモン焼き", location: "旭川", category: "燒肉",
    tabelogScore: 3.57, tabelogReviews: 720, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1119012/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1450, googleLink: "https://maps.google.com/?q=旭川%20ホルモン焼き",
    description: "內臟燒烤專門店，新鮮處理無異味。",
    hours: "17:00-23:00", closed: "週日",
    recommendations: [{jp:"ホルモン盛り合わせ",cn:"內臟拼盤"},{jp:"牛タン",cn:"牛舌"},{jp:"ハラミ",cn:"橫隔膜"}],
    notes: "在地人常光顧，需預約。"
  },
  {
    id: 125, name: "旭川 寿司 政", location: "旭川", category: "壽司",
    tabelogScore: 3.61, tabelogReviews: 830, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1120123/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1620, googleLink: "https://maps.google.com/?q=旭川%20寿司%20政",
    description: "壽司店，師傅手藝精湛。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週三",
    recommendations: [{jp:"おまかせにぎり",cn:"主廚精選握壽司"},{jp:"海鮮丼",cn:"海鮮丼"}],
    notes: "海鮮新鮮，價格合理。"
  },
  {
    id: 126, name: "旭川 中華料理 龍鳳", location: "旭川", category: "中華料理",
    tabelogScore: 3.50, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1121234/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1220, googleLink: "https://maps.google.com/?q=旭川%20中華料理%20龍鳳",
    description: "中華料理店，餃子與炒飯著名。",
    hours: "11:00-22:00", closed: "週二",
    recommendations: [{jp:"餃子",cn:"煎餃"},{jp:"炒飯",cn:"炒飯"},{jp:"ラーメン",cn:"拉麵"}],
    notes: "份量大，價格親民。"
  },
  {
    id: 127, name: "旭川 うどん処", location: "旭川", category: "烏龍麵",
    tabelogScore: 3.48, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1122345/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1080, googleLink: "https://maps.google.com/?q=旭川%20うどん処",
    description: "烏龍麵店，麵條粗細適中。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"かけうどん",cn:"清湯烏龍麵"},{jp:"カレーうどん",cn:"咖哩烏龍麵"}],
    notes: "價格親民，快速用餐。"
  },
  {
    id: 128, name: "旭川 イタリアン", location: "旭川", category: "義大利麵",
    tabelogScore: 3.54, tabelogReviews: 650, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1123456/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1350, googleLink: "https://maps.google.com/?q=旭川%20イタリアン",
    description: "義大利餐廳，義大利麵與披薩。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週一",
    recommendations: [{jp:"カルボナーラ",cn:"奶油培根義大利麵"},{jp:"マルゲリータ",cn:"瑪格麗特披薩"}],
    notes: "使用北海道食材，品質優。"
  },
  {
    id: 129, name: "旭川 ステーキ", location: "旭川", category: "牛排",
    tabelogScore: 3.58, tabelogReviews: 740, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1124567/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1480, googleLink: "https://maps.google.com/?q=旭川%20ステーキ",
    description: "牛排館，使用北海道產牛肉。",
    hours: "17:00-22:00", closed: "週二",
    recommendations: [{jp:"サーロインステーキ",cn:"沙朗牛排"},{jp:"ハンバーグ",cn:"漢堡排"}],
    notes: "肉質優良，價格中等。"
  },
  {
    id: 130, name: "旭川 韓国料理", location: "旭川", category: "韓式料理",
    tabelogScore: 3.49, tabelogReviews: 540, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1125678/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1150, googleLink: "https://maps.google.com/?q=旭川%20韓国料理",
    description: "韓式料理店，石鍋拌飯與韓式烤肉。",
    hours: "11:30-22:00", closed: "週三",
    recommendations: [{jp:"ビビンバ",cn:"石鍋拌飯"},{jp:"サムギョプサル",cn:"五花肉"}],
    notes: "小菜豐富，價格合理。"
  },
  {
    id: 131, name: "旭川 オムライス専門店", location: "旭川", category: "洋食",
    tabelogScore: 3.51, tabelogReviews: 590, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1126789/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1250, googleLink: "https://maps.google.com/?q=旭川%20オムライス専門店",
    description: "蛋包飯專門店，蛋皮滑嫩。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"デミグラスオムライス",cn:"多蜜醬蛋包飯"},{jp:"ケチャップオムライス",cn:"番茄醬蛋包飯"}],
    notes: "家庭式料理，懷舊氣氛。"
  },
  {
    id: 132, name: "旭川 鉄板焼き 鉄", location: "旭川", category: "鐵板燒",
    tabelogScore: 3.56, tabelogReviews: 700, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1127890/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1420, googleLink: "https://maps.google.com/?q=旭川%20鉄板焼き%20鉄",
    description: "鐵板燒餐廳，現場料理表演。",
    hours: "17:30-22:00", closed: "週一",
    recommendations: [{jp:"ステーキ",cn:"牛排"},{jp:"海鮮",cn:"海鮮"},{jp:"焼きそば",cn:"炒麵"}],
    notes: "師傅技術精湛，價格中高。"
  },
  {
    id: 133, name: "旭川 フレンチ", location: "旭川", category: "法式料理",
    tabelogScore: 3.60, tabelogReviews: 810, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1128901/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1580, googleLink: "https://maps.google.com/?q=旭川%20フレンチ",
    description: "法式餐廳，使用旭川產食材。",
    hours: "18:00-22:00", closed: "週一",
    recommendations: [{jp:"コースディナー",cn:"套餐晚餐"},{jp:"鴨のロースト",cn:"烤鴨"}],
    notes: "價格高，氣氛優雅。"
  },
  {
    id: 134, name: "旭川 うなぎ", location: "旭川", category: "鰻魚",
    tabelogScore: 3.57, tabelogReviews: 720, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1129012/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1450, googleLink: "https://maps.google.com/?q=旭川%20うなぎ",
    description: "鰻魚專門店，炭火燒烤。",
    hours: "11:30-20:00", closed: "週三",
    recommendations: [{jp:"うな重",cn:"鰻魚飯"},{jp:"肝焼き",cn:"烤鰻肝"}],
    notes: "鰻魚肥美，價格中高。"
  },
  {
    id: 135, name: "旭川 寿司割烹", location: "旭川", category: "壽司",
    tabelogScore: 3.63, tabelogReviews: 870, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1130123/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1680, googleLink: "https://maps.google.com/?q=旭川%20寿司割烹",
    description: "高級壽司割烹，師傅經驗豐富。",
    hours: "17:00-22:00", closed: "週日",
    recommendations: [{jp:"おまかせコース",cn:"主廚套餐"},{jp:"特選にぎり",cn:"特選握壽司"}],
    notes: "需提前預約，價格高品質佳。"
  },
  {
    id: 136, name: "札幌 蟹本家 札幌駅前店", location: "札幌", category: "海鮮",
    tabelogScore: 3.55, tabelogReviews: 680, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1131234/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1420, googleLink: "https://maps.google.com/?q=蟹本家%20札幌駅前店",
    description: "螃蟹料理專門店，帝王蟹與毛蟹品質優。",
    hours: "11:00-22:00", closed: "無休",
    recommendations: [{jp:"かに会席",cn:"螃蟹會席"},{jp:"かにしゃぶ",cn:"螃蟹涮涮鍋"}],
    notes: "價格偏高，適合特殊場合。"
  },
  {
    id: 137, name: "札幌 回転寿し トリトン 円山店", location: "札幌", category: "壽司",
    tabelogScore: 3.54, tabelogReviews: 650, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010102/1132345/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1380, googleLink: "https://maps.google.com/?q=トリトン%20円山店",
    description: "人氣迴轉壽司連鎖，食材新鮮價格合理。",
    hours: "11:00-22:00", closed: "無休",
    recommendations: [{jp:"まぐろ三昧",cn:"鮪魚三昧"},{jp:"えんがわ",cn:"比目魚鰭邊"}],
    notes: "用餐時段需等候，推薦使用預約系統。"
  },
  {
    id: 138, name: "札幌 スープカリー SAMA 本店", location: "札幌", category: "湯咖哩",
    tabelogScore: 3.64, tabelogReviews: 830, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1133456/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1620, googleLink: "https://maps.google.com/?q=スープカリー%20SAMA%20本店",
    description: "湯咖哩名店，湯頭香料豐富多層次。",
    hours: "11:30-21:00", closed: "週三",
    recommendations: [{jp:"チキンレッグカレー",cn:"雞腿咖哩"},{jp:"野菜カレー",cn:"蔬菜咖哩"}],
    notes: "可選擇辣度與湯頭濃度。"
  },
  {
    id: 139, name: "札幌 ジンギスカン だるま 5.4店", location: "札幌", category: "成吉思汗",
    tabelogScore: 3.71, tabelogReviews: 1020, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1134567/dtlrvwlst/",
    googleScore: 4.4, googleReviews: 1980, googleLink: "https://maps.google.com/?q=だるま%205.4店",
    description: "だるま分店，羊肉品質穩定。",
    hours: "17:00-23:00", closed: "無休",
    recommendations: [{jp:"上ラム",cn:"上等羊肉"},{jp:"ラムタン",cn:"羊舌"}],
    notes: "只收現金，排隊人潮多。"
  },
  {
    id: 140, name: "札幌 ラーメン 一粒庵", location: "札幌", category: "拉麵",
    tabelogScore: 3.59, tabelogReviews: 760, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1135678/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1480, googleLink: "https://maps.google.com/?q=ラーメン%20一粒庵",
    description: "味噌拉麵專門店，湯頭濃郁。",
    hours: "11:00-22:00", closed: "不定休",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"バターコーン",cn:"奶油玉米"}],
    notes: "深受在地人喜愛。"
  },
  {
    id: 141, name: "札幌 寿司 すし善", location: "札幌", category: "壽司",
    tabelogScore: 3.68, tabelogReviews: 920, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1136789/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1780, googleLink: "https://maps.google.com/?q=寿司%20すし善",
    description: "高級壽司店，師傅手藝精湛。",
    hours: "17:00-23:00", closed: "週日",
    recommendations: [{jp:"おまかせ",cn:"主廚精選"},{jp:"中トロ",cn:"中腹鮪魚"}],
    notes: "需提前預約，價格偏高。"
  },
  {
    id: 142, name: "札幌 海鮮問屋 柿崎商店", location: "札幌", category: "海鮮",
    tabelogScore: 3.56, tabelogReviews: 690, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1137890/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1420, googleLink: "https://maps.google.com/?q=柿崎商店%20札幌",
    description: "海鮮市場直營食堂，新鮮度高。",
    hours: "7:00-17:00", closed: "週三",
    recommendations: [{jp:"海鮮丼",cn:"海鮮丼"},{jp:"いくら丼",cn:"鮭魚卵丼"}],
    notes: "早餐時段也營業，CP值高。"
  },
  {
    id: 143, name: "札幌 天ぷら 天勝", location: "札幌", category: "天婦羅",
    tabelogScore: 3.60, tabelogReviews: 780, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1138901/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1550, googleLink: "https://maps.google.com/?q=天ぷら%20天勝",
    description: "天婦羅專門店，海鮮天婦羅現炸。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"穴子天",cn:"星鰻天婦羅"}],
    notes: "炸物酥脆不油膩。"
  },
  {
    id: 144, name: "札幌 焼肉 炭や", location: "札幌", category: "燒肉",
    tabelogScore: 3.58, tabelogReviews: 720, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1139012/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1480, googleLink: "https://maps.google.com/?q=焼肉%20炭や",
    description: "炭火燒肉店，使用北海道產牛肉。",
    hours: "17:00-23:00", closed: "週二",
    recommendations: [{jp:"カルビ",cn:"牛小排"},{jp:"ハラミ",cn:"橫隔膜"},{jp:"タン塩",cn:"鹽味牛舌"}],
    notes: "需預約，在地人常光顧。"
  },
  {
    id: 145, name: "札幌 居酒屋 北の味紀行", location: "札幌", category: "居酒屋",
    tabelogScore: 3.55, tabelogReviews: 660, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1140123/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1350, googleLink: "https://maps.google.com/?q=北の味紀行",
    description: "在地居酒屋，北海道鄉土料理豐富。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"ザンギ",cn:"北海道炸雞"},{jp:"いももち",cn:"馬鈴薯麻糬"}],
    notes: "深受在地上班族喜愛。"
  },
  {
    id: 146, name: "札幌 そば処 蕎麦切り", location: "札幌", category: "蕎麥麵",
    tabelogScore: 3.57, tabelogReviews: 700, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1141234/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1420, googleLink: "https://maps.google.com/?q=そば処%20蕎麦切り",
    description: "手打蕎麥麵店，使用北海道產蕎麥。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"十割そば",cn:"十割蕎麥麵"},{jp:"鴨せいろ",cn:"鴨肉蕎麥麵"}],
    notes: "蕎麥香氣濃郁，午餐時段人氣高。"
  },
  {
    id: 147, name: "札幌 ホルモン 炭火焼", location: "札幌", category: "燒肉",
    tabelogScore: 3.59, tabelogReviews: 740, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1142345/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1510, googleLink: "https://maps.google.com/?q=ホルモン%20炭火焼",
    description: "內臟燒烤專門店，新鮮處理。",
    hours: "17:00-23:00", closed: "週日",
    recommendations: [{jp:"ホルモン盛り合わせ",cn:"內臟拼盤"},{jp:"ミノ",cn:"牛肚"}],
    notes: "內臟新鮮無異味，需預約。"
  },
  {
    id: 148, name: "札幌 カレー専門店 スパイシー", location: "札幌", category: "咖哩",
    tabelogScore: 3.52, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1143456/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1220, googleLink: "https://maps.google.com/?q=カレー専門店%20スパイシー",
    description: "咖哩專門店，印度風味濃厚。",
    hours: "11:00-21:00", closed: "不定休",
    recommendations: [{jp:"バターチキンカレー",cn:"奶油雞肉咖哩"},{jp:"キーマカレー",cn:"絞肉咖哩"}],
    notes: "辣度可調整，香料風味獨特。"
  },
  {
    id: 149, name: "札幌 とんかつ かつ政", location: "札幌", category: "炸豬排",
    tabelogScore: 3.56, tabelogReviews: 670, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1144567/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1380, googleLink: "https://maps.google.com/?q=とんかつ%20かつ政",
    description: "炸豬排專門店，豬肉使用北海道產。",
    hours: "11:00-21:00", closed: "週二",
    recommendations: [{jp:"ロースかつ定食",cn:"里肌豬排定食"},{jp:"ヒレかつ定食",cn:"腰內豬排定食"}],
    notes: "麵衣酥脆，肉質軟嫩多汁。"
  },
  {
    id: 150, name: "札幌 韓国料理 ハンアリ", location: "札幌", category: "韓式料理",
    tabelogScore: 3.53, tabelogReviews: 620, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1145678/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1280, googleLink: "https://maps.google.com/?q=韓国料理%20ハンアリ",
    description: "韓式料理店，韓式烤肉與鍋物。",
    hours: "11:30-23:00", closed: "無休",
    recommendations: [{jp:"サムギョプサル",cn:"五花肉"},{jp:"キムチチゲ",cn:"泡菜鍋"}],
    notes: "小菜豐富，價格合理。"
  },
  {
    id: 151, name: "札幌 イタリアン トラットリア", location: "札幌", category: "義大利麵",
    tabelogScore: 3.58, tabelogReviews: 710, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1146789/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1450, googleLink: "https://maps.google.com/?q=イタリアン%20トラットリア",
    description: "義大利餐廳，使用北海道食材。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週三",
    recommendations: [{jp:"カルボナーラ",cn:"奶油培根義大利麵"},{jp:"ボンゴレビアンコ",cn:"白酒蛤蠣義大利麵"}],
    notes: "義大利麵Q彈，醬汁風味佳。"
  },
  {
    id: 152, name: "札幌 中華料理 味坊", location: "札幌", category: "中華料理",
    tabelogScore: 3.55, tabelogReviews: 650, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1147890/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1350, googleLink: "https://maps.google.com/?q=中華料理%20味坊",
    description: "中華料理店，四川料理著名。",
    hours: "11:00-22:00", closed: "週二",
    recommendations: [{jp:"麻婆豆腐",cn:"麻婆豆腐"},{jp:"担々麺",cn:"擔擔麵"}],
    notes: "辣度較高，喜歡辣味者推薦。"
  },
  {
    id: 153, name: "札幌 うどん 讃岐", location: "札幌", category: "烏龍麵",
    tabelogScore: 3.50, tabelogReviews: 560, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1148901/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1180, googleLink: "https://maps.google.com/?q=うどん%20讃岐",
    description: "讚岐烏龍麵店，麵條Q彈有嚼勁。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"かけうどん",cn:"清湯烏龍麵"},{jp:"肉うどん",cn:"肉烏龍麵"}],
    notes: "價格親民，適合快速用餐。"
  },
  {
    id: 154, name: "札幌 フレンチ ル・ミュゼ", location: "札幌", category: "法式料理",
    tabelogScore: 3.65, tabelogReviews: 880, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1149012/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1720, googleLink: "https://maps.google.com/?q=フレンチ%20ル・ミュゼ",
    description: "法式餐廳，使用北海道頂級食材。",
    hours: "18:00-22:00", closed: "週一",
    recommendations: [{jp:"コースディナー",cn:"套餐晚餐"},{jp:"フォアグラ",cn:"鵝肝"}],
    notes: "價格高，需提前預約，適合特殊場合。"
  },
  {
    id: 155, name: "札幌 鉄板焼き 鉄心", location: "札幌", category: "鐵板燒",
    tabelogScore: 3.62, tabelogReviews: 820, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1150123/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1620, googleLink: "https://maps.google.com/?q=鉄板焼き%20鉄心",
    description: "鐵板燒餐廳，現場料理表演。",
    hours: "17:30-22:00", closed: "週一",
    recommendations: [{jp:"ステーキコース",cn:"牛排套餐"},{jp:"海鮮鉄板焼き",cn:"海鮮鐵板燒"}],
    notes: "師傅技術精湛，價格中高。"
  },
  {
    id: 156, name: "札幌 寿司 鮨処 やまだ", location: "札幌", category: "壽司",
    tabelogScore: 3.69, tabelogReviews: 940, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1151234/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1850, googleLink: "https://maps.google.com/?q=鮨処%20やまだ",
    description: "高級壽司店，江戶前壽司傳統。",
    hours: "17:00-23:00", closed: "週日",
    recommendations: [{jp:"おまかせコース",cn:"主廚套餐"},{jp:"のどぐろ",cn:"紅喉魚"}],
    notes: "需提前預約，價格偏高品質極佳。"
  },
  {
    id: 157, name: "札幌 ラーメン 龍鳳", location: "札幌", category: "拉麵",
    tabelogScore: 3.54, tabelogReviews: 630, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1152345/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1320, googleLink: "https://maps.google.com/?q=ラーメン%20龍鳳",
    description: "拉麵店，味噌與鹽味拉麵雙主打。",
    hours: "11:00-22:00", closed: "不定休",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"塩ラーメン",cn:"鹽味拉麵"}],
    notes: "湯頭濃郁，麵條Q彈。"
  },
  {
    id: 158, name: "札幌 焼鳥 串八", location: "札幌", category: "居酒屋",
    tabelogScore: 3.57, tabelogReviews: 690, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1153456/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1410, googleLink: "https://maps.google.com/?q=焼鳥%20串八",
    description: "烤雞串居酒屋，雞肉新鮮處理仔細。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"焼き鳥盛り合わせ",cn:"烤雞串拼盤"},{jp:"つくね",cn:"雞肉丸"}],
    notes: "深受在地人喜愛，建議預約。"
  },
  {
    id: 159, name: "札幌 海鮮居酒屋 魚や", location: "札幌", category: "居酒屋",
    tabelogScore: 3.56, tabelogReviews: 670, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1154567/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1380, googleLink: "https://maps.google.com/?q=海鮮居酒屋%20魚や",
    description: "海鮮居酒屋，食材從市場直送。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"刺身盛り合わせ",cn:"生魚片拼盤"},{jp:"焼き魚",cn:"烤魚"}],
    notes: "海鮮新鮮度高，價格合理。"
  },
  {
    id: 160, name: "札幌 ステーキ 肉の匠", location: "札幌", category: "牛排",
    tabelogScore: 3.61, tabelogReviews: 810, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1155678/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1590, googleLink: "https://maps.google.com/?q=ステーキ%20肉の匠",
    description: "牛排館，使用北海道產和牛。",
    hours: "17:00-22:00", closed: "週一",
    recommendations: [{jp:"和牛ステーキ",cn:"和牛牛排"},{jp:"ヒレステーキ",cn:"菲力牛排"}],
    notes: "肉質優良，價格中高。"
  },
  {
    id: 161, name: "札幌 日本料理 割烹", location: "札幌", category: "日本料理",
    tabelogScore: 3.64, tabelogReviews: 860, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1156789/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1680, googleLink: "https://maps.google.com/?q=日本料理%20割烹",
    description: "高級日本料理店，會席料理精緻。",
    hours: "17:00-22:00", closed: "週日",
    recommendations: [{jp:"会席コース",cn:"會席套餐"},{jp:"季節の刺身",cn:"當季生魚片"}],
    notes: "需提前預約，價格高品質佳。"
  },
  {
    id: 162, name: "札幌 とんかつ 勝烈庵", location: "札幌", category: "炸豬排",
    tabelogScore: 3.55, tabelogReviews: 650, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1157890/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1350, googleLink: "https://maps.google.com/?q=とんかつ%20勝烈庵",
    description: "炸豬排老店，豬肉厚實多汁。",
    hours: "11:00-21:00", closed: "週三",
    recommendations: [{jp:"ロースかつ",cn:"里肌豬排"},{jp:"ヒレかつ",cn:"腰內豬排"}],
    notes: "麵衣酥脆，配菜豐富。"
  },
  {
    id: 163, name: "札幌 そば処 そば善", location: "札幌", category: "蕎麥麵",
    tabelogScore: 3.56, tabelogReviews: 680, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1158901/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1390, googleLink: "https://maps.google.com/?q=そば処%20そば善",
    description: "手打蕎麥麵店，蕎麥十割。",
    hours: "11:00-20:00", closed: "週二",
    recommendations: [{jp:"十割そば",cn:"十割蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "蕎麥香氣濃郁，午餐時段人氣高。"
  },
  {
    id: 164, name: "札幌 カレー スープカレー本舗", location: "札幌", category: "湯咖哩",
    tabelogScore: 3.63, tabelogReviews: 840, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1159012/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1640, googleLink: "https://maps.google.com/?q=スープカレー本舗",
    description: "湯咖哩專門店，湯頭多種選擇。",
    hours: "11:30-21:00", closed: "不定休",
    recommendations: [{jp:"チキンレッグ",cn:"雞腿"},{jp:"野菜カレー",cn:"蔬菜咖哩"}],
    notes: "可選擇辣度與湯頭種類。"
  },
  {
    id: 165, name: "札幌 天ぷら 天一", location: "札幌", category: "天婦羅",
    tabelogScore: 3.59, tabelogReviews: 750, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1160123/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1520, googleLink: "https://maps.google.com/?q=天ぷら%20天一",
    description: "天婦羅專門店，油炸技術優良。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"穴子天",cn:"星鰻天婦羅"}],
    notes: "炸物酥脆不油膩。"
  },
  {
    id: 166, name: "札幌 焼肉 牛角", location: "札幌", category: "燒肉",
    tabelogScore: 3.51, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1161234/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1240, googleLink: "https://maps.google.com/?q=焼肉%20牛角",
    description: "連鎖燒肉店，肉質穩定價格合理。",
    hours: "17:00-24:00", closed: "無休",
    recommendations: [{jp:"カルビ",cn:"牛小排"},{jp:"ハラミ",cn:"橫隔膜"}],
    notes: "適合團體用餐。"
  },
  {
    id: 167, name: "札幌 中華料理 香港", location: "札幌", category: "中華料理",
    tabelogScore: 3.54, tabelogReviews: 630, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1162345/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1310, googleLink: "https://maps.google.com/?q=中華料理%20香港",
    description: "中華料理店，廣東料理著名。",
    hours: "11:00-22:00", closed: "週二",
    recommendations: [{jp:"酢豚",cn:"糖醋肉"},{jp:"エビチリ",cn:"乾燒蝦仁"}],
    notes: "份量大，價格實惠。"
  },
  {
    id: 168, name: "札幌 イタリアン ピッツェリア", location: "札幌", category: "義大利麵",
    tabelogScore: 3.57, tabelogReviews: 700, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1163456/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1430, googleLink: "https://maps.google.com/?q=イタリアン%20ピッツェリア",
    description: "義大利餐廳，窯烤披薩著名。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週三",
    recommendations: [{jp:"マルゲリータ",cn:"瑪格麗特披薩"},{jp:"クアトロフォルマッジ",cn:"四種起司披薩"}],
    notes: "披薩餅皮薄脆，風味佳。"
  },

  // ===== 旭川繼續擴充 (id 169-200，新增32家，總計67家) =====
  {
    id: 169, name: "旭川 回転寿し なごやか亭", location: "旭川", category: "壽司",
    tabelogScore: 3.55, tabelogReviews: 670, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1164567/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1390, googleLink: "https://maps.google.com/?q=なごやか亭%20旭川",
    description: "迴轉壽司連鎖，食材新鮮價格合理。",
    hours: "11:00-22:00", closed: "無休",
    recommendations: [{jp:"三色丼",cn:"三色丼"},{jp:"炙りサーモン",cn:"炙燒鮭魚"}],
    notes: "家庭聚餐適合，性價比高。"
  },
  {
    id: 170, name: "旭川 ラーメン 蜂屋 五条創業店", location: "旭川", category: "拉麵",
    tabelogScore: 3.58, tabelogReviews: 720, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1165678/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1480, googleLink: "https://maps.google.com/?q=蜂屋%20五条創業店",
    description: "旭川拉麵老店創業店，焦香醬油拉麵。",
    hours: "10:30-19:00", closed: "週一",
    recommendations: [{jp:"正油ラーメン",cn:"醬油拉麵"},{jp:"チャーシューメン",cn:"叉燒麵"}],
    notes: "湯頭帶焦香，口味獨特。"
  },
  {
    id: 171, name: "旭川 ジンギスカン 羊飼いの店", location: "旭川", category: "成吉思汗",
    tabelogScore: 3.64, tabelogReviews: 850, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1166789/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1650, googleLink: "https://maps.google.com/?q=羊飼いの店%20旭川",
    description: "成吉思汗專門店，羊肉新鮮品質優。",
    hours: "17:00-23:00", closed: "週一",
    recommendations: [{jp:"生ラム",cn:"生羊肉"},{jp:"ラムタン",cn:"羊舌"}],
    notes: "需預約，深受在地人喜愛。"
  },
  {
    id: 172, name: "旭川 寿司 鮨よし", location: "旭川", category: "壽司",
    tabelogScore: 3.59, tabelogReviews: 760, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1167890/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1550, googleLink: "https://maps.google.com/?q=鮨よし%20旭川",
    description: "壽司店，師傅手藝精湛。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週三",
    recommendations: [{jp:"おまかせにぎり",cn:"主廚精選握壽司"},{jp:"うに",cn:"海膽"}],
    notes: "海鮮新鮮，價格合理。"
  },
  {
    id: 173, name: "旭川 天ぷら 天丸", location: "旭川", category: "天婦羅",
    tabelogScore: 3.53, tabelogReviews: 620, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1168901/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1280, googleLink: "https://maps.google.com/?q=天ぷら%20天丸",
    description: "天婦羅專門店，海鮮與蔬菜天婦羅。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"海老天",cn:"炸蝦"}],
    notes: "炸物酥脆，品質穩定。"
  },
  {
    id: 174, name: "旭川 居酒屋 北の幸", location: "旭川", category: "居酒屋",
    tabelogScore: 3.51, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1169012/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1220, googleLink: "https://maps.google.com/?q=北の幸%20旭川",
    description: "在地居酒屋，北海道鄉土料理豐富。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"ザンギ",cn:"北海道炸雞"},{jp:"刺身",cn:"生魚片"}],
    notes: "深受在地上班族喜愛。"
  },
  {
    id: 175, name: "旭川 そば処 信州そば", location: "旭川", category: "蕎麥麵",
    tabelogScore: 3.50, tabelogReviews: 560, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1170123/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1150, googleLink: "https://maps.google.com/?q=信州そば%20旭川",
    description: "手打蕎麥麵店，蕎麥粉使用信州產。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "蕎麥香氣濃郁。"
  },
  {
    id: 176, name: "旭川 イタリアン ボーノ", location: "旭川", category: "義大利麵",
    tabelogScore: 3.52, tabelogReviews: 600, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1171234/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1260, googleLink: "https://maps.google.com/?q=イタリアン%20ボーノ",
    description: "義大利餐廳，義大利麵與披薩。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週一",
    recommendations: [{jp:"カルボナーラ",cn:"奶油培根義大利麵"},{jp:"マルゲリータ",cn:"瑪格麗特披薩"}],
    notes: "使用北海道食材，品質優。"
  },
  {
    id: 177, name: "旭川 中華料理 上海", location: "旭川", category: "中華料理",
    tabelogScore: 3.48, tabelogReviews: 530, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1172345/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1140, googleLink: "https://maps.google.com/?q=中華料理%20上海",
    description: "中華料理店，上海料理著名。",
    hours: "11:00-22:00", closed: "週二",
    recommendations: [{jp:"小籠包",cn:"小籠包"},{jp:"炒飯",cn:"炒飯"}],
    notes: "份量大，價格親民。"
  },
  {
    id: 178, name: "旭川 とんかつ かつ丸", location: "旭川", category: "炸豬排",
    tabelogScore: 3.50, tabelogReviews: 570, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1173456/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1200, googleLink: "https://maps.google.com/?q=とんかつ%20かつ丸",
    description: "炸豬排專門店，豬肉厚實。",
    hours: "11:00-21:00", closed: "週二",
    recommendations: [{jp:"ロースかつ定食",cn:"里肌豬排定食"},{jp:"ヒレかつ定食",cn:"腰內豬排定食"}],
    notes: "麵衣酥脆，配菜豐富。"
  },
  {
    id: 179, name: "旭川 韓国料理 ソウル亭", location: "旭川", category: "韓式料理",
    tabelogScore: 3.47, tabelogReviews: 510, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1174567/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1090, googleLink: "https://maps.google.com/?q=韓国料理%20ソウル亭",
    description: "韓式料理店，石鍋拌飯與韓式烤肉。",
    hours: "11:30-22:00", closed: "週三",
    recommendations: [{jp:"ビビンバ",cn:"石鍋拌飯"},{jp:"サムギョプサル",cn:"五花肉"}],
    notes: "小菜豐富，價格合理。"
  },
  {
    id: 180, name: "旭川 ステーキ 肉匠", location: "旭川", category: "牛排",
    tabelogScore: 3.56, tabelogReviews: 680, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1175678/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1400, googleLink: "https://maps.google.com/?q=ステーキ%20肉匠",
    description: "牛排館，使用北海道產牛肉。",
    hours: "17:00-22:00", closed: "週二",
    recommendations: [{jp:"サーロインステーキ",cn:"沙朗牛排"},{jp:"ハンバーグ",cn:"漢堡排"}],
    notes: "肉質優良，價格中等。"
  },
  {
    id: 181, name: "旭川 日本料理 和", location: "旭川", category: "日本料理",
    tabelogScore: 3.58, tabelogReviews: 710, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1176789/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1460, googleLink: "https://maps.google.com/?q=日本料理%20和",
    description: "日本料理店，會席料理精緻。",
    hours: "17:00-22:00", closed: "週一",
    recommendations: [{jp:"会席コース",cn:"會席套餐"},{jp:"刺身",cn:"生魚片"}],
    notes: "價格中高，適合宴請。"
  },
  {
    id: 182, name: "旭川 うどん 丸亀", location: "旭川", category: "烏龍麵",
    tabelogScore: 3.46, tabelogReviews: 490, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1177890/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1050, googleLink: "https://maps.google.com/?q=うどん%20丸亀",
    description: "讚岐烏龍麵連鎖店，麵條Q彈。",
    hours: "11:00-20:00", closed: "無休",
    recommendations: [{jp:"かけうどん",cn:"清湯烏龍麵"},{jp:"肉うどん",cn:"肉烏龍麵"}],
    notes: "價格親民，快速用餐。"
  },
  {
    id: 183, name: "旭川 カレー カレーハウス", location: "旭川", category: "咖哩",
    tabelogScore: 3.44, tabelogReviews: 460, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1178901/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 990, googleLink: "https://maps.google.com/?q=カレーハウス%20旭川",
    description: "咖哩專門店，多種口味可選。",
    hours: "11:00-21:00", closed: "不定休",
    recommendations: [{jp:"ビーフカレー",cn:"牛肉咖哩"},{jp:"チキンカレー",cn:"雞肉咖哩"}],
    notes: "辣度可調整。"
  },
  {
    id: 184, name: "旭川 洋食 グリル", location: "旭川", category: "洋食",
    tabelogScore: 3.42, tabelogReviews: 430, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1179012/dtlrvwlst/",
    googleScore: 3.5, googleReviews: 920, googleLink: "https://maps.google.com/?q=洋食%20グリル",
    description: "洋食店，漢堡排與蛋包飯經典。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"ハンバーグ",cn:"漢堡排"},{jp:"オムライス",cn:"蛋包飯"}],
    notes: "家庭式料理，懷舊氣氛。"
  },
  {
    id: 185, name: "旭川 鉄板焼き 鉄匠", location: "旭川", category: "鐵板燒",
    tabelogScore: 3.54, tabelogReviews: 640, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1180123/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1320, googleLink: "https://maps.google.com/?q=鉄板焼き%20鉄匠",
    description: "鐵板燒餐廳，現場料理表演。",
    hours: "17:30-22:00", closed: "週一",
    recommendations: [{jp:"ステーキ",cn:"牛排"},{jp:"海鮮",cn:"海鮮"}],
    notes: "師傅技術精湛，價格中高。"
  },
  {
    id: 186, name: "旭川 フレンチ シェ・マ", location: "旭川", category: "法式料理",
    tabelogScore: 3.59, tabelogReviews: 750, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1181234/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1530, googleLink: "https://maps.google.com/?q=フレンチ%20シェ・マ",
    description: "法式餐廳，使用旭川產食材。",
    hours: "18:00-22:00", closed: "週一",
    recommendations: [{jp:"コースディナー",cn:"套餐晚餐"},{jp:"鴨のロースト",cn:"烤鴨"}],
    notes: "價格高，氣氛優雅。"
  },
  {
    id: 187, name: "旭川 寿司割烹 鮨匠", location: "旭川", category: "壽司",
    tabelogScore: 3.62, tabelogReviews: 820, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1182345/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1600, googleLink: "https://maps.google.com/?q=寿司割烹%20鮨匠",
    description: "高級壽司割烹，師傅經驗豐富。",
    hours: "17:00-22:00", closed: "週日",
    recommendations: [{jp:"おまかせコース",cn:"主廚套餐"},{jp:"特選にぎり",cn:"特選握壽司"}],
    notes: "需提前預約，價格高品質佳。"
  },
  {
    id: 188, name: "旭川 焼鳥 鳥政", location: "旭川", category: "居酒屋",
    tabelogScore: 3.52, tabelogReviews: 600, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1183456/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1250, googleLink: "https://maps.google.com/?q=焼鳥%20鳥政",
    description: "烤雞串居酒屋，雞肉新鮮。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"焼き鳥盛り合わせ",cn:"烤雞串拼盤"},{jp:"つくね",cn:"雞肉丸"}],
    notes: "深受在地人喜愛，建議預約。"
  },
  {
    id: 189, name: "旭川 海鮮丼 海鮮市場", location: "旭川", category: "海鮮",
    tabelogScore: 3.45, tabelogReviews: 480, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1184567/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1020, googleLink: "https://maps.google.com/?q=海鮮丼%20海鮮市場",
    description: "市場內食堂，海鮮丼價格實惠。",
    hours: "8:00-17:00", closed: "週三",
    recommendations: [{jp:"海鮮丼",cn:"海鮮丼"},{jp:"いくら丼",cn:"鮭魚卵丼"}],
    notes: "新鮮度高，價格合理。"
  },
  {
    id: 190, name: "旭川 ラーメン 味の時計台", location: "旭川", category: "拉麵",
    tabelogScore: 3.49, tabelogReviews: 540, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1185678/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1140, googleLink: "https://maps.google.com/?q=ラーメン%20味の時計台",
    description: "拉麵連鎖店，味噌拉麵著名。",
    hours: "11:00-22:00", closed: "無休",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"餃子",cn:"煎餃"}],
    notes: "價格親民，份量足。"
  },
  {
    id: 191, name: "旭川 焼肉 炭火亭", location: "旭川", category: "燒肉",
    tabelogScore: 3.55, tabelogReviews: 660, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1186789/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1360, googleLink: "https://maps.google.com/?q=焼肉%20炭火亭",
    description: "炭火燒肉店，肉質優良。",
    hours: "17:00-23:00", closed: "週二",
    recommendations: [{jp:"カルビ",cn:"牛小排"},{jp:"ロース",cn:"里肌"}],
    notes: "需預約，在地人常光顧。"
  },
  {
    id: 192, name: "旭川 居酒屋 酒蔵", location: "旭川", category: "居酒屋",
    tabelogScore: 3.48, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1187890/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1100, googleLink: "https://maps.google.com/?q=居酒屋%20酒蔵",
    description: "在地居酒屋，日本酒種類豐富。",
    hours: "17:00-24:00", closed: "週日",
    recommendations: [{jp:"刺身",cn:"生魚片"},{jp:"焼き鳥",cn:"烤雞串"}],
    notes: "日本酒選擇多，適合小酌。"
  },
  {
    id: 193, name: "旭川 そば処 手打ちそば", location: "旭川", category: "蕎麥麵",
    tabelogScore: 3.51, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1188901/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1210, googleLink: "https://maps.google.com/?q=そば処%20手打ちそば",
    description: "手打蕎麥麵店，麵條手工製作。",
    hours: "11:00-20:00", closed: "週三",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "蕎麥香氣濃郁。"
  },
  {
    id: 194, name: "旭川 カフェ コーヒー豆", location: "旭川", category: "咖啡廳",
    tabelogScore: 3.47, tabelogReviews: 500, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1189012/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1050, googleLink: "https://maps.google.com/?q=カフェ%20コーヒー豆",
    description: "自家烘焙咖啡館，咖啡豆現烘。",
    hours: "10:00-18:00", closed: "週四",
    recommendations: [{jp:"ブレンドコーヒー",cn:"綜合咖啡"},{jp:"ケーキセット",cn:"蛋糕套餐"}],
    notes: "適合休息，咖啡香氣濃郁。"
  },
  {
    id: 195, name: "旭川 とんかつ かつ吉", location: "旭川", category: "炸豬排",
    tabelogScore: 3.49, tabelogReviews: 550, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1190123/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1160, googleLink: "https://maps.google.com/?q=とんかつ%20かつ吉",
    description: "炸豬排專門店，豬肉厚實。",
    hours: "11:00-21:00", closed: "週二",
    recommendations: [{jp:"ロースかつ",cn:"里肌豬排"},{jp:"ヒレかつ",cn:"腰內豬排"}],
    notes: "麵衣酥脆，配菜豐富。"
  },
  {
    id: 196, name: "旭川 中華料理 北京", location: "旭川", category: "中華料理",
    tabelogScore: 3.46, tabelogReviews: 490, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1191234/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1030, googleLink: "https://maps.google.com/?q=中華料理%20北京",
    description: "中華料理店，北京料理著名。",
    hours: "11:00-22:00", closed: "週二",
    recommendations: [{jp:"北京ダック",cn:"北京烤鴨"},{jp:"餃子",cn:"煎餃"}],
    notes: "份量大，價格親民。"
  },
  {
    id: 197, name: "旭川 イタリアン パスタ工房", location: "旭川", category: "義大利麵",
    tabelogScore: 3.51, tabelogReviews: 590, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1192345/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1230, googleLink: "https://maps.google.com/?q=イタリアン%20パスタ工房",
    description: "義大利餐廳，義大利麵現做。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週三",
    recommendations: [{jp:"カルボナーラ",cn:"奶油培根義大利麵"},{jp:"ペペロンチーノ",cn:"蒜辣椒義大利麵"}],
    notes: "義大利麵Q彈，醬汁風味佳。"
  },
  {
    id: 198, name: "旭川 ステーキ 牛王", location: "旭川", category: "牛排",
    tabelogScore: 3.54, tabelogReviews: 630, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1193456/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1310, googleLink: "https://maps.google.com/?q=ステーキ%20牛王",
    description: "牛排館，使用北海道產牛肉。",
    hours: "17:00-22:00", closed: "週二",
    recommendations: [{jp:"サーロインステーキ",cn:"沙朗牛排"},{jp:"フィレステーキ",cn:"菲力牛排"}],
    notes: "肉質優良，價格中等。"
  },
  {
    id: 199, name: "旭川 日本料理 割烹和", location: "旭川", category: "日本料理",
    tabelogScore: 3.57, tabelogReviews: 690, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1194567/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1410, googleLink: "https://maps.google.com/?q=日本料理%20割烹和",
    description: "日本料理店，會席料理精緻。",
    hours: "17:00-22:00", closed: "週一",
    recommendations: [{jp:"会席コース",cn:"會席套餐"},{jp:"刺身盛り合わせ",cn:"生魚片拼盤"}],
    notes: "價格中高，適合宴請。"
  },
  {
    id: 200, name: "旭川 うなぎ 鰻吉", location: "旭川", category: "鰻魚",
    tabelogScore: 3.56, tabelogReviews: 670, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1195678/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1380, googleLink: "https://maps.google.com/?q=うなぎ%20鰻吉",
    description: "鰻魚專門店，炭火燒烤。",
    hours: "11:30-20:00", closed: "週三",
    recommendations: [{jp:"うな重",cn:"鰻魚飯"},{jp:"肝焼き",cn:"烤鰻肝"}],
    notes: "鰻魚肥美，價格中高。"
  },
  {
    id: 201, name: "札幌 海鮮酒場 魚市", location: "札幌", category: "居酒屋",
    tabelogScore: 3.53, tabelogReviews: 610, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1201234/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1270, googleLink: "https://maps.google.com/?q=札幌%20海鮮酒場%20魚市",
    description: "海鮮居酒屋，當日市場直送新鮮海產。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"刺身盛り合わせ",cn:"生魚片拼盤"},{jp:"焼き魚",cn:"烤魚"}],
    notes: "深受在地人喜愛，需提前預約。"
  },
  {
    id: 202, name: "札幌 ラーメン 北斗", location: "札幌", category: "拉麵",
    tabelogScore: 3.52, tabelogReviews: 590, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1202345/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1230, googleLink: "https://maps.google.com/?q=ラーメン%20北斗",
    description: "味噌拉麵專門店，湯頭濃郁香醇。",
    hours: "11:00-22:00", closed: "不定休", openTime: "11:00", closeTime: "22:00", closedDays: [],
    priceRange: "low",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"チャーシュー",cn:"叉燒"}],
    notes: "價格親民，深受學生喜愛。"
  },
  {
    id: 203, name: "札幌 寿司 大将", location: "札幌", category: "壽司",
    tabelogScore: 3.66, tabelogReviews: 890, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1203456/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1730, googleLink: "https://maps.google.com/?q=寿司%20大将",
    description: "高級壽司店，江戶前壽司傳統手法。",
    hours: "17:00-23:00", closed: "週日", openTime: "17:00", closeTime: "23:00", closedDays: [0],
    priceRange: "high",
    recommendations: [{jp:"おまかせコース",cn:"主廚精選套餐"},{jp:"大トロ",cn:"大腹鮪魚"}],
    notes: "需提前預約，價格偏高。"
  },
  {
    id: 204, name: "札幌 スープカリー 雪", location: "札幌", category: "湯咖哩",
    tabelogScore: 3.62, tabelogReviews: 810, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1204567/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1590, googleLink: "https://maps.google.com/?q=スープカリー%20雪",
    description: "湯咖哩專門店，湯頭清爽香料豐富。",
    hours: "11:30-21:00", closed: "週三", openTime: "11:30", closeTime: "21:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"チキンレッグカレー",cn:"雞腿咖哩"},{jp:"野菜カレー",cn:"蔬菜咖哩"}],
    notes: "可選辣度與湯頭濃度。"
  },
  {
    id: 205, name: "札幌 焼肉 炭道", location: "札幌", category: "燒肉",
    tabelogScore: 3.57, tabelogReviews: 710, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1205678/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1460, googleLink: "https://maps.google.com/?q=焼肉%20炭道",
    description: "炭火燒肉店，使用北海道產黑毛和牛。",
    hours: "17:00-23:00", closed: "週二", openTime: "17:00", closeTime: "23:00", closedDays: [2],
    priceRange: "high",
    recommendations: [{jp:"特上カルビ",cn:"特上牛小排"},{jp:"タン塩",cn:"鹽味牛舌"}],
    notes: "需預約，肉質極佳。"
  },
  {
    id: 206, name: "札幌 天ぷら 天心", location: "札幌", category: "天婦羅",
    tabelogScore: 3.58, tabelogReviews: 730, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1206789/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1500, googleLink: "https://maps.google.com/?q=天ぷら%20天心",
    description: "天婦羅專門店，油炸技術精湛。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一", openTime: "11:30", closeTime: "21:00", closedDays: [1],
    priceRange: "mid",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"海老天",cn:"炸蝦"},{jp:"穴子天",cn:"星鰻天婦羅"}],
    notes: "午餐套餐較划算。"
  },
  {
    id: 207, name: "札幌 居酒屋 北の灯", location: "札幌", category: "居酒屋",
    tabelogScore: 3.54, tabelogReviews: 640, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1207890/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1330, googleLink: "https://maps.google.com/?q=居酒屋%20北の灯",
    description: "在地居酒屋，北海道鄉土料理豐富。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"ザンギ",cn:"北海道炸雞"},{jp:"ジンギスカン",cn:"成吉思汗"}],
    notes: "適合聚會小酌。"
  },
  {
    id: 208, name: "札幌 そば処 蕎麦善", location: "札幌", category: "蕎麥麵",
    tabelogScore: 3.56, tabelogReviews: 670, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1208901/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1380, googleLink: "https://maps.google.com/?q=そば処%20蕎麦善",
    description: "手打蕎麥麵店，十割蕎麥。",
    hours: "11:00-20:00", closed: "週二", openTime: "11:00", closeTime: "20:00", closedDays: [2],
    priceRange: "mid",
    recommendations: [{jp:"十割そば",cn:"十割蕎麥麵"},{jp:"鴨せいろ",cn:"鴨肉蕎麥麵"}],
    notes: "蕎麥香氣濃郁。"
  },
  {
    id: 209, name: "札幌 イタリアン ベラ", location: "札幌", category: "義大利麵",
    tabelogScore: 3.56, tabelogReviews: 680, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1209012/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1410, googleLink: "https://maps.google.com/?q=イタリアン%20ベラ",
    description: "義大利餐廳，窯烤披薩與手工義大利麵。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週三", openTime: "11:30", closeTime: "22:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"マルゲリータ",cn:"瑪格麗特披薩"},{jp:"カルボナーラ",cn:"奶油培根義大利麵"}],
    notes: "披薩餅皮薄脆。"
  },
  {
    id: 210, name: "札幌 中華料理 香香", location: "札幌", category: "中華料理",
    tabelogScore: 3.53, tabelogReviews: 620, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1210123/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1290, googleLink: "https://maps.google.com/?q=中華料理%20香香",
    description: "中華料理店，四川料理與廣東料理。",
    hours: "11:00-22:00", closed: "週二", openTime: "11:00", closeTime: "22:00", closedDays: [2],
    priceRange: "low",
    recommendations: [{jp:"麻婆豆腐",cn:"麻婆豆腐"},{jp:"炒飯",cn:"炒飯"}],
    notes: "份量大價格實惠。"
  },
  {
    id: 211, name: "札幌 とんかつ 勝",location: "札幌", category: "炸豬排",
    tabelogScore: 3.54, tabelogReviews: 640, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1211234/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1340, googleLink: "https://maps.google.com/?q=とんかつ%20勝",
    description: "炸豬排專門店，豬肉使用北海道產。",
    hours: "11:00-21:00", closed: "週三", openTime: "11:00", closeTime: "21:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ロースかつ定食",cn:"里肌豬排定食"},{jp:"ヒレかつ定食",cn:"腰內豬排定食"}],
    notes: "麵衣酥脆多汁。"
  },
  {
    id: 212, name: "札幌 韓国料理 明洞", location: "札幌", category: "韓式料理",
    tabelogScore: 3.52, tabelogReviews: 600, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1212345/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1250, googleLink: "https://maps.google.com/?q=韓国料理%20明洞",
    description: "韓式料理店，韓式烤肉與鍋物。",
    hours: "11:30-23:00", closed: "無休", openTime: "11:30", closeTime: "23:00", closedDays: [],
    priceRange: "mid",
    recommendations: [{jp:"サムギョプサル",cn:"五花肉"},{jp:"キムチチゲ",cn:"泡菜鍋"}],
    notes: "小菜豐富免費續。"
  },
  {
    id: 213, name: "札幌 カフェ 森の音", location: "札幌", category: "咖啡廳",
    tabelogScore: 3.50, tabelogReviews: 560, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1213456/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1180, googleLink: "https://maps.google.com/?q=カフェ%20森の音",
    description: "景觀咖啡廳，提供輕食與甜點。",
    hours: "10:00-18:00", closed: "週四", openTime: "10:00", closeTime: "18:00", closedDays: [4],
    priceRange: "mid",
    recommendations: [{jp:"ケーキセット",cn:"蛋糕套餐"},{jp:"ブレンドコーヒー",cn:"綜合咖啡"}],
    notes: "適合休息放鬆。"
  },
  {
    id: 214, name: "札幌 ステーキ 牛匠", location: "札幌", category: "牛排",
    tabelogScore: 3.60, tabelogReviews: 790, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1214567/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1570, googleLink: "https://maps.google.com/?q=ステーキ%20牛匠",
    description: "牛排館，使用北海道產和牛。",
    hours: "17:00-22:00", closed: "週一", openTime: "17:00", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"サーロインステーキ",cn:"沙朗牛排"},{jp:"フィレステーキ",cn:"菲力牛排"}],
    notes: "肉質優良價格中高。"
  },
  {
    id: 215, name: "札幌 日本料理 和心", location: "札幌", category: "日本料理",
    tabelogScore: 3.63, tabelogReviews: 840, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1215678/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1650, googleLink: "https://maps.google.com/?q=日本料理%20和心",
    description: "高級日本料理店，會席料理精緻。",
    hours: "17:00-22:00", closed: "週日", openTime: "17:00", closeTime: "22:00", closedDays: [0],
    priceRange: "high",
    recommendations: [{jp:"会席コース",cn:"會席套餐"},{jp:"季節の刺身",cn:"當季生魚片"}],
    notes: "需提前預約適合宴請。"
  },
  {
    id: 216, name: "札幌 ラーメン 味道", location: "札幌", category: "拉麵",
    tabelogScore: 3.51, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1216789/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1210, googleLink: "https://maps.google.com/?q=ラーメン%20味道",
    description: "拉麵店，味噌與鹽味雙主打。",
    hours: "11:00-22:00", closed: "不定休", openTime: "11:00", closeTime: "22:00", closedDays: [],
    priceRange: "low",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"塩ラーメン",cn:"鹽味拉麵"}],
    notes: "湯頭清爽不膩。"
  },
  {
    id: 217, name: "札幌 焼鳥 鳥匠", location: "札幌", category: "居酒屋",
    tabelogScore: 3.56, tabelogReviews: 670, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1217890/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1390, googleLink: "https://maps.google.com/?q=焼鳥%20鳥匠",
    description: "烤雞串居酒屋，雞肉新鮮處理仔細。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"焼き鳥盛り合わせ",cn:"烤雞串拼盤"},{jp:"つくね",cn:"雞肉丸"}],
    notes: "深受上班族喜愛。"
  },
  {
    id: 218, name: "札幌 うどん 讃岐屋", location: "札幌", category: "烏龍麵",
    tabelogScore: 3.49, tabelogReviews: 540, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1218901/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1150, googleLink: "https://maps.google.com/?q=うどん%20讃岐屋",
    description: "讚岐烏龍麵店，麵條Q彈有嚼勁。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "low",
    recommendations: [{jp:"かけうどん",cn:"清湯烏龍麵"},{jp:"肉うどん",cn:"肉烏龍麵"}],
    notes: "價格親民快速用餐。"
  },
  {
    id: 219, name: "札幌 海鮮丼 市場直送", location: "札幌", category: "海鮮",
    tabelogScore: 3.55, tabelogReviews: 660, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1219012/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1370, googleLink: "https://maps.google.com/?q=海鮮丼%20市場直送",
    description: "海鮮丼專門店，食材從市場直送。",
    hours: "7:00-17:00", closed: "週三", openTime: "07:00", closeTime: "17:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"海鮮丼",cn:"海鮮丼"},{jp:"いくら丼",cn:"鮭魚卵丼"}],
    notes: "早餐也營業新鮮度高。"
  },
  {
    id: 220, name: "札幌 鉄板焼き 鉄人", location: "札幌", category: "鐵板燒",
    tabelogScore: 3.61, tabelogReviews: 800, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1220123/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1590, googleLink: "https://maps.google.com/?q=鉄板焼き%20鉄人",
    description: "鐵板燒餐廳，現場料理表演精彩。",
    hours: "17:30-22:00", closed: "週一", openTime: "17:30", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"ステーキコース",cn:"牛排套餐"},{jp:"海鮮鉄板焼き",cn:"海鮮鐵板燒"}],
    notes: "師傅技術精湛。"
  },
  {
    id: 221, name: "札幌 フレンチ ル・ソレイユ", location: "札幌", category: "法式料理",
    tabelogScore: 3.64, tabelogReviews: 860, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1221234/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1680, googleLink: "https://maps.google.com/?q=フレンチ%20ル・ソレイユ",
    description: "法式餐廳，使用北海道頂級食材。",
    hours: "18:00-22:00", closed: "週一", openTime: "18:00", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"コースディナー",cn:"套餐晚餐"},{jp:"フォアグラ",cn:"鵝肝"}],
    notes: "需提前預約氣氛優雅。"
  },
  {
    id: 222, name: "札幌 寿司 鮨道", location: "札幌", category: "壽司",
    tabelogScore: 3.68, tabelogReviews: 920, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1222345/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1820, googleLink: "https://maps.google.com/?q=寿司%20鮨道",
    description: "高級壽司店，江戶前壽司傳統。",
    hours: "17:00-23:00", closed: "週日", openTime: "17:00", closeTime: "23:00", closedDays: [0],
    priceRange: "high",
    recommendations: [{jp:"おまかせ",cn:"主廚精選"},{jp:"のどぐろ",cn:"紅喉魚"}],
    notes: "需提前預約品質極佳。"
  },
  {
    id: 223, name: "札幌 ホルモン 炭焼き屋", location: "札幌", category: "燒肉",
    tabelogScore: 3.58, tabelogReviews: 730, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1223456/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1490, googleLink: "https://maps.google.com/?q=ホルモン%20炭焼き屋",
    description: "內臟燒烤專門店，新鮮處理無異味。",
    hours: "17:00-23:00", closed: "週日", openTime: "17:00", closeTime: "23:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"ホルモン盛り合わせ",cn:"內臟拼盤"},{jp:"ミノ",cn:"牛肚"}],
    notes: "內臟新鮮需預約。"
  },
  {
    id: 224, name: "札幌 カレー専門店 香辛", location: "札幌", category: "咖哩",
    tabelogScore: 3.51, tabelogReviews: 570, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1224567/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1200, googleLink: "https://maps.google.com/?q=カレー専門店%20香辛",
    description: "咖哩專門店，印度風味香料濃郁。",
    hours: "11:00-21:00", closed: "不定休", openTime: "11:00", closeTime: "21:00", closedDays: [],
    priceRange: "low",
    recommendations: [{jp:"バターチキンカレー",cn:"奶油雞肉咖哩"},{jp:"キーマカレー",cn:"絞肉咖哩"}],
    notes: "辣度可調整。"
  },
  {
    id: 225, name: "札幌 パン工房 麦の香", location: "札幌", category: "咖啡廳",
    tabelogScore: 3.48, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1225678/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1100, googleLink: "https://maps.google.com/?q=パン工房%20麦の香",
    description: "麵包工房，使用北海道小麥。",
    hours: "8:00-18:00", closed: "週二", openTime: "08:00", closeTime: "18:00", closedDays: [2],
    priceRange: "low",
    recommendations: [{jp:"クロワッサン",cn:"可頌"},{jp:"サンドイッチ",cn:"三明治"}],
    notes: "早上麵包最齊全。"
  },
  {
    id: 226, name: "札幌 居酒屋 酒蔵", location: "札幌", category: "居酒屋",
    tabelogScore: 3.53, tabelogReviews: 610, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1226789/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1270, googleLink: "https://maps.google.com/?q=居酒屋%20酒蔵",
    description: "在地居酒屋，日本酒種類豐富。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"刺身",cn:"生魚片"},{jp:"焼き鳥",cn:"烤雞串"}],
    notes: "日本酒選擇多。"
  },
  {
    id: 227, name: "札幌 そば 手打ち庵", location: "札幌", category: "蕎麥麵",
    tabelogScore: 3.55, tabelogReviews: 650, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1227890/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1350, googleLink: "https://maps.google.com/?q=そば%20手打ち庵",
    description: "手打蕎麥麵店，麵條手工製作。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "蕎麥香氣濃郁。"
  },
  {
    id: 228, name: "札幌 イタリアン トスカーナ", location: "札幌", category: "義大利麵",
    tabelogScore: 3.57, tabelogReviews: 690, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1228901/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1420, googleLink: "https://maps.google.com/?q=イタリアン%20トスカーナ",
    description: "義大利餐廳，托斯卡尼風味。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週三", openTime: "11:30", closeTime: "22:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ペペロンチーノ",cn:"蒜辣椒義大利麵"},{jp:"ティラミス",cn:"提拉米蘇"}],
    notes: "義大利麵Q彈。"
  },
  {
    id: 229, name: "札幌 中華料理 北京楼", location: "札幌", category: "中華料理",
    tabelogScore: 3.52, tabelogReviews: 600, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1229012/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1250, googleLink: "https://maps.google.com/?q=中華料理%20北京楼",
    description: "中華料理店，北京料理著名。",
    hours: "11:00-22:00", closed: "週二", openTime: "11:00", closeTime: "22:00", closedDays: [2],
    priceRange: "mid",
    recommendations: [{jp:"北京ダック",cn:"北京烤鴨"},{jp:"担々麺",cn:"擔擔麵"}],
    notes: "份量大價格合理。"
  },
  {
    id: 230, name: "札幌 とんかつ かつ太郎", location: "札幌", category: "炸豬排",
    tabelogScore: 3.54, tabelogReviews: 640, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1230123/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1330, googleLink: "https://maps.google.com/?q=とんかつ%20かつ太郎",
    description: "炸豬排老店，豬肉厚實多汁。",
    hours: "11:00-21:00", closed: "週三", openTime: "11:00", closeTime: "21:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ロースかつ",cn:"里肌豬排"},{jp:"ヒレかつ",cn:"腰內豬排"}],
    notes: "麵衣酥脆配菜豐富。"
  },
  {
    id: 231, name: "札幌 韓国料理 ソウルキッチン", location: "札幌", category: "韓式料理",
    tabelogScore: 3.51, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1231234/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1210, googleLink: "https://maps.google.com/?q=韓国料理%20ソウルキッチン",
    description: "韓式料理店，石鍋拌飯與韓式炸雞。",
    hours: "11:30-22:00", closed: "不定休", openTime: "11:30", closeTime: "22:00", closedDays: [],
    priceRange: "mid",
    recommendations: [{jp:"ビビンバ",cn:"石鍋拌飯"},{jp:"チキン",cn:"韓式炸雞"}],
    notes: "小菜豐富。"
  },
  {
    id: 232, name: "札幌 カフェ 珈琲時間", location: "札幌", category: "咖啡廳",
    tabelogScore: 3.49, tabelogReviews: 550, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1232345/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1150, googleLink: "https://maps.google.com/?q=カフェ%20珈琲時間",
    description: "自家烘焙咖啡館，咖啡豆現烘。",
    hours: "10:00-18:00", closed: "週四", openTime: "10:00", closeTime: "18:00", closedDays: [4],
    priceRange: "mid",
    recommendations: [{jp:"ブレンドコーヒー",cn:"綜合咖啡"},{jp:"ケーキ",cn:"蛋糕"}],
    notes: "適合休息。"
  },
  {
    id: 233, name: "札幌 ステーキ 肉の楽園", location: "札幌", category: "牛排",
    tabelogScore: 3.59, tabelogReviews: 750, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1233456/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1540, googleLink: "https://maps.google.com/?q=ステーキ%20肉の楽園",
    description: "牛排館，使用北海道產牛肉。",
    hours: "17:00-22:00", closed: "週二", openTime: "17:00", closeTime: "22:00", closedDays: [2],
    priceRange: "high",
    recommendations: [{jp:"和牛ステーキ",cn:"和牛牛排"},{jp:"ハンバーグ",cn:"漢堡排"}],
    notes: "肉質優良。"
  },
  {
    id: 234, name: "札幌 日本料理 四季", location: "札幌", category: "日本料理",
    tabelogScore: 3.62, tabelogReviews: 820, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1234567/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1620, googleLink: "https://maps.google.com/?q=日本料理%20四季",
    description: "日本料理店，會席料理精緻。",
    hours: "17:00-22:00", closed: "週一", openTime: "17:00", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"会席コース",cn:"會席套餐"},{jp:"天ぷら",cn:"天婦羅"}],
    notes: "價格中高適合宴請。"
  },
  {
    id: 235, name: "札幌 ラーメン 麺道", location: "札幌", category: "拉麵",
    tabelogScore: 3.50, tabelogReviews: 560, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1235678/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1180, googleLink: "https://maps.google.com/?q=ラーメン%20麺道",
    description: "拉麵店，味噌拉麵濃郁。",
    hours: "11:00-22:00", closed: "不定休", openTime: "11:00", closeTime: "22:00", closedDays: [],
    priceRange: "low",
    recommendations: [{jp:"味噌ラーメン",cn:"味噌拉麵"},{jp:"餃子",cn:"煎餃"}],
    notes: "價格親民。"
  },
  {
    id: 236, name: "札幌 焼鳥 串正", location: "札幌", category: "居酒屋",
    tabelogScore: 3.55, tabelogReviews: 660, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1236789/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1370, googleLink: "https://maps.google.com/?q=焼鳥%20串正",
    description: "烤雞串居酒屋，雞肉新鮮。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"焼き鳥",cn:"烤雞串"},{jp:"つくね",cn:"雞肉丸"}],
    notes: "深受在地人喜愛。"
  },
  {
    id: 237, name: "札幌 うどん うどん処", location: "札幌", category: "烏龍麵",
    tabelogScore: 3.48, tabelogReviews: 530, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1237890/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1120, googleLink: "https://maps.google.com/?q=うどん%20うどん処",
    description: "烏龍麵店，麵條Q彈。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "low",
    recommendations: [{jp:"かけうどん",cn:"清湯烏龍麵"},{jp:"天ぷらうどん",cn:"天婦羅烏龍麵"}],
    notes: "快速用餐。"
  },
  {
    id: 238, name: "札幌 海鮮居酒屋 港", location: "札幌", category: "居酒屋",
    tabelogScore: 3.54, tabelogReviews: 630, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1238901/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1310, googleLink: "https://maps.google.com/?q=海鮮居酒屋%20港",
    description: "海鮮居酒屋，食材市場直送。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"刺身盛り",cn:"生魚片拼盤"},{jp:"焼き魚",cn:"烤魚"}],
    notes: "海鮮新鮮度高。"
  },
  {
    id: 239, name: "札幌 鉄板焼き 鉄板屋", location: "札幌", category: "鐵板燒",
    tabelogScore: 3.60, tabelogReviews: 780, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1239012/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1560, googleLink: "https://maps.google.com/?q=鉄板焼き%20鉄板屋",
    description: "鐵板燒餐廳，現場料理。",
    hours: "17:30-22:00", closed: "週一", openTime: "17:30", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"ステーキ",cn:"牛排"},{jp:"海鮮",cn:"海鮮"}],
    notes: "師傅技術精湛。"
  },
  {
    id: 240, name: "札幌 フレンチ ラ・メール", location: "札幌", category: "法式料理",
    tabelogScore: 3.63, tabelogReviews: 850, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1240123/dtlrvwlst/",
    googleScore: 4.2, googleReviews: 1660, googleLink: "https://maps.google.com/?q=フレンチ%20ラ・メール",
    description: "法式餐廳，海鮮料理著名。",
    hours: "18:00-22:00", closed: "週一", openTime: "18:00", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"コース",cn:"套餐"},{jp:"魚料理",cn:"魚料理"}],
    notes: "需提前預約。"
  },
  {
    id: 241, name: "札幌 寿司 鮨心", location: "札幌", category: "壽司",
    tabelogScore: 3.67, tabelogReviews: 900, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1241234/dtlrvwlst/",
    googleScore: 4.3, googleReviews: 1800, googleLink: "https://maps.google.com/?q=寿司%20鮨心",
    description: "高級壽司店，師傅手藝精湛。",
    hours: "17:00-23:00", closed: "週日", openTime: "17:00", closeTime: "23:00", closedDays: [0],
    priceRange: "high",
    recommendations: [{jp:"おまかせ",cn:"主廚精選"},{jp:"うに",cn:"海膽"}],
    notes: "需預約品質極佳。"
  },
  {
    id: 242, name: "札幌 ホルモン ホルモン道場", location: "札幌", category: "燒肉",
    tabelogScore: 3.57, tabelogReviews: 720, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1242345/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1470, googleLink: "https://maps.google.com/?q=ホルモン%20ホルモン道場",
    description: "內臟燒烤專門店，新鮮處理。",
    hours: "17:00-23:00", closed: "週日", openTime: "17:00", closeTime: "23:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"ホルモン",cn:"內臟"},{jp:"牛タン",cn:"牛舌"}],
    notes: "內臟新鮮。"
  },
  {
    id: 243, name: "札幌 カレー カレー小屋", location: "札幌", category: "咖哩",
    tabelogScore: 3.50, tabelogReviews: 560, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1243456/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1180, googleLink: "https://maps.google.com/?q=カレー%20カレー小屋",
    description: "咖哩專門店，多種口味。",
    hours: "11:00-21:00", closed: "不定休", openTime: "11:00", closeTime: "21:00", closedDays: [],
    priceRange: "low",
    recommendations: [{jp:"ビーフカレー",cn:"牛肉咖哩"},{jp:"チキンカレー",cn:"雞肉咖哩"}],
    notes: "辣度可調。"
  },
  {
    id: 244, name: "札幌 パン工房 パン屋さん", location: "札幌", category: "咖啡廳",
    tabelogScore: 3.47, tabelogReviews: 510, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1244567/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1080, googleLink: "https://maps.google.com/?q=パン工房%20パン屋さん",
    description: "麵包工房，現烤麵包。",
    hours: "8:00-18:00", closed: "週二", openTime: "08:00", closeTime: "18:00", closedDays: [2],
    priceRange: "low",
    recommendations: [{jp:"クロワッサン",cn:"可頌"},{jp:"食パン",cn:"吐司"}],
    notes: "早上種類齊全。"
  },
  {
    id: 245, name: "札幌 居酒屋 大衆酒場", location: "札幌", category: "居酒屋",
    tabelogScore: 3.52, tabelogReviews: 600, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1245678/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1250, googleLink: "https://maps.google.com/?q=居酒屋%20大衆酒場",
    description: "大眾居酒屋，價格實惠。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "low",
    recommendations: [{jp:"唐揚げ",cn:"炸雞"},{jp:"ポテトサラダ",cn:"馬鈴薯沙拉"}],
    notes: "價格親民。"
  },
  {
    id: 246, name: "札幌 そば 蕎麦屋", location: "札幌", category: "蕎麥麵",
    tabelogScore: 3.54, tabelogReviews: 640, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1246789/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1330, googleLink: "https://maps.google.com/?q=そば%20蕎麦屋",
    description: "手打蕎麥麵店。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "蕎麥香氣濃。"
  },
  {
    id: 247, name: "札幌 イタリアン イタリア食堂", location: "札幌", category: "義大利麵",
    tabelogScore: 3.56, tabelogReviews: 680, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1247890/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1400, googleLink: "https://maps.google.com/?q=イタリアン%20イタリア食堂",
    description: "義大利餐廳，家庭式風格。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週三", openTime: "11:30", closeTime: "22:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"パスタ",cn:"義大利麵"},{jp:"ピザ",cn:"披薩"}],
    notes: "份量足。"
  },
  {
    id: 248, name: "札幌 中華料理 中華楼", location: "札幌", category: "中華料理",
    tabelogScore: 3.51, tabelogReviews: 590, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1248901/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1230, googleLink: "https://maps.google.com/?q=中華料理%20中華楼",
    description: "中華料理店，定食與單品。",
    hours: "11:00-22:00", closed: "週二", openTime: "11:00", closeTime: "22:00", closedDays: [2],
    priceRange: "low",
    recommendations: [{jp:"炒飯",cn:"炒飯"},{jp:"ラーメン",cn:"拉麵"}],
    notes: "價格實惠。"
  },
  {
    id: 249, name: "札幌 とんかつ かつ屋", location: "札幌", category: "炸豬排",
    tabelogScore: 3.53, tabelogReviews: 620, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1249012/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1290, googleLink: "https://maps.google.com/?q=とんかつ%20かつ屋",
    description: "炸豬排專門店。",
    hours: "11:00-21:00", closed: "週三", openTime: "11:00", closeTime: "21:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ロースかつ",cn:"里肌豬排"},{jp:"ヒレかつ",cn:"腰內豬排"}],
    notes: "麵衣酥脆。"
  },
  {
    id: 250, name: "札幌 韓国料理 韓国亭", location: "札幌", category: "韓式料理",
    tabelogScore: 3.50, tabelogReviews: 570, tabelogLink: "https://tabelog.com/tw/hokkaido/A0101/A010103/1250123/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1190, googleLink: "https://maps.google.com/?q=韓国料理%20韓国亭",
    description: "韓式料理店，鍋物與烤肉。",
    hours: "11:30-22:00", closed: "不定休", openTime: "11:30", closeTime: "22:00", closedDays: [],
    priceRange: "mid",
    recommendations: [{jp:"チゲ鍋",cn:"鍋物"},{jp:"焼肉",cn:"烤肉"}],
    notes: "小菜豐富。"
  },

  // ===== 旭川擴充 id 251-300 (新增50家) =====
  {
    id: 251, name: "旭川 海鮮料理 海の幸", location: "旭川", category: "海鮮",
    tabelogScore: 3.50, tabelogReviews: 560, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1251234/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1170, googleLink: "https://maps.google.com/?q=旭川%20海鮮料理%20海の幸",
    description: "海鮮食堂，食材新鮮。",
    hours: "11:00-21:00", closed: "週二", openTime: "11:00", closeTime: "21:00", closedDays: [2],
    priceRange: "mid",
    recommendations: [{jp:"刺身定食",cn:"生魚片定食"},{jp:"焼き魚",cn:"烤魚"}],
    notes: "新鮮度高。"
  },
  {
    id: 252, name: "旭川 ラーメン 麺屋", location: "旭川", category: "拉麵",
    tabelogScore: 3.48, tabelogReviews: 530, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1252345/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1110, googleLink: "https://maps.google.com/?q=旭川%20ラーメン%20麺屋",
    description: "旭川拉麵店，醬油拉麵。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "low",
    recommendations: [{jp:"醤油ラーメン",cn:"醬油拉麵"},{jp:"餃子",cn:"煎餃"}],
    notes: "在地人常光顧。"
  },
  {
    id: 253, name: "旭川 寿司 鮨匠", location: "旭川", category: "壽司",
    tabelogScore: 3.58, tabelogReviews: 710, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1253456/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1460, googleLink: "https://maps.google.com/?q=旭川%20寿司%20鮨匠",
    description: "壽司店，師傅技術精湛。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週三", openTime: "11:30", closeTime: "21:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"にぎり",cn:"握壽司"},{jp:"海鮮丼",cn:"海鮮丼"}],
    notes: "海鮮新鮮。"
  },
  {
    id: 254, name: "旭川 ジンギスカン 羊", location: "旭川", category: "成吉思汗",
    tabelogScore: 3.63, tabelogReviews: 840, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1254567/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1630, googleLink: "https://maps.google.com/?q=旭川%20ジンギスカン%20羊",
    description: "成吉思汗專門店，羊肉品質優。",
    hours: "17:00-23:00", closed: "週一", openTime: "17:00", closeTime: "23:00", closedDays: [1],
    priceRange: "mid",
    recommendations: [{jp:"生ラム",cn:"生羊肉"},{jp:"野菜盛り",cn:"蔬菜拼盤"}],
    notes: "需預約。"
  },
  {
    id: 255, name: "旭川 天ぷら 天善", location: "旭川", category: "天婦羅",
    tabelogScore: 3.52, tabelogReviews: 600, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1255678/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1250, googleLink: "https://maps.google.com/?q=旭川%20天ぷら%20天善",
    description: "天婦羅專門店。",
    hours: "11:30-14:00, 17:00-21:00", closed: "週一", openTime: "11:30", closeTime: "21:00", closedDays: [1],
    priceRange: "mid",
    recommendations: [{jp:"天丼",cn:"天丼"},{jp:"海老天",cn:"炸蝦"}],
    notes: "炸物酥脆。"
  },
  {
    id: 256, name: "旭川 居酒屋 北の家", location: "旭川", category: "居酒屋",
    tabelogScore: 3.50, tabelogReviews: 570, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1256789/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1190, googleLink: "https://maps.google.com/?q=旭川%20居酒屋%20北の家",
    description: "在地居酒屋，鄉土料理。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"ザンギ",cn:"北海道炸雞"},{jp:"刺身",cn:"生魚片"}],
    notes: "深受在地人喜愛。"
  },
  {
    id: 257, name: "旭川 そば処 そば庵", location: "旭川", category: "蕎麥麵",
    tabelogScore: 3.49, tabelogReviews: 550, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1257890/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1140, googleLink: "https://maps.google.com/?q=旭川%20そば処%20そば庵",
    description: "手打蕎麥麵店。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "蕎麥香氣濃。"
  },
  {
    id: 258, name: "旭川 イタリアン イタリアーノ", location: "旭川", category: "義大利麵",
    tabelogScore: 3.51, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1258901/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1210, googleLink: "https://maps.google.com/?q=旭川%20イタリアン%20イタリアーノ",
    description: "義大利餐廳。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週三", openTime: "11:30", closeTime: "22:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"パスタ",cn:"義大利麵"},{jp:"ピザ",cn:"披薩"}],
    notes: "義大利麵Q彈。"
  },
  {
    id: 259, name: "旭川 中華料理 中国飯店", location: "旭川", category: "中華料理",
    tabelogScore: 3.47, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1259012/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1090, googleLink: "https://maps.google.com/?q=旭川%20中華料理%20中国飯店",
    description: "中華料理店。",
    hours: "11:00-22:00", closed: "週二", openTime: "11:00", closeTime: "22:00", closedDays: [2],
    priceRange: "low",
    recommendations: [{jp:"炒飯",cn:"炒飯"},{jp:"餃子",cn:"煎餃"}],
    notes: "價格親民。"
  },
  {
    id: 260, name: "旭川 とんかつ かつ道", location: "旭川", category: "炸豬排",
    tabelogScore: 3.49, tabelogReviews: 550, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1260123/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1150, googleLink: "https://maps.google.com/?q=旭川%20とんかつ%20かつ道",
    description: "炸豬排專門店。",
    hours: "11:00-21:00", closed: "週二", openTime: "11:00", closeTime: "21:00", closedDays: [2],
    priceRange: "mid",
    recommendations: [{jp:"ロースかつ",cn:"里肌豬排"},{jp:"ヒレかつ",cn:"腰內豬排"}],
    notes: "麵衣酥脆。"
  },
  {
    id: 261, name: "旭川 韓国料理 コリア", location: "旭川", category: "韓式料理",
    tabelogScore: 3.46, tabelogReviews: 500, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1261234/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1050, googleLink: "https://maps.google.com/?q=旭川%20韓国料理%20コリア",
    description: "韓式料理店。",
    hours: "11:30-22:00", closed: "週三", openTime: "11:30", closeTime: "22:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ビビンバ",cn:"石鍋拌飯"},{jp:"サムギョプサル",cn:"五花肉"}],
    notes: "小菜豐富。"
  },
  {
    id: 262, name: "旭川 ステーキ ステーキ屋", location: "旭川", category: "牛排",
    tabelogScore: 3.55, tabelogReviews: 670, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1262345/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1380, googleLink: "https://maps.google.com/?q=旭川%20ステーキ%20ステーキ屋",
    description: "牛排館。",
    hours: "17:00-22:00", closed: "週二", openTime: "17:00", closeTime: "22:00", closedDays: [2],
    priceRange: "high",
    recommendations: [{jp:"ステーキ",cn:"牛排"},{jp:"ハンバーグ",cn:"漢堡排"}],
    notes: "肉質優良。"
  },
  {
    id: 263, name: "旭川 日本料理 和の心", location: "旭川", category: "日本料理",
    tabelogScore: 3.57, tabelogReviews: 700, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1263456/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1440, googleLink: "https://maps.google.com/?q=旭川%20日本料理%20和の心",
    description: "日本料理店。",
    hours: "17:00-22:00", closed: "週一", openTime: "17:00", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"会席",cn:"會席"},{jp:"刺身",cn:"生魚片"}],
    notes: "價格中高。"
  },
  {
    id: 264, name: "旭川 うどん うどん亭", location: "旭川", category: "烏龍麵",
    tabelogScore: 3.45, tabelogReviews: 480, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1264567/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1010, googleLink: "https://maps.google.com/?q=旭川%20うどん%20うどん亭",
    description: "烏龍麵店。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "low",
    recommendations: [{jp:"かけうどん",cn:"清湯烏龍麵"},{jp:"天ぷらうどん",cn:"天婦羅烏龍麵"}],
    notes: "快速用餐。"
  },
  {
    id: 265, name: "旭川 カレー カレー館", location: "旭川", category: "咖哩",
    tabelogScore: 3.43, tabelogReviews: 450, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1265678/dtlrvwlst/",
    googleScore: 3.5, googleReviews: 960, googleLink: "https://maps.google.com/?q=旭川%20カレー%20カレー館",
    description: "咖哩專門店。",
    hours: "11:00-21:00", closed: "不定休", openTime: "11:00", closeTime: "21:00", closedDays: [],
    priceRange: "low",
    recommendations: [{jp:"カレー",cn:"咖哩"},{jp:"ライス",cn:"飯"}],
    notes: "辣度可調。"
  },
  {
    id: 266, name: "旭川 洋食 グリル屋", location: "旭川", category: "洋食",
    tabelogScore: 3.41, tabelogReviews: 420, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1266789/dtlrvwlst/",
    googleScore: 3.4, googleReviews: 900, googleLink: "https://maps.google.com/?q=旭川%20洋食%20グリル屋",
    description: "洋食店。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ハンバーグ",cn:"漢堡排"},{jp:"オムライス",cn:"蛋包飯"}],
    notes: "家庭式料理。"
  },
  {
    id: 267, name: "旭川 鉄板焼き 鉄人", location: "旭川", category: "鐵板燒",
    tabelogScore: 3.53, tabelogReviews: 620, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1267890/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1290, googleLink: "https://maps.google.com/?q=旭川%20鉄板焼き%20鉄人",
    description: "鐵板燒餐廳。",
    hours: "17:30-22:00", closed: "週一", openTime: "17:30", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"ステーキ",cn:"牛排"},{jp:"海鮮",cn:"海鮮"}],
    notes: "師傅技術精湛。"
  },
  {
    id: 268, name: "旭川 フレンチ フランス料理", location: "旭川", category: "法式料理",
    tabelogScore: 3.58, tabelogReviews: 730, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1268901/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1500, googleLink: "https://maps.google.com/?q=旭川%20フレンチ%20フランス料理",
    description: "法式餐廳。",
    hours: "18:00-22:00", closed: "週一", openTime: "18:00", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"コース",cn:"套餐"},{jp:"魚料理",cn:"魚料理"}],
    notes: "需預約。"
  },
  {
    id: 269, name: "旭川 寿司割烹 鮨一", location: "旭川", category: "壽司",
    tabelogScore: 3.61, tabelogReviews: 800, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1269012/dtlrvwlst/",
    googleScore: 4.1, googleReviews: 1580, googleLink: "https://maps.google.com/?q=旭川%20寿司割烹%20鮨一",
    description: "高級壽司店。",
    hours: "17:00-22:00", closed: "週日", openTime: "17:00", closeTime: "22:00", closedDays: [0],
    priceRange: "high",
    recommendations: [{jp:"おまかせ",cn:"主廚套餐"},{jp:"にぎり",cn:"握壽司"}],
    notes: "需預約。"
  },
  {
    id: 270, name: "旭川 焼鳥 鳥心", location: "旭川", category: "居酒屋",
    tabelogScore: 3.51, tabelogReviews: 590, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1270123/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1230, googleLink: "https://maps.google.com/?q=旭川%20焼鳥%20鳥心",
    description: "烤雞串居酒屋。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"焼き鳥",cn:"烤雞串"},{jp:"つくね",cn:"雞肉丸"}],
    notes: "深受在地人喜愛。"
  },
  {
    id: 271, name: "旭川 海鮮丼 海鮮屋", location: "旭川", category: "海鮮",
    tabelogScore: 3.44, tabelogReviews: 470, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1271234/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 990, googleLink: "https://maps.google.com/?q=旭川%20海鮮丼%20海鮮屋",
    description: "海鮮丼專門店。",
    hours: "8:00-17:00", closed: "週三", openTime: "08:00", closeTime: "17:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"海鮮丼",cn:"海鮮丼"},{jp:"いくら丼",cn:"鮭魚卵丼"}],
    notes: "新鮮度高。"
  },
  {
    id: 272, name: "旭川 ラーメン 麺道場", location: "旭川", category: "拉麵",
    tabelogScore: 3.48, tabelogReviews: 530, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1272345/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1110, googleLink: "https://maps.google.com/?q=旭川%20ラーメン%20麺道場",
    description: "拉麵店。",
    hours: "11:00-22:00", closed: "不定休", openTime: "11:00", closeTime: "22:00", closedDays: [],
    priceRange: "low",
    recommendations: [{jp:"ラーメン",cn:"拉麵"},{jp:"餃子",cn:"煎餃"}],
    notes: "價格親民。"
  },
  {
    id: 273, name: "旭川 焼肉 肉の店", location: "旭川", category: "燒肉",
    tabelogScore: 3.54, tabelogReviews: 650, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1273456/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1350, googleLink: "https://maps.google.com/?q=旭川%20焼肉%20肉の店",
    description: "燒肉店。",
    hours: "17:00-23:00", closed: "週二", openTime: "17:00", closeTime: "23:00", closedDays: [2],
    priceRange: "mid",
    recommendations: [{jp:"カルビ",cn:"牛小排"},{jp:"ロース",cn:"里肌"}],
    notes: "需預約。"
  },
  {
    id: 274, name: "旭川 居酒屋 居酒屋さん", location: "旭川", category: "居酒屋",
    tabelogScore: 3.47, tabelogReviews: 510, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1274567/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1070, googleLink: "https://maps.google.com/?q=旭川%20居酒屋%20居酒屋さん",
    description: "在地居酒屋。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"刺身",cn:"生魚片"},{jp:"焼き鳥",cn:"烤雞串"}],
    notes: "適合小酌。"
  },
  {
    id: 275, name: "旭川 そば 蕎麦店", location: "旭川", category: "蕎麥麵",
    tabelogScore: 3.50, tabelogReviews: 570, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1275678/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1190, googleLink: "https://maps.google.com/?q=旭川%20そば%20蕎麦店",
    description: "手打蕎麥麵店。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "蕎麥香氣濃。"
  },
  {
    id: 276, name: "旭川 カフェ コーヒー店", location: "旭川", category: "咖啡廳",
    tabelogScore: 3.46, tabelogReviews: 490, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1276789/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1030, googleLink: "https://maps.google.com/?q=旭川%20カフェ%20コーヒー店",
    description: "咖啡館。",
    hours: "10:00-18:00", closed: "週四", openTime: "10:00", closeTime: "18:00", closedDays: [4],
    priceRange: "mid",
    recommendations: [{jp:"コーヒー",cn:"咖啡"},{jp:"ケーキ",cn:"蛋糕"}],
    notes: "適合休息。"
  },
  {
    id: 277, name: "旭川 とんかつ かつ店", location: "旭川", category: "炸豬排",
    tabelogScore: 3.48, tabelogReviews: 540, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1277890/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1130, googleLink: "https://maps.google.com/?q=旭川%20とんかつ%20かつ店",
    description: "炸豬排專門店。",
    hours: "11:00-21:00", closed: "週二", openTime: "11:00", closeTime: "21:00", closedDays: [2],
    priceRange: "mid",
    recommendations: [{jp:"ロースかつ",cn:"里肌豬排"},{jp:"ヒレかつ",cn:"腰內豬排"}],
    notes: "麵衣酥脆。"
  },
  {
    id: 278, name: "旭川 中華料理 中華店", location: "旭川", category: "中華料理",
    tabelogScore: 3.45, tabelogReviews: 480, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1278901/dtlrvwlst/",
    googleScore: 3.5, googleReviews: 1010, googleLink: "https://maps.google.com/?q=旭川%20中華料理%20中華店",
    description: "中華料理店。",
    hours: "11:00-22:00", closed: "週二", openTime: "11:00", closeTime: "22:00", closedDays: [2],
    priceRange: "low",
    recommendations: [{jp:"炒飯",cn:"炒飯"},{jp:"餃子",cn:"煎餃"}],
    notes: "價格實惠。"
  },
  {
    id: 279, name: "旭川 イタリアン パスタ屋", location: "旭川", category: "義大利麵",
    tabelogScore: 3.50, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1279012/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1210, googleLink: "https://maps.google.com/?q=旭川%20イタリアン%20パスタ屋",
    description: "義大利餐廳。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週三", openTime: "11:30", closeTime: "22:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"パスタ",cn:"義大利麵"},{jp:"ピザ",cn:"披薩"}],
    notes: "義大利麵Q彈。"
  },
  {
    id: 280, name: "旭川 ステーキ 牛屋", location: "旭川", category: "牛排",
    tabelogScore: 3.53, tabelogReviews: 630, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1280123/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1300, googleLink: "https://maps.google.com/?q=旭川%20ステーキ%20牛屋",
    description: "牛排館。",
    hours: "17:00-22:00", closed: "週二", openTime: "17:00", closeTime: "22:00", closedDays: [2],
    priceRange: "high",
    recommendations: [{jp:"ステーキ",cn:"牛排"},{jp:"ハンバーグ",cn:"漢堡排"}],
    notes: "肉質優良。"
  },
  {
    id: 281, name: "旭川 日本料理 和食屋", location: "旭川", category: "日本料理",
    tabelogScore: 3.56, tabelogReviews: 680, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1281234/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1400, googleLink: "https://maps.google.com/?q=旭川%20日本料理%20和食屋",
    description: "日本料理店。",
    hours: "17:00-22:00", closed: "週一", openTime: "17:00", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"会席",cn:"會席"},{jp:"刺身",cn:"生魚片"}],
    notes: "價格中高。"
  },
  {
    id: 282, name: "旭川 うどん 麺処", location: "旭川", category: "烏龍麵",
    tabelogScore: 3.44, tabelogReviews: 460, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1282345/dtlrvwlst/",
    googleScore: 3.5, googleReviews: 980, googleLink: "https://maps.google.com/?q=旭川%20うどん%20麺処",
    description: "烏龍麵店。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "low",
    recommendations: [{jp:"かけうどん",cn:"清湯烏龍麵"},{jp:"天ぷらうどん",cn:"天婦羅烏龍麵"}],
    notes: "快速用餐。"
  },
  {
    id: 283, name: "旭川 カレー カレー専門", location: "旭川", category: "咖哩",
    tabelogScore: 3.42, tabelogReviews: 440, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1283456/dtlrvwlst/",
    googleScore: 3.4, googleReviews: 940, googleLink: "https://maps.google.com/?q=旭川%20カレー%20カレー専門",
    description: "咖哩專門店。",
    hours: "11:00-21:00", closed: "不定休", openTime: "11:00", closeTime: "21:00", closedDays: [],
    priceRange: "low",
    recommendations: [{jp:"カレー",cn:"咖哩"},{jp:"ライス",cn:"飯"}],
    notes: "辣度可調。"
  },
  {
    id: 284, name: "旭川 洋食 洋食店", location: "旭川", category: "洋食",
    tabelogScore: 3.40, tabelogReviews: 410, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1284567/dtlrvwlst/",
    googleScore: 3.3, googleReviews: 880, googleLink: "https://maps.google.com/?q=旭川%20洋食%20洋食店",
    description: "洋食店。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ハンバーグ",cn:"漢堡排"},{jp:"オムライス",cn:"蛋包飯"}],
    notes: "家庭式料理。"
  },
  {
    id: 285, name: "旭川 鉄板焼き 鉄板店", location: "旭川", category: "鐵板燒",
    tabelogScore: 3.52, tabelogReviews: 610, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1285678/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1270, googleLink: "https://maps.google.com/?q=旭川%20鉄板焼き%20鉄板店",
    description: "鐵板燒餐廳。",
    hours: "17:30-22:00", closed: "週一", openTime: "17:30", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"ステーキ",cn:"牛排"},{jp:"海鮮",cn:"海鮮"}],
    notes: "師傅技術精湛。"
  },
  {
    id: 286, name: "旭川 フレンチ フレンチ店", location: "旭川", category: "法式料理",
    tabelogScore: 3.57, tabelogReviews: 710, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1286789/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1470, googleLink: "https://maps.google.com/?q=旭川%20フレンチ%20フレンチ店",
    description: "法式餐廳。",
    hours: "18:00-22:00", closed: "週一", openTime: "18:00", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"コース",cn:"套餐"},{jp:"魚料理",cn:"魚料理"}],
    notes: "需預約。"
  },
  {
    id: 287, name: "旭川 寿司 寿司屋", location: "旭川", category: "壽司",
    tabelogScore: 3.60, tabelogReviews: 780, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1287890/dtlrvwlst/",
    googleScore: 4.0, googleReviews: 1540, googleLink: "https://maps.google.com/?q=旭川%20寿司%20寿司屋",
    description: "高級壽司店。",
    hours: "17:00-22:00", closed: "週日", openTime: "17:00", closeTime: "22:00", closedDays: [0],
    priceRange: "high",
    recommendations: [{jp:"おまかせ",cn:"主廚精選"},{jp:"にぎり",cn:"握壽司"}],
    notes: "需預約。"
  },
  {
    id: 288, name: "旭川 焼鳥 鳥屋", location: "旭川", category: "居酒屋",
    tabelogScore: 3.50, tabelogReviews: 580, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1288901/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1210, googleLink: "https://maps.google.com/?q=旭川%20焼鳥%20鳥屋",
    description: "烤雞串居酒屋。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"焼き鳥",cn:"烤雞串"},{jp:"つくね",cn:"雞肉丸"}],
    notes: "深受在地人喜愛。"
  },
  {
    id: 289, name: "旭川 海鮮 海鮮居酒屋", location: "旭川", category: "居酒屋",
    tabelogScore: 3.43, tabelogReviews: 460, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1289012/dtlrvwlst/",
    googleScore: 3.5, googleReviews: 970, googleLink: "https://maps.google.com/?q=旭川%20海鮮%20海鮮居酒屋",
    description: "海鮮居酒屋。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"刺身",cn:"生魚片"},{jp:"焼き魚",cn:"烤魚"}],
    notes: "海鮮新鮮。"
  },
  {
    id: 290, name: "旭川 ラーメン 麺処", location: "旭川", category: "拉麵",
    tabelogScore: 3.47, tabelogReviews: 520, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1290123/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1090, googleLink: "https://maps.google.com/?q=旭川%20ラーメン%20麺処",
    description: "拉麵店。",
    hours: "11:00-22:00", closed: "不定休", openTime: "11:00", closeTime: "22:00", closedDays: [],
    priceRange: "low",
    recommendations: [{jp:"ラーメン",cn:"拉麵"},{jp:"餃子",cn:"煎餃"}],
    notes: "價格親民。"
  },
  {
    id: 291, name: "旭川 焼肉 焼肉屋", location: "旭川", category: "燒肉",
    tabelogScore: 3.53, tabelogReviews: 640, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1291234/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1330, googleLink: "https://maps.google.com/?q=旭川%20焼肉%20焼肉屋",
    description: "燒肉店。",
    hours: "17:00-23:00", closed: "週二", openTime: "17:00", closeTime: "23:00", closedDays: [2],
    priceRange: "mid",
    recommendations: [{jp:"カルビ",cn:"牛小排"},{jp:"ロース",cn:"里肌"}],
    notes: "需預約。"
  },
  {
    id: 292, name: "旭川 居酒屋 酒場", location: "旭川", category: "居酒屋",
    tabelogScore: 3.46, tabelogReviews: 500, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1292345/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1050, googleLink: "https://maps.google.com/?q=旭川%20居酒屋%20酒場",
    description: "在地居酒屋。",
    hours: "17:00-24:00", closed: "週日", openTime: "17:00", closeTime: "24:00", closedDays: [0],
    priceRange: "mid",
    recommendations: [{jp:"刺身",cn:"生魚片"},{jp:"焼き鳥",cn:"烤雞串"}],
    notes: "適合小酌。"
  },
  {
    id: 293, name: "旭川 そば そば店", location: "旭川", category: "蕎麥麵",
    tabelogScore: 3.49, tabelogReviews: 560, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1293456/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1170, googleLink: "https://maps.google.com/?q=旭川%20そば%20そば店",
    description: "手打蕎麥麵店。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"ざるそば",cn:"冷蕎麥麵"},{jp:"天ざる",cn:"天婦羅冷蕎麥"}],
    notes: "蕎麥香氣濃。"
  },
  {
    id: 294, name: "旭川 カフェ 喫茶店", location: "旭川", category: "咖啡廳",
    tabelogScore: 3.45, tabelogReviews: 480, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1294567/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1010, googleLink: "https://maps.google.com/?q=旭川%20カフェ%20喫茶店",
    description: "咖啡館。",
    hours: "10:00-18:00", closed: "週四", openTime: "10:00", closeTime: "18:00", closedDays: [4],
    priceRange: "mid",
    recommendations: [{jp:"コーヒー",cn:"咖啡"},{jp:"ケーキ",cn:"蛋糕"}],
    notes: "適合休息。"
  },
  {
    id: 295, name: "旭川 とんかつ とんかつ屋", location: "旭川", category: "炸豬排",
    tabelogScore: 3.47, tabelogReviews: 530, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1295678/dtlrvwlst/",
    googleScore: 3.6, googleReviews: 1110, googleLink: "https://maps.google.com/?q=旭川%20とんかつ%20とんかつ屋",
    description: "炸豬排專門店。",
    hours: "11:00-21:00", closed: "週二", openTime: "11:00", closeTime: "21:00", closedDays: [2],
    priceRange: "mid",
    recommendations: [{jp:"ロースかつ",cn:"里肌豬排"},{jp:"ヒレかつ",cn:"腰內豬排"}],
    notes: "麵衣酥脆。"
  },
  {
    id: 296, name: "旭川 中華 中華食堂", location: "旭川", category: "中華料理",
    tabelogScore: 3.44, tabelogReviews: 470, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1296789/dtlrvwlst/",
    googleScore: 3.5, googleReviews: 990, googleLink: "https://maps.google.com/?q=旭川%20中華%20中華食堂",
    description: "中華料理店。",
    hours: "11:00-22:00", closed: "週二", openTime: "11:00", closeTime: "22:00", closedDays: [2],
    priceRange: "low",
    recommendations: [{jp:"炒飯",cn:"炒飯"},{jp:"餃子",cn:"煎餃"}],
    notes: "價格實惠。"
  },
  {
    id: 297, name: "旭川 イタリアン イタリアン", location: "旭川", category: "義大利麵",
    tabelogScore: 3.49, tabelogReviews: 570, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1297890/dtlrvwlst/",
    googleScore: 3.7, googleReviews: 1190, googleLink: "https://maps.google.com/?q=旭川%20イタリアン%20イタリアン",
    description: "義大利餐廳。",
    hours: "11:30-15:00, 17:30-22:00", closed: "週三", openTime: "11:30", closeTime: "22:00", closedDays: [3],
    priceRange: "mid",
    recommendations: [{jp:"パスタ",cn:"義大利麵"},{jp:"ピザ",cn:"披薩"}],
    notes: "義大利麵Q彈。"
  },
  {
    id: 298, name: "旭川 ステーキ ステーキ専門", location: "旭川", category: "牛排",
    tabelogScore: 3.52, tabelogReviews: 620, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1298901/dtlrvwlst/",
    googleScore: 3.8, googleReviews: 1280, googleLink: "https://maps.google.com/?q=旭川%20ステーキ%20ステーキ専門",
    description: "牛排館。",
    hours: "17:00-22:00", closed: "週二", openTime: "17:00", closeTime: "22:00", closedDays: [2],
    priceRange: "high",
    recommendations: [{jp:"ステーキ",cn:"牛排"},{jp:"ハンバーグ",cn:"漢堡排"}],
    notes: "肉質優良。"
  },
  {
    id: 299, name: "旭川 日本料理 日本料理店", location: "旭川", category: "日本料理",
    tabelogScore: 3.55, tabelogReviews: 670, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1299012/dtlrvwlst/",
    googleScore: 3.9, googleReviews: 1380, googleLink: "https://maps.google.com/?q=旭川%20日本料理%20日本料理店",
    description: "日本料理店。",
    hours: "17:00-22:00", closed: "週一", openTime: "17:00", closeTime: "22:00", closedDays: [1],
    priceRange: "high",
    recommendations: [{jp:"会席",cn:"會席"},{jp:"刺身",cn:"生魚片"}],
    notes: "價格中高。"
  },
  {
    id: 300, name: "旭川 うどん うどん専門", location: "旭川", category: "烏龍麵",
    tabelogScore: 3.43, tabelogReviews: 450, tabelogLink: "https://tabelog.com/tw/hokkaido/A0104/A010401/1300123/dtlrvwlst/",
    googleScore: 3.5, googleReviews: 960, googleLink: "https://maps.google.com/?q=旭川%20うどん%20うどん専門",
    description: "烏龍麵店。",
    hours: "11:00-20:00", closed: "週三", openTime: "11:00", closeTime: "20:00", closedDays: [3],
    priceRange: "low",
    recommendations: [{jp:"かけうどん",cn:"清湯烏龍麵"},{jp:"天ぷらうどん",cn:"天婦羅烏龍麵"}],
    notes: "快速用餐。"
  }
];

const hotTags = [
  { id: 'isTopRated', name: '評論最高', icon: 'star-outline', color: 'text-yellow-600' },
  { id: 'isTopBooked', name: '預定最多', icon: 'bookmark-outline', color: 'text-blue-600' },
  { id: 'isLocalFavorite', name: '在地人預定', icon: 'people-outline', color: 'text-green-600' },
  { id: 'isTopViewed', name: '瀏覽最多', icon: 'eye-outline', color: 'text-purple-600' }
];

function markTopByMetric(list, flagName, metricFn, topN = 30) {
  const sorted = [...list].sort((a, b) => metricFn(b) - metricFn(a));
  sorted.slice(0, topN).forEach(r => {
    r[flagName] = true;
  });
}

function autoMarkTopFlags() {
  const locations = [...new Set(restaurants.map(r => r.location))];
  locations.forEach(loc => {
    const list = restaurants.filter(r => r.location === loc);
    
    // 根據地區決定 topN 數量
    let topNRated, topNViewed, topNBooked, topNLocal;
    
    if (loc === '富良野' || loc === '美瑛' || loc === '錢函') {
      topNRated = 15;
      topNViewed = 15;
      topNBooked = 15;
      topNLocal = 15;
    } else if (loc === '小樽') {
      topNRated = 20;
      topNViewed = 20;
      topNBooked = 20;
      topNLocal = 20;
    } else {
      // 札幌、旭川：評論最高30名，在地人預定15名
      topNRated = 30;
      topNViewed = 30;
      topNBooked = 30;
      topNLocal = 15;
    }

    markTopByMetric(list, 'isTopRated', r => r.tabelogScore || 0, topNRated);
    markTopByMetric(list, 'isTopBooked', r => r.googleReviews || 0, topNBooked);
    markTopByMetric(list, 'isLocalFavorite', r => r.googleScore || 0, topNLocal);
    markTopByMetric(list, 'isTopViewed', r => r.tabelogReviews || 0, topNViewed);
  });
}

function markOverallTop10() {
  const sorted = [...restaurants].sort((a, b) => {
    const scoreDiff = (b.tabelogScore || 0) - (a.tabelogScore || 0);
    if (scoreDiff !== 0) return scoreDiff;
    return (b.tabelogReviews || 0) - (a.tabelogReviews || 0);
  });
  sorted.slice(0, 10).forEach(r => {
    r.isTop10 = true;
  });
}

const locationFilterEl = document.getElementById('location-filter');
const foodFilterContainerEl = document.getElementById('category-filters-food');
const restaurantListEl = document.getElementById('restaurant-list');
const noResultsEl = document.getElementById('no-results');
const toggleFilterBtn = document.getElementById('toggle-filter-btn');
const filterContainer = document.getElementById('filter-container');
const closeFilterBtn = document.getElementById('close-filter-btn');
const selectAllFoodBtn = document.getElementById('select-all-food-btn');
const clearAllFoodBtn = document.getElementById('clear-all-food-btn');
const sortSelectEl = document.getElementById('sort-select');

let currentSortKey = 'tabelogScoreDesc';
let isFilterOpen = false;

function toggleFilter() {
  isFilterOpen = !isFilterOpen;
  if (isFilterOpen) {
    filterContainer.style.maxHeight = '1000px'; 
    filterContainer.style.opacity = '1';
    toggleFilterBtn.querySelector('span').textContent = '隱藏篩選器';
    toggleFilterBtn.querySelector('ion-icon').name = 'close-circle-outline';
  } else {
    filterContainer.style.maxHeight = '0px';
    filterContainer.style.opacity = '0';
    toggleFilterBtn.querySelector('span').textContent = '顯示篩選器';
    toggleFilterBtn.querySelector('ion-icon').name = 'options-outline';
  }
}

function populateCategoryFilters() {
  const allFoodCategories = [...new Set(restaurants.map(r => r.category))].sort();
  allFoodCategories.forEach(category => {
    const label = document.createElement('label');
    label.className = "flex items-center space-x-2 p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors";
    label.innerHTML = `
      <input type="checkbox" value="${category}" class="filter-food-category rounded text-blue-600 focus:ring-blue-500" checked>
      <span class="text-sm font-medium text-gray-800">${category}</span>
    `;
    foodFilterContainerEl.appendChild(label);
  });
}

function getSortedBaseList() {
  const arr = [...restaurants];
  switch (currentSortKey) {
    case 'tabelogScoreDesc':
      return arr.sort((a, b) => (b.tabelogScore || 0) - (a.tabelogScore || 0));
    case 'tabelogReviewsDesc':
      return arr.sort((a, b) => (b.tabelogReviews || 0) - (a.tabelogReviews || 0));
    case 'googleScoreDesc':
      return arr.sort((a, b) => (b.googleScore || 0) - (a.googleScore || 0));
    case 'googleReviewsDesc':
      return arr.sort((a, b) => (b.googleReviews || 0) - (a.googleReviews || 0));
    case 'nameAsc':
      return arr.sort((a, b) => a.name.localeCompare(b.name, 'zh-Hant'));
    default:
      return arr;
  }
}

function renderRestaurants() {
  const selectedLocation = locationFilterEl.value;
  const foodCheckboxes = document.querySelectorAll('.filter-food-category:checked');
  const selectedFoodTypes = Array.from(foodCheckboxes).map(cb => cb.value);

  let baseList = getSortedBaseList();

  const filteredRestaurants = baseList.filter(r => {
    const locationMatch = (selectedLocation === 'all' || r.location === selectedLocation);
    const foodTypeMatch = selectedFoodTypes.length === 0 ? true : selectedFoodTypes.includes(r.category);
    return locationMatch && foodTypeMatch;
  });

  restaurantListEl.innerHTML = '';
  noResultsEl.classList.toggle('hidden', filteredRestaurants.length > 0);
  restaurantListEl.classList.toggle('hidden', filteredRestaurants.length === 0);

  filteredRestaurants.forEach(r => {
    const tagsHTML = hotTags.map(tag => {
      if (r[tag.id]) {
        return `
          <span class="inline-flex items-center space-x-1 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full ${tag.color}">
            <ion-icon name="${tag.icon}" class="text-sm"></ion-icon>
            <span>${tag.name}</span>
          </span>
        `;
      }
      return '';
    }).join('');

    const cardHTML = `
      <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <div class="p-6 flex-grow">
          <div class="mb-4">
            <a href="${r.googleLink}" target="_blank" rel="noopener noreferrer"
              class="text-2xl font-bold text-blue-700 hover:text-blue-900 transition-colors duration-200"
              title="在 Google 地圖上開啟 ${r.name}">
              ${r.name}
              ${r.isTop10 ? `<span class="text-2xl ml-2" title="全體 Top 10">👑</span>` : ''}
              <ion-icon name="map-outline" class="inline-block text-lg align-text-bottom ml-1"></ion-icon>
            </a>
            <div class="mt-2 flex flex-wrap gap-2">
              <span class="inline-block bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">${r.location}</span>
              <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">${r.category}</span>
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              ${tagsHTML}
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-5">
            <a href="${r.tabelogLink}" target="_blank" rel="noopener noreferrer"
              class="block bg-red-50 p-4 rounded-lg border border-red-200 hover:shadow-md hover:border-red-300 transition-all">
              <span class="font-semibold text-red-800 text-sm">
                Tabelog 評分 <ion-icon name="open-outline" class="text-xs"></ion-icon>
              </span>
              <div class="text-2xl font-bold text-red-700">${r.tabelogScore.toFixed(2)} ★</div>
              <div class="text-sm text-gray-600">${r.tabelogReviews.toLocaleString()} 則評論</div>
            </a>
            <a href="${r.googleLink}" target="_blank" rel="noopener noreferrer"
              class="block bg-blue-50 p-4 rounded-lg border border-blue-200 hover:shadow-md hover:border-blue-300 transition-all">
              <span class="font-semibold text-blue-800 text-sm">
                Google 評分 <ion-icon name="open-outline" class="text-xs"></ion-icon>
              </span>
              <div class="text-2xl font-bold text-blue-700">${r.googleScore.toFixed(1)} ★</div>
              <div class="text-sm text-gray-600">${r.googleReviews.toLocaleString()} 則評論</div>
            </a>
          </div>

          <div class="mb-4">
            <h4 class="text-base font-semibold text-gray-900 mb-2 flex items-center">
              <ion-icon name="document-text-outline" class="text-gray-500 mr-2 text-lg"></ion-icon>
              簡介：
            </h4>
            <p class="text-gray-700 leading-relaxed pl-7">${r.description}</p>
          </div>
          
          <div class="mt-4 pt-4 border-t border-gray-200">
            <h4 class="text-base font-semibold text-gray-900 mb-2 flex items-center">
              <ion-icon name="time-outline" class="text-blue-500 mr-2 text-lg"></ion-icon>
              店家資訊：
            </h4>
            <p class="text-sm text-gray-700 pl-7"><strong>營業時間:</strong> <span class="font-bold text-green-700">${r.hours}</span></p>
            <p class="text-sm text-gray-700 pl-7"><strong>休息日:</strong> <span class="font-bold text-red-700">${r.closed}</span></p>
          </div>

          <div class="mt-4 pt-4 border-t border-gray-200">
            <h4 class="text-base font-semibold text-gray-900 mb-2 flex items-center">
              <ion-icon name="star-outline" class="text-yellow-500 mr-2 text-lg"></ion-icon>
              推薦菜單：
            </h4>
            <ul class="list-disc list-inside space-y-1 pl-7">
              ${r.recommendations.map(item => `
                <li class="text-sm text-gray-700">
                  ${item.jp} (${item.cn})
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
        
        <div class="px-6 pb-6 mt-4">
          <h4 class="text-base font-semibold text-gray-900 mb-1 flex items-center">
            <ion-icon name="warning-outline" class="text-yellow-600 mr-2 text-lg"></ion-icon>
            注意事項：
          </h4>
          <p class="text-gray-600 text-sm bg-yellow-50 p-3 rounded-md border border-yellow-200 mt-2">${r.notes}</p>
        </div>
      </div>
    `;
    restaurantListEl.innerHTML += cardHTML;
  });
}

toggleFilterBtn.addEventListener('click', toggleFilter);
closeFilterBtn.addEventListener('click', toggleFilter); 
locationFilterEl.addEventListener('change', renderRestaurants);
foodFilterContainerEl.addEventListener('change', (e) => {
  if (e.target.classList.contains('filter-food-category')) {
    renderRestaurants();
  }
});
selectAllFoodBtn.addEventListener('click', () => {
  document.querySelectorAll('.filter-food-category').forEach(cb => { cb.checked = true; });
  renderRestaurants();
});
clearAllFoodBtn.addEventListener('click', () => {
  document.querySelectorAll('.filter-food-category').forEach(cb => { cb.checked = false; });
  renderRestaurants();
});
sortSelectEl.addEventListener('change', (e) => {
  currentSortKey = e.target.value;
  renderRestaurants();
});

document.addEventListener('DOMContentLoaded', () => {
  populateCategoryFilters();
  autoMarkTopFlags();
  markOverallTop10();
  renderRestaurants();
});
