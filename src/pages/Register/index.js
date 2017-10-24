import './style.scss';
import React from 'react';
import NavBar from '../../components/NavBar/index';
import Header from "../../components/Header/index";

const Register = () => {
  return (
    <div className="g-page" id="Register">
      <Header/>
      <NavBar />
      <div className="main">
        <div className="content">
          <div className="register-box">
            <div className="title">注册</div>
            <div className="form">
              <div className="item">
                <input type="number" maxLength={11} placeholder="请输入手机号"/>
              </div>
              <div className="item">
                <input type="password" placeholder="请输入密码，长度不小于6位"/>
              </div>
              <div className="item">
                <input type="password" placeholder="请再次输入密码"/>
              </div>
              <div className="agree">
                <input type="checkbox"/>
                <span>我已阅兵并同意</span><span>《系统服务协议》</span>
              </div>
              <button className="btn-next">下一步</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
