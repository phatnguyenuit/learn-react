/**
 * Action creator <=> function returns an action
 */
import * as constants from './constants';

/**
 * Use constants for action.type is one the redux best practices
 * to make action types can be managed and updated easily
 */

export const increase = (count = 1) => ({
  type: constants.INCREASE,
  payload: {
    count,
  },
});

export const decrease = (count = 1) => ({
  type: constants.DECREASE,
  payload: {
    count,
  },
});
