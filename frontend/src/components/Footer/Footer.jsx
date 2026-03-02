import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo-container">
                        <span role="img" aria-label="plane" style={{ fontSize: '2rem' }}>✈️</span>
                        <span className="footer-brand">VOYAGO</span>
                    </div>
                    <p className="footer-description">
                        Voyago is your trusted travel partner for flights, hotels, trains, and curated holiday packages.
We make travel planning simple, affordable, and seamless.
                    </p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Contact Us</h4>
                    <div className="footer-contact-item">
                        <span>📞</span>
                        <span>+91 62903 70398</span>
                    </div>
                    <div className="footer-contact-item">
                        <span>✉️</span>
                        <span>support@voyago.com</span>
                    </div>
                    <div className="footer-contact-item">
                        <span>📍</span>
                        <span>Mumbai, India</span>
                    </div>
                </div>

                <div className="footer-section">
                    <p className="footer-newsletter-text">
                        Subscribe our newsletter for more update & news !!
                    </p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Enter Your Email" 
                            className="newsletter-input"
                        />
                        <button type="submit" className="subscribe-button">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
