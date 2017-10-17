import './style.scss';
import React from 'react';
import Header from 'components/Header';
import BackTop from 'components/BackTop';

const Skeleton = ()=>{
    return (
        <div id="Skeleton" className="g-page">
            <Header iconBack title={'课程'} />
            <div className="nav">
                <div className="tab active">学习任务书</div>
                <div className="tab">任务准备</div>
                <div className="tab">计划与决策</div>
                <div className="tab">实施与监控</div>
                <div className="tab">总结与评价</div>
            </div>
            <div className="section">
                <div className="title">学习任务书</div>
                <div className="body">
                    <span>blablabla</span>
                </div>
            </div>
            <div className="section">
                <div className="title">任务准备</div>
                <div className="body">
                    <span>blablabla</span>
                </div>
            </div>
            <div className="section">
                <div className="title">计划与决策</div>
                <div className="body">
                    <span>blablabla</span>
                </div>
            </div>
            <div className="section">
                <div className="title">实施与监控</div>
                <div className="body">
                    <span>blablabla</span>
                </div>
            </div>
            <div className="section">
                <div className="title">总结与评价</div>
                <div className="body">
                    <span>blablabla</span>
                </div>
            </div>
            <BackTop />
        </div>
    )
}

export default Skeleton;
