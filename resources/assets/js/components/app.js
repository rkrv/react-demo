import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchScreen from './search-screen';
import LoadingScreen from './loading-screen';
import ErrorScreen from './error-screen';
import ResultScreen from './result-screen';

class App extends Component {
    render() {
        const { busy, error, hasResult } = this.props;

        return (
            <section className="screen-container">
                <SearchScreen visible={ ! hasResult && ! error } />
                <LoadingScreen visible={ busy } />
                <ResultScreen visible={ hasResult } />
                <ErrorScreen visible={ error } />
            </section>
        );
    };
}

function mapStateToProps({ app }) {
    return {
        busy: app.busy,
        error: app.error,
        hasResult: app.hasResult
    };
}

export default connect(mapStateToProps)(App);
