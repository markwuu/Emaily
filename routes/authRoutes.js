const passport = require('passport');

module.exports = (app) => {
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

    app.get('/api/logout', (req, res) => {
        //logout function attached to req object by passport
        //Kills cookie
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
