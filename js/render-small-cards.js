import { cities } from './mock-data.js';

const smallCardsContainer = document.querySelector('.weather-content__small-cards');
const smallCardTemplate = document.querySelector('#small-card').content.querySelector('.small-card');

const createWeatherConditions = (weatherObject) => {
  const fragment = document.createDocumentFragment();

  for (const key in weatherObject) {
    if (weatherObject[key] === true) {
      const weatherConditionElement = document.createElement('span');
      weatherConditionElement.classList.add('icon');
      weatherConditionElement.classList.add(`icon--${key}`);
      fragment.append(weatherConditionElement);
    }
  }

  return fragment;
};

const createSmallCardElement = (city) => {
  const smallCardElement = smallCardTemplate.cloneNode(true);

  smallCardElement.querySelector('.small-card__city').textContent = city.city;
  smallCardElement.querySelector('.small-card__temperature').textContent = city.temperature;

  smallCardElement.querySelector('.big-card__wind-info').textContent =
  `Ветер ${city.wind.direction}, ${city.wind.speed} м/с`;

  const weatherConditions = createWeatherConditions(city.weather);
  smallCardElement.querySelector('.big-card__weather-conditions').innerHTML = '';
  smallCardElement.querySelector('.big-card__weather-conditions').append(weatherConditions);

  return smallCardElement;
};

const renderSmallCards = (citiesArray) => {
  const fragment = document.createDocumentFragment();

  const sortedCities = citiesArray.sort((a, b) => a.city > b.city ? 1 : -1);

  sortedCities.forEach((city) => {
    const smallCardElement = createSmallCardElement(city);
    fragment.append(smallCardElement);
  });

  smallCardsContainer.innerHTML = '';
  smallCardsContainer.append(fragment);
};

renderSmallCards(cities.cities);

export { smallCardsContainer, smallCardTemplate, createWeatherConditions };
