import { PRODUCTS_FILTER_SET } from '../../actionTypes/constants';

const set = (productsFilter = false) => {

  return {
    type: PRODUCTS_FILTER_SET,
    productsFilter
  }
}

export default set;
