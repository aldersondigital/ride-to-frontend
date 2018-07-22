/* global describe expect it */

import reducer from '../productsFilter';

describe('reducers/productsFilter', () => {
  it('should return the initial state', () => {
    const expected = false;
    const found = reducer(undefined, {});

    expect(found).toEqual(expected);
  });
});
