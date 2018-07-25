import { connect } from 'react-redux';
import { set } from '../../../actions/ProductsFilter';
import ProductsFilterPresenter from '../../presenters/ProductsFilter';

const mapDispatchToProps = (dispatch) => {
  return {
    setProductsFilter: (productsFilter = false) => {
      console.log('set products filter');
      console.log(productsFilter);
      dispatch(set(productsFilter));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductsFilterPresenter);
