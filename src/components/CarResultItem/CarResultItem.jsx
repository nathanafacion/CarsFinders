import React from 'react';
import './CarResultItem.css';

export default function CarResultItem({ car }) {
  return (
    <div className="car-result-item">
      <h3 className="car-title">{car.marca} {car.modelo}</h3>
      <div className="car-details">
        <span><span className="car-label">Combustível:</span> <span className="car-value">{car.combustivel}</span></span>
        <span><span className="car-label">Câmbio:</span> <span className="car-value">{car.cambio}</span></span>
        <span><span className="car-label">Motor:</span> <span className="car-value">{car.motor}</span></span>
        <span><span className="car-label">Ano:</span> <span className="car-value">{car.ano}</span></span>
      </div>
      <span className="car-price">R$ {car.preco_medio_brl.toLocaleString('pt-BR')}</span>
    </div>
  );
}
