import './style.scss';
import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import NavBar from 'components/NavBar';
import Header from 'components/Header/index';

const Home = () => {
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
      <div className="login">
        <div className="content">
          <div className="title">登陆点赢宝</div>
          <div className="label">账号:</div>
          <input className="input" type="text" placeholder="请输入用户名" />
          <div className="label">密码:</div>
          <input className="input" type="password" placeholder="请输入密码" />
          <div className="buttons">
            <div className="left">
              <button className="btn">登录</button>
            </div>
            <div className="right">
              <button className="btn">注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
