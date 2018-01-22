/**
 * @fileOverView:  我的首页
 * @author: xuejian.xu
 * @date: 2017/11/18.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './action'
import bankActions from '../BankCard/actions'
import { Route } from 'react-router-dom'
import Charge from './Charge'
import Withdraw from './Withdraw'
import Main from './Main/Main'

@connect(
    state => {
        const { Center: { MyHome, Bank }, App } = state

        return Object.assign({}, MyHome, Bank, App)
    },
    dispatch => bindActionCreators(Object.assign({}, actions, bankActions), dispatch)
)
export default class MyHome extends Component {
    render() {
        return (
            <div>
                <Route path="/center/home/charge/:tab" render={() => <Charge {...this.props} />} />
                <Route path="/center/home/withdraw" render={() => <Withdraw {...this.props} />} />
                <Route exact path="/center/home" render={() => <Main {...this.props} />} />
            </div>
        )
    }
}
