/* global describe it expect */

import loading from '../loading';
import { PRODUCTS_LOADING } from '../../../actionTypes/constants';

describe('actions/products/loading', () => {
  it('should create an action with a loading property', () => {
    const knownAction = loading;

    const expectedAction = {
      type: PRODUCTS_LOADING,
      loading: true
    };

    expect(knownAction(true)).toEqual(expectedAction);
  });
});
