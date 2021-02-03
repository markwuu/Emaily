const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const { googleClientID, googleClientSecret } = keys;

const app = express();

passport.use(
    new GoogleStrategy({
        clientID: googleClientID,
        clientSecret: googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken) => {
        console.log('accessToken', accessToken);
    })
);

//User clicks login and request is sent to Google
//'google' string passed as argument, so Passport knows to use Google Strategy listed above
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`app listening on port ${PORT}`) });
