const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemonController');

// Definimos un punto de acceso tipo GET para obtener información de un Pokémon por su ID.
// La ruta será '/pokemon/:id', donde ':id' es el parámetro para el ID del Pokémon.
router.get('/pokemon/:id', PokemonController.getPokemon);

// Exportamos el enrutador para que pueda ser utilizado por la aplicación principal.
module.exports = router;
