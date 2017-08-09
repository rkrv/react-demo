import React from 'react';

export default function ErrorScreen(props) {
    if ( ! props.visible) {
        return null;
    }

    return (
        <section className="screen error-screen">
            <p className="sad-face">:(</p>
            <p>
                Expect the unexpected. An error occured. <br/>
                Please reload the page and try again.
            </p>
        </section>
    );
}
