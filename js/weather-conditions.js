const createWeatherConditionElements = (weatherObject) => {
  const fragment = document.createDocumentFragment();

  for (const key in weatherObject) {
    if (weatherObject[key] === true) {
      const weatherConditionElement = document.createElement('span');
      weatherConditionElement.classList.add('icon');
      weatherConditionElement.classList.add(`icon--${key}`);
      fragment.append(weatherConditionElement);
    }
  }

  return fragment;
};

const setWeatherConditions = (weatherObject, element) => {
  for (const key in weatherObject) {
    if(element.querySelector(`.icon--${key}`)) {
      weatherObject[key] = true;
    }
  }
};

const setWindValues = (windObject, element) => {
  const windInfo = element.querySelector('.big-card__wind-info').textContent.replace('Ветер ', '').replace(' м/с', '').replace(',', '');
  const windDirection = windInfo.split(' ')[0];
  const windSpeed = windInfo.split(' ')[1];

  windObject['direction'] = windDirection;
  windObject['speed'] = windSpeed;
};

export { createWeatherConditionElements, setWeatherConditions, setWindValues };
