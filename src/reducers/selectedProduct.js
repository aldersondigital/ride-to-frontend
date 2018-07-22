import { SELECTED_PRODUCT_SET } from '../actionTypes/constants';
import initialState from '../initialState';

export default (state = initialState.selectedProduct, action) => {
  switch (action.type) {
  case SELECTED_PRODUCT_SET:
    return action.selectedProduct;
  default:
    return state;
  }
};
