import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content-container">
                <small className="copyright">
                    © {new Date().getFullYear()} Event Horizon. All rights reserved.
                </small>
            </div>
        </footer>
    );
};

export default Footer;