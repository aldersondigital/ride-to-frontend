/* global describe it expect */

import error from '../error';
import { PRODUCTS_ERROR } from '../../../actionTypes/constants';

describe('actions/products/error', () => {
  it('should create an action that with an error value', () => {
    const knownAction = error;

    const expectedAction = {
      type: PRODUCTS_ERROR,
      error: true
    };

    expect(knownAction(true)).toEqual(expectedAction);
  });
});
