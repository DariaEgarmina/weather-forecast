const bigCardsContainer = document.querySelector('.weather-content__big-cards');
const checkboxContainer = document.querySelector('.sort-form__group--checkbox');

const filterBigCards = () => {
  const bigCards = Array.from(bigCardsContainer.querySelectorAll('.big-card'));
  bigCards.forEach((item) => item.style.display = 'flex');

  const activeCheckboxes = Array.from(document.querySelectorAll('input[name = "weather-conditions"]:checked'));

  if (activeCheckboxes.length > 0) {
    activeCheckboxes.forEach((element) => {
      const value = element.value;

      bigCards.forEach((item) => {
        if (item.querySelector(`.icon--${value}`)) {
          item.style.display = 'flex';
        } else if (!item.querySelector(`.icon--${value}`)) {
          item.style.display = 'none';
        }
      });

    });
  }

};

checkboxContainer.addEventListener('change', () => {
  filterBigCards();
});
