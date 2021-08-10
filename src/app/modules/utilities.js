export const ul = document.querySelector('.listContainer')
const baseURL = 'https://api.punkapi.com/v2/';

export default async function apiCall(urlExtension = '', method = '', body) {
  const response = await fetch(baseURL + urlExtension, {
    method: !method ? 'GET' : method,
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json',
    },
  });
  return response.json();
}

export const error = (message = '') => {
  const error = `An error has ocurred ${message}`;
  throw new Error(error);
};