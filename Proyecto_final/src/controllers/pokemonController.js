// Importamos el servicio que se encargará de interactuar con la pokeAPI.
const PokemonService = require('../services/pokemonService');

// Controlador para obtener información de un Pokémon por su ID.
const getPokemon = async (req, res) => {
    try {
        // Extraemos el ID del Pokémon de los parámetros de la solicitud.
        const { id } = req.params;

        // Llamamos al servicio para obtener la información del Pokémon por su ID.
        const pokemon = await PokemonService.getPokemonById(id);

        // Devolvemos la información del Pokémon como una respuesta en formato JSON.
        res.json(pokemon);
    } catch (error) {
        // Si ocurre un error, devolvemos una respuesta con estado 500 y un mensaje de error.
        res.status(500).json({ error: 'Internal server error'});
    }
};

// Exportamos la función del controlador para que pueda ser utilizada por las rutas.
module.exports = {
    getPokemon,
};
