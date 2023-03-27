const axios = require('axios');
const { Videogame, Genre} = require('../db');
//const { DB_KEY } = process.env;

const cleanArray = (games) => 
    games.data.results.map((e) => {
        return {
            id: e.id,
            name: e.name,
            description: e.description,
            genres: e.genres?.map((g) => g.name),
            platforms: e.platforms?.map((p) => p.platform.name),
            image: e.background_image,
            releaseDate: e.released,
            rating: e.rating,
            created: false,
        }
    })

//------------------------------------------------------------------------------------------

const getAPIinfo = async () => {
    const url = await axios.get(
        `https://api.rawg.io/api/games?key=3c858cd2a964474eb23ba08872de0fc1&page_size=100`)
    const filterAPI = cleanArray(url)
    return filterAPI
}

const getDBinfo = async () => {
    const games = await Videogame.findAll({
        include: [{
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }]
    })
    return games
}

const getDBandAPI = async () => {
    const api = await getAPIinfo()
    const db = await getDBinfo()
    const DbApi = [...api, ...db]
    return DbApi
}

//------------------------------------------------------------------------------------------

const searchByname = async (name) => {
    const dbGames = await Videogame.findAll({where:{name: name}})
    const api = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=3c858cd2a964474eb23ba08872de0fc1`
    )
    const infoAPI = cleanArray(api)
    return [...dbGames, ...infoAPI]
}

//------------------------------------------------------------------------------------------

const findByid = async (id, source) => {
    const result = 
        source === 'api'
        ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=3c858cd2a964474eb23ba08872de0fc1`)).data
        : await Videogame.findByPk(id)
    return result
}

//------------------------------------------------------------------------------------------

const createVideoGame = async (name, description, genres, platforms, image, releaseDate, rating) => {
    const api = await getAPIinfo()
    const apiFilter = api.filter((game) => game,name === name)

    if(apiFilter.length !== 0) throw Error('this game already exists')
    const createGame = await Videogame.create({name, description, platforms, image, releaseDate, rating})

    const genreDB = await Genre.findAll({
        where: {
            name: genres,
        }
    })

    createGame.addGenre(genreDB)
    return createGame
}



module.exports = {
    getDBandAPI,
    searchByname,
    findByid,
    createVideoGame,
}