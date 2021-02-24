const sgMail = require("@sendgrid/mail");
const keys = require('../config/keys');
const { sendGridKey } = keys;
const surveyTemplate = require('../services/emailTemplates/surveyTemplates');

sgMail.setApiKey(sendGridKey);

// const msg = {
//     to: "markwuu@gmail.com",
//     from: "markwuu@gmail.com",
//     subject: "subject portion",
//     text: "text portion",
//     html: surveyTemplate(),
//     trackingSettings: {
//         "clickTracking": {
//             "enable": true
//         },
//     },
// };

const sendMail = async (subject, body, recipients) => {

    const msg = {
        to: recipients,
        from: "markwuu@gmail.com",
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
