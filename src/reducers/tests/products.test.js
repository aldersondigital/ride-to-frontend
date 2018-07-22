/* global describe expect it */

import reducer from '../products';

describe('reducers/products', () => {
  it('should return the initial state', () => {
    const expected = [];
    const found = reducer(undefined, {}).data;

    expect(found).toEqual(expected);
  });
});
