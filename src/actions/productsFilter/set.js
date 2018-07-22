import { PRODUCTS_FILTER_SET } from '../../actionTypes/constants';

const set = (productsFilter = false) => ({
  type: PRODUCTS_FILTER_SET,
  productsFilter
});

export default set;
