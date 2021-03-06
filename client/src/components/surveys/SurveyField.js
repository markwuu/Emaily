// SurveyField contains logic to render a single
// label and text input
import React from 'react';

const SurveyField = ({input, label}) => {

    return (
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>
    )
}

export default SurveyField;
