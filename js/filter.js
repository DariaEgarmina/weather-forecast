const bigCardsContainer = document.querySelector('.weather-content__big-cards');
const checkboxContainer = document.querySelector('.sort-form__group--checkbox');

const filterBigCards = (evt) => {
  const bigCards = Array.from(document.querySelectorAll('.big-card'));
  const value = evt.target.value;

  const bigCardsFiltered = bigCards.filter((item) => item.querySelector(`.icon--${value }`));

  bigCardsContainer.innerHTML = bigCardsFiltered.map((item) => `<div class="big-card">${item.innerHTML}</div>`).join('');
};

checkboxContainer.addEventListener('change', (evt) => {
  filterBigCards(evt);
});
