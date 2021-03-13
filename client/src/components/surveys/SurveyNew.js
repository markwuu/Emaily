// SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import axios from 'axios';
import { withRouter } from "react-router";

const SurveyNew = ({history}) => {
    console.log('history', history);
    const [showFormReview, setShowFormReview] = useState(false);
    const [surveyFormData, setSurveyFormData] = useState({title: '', subject: '', body: '', emails: ''});

    const submitSurvey = (values) => {
        console.log('sanity check', values);
        axios
            .post('/api/surveys', values)
            .then(() => {
                console.log('sanity check');
                history.push("/surveys")
            });
    }

    const renderContent = () => {
        if(showFormReview){
            return (
                <SurveyFormReview
                    surveyFormData={surveyFormData}
                    onCancel={() => {setShowFormReview(false)}}
                    submitSurvey={submitSurvey}
                />
            );
        }

        return (
            <SurveyForm
                surveyFormData={surveyFormData}
                setSurveyFormData={setSurveyFormData}
                onSurveySubmit={() => {setShowFormReview(true)}}
            />
        );
    }

    return (
        <div>
            { renderContent() }
        </div>
    )
}

export default withRouter(SurveyNew);
