/**
 * @fileOverView: header
 * @author: xuejian.xu
 * @date: 2017/10/21.
 */

import './style.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'pages/Home/action';
import Cookies from 'js-cookie';
import { notification } from 'antd';

class Header extends Component {
  onQuitHandler() {
    Cookies.remove('TOKEN');

    this.props.updateLogin(false, '', '');

    notification.success({
      message: '退出成功！'
    });

    location.replace('#/');
  }

  render() {
    const { loginStatus } = this.props;
    const loginBtnContent = loginStatus
      ? <a onClick={::this.onQuitHandler} href="javascript:void(0)">退出</a>
      : <Link to="/">登陆</Link>;

    return (
      <div id="Header">
        <div className="content">
          <span>服务热线：123123123</span>
          <div className="right">
            {loginBtnContent}
            <span>|</span>
            <Link to="/register">注册</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { Home: { loginStatus } } = state;

  return { loginStatus };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
