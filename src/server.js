// src/server/server.js

import express from 'express';
import fetch from 'node-fetch';

const app = express();

// Ruta para obtener los artículos
app.get('/articles', async (req, res) => {
  try {
    const articles = await fetchArticles();
    res.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Error al obtener los artículos' });
  }
});

// Función para obtener los artículos desde Strapi API
const fetchArticles = async () => {
  const res = await fetch('http://localhost:1337/api/articles/');
  const data = await res.json();
  return data;
}

// Inicia el servidor
const PORT = 4321;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
