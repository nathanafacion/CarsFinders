
# 🚗 CarFinder AI – Busca de Carros com IA, Firestore e Genkit

CarFinder AI é uma aplicação fullstack que permite buscar carros por marca, modelo ou ano, utilizando inteligência artificial (RAG com Genkit + Gemini) e banco de dados Firestore. O frontend é feito em React com styled-components, proporcionando uma experiência moderna, responsiva e profissional.

## ✨ Funcionalidades

- 🔎 Busca inteligente de carros por texto (marca, modelo, ano)
- 🤖 Respostas geradas por IA (Genkit + Gemini 2.5 Flash)
- 🗃️ Dados reais de carros salvos no Firestore
- 🧠 RAG (Retrieval-Augmented Generation) para contexto relevante
- 🎨 Frontend React moderno com styled-components
- 📱 Totalmente responsivo e pronto para produção

## 🛠️ Tecnologias

- React 18
- Styled Components
- Node.js + Express
- Genkit AI
- Google Gemini (via Genkit)
- Firestore (Firebase)
- Vite

## 📦 Instalação e Uso

```bash
# Instale as dependências (raiz e /server)
yarn install
yarn --cwd server install

# Popule o Firestore com os dados de carros (opcional, só na primeira vez)
cd server
node helpers/chunkFirebase.js
cd ..

# Rode o backend (porta 4000)
yarn --cwd server dev

# Rode o frontend (porta 3000)
yarn dev
```

O frontend estará em http://localhost:3000 e o backend em http://localhost:4000

## 🚀 Como usar

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## ⚙️ Configuração

Certifique-se de configurar suas credenciais do Google AI conforme a documentação do Genkit:

1. Configure as variáveis de ambiente necessárias
2. Obtenha uma API key do Google AI
3. Configure o Genkit conforme a documentação oficial

## 📁 Estrutura do Projeto

```
├── index.html          # HTML principal
├── main.jsx           # Ponto de entrada React
├── App.jsx            # Componente App principal
├── GenkitChat.jsx     # Componente principal do chat
├── package.json       # Dependências
├── vite.config.js     # Configuração Vite
└── README.md          # Documentação
```

## 🎨 Customização

O design foi criado seguindo princípios de frontend de alta qualidade:

- **Fontes**: Syne (display) + Space Mono (monospace)
- **Cores**: Tema escuro com gradientes roxo/cyan
- **Animações**: Entrada suave, loading animado, efeitos de hover
- **Layout**: Glassmorphism com backdrop blur

Sinta-se livre para customizar cores, fontes e animações no arquivo `GenkitChat.jsx`.

## 📝 Notas

- O código está pronto para produção
- Todas as animações são otimizadas
- O design evita clichês comuns de IA
- Acessibilidade considerada (cores, contraste, foco)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

## 📄 Licença

MIT

## 🔎 Como criar o índice vetorial no Firestore

1. Acesse o [Console do Firebase](https://console.firebase.google.com/), vá para Firestore Database.
2. Clique em "Indexes" > "Vector Indexes" (ou "Índices Vetoriais").
3. Clique em "Create Index" (Criar Índice).
   - Coleção: `cars`
   - Campo: `embedding`
   - Dimensão: (deve ser igual ao tamanho do vetor retornado pelo modelo, ex: 768)
   - Tipo: `float[]`
4. Salve e aguarde a indexação ser concluída.

> **Importante:** O campo `embedding` será criado automaticamente pelo script de migração. Certifique-se de que todos os documentos da coleção `cars` possuem esse campo preenchido.
