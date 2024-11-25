import { addCardToFavorites, removeCardFromFavorites, getFavoriteCityById } from './state/favorite-cities.js';
import { addCity, removeCity, getCityById } from './state/cities.js';

const weatherContentContainer = document.querySelector('.weather-content__result');

const getNextElement = (cursorPosition, currentElement) => {
  const element = currentElement.closest('.card') || currentElement.closest('.card-list');

  const currentElementCoord = element.getBoundingClientRect();
  const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

  const nextElement = (cursorPosition < currentElementCenter) ?
    element :
    element.nextElementSibling;

  return nextElement;
};

const moveElement = (evt) => {
  const activeElement = weatherContentContainer.querySelector('.selected');

  const underCardElement = evt.target.closest('.card');
  const underListElement = evt.target.closest('.card-list');

  if (activeElement === underCardElement || !underListElement) {
    return;
  }

  if (activeElement.classList.contains('small-card') &&
    underListElement.classList.contains('weather-content__small-cards')) {
    return;
  }

  const nextElement = getNextElement(evt.clientY, evt.target);

  if (
    nextElement &&
    activeElement === nextElement.previousElementSibling ||
    activeElement === nextElement
  ) {
    return;
  }

  if (nextElement === null) {
    underCardElement.after(activeElement);
  } else if (nextElement.classList.contains('weather-content__big-cards')) {
    nextElement.appendChild(activeElement);
  } else {
    nextElement.before(activeElement);
  }
};

weatherContentContainer.addEventListener('dragstart', (evt) => {
  evt.target.classList.add('selected');

  if (evt.target.classList.contains('small-card')) {
    evt.target.classList.add('small-card--shadow');
  } else if (evt.target.classList.contains('big-card')) {
    evt.target.classList.add('big-card--shadow');
  }
});

weatherContentContainer.addEventListener('dragend', (evt) => {
  evt.target.classList.remove('selected');
  evt.target.classList.remove('small-card--shadow');
  evt.target.classList.remove('big-card--shadow');

  const container = evt.target.parentElement;

  if (evt.target.classList.contains('small-card') &&
    container.classList.contains('weather-content__big-cards')) {
    const card = getCityById(evt.target.id);
    addCardToFavorites(card);
    removeCity(card);
  } else if (evt.target.classList.contains('big-card') &&
    container.classList.contains('weather-content__small-cards')) {
    const card = getFavoriteCityById(evt.target.id);
    removeCardFromFavorites(card);
    addCity(card);
  }
});

weatherContentContainer.addEventListener('dragover', (evt) => {
  evt.preventDefault();
  moveElement(evt);
});
