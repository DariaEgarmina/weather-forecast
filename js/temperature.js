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

const setTemperatureValue = (element, selector) => {
  const elementTemperature = element.querySelector(selector).textContent;

  if (elementTemperature.startsWith(PLUS)) {
    return elementTemperature.replace(PLUS, '').replace(DEGREE, '');
  }

  if (elementTemperature.startsWith(MINUS) || elementTemperature.startsWith(ZERO)) {
    return elementTemperature.replace(DEGREE, '');
  }

  return Number(elementTemperature);
};

export { setTemperatureValue, createTemperature };
