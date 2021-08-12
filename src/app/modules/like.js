import apiCall, { appID, error } from './utilities.js';

const like = async (beerLike) => {
  try {
    const beerID = {
      item_id: beerLike.id,
    };
    const like = await apiCall(`${appID}/likes`, 'POST', beerID, true);
    console.log(like);
  } catch (err) {
    error(err);
  }
};

export default like;