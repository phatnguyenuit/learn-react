import * as constants from './constants';

const reducer = (prevState = 0, action) => {
  const { type, payload } = action;
  console.log(
    `Dispatching action has type = '${type}' with payload:\n${JSON.stringify(
      payload,
      null,
      2,
    )}`,
  );
  switch (type) {
    case constants.INCREASE: {
      const { count = 1 } = payload;
      return prevState + count;
    }
    case constants.DECREASE: {
      const { count = 1 } = payload;
      return prevState - count;
    }
    default:
      return prevState;
  }
};

export default reducer;
