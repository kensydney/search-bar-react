import React from 'react';
import Site from './site';
import PropTypes from 'prop-types';

const SiteList = (props) => {
  return(
    <div>
      {
        props.sites.map(site =>
          <Site
            key={site.id}
            site={site}
          />
        )};      
    </div>
  );
};

SiteList.propTypes = {
    sites: PropTypes.array.isRequired
};

export default SiteList;