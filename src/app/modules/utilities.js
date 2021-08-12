/* eslint-disable linebreak-style */
export const ul = document.querySelector('.listContainer');
export const appID = 'cuSc6vNb8MIaUDaK4qjK';
const ulNav = document.querySelector('.nav-wrapper');
export const liNav = ulNav.querySelector('.nav-element');
const baseURL = 'https://api.punkapi.com/v2/';
const likesBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

export default async function apiCall(urlExtension = '', method = '', body, involment = false) {
  let response;
  if (!method || method === 'GET') {
    response = await fetch(involment ? likesBaseURL + urlExtension : baseURL + urlExtension, {
      method: !method ? 'GET' : method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } else {
    response = await fetch(involment ? likesBaseURL + urlExtension : baseURL + urlExtension, {
      method: !method ? 'GET' : method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
  return involment ? response.text() : response.json();
}

export const error = (message = '') => {
  const error = `An error has ocurred ${message}`;
  console.log(error);
};
