import React from 'react';
import './Hotels.css';

const Hotels = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Hotel Reservations</h1>
            <p className="page-description">Find the best stay for your next adventure.</p>
            <div className="search-box">
                <input type="text" placeholder="Where are you staying?" className="search-input" />
                <button className="search-button" style={{backgroundColor: 'var(--accent-color)'}}>Find Hotels</button>
            </div>
        </div>
    );
};

export default Hotels;
