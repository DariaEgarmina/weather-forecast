const weatherContentContainer = document.querySelector('.weather-content__result');
const smallCards = document.querySelectorAll('.small-card');
const bigCards = document.querySelectorAll('.big-card');

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

  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains('small-card') ||
    currentElement.classList.contains('big-card');

  if (!isMoveable) {
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

makeCardsDraggable(smallCards);
makeCardsDraggable(bigCards);

weatherContentContainer.addEventListener('dragstart', (evt) => {
  evt.target.classList.add('selected');

  const parent = evt.target.parentElement;
  if(parent.classList.contains('weather-content__small-cards') &&
  evt.target.classList.contains('small-card')) {
    evt.target.classList.add('undraggable');
  }
});

weatherContentContainer.addEventListener('dragend', (evt) => {
  evt.target.classList.remove('selected');

  const parent = evt.target.parentElement;
  if(parent.classList.contains('weather-content__big-cards') &&
  evt.target.classList.contains('small-card')) {
    evt.target.classList.remove('undraggable');
  }

  //Это была моя идея, но она не работает
  if(parent.classList.contains('weather-content__small-cards') &&
  evt.target.classList.contains('undraggable')) {
    evt.preventDefault();
  }
});

weatherContentContainer.addEventListener('dragover', (evt) => {
  evt.preventDefault();
  moveElement(evt);
});
