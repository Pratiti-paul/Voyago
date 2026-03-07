// Quick test file to verify mock data generation works
const {
  generateMockFlights,
  generateMockTrains,
} = require('./utils/mockDataGenerator');

console.log('\n=== Testing Flight Mock Generation ===');
const mockFlights = generateMockFlights('Mumbai', 'Delhi', '2026-03-15', 'Economy', 8);
console.log(`Generated ${mockFlights.length} flights:`);
console.log(JSON.stringify(mockFlights[0], null, 2));

console.log('\n=== Testing Train Mock Generation ===');
const mockTrains = generateMockTrains('Mumbai', 'Delhi', '2026-03-15', 8);
console.log(`Generated ${mockTrains.length} trains:`);
console.log(JSON.stringify(mockTrains[0], null, 2));

console.log('\n✓ Mock data generation test completed successfully!');
