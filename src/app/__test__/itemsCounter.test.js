/**
 * @jest-environment jsdom
 */
/* eslint-disable linebreak-style */

import numberOfItems from '../modules/elementCount.js';

jest.mock('../modules/elementCount.js');

describe('Test for the items count task', () => {
  document.body.innerHTML = `<div class="list-container">
    <ul class="nav-wrapper ">
      <li class="nav-element"></li>
    </ul>
  </div>`;

  const elements = [
    { name: 'beer' },
    { name: 'beer light' },
    { name: 'beer strong' },
    { name: 'beer white' },
    { name: 'beer traditional' },
  ];

  test('should display the total amount of items in the HTML', () => {
    const { length } = elements;
    const liNav = document.querySelector('.nav-element');

    numberOfItems(length, liNav);

    expect(liNav.children[0].textContent).toBe('Beers Available(5)');
  });
});
