import { CITIES } from '../mocks/cities.js';
import { filterCitiesBySearch } from '../search.js';
import { getSortType } from '../sort.js';
import { renderSmallCards } from '../components/render-small-cards.js';
import { getCityId } from '../utils.js';

const cities = CITIES;

const getAllCities = () => cities;

const getCitiesForSmallCardList = () => filterCitiesBySearch(cities).sort(getSortType());

const addCity = (card) => {
  cities.push(card);
  renderSmallCards();
};

const removeCity = (card) => {
  const cardIndex = cities.findIndex((city) => city === card);
  cities.splice(cardIndex, 1);
};

const getCityById = (id) => getAllCities().find((item) => getCityId(item.city) === id);

export { getCitiesForSmallCardList, addCity, removeCity, getCityById };
