import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

// Global Styles (kept here so UI is self-contained)
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Space Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const dotFlashing = keyframes`
  0%, 80%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b4e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    top: -250px;
    right: -250px;
    animation: ${float} 8s ease-in-out infinite;
  }
`;

const ChatContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 85vh;
  max-height: 800px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Header = styled.div`
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.2) 0%, rgba(0, 255, 255, 0.1) 100%);
  padding: 24px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    animation: ${shimmer} 3s infinite;
  }
`;

const Title = styled.h1`
  font-family: 'Syne', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;

  span {
    font-size: 32px;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 8px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

const ChatArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
  animation: ${fadeIn} 0.4s ease-out;
`;

const Message = styled.div`
  max-width: 75%;
  padding: 16px 20px;
  border-radius: ${props => props.$isUser 
    ? '20px 20px 4px 20px' 
    : '20px 20px 20px 4px'};
  background: ${props => props.$isUser 
    ? 'linear-gradient(135deg, #8a2be2 0%, #00ffff 100%)' 
    : 'rgba(255, 255, 255, 0.08)'};
  color: #fff;
  font-size: 15px;
  line-height: 1.6;
  word-wrap: break-word;
  box-shadow: ${props => props.$isUser 
    ? '0 8px 24px rgba(138, 43, 226, 0.3)' 
    : '0 4px 12px rgba(0, 0, 0, 0.3)'};
  border: ${props => props.$isUser 
    ? 'none' 
    : '1px solid rgba(255, 255, 255, 0.1)'};
  position: relative;
  backdrop-filter: blur(10px);

  ${props => props.$isUser && `
    font-weight: 500;
  `}
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  animation: ${fadeIn} 0.3s ease-out;
`;

const LoadingBubble = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px 20px 20px 4px;
  padding: 16px 20px;
  display: flex;
  gap: 6px;
  backdrop-filter: blur(10px);
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8a2be2, #00ffff);
  animation: ${dotFlashing} 1.4s infinite ease-in-out;
  animation-delay: ${props => props.$delay}s;
`;

const InputArea = styled.div`
  padding: 24px 32px;
  background: rgba(255, 255, 255, 0.03);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const InputContainer = styled.form`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: #fff;
  font-size: 15px;
  font-family: 'Space Mono', monospace;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const SendButton = styled.button`
  padding: 16px 32px;
  background: linear-gradient(135deg, #8a2be2 0%, #00ffff 100%);
  border: none;
  border-radius: 16px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(138, 43, 226, 0.3);
  position: relative;
  overflow: hidden;
`;

export default function GenkitChatUI({ messages, inputValue, onInputChange, onSubmit, isLoading, chatAreaRef }) {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ChatContainer>
          <Header>
            <Title>
              <span>⚡</span>
              GENKIT CHAT
            </Title>
            <Subtitle>Powered by Gemini 2.5 Flash</Subtitle>
          </Header>

          <ChatArea ref={chatAreaRef}>
            {messages.map((message, index) => (
              <MessageWrapper key={index} $isUser={message.isUser}>
                <Message $isUser={message.isUser}>
                  {message.text}
                </Message>
              </MessageWrapper>
            ))}

            {isLoading && (
              <LoadingContainer>
                <LoadingBubble>
                  <Dot $delay={0} />
                  <Dot $delay={0.2} />
                  <Dot $delay={0.4} />
                </LoadingBubble>
              </LoadingContainer>
            )}
          </ChatArea>

          <InputArea>
            <InputContainer onSubmit={onSubmit}>
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                placeholder="Digite sua mensagem..."
                disabled={isLoading}
                autoFocus
              />
              <SendButton type="submit" disabled={isLoading || !inputValue.trim()}>
                <span>ENVIAR</span>
              </SendButton>
            </InputContainer>
          </InputArea>
        </ChatContainer>
      </AppContainer>
    </>
  );
}
