import { createTemperatureSmallCard } from './create-temperature.js';

const bigCities = [];

const createBigCardObject = (evt) => {
  const card = evt.target;

  const bigCardObject = {
    'city': '',
    'coordinates': {
      'latitude': NaN,
      'longitude': NaN
    },
    'weather': {
      'sunny': false,
      'cloudy': false,
      'snowy': false,
      'metorite': false,
      'rainy': false,
      'blizzard': false,
      'stormy': false
    },
    'temperature': NaN,
    'wind': {
      'direction': '',
      'speed': ''
    }
  };

  bigCardObject.city = card.querySelector('.big-card__city').textContent;

  const temperature = createTemperatureSmallCard(card, '.big-card__temperature');
  bigCardObject.temperature = Number(temperature);

  return bigCardObject;
};

const addObject = (evt) => {
  const newObject = createBigCardObject(evt);

  bigCities.push(newObject);
};

export { addObject };
