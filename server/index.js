require('dotenv').config();
const express = require('express');
const cors = require('cors');
const carsDatabase = require('./db/carsDatabase');
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

    // Schema Zod-like para carros
    const schema = `
      [
        {
          "marca": string,
          "modelo": string,
          "combustivel": string,
          "cambio": string,
          "motor": number,
          "ano": number,
          "preco_medio_brl": number
        }
      ]
    `;

    // Contexto e instrução para resposta JSON
    const context = `Banco de dados de carros (JSON):\n${JSON.stringify(carsDatabase)}\n\n`;
    const systemPrompt = `
      Responda APENAS com um array JSON de carros, SEM EXPLICAÇÃO, seguindo exatamente o seguinte schema:
      ${schema}
      Cada objeto deve conter apenas as chaves do schema. Não inclua comentários, texto extra ou explicações.
      Pergunta do usuário: ${prompt}
    `;

    const { text } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash'),
      prompt: context + systemPrompt
    });

    // Tenta fazer parse do JSON retornado
    let cars = [];
    try {
      cars = JSON.parse(text);
    } catch (e) {
      return res.status(200).json({ text, error: 'A resposta não pôde ser convertida em JSON.' });
    }
    res.json({ cars });
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