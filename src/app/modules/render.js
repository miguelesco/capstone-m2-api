/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable no-trailing-spaces */
import apiCall, { error, ul, appID, liNav } from './utilities.js';
import eventListeners from './evenListeners.js';
import { closePopUpHandler, overlay, popUp } from './pop.js';

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

  openPopup = (beersInfo) => {
    overlay.classList.remove('hidden');
    popUp.innerHTML = `
                <button class="close-pop-up" >&times;</button>
                <div class="pop-content">
                  <img class="image" src="${beersInfo.image_url}" alt="${beersInfo.name}"></img>
                  <div class="beer-title">
                    <p>${beersInfo.name}</p>
                    <p class="likes"><i class="far fa-heart"></i> 5</p>
                  </div>
                </div>`;
    const closePopUpBtn = document.querySelector('.close-pop-up');
    closePopUpBtn.addEventListener('click', () => closePopUpHandler(closePopUpBtn));
  }

  numberOfItems = (beersLength = 0) => {
    const beerNumber = `<p>Beers Available(${beersLength})</p>`;
    liNav.innerHTML = beerNumber;
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
    this.numberOfItems(beers.length);
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
              <button class="commentBtn" type="button" >COMMENT</button>
              <button class="detailsBtn" type="button">DETAILS</button>
            </li>`;
      ul.innerHTML += beerElement;
    });
    eventListeners(this.openPopup, beers);
  }
}


export default Render;