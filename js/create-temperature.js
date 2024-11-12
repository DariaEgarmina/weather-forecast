const PLUS = '+';
const MINUS = '-';
const ZERO = '0';
const DEGREE = '°';
const regex = /^[1-9]+$/;

const createTemperature = (cityTemperature) => {
  const temperature = cityTemperature.toString();

  const isDigitsOnly = regex.test(temperature[0]);

  if (isDigitsOnly) {
    return `${PLUS}${temperature}${DEGREE}`;
  }

  if (temperature.startsWith(MINUS) || temperature.startsWith(ZERO)) {
    return `${temperature}${DEGREE}`;
  }
};

const createTemperatureBigCard = (activeElement, className) => {
  const temperature = activeElement.querySelector(className).textContent;
  const isDigitsOnly = regex.test(temperature[0]);

  if (isDigitsOnly) {
    return `${PLUS}${temperature}${DEGREE}`;
  }

  if (temperature.startsWith(MINUS) || temperature.startsWith(ZERO)) {
    return `${temperature}${DEGREE}`;
  }
};

const createTemperatureSmallCard = (activeElement, className) => {
  const temperature = activeElement.querySelector(className).textContent;

  if (temperature.startsWith(PLUS)) {
    return temperature.replace(PLUS, '').replace(DEGREE, '');
  }

  if (temperature.startsWith(MINUS) || temperature.startsWith(ZERO)) {
    return temperature.replace(DEGREE, '');
  }
};

export { createTemperatureBigCard, createTemperatureSmallCard, createTemperature };
