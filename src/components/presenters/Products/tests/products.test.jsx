/* global describe it */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Products from '../index'
import store from '../../../../store';

configure({ adapter: new Adapter() });

describe('components/presenters/Products', () => {
  it('Products renders without crashing', () => {
    const mockHasProducts = false;
    const mockProducts = {};
    shallow(
      <Provider store={store}>
        <Products hasProducts={ mockHasProducts } products={ mockProducts } />
      </Provider>
    );
  });
});
