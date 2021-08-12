/* eslint-disable linebreak-style */
import { ul } from './utilities.js';
import like from './like.js';

const eventListeners = (onclick = () => {}, beersInfo = []) => {
  const listChildrens = Array.from(ul.children);
  listChildrens.forEach((_, i) => {
    const button = listChildrens[i].querySelector('.detailsBtn');
    const likeBtn = listChildrens[i].querySelector('.fa-heart');
    button.addEventListener('click', () => onclick(beersInfo[i], i));
    likeBtn.addEventListener('click', () => like());
  });
};

export default eventListeners;