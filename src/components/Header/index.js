/**
 * @fileOverView: header
 * @author: xuejian.xu
 * @date: 2017/10/21.
 */

import './style.scss';
import React, {Component} from 'react';

class Header extends Component{
  render(){
    return (
      <div id="Header">
        <div className="content">
          <span>服务热线：123123123</span>
          <div className="right">
            <span>登陆</span>
            <span>|</span>
            <span>注册</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
