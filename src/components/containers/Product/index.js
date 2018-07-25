import { connect } from 'react-redux';
import ProductPresenter from '../../presenters/Product';

const BASE_TEN = 10;
const NO_PRODUCTS = 0;

const mapStateToProps = (state, ownProps) => {

  const numberProducts = state.products.data.length;
  const productId = ownProps.productId;
  let product = false;

  if (numberProducts === NO_PRODUCTS) {
    return { product: false }
  }

  product = state.products.data.find((product) => {
    return (parseInt(product.id, BASE_TEN) === parseInt(productId, BASE_TEN));
  });

  if (typeof product === "undefined") {
    return { product: false }
  }

  return { product };
};

export default connect(
  mapStateToProps
)(ProductPresenter);
