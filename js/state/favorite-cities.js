import { renderBigCards } from '../components/render-big-cards.js';
import { filterCityByConditions } from '../filter.js';
import { getCityId } from '../utils.js';

const favoritesCities = [];

const getFavoritesCities = () => favoritesCities.filter(filterCityByConditions);

const addCardToFavorites = (card) => {
  favoritesCities.push(card);
  renderBigCards(getFavoritesCities());
};

const removeCardFromFavorites = (card) => {
  const cardIndex = favoritesCities.findIndex((city) => city === card);
  favoritesCities.splice(cardIndex, 1);
};

const getFavoriteCityById = (id) => getFavoritesCities().find((item) => getCityId(item.city) === id);

export { favoritesCities, getFavoritesCities, addCardToFavorites, removeCardFromFavorites, getFavoriteCityById };
