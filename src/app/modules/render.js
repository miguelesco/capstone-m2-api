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
    const myDiv = document.getElementById('pop');
    // myDiv.classList.remove('.pop-up');
    // myDiv.classList.add('.pop-up-display');
    myDiv.innerHTML = `
             <div id="popup1" class="overlay">
             	<div class="popup">
             <a class="close" href="#">&times;</a>
             <div class="pop-content">
              <img class="image" src="${beersInfo.image_url}" alt="${beersInfo.name}"></img>
              <div class="beer-title">
                <p>${beersInfo.name}</p>
                <p class="likes"><i class="far fa-heart"></i> 5</p>
              </div>
              </div>
              </div>
            </div>`;
    console.log(beersInfo, i);
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