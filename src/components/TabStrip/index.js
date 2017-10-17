import './style.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TabStrip extends Component{
    isActive(match, location) {
        if (match) {
            return match.path === location.pathname;
        }
    }

    render() {
        return (
            <div className="tab-strip">
                <div className="tab">
                    <NavLink isActive={this.isActive} to="/">
                        <span className="icon i-home" />
                        <span>首页</span>
                    </NavLink>
                </div>
                <div className="tab">
                    <NavLink isActive={this.isActive} to="/course">
                        <span className="icon i-course" />
                        <span>课堂</span>
                    </NavLink>
                </div>
                <div className="tab">
                    <NavLink isActive={this.isActive} to="/resource">
                        <span className="icon i-resource" />
                        <span>资源</span>
                    </NavLink>
                </div>
                <div className="tab">
                    <NavLink isActive={this.isActive} to="/mine">
                        <span className="icon i-mine" />
                        <span>我的</span>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default TabStrip;
