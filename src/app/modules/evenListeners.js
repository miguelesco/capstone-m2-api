/* eslint-disable linebreak-style */
import { ul } from './utilities.js';
import like from './like.js';
import comment from './comment.js';

const eventListeners = (onclick = () => {}, beersInfo = []) => {
  const listChildrens = Array.from(ul.children);
  listChildrens.forEach((_, i) => {
    const button = listChildrens[i].querySelector('.detailsBtn');
    const likeBtn = listChildrens[i].querySelector('.fa-heart');
    const commentBtn = listChildrens[i].querySelector('.commentBtn');
    button.addEventListener('click', () => onclick(beersInfo[i], i));
    likeBtn.addEventListener('click', () => like());
    commentBtn.addEventListener('click', () => comment(beersInfo[i]));
  });
};

export default eventListeners;