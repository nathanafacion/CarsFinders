import { defineRetriever } from '@genkit-ai/ai';
import { firestoreVectorSearch } from '@genkit-ai/firebase';

export const carRetriever = defineRetriever({
  name: 'carRetriever',
  search: firestoreVectorSearch({
    collection: 'cars',
    embeddingField: 'embedding',
    textField: 'descricao', // ou outro campo relevante
    topK: 3,
  }),
});
