/* eslint-disable linebreak-style */
import { overlay, popUp, closePopUpHandler } from './pop.js';
import apiCall, { appID, error } from './utilities.js';

const sendComment = async (e, beerInfo) => {
  try {
    e.preventDefault();
    const form = document.querySelector('#addPost');
    const itemId = beerInfo.id;
    const username = form.children[0].value;
    const comment = form.children[1].textContent;
    const newComment = {
      item_id: itemId,
      username,
      comment,
    };
    await apiCall(`${appID}/comments`, 'POST', newComment, true);
  } catch (err) {
    error(err);
  }
};

const commentsCounter = async (beerId) => {
  try {
    const response = await apiCall(`${appID}/comments?item_id=${beerId}`, 'GET', {}, true);
    const res = JSON.parse(response);
    if (res.error) {
      throw new Error(res.error);
    }
    return JSON.parse(response);
  } catch (err) {
    error(err);
    return [];
  }
};

const comments = async (beerInfo) => {
  overlay.classList.remove('hidden');
  const comment = await commentsCounter(beerInfo.id);
  const commentNo = comment.length === 0 || comment.length === undefined ? 0 : comment.length;
  popUp.innerHTML = '';
  popUp.innerHTML = `
                
                <div class="pop-content">
                  <h3>Add Comment</h3>
                  <div class="beer-title">
                  <div class="comment"><i class="fa fa-calculator"></i> <p>Total of comments ${commentNo}</p></div>
                    <button class="close-pop-up" >&times;</button>
                    <form id="addPost" action="/" method="">
                      <input type="text" id="fname" name="fname" placeholder="Your Name"><br><br>
                      <textarea name="textarea" id="comment" placeholder="Your insight"></textarea>
                      <input type="submit" class="add" id="add" value="Comment">
                    </form>                  
                  </div>
                </div>`;
  const submit = document.getElementById('addPost');
  const closePopUpBtn = document.querySelector('.close-pop-up');
  closePopUpBtn.addEventListener('click', () => closePopUpHandler(closePopUpBtn));
  submit.addEventListener('submit', (e) => sendComment(e, beerInfo));
};

export default comments;
