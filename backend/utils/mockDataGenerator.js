// Mock Data Generator Utilities for Flights and Trains

const AIRLINES = [
  { name: 'Air India', code: 'AI' },
  { name: 'IndiGo', code: 'IND' },
  { name: 'Jet Airways', code: 'JET' },
  { name: 'SpiceJet', code: 'SJ' },
  { name: 'GoAir', code: 'GA' },
  { name: 'Vistara', code: 'UK' },
  { name: 'AirAsia', code: 'AA' },
  { name: 'British Airways', code: 'BA' },
  { name: 'Emirates', code: 'EK' },
  { name: 'Qatar Airways', code: 'QR' },
  { name: 'Lufthansa', code: 'LH' },
  { name: 'United Airlines', code: 'UA' },
  { name: 'Virgin Atlantic', code: 'VS' },
];

const TRAIN_NAMES = [
  { name: 'Rajdhani Express', prefix: 'RJ' },
  { name: 'Shatabdi Express', prefix: 'SH' },
  { name: 'Duranto Express', prefix: 'DR' },
  { name: 'AC Express', prefix: 'ACE' },
  { name: 'Intercity Express', prefix: 'IC' },
  { name: 'Local Express', prefix: 'LE' },
];

const TRAIN_CLASSES = ['Sleeper', 'AC 3 Tier', 'AC 2 Tier', 'First AC', 'General'];

/**
 * Generate a random integer between min and max (inclusive)
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random time in HH:MM format
 * @param {string} minTime - Optional minimum time (HH:MM)
 * @param {string} maxTime - Optional maximum time (HH:MM)
 * @returns {string} Time in HH:MM format
 */
function generateRandomTime(minTime = '00:00', maxTime = '23:59') {
  const [minHour, minMin] = minTime.split(':').map(Number);
  const [maxHour, maxMin] = maxTime.split(':').map(Number);

  const minTotalMin = minHour * 60 + minMin;
  const maxTotalMin = maxHour * 60 + maxMin;

  const randomMin = randomInt(minTotalMin, maxTotalMin);
  const hours = Math.floor(randomMin / 60);
  const mins = randomMin % 60;

  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

/**
 * Generate a random duration in minutes
 * @param {number} minHours - Minimum duration in hours
 * @param {number} maxHours - Maximum duration in hours
 * @returns {number} Duration in minutes
 */
function generateRandomDuration(minHours = 1, maxHours = 8) {
  const minMinutes = minHours * 60;
  const maxMinutes = maxHours * 60;
  return randomInt(minMinutes, maxMinutes);
}

/**
 * Format minutes into HH:MM format
 */
function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

/**
 * Add minutes to a time string and return new time
 */
function addMinutesToTime(timeStr, minutes) {
  const [hours, mins] = timeStr.split(':').map(Number);
  let totalMins = hours * 60 + mins + minutes;
  
  // Handle day overflow
  const days = Math.floor(totalMins / (24 * 60));
  totalMins = totalMins % (24 * 60);

  const newHours = Math.floor(totalMins / 60);
  const newMins = totalMins % 60;

  return {
    time: `${String(newHours).padStart(2, '0')}:${String(newMins).padStart(2, '0')}`,
    nextDay: days > 0,
  };
}

/**
 * Generate a random price within a realistic range
 * @param {number} minPrice - Minimum price
 * @param {number} maxPrice - Maximum price
 * @returns {number} Random price
 */
function generateRandomPrice(minPrice = 2000, maxPrice = 15000) {
  const price = randomInt(minPrice, maxPrice);
  // Round to nearest 100
  return Math.round(price / 100) * 100;
}

/**
 * Generate number of stops (0 or 1)
 * @returns {number} 0 for non-stop, 1 for one stop
 */
function generateStops() {
  return randomInt(0, 1);
}

/**
 * Generate refundable flag
 * @returns {boolean}
 */
function generateRefundable() {
  return Math.random() > 0.4; // 60% chance of refundable
}

/**
 * Generate seat availability for a train class
 * @returns {number} Available seats
 */
function generateAvailability() {
  const availability = randomInt(0, 100);
  
  if (availability === 0) return 0; // Sold Out
  if (availability < 20) return randomInt(1, 5); // Waitlist
  if (availability < 50) return randomInt(5, 15); // Limited
  return randomInt(15, 100); // Available
}

/**
 * Generate availability status text
 */
function getAvailabilityStatus(seats) {
  if (seats === 0) return 'Sold Out';
  if (seats <= 5) return 'Waitlist';
  if (seats <= 15) return 'Limited';
  return 'Available';
}

/**
 * Generate random airline
 */
function getRandomAirline() {
  return AIRLINES[randomInt(0, AIRLINES.length - 1)];
}

/**
 * Generate random train
 */
function getRandomTrain() {
  return TRAIN_NAMES[randomInt(0, TRAIN_NAMES.length - 1)];
}

/**
 * Generate a unique ID
 */
function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Generate mock flight results
 * @param {string} from - Departure city
 * @param {string} to - Arrival city
 * @param {string} date - Departure date
 * @param {string} classType - Optional flight class (Economy, Business, etc.)
 * @param {number} count - Number of results to generate (5-10)
 * @returns {Array} Array of flight objects
 */
function generateMockFlights(from, to, date, classType = 'Economy', count = 8) {
  const flights = [];
  const numFlights = randomInt(Math.max(5, count - 2), Math.min(10, count + 2));

  for (let i = 0; i < numFlights; i++) {
    const airline = getRandomAirline();
    const departureTime = generateRandomTime('06:00', '22:00');
    const duration = generateRandomDuration(2, 6); // Assuming 2-6 hours for flights
    const arrivalInfo = addMinutesToTime(departureTime, duration);
    const stops = generateStops();
    const price = generateRandomPrice(3000, 25000);
    const refundable = generateRefundable();

    flights.push({
      id: generateId(),
      flightNumber: `${airline.code}${randomInt(100, 9999)}`,
      airline: airline.name,
      airlineCode: airline.code,
      from,
      to,
      departureTime,
      arrivalTime: arrivalInfo.time,
      duration: formatDuration(duration),
      durationMinutes: duration,
      stops,
      stopType: stops === 0 ? 'Non-stop' : '1 Stop',
      price,
      currency: 'INR',
      class: classType,
      refundable,
      seatAvailable: randomInt(5, 150),
      departureDate: date,
      nextDay: arrivalInfo.nextDay,
    });
  }

  // Sort by price (most relevant results first)
  return flights.sort((a, b) => a.price - b.price);
}

/**
 * Generate mock train results
 * @param {string} from - Departure station
 * @param {string} to - Arrival station
 * @param {string} date - Departure date
 * @param {number} count - Number of results to generate (5-10)
 * @returns {Array} Array of train objects
 */
function generateMockTrains(from, to, date, count = 8) {
  const trains = [];
  const numTrains = randomInt(Math.max(5, count - 2), Math.min(10, count + 2));

  for (let i = 0; i < numTrains; i++) {
    const train = getRandomTrain();
    const departureTime = generateRandomTime('00:00', '23:00');
    const duration = generateRandomDuration(4, 36); // Trains can take long durations
    const arrivalInfo = addMinutesToTime(departureTime, duration);

    // Generate prices for different classes
    const basePriceMap = {
      'Sleeper': randomInt(800, 2500),
      'AC 3 Tier': randomInt(1500, 4000),
      'AC 2 Tier': randomInt(2000, 5500),
      'First AC': randomInt(3500, 8000),
      'General': randomInt(200, 800),
    };

    const classes = {};
    TRAIN_CLASSES.forEach(cls => {
      classes[cls] = {
        price: basePriceMap[cls],
        currency: 'INR',
        availability: generateAvailability(),
        availabilityStatus: getAvailabilityStatus(generateAvailability()),
      };
    });

    trains.push({
      id: generateId(),
      trainNumber: `${train.prefix}${randomInt(100, 9999)}`,
      trainName: train.name,
      from,
      to,
      departureTime,
      arrivalTime: arrivalInfo.time,
      duration: formatDuration(duration),
      durationMinutes: duration,
      departureDate: date,
      nextDay: arrivalInfo.nextDay,
      classes,
      basePrice: Math.min(...Object.values(classes).map(c => c.price)),
    });
  }

  // Sort by base price
  return trains.sort((a, b) => a.basePrice - b.basePrice);
}

module.exports = {
  generateMockFlights,
  generateMockTrains,
  generateRandomTime,
  generateRandomDuration,
  generateRandomPrice,
  generateStops,
  generateRefundable,
  generateAvailability,
  formatDuration,
  addMinutesToTime,
  generateId,
  AIRLINES,
  TRAIN_NAMES,
  TRAIN_CLASSES,
};
