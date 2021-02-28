//SurveyForm shows a form for a user to add input
import React from 'react';
import { Form, Field } from 'react-final-form'
import SurveyField from './SurveyField';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    // window.alert(JSON.stringify(values, 0, 2))
    console.log(JSON.stringify(values, 0, 2));
}

const renderFields = (title) => {
    return (
        <div>
            <Field type="text" name="title" component={SurveyField}/>
        </div>
    )
}

const SurveyForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <div>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                <div>
                    <label>Survey Title</label>
                    {renderFields()}
                </div>
                <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                    >
                        Reset
                    </button>
                </div>
                </form>
            )}
            />
        </div>
    )
}

export default SurveyForm;
