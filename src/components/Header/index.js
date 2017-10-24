/**
 * @fileOverView: header
 * @author: xuejian.xu
 * @date: 2017/10/21.
 */

import './style.scss';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <div id="Header">
        <div className="content">
          <span>服务热线：123123123</span>
          <div className="right">
            <Link to='/'>登陆</Link>
            <span>|</span>
            <Link to='/register'>注册</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
