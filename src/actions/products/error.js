import { PRODUCTS_ERROR } from '../../actionTypes/constants';

const errorAction = (error) => {
  return {
    type: PRODUCTS_ERROR,
    error
  };
};

export default errorAction;
