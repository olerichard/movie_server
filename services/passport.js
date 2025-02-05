const passport = require('passport');
const JwtStategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config');
const LocalStrategy = require('passport-local')

// MONGO DB IMPLEMENTATION, needs to be rewritten

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  console.log("Passport localStrategy")
  console.log(email)
  console.log(password)
  User.findOne({ email: email }, function (err, user) {
    if (err) { return done(err) };
    if (!user) { return done(null, false) };
    console.log("User Found")

    user.comparePassword(password, function (err, isMatch) {
      if (err) { return done(err) }
      if (!isMatch) { return done(null, false) }

      console.log("Password MATCH")
      return done(null, user)

    })
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

const jwtLogin = new JwtStategy(jwtOptions, function (payload, done) {
  User.findById(payload.sub, function (err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
});

//passport.use(jwtLogin);
//passport.use(localLogin);