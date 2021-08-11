/* eslint-disable linebreak-style */
const modal = document.getElementById('pop');
export const modalBtn = document.querySelector('.detailsBtn');

export default function openModal() {
//   const modal = document.getElementById('pop');
  if (modal.style.display === 'none') {
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
