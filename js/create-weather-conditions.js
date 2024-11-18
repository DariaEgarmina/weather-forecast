const createWeatherConditions = (weatherObject) => {
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

export { createWeatherConditions, setWeatherConditions };
