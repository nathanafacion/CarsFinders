require('dotenv').config();
const express = require('express');
const cors = require('cors');
const carsDatabase = require('./db/carsDatabase');
const { devLocalIndexerRef, devLocalVectorstore, devLocalRetrieverRef } = require('@genkit-ai/dev-local-vectorstore');
const { googleAI } = require('@genkit-ai/google-genai');
const { z, genkit } = require('genkit');
const { Document } = require('genkit/retriever');

const ai = genkit({ plugins: [googleAI( {apiKey: process.env.GOOGLE_API_KEY})] });

let hfEmbedder;
async function initEmbedder() {
  const { pipeline } = await import('@xenova/transformers');
  hfEmbedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
}

async function getEmbedding(text) {
  if (!hfEmbedder) throw new Error('Embedder HuggingFace não inicializado');
  const result = await hfEmbedder(text);
  return result[0][0];
}
// =============================
// CarFinder AI - Backend
// =============================
// Este arquivo integra Express, IA (Genkit + Gemini), embeddings (HuggingFace) e busca de carros.
// Cada seção está documentada para facilitar manutenção.
// =============================
// CarFinder AI - Backend
// Documentação linha a linha: RAG, banco, IA, infra
// =============================

async function retrieveRelevantCars(prompt) {
  const promptEmbedding = await getEmbedding(prompt);
  const carsWithEmbeddings = await Promise.all(
    carsDatabase.map(async (car) => {
      const carText = `${car.marca} ${car.modelo}`;
      let carEmbedding = [];
      try {
        carEmbedding = await getEmbedding(carText);
      } catch (e) {}
      return { car, embedding: carEmbedding };
    })
  );
  const scored = carsWithEmbeddings
    .filter(({ embedding }) => Array.isArray(embedding) && embedding.length > 0)
    .map(({ car, embedding }) => ({
      car,
      score: cosineSimilarity(promptEmbedding, embedding)
    }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3).map(s => s.car);
}

function startServer() {
  const app = express();
  const PORT = process.env.PORT || 4000;

  app.use(cors());
  app.use(express.json());

  app.post('/api/generate', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) return res.status(400).json({ error: 'Prompt é obrigatório' });

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
      const relevantCars = await retrieveRelevantCars(prompt);
      const context = `Banco de dados de carros (JSON):\n${JSON.stringify(relevantCars)}\n\n`;
      const systemPrompt = `
        Responda APENAS com um array JSON de carros, SEM EXPLICAÇÃO, seguindo exatamente o seguinte schema:
        ${schema}
        Cada objeto deve conter apenas as chaves do schema. Não inclua comentários, texto extra ou explicações.
        Pergunta do usuário: ${prompt}
      `;

      // Corrige chamada: usar googleAI.generateText
      const { text } = await ai.generate({
        model: googleAI.model('gemini-2.5-flash'),
        prompt: context + systemPrompt
      });

      let cars = [];
      try {
        cars = JSON.parse(text);
      } catch (e) {
        return res.status(200).json({ text, error: 'A resposta não pôde ser convertida em JSON.' });
      }
      res.json({ cars });
    } catch (err) {
      console.error('Erro em /api/generate:', err);
      res.status(500).json({ error: err.message || 'Erro interno do servidor' });
    }
  });

  app.listen(PORT, () => {
    console.log(`Servidor ouvindo em http://localhost:${PORT}`);
    console.log(`Carros na base de dados: ${carsDatabase.length}`);
  });
}

// Inicializar embedder antes de iniciar o servidor
initEmbedder().then(startServer);