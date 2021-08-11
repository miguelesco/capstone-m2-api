const modal = document.getElementById('pop');
export const modalBtn = document.querySelector('.detailsBtn');

export default function openModal() {
//   const modal = document.getElementById('pop');
  if (modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display='none';
    }
}



// export const openModal = () => {
//   modal.style.display = 'block';
// }

// export const popDiv  = document.getElementById('pop');
// export const div = document.querySelector('.details');

// const openPopBtn = document.querySelectorAll('.detailsBtn');
// const closePopBtn = document.querySelector('.close-btn');
// closePopBtn.setAttribute('data-close-btn');
// closePopBtn.classList.add('close-btn');
// const overlay = document.getElementById('overlay')

// openPopBtn.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector('.commentBtn');
//     openPop(modal);
//   })
// })

// closePopBtn.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.pop-up-display');
//     closePop(modal);
//   })
// })

// const openPop = modal => {
//   if(modal == null)return
//   modal.classList.add('active');
//   overlay.classList.add('active');
// }

// const closePop = modal => {
//   if(modal == null)return
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// }

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.pop-up-display.active');
//   modals.forEach(modal => {
//     closePop(modal);
//   })
// })

// popDiv.classList.remove('.pop-up-display');
//     popDiv.classList.add('.pop');
//     div.innerHTML = `
//        <img class="image" src="${image_url}" alt="${name}"></img>
//        <div class="beer-title">
//          <p>${name}</p>
//          <i class="far fa-heart"></i>
//        </div>`;  
	   
