/* global describe it */
/* eslint no-unused-vars:off */

import React from 'react';
import { Provider } from 'react-redux';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductsFilterContainer from '../index';
import store from '../../../../store';

configure({ adapter: new Adapter() });

describe('components/containers/ProductsFilter', () => {
  it('ProductsFilterContainer renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <ProductsFilterContainer />
      </Provider>
    );
  });
});
