import React from 'react';
import './MyTrips.css';

const MyTrips = () => {
    return (
        <section className="section-container compact">
            <div className="section-header">
                <h2>My Upcoming Trips</h2>
            </div>
            <div className="trip-snapshot">
                <div className="trip-card-mini">
                    <div className="trip-date">
                        <span className="day">12</span>
                        <span className="month">NOV</span>
                    </div>
                    <div className="trip-info">
                        <h4>Bangalore to Goa</h4>
                        <span className="status confirmed">Confirmed</span>
                    </div>
                    <button className="view-btn">View</button>
                </div>
            </div>
        </section>
    );
};

export default MyTrips;
