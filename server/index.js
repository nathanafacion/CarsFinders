// Script para popular o Firestore com os dados do carsDatabase.js
async function populateFirestoreCars() {
  const batch = db.batch();
  const collectionRef = db.collection('cars');
  for (let i = 0; i < carsDatabase.length; i++) {
    const docRef = collectionRef.doc();
    batch.set(docRef, carsDatabase[i]);
  }
  await batch.commit();
  console.log('Firestore populado com os carros!');
}

// Descomente a linha abaixo para rodar a população uma vez
// populateFirestoreCars();
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const carsDatabase = require('./db/carsDatabase');
const { genkit } = require('genkit');
const { googleAI, textEmbedding004 } = require('@genkit-ai/google-genai');
const admin = require('firebase-admin');


// Configure Genkit with Google AI
const ai = genkit({ plugins: [googleAI( {apiKey: process.env.GOOGLE_API_KEY})] });


// Inicializa Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: "carfinder-3aeec"
  });
}
const db = admin.firestore();

// Fragmentação do JSON (chunking)
function chunkCars(cars, chunkSize = 1) {
  // Divide o array de carros em chunks de tamanho chunkSize
  const chunks = [];
  for (let i = 0; i < cars.length; i += chunkSize) {
    chunks.push(JSON.stringify(cars.slice(i, i + chunkSize)));
  }
  return chunks;
}



// Indexação Firestore: salva cada carro como documento na coleção 'cars'
async function indexCarsDatabaseFirestore() {
  const batch = db.batch();
  const collectionRef = db.collection('cars');
  for (let i = 0; i < carsDatabase.length; i++) {
    const docRef = collectionRef.doc();
    batch.set(docRef, carsDatabase[i]);
  }
  await batch.commit();
  console.log('Indexação dos carros no Firestore concluída!');
}



// Inicializa servidor só após indexação Firestore
async function startServer() {
  await indexCarsDatabaseFirestore();

  const app = express();
  const PORT = process.env.PORT || 4000;

  app.use(cors());
  app.use(express.json());
  console.log("debug");
  // API endpoint para chat (usando base de dados e IA)
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

      // Busca relevante no Firestore: pega os carros que contêm o termo
      const snapshot = await db.collection('cars').get();
      const relevantCars = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        // Busca por marca, modelo ou descrição
        const searchString = `${data.marca} ${data.modelo}`.toLowerCase();
        if (searchString.includes(prompt.toLowerCase())) {
          relevantCars.push(data);
        }
      });
      // Pega até 3 carros mais relevantes
      const context = `Banco de dados de carros (JSON):\n${JSON.stringify(relevantCars.slice(0,3))}\n\n`;
      const systemPrompt = `
        Responda APENAS com um array JSON de carros, SEM EXPLICAÇÃO, seguindo exatamente o seguinte schema:
        ${schema}
        Cada objeto deve conter apenas as chaves do schema. Não inclua comentários, texto extra ou explicações.
        Pergunta do usuário: ${prompt}
      `;

      const { text } = await ai.generate({
        model: googleAI.model('gemini-2.5-flash-lite'),
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
}

startServer();