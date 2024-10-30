import { cities } from './mock-data.js';

const smallCardsContainer = document.querySelector('.weather-content__small-cards');
const smallCardTemplate = document.querySelector('#small-card').content.querySelector('.small-card');

const createSmallCardElement = (city) => {
  const smallCardElement = smallCardTemplate.cloneNode(true);

  smallCardElement.querySelector('.small-card__city').textContent = city.city;
  smallCardElement.querySelector('.small-card__temperature').textContent = city.temperature;

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

export { smallCardsContainer, smallCardTemplate };
