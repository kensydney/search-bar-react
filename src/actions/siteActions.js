import * as types from './actionTypes';
import siteApi from '../api/siteApi';

export function loadSitesSuccess(sites) {
    return { type: types.LOAD_SITES_SUCCESS, sites};
}

export function loadSearchResultSuccess(sites) {
    return { type: types.LOAD_SEARCH_RESULT_SUCCESS, sites};
}

export function loadSites() {
 return function(dispatch){
    return siteApi.getAllSites().then(sites => {
        dispatch(loadSitesSuccess(sites.sites));
    }).catch(error => {
        throw(error);
    });
 };
}

export function getSearchList(searchTerm) {
    return function(dispatch){
        return siteApi.getSearchList(searchTerm).then(sites => {
            dispatch(loadSearchResultSuccess(sites||null));
        }).catch(error => {
            throw(error);
        });
    }
}