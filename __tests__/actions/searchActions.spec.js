import {setSearchTerm} from '../../src/actions/searchActions';
import {SET_SEARCH_TERM} from '../../src/actions/actionTypes';
import expect from 'expect';

describe('search actions', () => {
  describe('set search term', () => {
    it('should return the correct action type', () => {
      expect(setSearchTerm()).toEqual({
        type: SET_SEARCH_TERM
      });
    });
  });
});
