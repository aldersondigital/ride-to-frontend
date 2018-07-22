import { combineReducers } from 'redux';
import productsFilter from './productsFilter';
import products from './products';
import selectedProduct from './selectedProduct';

export default combineReducers({
  productsFilter,
  products,
  selectedProduct
});
