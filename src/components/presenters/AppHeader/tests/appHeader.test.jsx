/* global describe it */
/* eslint no-unused-vars:off */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppHeader from '../index';

configure({ adapter: new Adapter() });

describe('components/presenters/AppHeader', () => {
  it('AppHeader renders without crashing', () => {
    shallow(<AppHeader />);
  });
});
