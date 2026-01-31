import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #fff;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
`;

const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  padding: 20px 0;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #1b5e20;
  font-weight: 300;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  line-height: 1;
`;

const CarIcon = styled.div`
  font-size: 64px;
  color: #4caf50;
  display: flex;
  align-items: center;
  line-height: 1;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #5f6368;
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 40px;
`;

const SearchBox = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 48px 0 16px;
  border: 2px solid #4caf50;
  border-radius: 24px;
  font-size: 16px;
  outline: none;
  box-shadow: 0 1px 6px rgba(76, 175, 80, 0.28);

  &:hover {
    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.28);
  }

  &:focus {
    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.28);
    border-color: #2e7d32;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #e8f5e8;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #4caf50;
  }
`;

const ResultsContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const ResultItem = styled.div`
  background: #fff;
  border: 1px solid #c8e6c9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(76, 175, 80, 0.08);

  &:hover {
    box-shadow: 0 2px 6px rgba(76, 175, 80, 0.15);
    border-color: #4caf50;
  }
`;

const CarTitle = styled.h3`
  font-size: 18px;
  color: #2e7d32;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #1b5e20;
  }
`;

const CarDetails = styled.p`
  color: #5f6368;
  font-size: 14px;
  margin-bottom: 8px;
`;

const CarPrice = styled.span`
  color: #388e3c;
  font-size: 16px;
  font-weight: 500;
`;

const LoadingText = styled.div`
  text-align: center;
  color: #5f6368;
  font-size: 16px;
  margin-top: 20px;
`;

const NoResults = styled.div`
  text-align: center;
  color: #5f6368;
  font-size: 16px;
  margin-top: 40px;
`;

const AiResponseContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f1f8e9;
  border: 1px solid #c8e6c9;
  border-radius: 8px;
`;

const AiResponseTitle = styled.h4`
  color: #2e7d32;
  margin-bottom: 10px;
  font-size: 18px;
`;

const AiResponseText = styled.p`
  color: #333;
  line-height: 1.6;
  white-space: pre-wrap;
`;

export default function CarSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    try {
      const res = await fetch('http://localhost:4000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: searchQuery })
      });

      if (!res.ok) throw new Error(`Erro na busca: ${res.status}`);

      const data = await res.json();
      const responseText = data.text || '';

      console.log('Resposta da IA:', responseText); // Debug

      // For AI response, display the text directly
      setAiResponse(responseText);
      setResults([]); // Clear car results
    } catch (error) {
      console.error('Erro na busca:', error);
      setResults([]);
      setAiResponse('Erro na busca. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>
            CarFinder
            <CarIcon>🚗</CarIcon>
          </Title>
          <Subtitle>Encontre o carro dos seus sonhos</Subtitle>
        </Header>

        <SearchContainer>
          <form onSubmit={handleSearch}>
            <SearchBox>
              <SearchInput
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Digite marca, modelo ou ano do carro..."
                autoFocus
              />
              <SearchButton type="submit">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </SearchButton>
            </SearchBox>
          </form>
        </SearchContainer>

        <ResultsContainer>
          {isLoading && <LoadingText>Buscando carros...</LoadingText>}

          {hasSearched && !isLoading && results.length === 0 && !aiResponse && (
            <NoResults>Nenhum carro encontrado para sua busca.</NoResults>
          )}

          {results.map((car, index) => (
            <ResultItem key={index}>
              <CarTitle>{car.marca} {car.modelo}</CarTitle>
              <CarDetails>Ano: {car.ano}</CarDetails>
              <CarPrice>R$ {car.preco.toLocaleString('pt-BR')}</CarPrice>
            </ResultItem>
          ))}

          {aiResponse && (
            <AiResponseContainer>
              <AiResponseTitle>Resposta da IA:</AiResponseTitle>
              <AiResponseText>{aiResponse}</AiResponseText>
            </AiResponseContainer>
          )}
        </ResultsContainer>
      </Container>
    </>
  );
}