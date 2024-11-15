import { renderSmallCards } from './components/render-small-cards.js';

const SortTypeMethods = {
  ASC: (a, b) => a.city.localeCompare(b.city),
  DESC: (a, b) => -a.city.localeCompare(b.city),
};

const alphabetSortButton = document.querySelector('#alphabet-sort');
const reverseSortButton = document.querySelector('#alphabet-sort-reverse');

let sortType = SortTypeMethods.ASC;

const getSortType = () => sortType;

const setSortType = (type) => {
  sortType = type;
};

alphabetSortButton.addEventListener('click', () => {
  setSortType(SortTypeMethods.ASC);
  renderSmallCards();
});

reverseSortButton.addEventListener('click', () => {
  setSortType(SortTypeMethods.DESC);
  renderSmallCards();
});

export { getSortType, SortTypeMethods };
