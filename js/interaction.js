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

const addHoverOnCityCard = (cityCard) => {
  cityCard.classList.add('big-card__hover');
};

const removeHoverFromCityCard = (cityCard) => {
  cityCard.classList.remove('big-card__hover');
};

const selectActiveCard = (markerTitle) => {
  Array.from(bigCardsContainer.querySelectorAll('.card'))
    .forEach((item) => {
      if (item.id === markerTitle) {
        addHoverOnCityCard(item);
      }
    });
};

const deselectActiveCard = (markerTitle) => {
  Array.from(bigCardsContainer.querySelectorAll('.card'))
    .forEach((item) => {
      if (item.id === markerTitle) {
        removeHoverFromCityCard(item);
      }
    });
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

bigCardsContainer.addEventListener('mouseover', (evt) => {
  const cityCard = evt.target.closest('.card');
  if (cityCard) {
    addHoverOnCityCard(cityCard);
  }
});

bigCardsContainer.addEventListener('mouseout', (evt) => {
  const cityCard = evt.target.closest('.card');
  if (cityCard) {
    removeHoverFromCityCard(cityCard);
  }
});

export { selectActiveCard, deselectActiveCard };
