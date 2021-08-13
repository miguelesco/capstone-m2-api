/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
export const modalBtn = document.querySelector('.detailsBtn');
export const overlay = document.querySelector('.overlay');
export const popUp = document.querySelector('.pop-up');

export const closePopUpHandler = (closePopUpBtn) => {
  overlay.classList.add('hidden');
  closePopUpBtn.removeEventListener('click', closePopUpHandler);
};

export const renderComments = (comments = []) => {
  const commentContainer = document.querySelector('.comments-display');
  comments.forEach((data) => {
    const { username, comment, creation_date } = data;
    const newComment = `<p>${creation_date} ${username}:${comment}</p>`;
    commentContainer.innerHTML += newComment;
  });
};
