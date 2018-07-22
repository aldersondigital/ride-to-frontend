/* global describe expect it */

import store from '../index';
import { fetch as fetchProducts } from '../../actions/products';
import { set as setProductsFilter } from '../../actions/productsFilter';
import { set as setSelectedProduct } from '../../actions/selectedProduct';

describe('store', () => {
  it('should set the products filter', () => {
    const expected = 'myProductsFilter';

    store.dispatch(setProductsFilter(expected));

    const found = store.getState().productsFilter;

    expect(found).toEqual(expected);
  });
});

describe('store', () => {
  it('should set the selected product', () => {
    const expected = 'mySelectedProduct';

    store.dispatch(setSelectedProduct(expected));

    const found = store.getState().selectedProduct;

    expect(found).toEqual(expected);
  });
});

describe('store', () => {
  it('should request the products', () => {
    const foundBeforeRequest = store.getState().products.loading;
    const expectedBeforeRequest = false;

    expect(foundBeforeRequest).toEqual(expectedBeforeRequest);

    store.dispatch(fetchProducts());

    const foundAfterRequest = store.getState().products.loading;
    const expectedAfterRequest = true;

    expect(foundAfterRequest).toEqual(expectedAfterRequest);
  });
});
