const fs = require('fs');

const data = require('./carsDatabase.js');

const transformed = data.map(car => ({

  marca: car.brand,

  modelo: car.model,

  combustivel: car.fuel,

  cambio: car.gear,

  motor: car.engine_size,

  ano: car.year_model,

  preco_medio_brl: car.avg_price_brl

}));

fs.writeFileSync('carsDatabase_new.js', 'const cars = ' + JSON.stringify(transformed, null, 2) + ';\n\nmodule.exports = cars;');