import $ from 'jquery';
import error from './error';
import populate from './populate';
import loading from './loading';

const fetch = () => (dispatch) => {
  dispatch(loading(true));

  $.get({
    url: 'https://quiet-brushlands-87332.herokuapp.com/bucketlists/?format=json',
    headers: {
      'x-api-version': 2,
      accept: 'application/json'
    }
  })
    .then((response) => {
      dispatch(loading(false));
      return response;
    })
    .then(data => dispatch(populate(data)))
    .catch(() => dispatch(error(true)));
};

export default fetch;
