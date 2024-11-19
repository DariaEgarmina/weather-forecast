import { createCard } from './create-card.js';
import { addCardToFavorites } from './state/favorite-cities.js';
import { addCity, removeCity } from './state/cities.js';

const weatherContentContainer = document.querySelector('.weather-content__result');

const getNextElement = (cursorPosition, currentElement) => {
  const currentElementCoord = currentElement.getBoundingClientRect();
  const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

  const nextElement = (cursorPosition < currentElementCenter) ?
    currentElement :
    currentElement.nextElementSibling;

  return nextElement;
};

const moveElement = (evt) => {
  const activeElement = weatherContentContainer.querySelector('.selected');

  let currentElement;

  if (evt.target.classList.contains('big-card__header') ||
    evt.target.classList.contains('big-card__content')) {
    currentElement = evt.target.closest('.big-card');
  } else {
    currentElement = evt.target;
  }

  const isMovable = activeElement !== currentElement &&
    currentElement.classList.contains('small-card') ||
    currentElement.classList.contains('big-card') ||
    currentElement.classList.contains('weather-content__big-cards');

  if (!isMovable) {
    return;
  }

  if (activeElement.classList.contains('small-card') &&
    currentElement.closest('.weather-content__small-cards')) {
    return;
  }

  const nextElement = getNextElement(evt.clientY, currentElement);

  if (
    nextElement &&
    activeElement === nextElement.previousElementSibling ||
    activeElement === nextElement
  ) {
    return;
  }

  if (nextElement.classList.contains('weather-content__big-cards')) {
    nextElement.appendChild(activeElement);
  } else if (nextElement === null) {
    currentElement.after(activeElement);
  } else {
    nextElement.before(activeElement);
  }
};

weatherContentContainer.addEventListener('dragstart', (evt) => {
  evt.target.classList.add('selected');
});

weatherContentContainer.addEventListener('dragend', (evt) => {
  evt.target.classList.remove('selected');

  const container = evt.target.parentElement;

  if (container.classList.contains('weather-content__big-cards')) {
    const card = createCard(evt.target, 'small-card');
    addCardToFavorites(card);
    removeCity(card);
  } else if (container.classList.contains('weather-content__small-cards')) {
    const card = createCard(evt.target, 'big-card');
    addCity(card);
  }
});

weatherContentContainer.addEventListener('dragover', (evt) => {
  evt.preventDefault();
  moveElement(evt);
});
