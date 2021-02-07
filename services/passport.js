const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const { googleClientID, googleClientSecret } = keys;

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    //Taking mongoose user model instance and
    //setting the cookie as the mongo user id
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    //Taking id from the cookie and
    //turning it into a mongooser user model instance
    User.findById(id)
        .then((user) => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: googleClientID,
        clientSecret: googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        //Create new model instance and then persist it to the db
        User.findOne({ googleId: profile.id})
            .then((existingUser) => {
                if(!existingUser){
                    new User({ googleId: profile.id }).save()
                        .then(user => done(null, user));
                } else {
                    done(null, existingUser);
                }
            })

    })
);
