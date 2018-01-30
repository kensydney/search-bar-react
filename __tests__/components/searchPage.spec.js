import React from 'react';
import {shallow, mount} from 'enzyme';
import ConnectedSearchPage, {SearchPage} from '../../src/components/searchPage';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as actions from '../../src/actions/siteActions';
import * as types from '../../src/actions/actionTypes';


const sites = [{
  "id": 2,
  "siteName": "Ebay",
  "siteUrl": "www.ebay.com.au",
  "description": "This is the description for ebay",
  "categoryIds": [
    1
  ]
}];

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
  const mockStore = configureStore(); 
  let store, wrapper;
    
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><ConnectedSearchPage /></Provider>);
  });
    
  it('render the connected searchPage component', () => {    
    expect(wrapper.find(ConnectedSearchPage).length).toEqual(1);
  });
  
  it('check Prop matches with initialState', () => {        
    expect(wrapper.find(SearchPage).prop('sites')).toEqual(initialState.sites);
  });

  xit('check action on dispatching ', () => {
    let action;
    store.dispatch(actions.getSearchList('ebay'));
    action = store.getActions();
    expect(action[0].type).toBe(types.LOAD_SEARCH_RESULT_SUCCESS);
  });
});
