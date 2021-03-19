import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

const SurveyList = (props) => {

    useEffect(() => {
        props.fetchSurveys();
    });

    return (
        <div>
            SurveyList
        </div>
    )
}

function mapStateToProps({surveys}) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
