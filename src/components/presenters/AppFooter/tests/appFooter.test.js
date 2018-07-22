/* global describe it */
/* eslint no-unused-vars:off */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppFooter from '../index';

configure({ adapter: new Adapter() });

describe('components/presenters/AppFooter', () => {
  it('AppFooter renders without crashing', () => {
    shallow(<AppFooter />);
  });
});
