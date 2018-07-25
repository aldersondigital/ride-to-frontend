import { PRODUCTS_POPULATE } from '../../actionTypes/constants';
import { appendProductCategoryText } from '../../selectors/products';

const poplateAction = (data) => {
  return {
    type: PRODUCTS_POPULATE,
    data: appendProductCategoryText(data)
  };
};

export default poplateAction;
