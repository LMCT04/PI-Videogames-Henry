const { getGenres } = require(`../controllers/genresController`)


const getAllGenres = async (req, res) => {
    try{
        const result = await getGenres()
        res.status(200).send(result)
    } catch(error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getAllGenres,
}