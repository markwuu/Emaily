// SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
    const [showFormReview, setShowFormReview] = useState(false);
    const [surveyFormData, setSurveyFormData] = useState({title: '', subject: '', body: '', emails: ''});

    const renderContent = () => {
        if(showFormReview){
            return <SurveyFormReview onCancel={() => {setShowFormReview(false)}}/>
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

export default SurveyNew;