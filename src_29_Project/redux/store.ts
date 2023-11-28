/*
 * @Date: 2023-11-28 16:51:41
 * @Description: description
 */
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;