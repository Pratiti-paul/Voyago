import React from 'react';
import './Trains.css';

const Trains = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Train Bookings</h1>
            <p className="page-description">Fast and reliable train travel options.</p>
            <div className="search-box">
                <input type="text" placeholder="Source station" className="search-input" />
                <input type="text" placeholder="Destination station" className="search-input" />
                <button className="search-button" style={{backgroundColor: 'var(--secondary-color)'}}>Search Trains</button>
            </div>
        </div>
    );
};

export default Trains;
