import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

// Init Store
import store from './store';

// Pages
import Home from 'pages/Home';
import Resource from 'pages/Resource';
import Mine from 'pages/Mine';
import Course from 'pages/Course';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Audit from 'pages/Audit';
import CourseTemp from 'pages/Course/modules/CourseTemp';
import ResourceTemp from 'pages/Resource/modules/ResouceTemp';

// Global variables
import { init } from 'utils/global';

init();

const HomeRoute = ({ component: Component, ...rest }) => {
    const { login: { loginStatus } } = store.getState();

    return (
        <Route
            {...rest}
            render={props =>
                loginStatus
                    ? <Component {...props} />
                    : <Redirect
                          to={{
                              pathname: '/login'
                          }}
                      />}
        />
    );
};

const App = () => {
    return (
        <Router>
            <div id="App">
                <HomeRoute exact path="/" component={Home} />
                <Route exact path="/course" component={Course} />
                <Route exact path="/resource" component={Resource} />
                <Route exact path="/mine" component={Mine} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/audit" component={Audit} />
                <Route exact path="/course/demo" component={CourseTemp} />
                <Route exact path="/resource/demo" component={ResourceTemp} />
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
