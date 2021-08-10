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

export const createElement = (elementType = '', elementContent, elementClass = '', type = '', elementId = '') => {
  const newElement = document.createElement(elementType);
  newElement.innerHTML = elementContent;
  if (elementClass) newElement.className = elementClass;
  if (elementId) newElement.id = elementId;
  if (type) newElement.type = type
  return newElement;
};

export const eventListeners = (onclick = (name, i) => {}) => {
  const listChildrens = Array.from(ul.children)

  listChildrens.forEach( (children,i) => {
    const name = children.querySelector('.image').alt
    const button = listChildrens[i].querySelector('.commentBtn')
    button.addEventListener('click', () => onclick(name, i))

  })
} 