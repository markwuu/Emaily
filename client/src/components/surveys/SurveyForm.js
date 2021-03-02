//SurveyForm shows a form for a user to add input
import React from 'react';
import { Form, Field } from 'react-final-form'
import SurveyField from './SurveyField';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    console.log(JSON.stringify(values, 0, 2));
}

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Survey Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' },
]

const renderFields = (label) => {
    return (
        <div>
            {FIELDS.map(({label, name}) => {
                return (
                    <Field component={SurveyField} type="text" label={label} name={name} key={name}/>
                );
            })}
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
                    <button className="teal btn-flat right white-text" type="submit" disabled={submitting || pristine}>
                        Next
                        <i className="material-icons right">done</i>
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
