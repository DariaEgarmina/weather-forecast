import { bigCardsContainer } from './components/render-big-cards.js';
import { getFavoriteCityById } from './state/favorite-cities.js';
import { changeMapView } from './map.js';

const selectCityInList = (activeElement) => {
  Array.from(bigCardsContainer.querySelectorAll('.card'))
    .forEach((item) => {
      if (item !== activeElement) {
        item.classList.remove('big-card__active');
      }
    });

  activeElement.classList.toggle('big-card__active');
};

// const selectMarker = () => {
//   const activeCityId = bigCardsContainer.querySelector('.big-card__active').id;
//   const city = getFavoriteCityById(activeCityId);
//   - удалить старый маркер
//   - создать новый красивый маркер?
// };

const centerCityInViewport = () => {
  const activeCityId = bigCardsContainer.querySelector('.big-card__active').id;
  const city = getFavoriteCityById(activeCityId);
  changeMapView(city);
};

bigCardsContainer.addEventListener('click', (evt) => {
  const activeElement = evt.target.closest('.card');
  selectCityInList(activeElement);
  centerCityInViewport();
});
