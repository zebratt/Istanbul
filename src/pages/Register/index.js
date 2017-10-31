import './style.scss';
import React, { Component } from 'react';
import NavBar from '../../components/NavBar/index';
import Header from '../../components/Header/index';
import { URL_REGISTER } from '../../utils/urls';
import { notification } from 'antd';

class Register extends Component {
  state = {
    phone: '',
    password: '',
    passwordConfirm: ''
  };

  onNextHandler() {
    const { phone, password, passwordConfirm } = this.state;

    if (!/\d{11}/.test(phone)) {
      return notification.warning({
        message: '手机号格式有误，请重新输入！'
      });
    }

    if (!password) {
      return notification.warning({
        message: '密码不能为空！'
      });
    }

    if (password !== passwordConfirm) {
      return notification.warning({
        message: '两次密码输入不一致，请重新输入！'
      });
    }

    axios
      .post(URL_REGISTER, {
        customerPhone: phone,
        password: password,
        customerName: phone
      })
      .then(res => {
        if (res.code == 1) {
          notification.success({
            message: '注册成功！',
            duration: 1,
            onClose: () => {
              location.replace('#/');
            }
          });
        } else {
          notification.error({
            message: res.msg
          });
        }
      });
  }

  onChangeHandler(eve) {
    switch (eve.target.className) {
      case 'phone':
        this.setState({
          phone: eve.target.value
        });

        break;
      case 'password':
        this.setState({
          password: eve.target.value
        });

        break;
      case 'password-confirm':
        this.setState({
          passwordConfirm: eve.target.value
        });

        break;
    }
  }

  render() {
    const { phone, password, passwordConfirm } = this.state;

    return (
      <div className="g-page" id="Register">
        <Header />
        <NavBar />
        <div className="main">
          <div className="content">
            <div className="register-box">
              <div className="title">注册</div>
              <div className="form">
                <div className="item">
                  <input
                    className="phone"
                    type="text"
                    value={phone}
                    maxLength={11}
                    placeholder="请输入手机号"
                    onChange={::this.onChangeHandler}
                  />
                </div>
                <div className="item">
                  <input
                    className="password"
                    type="password"
                    maxLength={16}
                    placeholder="请输入密码，长度不小于6位"
                    onChange={::this.onChangeHandler}
                  />
                </div>
                <div className="item">
                  <input
                    className="password-confirm"
                    type="password"
                    maxLength={16}
                    placeholder="请再次输入密码"
                    onChange={::this.onChangeHandler}
                  />
                </div>
                <div className="agree">
                  <input type="checkbox" />
                  <span>我已阅兵并同意</span><span>《系统服务协议》</span>
                </div>
                <button className="btn-next" onClick={::this.onNextHandler}>下一步</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
