import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetails: false
        };

        this.handleDetailsClick = this.handleDetailsClick.bind(this);
    }

    render() {
        if ( ! this.props.visible) {
            return null;
        }

        const className = 'screen result-screen ' + (this.state.showDetails ? 'details-visible' : 'details-hidden');

        return (
            <section className={ className }>
                <section className="result-line">
                    The result is <span className="result">{ this.calculateResult() }</span>
                </section>

                <section className="details">
                    <div className="wrapper">
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
                    </div>
                </section>

                <a href="#" className="btn show" onClick={ this.handleDetailsClick }>
                    <i className="fa fa-caret-down"></i>
                    Show details
                </a>

                <a href="#" className="btn hide" onClick={ this.handleDetailsClick }>
                    <i className="fa fa-caret-up"></i>
                    Hide details
                </a>
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

    handleDetailsClick(e) {
        e.preventDefault();
        this.setState({ showDetails: ! this.state.showDetails });
    }
}

function mapStateToProps({ result }) {
    return {
        result
    };
}

export default connect(mapStateToProps)(ResultScreen);
