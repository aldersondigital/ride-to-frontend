/* global describe it */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductsFilter from '../index'
import store from '../../../../store';

configure({ adapter: new Adapter() });

describe('components/presenters/ProductsFilter', () => {
  it('ProductsFilter renders without crashing', () => {
    const mockFunc = () => {};

    shallow(
      <Provider store={ store }>
        <ProductsFilter setProductsFilter={ mockFunc } />
      </Provider>
    );
  });
});
