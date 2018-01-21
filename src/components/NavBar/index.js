/**
 * Created by xuejian.xu on 2017/10/20.
 */

import './style.scss'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    isActive(match, location) {
        if (match) {
            return match.path === location.pathname
        }
    }

    render() {
        return (
            <div id="NavBar">
                <div className="content">
                    <img className="logo" src={require('images/logo.png')} />
                    <ul className="tabs">
                        <li>
                            <NavLink isActive={this.isActive} to="/">
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink isActive={this.isActive} to="/stock/buy">
                                <span>A股点买</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink isActive={this.isActive} to="/help">
                                <span>帮助中心</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink isActive={this.isActive} to="/personal/home">
                                <span>个人中心</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
