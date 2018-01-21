import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function siteReducer(state = initialState.sites, action)
{
    switch(action.type){
        case types.LOAD_SITES_SUCCESS:
          return action.sites;

        case types.LOAD_SEARCH_RESULT_SUCCESS:
          return action.sites; 
    
        default:
          return state;
    }
}