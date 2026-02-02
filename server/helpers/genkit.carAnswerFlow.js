import { defineFlow } from '@genkit-ai/ai';
import { carRetriever } from './genkit.carRetriever';

export const carAnswerFlow = defineFlow({
  name: 'carAnswerFlow',
  steps: [
    async ({ input }) => {
      const context = await carRetriever.retrieve(input.question);
      return {
        context,
        question: input.question,
      };
    },
    async ({ context, question }) => {
      const systemPrompt = `
        Responda APENAS com base no contexto fornecido abaixo.\nSe a resposta não estiver no contexto, diga: "Não sei responder com base nas informações disponíveis."\nSeja breve e direto.\nCONTEXTO:\n${context.map(c => c.text).join('\n')}
      `;
      // Chame seu modelo LLM aqui, por exemplo:
      // return await callLLM({ prompt: systemPrompt + '\nPergunta: ' + question });
      // (Ajuste conforme seu setup Genkit/LLM)
    },
  ],
});
