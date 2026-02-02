import React, { useState, useRef, useEffect } from 'react';
import GenkitChatUI from '../GenkitChatUI/GenkitChatUI';

export default function GenkitChat() {
  const [messages, setMessages] = useState([
    {
      text: 'Olá! Faça qualquer pergunta e eu respondo usando o poder do Genkit AI 🚀',
      isUser: false
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatAreaRef = useRef(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = inputValue.trim();
    if (!prompt || isLoading) return;

    setMessages(prev => [...prev, { text: prompt, isUser: true }]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call backend API which hosts Genkit server-side
      const res = await fetch('http://localhost:4000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!res.ok) throw new Error(`Servidor retornou status ${res.status}`);
      const data = await res.json();
      const text = data.text || 'Sem resposta do servidor.';
      setMessages(prev => [...prev, { text, isUser: false }]);
    } catch (error) {
      console.error('Erro ao chamar backend:', error);
      setMessages(prev => [...prev, {
        text: `Desculpe, ocorreu um erro ao processar sua mensagem: ${error.message}`,
        isUser: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <GenkitChatUI
        messages={messages}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        chatAreaRef={chatAreaRef}
      />
    </div>
  );
}
