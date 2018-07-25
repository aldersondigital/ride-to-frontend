import { connect } from 'react-redux';
import ProductRelatedPresenter from '../../presenters/ProductRelated';

const BASE_TEN = 10;

const mapStateToProps = (state, ownProps) => {

  const selectedProduct = state.products.data.find((product) => parseInt(product.id, BASE_TEN) === parseInt(ownProps.productId, BASE_TEN));
  const relatedProducts = state.products.data.filter((product) => {
    return ((parseInt(product.category, BASE_TEN) === parseInt(selectedProduct.category, BASE_TEN))
              && (parseInt(product.id, BASE_TEN) !== parseInt(selectedProduct.id, BASE_TEN)));
  });

  if (typeof relatedProducts === "undefined") {
    return {
      products: []
    }
  }

  return {
    products: relatedProducts
  };
};

export default connect(
  mapStateToProps
)(ProductRelatedPresenter);
