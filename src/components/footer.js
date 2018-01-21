import React from 'react';
import FooterImage from '../../images/footerImage.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="inner-container">
                <div className="footer-image-container">
                    <img className="footer-image" src={FooterImage} /> 
                </div>
                <span className="footer-text">
                    @2012 Adslot | Adslot Publisher | Adslot Create | Terms | Privacy Policy | Payment Policy 
                </span>
            </div>
        </div>
    );
};

export default Footer;