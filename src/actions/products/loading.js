import { PRODUCTS_LOADING } from '../../actionTypes/constants';

const loadingAction = (loading) => {
  return {
    type: PRODUCTS_LOADING,
    loading
  };
};

export default loadingAction;
