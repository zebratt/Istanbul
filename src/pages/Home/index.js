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
    </div>
  );
};

export default Home;
