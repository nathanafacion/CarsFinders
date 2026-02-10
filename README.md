
## Prova de Conceito – CarFinder AI

Esta POC demonstra uma busca inteligente de carros usando RAG (Retrieval-Augmented Generation) com IA (Genkit + Gemini) e Firestore.

### Como testar

1. Instale as dependências:
   ```bash
   yarn install
   yarn --cwd server install
   ```
2. (Opcional) Popule o Firestore:
   ```bash
   cd server
   node helpers/chunkFirebase.js
   cd ..
   ```
3. Rode o backend:
   ```bash
   yarn --cwd server dev
   ```
4. Rode o frontend:
   ```bash
   yarn dev
   ```

### O que esta POC faz

- Recebe um texto de busca (ex: "Corolla 2020 flex")
- Busca os carros mais similares no Firestore usando embeddings (RAG)
- Gera resposta estruturada via IA (Genkit + Gemini)
- Retorna um JSON com os carros mais relevantes

---

**Atenção:** Esta POC é para fins de demonstração técnica. Não use em produção sem ajustes de segurança, performance e custos de API.
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
