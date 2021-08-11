/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable no-trailing-spaces */
import apiCall, { error, ul, appID } from './utilities.js';
import numberOfItems from './elementCount.js';
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
      return JSON.parse(response);
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
    numberOfItems(beers.length);
    ul.innerHTML = '';
    beers.forEach((data) => {
      /* eslint-disable */
      const { name, image_url, id } = data;
      /* eslint-disable */
      const findLikes = likes.find(value => value.item_id === id)
      const amountOfLikes = !findLikes ? 0  : findLikes.likes;
      beerElement = `
            <li >
              <img class="image" src="${image_url}" alt="${name}"></img>
              <div class="beer-title">
                <p>${name}</p>
                <div class="likes"><i class="far fa-heart"></i> <p>${amountOfLikes}</p></div>
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