import { PRODUCTS_FILTER_VALUE_DATE_ORDER, PRODUCTS_FILTER_VALUE_TYPE } from '../actionTypes/constants';

export const filterProducts = (products, productsFilterType) => {
  switch (productsFilterType) {
  case PRODUCTS_FILTER_VALUE_DATE_ORDER:
    return products;
  case PRODUCTS_FILTER_VALUE_TYPE:
    return products;
  default:
    return products;
  }
};
