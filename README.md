# Mini-APIRestFul con pokeAPI en Node.js
Este es un proyecto que implementa una mini-APIRestFul utilizando la pokeAPI en Node.js. La API proporciona puntos de acceso para obtener información sobre diferentes Pokémon.

## Instalación
1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta del proyecto.
3. Ejecuta npm install para instalar las dependencias.

## Puntos de acceso
La API tiene los siguientes puntos de acceso:

### Obtener información de un Pokémon por su ID:
- Método: GET
- Ruta: `/api/pokemon/:id`
- Parámetros:
    - `id`: El ID del Pokémon que se desea obtener.
- Respuesta:
```
{
  "name": "bulbasaur",
  "height": 7,
  "weight": 69,
  "base_experience": 64,
  "types": [
    {
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  "abilities": [
    {
      "ability": {
        "name": "overgrow",
        "url": "https://pokeapi.co/api/v2/ability/65/"
      }
    },
    {
      "ability": {
        "name": "chlorophyll",
        "url": "https://pokeapi.co/api/v2/ability/34/"
      }
    }
  ]
}
```

### Ejecución
Para iniciar el servidor y utilizar la API, ejecuta el siguiente comando:
```
node src/app.js
```
El servidor se ejecutará en http://localhost:3000/.

### Tecnologías utilizadas
- Node.js
- Express
- Axios

### Estructura del proyecto
```
project/
  ├── src/
  │   ├── controllers/
  │   │   └── pokemonController.js
  │   ├── services/
  │   │   └── pokemonService.js
  │   ├── routes/
  │   │   └── pokemonRoutes.js
  │   └── app.js
  └── README.md
```

### Desacoplamiento
Se ha buscado desacoplar la dependencia con la pokeAPI separando la lógica de negocio en el `pokemonService.js` y el controlador en `pokemonController.js`. De esta manera, el servicio es el encargado de interactuar con la API externa mientras que el controlador maneja las solicitudes HTTP y la respuesta.

### Control de errores
Se ha implementado un manejo básico de errores en caso de que ocurra algún problema durante la solicitud a la pokeAPI. En caso de error, la API devuelve una respuesta de estado 500 con un mensaje "Internal server error".