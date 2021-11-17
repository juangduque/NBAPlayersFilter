import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk)
  )  
);

export default store;