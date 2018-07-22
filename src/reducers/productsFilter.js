import { PRODUCTS_FILTER_SET } from '../actionTypes/constants';
import initialState from '../initialState';

export default (state = initialState.productsFilter, action) => {
  switch (action.type) {
  case PRODUCTS_FILTER_SET:
    return action.productsFilter;
  default:
    return state;
  }
};
