import React from 'react';
import HeaderImage from '../../images/headerImage.png';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const Header = ({loading}) => {
    return (
        <div className="header">
            <div className="inner-container">
                <img className="header-image" src={HeaderImage} />  
                <span className="header-cross">
                <Glyphicon glyph="remove" />
                </span>
            </div>          
        </div>
    );
};

export default Header;