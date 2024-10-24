const searchInputElement = document.querySelector('#search');

const searchCity = (input) => {
  const cityNames = document.querySelectorAll('.small-card__city');
  const filter = input.value.toLowerCase();

  for (let i = 0; i < cityNames.length; i++) {
    if (cityNames[i].innerText.toLowerCase().startsWith(filter)) {
      cityNames[i].parentNode.style.display = 'flex';
    } else {
      cityNames[i].parentNode.style.display = 'none';
    }
  }
};

searchInputElement.addEventListener('input', (evt) => {
  evt.preventDefault();
  searchCity(evt.target);
});
