import { smallCardsContainer } from './render-small-cards.js';
import { makeCardsDraggable } from './drag-n-drop.js';

const alphabetSortButton = document.querySelector('#alphabet-sort');
const reverseSortButton = document.querySelector('#alphabet-sort-reverse');

const smallCards = Array.from(smallCardsContainer.querySelectorAll('.small-card'));

const sortCards = (type, smallCardsArray) => {
  let smallCardsSorted;

  if (type === 'alphabet') {
    smallCardsSorted = smallCardsArray.sort((a, b) => a.innerText > b.innerText ? 1 : -1);
  } else if (type === 'reverse') {
    smallCardsSorted = smallCardsArray.sort((a, b) => a.innerText > b.innerText ? -1 : 1);
  }

  smallCardsContainer.innerHTML = smallCardsSorted.map((item) => `<div class="small-card">${item.innerHTML}</div>`).join('');
  const newSmallCards = smallCardsContainer.querySelectorAll('.small-card');
  makeCardsDraggable(newSmallCards);
};

alphabetSortButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortCards('alphabet', smallCards);

  alphabetSortButton.setAttribute('checked', '');
  reverseSortButton.removeAttribute('checked');
});

reverseSortButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortCards('reverse', smallCards);

  alphabetSortButton.removeAttribute('checked');
  reverseSortButton.setAttribute('checked', '');
});

export { sortCards };
