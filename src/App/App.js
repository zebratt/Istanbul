import 'styles/main.scss'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Pages
import Home from 'pages/Home'
import Stock from 'pages/Stock'
import Register from 'pages/Register'
import Center from 'pages/Center'
import ForgetPassword from 'pages/ForgetPassword'
import Help from 'pages/Help/Help'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div id="App">
                    <Route exact path="/" component={Home} />
                    <Route path="/stock/:tab" component={Stock} />
                    <Route exact path="/register" component={Register} />
                    <Route path="/center/:tab" component={Center} />
                    <Route exact path="/forget" component={ForgetPassword} />
                    <Route exact path="/help" component={Help} />
                </div>
            </Router>
        )
    }
}
