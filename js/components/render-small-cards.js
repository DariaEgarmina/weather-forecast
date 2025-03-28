import { getCitiesForSmallCardList } from '../state/cities.js';
import { createWeatherConditionElements } from '../weather-conditions.js';
import { getCityId } from '../utils.js';

const smallCardsContainer = document.querySelector('.weather-content__small-cards');
const smallCardTemplate = document.querySelector('#small-card').content.querySelector('.small-card');

const createSmallCardElement = (city) => {
  const smallCardElement = smallCardTemplate.cloneNode(true);

  smallCardElement.classList.add('card');

  smallCardElement.querySelector('.small-card__city').textContent = city.city;
  smallCardElement.querySelector('.small-card__temperature').textContent = city.temperature;

  smallCardElement.querySelector('.big-card__wind-info').textContent =
    `Ветер ${city.wind.direction}, ${city.wind.speed} м/с`;

  const weatherConditions = createWeatherConditionElements(city.weather);
  smallCardElement.querySelector('.big-card__weather-conditions').innerHTML = '';
  smallCardElement.querySelector('.big-card__weather-conditions').append(weatherConditions);

  smallCardElement.querySelector('.latitude').textContent = city.coordinates.latitude;
  smallCardElement.querySelector('.longitude').textContent = city.coordinates.longitude;

  smallCardElement.id = getCityId(city.city);

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

export { renderSmallCards };
