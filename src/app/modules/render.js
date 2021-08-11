/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
import apiCall, { error, ul, appID } from './utilities.js';
import eventListeners from './evenListeners.js';

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

  likesNumber = async () => {
    try {
      const response = await apiCall(`${appID}/likes`, 'GET', {}, true);
      console.log(response);
      return response;
    } catch (err) { 
      error(err);
      return [];
    }
  }

  createApp = async () => {
    try {
      const response = await apiCall('', 'POST', { name: 'newAppMiguel' }, true);
      appID = response;
    } catch (err) {
      error(err);
      appID = '';
    }
  }

  async reloadHTML() {
    if (!appID) {
      this.createApp();
    }
    const likes = await this.likesNumber();
    const beers = await this.refresh();
    ul.innerHTML = '';
    beers.forEach((data, i) => {
      /* eslint-disable */
      const { name, image_url } = data;
      /* eslint-disable */
      beerElement = `
            <li >
              <img class="image" src="${image_url}" alt="${name}"></img>
              <div class="beer-title">
                <p>${name}</p>
                <p class="likes"><i class="far fa-heart"></i> ${likes[i]}</p>
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