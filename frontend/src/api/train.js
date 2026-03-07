import API from '../api';

export const searchTrains = (params) => API.get('/trains/search', { params });
export const getAvailableClasses = () => API.get('/trains/classes');
export const getTrainById = (id) => API.get(`/trains/${id}`);
export const bookTrain = (bookingData) => API.post('/bookings/train', bookingData);
