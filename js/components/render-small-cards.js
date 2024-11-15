import { getCitiesForSmallCardList } from '../state/cities.js';
import { createWeatherConditions } from '../create-weather-conditions.js';

const smallCardsContainer = document.querySelector('.weather-content__small-cards');
const smallCardTemplate = document.querySelector('#small-card').content.querySelector('.small-card');

const createSmallCardElement = (city) => {
  const smallCardElement = smallCardTemplate.cloneNode(true);

  smallCardElement.querySelector('.small-card__city').textContent = city.city;
  smallCardElement.querySelector('.small-card__temperature').textContent = city.temperature;

  smallCardElement.querySelector('.big-card__wind-info').textContent =
    `Ветер ${city.wind.direction}, ${city.wind.speed} м/с`;

  const weatherConditions = createWeatherConditions(city.weather);
  smallCardElement.querySelector('.big-card__weather-conditions').innerHTML = '';
  smallCardElement.querySelector('.big-card__weather-conditions').append(weatherConditions);

  smallCardElement.id = city.city.replaceAll(' ', '-');

  smallCardElement.draggable = true;

  return smallCardElement;
};

const renderSmallCards = () => {
  const fragment = document.createDocumentFragment();

  getCitiesForSmallCardList().forEach((city) => {
    const smallCardElement = createSmallCardElement(city);
    fragment.append(smallCardElement);
  });

  smallCardsContainer.innerHTML = '';
  smallCardsContainer.append(fragment);
};

renderSmallCards();

export { renderSmallCards };
