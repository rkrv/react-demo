import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { fetchResult } from '../actions';

class SearchPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleSubmit, pristine, invalid, submitting } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <label htmlFor="name">Enter a person's name to continue</label>

                <Field name="name" id="name" component={ this.renderNameField } />

                <button type="submit" disabled={ pristine || invalid || submitting }>
                    <i className="fa fa-search"></i> Search
                </button>

                <BarLoader color="black" height={ 2 } loading={ submitting } />
            </form>
        );
    }

    renderNameField(field) {
        const { touched, error } = field.meta;
        const className = touched && error ? 'has-error' : '';

        return (
            <input type="text" className={ className } { ...field.input } />
        );
    }

    onSubmit(values) {
        return this.props.fetchResult(values.name);
    }
}

function validate(values) {
    var errors = {};

    if ( ! /^[a-zA-Z]{1,10}$/.test(values.name)) {
        errors.name = "Person's name should be between 1 and 10 characters long in latin alphabet.";
    }

    return errors;
}

export default reduxForm({
    form: 'SearchForm',
    validate
})(
    connect(null, { fetchResult })(SearchPage)
);
