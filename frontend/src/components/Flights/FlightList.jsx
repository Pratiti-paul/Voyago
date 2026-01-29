import React from 'react';
import FlightCard from './FlightCard';
import './FlightList.css';

const FlightList = ({ flights, onBook }) => {
    if (!flights || flights.length === 0) {
        return (
            <div className="no-flights">
                <p>No flights found. Try changing your search parameters.</p>
            </div>
        );
    }

    return (
        <div className="flight-list">
            {flights.map(flight => (
                <FlightCard key={flight._id} flight={flight} onBook={onBook} />
            ))}
        </div>
    );
};

export default FlightList;
