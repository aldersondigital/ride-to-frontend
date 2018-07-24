import { connect } from 'react-redux';
import { fetch } from '../../../actions/products';
import ProductsWrapperPresenter from '../../presenters/ProductsWrapper';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetch());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ProductsWrapperPresenter);
