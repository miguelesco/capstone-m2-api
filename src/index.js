/* eslint-disable linebreak-style */
import './main.scss';
import Render from './app/modules/render.js';

const init = () => {
  const render = new Render();
  render.reloadHTML();
};

init();