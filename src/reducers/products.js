import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_POPULATE
} from '../actionTypes/constants';
import initialState from '../initialState';

export default (state = initialState.products, action) => {
  switch (action.type) {
  case PRODUCTS_ERROR:
    return Object.assign({}, state, {
      error: action.error
    });
  case PRODUCTS_LOADING:
    return Object.assign({}, state, {
      loading: action.loading
    });
  case PRODUCTS_POPULATE:
    return Object.assign({}, state, {
      data: action.data
    });
  default:
    return state;
  }
};
