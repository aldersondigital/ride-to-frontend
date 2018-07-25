import { PRODUCTS_FILTER_SET } from '../../actionTypes/constants';

const set = (productsFilter = false) => {
  console.log('PRODUCTS FILTER SET - action');
  console.log(productsFilter);

  return {
    type: PRODUCTS_FILTER_SET,
    productsFilter
  }
}

export default set;
