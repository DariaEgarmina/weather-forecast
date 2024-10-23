const alphabetSortButton = document.querySelector('#alphabet-sort');
const reverseSortButton = document.querySelector('#alphabet-sort-reverse');

const smallCards = Array.from(document.querySelectorAll('.small-card'));
const smallCardsContainer = document.querySelector('.weather-content__small-cards');

const sortCards = (type) => {
  let smallCardsSorted;

  if (type === 'alphabet') {
    smallCardsSorted = smallCards.sort((a, b) => a.innerText > b.innerText ? 1 : -1);
  } else if (type === 'reverse') {
    smallCardsSorted = smallCards.sort((a, b) => a.innerText > b.innerText ? -1 : 1);
  }

  smallCardsContainer.innerHTML = smallCardsSorted.map((item) => `<div class="small-card">${item.innerHTML}</div>`).join('');
};

alphabetSortButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortCards('alphabet');
});

reverseSortButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sortCards('reverse');
});
