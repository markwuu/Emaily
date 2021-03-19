const { Path } = require('path-parser')
const { URL } = require('url');
const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const sendMail = require('../services/Mailer');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting!');
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');

        _.chain(req.body)
            .map(({email, url}) => {
                const match = p.test(new URL(url).pathname);
                if(match) {
                    return { email, surveyId: match.surveyId, choice: match.choice};
                }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .each(({ surveyId, email, choice}) => {
                Survey.updateOne(
                    {
                        _id: surveyId,
                        recipients: {
                            $elemMatch: { email: email, responded: false }
                        }
                    }, {
                        $inc: { [choice]: 1 },
                        $set: { 'recipients.$.responded': true}
                    }
                ).exec();
            })
            .value();

        res.send({}).status(200);
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        try {
            //1. Send email
            await sendMail(survey);
            //2. Save survey
            await survey.save();
            //3. Remove credits from user
            req.user.credits -= 1;
            //4. Resave user;
            const user = await req.user.save();
            //5. Send back updated user model
            res.send(user);
        } catch (err){
            res.status(422).send(err);
        }
    });
};
