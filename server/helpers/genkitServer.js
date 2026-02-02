require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { carAnswerFlow } = require('./genkit.carAnswerFlow');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Novo endpoint usando o flow do Genkit
app.post('/api/genkit', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

    // Executa o flow do Genkit
    const result = await carAnswerFlow.run({ question: prompt });
    res.json({ text: result });
  } catch (err) {
    console.error('Error in /api/genkit:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
