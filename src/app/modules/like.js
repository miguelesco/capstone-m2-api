/* eslint-disable linebreak-style */
import apiCall, { appID, error, ul } from './utilities.js';

const like = async (beerLike) => {
  try {
    const beerID = {
      item_id: beerLike.id,
    };
    await apiCall(`${appID}/likes`, 'POST', beerID, true);
    const likeContainer = ul.children[beerLike.id - 1].querySelector('.beer-title').querySelector('.likes');
    const likeNumber = Number(likeContainer.getElementsByTagName('p')[0].textContent);
    likeContainer.children[1].innerHTML = `<p>${likeNumber + 1}</p>`;
  } catch (err) {
    error(err);
  }
};

export default like;