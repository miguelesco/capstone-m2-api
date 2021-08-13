/* eslint-disable linebreak-style */

const numberOfItems = (beersLength = 0, liNav) => {
  const beerNumber = `<p>Beers Available(${beersLength})</p>`;
  liNav.innerHTML = beerNumber;
};

export default numberOfItems;