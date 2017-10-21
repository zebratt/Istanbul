import './style.scss';
import React from 'react';

import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className="g-page" id="Home">
      <div className="header">
        <div className="content">
          <span>服务热线：123123123</span>
        </div>
      </div>
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
    </div>
  );
};

export default Home;
