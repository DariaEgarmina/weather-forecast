import { bigCities, renderBigCards } from './render-big-cards.js';

const weatherCheckboxElements = document.querySelectorAll('input[name="weather-conditions"]');
const checkboxContainer = document.querySelector('.sort-form__group--checkbox');

const filterBigCardsData = (city) => {
  const checkedWeatherConditions = Array.from(weatherCheckboxElements)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  return checkedWeatherConditions.every((value) => city.weather[value]);
};

checkboxContainer.addEventListener('change', () => {
  const filteredCards = bigCities.filter((city) => filterBigCardsData(city));

  renderBigCards(filteredCards);
});
