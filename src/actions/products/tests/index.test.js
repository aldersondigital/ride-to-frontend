/* global describe it expect */

import actions from '../index';
import { error, fetch, loading, populate } from '../index';

describe('actions/products/index', () => {
  it('should contain child actions', () => {
    expect(actions.error).toBeTruthy();
    expect(actions.fetch).toBeTruthy();
    expect(actions.loading).toBeTruthy();
    expect(actions.populate).toBeTruthy();
  });

  it('the child actions should be available as named exports', () => {
    expect(error).toBeTruthy();
    expect(fetch).toBeTruthy();
    expect(loading).toBeTruthy();
    expect(populate).toBeTruthy();
  });
});
