import './style.scss';
import React, { Component } from 'react';
import ScrollView from '../ScrollView/index';
import classNames from 'classnames';

const PULLING_DOWN = '下拉刷新';
const RELEASE = '松手立即刷新';
const REFRESH_SUCCESS = '刷新成功';

const headTopMargin = 25; // 顶部提示margin距离

class ListView extends Component {
    constructor(){
        super();

        this.state = {
            pullingState : PULLING_DOWN
        }
    }

    onScroll(iscroll){
        if(this.state.pullingState === PULLING_DOWN){
            if(iscroll.y >= 38){
                this.setState({
                    pullingState: RELEASE
                });
            }
        }
    }

    onScrollEnd(iscroll){
        if(this.state.pullingState === RELEASE){
            this.setState({
                pullingState : PULLING_DOWN
            });
        }
    }

    render() {
        const { height } = this.props;
        const { pullingState } = this.state;
        const arrowClasses = classNames({
            'icon' : true,
            'i-arrow_down' : true,
            'arrow-reverse' : pullingState !== PULLING_DOWN
        });

        return (
            <div className="c-listview">
                <ScrollView
                    height={height + headTopMargin}
                    events={{
                        scroll : (iscroll)=>{this.onScroll.call(this, iscroll)},
                        scrollEnd : (iscroll)=>{this.onScrollEnd.call(this, iscroll)}
                    }}
                >
                    <p className="head-tip">
                        <span className={arrowClasses} />
                        {pullingState}
                    </p>
                    {this.props.children}
                    <p className="foot-tip">没有更多了</p>
                </ScrollView>
            </div>
        );
    }
}

export default ListView;
