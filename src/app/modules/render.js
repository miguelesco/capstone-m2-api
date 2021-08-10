import apiCall, {error, ul} from './utilities.js'

let beerElement;

class Render {
  refresh = async () => {
    try {
      const response = await apiCall(`beers`);
      return response;
    } catch (err) {
      error(err);
      return [];
    }
  }

  async reloadHTML() {
    const beers = await this.refresh();
    ul.innerHTML = '';
    beers.forEach((data, i) => {
      const { name, image_url,  } = data;
      beerElement = `
            <li >
              <img class="image" src="${image_url}" alt="${name}"></img>
              <div class="beer-title">
                <p>${name}</p>
                <i class="far fa-heart"></i>
              </div>
              <button type="button">COMMENTS</button>
            </li>`;
      ul.innerHTML += beerElement;
    });
    console.log(beers)
  }
}

export default Render;