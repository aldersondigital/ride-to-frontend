import { connect } from 'react-redux';
import ProductsPresenter from '../../presenters/Products';
import { filterProducts as filterProductsSelector } from '../../../selectors/products';

const mapStateToProps = (state) => {
  const NO_DATA = 0;

  return {
    products: filterProductsSelector(state.products.data, state.productsFilter),
    hasProducts: (function() {
      console.log('HAS PRODUCTS');
      console.log('state.products');
      console.log(state);
      return ((state.products.error === false) && (state.products.loading === false) && (Object.keys(state.products.data).length > NO_DATA)); 
    })
  };
};

export default connect(
  mapStateToProps
)(ProductsPresenter);
