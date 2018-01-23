/**
 * @fileOverView: 个人中心
 * @author: xuejian.xu
 * @date: 2017/11/18.
 */

import './style.scss'
import React, { Component } from 'react'
import classNames from 'classnames'
import MyHome from './MyHome'
import BankCard from './BankCard/index'
import AccountSafe from './AccountSafe/index'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import tabs from './tabs'
import Page from 'components/Page/Page'

@connect(state => {
    const { App } = state

    return Object.assign({}, App)
})
export default class Center extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTabKey: props.match.params.tab || 'home'
        }
    }

    onMenuTabClick(key) {
        this.props.history.push('/center/' + key)

        this.setState({
            currentTabKey: key
        })
    }

    render() {
        const { currentTabKey } = this.state
        const { userId, user } = this.props
        const name = user ? user.customerRealName || user.customerName : ''

        let tabContent = null

        if (!userId) {
            tabContent = (
                <div className="content">
                    <div>请先登录!</div>
                </div>
            )
        } else {
            tabContent = (
                <div className="content">
                    <Route path="/center/home" component={MyHome} />
                    <Route path="/center/bankcard" component={BankCard} />
                    <Route path="/center/safe" component={AccountSafe} />
                </div>
            )
        }

        return (
            <Page id="Center">
                <div className="main">
                    <div className="menu">
                        <div className="title">会员中心</div>
                        <div className="profile">欢迎您：{name}</div>
                        <div className="menus">
                            {tabs.map(tab => {
                                const classes = classNames({
                                    item: true,
                                    active: tab.key === currentTabKey
                                })

                                return (
                                    <div
                                        key={tab.key}
                                        className={classes}
                                        onClick={this.onMenuTabClick.bind(this, tab.key)}
                                    >
                                        {tab.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {tabContent}
                </div>
            </Page>
        )
    }
}
