const express = require('express');
const pokemonRoutes = require('./routes/pokemonRoutes');

// Creamos una instancia de la aplicación de Express.
const app = express();

// Habilitamos el middleware para analizar el cuerpo de las solicitudes en formato JSON.
app.use(express.json());

// Asociamos las rutas de la API a la ruta base '/api'.
app.use('/api', pokemonRoutes);

// Definimos el puerto en el que se ejecutará el servidor.
const PORT = 3000;

// Iniciamos el servidor para escuchar las solicitudes en el puerto definido.
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
