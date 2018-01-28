import * as siteActions from '../../src/actions/siteActions';
import * as actionTypes from '../../src/actions/actionTypes';
import expect from 'expect';

describe('site actions', () => {
  describe('getSearchList()', () => {
    it('should call dispatch from the thunk action', () => {
      const dispatch = jest.fn();      

      const testAction = siteActions.getSearchList('ebay')(dispatch);

      const item = 'ebay1';

      testAction.then(res => {
        expect(dispatch).toHaveBeenCalled();
      })
        .catch(e => {
          console.error(e);
        });      

      
    });    
  });
});
