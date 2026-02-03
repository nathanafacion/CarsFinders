import React from 'react';
import CarResultItem from '../CarResultItem/CarResultItem';


import { ResultsContainer } from './CarResults.styles';

export default function CarResults({ results }) {
  console.log('CarResults received results:', results);
  return (
    <ResultsContainer>
      {results.map((car, index) => (
        <CarResultItem key={index} car={car} />
      ))}
    </ResultsContainer>
  );
}
