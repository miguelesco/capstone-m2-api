/* eslint-disable linebreak-style */
export const ul = document.querySelector('.listContainer');
export const overlay = document.querySelector('.overlay');
export const popUp = document.querySelector('.pop-up');
const baseURL = 'https://api.punkapi.com/v2/';
const likesBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
export const appID = 'cuSc6vNb8MIaUDaK4qjK';

export default async function apiCall(urlExtension = '', method = '', body, like = false) {
  const response = await fetch(like ? likesBaseURL + urlExtension : baseURL + urlExtension, {
    method: !method ? 'GET' : method,
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return like ? response.text() : response.json();
}

export const error = (message = '') => {
  const error = `An error has ocurred ${message}`;
  console.log(error);
};
