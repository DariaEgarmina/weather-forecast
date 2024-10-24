const weatherContentContainer = document.querySelector('.weather-content__result');
const smallCards = document.querySelectorAll('.small-card');

const makeCardsDraggable = (cardElements) => {
  for (const card of cardElements) {
    card.draggable = true;
  }
};

makeCardsDraggable(smallCards);

weatherContentContainer.addEventListener('dragstart', (evt) => {
  evt.target.classList.add('selected');
});

weatherContentContainer.addEventListener('dragend', (evt) => {
  evt.target.classList.remove('selected');
});
