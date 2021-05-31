import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//provider is to let access from anywhere in app component



import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
// thunk is redux Middleware to write action creator

import App from './App';
import reducers from './reducers';

const store = createStore(reducers,compose(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>,
 document.getElementById('root'));