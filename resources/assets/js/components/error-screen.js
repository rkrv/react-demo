import React from 'react';

export default function ErrorScreen(props) {
    if ( ! props.visible) {
        return null;
    }

    return (
        <section>
            :(
            Expect the unexpected. An error occured. Please reload the page to try again.
        </section>
    );
}
