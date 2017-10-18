import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

// Init Store
import store from './store';

// Pages
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';

// Global variables
import { init } from 'utils/global';

init();

const App = () => {
    return (
        <Router>
            <div id="App">
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </div>
        </Router>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
