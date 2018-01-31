import React from 'react';
import {shallow, mount} from 'enzyme';
import ConnectedSearchPage, {SearchPage} from '../../src/components/searchPage';
import configureStore,{configureMockStore} from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as actions from '../../src/actions/siteActions';
import * as types from '../../src/actions/actionTypes';
import thunk from 'redux-thunk';
import moxios from 'moxios';


const sites = [{
  "id": 2,
  "siteName": "Ebay",
  "siteUrl": "www.ebay.com.au",
  "description": "This is the description for ebay",
  "categoryIds": [
    1
  ]
}];

const testSites = {

  "sites":   [
    {
      "id": 1,
      "siteName": "SurferMag",
      "siteUrl": "www.surfermag.com",
      "description": "This is the description for SurferMag",
      "categoryIds": [
        2
      ]
    },
    {
      "id": 2,
      "siteName": "Ebay",
      "siteUrl": "www.ebay.com.au",
      "description": "This is the description for ebay",
      "categoryIds": [
        1
      ]    
    }
  ],
  "categories": [
    {
      "id": 1,
      "description": "Arts & Entertainment"
    },
    {
      "id": 2,
      "description": "Automotive"
    },
    {
      "id": 3,
      "description": "Business"
    },
    {
      "id": 4,
      "description": "Careers"
    }
  ]
};    
  

const middlewares = [thunk];

describe('<SearchPage in shallow rendering/>', () => {
  const initialState = {sites: sites, searchTerm: 'ebay'};
  const mockStore = configureStore(); 
  let store, container;
  
  beforeEach(() => {
    store = mockStore(initialState) ;
    container = shallow(<ConnectedSearchPage store={store} />);
  });
  
  it('render the connected searchPage component', () => {    
    expect(container.length).toEqual(1);
  });

  it('check Prop matches with initialState', () => {        
    expect(container.prop('sites')).toEqual(initialState.sites);
  });
});

describe('<SearchPage Mount in provider/>', () => {
  const initialState = {sites: sites, searchTerm: 'ebay'};
  const mockStore = configureStore(middlewares); 
  let store, wrapper;
    
  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><ConnectedSearchPage /></Provider>);
  });

  afterEach(() => {
    moxios.uninstall();
  });
    
  it('render the connected searchPage component', () => {    
    expect(wrapper.find(ConnectedSearchPage).length).toEqual(1);
  });
  
  it('check Prop matches with initialState', () => {        
    expect(wrapper.find(SearchPage).prop('sites')).toEqual(initialState.sites);
  });

  it('create LOAD_SEARCH_RESULT_SUCCESS after getSearchList', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testSites,
      });
    });
    const expectedActions = [
      {type: types.LOAD_SEARCH_RESULT_SUCCESS,
        sites: sites},        
    ];
    return store.dispatch(actions.getSearchList('ebay')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
      
});
