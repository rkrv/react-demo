import React from 'react';
import { BarLoader } from 'react-spinners';

export default function LoadingScreen(props) {
    return (
        <BarLoader color="black" height={ 2 } loading={ props.visible } />
    );
}
