import { combineReducers } from 'redux';
import { urlsReducer } from './Slice/urlsSlice';

const rootReducer = combineReducers({
    Urls : urlsReducer
})

export default rootReducer ;