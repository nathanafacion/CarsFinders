import React from 'react';
import CarResultItem from '../CarResultItem/CarResultItem';
import './CarResults.css';

export default function CarResults({ results }) {
  console.log('CarResults received results:', results);
  return (
    <div className="car-results-container">
      {results.map((car, index) => (
        <CarResultItem key={index} car={car} />
      ))}
    </div>
  );
}
