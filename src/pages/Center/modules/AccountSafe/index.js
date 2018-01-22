/**
 * @fileOverView: 账户安全
 * @author: xuejian.xu
 * @date: 2017/11/18.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './action'
import { Route } from 'react-router-dom'
import Verify from './Verify'
import SafeMain from './SafeMain/SafeMain'

@connect(
    state => {
        const { App, Center: { Safe } } = state

        return Object.assign({}, App, Safe)
    },
    dispatch => bindActionCreators(actions, dispatch)
)
export default class AccountSafe extends Component {
    render() {
        return (
            <div>
                <Route path="/center/safe/verify" render={() => <Verify {...this.props} />} />
                <Route exact path="/center/safe" render={() => <SafeMain {...this.props} />} />
            </div>
        )
    }
}
