/* global describe expect it */

import rootReducer from '../index';
import initialState from '../../initialState';

describe('reducers/root', () => {
  it('should return the initial state', () => {
    const expected = initialState;
    const found = rootReducer(undefined, {});

    expect(found).toEqual(expected);
  });
});
