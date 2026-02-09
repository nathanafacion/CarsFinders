import React from 'react';
import './CarResults.css';
import CarResultItem from '../CarResultItem/CarResultItem';

export default function CarResults({ results }) {
  console.log('CarResults received results:', results);
  return (
    <div className="car-results">
      {results.map((car, index) => (
        <CarResultItem key={index} car={car} />
      ))}
    </div>
  );
}
