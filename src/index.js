import './main.scss';
import Render from './app/modules/render'

const init = () => {
  const render = new Render()
  render.reloadHTML();
}

init();