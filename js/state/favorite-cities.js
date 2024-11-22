import { renderBigCards } from '../components/render-big-cards.js';
import { filterCityByConditions } from '../filter.js';

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

// Карточку переместили внутри списка избранного
// const changeCardPosition = () => {

// };

export { favoritesCities, getFavoritesCities, addCardToFavorites, removeCardFromFavorites };
