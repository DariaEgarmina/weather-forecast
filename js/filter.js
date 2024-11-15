import { renderBigCards } from './components/render-big-cards.js';
import { getFavoritesCities } from './state/favorite-cities.js';

const weatherCheckboxElements = document.querySelectorAll('input[name="weather-conditions"]');
const checkboxContainer = document.querySelector('.sort-form__group--checkbox');

const filterCityByConditions = (city) => {
  const checkedWeatherConditions = Array.from(weatherCheckboxElements)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  return checkedWeatherConditions.every((value) => city.weather[value]);
};

checkboxContainer.addEventListener('change', () => {
  const filteredCards = getFavoritesCities();
  renderBigCards(filteredCards);
});

export { filterCityByConditions };
