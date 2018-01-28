import expect from 'expect';
import searchReducer from '../../src/reducers/searchReducer';
import {SET_SEARCH_TERM} from '../../src/actions/actionTypes';
import {setSearchTerm} from '../../src/actions/searchActions';

describe('SearchReducer', () => {
  it('returns the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(
      '');
  });

  it('handles the set search term action', () => {
    expect(searchReducer(undefined, setSearchTerm("ebay"))).toEqual(
      'ebay'
    );
  });
});
