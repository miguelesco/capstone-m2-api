/* eslint-disable linebreak-style */

import { liNav } from './utilities.js';

const numberOfItems = (beersLength = 0) => {
  const beerNumber = `<p>Beers Available(${beersLength})</p>`;
  liNav.innerHTML = beerNumber;
};

export default numberOfItems;