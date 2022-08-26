const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
// const { Users } = require('./db');

const GOOGLE_CLIENT_ID = "386663355164-fbij6h4rkmrfct883apbvqc0234k6ad5.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"



passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    // scope: [ 'profile' ],
    // state: true
  },
 async function verify(accessToken, refreshToken, profile, done) {

    done(null, profile)
}
));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})