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

export { createWeatherConditions };
