const CITIES = [
  {
    'city': 'Москва',
    'coordinates': {
      'latitude': 55.751244,
      'longitude': 37.618423
    },
    'weather': {
      'sunny': false,
      'cloudy': true,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 16,
    'wind': {
      'direction': 'В',
      'speed': '1-3'
    }
  },
  {
    'city': 'Белушья Губа',
    'coordinates': {
      'latitude': 71.538956,
      'longitude': 52.336241
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 8,
    'wind': {
      'direction': 'ЮЗ',
      'speed': '4-8'
    }
  },
  {
    'city': 'Астрахань',
    'coordinates': {
      'latitude': 46.358803,
      'longitude': 48.059937
    },
    'weather': {
      'sunny': true,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 31,
    'wind': {
      'direction': 'ЮЗ',
      'speed': '1-2'
    }
  },
  {
    'city': 'Брянск',
    'coordinates': {
      'latitude': 53.252091,
      'longitude': 34.371671
    },
    'weather': {
      'sunny': true,
      'cloudy': true,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 19,
    'wind': {
      'direction': 'С',
      'speed': '4-8'
    }
  },
  {
    'city': 'Грозный',
    'coordinates': {
      'latitude': 43.316879,
      'longitude': 45.681485
    },
    'weather': {
      'sunny': false,
      'cloudy': true,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 26,
    'wind': {
      'direction': 'ЮВ',
      'speed': '2-4'
    }
  },
  {
    'city': 'Чебоксары',
    'coordinates': {
      'latitude': 56.145748,
      'longitude': 47.252178
    },
    'weather': {
      'sunny': false,
      'cloudy': true,
      'snowy': false,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 17,
    'wind': {
      'direction': 'Ю',
      'speed': '2-6'
    }
  },
  {
    'city': 'Махачкала',
    'coordinates': {
      'latitude': 42.983024,
      'longitude': 47.504871
    },
    'weather': {
      'sunny': true,
      'cloudy': true,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 30,
    'wind': {
      'direction': 'СВ',
      'speed': '5-10'
    }
  },
  {
    'city': 'Калининград',
    'coordinates': {
      'latitude': 54.710426,
      'longitude': 20.452213
    },
    'weather': {
      'sunny': false,
      'cloudy': true,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 20,
    'wind': {
      'direction': 'В',
      'speed': '4-7'
    }
  },
  {
    'city': 'Элиста',
    'coordinates': {
      'latitude': 46.315487,
      'longitude': 44.279401
    },
    'weather': {
      'sunny': false,
      'cloudy': true,
      'snowy': false,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 22,
    'wind': {
      'direction': 'СВ',
      'speed': '5-9'
    }
  },
  {
    'city': 'Сыктывкар',
    'coordinates': {
      'latitude': 61.647851,
      'longitude': 50.833904
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 11,
    'wind': {
      'direction': 'С',
      'speed': '2-5'
    }
  },
  {
    'city': 'Нью-Йорк',
    'coordinates': {
      'latitude': 40.712728,
      'longitude': -74.006015
    },
    'weather': {
      'sunny': true,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 15,
    'wind': {
      'direction': 'З',
      'speed': '4-7'
    }
  },
  {
    'city': 'Оттава',
    'coordinates': {
      'latitude': 45.421106,
      'longitude': -75.690308
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': true,
      'stormy': true
    },
    'temperature': -16,
    'wind': {
      'direction': 'C',
      'speed': '17-19'
    }
  },
  {
    'city': 'Челябинск',
    'coordinates': {
      'latitude': 55.159841,
      'longitude': 61.402554
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': true,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 13,
    'wind': {
      'direction': 'В',
      'speed': '6-8'
    }
  },
  {
    'city': 'Барроу',
    'coordinates': {
      'latitude': 46.865971,
      'longitude': 0.771783
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': true,
      'stormy': false
    },
    'temperature': -53,
    'wind': {
      'direction': 'CЗ',
      'speed': '11-13'
    }
  },
  {
    'city': 'Дублин',
    'coordinates': {
      'latitude': 53.349764,
      'longitude': -6.260273
    },
    'weather': {
      'sunny': false,
      'cloudy': true,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': true
    },
    'temperature': 11,
    'wind': {
      'direction': 'З',
      'speed': '14-18'
    }
  },
  {
    'city': 'Лондон',
    'coordinates': {
      'latitude': 51.507321,
      'longitude': -0.127647
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 1,
    'wind': {
      'direction': 'ЮВ',
      'speed': '3-7'
    }
  },
  {
    'city': 'Детроит',
    'coordinates': {
      'latitude': 42.331551,
      'longitude': -83.046641
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': true
    },
    'temperature': 9,
    'wind': {
      'direction': 'В',
      'speed': '16-20'
    }
  },
  {
    'city': 'Майами',
    'coordinates': {
      'latitude': 25.774265,
      'longitude': -80.193658
    },
    'weather': {
      'sunny': true,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 35,
    'wind': {
      'direction': 'Штиль',
      'speed': '0'
    }
  },
  {
    'city': 'Ташкент',
    'coordinates': {
      'latitude': 41.312336,
      'longitude': 69.278707
    },
    'weather': {
      'sunny': true,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 37,
    'wind': {
      'direction': 'Штиль',
      'speed': '0'
    }
  },
  {
    'city': 'Сидней',
    'coordinates': {
      'latitude': -33.854815,
      'longitude': 151.216453
    },
    'weather': {
      'sunny': false,
      'cloudy': true,
      'snowy': false,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 9,
    'wind': {
      'direction': 'В',
      'speed': '7-10'
    }
  },
  {
    'city': 'Варшава',
    'coordinates': {
      'latitude': 52.231958,
      'longitude': 21.006724
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': true
    },
    'temperature': 5,
    'wind': {
      'direction': 'Ю',
      'speed': '15-20'
    }
  },
  {
    'city': 'Токио',
    'coordinates': {
      'latitude': 35.682838,
      'longitude': 139.759454
    },
    'weather': {
      'sunny': false,
      'cloudy': true,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': true
    },
    'temperature': 13,
    'wind': {
      'direction': 'СЗ',
      'speed': '14-17'
    }
  },
  {
    'city': 'Умиэт',
    'coordinates': {
      'latitude': 50.282749,
      'longitude': 45.341461
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': true,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 12,
    'wind': {
      'direction': 'СЗ',
      'speed': '4-7'
    }
  },
  {
    'city': 'Берлин',
    'coordinates': {
      'latitude': 52.517036,
      'longitude': 13.388859
    },
    'weather': {
      'sunny': true,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 10,
    'wind': {
      'direction': 'С',
      'speed': '1-4'
    }
  },
  {
    'city': 'Красноярск',
    'coordinates': {
      'latitude': 56.009096,
      'longitude': 92.872514
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': true
    },
    'temperature': 7,
    'wind': {
      'direction': 'С',
      'speed': '17-22'
    }
  },
  {
    'city': 'Париж',
    'coordinates': {
      'latitude': 48.856696,
      'longitude': 2.351461
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': true,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 0,
    'wind': {
      'direction': 'СВ',
      'speed': '3-6'
    }
  },
  {
    'city': 'Проспект-Крик',
    'coordinates': {
      'latitude': 59.960461,
      'longitude': 30.297443
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': true,
      'metorite': false,
      'rainy': false,
      'blizzard': true,
      'stormy': false
    },
    'temperature': -33,
    'wind': {
      'direction': 'C',
      'speed': '14-17'
    }
  },
  {
    'city': 'Хьюстон',
    'coordinates': {
      'latitude': 29.758938,
      'longitude': -95.367697
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': true,
      'rainy': false,
      'blizzard': true,
      'stormy': false
    },
    'temperature': 25,
    'wind': {
      'direction': 'ЮЗ',
      'speed': '12-14'
    }
  },
  {
    'city': 'Иерусалим',
    'coordinates': {
      'latitude': 31.778345,
      'longitude': 35.225078
    },
    'weather': {
      'sunny': true,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': true
    },
    'temperature': 17,
    'wind': {
      'direction': 'Ю',
      'speed': '15-19'
    }
  },
  {
    'city': 'Рио де Жанейро',
    'coordinates': {
      'latitude': -22.911013,
      'longitude': -43.209372
    },
    'weather': {
      'sunny': true,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 30,
    'wind': {
      'direction': 'ЮВ',
      'speed': '2-4'
    }
  },
  {
    'city': 'Рим',
    'coordinates': {
      'latitude': 41.893321,
      'longitude': 12.482932
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': true
    },
    'temperature': 12,
    'wind': {
      'direction': 'В',
      'speed': '15-19'
    }
  },
  {
    'city': 'Осло',
    'coordinates': {
      'latitude': 59.913331,
      'longitude': 10.738971
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': true,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': -10,
    'wind': {
      'direction': 'С',
      'speed': '10-12'
    }
  },
  {
    'city': 'Франкфурт',
    'coordinates': {
      'latitude': 50.110644,
      'longitude': 8.682091
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': true,
      'stormy': false
    },
    'temperature': -23,
    'wind': {
      'direction': 'CВ',
      'speed': '13-15'
    }
  },
  {
    'city': 'Санкт-Петербург',
    'coordinates': {
      'latitude': 59.938732,
      'longitude': 30.316229
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': true,
      'blizzard': false,
      'stormy': false
    },
    'temperature': 15,
    'wind': {
      'direction': 'В',
      'speed': '3-8'
    }
  },
  {
    'city': 'Якутск',
    'coordinates': {
      'latitude': 62.027287,
      'longitude': 129.732086
    },
    'weather': {
      'sunny': false,
      'cloudy': true,
      'snowy': true,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': -24,
    'wind': {
      'direction': 'СЗ',
      'speed': '4-8'
    }
  }
];

export { CITIES };
