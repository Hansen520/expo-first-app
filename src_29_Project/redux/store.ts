<<<<<<< HEAD
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'

const store = createStore(reducers, compose(applyMiddleware(reduxThunk as any) as any))
export default store
=======
/*
 * @Date: 2023-11-28 16:51:41
 * @Description: description
 */
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;
>>>>>>> 2f1990974ff6510a278077bc0aad090b9f7cee6a
