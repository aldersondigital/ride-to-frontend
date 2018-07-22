/* global describe expect it */

import { filterProducts } from '../products';

describe('selectors/products/filterProducts', () => {
  it('filterProducts is a valid function', () => {
    expect(filterProducts).isFunction;
  });

  it('filterProducts returns the received value of products when productsFilterType is false', () => {
    const products = [];
    const expected = products;
    const known = filterProducts(products, false);

    expect(known).toEqual(expected);
  });
});
