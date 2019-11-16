const axios = require('axios')
const config = require('../config');
const url = require('url')


const APIKEY = config.apiKey;
const baseUrl = config.url

exports.getMoviebyId = async function (id) {
  console.log('GET MOVIE BY ID')

  const fullURL = `${baseUrl}movie/${id}?api_key=${APIKEY}`

  try {
    const fetchMovie = await axios.get(fullURL);
    return fetchMovie.data

  } catch (error) {
    return { error: "you broke it ! " }
  }
}