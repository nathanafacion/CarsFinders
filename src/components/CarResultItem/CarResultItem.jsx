import React from 'react';

import { Item, Title, Details, Label, Value, Price } from './CarResultItem.styles';

export default function CarResultItem({ car }) {
  return (
    <Item>
      <Title>{car.marca} {car.modelo}</Title>
      <Details>
        <span><Label>Combustível:</Label> <Value>{car.combustivel}</Value></span>
        <span><Label>Câmbio:</Label> <Value>{car.cambio}</Value></span>
        <span><Label>Motor:</Label> <Value>{car.motor}</Value></span>
        <span><Label>Ano:</Label> <Value>{car.ano}</Value></span>
      </Details>
      <Price>R$ {car.preco_medio_brl.toLocaleString('pt-BR')}</Price>
    </Item>
  );
}
