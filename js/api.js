const BASE_URL = 'https://mock.htmlacademy.pro/weather_report/db';

const ErrorText = 'Не удалось загрузить данные. Попробуйте обновить страницу';

const getData = () =>
  fetch(BASE_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(ErrorText);
    });

export { getData };
