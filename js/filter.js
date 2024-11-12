import { bigCities, renderBigCards } from './render-big-cards.js';

const weatherCheckboxElements = document.querySelectorAll('input[name="weather-conditions"]');
const checkboxContainer = document.querySelector('.sort-form__group--checkbox');

const filterBigCardsData = (city) => {
  const checkedWeatherConditions = Array.from(weatherCheckboxElements)
    .filter((condition) => condition.checked);

  return checkedWeatherConditions.every((condition) => {
    const value = condition.value;
    return city.weather[value] === true;
  });
};

checkboxContainer.addEventListener('change', () => {
  const filteredCards = bigCities.filter((city) => filterBigCardsData(city));

  renderBigCards(filteredCards);
});
