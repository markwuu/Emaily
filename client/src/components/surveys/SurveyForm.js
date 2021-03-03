//SurveyForm shows a form for a user to add input
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
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
                    <Field type="text" label={label} name={name} key={name}>
                        {({input, meta}) => {
                            console.log('meta1', meta);
                            return (
                                <div>
                                    <div>
                                        <label>{label}</label>
                                        <input {...input} type="text"/>
                                    </div>
                                    <div className="error">
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

const SurveyForm = () => {
    return (
        <div>
        <Form
            onSubmit={onSubmit}
            validate={values => {
                const errors = {};
                if(!values.title){
                    errors.title = 'Please add a title';
                }

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
