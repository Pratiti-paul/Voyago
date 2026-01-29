import API from '../api';

export const searchFlights = (params) => API.get('/flights/search', { params });
export const getAllAirports = () => API.get('/flights/airports/all');
export const getFlightById = (id) => API.get(`/flights/${id}`);
export const bookFlight = (bookingData) => API.post('/bookings/flight', bookingData);
