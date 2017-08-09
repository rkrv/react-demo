import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchResult } from '../actions';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { visible, handleSubmit, pristine, invalid, submitting } = this.props;

        if ( ! visible) {
            return null;
        }

        return (
            <section className="screen search-screen">
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <label htmlFor="name">Enter a person's name to continue</label>

                    <div>
                        <div className="left">
                            <Field name="name" id="name" component={ this.renderNameField } />
                        </div>

                        <div className="right">
                            <button type="submit" disabled={ pristine || invalid || submitting }>
                                <i className="fa fa-search"></i> Search
                            </button>
                        </div>

                        <div className="clear"></div>
                    </div>

                </form>
            </section>
        );
    }

    renderNameField(field) {
        const { touched, error } = field.meta;
        const className = touched && error ? 'has-error' : '';

        return (
            <input type="text" placeholder="Thomas" className={ className } { ...field.input } />
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
    connect(null, { fetchResult })(SearchScreen)
);
