const { getDBandAPI, searchByname, findByid, createVideoGame } = require('../controllers/videogamesController')

const getAllVideogames = async (req, res) => {
    const { name } = req.query;
    try {
        const result =
            name
            ? await searchByname(name)
            : await getDBandAPI()
        if(result.length === 0) throw Error('Game not found')
        res.status(200).json(result)
    } catch(error) {
        res.status(404).json({ error: error.message })
    }
}

const getVideogameById = async (req, res) => {
    const { id } = req.params
    const source = 
        isNaN(id)
        ? 'bdd'
        : 'api'
    try{
        const result = await findByid(id, source)
        if(result.length === 0) throw Error('Game not found')
        res.status(200).send(result)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const createVideogame = async (req, res) => {
    const { name, description, genres, platforms, image, releaseDate, rating } = req.body
    try{
        const newGame = await createVideoGame(name, description, genres, platforms, image, releaseDate, rating)
        res.status(201).json(newGame)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    getAllVideogames,
    getVideogameById,
    createVideogame,
}