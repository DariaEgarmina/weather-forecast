import { CITIES } from '../mocks/cities.js';
import { filterCitiesBySearch } from '../search.js';
import { getSortType } from '../sort.js';

const cities = CITIES;

const getAllCities = () => cities;

const getCitiesForSmallCardList = () => filterCitiesBySearch(cities).sort(getSortType());

const removeCity = (card) => {
  const cardIndex = cities.findIndex((city) => city.city === card.city);
  cities.splice(cardIndex, 1);
};

const addCity = (card) => {
  cities.push(card);
};

export { getAllCities, getCitiesForSmallCardList, addCity, removeCity };
