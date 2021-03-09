//SurveyFormReview shows users their form inputs for review
import React from 'react';
import formFields from './formFields';

const SurveyFormReview = ({onCancel, surveyFormData}) => {
    const reviewFields = formFields.map((field)=> {
        return (
            <div>
                <label>{field.label}</label>
                <div>
                    {surveyFormData[field.name]}
                </div>
            </div>
        )
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="yellow darken-3 btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
        </div>
    )
};

export default SurveyFormReview;
