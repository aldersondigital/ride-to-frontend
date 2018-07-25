import { 
  CATEGORY_FILM_ID, 
  CATEGORY_FILM_TEXT,
  CATEGORY_UNKNOWN_TEXT,
  CATEGORY_WEB_ID, 
  CATEGORY_WEB_TEXT, 
  PRODUCTS_FILTER_FILM, 
  PRODUCTS_FILTER_WEB 
} from '../actionTypes/constants';

const BASE_TEN = 10;

export const filterProducts = (products, productsFilterType) => {
  switch (productsFilterType) {

  case PRODUCTS_FILTER_FILM:
    console.log('FILM SELECTED');
    return products.filter((product) => parseInt(product.category, BASE_TEN) === parseInt(CATEGORY_FILM_ID, BASE_TEN));

  case PRODUCTS_FILTER_WEB:
    console.log('WEB SELECTED');
    return products.filter((product) => parseInt(product.category, BASE_TEN) === parseInt(CATEGORY_WEB_ID, BASE_TEN));

  default:
     return products;
  }
};

export const appendProductCategoryText = (products) => {
  return products.map((product) => {

    if (parseInt(product.category, BASE_TEN) === parseInt(CATEGORY_FILM_ID, BASE_TEN)) {
      product.categoryText = CATEGORY_FILM_TEXT;
    
    } else if (parseInt(product.category, BASE_TEN) === parseInt(CATEGORY_WEB_ID, BASE_TEN)) {
      product.categoryText = CATEGORY_WEB_TEXT;
    
    } else {
      product.categoryText = CATEGORY_UNKNOWN_TEXT;
    }

    return product;
  });
};
