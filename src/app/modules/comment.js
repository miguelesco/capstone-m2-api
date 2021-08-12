import { overlay, popUp } from './pop.js';
import addComment from './comments.js';

const comments = () => {
    overlay.classList.remove('hidden');
    popUp.innerHTML = `
                
                <div class="pop-content">
                  <h3>Add Comment</h3>
                  <div class="beer-title">
                    <p>
                    <form id="addPost" action="/" method="">
                    <input type="text" id="fname" name="fname" placeholder="Your Name"><br><br>
                    <textarea name="textarea" id="comment" placeholder="Your insight"></textarea>
                    <input type="submit" class="add" id="add" value="Comment">
                  </form>
                    </p>
                  
                  </div>
                </div>`;
    //             const commentBtn = document.querySelector('.add');
    // commentBtn.addEventListener('click', () => com());
    const submit = document.getElementById('addPost');
    submit.addEventListener('submit', addComment);
}

export default comments;
  