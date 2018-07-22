/* global describe it */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductsWrapper from '../index'
import store from '../../../../store';

configure({ adapter: new Adapter() });

describe('components/presenters/ProductsWrapper', () => {
  it('ProductsWrapper renders without crashing', () => {
    const mockFunc = () => {};

    shallow(
      <Provider store={store}>
        <ProductsWrapper fetchProducts={mockFunc} />
      </Provider>
    );
  });
});
