const cars = [
  {
    "marca": "Acura",
    "modelo": "NSX 3.0",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 3,
    "ano": 1995,
    "preco_medio_brl": 40374
  },
  {
    "marca": "Acura",
    "modelo": "NSX 3.0",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 3,
    "ano": 1994,
    "preco_medio_brl": 38939
  },
  {
    "marca": "Acura",
    "modelo": "NSX 3.0",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 3,
    "ano": 1993,
    "preco_medio_brl": 37648
  },
  {
    "marca": "Acura",
    "modelo": "Legend 3.2/3.5",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 3.2,
    "ano": 1998,
    "preco_medio_brl": 24963
  },
  {
    "marca": "Agrale",
    "modelo": "MARRUÁ 2.8 12V 132cv TDI Diesel",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 2.8,
    "ano": 2007,
    "preco_medio_brl": 45064
  },
  {
    "marca": "Agrale",
    "modelo": "MARRUÁ 2.8 12V 132cv TDI Diesel",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 2.8,
    "ano": 2006,
    "preco_medio_brl": 42102
  },
  {
    "marca": "Agrale",
    "modelo": "MARRUÁ 2.8 12V 132cv TDI Diesel",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 2.8,
    "ano": 2005,
    "preco_medio_brl": 38127
  },
  {
    "marca": "Agrale",
    "modelo": "MARRUÁ AM 50 2.8 140cv TDI Diesel",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 2.8,
    "ano": 2011,
    "preco_medio_brl": 70872
  },
  {
    "marca": "Alfa Romeo",
    "modelo": "145 Elegant 2.0 16V",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 2,
    "ano": 1998,
    "preco_medio_brl": 12507
  },
  {
    "marca": "Alfa Romeo",
    "modelo": "145 Elegant 2.0 16V",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 2,
    "ano": 1997,
    "preco_medio_brl": 10579
  },
  {
    "marca": "Alfa Romeo",
    "modelo": "145 Elegant 2.0 16V",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 2,
    "ano": 1996,
    "preco_medio_brl": 9003
  },
  {
    "marca": "Alfa Romeo",
    "modelo": "145 Quadrifoglio 2.0",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 2,
    "ano": 1999,
    "preco_medio_brl": 13597
  },
  {
    "marca": "AM Gen",
    "modelo": "Hummer Hard-Top 6.5 4x4 Diesel TB",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 6.5,
    "ano": 2000,
    "preco_medio_brl": 211478
  },
  {
    "marca": "AM Gen",
    "modelo": "Hummer Hard-Top 6.5 4x4 Diesel TB",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 6.5,
    "ano": 1999,
    "preco_medio_brl": 187031
  },
  {
    "marca": "AM Gen",
    "modelo": "Hummer Hard-Top 6.5 4x4 Diesel TB",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 6.5,
    "ano": 1998,
    "preco_medio_brl": 173360
  },
  {
    "marca": "AM Gen",
    "modelo": "Hummer Open-Top 6.5 4x4 Diesel TB",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 6.5,
    "ano": 2000,
    "preco_medio_brl": 205385
  },
  {
    "marca": "Asia Motors",
    "modelo": "Topic Carga 2.7 Diesel (furgão)",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 2.7,
    "ano": 1999,
    "preco_medio_brl": 15525
  },
  {
    "marca": "Asia Motors",
    "modelo": "Topic Carga 2.7 Diesel (furgão)",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 2.7,
    "ano": 1998,
    "preco_medio_brl": 12748
  },
  {
    "marca": "Asia Motors",
    "modelo": "Topic Carga 2.7 Diesel (furgão)",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 2.7,
    "ano": 1997,
    "preco_medio_brl": 12286
  },
  {
    "marca": "Asia Motors",
    "modelo": "Hi-Topic Van 2.7 Diesel (furgão)",
    "combustivel": "Diesel",
    "cambio": "manual",
    "motor": 2.7,
    "ano": 1997,
    "preco_medio_brl": 11989
  },
  {
    "marca": "ASTON MARTIN",
    "modelo": "Vantage S Coupe 4.7 V8 430cv",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 4.7,
    "ano": 2012,
    "preco_medio_brl": 363603
  },
  {
    "marca": "ASTON MARTIN",
    "modelo": "Vantage Coupe 4.7 V8 425cv",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 4.7,
    "ano": 2016,
    "preco_medio_brl": 621746
  },
  {
    "marca": "ASTON MARTIN",
    "modelo": "Vantage Coupe 4.7 V8 425cv",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 4.7,
    "ano": 2014,
    "preco_medio_brl": 533332
  },
  {
    "marca": "ASTON MARTIN",
    "modelo": "Vantage Coupe 4.7 V8 425cv",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 4.7,
    "ano": 2012,
    "preco_medio_brl": 347284
  },
  {
    "marca": "Audi",
    "modelo": "80 2.0",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 2,
    "ano": 1995,
    "preco_medio_brl": 13287
  },
  {
    "marca": "Audi",
    "modelo": "80 2.0",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 2,
    "ano": 1994,
    "preco_medio_brl": 11010
  },
  {
    "marca": "Audi",
    "modelo": "80 2.6/2.8 Avant",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 2.6,
    "ano": 1996,
    "preco_medio_brl": 17455
  },
  {
    "marca": "Audi",
    "modelo": "80 2.6/2.8 Avant",
    "combustivel": "Gasoline",
    "cambio": "manual",
    "motor": 2.6,
    "ano": 1995,
    "preco_medio_brl": 16878
  }
];

module.exports = cars;