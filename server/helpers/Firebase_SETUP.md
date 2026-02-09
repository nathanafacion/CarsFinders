# Configuração do Firebase para o Projeto CarFinder

## 1. Criar Projeto no Firebase
- Acesse https://console.firebase.google.com/
- Crie um novo projeto (ex: CarFinder)

## 2. Ativar o Firestore
- No menu lateral, clique em "Firestore Database"
- Clique em "Criar banco de dados"
- Siga as instruções para ativar o modo de produção ou teste

## 3. Gerar Credencial de Service Account
- Vá em "Configurações do projeto" (ícone de engrenagem)
- Clique em "Contas de serviço"
- Clique em "Gerar nova chave privada"
- Baixe o arquivo JSON (ex: `credencial-firebase.json`)
- Salve em um local seguro, por exemplo: `C:\Users\nathana\credencial-firebase.json`

## 4. Configurar a variável de ambiente no terminal
No mesmo terminal onde você vai rodar o backend, execute:

```powershell
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\nathana\credencial-firebase.json"
```

**Lembrete:** Sempre entre na pasta `server` antes de rodar o backend e defina a variável de credencial no mesmo terminal:

```powershell
cd server
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\nathana\credencial-firebase.json"
```

## 5. Ajustar o código (já feito)
- O backend já está configurado para usar o Firestore e a credencial.
- O projectId está explícito no código: `carfinder-3aeec`
- Os dados são salvos e buscados na coleção `cars`.

## 6. Rodar o backend
No mesmo terminal (após definir a variável de ambiente):

```powershell
yarn dev
```
ou
```powershell
node index.js
```

---

**Resumo:**
- Crie o projeto e ative o Firestore
- Gere e baixe a credencial
- Defina a variável de ambiente no terminal
- Rode o backend normalmente

Se precisar popular o banco, execute o arquivo `helpers/chunkFirebase.js` com:

```powershell
node helpers/chunkFirebase.js
```
