import './style.scss';
import React from 'react';

import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return (
        <div className="g-page" id="Home">
            <Carousel
                emulateTouch
                showArrows={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={3000}
                showStatus={false}
            >
                <div>
                    <img src="http://odl96infd.bkt.clouddn.com/1.jpeg" />
                </div>
                <div>
                    <img src="http://odl96infd.bkt.clouddn.com/2.jpeg" />
                </div>
                <div>
                    <img src="http://odl96infd.bkt.clouddn.com/3.jpeg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Home;
