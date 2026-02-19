import React from 'react';
import './FlightCard.css';

const FlightCard = ({ flight, onBook }) => {
    return (
        <div className="flight-card">
            <div className="flight-info">
                <div className="airline-info">
                    {/* Placeholder for airline logo */}
                    <div className="airline-logo">{flight.airline.charAt(0)}</div> 
                    <div>
                        <span className="airline-name">{flight.airline}</span>
                        <span className="flight-number">{flight.flightNumber}</span>
                    </div>
                </div>
                
                <div className="flight-route">
                    <div className="route-point">
                        <span className="time">{flight.departureTime}</span>
                        <span className="city">{flight.from}</span>
                    </div>
                    <div className="duration-line">
                        <span className="duration">{flight.duration}</span>
                        <div className="line"></div>
                        <span className="stops">Non-stop</span>
                    </div>
                    <div className="route-point">
                        <span className="time">{flight.arrivalTime}</span>
                        <span className="city">{flight.to}</span>
                    </div>
                </div>

                <div className="flight-price">
                    <span className="price">₹{flight.price}</span>
                    <button className="book-btn" onClick={() => onBook(flight)}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
