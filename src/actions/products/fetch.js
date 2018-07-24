import $ from 'jquery';
import error from './error';
import populate from './populate';
import loading from './loading';
import config from '../../config';

const API_MODEL_NAME = 'products';

const fetch = () => (dispatch) => {
  dispatch(loading(true));

  $.get({
    url: config.ROOT_API_URL + API_MODEL_NAME + '/?format=json',
    type: 'GET',
    dataType: "json",
  })
    .then((response) => {
      dispatch(loading(false));
      return response;
    })
    .then(data => dispatch(populate(data)))
    .catch((e) => {
      dispatch(error(true));
    })
};

export default fetch;
