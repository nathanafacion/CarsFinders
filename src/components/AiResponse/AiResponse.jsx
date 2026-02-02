import React from 'react';
import './AiResponse.css';

export default function AiResponse({ aiResponse }) {
  if (!aiResponse) return null;
  return (
    <div className="ai-response-container">
      <h4 className="ai-response-title">Resposta da IA:</h4>
      <p className="ai-response-text">{aiResponse}</p>
    </div>
  );
}
