const fs = require('fs');

const parseCSV = (filePath, keptHeaders, headerMap) => {
  const csv = fs.readFileSync(filePath, 'utf8');
  const lines = csv.split('\n');
  const originalHeaders = lines[0].split(',').map(h => h.trim());

  const data = lines.slice(1, 1001).filter(line => line.trim()).map(line => {
    const values = line.split(',').map(v => v.trim());
    const obj = {};
    keptHeaders.forEach(h => {
      const index = originalHeaders.indexOf(h);
      if (index !== -1) {
        const val = values[index];
        const ptName = headerMap[h];
        if (ptName === 'ano' || ptName === 'motor') {
          obj[ptName] = parseFloat(val) || 0;
        } else if (ptName === 'preco_medio_brl') {
          obj[ptName] = parseFloat(val) || 0;
        } else {
          obj[ptName] = val;
        }
      }
    });
    return obj;
  });
  return data;
};

const headerMap = {
  'brand': 'marca',
  'model': 'modelo',
  'fuel': 'combustivel',
  'gear': 'cambio',
  'engine_size': 'motor',
  'year_model': 'ano',
  'avg_price_brl': 'preco_medio_brl'
};

const keptHeaders = ['brand', 'model', 'fuel', 'gear', 'engine_size', 'year_model', 'avg_price_brl'];

const data1 = parseCSV('server/fipe_cars.csv', keptHeaders, headerMap);
const data2 = parseCSV('server/fipe_2022.csv', keptHeaders, headerMap);

console.log('Data1 length:', data1.length);
console.log('Data2 length:', data2.length);

const combined = data1.concat(data2);
const data = combined.slice(0, 1000); // Reduzir para 1000 carros

console.log('Data length:', data.length);

fs.writeFileSync('carsDatabase.js', 'const cars = ' + JSON.stringify(data, null, 2) + ';\n\nmodule.exports = cars;');