/**
 * Action creator <=> function returns an action
 */
import * as constants from './constants';

/**
 * Use constants for action.type is one the redux best practices
 * to make action types can be managed and updated easily
 */

// Async action creator return a function instead of an action
// Anyway, you can put your params to the async action creator
export const fetchURL = () => {
  return (dispatch, getState) => {
    console.log("You can get current state of store via the 2nd param");
    console.log(getState());

    // Dispatch action fetch url
    dispatch({
      type: constants.FETCH_URL
    });

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(json => {
        // Dispatch action fetch_success
        dispatch({
          type: constants.FETCH_SUCCESS,
          payload: json
        });
      }).catch(e => {
        // Dispatch action fetch_error
        dispatch({
          type: constants.FETCH_ERROR,
          payload: e.message
        });
      });
  };
};
