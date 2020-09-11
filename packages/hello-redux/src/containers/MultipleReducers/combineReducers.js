// Implement redux's combineReducers from scratch

/**
 * Combine all receive reducers to only one reducer
 * @param {{[key:string]: (state: any, action: {type: string; payload: any}) => any}} reducers
 * @returns {(state: any, action: {type: string; payload: any}) => any} combinationReducer
 */
const combineReducers = reducers => {
  const finalReducers = {};
  const reducerKeys = Object.keys(reducers);

  reducerKeys.forEach(key => {
    const reducer = reducers[key];
    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducer === 'undefined') {
        console.warn(`No reducer provided for key "${key}"`);
      }

      if (typeof reducer !== 'function') {
        console.warn(`Reducer ${key} received is not a function.`);
      }
    }

    if (typeof reducer === 'function') {
      finalReducers[key] = reducer;
    }
  });

  const finalReducerKeys = Object.keys(finalReducers);

  /**
   * Combination reducer
   * @param {any} state
   * @param {{type: string; payload: any}} state
   * @returns {(state: any, action: {type: string; payload: any}) => any}  combinationReducer Combination reducer
   */
  return function combination(state = {}, action) {
    let hasChanged = false;
    const nextState = {};

    finalReducerKeys.forEach(key => {
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);

      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    });

    hasChanged =
      hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
};

export default combineReducers;
