import { smallCardTemplate } from './render-small-cards.js';
import { sortCards } from './sort.js';

const weatherContentContainer = document.querySelector('.weather-content__result');
const smallCards = document.querySelectorAll('.small-card');
const bigCards = document.querySelectorAll('.big-card');

const bigCardTemplate = document.querySelector('#big-card').content.querySelector('.big-card');

const makeCardsDraggable = (cardElements) => {
  for (const card of cardElements) {
    card.draggable = true;
  }
};

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
    currentElement.classList.contains('big-card');

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

  if (nextElement === null) {
    currentElement.after(activeElement);
  } else {
    nextElement.before(activeElement);
  }
};

const changeCardType = (evt) => {
  const activeElement = evt.target;
  const bigCardElement = bigCardTemplate.cloneNode(true);
  const smallCardElement = smallCardTemplate.cloneNode(true);

  if (activeElement.classList.contains('small-card')
    && activeElement.parentElement.classList.contains('weather-content__big-cards')) {
    const cityName = activeElement.querySelector('.small-card__city').textContent;
    const temperature = activeElement.querySelector('.small-card__temperature').textContent;
    const weatherConditions = activeElement.querySelector('.big-card__weather-conditions').innerHTML;
    const wind = activeElement.querySelector('.big-card__wind-info').textContent;

    bigCardElement.querySelector('.big-card__city').textContent = cityName;
    bigCardElement.querySelector('.big-card__temperature').textContent = `+${temperature}`;
    bigCardElement.querySelector('.big-card__weather-conditions').innerHTML = weatherConditions;
    bigCardElement.querySelector('.big-card__wind-info').textContent = wind;


    activeElement.classList.replace('small-card', 'big-card');
    activeElement.innerHTML = bigCardElement.innerHTML;
  }

  if (activeElement.classList.contains('big-card')
    && activeElement.parentElement.classList.contains('weather-content__small-cards')) {
    const cityName = activeElement.querySelector('.big-card__city').textContent;
    const temperature = activeElement.querySelector('.big-card__temperature').textContent;

    smallCardElement.querySelector('.small-card__city').textContent = cityName;
    smallCardElement.querySelector('.small-card__temperature').textContent = temperature;

    activeElement.classList.replace('big-card', 'small-card');
    activeElement.innerHTML = smallCardElement.innerHTML;
  }
};

makeCardsDraggable(smallCards);
makeCardsDraggable(bigCards);

weatherContentContainer.addEventListener('dragstart', (evt) => {
  evt.target.classList.add('selected');
});

weatherContentContainer.addEventListener('dragend', (evt) => {
  evt.target.classList.remove('selected');
  changeCardType(evt);

  if (evt.target.parentElement.classList.contains('weather-content__small-cards')) {
    const smallCardsArray = Array.from(evt.target.parentElement.querySelectorAll('.small-card'));
    sortCards('alphabet', smallCardsArray);

    const newSmallCards = document.querySelectorAll('.small-card');
    makeCardsDraggable(newSmallCards);
  }


});

weatherContentContainer.addEventListener('dragover', (evt) => {
  evt.preventDefault();
  moveElement(evt);
});

export { makeCardsDraggable };
