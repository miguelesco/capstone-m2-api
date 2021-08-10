import apiCall, { error, ul, eventListeners } from './utilities.js';

let beerElement;

class Render {
  refresh = async () => {
    try {
      const response = await apiCall('beers');
      return response;
    } catch (err) {
      error(err);
      return [];
    }
  }

  openPopup = (beersInfo, i) => {
    console.log(beersInfo, i);
  }

  async reloadHTML() {
    const beers = await this.refresh();
    ul.innerHTML = '';
    beers.forEach((data) => {
      /* eslint-disable */
      const { name, image_url } = data;
      /* eslint-disable */
      beerElement = `
            <li >
              <img class="image" src="${image_url}" alt="${name}"></img>
              <div class="beer-title">
                <p>${name}</p>
                <p class="likes"><i class="far fa-heart"></i> 5</p>
              </div>
              <button class="commentBtn" type="button">COMMENT</button>
              <button class="detailsBtn" type="button">DETAILS</button>
            </li>`;
      ul.innerHTML += beerElement;
    });
    eventListeners(this.openPopup, beers);
  }
}

export default Render;