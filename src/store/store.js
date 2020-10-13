import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from '../reducers/mainReducer';

const middleWare = [thunk];

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
