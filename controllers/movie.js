const tmdb = require('../api/tmdb')

exports.getMoviebyId = async function (req, res) {
  console.log('GET MOVIE BY ID')
  const id = req.params.id;

  try {
    const fetchMovie = await tmdb.getMoviebyId(id);
    res.status(200).json(fetchMovie)

  } catch (error) {
    res.status(400).json({ error: "you broke it ! " });
  }
}