/**
 * @fileOverView: 银行卡管理页面
 * @author: xuejian.xu
 * @date: 2017/11/18.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from './actions'
import AddCard from './Add'
import BankMain from './BankMain/BankMain'

@connect(
    state => {
        const { Center: { Bank }, App } = state

        return Object.assign({}, Bank, App)
    },
    dispatch => bindActionCreators(actions, dispatch)
)
export default class BankCard extends Component {
    render() {
        return (
            <div>
                <Route path="/center/bankcard/add" render={() => <AddCard {...this.props} />} />
                <Route exact path="/center/bankcard" render={() => <BankMain {...this.props} />} />
            </div>
        )
    }
}
