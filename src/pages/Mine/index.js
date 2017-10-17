import './style.scss';
import React from 'react';
import Header from 'components/Header/';
import TabStrip from 'components/TabStrip';

const Mine = () => {
    return (
        <div className="g-page" id="Mine">
            <Header title={'我的'} />
            <div className="user">
                <div className="left">
                    <span className="icon i-user" />
                </div>
                <div className="right">
                    <div className="name">杨行</div>
                    <div className="desc">智辰科技部 No.21</div>
                </div>
            </div>
            <div className="list">
                <div className="item">
                    <div className="left collection"><span className="icon i-collection" /></div>
                    <div className="middle">我的收藏</div>
                    <div className="right"><span className="icon i-back" /></div>
                </div>
                <div className="item">
                    <div className="left audit">
                        <span className="icon i-audit" />
                    </div>
                    <div className="middle">用户审核</div>
                    <div className="right">
                        <span className="icon i-back" />
                    </div>
                </div>
            </div>
            <div className="button">退出登录</div>
            <TabStrip />
        </div>
    );
};

export default Mine;
