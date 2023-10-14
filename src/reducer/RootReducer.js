import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({

    counter: counterReducer,
    user: userReducer

});

export default rootReducer;