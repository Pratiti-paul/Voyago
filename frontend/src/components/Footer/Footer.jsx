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
                        Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, 
                        praesentium magna conubia at perferendis, pretium, aenean aut ultrices.
                    </p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Contact Us</h4>
                    <div className="footer-contact-item">
                        <span>📞</span>
                        <span>+01 (123) 4567 90</span>
                    </div>
                    <div className="footer-contact-item">
                        <span>✉️</span>
                        <span>info.voyago.com</span>
                    </div>
                    <div className="footer-contact-item">
                        <span>📍</span>
                        <span>3146 Koontz, California</span>
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
