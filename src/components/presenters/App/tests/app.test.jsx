/* global describe it */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../index'

configure({ adapter: new Adapter() });

describe('App', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });
});
