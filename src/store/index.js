import {
    createStore,
    combineReducers
} from 'redux';
import palabraReducer from './Reducers'

const reducers = combineReducers(
    { palabraReducer }
)

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;