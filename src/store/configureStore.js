import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from '../reducer/rootReducer';

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger))
    return store;
}

export default configureStore;
