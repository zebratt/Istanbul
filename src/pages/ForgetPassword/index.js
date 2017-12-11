/**
 * Created by xuejian.xu on 2017/12/11.
 */

import './style.scss';
import React, { Component } from 'react';
import Header from "../../components/Header";
import NavBar from "../../components/NavBar/index";

const steps = [
  '手机获取验证码',
  '验证码校验',
  '修改新密码'
]

class ForgetPassword extends Component {
  state={
    step: 0
  }

  render() {
    return (
      <div id="ForgetPassword">
        <Header />
        <NavBar />
        <div className="main">
          <div className="title">忘记密码</div>
          <ul className="steps">
            {
              steps.map((item)=>{
                return <li key={item}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default ForgetPassword;
