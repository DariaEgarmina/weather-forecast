import { renderSmallCards } from './components/render-small-cards.js';

const searchInputElement = document.querySelector('#search');

let searchValue = '';

const setSearch = (text) => {
  searchValue = text.toLowerCase();
};

const filterCitiesBySearch = (cities) => cities.filter((item) => item.city.toLowerCase().startsWith(searchValue));

searchInputElement.addEventListener('input', (evt) => {
  evt.preventDefault();
  setSearch(evt.target.value);
  renderSmallCards();
});

export { filterCitiesBySearch };
