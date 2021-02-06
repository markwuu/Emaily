const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const { googleClientID, googleClientSecret } = keys;

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy({
        clientID: googleClientID,
        clientSecret: googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        //Create new model instance and then persist it to the db
        new User({ googleId: profile.id }).save();
    })
);
