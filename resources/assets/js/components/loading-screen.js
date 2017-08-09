import React from 'react';
import Delayed from 'react-delayed';
import { BarLoader } from 'react-spinners';

export default function LoadingScreen(props) {
    const className = 'screen loading-screen ' + (props.visible ? 'visible' : 'hidden');

    return (
        <Delayed mounted={ props.visible } unmountAfter={ 2000 }>
            <section className={ className }>
                <div className="spinner">
                    <BarLoader color="black" height={ 2 } loading={ true } />
                </div>
            </section>
        </Delayed>
    );
}
