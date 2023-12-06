import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'

const store = createStore(reducers, compose(applyMiddleware(reduxThunk as any) as any))
export default store
