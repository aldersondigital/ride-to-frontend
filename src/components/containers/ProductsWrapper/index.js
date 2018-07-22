import { connect } from 'react-redux';
import { fetch } from '../../../actions/products';
import ProductsWrapperPresenter from '../../presenters/Products';

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => {
    dispatch(fetch());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ProductsWrapperPresenter);
