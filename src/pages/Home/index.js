import './style.scss';

import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import NavBar from 'components/NavBar';
import Header from 'components/Header/index';
import { notification } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './action';
import { URL_LOGIN } from '../../utils/urls';
import Cookies from 'js-cookie';

class Home extends Component {
  state = {
    username: '',
    password: ''
  };

  componentDidMount() {
    const token = Cookies.get('TOKEN');

    if (token) {
      this.props.updateLogin(true, token);
    }
  }

  onLoginHandler() {
    const { username, password } = this.state;
    const { updateLogin } = this.props;

    if (!username || !password) {
      return notification.warning({
        message: '用户名或密码不能为空！'
      });
    }

    axios
      .post(URL_LOGIN, {
        customerName: username,
        password: password
      })
      .then(res => {
        if (res.code == 1) {
          const { data: { token } } = res;

          notification.success({
            message: '登陆成功！'
          });

          //用户登陆信息保存30天
          Cookies.set('TOKEN', token, { expires: 30 });

          updateLogin(true, token);
        } else {
          notification.error({
            message: res.msg
          });
        }
      });
  }

  onRegisterHandler() {
    location.replace('#register');
  }

  render() {
    const { username, password } = this.state;
    const { loginStatus } = this.props;

    return (
      <div className="g-page" id="Home">
        <Header />
        <NavBar />
        <Carousel
          emulateTouch
          showArrows={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
        >
          <div className="banner pic1" />
          <div className="banner pic2" />
          <div className="banner pic3" />
        </Carousel>
        {!loginStatus &&
          <div className="login">
            <div className="content">
              <div className="title">登陆点赢宝</div>
              <div className="label">账号:</div>
              <input
                className="input"
                type="text"
                placeholder="请输入用户名"
                value={username}
                onChange={eve => {
                  this.setState({ username: eve.target.value });
                }}
              />
              <div className="label">密码:</div>
              <input
                className="input"
                type="password"
                placeholder="请输入密码"
                value={password}
                onChange={eve => {
                  this.setState({ password: eve.target.value });
                }}
              />
              <div className="buttons">
                <div className="left">
                  <button className="btn" onClick={::this.onLoginHandler}>登录</button>
                </div>
                <div className="right">
                  <button className="btn" onClick={::this.onRegisterHandler}>注册</button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { Home } = state;

  return { loginStatus: Home.loginStatus };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
