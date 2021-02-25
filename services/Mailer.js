const sgMail = require("@sendgrid/mail");
const keys = require('../config/keys');
const { sendGridKey, fromEmail } = keys;
const surveyTemplate = require('../services/emailTemplates/surveyTemplates');

sgMail.setApiKey(sendGridKey);

const sendMail = async (survey) => {

    const { recipients, subject, body } = survey;

    const msg = {
        to: recipients,
        from: fromEmail,
        subject: subject,
        text: subject,
        html: surveyTemplate(body),
        trackingSettings: {
            "clickTracking": {
                "enable": true
            },
        },
    }

    sgMail
        .send(msg)
        .then(() => {}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body);
            }
        });
}

module.exports = sendMail;
