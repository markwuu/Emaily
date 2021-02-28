//SurveyForm shows a form for a user to add input
import React from 'react';
import { Form, Field } from 'react-final-form'
import SurveyField from './SurveyField';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    console.log(JSON.stringify(values, 0, 2));
}

const renderFields = (label) => {
    return (
        <div>
            <Field
                label="Survey Title"
                type="text"
                name="title"
                component={SurveyField}
            />
            <Field
                label="Survey Line"
                type="text"
                name="subject"
                component={SurveyField}
            />
            <Field
                label="Email Body"
                type="text"
                name="body"
                component={SurveyField}
            />
            <Field
                label="Recipient List"
                type="text"
                name="emails"
                component={SurveyField}
            />
        </div>
    )
}

const SurveyForm = () => {
    return (
        <div>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                <div>
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
