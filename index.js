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
    }, (accessToken, refreshToken, profile, done) => {
        console.log('accessToken: ', accessToken);
        console.log('refreshToken: ', refreshToken);
        console.log('profile: ', profile);
        console.log('done: ', done);
    })
);

//User clicks login and request is sent to Google
//User confirms they want to login using Google account
//'google' string passed as argument, so Passport knows to use Google Strategy listed above
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

//User is redirected to this URL (set in Google dashboard)
//Passport uses google strategy to send fields to google in exchange for user profile info
//query params given back: code, scopes
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`app listening on port ${PORT}`) });
