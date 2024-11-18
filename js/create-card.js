//import { createTemperatureSmallCard } from './create-temperature.js';
import { setWeatherConditions } from './create-weather-conditions.js';

const createCard = (cityElement, selector) => {
  const card = {
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

  card.city = cityElement.querySelector(selector).textContent;
  setWeatherConditions(card.weather, cityElement);

  return card;
};

export { createCard };
