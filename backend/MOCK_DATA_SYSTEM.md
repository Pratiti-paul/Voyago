# Dynamic Mock Data Generation System

## Overview

This system implements dynamic mock result generation for flight and train searches in the Node.js backend. Instead of storing pre-seeded route combinations in the database, the system reads query parameters and generates realistic results on-the-fly for any valid city pair.

## Architecture

### 1. Mock Data Generator Utility (`backend/utils/mockDataGenerator.js`)

This module contains reusable helper functions for generating realistic travel data:

#### Helper Functions

##### Time & Duration Utilities
- `generateRandomTime(minTime, maxTime)` - Generates random departure/arrival times
- `generateRandomDuration(minHours, maxHours)` - Generates random trip duration
- `formatDuration(minutes)` - Formats minutes to human-readable format (e.g., "2h 30m")
- `addMinutesToTime(timeStr, minutes)` - Adds minutes to a time and returns result with day overflow flag

##### Price & Availability Utilities
- `generateRandomPrice(minPrice, maxPrice)` - Generates realistic price within range
- `generateStops()` - Generates 0 or 1 stop randomly
- `generateRefundable()` - Generates refundable flag (60% chance true)
- `generateAvailability()` - Generates seat availability with realistic distribution
- `getAvailabilityStatus(seats)` - Converts seat count to status string

##### Data Generation Utilities
- `generateId()` - Generates unique IDs using timestamp + random string
- `getRandomAirline()` - Selects random airline from predefined list
- `getRandomTrain()` - Selects random train from predefined list

#### Main Data Generators

##### `generateMockFlights(from, to, date, classType, count)`
Generates 5-10 realistic flight results dynamically.

**Parameters:**
- `from` (string) - Departure city/airport
- `to` (string) - Arrival city/airport
- `date` (string) - Departure date
- `classType` (string) - Flight class (Economy, Business, etc.) - Default: "Economy"
- `count` (number) - Desired number of results - Default: 8

**Returns:** Array of flight objects with structure:
```javascript
{
  id: "unique-id",
  flightNumber: "AI101",
  airline: "Air India",
  airlineCode: "AI",
  from: "Mumbai",
  to: "Delhi",
  departureTime: "10:30",
  arrivalTime: "12:15",
  duration: "1h 45m",
  durationMinutes: 105,
  stops: 0,
  stopType: "Non-stop",
  price: 4500,
  currency: "INR",
  class: "Economy",
  refundable: true,
  seatAvailable: 45,
  departureDate: "2026-03-02",
  nextDay: false
}
```

##### `generateMockTrains(from, to, date, count)`
Generates 5-10 realistic train results dynamically.

**Parameters:**
- `from` (string) - Departure station
- `to` (string) - Arrival station
- `date` (string) - Departure date
- `count` (number) - Desired number of results - Default: 8

**Returns:** Array of train objects with structure:
```javascript
{
  id: "unique-id",
  trainNumber: "RJ2001",
  trainName: "Rajdhani Express",
  from: "Mumbai",
  to: "Delhi",
  departureTime: "16:00",
  arrivalTime: "08:30",
  duration: "16h 30m",
  durationMinutes: 990,
  departureDate: "2026-03-02",
  nextDay: true,
  classes: {
    "Sleeper": {
      price: 1200,
      currency: "INR",
      availability: 15,
      availabilityStatus: "Available"
    },
    "AC 3 Tier": {
      price: 2500,
      currency: "INR",
      availability: 8,
      availabilityStatus: "Limited"
    },
    // ... more classes
  },
  basePrice: 1200
}
```

## API Endpoints

### Flight Search API

**Endpoint:** `GET /api/flights/search`

**Query Parameters:**
```
from (required)      - Departure city
to (required)        - Arrival city
date (required)      - Departure date (YYYY-MM-DD)
class (optional)     - Flight class (Economy, Business, First)
minPrice (optional)  - Minimum price filter
maxPrice (optional)  - Maximum price filter
```

**Example Request:**
```
GET /api/flights/search?from=Mumbai&to=Delhi&date=2026-03-15&class=Economy
```

**Response:**
```json
{
  "success": true,
  "count": 8,
  "data": [
    {
      "id": "1709..."
      "flightNumber": "AI101",
      "airline": "Air India",
      // ... flight details
    }
    // ... more flights
  ]
}
```

### Train Search API

**Endpoint:** `GET /api/trains/search`

**Query Parameters:**
```
from (required)      - Departure station
to (required)        - Arrival station
date (required)      - Departure date (YYYY-MM-DD)
class (optional)     - Train class (Sleeper, AC 3 Tier, etc.)
```

**Example Request:**
```
GET /api/trains/search?from=Mumbai&to=Delhi&date=2026-03-15&class=Sleeper
```

**Response:**
```json
{
  "success": true,
  "count": 7,
  "data": [
    {
      "id": "1709...",
      "trainNumber": "RJ2001",
      "trainName": "Rajdhani Express",
      // ... train details
    }
    // ... more trains
  ]
}
```

### Train Classes API

**Endpoint:** `GET /api/trains/classes`

**Response:**
```json
{
  "success": true,
  "classes": ["Sleeper", "AC 3 Tier", "AC 2 Tier", "First AC", "General"]
}
```

## Frontend Integration

### Flight Search
```javascript
import { searchFlights } from '../api/flight';

const handleFlightSearch = async (from, to, date, flightClass) => {
  try {
    const response = await searchFlights({ from, to, date, class: flightClass });
    console.log('Flights:', response.data.data);
  } catch (error) {
    console.error('Search failed:', error);
  }
};
```

### Train Search
```javascript
import { searchTrains } from '../api/train';

const handleTrainSearch = async (from, to, date, trainClass) => {
  try {
    const response = await searchTrains({ from, to, date, class: trainClass });
    console.log('Trains:', response.data.data);
  } catch (error) {
    console.error('Search failed:', error);
  }
};
```

## Key Features

### 1. Fully Dynamic
- No database queries for route combinations
- Works for any valid city pair without pre-seeding
- Results generated on-demand

### 2. Realistic Data
- Airline names from real carriers
- Reasonable time windows (flights 6-22h, trains 4-36h)
- Price ranges tailored to transport type
- Availability distribution mirrors real scenarios

### 3. Modular & Scalable
- Reusable helper functions
- Easy to adjust ranges and distributions
- Clean separation of concerns

### 4. Consistent Formatting
- Structured response format for easy frontend integration
- Standardized timestamps and durations
- Consistent field naming across flight and train results

## Customization

### Adjust Price Ranges
Edit in `mockDataGenerator.js`:
```javascript
// For flights (default 3000-25000 INR)
const price = generateRandomPrice(5000, 30000);

// For trains (class-specific)
const basePriceMap = {
  'Sleeper': randomInt(1000, 3000),
  // ...
};
```

### Add Airlines/Trains
```javascript
const AIRLINES = [
  { name: 'Your Airline', code: 'YA' },
  // ... existing airlines
];

const TRAIN_NAMES = [
  { name: 'Your Train', prefix: 'YT' },
  // ... existing trains
];
```

### Adjust Time Windows
```javascript
// For flights
const departureTime = generateRandomTime('05:00', '23:00');
const duration = generateRandomDuration(1, 8);

// For trains
const departureTime = generateRandomTime('00:00', '23:00');
const duration = generateRandomDuration(6, 40);
```

## Testing

Test the endpoints using curl or Postman:

```bash
# Test flight search
curl "http://localhost:5000/api/flights/search?from=Mumbai&to=Delhi&date=2026-03-15"

# Test train search
curl "http://localhost:5000/api/trains/search?from=Mumbai&to=Delhi&date=2026-03-15"

# Test train classes
curl "http://localhost:5000/api/trains/classes"
```

## Future Enhancements

1. **Caching** - Cache results for same search parameters within time window
2. **Real Data Integration** - Replace mock generation with real API when ready
3. **Advanced Filters** - More granular filtering options
4. **Loyalty Programs** - Add loyalty discounts to pricing
5. **Seat Maps** - Generate detailed seat availability
6. **User Preferences** - Remember user preferences for filtering
