// import { createTemperatureBigCard, createTemperatureSmallCard } from './create-temperature.js';

// const bigCardTemplate = document.querySelector('#big-card').content.querySelector('.big-card');
// const smallCardTemplate = document.querySelector('#small-card').content.querySelector('.small-card');

// const changeSmallCard = (activeElement, cloneElement) => {
//   const cityName = activeElement.querySelector('.small-card__city').textContent;
//   const temperature = createTemperatureBigCard(activeElement, '.small-card__temperature');
//   const weatherConditions = activeElement.querySelector('.big-card__weather-conditions').innerHTML;
//   const wind = activeElement.querySelector('.big-card__wind-info').textContent;

//   cloneElement.querySelector('.big-card__city').textContent = cityName;
//   cloneElement.querySelector('.big-card__temperature').textContent = temperature;
//   cloneElement.querySelector('.big-card__weather-conditions').innerHTML = weatherConditions;
//   cloneElement.querySelector('.big-card__wind-info').textContent = wind;


//   activeElement.classList.replace('small-card', 'big-card');
//   activeElement.innerHTML = cloneElement.innerHTML;
// };

// const changeBigCard = (activeElement, cloneElement) => {
//   const cityName = activeElement.querySelector('.big-card__city').textContent;
//   const temperature = createTemperatureSmallCard(activeElement, '.big-card__temperature');

//   cloneElement.querySelector('.small-card__city').textContent = cityName;
//   cloneElement.querySelector('.small-card__temperature').textContent = temperature;

//   activeElement.classList.replace('big-card', 'small-card');
//   activeElement.innerHTML = cloneElement.innerHTML;
// };

// const changeCardType = (evt) => {
//   const activeElement = evt.target;
//   const bigCardElement = bigCardTemplate.cloneNode(true);
//   const smallCardElement = smallCardTemplate.cloneNode(true);

//   if (activeElement.classList.contains('small-card')
//     && activeElement.parentElement.classList.contains('weather-content__big-cards')) {
//     changeSmallCard(activeElement, bigCardElement);
//   }

//   if (activeElement.classList.contains('big-card')
//     && activeElement.parentElement.classList.contains('weather-content__small-cards')) {
//     changeBigCard(activeElement, smallCardElement);
//   }
// };

// export { changeCardType };
