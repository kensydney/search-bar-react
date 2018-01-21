import {combineReducers} from 'redux';
import sites from './siteReducer';
import search from './searchReducer';

const rootReducer = combineReducers({
  sites,
  search
});

export default rootReducer;