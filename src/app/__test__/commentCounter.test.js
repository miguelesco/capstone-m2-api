/**
 * @jest-environment jsdom
 */
/* eslint-disable linebreak-style */

import comments from '../modules/comment.js';

jest.mock('../modules/comment.js');

describe('Test for the comments of the elements', () => {
  const commentsData = [
    [
      {
        name: 'test',
        comment: 'testComment',
      },
      {
        name: 'test2',
        comment: 'testComment2',
      },
      {
        name: 'test3',
        comment: 'testComment3',
      },
    ],
    [
      {
        name: 'test',
        comment: 'testComment',
      },
    ],
  ];

  test('should show the number of comments of the id 0 ', () => {
    const elementID = 0;

    const numberOfComments = comments(commentsData, elementID);

    expect(numberOfComments).toBe(3);
  });

  test('should show the number of comments comments of the id 1', () => {
    const elementID = 1;

    const numberOfComments = comments(commentsData, elementID);

    expect(numberOfComments).toBe(1);
  });
});
