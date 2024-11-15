import { getFavoritesCities } from '../state/favorite-cities.js';
import { createWeatherConditions } from '../create-weather-conditions.js';
import { createTemperature } from '../create-temperature.js';

const bigCardsContainer = document.querySelector('.weather-content__big-cards');
const bigCardTemplate = document.querySelector('#big-card').content.querySelector('.big-card');

const createBigCardElement = (city) => {
  const bigCardElement = bigCardTemplate.cloneNode(true);

  bigCardElement.querySelector('.big-card__city').textContent = city.city;

  const weatherConditions = createWeatherConditions(city.weather);
  bigCardElement.querySelector('.big-card__weather-conditions').innerHTML = '';
  bigCardElement.querySelector('.big-card__weather-conditions').append(weatherConditions);

  bigCardElement.querySelector('.big-card__wind-info').textContent = `Ветер ${city.wind.direction}, ${city.wind.speed} м/с`;

  const temperature = createTemperature(city.temperature);
  bigCardElement.querySelector('.big-card__temperature').textContent = temperature;

  bigCardElement.id = city.city.replaceAll(' ', '-');

  return bigCardElement;
};

const renderBigCards = () => {
  const fragment = document.createDocumentFragment();

  getFavoritesCities().forEach((city) => {
    const bigCardElement = createBigCardElement(city);
    fragment.append(bigCardElement);
  });

  bigCardsContainer.innerHTML = '';
  bigCardsContainer.append(fragment);
};

renderBigCards();

export { renderBigCards };