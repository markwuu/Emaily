//SurveyFormReview shows users their form inputs for review
import React from 'react';
import formFields from './formFields';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SurveyFormReview = ({onCancel, surveyFormData, submitSurvey}) => {
    const reviewFields = formFields.map(({name, label}, i)=> {
        return (
            <div key={i}>
                <label>{label}</label>
                <div>
                    {surveyFormData[name]}
                </div>
            </div>
        )
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
            <button
                onClick={() => submitSurvey(surveyFormData)}
                className="green white-text btn-flat right"
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
};

export default SurveyFormReview;
