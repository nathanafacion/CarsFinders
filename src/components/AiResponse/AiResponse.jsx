import React from 'react';
import './AiResponse.css';

export default function AiResponse({ aiResponse }) {
  if (!aiResponse) return null;
  return (
    <div className="ai-response">
      <h4 className="ai-response__title">Resposta da IA:</h4>
      <p className="ai-response__text">{aiResponse}</p>
    </div>
  );
}
