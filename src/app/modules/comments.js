const submit = document.getElementById('add');
import apiCall, { appID, error } from './utilities.js';


const addComment = (e) => {
    e.preventDefault();

    const name = document.getElementById('fname');
    const comment = document.getElementById('comment');
    fetch('`${appID}/comments`', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name: name,
        comment: comment
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  };
  
//   submit.addEventListener('click', () => addComment);
  export default addComment;
// const com = async (beerComment) => {
//     try {
//       const beerID = {
//         item_id: beerComment.id,
//       };
//       const beerCom = {
//           username: beerComment.username,
//           comment: beerComment.comment
//       }
//       const com = await apiCall(`${appID}/comments`, 'POST', beerID, beerCom, true);
//       console.log(com);
//     } catch (err) {
//       error(err);
//     }
//   };
  
//   export default com;