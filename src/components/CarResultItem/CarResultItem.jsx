import React from 'react';
import './CarResultItem.css';

export default function CarResultItem({ car }) {
  return (
    <div className="car-result-item">
      <div className="car-result-item__title">{car.marca} {car.modelo}</div>
      <div className="car-result-item__details">
        <span><span className="car-result-item__label">Combustível:</span> <span className="car-result-item__value">{car.combustivel}</span></span>
        <span><span className="car-result-item__label">Câmbio:</span> <span className="car-result-item__value">{car.cambio}</span></span>
        <span><span className="car-result-item__label">Motor:</span> <span className="car-result-item__value">{car.motor}</span></span>
        <span><span className="car-result-item__label">Ano:</span> <span className="car-result-item__value">{car.ano}</span></span>
      </div>
      <span className="car-result-item__price">R$ {car.preco_medio_brl.toLocaleString('pt-BR')}</span>
    </div>
  );
}
