import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetails: false
        };

        this.handleShowDetailsClick = this.handleShowDetailsClick.bind(this);
        this.handleHideDetailsClick = this.handleHideDetailsClick.bind(this);
    }

    render() {
        if ( ! this.props.visible) {
            return null;
        }

        return (
            <section>
                The result is { this.calculateResult() } <br/>

                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Service Call</th>
                                <th>Input</th>
                                <th>Output</th>
                            </tr>
                        </thead>

                        <tbody>
                            { this.renderDetails() }
                        </tbody>
                    </table>
                </section>

                <a href="#" onClick={ this.handleShowDetailsClick }>Show me the details</a>
                <a href="#" onClick={ this.handleHideDetailsClick }>Hide the details</a>
            </section>
        );
    }

    renderDetails() {
        const details = [],
            { result } = this.props;

        details.push({ call: '/person', input: result.name, output: [['val1', result.val1], ['val2', result.val2]] });
        details.push({ call: '/facility', input: result.val1, output: [['val3', result.val3], ['val4', result.val4]] });
        details.push({ call: '/exposure', input: result.val2, output: [['val5', result.val5]] });

        return details.map(detail => {
            return (
                <tr key={ detail.call }>
                    <td>{ detail.call }</td>
                    <td>{ detail.input }</td>
                    <td>
                        { detail.output.map(output => {
                            return (
                                <span key={ output[0] }>{ output[0] }: { output[1] }</span>
                            );
                        }) }
                    </td>
                </tr>
            );
        });
    }

    calculateResult() {
        const { result } = this.props;
        return result.val3 * result.val4;
    }

    handleShowDetailsClick(e) {
        e.preventDefault();
        this.setState({ showDetails: true });
    }

    handleHideDetailsClick(e) {
        e.preventDefault();
        this.setState({ showDetails: false });
    }
}

function mapStateToProps({ result }) {
    return {
        result
    };
}

export default connect(mapStateToProps)(ResultScreen);
