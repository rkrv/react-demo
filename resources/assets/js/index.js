import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDom.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
        <App />
    </Provider>,
    document.getElementById('root')
);
