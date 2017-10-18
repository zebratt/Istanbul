import './style.scss';
import React from 'react';

import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className="g-page" id="Home">
      <div className="header">
        <span>服务热线：123123123</span>
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
        <img className="banner" src="http://www.dyb98.com/i/dyb/banner1.jpg" />
        <img className="banner" src="http://www.dyb98.com/i/dyb/banner2.jpg" />
        <img className="banner" src="http://www.dyb98.com/i/dyb/banner3.png" />
      </Carousel>
    </div>
  );
};

export default Home;
