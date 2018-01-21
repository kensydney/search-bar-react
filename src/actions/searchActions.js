import * as types from './actionTypes';

export function setSearchTerm(searchTerm) {    
    return {type: types.SET_SEARCH_TERM, searchTerm};
}
