

import { DayItinerary, Spot } from './types';

export const INITIAL_ITINERARY: DayItinerary[] = [
  {
    day: 1,
    date: '12/23 (二)',
    title: '提早抵達！札幌購物樂',
    colorTheme: 'hokkaido',
    weather: '☁️ -2°C',
    items: [
      { 
        time: '12:00 - 13:00', 
        title: '班機抵達 (FD232)', 
        description: '',
        location: '新千歲機場 (CTS)',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=新千歲機場',
        links: [
             { label: '入境審查 QR Code', url: 'https://www.vjw.digital.go.jp/' },
        ]
      },
      { 
        time: '13:00 - 14:00', 
        title: 'JR 快速列車移動至札幌車站', 
        description: '',
        location: 'JR 札幌車站',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR札幌駅',
        transportParams: { dep: '新千歳空港', arr: '札幌', year: 2025, month: 12, day: 23, hour: 13, minute: 0 }
      },
      { 
        time: '14:00 - 18:00', 
        title: '札幌車站周邊大購物', 
        description: '',
        location: '札幌車站周邊',
        links: [
            { label: 'Bic Camera 札幌', url: 'https://www.google.com/maps/search/?api=1&query=Bic+Camera+Sapporo' },
            { label: 'ABC-MART 東急百貨', url: 'https://www.google.com/maps/search/?api=1&query=ABC-MART+Grand+Stage+Sapporo+Tokyu' },
            { label: 'Bic Camera 折價券', url: 'https://www.cathay-cube.com.tw/content/dam/cub-aem-cs/Image/Personal/overview/credit-card/國內外旅遊/202608%20Bic%20Camera.jpg' }
        ]
      },
      { 
        time: '18:00 - 20:30', 
        title: '札幌晚餐 + 貍小路亂晃', 
        description: '',
        location: '貍小路商店街',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=狸小路商店街'
      },
      { 
        time: '20:30 - 22:00', 
        title: 'JR 特急往旭川，入住飯店', 
        description: '',
        location: '旭川 Ys Hotel',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=旭川+Ys+Hotel',
        transportParams: { dep: '札幌', arr: '旭川', year: 2025, month: 12, day: 23, hour: 20, minute: 30 }
      },
    ],
    highlightTitle: '本日重點',
    highlightPoints: [
      '今天是 JR Pass 8日券 的啟用日！',
      'JR 車站英文：New Chitose Airport (新千歲空港) ➜ Sapporo (札幌) ➜ Asahikawa (旭川)',
      '札幌往旭川的末班特急 (特急ライラック) 約在 22:00 發車，請務必在此之前結束購物並上車。'
    ]
  },
  {
    day: 2,
    date: '12/24 (三)',
    title: '美瑛市區閒晃',
    colorTheme: 'blue',
    weather: '🌨️ -5°C',
    items: [
      { 
        time: '09:00 - 10:30', 
        title: 'JR 富良野線移動至美瑛站', 
        description: '',
        location: 'JR 美瑛車站',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR美瑛車站',
        transportParams: { dep: '旭川', arr: '美瑛', year: 2025, month: 12, day: 24, hour: 9, minute: 0 }
      },
      { 
        time: '10:30 - 17:00', 
        title: '美瑛市區閒晃', 
        description: '車站前商店街、當地商家午餐。',
        location: '美瑛町市區',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=美瑛町市區'
      },
      { 
        time: '17:00 - 20:00', 
        title: '搭乘 JR 返回旭川，晚餐', 
        description: '',
        location: 'JR 旭川車站',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR旭川車站',
        transportParams: { dep: '美瑛', arr: '旭川', year: 2025, month: 12, day: 24, hour: 17, minute: 0 }
      },
    ],
    highlightTitle: '本日重點 (美瑛)',
    highlightPoints: [
      'JR 車站英文：Asahikawa (旭川) ↔ Biei (美瑛)',
      '美食推薦：車站附近有「洋食や純平」(炸蝦飯) 非常有名 (週一常公休)。',
      '景點推薦：市區可步行至「北西之丘展望公園」或「四季情報館」 (冬季可能縮短營業)。',
      '交通提醒：JR 富良野線班次稀少，請務必先查好回程時間。'
    ]
  },
  {
    day: 3,
    date: '12/25 (四)',
    title: '富良野市區閒晃',
    colorTheme: 'blue',
    weather: '❄️ -8°C',
    items: [
      { 
        time: '09:00 - 10:30', 
        title: 'JR 富良野線移動至富良野站', 
        description: '',
        location: 'JR 富良野車站',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR富良野車站',
        transportParams: { dep: '旭川', arr: '富良野', year: 2025, month: 12, day: 25, hour: 9, minute: 0 }
      },
      { 
        time: '10:30 - 17:00', 
        title: '富良野市區閒晃', 
        description: '車站周邊',
        location: '富良野市區',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR富良野車站'
      },
      { 
        time: '17:00 - 20:00', 
        title: 'JR 返回旭川，晚餐 (推薦旭川拉麵)', 
        description: '',
        location: 'JR 旭川車站',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR旭川車站',
        transportParams: { dep: '富良野', arr: '旭川', year: 2025, month: 12, day: 25, hour: 17, minute: 0 }
      },
    ],
    highlightTitle: '本日重點 (富良野)',
    highlightPoints: [
      'JR 車站英文：Asahikawa (旭川) ↔ Furano (富良野)',
      '美食推薦：車站附近的「唯我獨尊」(咖哩蛋包飯) 是必吃名店。',
      '景點推薦：市區的「富良野 Marche」(物產中心) 有超多伴手禮和在地小吃。',
      '交通提醒：往返「部分班次」需在「美瑛站」轉車，請留意查詢結果。'
    ]
  },
  {
    day: 4,
    date: '12/26 (五)',
    title: '旭川市區閒晃',
    colorTheme: 'blue',
    weather: '⛅ -4°C',
    items: [
      { 
        time: '全天', 
        title: '旭川逛街', 
        description: '',
        location: '旭川市區',
        links: [
            { label: '平和通買物公園', url: 'https://www.google.com/maps/search/?api=1&query=平和通買物公園' },
            { label: 'AEON Mall 旭川站前', url: 'https://www.google.com/maps/search/?api=1&query=AEON+Mall+Asahikawa+Ekimae' },
            { label: '旭川拉麵村', url: 'https://www.google.com/maps/search/?api=1&query=Asahikawa+Ramen+Village' }
        ]
      }
    ],
    highlightTitle: '本日重點 (旭川)',
    highlightPoints: [
      '美食推薦：必吃「旭川醬油拉麵」(推薦：山頭火、青葉)，或是「成吉思汗大黑屋」烤肉。',
      '景點/公園：車站前的「平和通買物公園」很好逛；時間多可散步至「常磐公園」。'
    ]
  },
  {
    day: 5,
    date: '12/27 (六)',
    title: '轉移至札幌與市區閒晃',
    colorTheme: 'hokkaido',
    weather: '🌨️ -3°C',
    items: [
      { 
        time: '11:00 - 14:00', 
        title: '退房 > JR 特急移動至札幌 > 札幌車站午餐', 
        description: '',
        location: 'JR 札幌車站',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR札幌駅',
        transportParams: { dep: '旭川', arr: '札幌', year: 2025, month: 12, day: 27, hour: 11, minute: 0 }
      },
      { 
        time: '14:00 - 15:00', 
        title: 'R&B Hotel 辦理入住與放行李', 
        description: '',
        location: 'R&B Hotel 札幌北3西2',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=ワシントンR＆Bホテル札幌北3西2'
      },
      { 
        time: '15:00 - 18:00', 
        title: '大通公園、札幌電視塔、地下街購物閒晃', 
        description: '',
        location: '札幌電視塔',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=札幌電視塔'
      },
      { 
        time: '18:00 - 22:00', 
        title: '市區晚餐/消夜 > JR塔展望室T38看夜景', 
        description: '',
        location: 'JR塔展望室T38',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR塔展望室T38'
      }
    ],
    highlightTitle: '本日重點 (札幌移動)',
    highlightPoints: [
      'JR 車站英文：Asahikawa (旭川) ➜ Sapporo (札幌)',
      '移動日！請在 11:00 準時於旭川 Ys Hotel 退房。',
      '札幌 R&B Hotel 通常在 15:00 後才能辦理入住 (可先寄放行李)。',
      'JR 塔 T38 是看札幌夜景最方便的地點 (就在車站樓上)，建議傍晚上去。'
    ]
  },
  {
    day: 6,
    date: '12/28 (日)',
    title: '富良野美瑛一日夜遊',
    colorTheme: 'blue',
    weather: '❄️ -6°C',
    items: [
      { 
        time: '11:50 - 22:00', 
        title: '富良野美瑛一日夜遊 (觀光團行程)', 
        description: '11:50 集合出發，預計 22:00 返回札幌。',
        location: '富良野美瑛地區',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=富良野美瑛地區'
      }
    ],
    highlightTitle: '本日重點',
    highlightPoints: [
      '觀光團日，請務必在 11:50 前抵達集合地點。',
      '這是長途巴士行程，預計 22:00 才會返回札幌，晚餐時間可能較晚。'
    ]
  },
  {
    day: 7,
    date: '12/29 (一)',
    title: '錢函與小樽運河點燈',
    colorTheme: 'blue',
    weather: '☁️ -4°C',
    items: [
      { 
        time: '09:00 - 11:30', 
        title: 'JR 往小樽方向，中途在 錢函 下車亂晃', 
        description: '',
        location: 'JR 錢函車站',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR錢函車站',
        transportParams: { dep: '札幌', arr: '銭函', year: 2025, month: 12, day: 29, hour: 9, minute: 0 }
      },
      { 
        time: '11:30 - 12:00', 
        title: '移動至小樽', 
        description: '',
        location: 'JR 小樽車站',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR小樽車站',
        transportParams: { dep: '銭函', arr: '小樽', year: 2025, month: 12, day: 29, hour: 11, minute: 30 }
      },
      { 
        time: '12:00 - 19:30', 
        title: '堺町通商店街午餐/甜點 (LeTAO) > 欣賞運河點燈', 
        description: '',
        location: '小樽運河',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=小樽運河'
      },
      { 
        time: '19:30 - 20:30', 
        title: 'JR 快速列車返回札幌', 
        description: '',
        location: 'JR 小樽車站',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR小樽車站',
        transportParams: { dep: '小樽', arr: '札幌', year: 2025, month: 12, day: 29, hour: 19, minute: 30 }
      }
    ],
    highlightTitle: '本日重點',
    highlightPoints: [
      'JR 車站英文：Sapporo (札幌) ➜ Zenibako (錢函) ➜ Otaru (小樽)',
      '冬季小樽日落非常早 (約 16:00 左右)。',
      '堺町通商店街店家約在 18:00 就會關門，建議先逛街、吃甜點，傍晚再去運河看點燈。'
    ]
  },
  {
    day: 8,
    date: '12/30 (二)',
    title: '札幌市區經典 (Pass 最後一天)',
    colorTheme: 'blue',
    weather: '☀️ -3°C',
    items: [
      { 
        time: '09:00 - 13:00', 
        title: '早市海鮮 & 文青散策', 
        description: '',
        location: '圓山公園周邊',
        links: [
            { label: '札幌場外市場', url: 'https://www.google.com/maps/search/?api=1&query=札幌場外市場' },
            { label: '森彥咖啡本店', url: 'https://www.google.com/maps/search/?api=1&query=森彥咖啡本店' },
            { label: '圓山公園', url: 'https://www.google.com/maps/search/?api=1&query=圓山公園' },
            { label: '北海道神宮', url: 'https://www.google.com/maps/search/?api=1&query=北海道神宮' }
        ]
      },
      { 
        time: '14:00 - 17:00', 
        title: '返回市中心，逛大通公園及周邊 (聖誕燈飾)', 
        description: '',
        location: '大通公園',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=大通公園'
      },
      { 
        time: '17:00 - 21:00', 
        title: '札幌夜景：搭乘市電前往藻岩山看夜景', 
        description: '日本新三大夜景',
        location: '藻岩山 (Mt. Moiwa)',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=藻岩山'
      }
    ],
    highlightTitle: '本日重點',
    highlightPoints: [
      '今天是 JR Pass 8日券的最後一天！(本日行程多為地鐵/市電)',
      '藻岩山夜景：建議在日落前 1 小時 (約 15:00-15:30) 從市區搭乘「市電」出發 (總車程+纜車約 1 小時)，才能同時看到日景、日落和夜景。'
    ]
  },
  {
    day: 9,
    date: '12/31 (三)',
    title: '跨年夜閒晃',
    colorTheme: 'hokkaido',
    weather: '🌨️ -5°C',
    items: [
      { 
        time: '全天', 
        title: '市區亂晃：札幌站周邊百貨公司', 
        description: '跨年夜晚餐',
        location: '札幌站周邊',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=札幌駅'
      }
    ],
    highlightTitle: '本日重點',
    highlightPoints: [
      '跨年夜 (12/31)：百貨公司及多數店家會提早至 18:00 左右關門。',
      '請提早完成購物，並確認跨年夜晚餐的營業時間。'
    ]
  },
  {
    day: 10,
    date: '1/1 (四)',
    title: '返程日',
    colorTheme: 'hokkaido',
    weather: '⛅ -4°C',
    items: [
      { 
        time: '10:00 - 12:00', 
        title: '10:00 退房 > JR 快速列車移動至新千歲機場', 
        description: '',
        location: 'JR 札幌車站',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=JR札幌車站',
        transportParams: { dep: '札幌', arr: '新千歳空港', year: 2026, month: 1, day: 1, hour: 11, minute: 0 }
      },
      { 
        time: '12:00 - 16:00', 
        title: 'Outlet 購物：三井Outlet Park 札幌北廣島', 
        description: '',
        location: '三井Outlet Park',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=三井Outlet+Park+札幌北廣島'
      },
      { 
        time: '16:00 - 17:00', 
        title: '返回新千歲機場，準備辦理登機手續 (TR893)', 
        description: '',
        location: '新千歲機場 (CTS)',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=新千歲機場'
      }
    ],
    highlightTitle: '本日重點',
    highlightPoints: [
      'JR 車站英文：Sapporo (札幌) ➜ New Chitose Airport (新千歲空港)',
      '新年 (1/1)：Outlet 通常 10:00 才開門 (福袋日人潮眾多)。',
      'Outlet 交通：需搭乘 JR 至「北廣島站」，再轉乘巴士 (約 25 分鐘)；或從新千歲機場搭乘直達巴士。'
    ]
  }
];

export const INITIAL_FOODS: Spot[] = [
  { id: 'f1', name: 'Suage+ 湯咖哩', description: '札幌必吃湯咖哩名店，串燒特別好吃。', imageUrl: 'https://picsum.photos/400/300?random=1', type: 'food', location: 'Sapporo', rating: 4.5, priceLevel: '$$' },
  { id: 'f2', name: '滝波食堂', description: '小樽三角市場內，超豪華海鮮丼。', imageUrl: 'https://picsum.photos/400/300?random=2', type: 'food', location: 'Otaru', rating: 4.8, priceLevel: '$$$' },
  { id: 'f3', name: '幸運小丑漢堡', description: '函館限定，Chinese Chicken Burger 是招牌。', imageUrl: 'https://picsum.photos/400/300?random=3', type: 'food', location: 'Hakodate', rating: 4.6, priceLevel: '$' },
  { id: 'f4', name: 'LeTAO 本店', description: '小樽洋菓子舖，雙層乳酪蛋糕必點。', imageUrl: 'https://picsum.photos/400/300?random=4', type: 'food', location: 'Otaru', rating: 4.7, priceLevel: '$$' },
];

export const INITIAL_ATTRACTIONS: Spot[] = [
  { id: 'a1', name: '函館山', description: '世界三大夜景之一，搭乘纜車上山。', imageUrl: 'https://picsum.photos/400/300?random=5', type: 'attraction', location: 'Hakodate', rating: 4.9 },
  { id: 'a2', name: '小樽運河', description: '夜晚點燈後非常浪漫，適合散步。', imageUrl: 'https://picsum.photos/400/300?random=6', type: 'attraction', location: 'Otaru', rating: 4.5 },
  { id: 'a3', name: '旭山動物園', description: '冬季有著名的企鵝散步活動。', imageUrl: 'https://picsum.photos/400/300?random=7', type: 'attraction', location: 'Asahikawa', rating: 4.8 },
];