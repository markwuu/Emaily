const keys = require('../../config/keys');
const { redirectDomain } = keys;

module.exports = (body) => {
    return `
        <div style="text-align: center;">
            <h3>I'd like your input</h3>
            <p>Please answer the following question:</p>
            <p>${body}</p>
            <div>
                <a href="${redirectDomain}/api/surveys/thanks">Yes</a>
            </div>
            <div>
                <a href="${redirectDomain}/api/surveys/thanks">No</a>
            </div>
        </div>
    `;
};
