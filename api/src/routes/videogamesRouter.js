const { Router } = require('express');
const { getAllVideogames, getVideogameById, createVideogame } = require("../handlers/videogamesHandler")


const videogamesRouter = Router();

videogamesRouter.get('/', getAllVideogames); //Traer un arr con los juegos o traer un juego por su nombre por query
videogamesRouter.get('/:id', getVideogameById); //Trear juego segun su ID
videogamesRouter.post('/', createVideogame); //Crear juego


module.exports = videogamesRouter;