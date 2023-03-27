const { Router } = require('express');
const genresRouter = require('./genresRouter')
const videogamesRouter = require('./videogamesRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRoute = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRoute.use('/videogames', videogamesRouter)
mainRoute.use('/genres', genresRouter)


module.exports = mainRoute;
