import React from 'react';
import PropTypes from 'prop-types';


const Site = (props) => {
  const { site } = props;
  return (
    <div className="inner-container site-content">
      <div>
        <a href={'http://' + site.siteUrl}>
          {site.siteUrl}
        </a>      
      </div>
      <div>{site.description}</div>    
    </div>
  );
};



Site.propTypes = {
  site: PropTypes.shape({
    siteUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};


export default Site;