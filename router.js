//const Authentication = require('./controllers/authentication');
//const passportService = require('./services/passport');
//const passport = require('passport');
//const multer = require('multer');
//const upload = multer({ storage: multer.memoryStorage() });
const Movie = require('./controllers/movie')


//const requireAuth = passport.authenticate('jwt', { session: false });
//const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send({});
  })

  //app.post('/logIn', requireSignin, Authentication.login);
  //app.post('/createUser', Authentication.createUser);


  app.get('/movie/:id', Movie.getMoviebyId);
  app.get('search/:search')

}