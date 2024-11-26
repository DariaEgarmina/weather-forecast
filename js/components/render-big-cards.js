import { favoritesCities } from '../state/favorite-cities.js';
import { createWeatherConditionElements } from '../weather-conditions.js';
import { createTemperature } from '../temperature.js';
import { getCityId } from '../utils.js';

const bigCardsContainer = document.querySelector('.weather-content__big-cards');
const bigCardTemplate = document.querySelector('#big-card').content.querySelector('.big-card');

const createBigCardElement = (city) => {
  const bigCardElement = bigCardTemplate.cloneNode(true);

  bigCardElement.classList.add('card');

  bigCardElement.querySelector('.big-card__city').textContent = city.city;

  const weatherConditions = createWeatherConditionElements(city.weather);
  bigCardElement.querySelector('.big-card__weather-conditions').innerHTML = '';
  bigCardElement.querySelector('.big-card__weather-conditions').append(weatherConditions);

  bigCardElement.querySelector('.big-card__wind-info').textContent = `Ветер ${city.wind.direction}, ${city.wind.speed} м/с`;

  const temperature = createTemperature(city.temperature);
  bigCardElement.querySelector('.big-card__temperature').textContent = temperature;

  bigCardElement.querySelector('.latitude').textContent = city.coordinates.latitude;
  bigCardElement.querySelector('.longitude').textContent = city.coordinates.longitude;

  bigCardElement.id = getCityId(city.city);

  bigCardElement.draggable = true;

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

renderBigCards(favoritesCities);

export { renderBigCards, bigCardsContainer };
