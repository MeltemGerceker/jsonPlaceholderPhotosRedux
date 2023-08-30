import { combineReducers, legacy_createStore as createStore } from "redux";
import photoReducer from './reducers/photoReducer';

const defaultReducer = combineReducers({
    photoReducer
});

const store = createStore(defaultReducer);

export default store;