import errorAction from './error';
import fetchAction from './fetch';
import loadingAction from './loading';
import populateAction from './populate';

export const error = errorAction;
export const fetch = fetchAction;
export const loading = loadingAction;
export const populate = populateAction;

export default {
  error,
  fetch,
  loading,
  populate
};
