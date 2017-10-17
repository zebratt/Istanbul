import './style.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IScroll from '../../common/iscroll-infinite';
import _noop from 'lodash/noop';
import _isEmpty from 'lodash/isEmpty';

class ScrollView extends Component {
    container;
    content;

    static propTypes = {
        height: PropTypes.number, // Scroll View Height
        onMount: PropTypes.func,  // Mount callback
        events: PropTypes.object  // Events
    };

    static defaultProps = {
        onMount: _noop,
        events: {}
    };

    componentDidMount() {
        const {events, onMount} = this.props;

        const iscroll = this.iscroll = new IScroll(this.container, {
            momentum: true,
            click: false,
            scrollX: false,
            scrollY: true,
            mouseWheel: false,
            probeType: 2
        });

        if(!_isEmpty(events)){
            Object.keys(events).map((key)=>{
                iscroll.on(key, ()=>{
                    events[key](iscroll);
                });
            });
        }

        onMount(iscroll);
    }

    render() {
        const { height } = this.props;

        return (
            <div
                style={{ height: height }}
                className="c-scrollview"
                ref={dom => {this.container = dom}}
            >
                <div
                    ref={dom => {this.content = dom}}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ScrollView;
