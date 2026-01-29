import React, { useState, useEffect } from 'react';
import FlightSearchBar from '../../components/Flights/FlightSearchBar';
import FlightList from '../../components/Flights/FlightList';
import BookingModal from '../../components/Flights/BookingModal';
import { searchFlights } from '../../api/flight';
import './Flights.css';

const Flights = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);

    // Load some recommended flights on mount (optional, or just empty)
    useEffect(() => {
        // Could load default flights here
    }, []);

    const handleSearch = async (searchParams) => {
        setLoading(true);
        try {
            const response = await searchFlights(searchParams);
            setFlights(response.data);
            setSearched(true);
        } catch (error) {
            console.error("Error searching flights:", error);
            // Handle error (toast or alert)
        } finally {
            setLoading(false);
        }
    };

    const handleBook = (flight) => {
        setSelectedFlight(flight);
    };

    const handleBookingSuccess = (booking) => {
        alert("Booking Confirmed! Booking ID: " + booking._id);
        setSelectedFlight(null);
    };

    return (
        <div className="flights-page">
            <div className="flights-hero">
                <h1 className="hero-title">Explore the World</h1>
                <p className="hero-subtitle">Find the best flights at unbeatable prices.</p>
            </div>
            
            <div className="flights-container">
                <FlightSearchBar onSearch={handleSearch} />
                
                {loading ? (
                    <div className="loading-state">Searching flights...</div>
                ) : (
                    <FlightList flights={flights} onBook={handleBook} />
                )}
            </div>

            {selectedFlight && (
                <BookingModal 
                    flight={selectedFlight} 
                    onClose={() => setSelectedFlight(null)} 
                    onBookingSuccess={handleBookingSuccess}
                />
            )}
        </div>
    );
};

export default Flights;
