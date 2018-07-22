/* global describe it expect */

import products from '../index';

describe('actions/products/fetch', () => {
  it('should be a function', () => {
    expect(products.fetch).toBeFunction;
  });
});
