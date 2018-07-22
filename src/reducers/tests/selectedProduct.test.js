/* global describe expect it */

import reducer from '../selectedProduct';

describe('reducers/selectedProduct', () => {
  it('should return the initial state', () => {
    const expected = false;
    const found = reducer(undefined, {});

    expect(found).toEqual(expected);
  });
});
