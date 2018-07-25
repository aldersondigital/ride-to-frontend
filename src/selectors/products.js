import { 
  CATEGORY_FILM_ID, 
  CATEGORY_WEB_ID, 
  PRODUCTS_FILTER_FILM, 
  PRODUCTS_FILTER_WEB 
} from '../actionTypes/constants';

export const filterProducts = (products, productsFilterType) => {
  switch (productsFilterType) {

  case PRODUCTS_FILTER_FILM:
    return products.filter((product) => product.category === CATEGORY_FILM_ID);

  case PRODUCTS_FILTER_WEB:
    return products.filter((product) => product.category === CATEGORY_WEB_ID);
  
  default:
    return products;
  }
};
