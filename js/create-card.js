import { setTemperatureValue } from './temperature.js';
import { setWeatherConditions, setWindValues } from './weather-conditions.js';

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

  card.city = cityElement.querySelector(`.${selector}__city`).textContent;
  card.coordinates.latitude = cityElement.querySelector('.latitude').textContent;
  card.coordinates.longitude = cityElement.querySelector('.longitude').textContent;
  setWeatherConditions(card.weather, cityElement);
  const temperatureValue = setTemperatureValue(cityElement, `.${selector}__temperature`);
  card.temperature = temperatureValue;
  setWindValues(card.wind, cityElement);

  return card;
};

export { createCard };
