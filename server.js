<<<<<<< HEAD
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware para analisar JSON
app.use(express.json());

// Middleware para servir arquivos estáticos da pasta "public"
app.use('/public', express.static(path.join(__dirname, 'public')));

// Importar e usar rotas
const someRoute = require('./server/routes/someRoute'); // Exemplo de importação de rota
app.use('/api/someRoute', someRoute); // Exemplo de uso de rota

// Porta de escuta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Exemplo de função para buscar dados do Firestore
async function fetchData() {
  const querySnapshot = await getDocs(collection(db, 'your-collection-name'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
=======
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware para analisar JSON
app.use(express.json());

// Middleware para servir arquivos estáticos da pasta "public"
app.use('/public', express.static(path.join(__dirname, 'public')));

// Importar e usar rotas
const someRoute = require('./server/routes/someRoute'); // Exemplo de importação de rota
app.use('/api/someRoute', someRoute); // Exemplo de uso de rota

// Porta de escuta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Exemplo de função para buscar dados do Firestore
async function fetchData() {
  const querySnapshot = await getDocs(collection(db, 'your-collection-name'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
>>>>>>> e2c97bc (img fixed)
}