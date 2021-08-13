/* eslint-disable linebreak-style */
/* eslint-disable no-alert */

const commentsCounter = (arrayOfElements) => arrayOfElements.length;

const comments = (beerInfo, elementID) => {
  const comment = commentsCounter(beerInfo[elementID]);
  return comment;
};

export default comments;
