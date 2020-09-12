import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

const enhancers = applyMiddleware(
  thunkMiddleware,
  // middleware 2,
  // middleware 3,
  // ...
  // middleware n,
);

const store = createStore(reducer, enhancers);
export default store;
