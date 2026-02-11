
## Prova de Conceito – CarFinder AI

Esta POC demonstra uma busca inteligente de carros usando **RAG (Retrieval-Augmented Generation)** com processamento de linguagem natural.

### 🛠️ Stack Tecnológica

**Frontend:**
- React 18 + Vite
- Styled Components
- Interface de busca inteligente

**Backend:**
- Node.js + Express
- **Genkit AI** (framework de IA do Google)
- **Google Gemini 2.5 Flash** (modelo de linguagem)
- **HuggingFace Transformers** (@xenova/transformers)
- **Embeddings:** all-MiniLM-L6-v2 (executado localmente)
- **RAG:** Busca por similaridade de cosseno
- Banco de dados local (JSON)

### 🎥 Demonstração

https://github.com/user-attachments/assets/Gravando%202026-02-11%20202323.mp4

> Veja o CarFinder AI em ação! O vídeo demonstra a busca inteligente de carros utilizando processamento de linguagem natural.

### Como testar

1. **Configuração:** Crie um arquivo `.env` na pasta `server`:
   ```env
   GOOGLE_API_KEY=sua_chave_aqui
   PORT=4000
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   cd server && npm install && cd ..
   ```

3. **Rode o backend:**
   ```bash
   npm run server:dev
   ```
   O servidor estará em `http://localhost:4000`

4. **Rode o frontend (novo terminal):**
   ```bash
   npm run dev
   ```
   O frontend estará em `http://localhost:5173`

### ✨ Como funciona

1. **Entrada:** Usuário descreve o que procura (ex: "Corolla 2020 flex")
2. **Embeddings:** Converte a busca e os carros em vetores usando HuggingFace (all-MiniLM-L6-v2)
3. **RAG:** Busca os carros mais similares usando similaridade de cosseno
4. **IA Generativa:** Gemini 2.5 Flash processa o contexto e gera resposta estruturada
5. **Resposta:** Retorna JSON com os carros mais relevantes

---

## 🚀 Scripts Disponíveis

```bash
# Frontend
npm run dev          # Inicia servidor de desenvolvimento (Vite)
npm run build        # Build para produção
npm run preview      # Preview da build de produção

# Backend
npm run server       # Inicia servidor backend (produção)
npm run server:dev   # Inicia servidor backend (desenvolvimento com nodemon)
```

## ⚙️ Configuração da API Key

1. Acesse [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Crie uma API key para o Gemini
3. Adicione ao arquivo `server/.env`:
   ```env
   GOOGLE_API_KEY=sua_chave_aqui
   PORT=4000
   ```

## 📁 Estrutura do Projeto

```
├── index.html                    # HTML principal
├── main.jsx                      # Ponto de entrada React
├── vite.config.js               # Configuração Vite
├── src/
│   ├── pages/
│   │   ├── App.jsx              # Componente principal
│   │   └── CarSearch.jsx        # Página de busca
│   └── components/
│       ├── CarSearchForm/       # Formulário de busca
│       ├── AiResponse/          # Resposta da IA
│       ├── CarResults/          # Lista de resultados
│       └── CarResultItem/       # Item de carro
├── server/
│   ├── index.js                 # API Express + Genkit
│   ├── db/
│   │   └── carsDatabase.js      # Banco de dados local
│   └── helpers/
│       └── chunkFirebase.js     # Utils (opcional)
└── package.json                 # Dependências
```

## 🎨 Características do Design

- **Interface moderna:** Styled Components com tema escuro
- **Responsivo:** Adaptado para desktop e mobile
- **UX otimizada:** Feedback visual durante processamento
- **Cards informativos:** Exibição clara dos resultados

Sinta-se livre para customizar os estilos nos arquivos `.css` de cada componente.

## 📝 Detalhes Técnicos

- **Embeddings locais:** Processamento rápido sem custos adicionais (HuggingFace)
- **RAG eficiente:** Similaridade de cosseno para busca vetorial
- **IA Generativa:** Gemini 2.5 Flash para respostas naturais
- **Banco local:** JSON simples, fácil de expandir
- **API RESTful:** Endpoint `/api/generate` com CORS habilitado

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

## 📄 Licença

MIT

## � Extensões Possíveis

- **Banco de dados:** Migrar para MongoDB, PostgreSQL ou Firestore
- **Embeddings:** Testar outros modelos (BGE, E5, etc.)
- **Cache:** Implementar Redis para respostas frequentes
- **Autenticação:** Adicionar login e histórico de buscas
- **Analytics:** Rastrear queries e melhorar resultados

---

**⚠️ Atenção:** Esta POC é para fins de demonstração técnica. Não use em produção sem ajustes de segurança, rate limiting, validação de entrada e monitoramento de custos de API.
