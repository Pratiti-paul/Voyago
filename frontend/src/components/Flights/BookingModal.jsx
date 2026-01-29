import React, { useState } from 'react';
import { bookFlight } from '../../api/flight';
import './BookingModal.css';

const BookingModal = ({ flight, onClose, onBookingSuccess }) => {
    const [passengers, setPassengers] = useState([{ name: '', age: '', gender: 'Male' }]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handlePassengerChange = (index, field, value) => {
        const newPassengers = [...passengers];
        newPassengers[index][field] = value;
        setPassengers(newPassengers);
    };

    const addPassenger = () => {
        setPassengers([...passengers, { name: '', age: '', gender: 'Male' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const bookingData = {
                flightId: flight._id,
                passengers
            };
            const response = await bookFlight(bookingData);
            onBookingSuccess(response.data);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Booking failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="booking-modal">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Complete Your Booking</h2>
                
                <div className="flight-summary">
                    <h3>{flight.airline} - {flight.flightNumber}</h3>
                    <p>{flight.from} → {flight.to}</p>
                    <p className="price">Total Price: ₹{flight.price * passengers.length}</p>
                </div>

                {error && <div className="error-msg">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="passengers-list">
                        {passengers.map((p, index) => (
                            <div key={index} className="passenger-form">
                                <h4>Passenger {index + 1}</h4>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Name" 
                                        required 
                                        value={p.name}
                                        onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                                    />
                                    <input 
                                        type="number" 
                                        placeholder="Age" 
                                        required 
                                        value={p.age}
                                        onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                                    />
                                    <select 
                                        value={p.gender}
                                        onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button type="button" className="add-passenger-btn" onClick={addPassenger}>+ Add Passenger</button>
                    
                    <button type="submit" className="confirm-btn" disabled={loading}>
                        {loading ? 'Processing...' : 'Confirm Booking'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
