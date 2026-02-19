import React, { useState, useEffect } from 'react';
import { getAllAirports } from '../../api/flight';
import './FlightSearchBar.css';

const FlightSearchBar = ({ onSearch }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [airports, setAirports] = useState([]);

    useEffect(() => {
        // Fetch airports for autosuggest (mock implementation for now if API not ready)
        getAllAirports().then(res => setAirports(res.data)).catch(err => console.error(err));
    }, []);

    const handleSearch = () => {
        onSearch({ from, to, date, passengers });
    };

    return (
        <div className="flight-search-bar">
            <div className="search-field">
                <label>FROM</label>
                <input 
                    type="text" 
                    placeholder="Delhi" 
                    value={from} 
                    onChange={(e) => setFrom(e.target.value)} 
                    list="airport-suggestions"
                />
            </div>
            <div className="search-field">
                <label>TO</label>
                <input 
                    type="text" 
                    placeholder="Mumbai" 
                    value={to} 
                    onChange={(e) => setTo(e.target.value)} 
                    list="airport-suggestions"
                />
            </div>
            <div className="search-field">
                <label>DEPARTURE</label>
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                />
            </div>
            <div className="search-field">
                <label>PASSENGERS</label>
                <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                    {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} Traveler{num > 1 ? 's' : ''}</option>
                    ))}
                </select>
            </div>
            <button className="search-btn" onClick={handleSearch}>SEARCH</button>

            <datalist id="airport-suggestions">
                {airports.map(airport => (
                    <option key={airport._id} value={airport.city}>{airport.code} - {airport.airportName}</option>
                ))}
            </datalist>
        </div>
    );
};

export default FlightSearchBar;
