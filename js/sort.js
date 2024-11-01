import { smallCardsContainer } from './render-small-cards.js';
import { makeCardsDraggable } from './drag-n-drop.js';

const alphabetSortButton = document.querySelector('#alphabet-sort');
const reverseSortButton = document.querySelector('#alphabet-sort-reverse');

const sortCards = (type) => {
  const smallCards = Array.from(smallCardsContainer.querySelectorAll('.small-card'));

  let smallCardsSorted;

  if (type === 'alphabet') {
    smallCardsSorted = smallCards.sort((a, b) => a.innerText > b.innerText ? 1 : -1);
  } else if (type === 'reverse') {
    smallCardsSorted = smallCards.sort((a, b) => a.innerText > b.innerText ? -1 : 1);
  }

  smallCardsContainer.innerHTML = smallCardsSorted.map((item) => `<div class="small-card">${item.innerHTML}</div>`).join('');
  const newSmallCards = smallCardsContainer.querySelectorAll('.small-card');
  makeCardsDraggable(newSmallCards);
};

const sortCardsWhenDrop = (evt) => {
  const smallCardsArray = Array.from(evt.target.parentElement.querySelectorAll('.small-card'));
  const isSmallCard = evt.target.parentElement.classList.contains('weather-content__small-cards');

  if (alphabetSortButton.hasAttribute('checked') && isSmallCard) {
    sortCards('alphabet', smallCardsArray);
  }

  if (reverseSortButton.hasAttribute('checked') && isSmallCard) {
    sortCards('reverse', smallCardsArray);
  }
};

alphabetSortButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortCards('alphabet');

  alphabetSortButton.setAttribute('checked', '');
  reverseSortButton.removeAttribute('checked');
});

reverseSortButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortCards('reverse');

  alphabetSortButton.removeAttribute('checked');
  reverseSortButton.setAttribute('checked', '');
});

export { sortCardsWhenDrop };
