import React from 'react';


import { Container, Title, Text } from './AiResponse.styles';

export default function AiResponse({ aiResponse }) {
  if (!aiResponse) return null;
  return (
    <Container>
      <Title>Resposta da IA:</Title>
      <Text>{aiResponse}</Text>
    </Container>
  );
}
