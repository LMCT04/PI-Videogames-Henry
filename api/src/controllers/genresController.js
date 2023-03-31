const axios = require("axios");
const { Genre } = require("../db");
//const { API_KEY } = process.env;


const getGenres = async () => {
    const url = await axios.get(`https://api.rawg.io/api/genres?key=3c858cd2a964474eb23ba08872de0fc1`)
    const genresApi = await url.data.results.map((g) => g.name )
    genresApi.forEach((g) => {
        Genre.findOrCreate({
            where: {
                name: g
            }
        })
    })

    let genreDb = await Genre.findAll()
    return genreDb
}

module.exports = {
    getGenres
}
