import './mocks/cities.js';

import { renderSmallCards } from './components/render-small-cards.js';
import './search.js';

import { renderBigCards } from './components/render-big-cards.js';
import './sort.js';
import './filter.js';

import { setCities } from './state/cities.js';
import { favoritesCities } from './state/favorite-cities.js';

import './weather-conditions.js';
import './temperature.js';

import './drag-n-drop.js';

import './utils.js';

import './map.js';

import './interaction.js';

import { getData } from './api.js';

getData()
  .then((data) => {
    setCities(data);
    renderSmallCards();
    renderBigCards(favoritesCities);
  });
