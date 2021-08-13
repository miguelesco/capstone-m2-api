/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './main.scss';
import logo from './resources/newLogo.jpg';
import Render from './app/modules/render.js';

const init = () => {
  const myIcon = new Image();
  myIcon.src = logo;
  myIcon.alt = 'logo';
  document.querySelector('.logo-container').appendChild(myIcon);

  const render = new Render();
  render.reloadHTML();
};

init();