import { bigCardsContainer } from './components/render-big-cards.js';

bigCardsContainer.addEventListener('click', (evt) => {
  const activeElement = evt.target.closest('.card');

  Array.from(bigCardsContainer.querySelectorAll('.card'))
    .forEach((item) => {
      if (item !== activeElement) {
        item.classList.remove('big-card__active');
      }
    });

  activeElement.classList.toggle('big-card__active');
});
