/* eslint-disable linebreak-style */
const modal = document.getElementById('pop');
export const modalBtn = document.querySelector('.detailsBtn');
export const overlay = document.querySelector('.overlay');
export const popUp = document.querySelector('.pop-up');

export default function openModal() {
  if (modal.style.display === 'none') {
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}

export const closePopUpHandler = (closePopUpBtn) => {
  overlay.classList.add('hidden');
  closePopUpBtn.removeEventListener('click', closePopUpHandler);
};
