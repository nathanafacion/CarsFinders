require('dotenv').config();
const express = require('express');
const cors = require('cors');
const carsDatabase = require('./carsDatabase');
const { genkit } = require('genkit');
const { googleAI } = require('@genkit-ai/google-genai');

// Configure Genkit with Google AI
const ai = genkit({ plugins: [googleAI({ apiKey: process.env.GOOGLE_API_KEY })] });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// API endpoint for chat (usando base de dados e IA)
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

    // Preparar contexto para a IA com o banco de dados completo
    const context = `Banco de dados de carros (JSON):\n${JSON.stringify(carsDatabase)}\n\n`;

    // Usar IA para gerar resposta baseada no banco de dados
    const { text } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash'),
      prompt: `${context}Pergunta do usuário: ${prompt}\n\nUse o banco de dados fornecido para responder à pergunta do usuário sobre carros. Faça buscas, comparações e forneça informações precisas baseadas nos dados. Responda de forma útil e amigável.`
    });

    res.json({ text });
  } catch (err) {
    console.error('Error in /api/generate:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
});

app.get('/api/cars', (req, res) => {
  res.json(carsDatabase);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log(`Carros na base de dados: ${carsDatabase.length}`);
});