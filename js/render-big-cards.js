import { bigCardTemplate } from './change-card-type.js';
import { createWeatherConditions } from './render-small-cards.js';
import { createTemperature } from './create-temperature.js';

const bigCities = [
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
];

const bigCardsContainer = document.querySelector('.weather-content__big-cards');

const createBigCardElement = (city) => {
  const bigCardElement = bigCardTemplate.cloneNode(true);

  bigCardElement.querySelector('.big-card__city').textContent = city.city;

  const weatherConditions = createWeatherConditions(city.weather);
  bigCardElement.querySelector('.big-card__weather-conditions').innerHTML = '';
  bigCardElement.querySelector('.big-card__weather-conditions').append(weatherConditions);

  bigCardElement.querySelector('.big-card__wind-info').textContent = `Ветер ${city.wind.direction}, ${city.wind.speed} м/с`;

  const temperature = createTemperature(city.temperature);
  bigCardElement.querySelector('.big-card__temperature').textContent = temperature;

  return bigCardElement;
};

const renderBigCards = (cities) => {
  const fragment = document.createDocumentFragment();

  cities.forEach((city) => {
    const bigCardElement = createBigCardElement(city);
    fragment.append(bigCardElement);
  });

  bigCardsContainer.innerHTML = '';
  bigCardsContainer.append(fragment);
};

renderBigCards(bigCities);

export { bigCities, renderBigCards };
