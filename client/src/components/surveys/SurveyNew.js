// SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
    const [showFormReview, setShowFormReview] = useState(false);

    const renderContent = () => {
        if(showFormReview){
            return <SurveyFormReview/>
        }

        return <SurveyForm onSurveySubmit={() => {setShowFormReview(true)}}/>
    }

    return (
        <div>
            { renderContent() }
        </div>
    )
}

export default SurveyNew;
