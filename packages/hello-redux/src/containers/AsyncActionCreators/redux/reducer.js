import * as constants from './constants';

const getInitialState = () => ({
  loading: false,
  data: undefined,
  error: undefined
});

const reducer = (prevState = getInitialState(), action) => {
  const { type, payload } = action;
  switch (type) {
    case constants.FETCH_URL: {
      return {
        ...prevState,
        loading: true,
        error: undefined,
        data: undefined
      };
    }
    case constants.FETCH_SUCCESS: {
      return {
        ...prevState,
        data: payload,
        loading: false,
        error: undefined,
      };
    }
    case constants.FETCH_ERROR: {
      return {
        ...prevState,
        error: payload,
        data: undefined,
        loading: false,
      };
    }
    default:
      return prevState;
  }
};

export default reducer;
