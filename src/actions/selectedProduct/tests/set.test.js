/* global describe it expect */

import { set } from '../index';
import { SELECTED_PRODUCT_SET } from '../../../actionTypes/constants';

describe('actions/selectedProduct/set', () => {
  it('should create an action to set a selected product', () => {
    const expectedAction = {
      type: SELECTED_PRODUCT_SET,
      selectedProduct: ''
    };

    expect(set()).toEqual(expectedAction);
  });
});
