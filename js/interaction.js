import { bigCardsContainer } from './components/render-big-cards.js';
import { getFavoriteCityById } from './state/favorite-cities.js';
import { changeMapView, selectActiveMarker, deselectActiveMarker } from './map.js';

const selectCityInList = (activeElement) => {
  Array.from(bigCardsContainer.querySelectorAll('.card'))
    .forEach((item) => {
      if (item !== activeElement) {
        item.classList.remove('big-card__active');
      }
    });

  activeElement.classList.toggle('big-card__active');
};

const findActiveCityId = () => {
  if (bigCardsContainer.querySelector('.big-card__active')) {
    const activeCityId = bigCardsContainer.querySelector('.big-card__active').id;
    return activeCityId;
  }
};

const centerCityInViewport = (activeCityId) => {
  const city = getFavoriteCityById(activeCityId);
  changeMapView(city);
};

bigCardsContainer.addEventListener('click', (evt) => {
  const activeElement = evt.target.closest('.card');
  selectCityInList(activeElement);

  deselectActiveMarker();
  const activeCityId = findActiveCityId();

  if (activeCityId) {
    centerCityInViewport(activeCityId);
    selectActiveMarker(activeCityId);
  }
});
