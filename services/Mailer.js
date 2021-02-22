const sgMail = require("@sendgrid/mail");
const keys = require('../config/keys');
const { sendGridKey } = keys;

sgMail.setApiKey(sendGridKey);

const msg = {
    to: "markwuu@gmail.com",
    from: "markwuu@gmail.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    trackingSettings: {
        "clickTracking": {
            "enable": true
        },
    },
};

const formatAddresses = (recipients) => {
    return recipients.map(({ email }) => {
         return email;
    })
}

const sendMail = () => {
    sgMail
        .send(msg)
        .then(() => {}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body);
            }
        });
}

const addRecipients = (recipients) => {
    return recipients.forEach(recipient => {

    });
}

