import './style.scss';
import React from 'react';
import Header from 'components/Header';
import ListView from 'components/ListView';
import TabStrip from 'components/TabStrip';

const Course = () => {
    return (
        <section className="g-page" id="Course">
            <Header
                title={'课堂'}
                iconRight={{
                    name: 'i-magnifying',
                    handler: () => {
                        console.log('right click!');
                    }
                }}
            />
            <ListView height={innerHeight - 44 - 46}>
                <div className="row">
                    <div className="left">
                        <img src="http://odl96infd.bkt.clouddn.com/machine2machine.png" />
                    </div>
                    <div className="middle">
                        <div className="title">机器人操作</div>
                        <div className="desc">机器人操作巴拉巴拉巴拉巴巴拉巴拉巴拉</div>
                    </div>
                    <div className="right"><span className="icon i-back" /></div>
                </div>
                <div className="row">
                    <div className="left">
                        <img src="http://odl96infd.bkt.clouddn.com/machine2machine.png" />
                    </div>
                    <div className="middle">
                        <div className="title">机器人操作</div>
                        <div className="desc">机器人操作巴拉巴拉巴拉巴巴拉巴拉巴拉</div>
                    </div>
                    <div className="right"><span className="icon i-back" /></div>
                </div>
                <div className="row">
                    <div className="left">
                        <img src="http://odl96infd.bkt.clouddn.com/machine2machine.png" />
                    </div>
                    <div className="middle">
                        <div className="title">机器人操作</div>
                        <div className="desc">机器人操作巴拉巴拉巴拉巴巴拉巴拉巴拉</div>
                    </div>
                    <div className="right"><span className="icon i-back" /></div>
                </div>
                <div className="row">
                    <div className="left">
                        <img src="http://odl96infd.bkt.clouddn.com/machine2machine.png" />
                    </div>
                    <div className="middle">
                        <div className="title">机器人操作</div>
                        <div className="desc">机器人操作巴拉巴拉巴拉巴巴拉巴拉巴拉</div>
                    </div>
                    <div className="right"><span className="icon i-back" /></div>
                </div>
            </ListView>
            <TabStrip />
        </section>
    );
};

export default Course;
