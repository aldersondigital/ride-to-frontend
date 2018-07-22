import { SELECTED_PRODUCT_SET } from '../../actionTypes/constants';

const set = (selectedProduct = '') => ({
  type: SELECTED_PRODUCT_SET,
  selectedProduct
});

export default set;
