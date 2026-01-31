const cars = require('./carsDatabase');

const brandCount = {};
const filtered = [];

for (const car of cars) {
  const brand = car.marca;
  if (!brandCount[brand]) {
    brandCount[brand] = 0;
  }
  if (brandCount[brand] < 4) {
    filtered.push(car);
    brandCount[brand]++;
  }
}

console.log('Original:', cars.length);
console.log('Filtered:', filtered.length);

const fs = require('fs');
fs.writeFileSync('carsDatabase.js', 'const cars = ' + JSON.stringify(filtered, null, 2) + ';\n\nmodule.exports = cars;');