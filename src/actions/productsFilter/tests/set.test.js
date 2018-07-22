/* global describe it expect */

import { set } from '../index';
import { PRODUCTS_FILTER_SET } from '../../../actionTypes/constants';

describe('actions/productsFilter/set', () => {
  it('should create an action to set a productsFilter', () => {
    const expectedAction = {
      type: PRODUCTS_FILTER_SET,
      productsFilter: false
    };

    expect(set()).toEqual(expectedAction);
  });
});
