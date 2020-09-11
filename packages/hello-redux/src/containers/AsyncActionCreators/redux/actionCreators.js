/**
 * Action creator <=> function returns an action
 */
import * as constants from './constants';

/**
 * Use constants for action.type is one the redux best practices
 * to make action types can be managed and updated easily
 */

export const fetchURL = (dispatch) => {
  dispatch({
    type: constants.FETCH_URL
  });

  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(json => dispatch({
      type: constants.FETCH_SUCCESS,
      payload: json
    })).catch(e => dispatch({
      type: constants.FETCH_ERROR,
      payload: e.message
    }));
};
