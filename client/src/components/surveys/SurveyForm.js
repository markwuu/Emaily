//SurveyForm shows a form for a user to add input
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

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
                    <Field type="text" label={label} name={name} key={name}>
                        {({input, meta}) => {
                            return (
                                <div>
                                    <div>
                                        <label>{label}</label>
                                        <input {...input} type="text" style={{ marginBottom: '5px'}}/>
                                    </div>
                                    <div className="red-text" style={{ marginBottom: '20px' }}>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                </div>
                            )
                        }}
                    </Field>
                );
            })}
        </div>
    )
}

const SurveyForm = (props) => {
    return (
        <div>
        <Form
            onSubmit={props.onSurveySubmit}
            validate={values => {
                const errors = {};

                FIELDS.forEach(({name}) => {
                    if(!values[name]) {
                        errors[name] = `You must provide a ${name}`;
                    }
                })

                errors.emails = validateEmails(values.emails || '');

                return errors;
            }}
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
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                </div>
                </form>
            )}
            />
        </div>
    )
}

export default SurveyForm;
