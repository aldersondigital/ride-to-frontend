/* global describe it expect */

import populate from '../populate';
import { PRODUCTS_POPULATE } from '../../../actionTypes/constants';

describe('actions/products/populate', () => {
  it('should create an action with a data property', () => {
    const knownAction = populate;

    const expectedAction = {
      type: PRODUCTS_POPULATE,
      data: true
    };

    expect(knownAction(true)).toEqual(expectedAction);
  });
});
