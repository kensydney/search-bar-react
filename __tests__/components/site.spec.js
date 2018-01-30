import React from 'react';
import {shallow} from 'enzyme';
import Site from '../../src/components/site';
import renderer from 'react-test-renderer';


const site = {
  "id": 2,
  "siteName": "Ebay",
  "siteUrl": "www.ebay.com.au",
  "description": "This is the description for ebay",
  "categoryIds": [
    1
  ]
};

describe('<Site />', () => {
  it('should show site url', () => {
    const wrapper = shallow(<Site site = {site} />);    
    expect(wrapper.find('a').text()).toBe(site.siteUrl);
  });
});

describe('Site Snapshot',()=>{
  it('capturing Snapshot of Site', () => {
    const renderedValue =  renderer.create(<Site site={site}/>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});