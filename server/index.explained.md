# Explicação do index.js

Este arquivo é o backend principal do projeto CarFinder AI. Ele integra Express, IA (Genkit + Gemini), embeddings (HuggingFace), e busca de carros.

## Partes do index.js

1. **Importações**
   - `dotenv`: Carrega variáveis de ambiente.
   - `express`: Framework para API HTTP.
   - `cors`: Permite requisições cross-origin.
   - `carsDatabase`: Base de dados local de carros.
   - `@genkit-ai/dev-local-vectorstore`: Ferramentas para busca vetorial.
   - `@genkit-ai/google-genai`: Integração com Google Gemini.
   - `genkit`: Framework para IA.
   - `genkit/retriever`: Utilitários para busca.

2. **Configuração da IA**
   - Cria o objeto `ai` usando Genkit e Google Gemini.

3. **Embedder HuggingFace**
   - Função `initEmbedder`: Inicializa o modelo de embeddings.
   - Função `getEmbedding`: Gera embedding de texto.

4. **Busca de carros relevantes**
   - Função `retrieveRelevantCars`: Calcula similaridade entre prompt e carros.

5. **Servidor Express**
   - Função `startServer`: Inicializa API HTTP.
   - Rota `/api/generate`: Recebe prompt, busca carros, gera resposta IA.

6. **Prompt e schema**
   - Define o schema JSON esperado.
   - Monta o contexto e prompt para IA.

7. **Geração de resposta IA**
   - Usa `ai.generate` para gerar resposta estruturada.

8. **Tratamento de erros**
   - Retorna erro se não conseguir converter resposta em JSON.

9. **Inicialização**
   - Chama `initEmbedder().then(startServer)` para garantir que o embedder está pronto antes de iniciar o servidor.

---

Cada parte está documentada no próprio index.js para facilitar manutenção.