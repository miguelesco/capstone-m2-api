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

commentsCounter = async () => {
  try {
    const response = await apiCall(`${appID}/comments`, 'GET', {}, true);
    return JSON.parse(response);
  } catch (err) { 
    error(err);
    return [];
  }
}

const comments = (beerInfo) => {
  overlay.classList.remove('hidden');
  const comment = commentsCounter();
  const getComments = comment.find(value => value.item_id === id)
  const commentNo = !getComments ? 0  : getComments.comment;
  popUp.innerHTML = `
                
                <div class="pop-content">
                  <h3>Add Comment</h3>
                  <div class="beer-title">
                  <div class="comment"><i class="fa fa-calculator"></i> <p>${commentNo}</p></div>
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
