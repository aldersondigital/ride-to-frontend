/* global describe it expect */

import actions from '../index';
import { set } from '../index';

describe('actions/localAuthoritiesList/index', () => {
  it('should contain child actions', () => {
    expect(actions.set).toBeTruthy();
  });

  it('the child actions should be available as named exports', () => {
    expect(set).toBeTruthy();
  });
});
