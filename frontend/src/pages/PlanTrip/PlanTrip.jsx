import React from 'react';
import './PlanTrip.css';

const PlanTrip = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Plan Your Trip</h1>
            <p className="page-description">Create your dream itinerary and manage your travel schedule.</p>
            <div className="search-box">
                <input type="text" placeholder="Where to?" className="search-input" />
                <input type="date" className="search-input" />
                <button className="search-button" style={{backgroundColor: 'var(--accent-color)'}}>Start Planning</button>
            </div>
        </div>
    );
};

export default PlanTrip;
