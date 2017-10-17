import './style.scss';
import React from 'react';

import Header from 'components/Header';
import { Carousel } from 'react-responsive-carousel';
import TabStrip from 'components/TabStrip';

const Home = () => {
    return (
        <div className="g-page" id="Home">
            <Header title={'首页'} />
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
            <div className="recent">
                <div className="left">
                    <span className="icon i-countdown" />
                </div>
                <div className="middle">尚无学习记录</div>
                <div className="right">
                    <span className="icon i-back" />
                </div>
            </div>
            <div className="body">
                <div className="row">
                    <div className="left">
                        <div className="title green">已学课程</div>
                        <div className="content">
                            <div className="li">1. 工业机器人操作</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="title red">热门课程</div>
                        <div className="content">
                            <div className="li">1. 工业机器人编程</div>
                            <div className="li">2. 工业机器人学习</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">
                        <div className="title blue">最新资源</div>
                        <div className="content">
                            <div className="li">1. 工业机器人编程</div>
                            <div className="li">2. 工业机器人学习</div>
                            <div className="li">3. 工业机器人编程</div>
                            <div className="li">4. 工业机器人学习</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="title orange">热门资源</div>
                        <div className="content">
                            <div className="li">暂无数据</div>
                        </div>
                    </div>
                </div>
            </div>
            <TabStrip />
        </div>
    );
};

export default Home;
