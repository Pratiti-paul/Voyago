import React from 'react';
import './Flights.css';

const Flights = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Book Your Flights</h1>
            <p className="page-description">Search and book flights to your favorite destinations.</p>
            <div className="search-box">
                <input type="text" placeholder="From where?" className="search-input" />
                <input type="text" placeholder="To where?" className="search-input" />
                <button className="search-button">Search Flights</button>
            </div>
        </div>
    );
};

export default Flights;
