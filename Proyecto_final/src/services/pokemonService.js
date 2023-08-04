const axios = require('axios');

// URL base para acceder a la pokeAPI.
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// Función para obtener información de un Pokémon por su ID utilizando la pokeAPI.
const getPokemonById = async (id) => {
    try {
        // Realizamos una solicitud GET a la pokeAPI concatenando el ID del Pokémon a la URL base.
        const response = await axios.get(`${BASE_URL}${id}`);

        // Devolvemos los datos del Pokémon obtenidos de la respuesta de la pokeAPI.
        return response.data;
    } catch (error) {
        // Si ocurre un error durante la solicitud, lanzamos una excepción con un mensaje descriptivo.
        throw new Error('Failed to fetch Pokemon');
    }
};

// Exportamos la función para que pueda ser utilizada por el controlador.
module.exports = {
    getPokemonById,
};
