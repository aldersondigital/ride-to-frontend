import { PRODUCTS_POPULATE } from '../../actionTypes/constants';

const poplateAction = (data) => {
  return {
    type: PRODUCTS_POPULATE,
    data
  };
};

export default poplateAction;
