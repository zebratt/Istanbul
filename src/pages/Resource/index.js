import './style.scss';
import React, { Component } from 'react';
import Header from 'components/Header';
import TabStrip from 'components/TabStrip';
import { connect } from 'react-redux';
import classNames from 'classnames';
import actions from './action';
import { bindActionCreators } from 'redux';
import ListView from 'components/ListView';

class Resource extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    itemClickHandler(type, key) {
        const { updateFilter } = this.props;

        updateFilter(type, key);
    }

    render() {
        const { filters } = this.props;

        return (
            <div className="g-page" id="Resource">
                <Header title={'资源'} />
                <div className="filters">
                    {filters.map(row => {
                        return (
                            <div key={row.type} className="row">
                                <div className="label">{row.label}：</div>
                                <div className="types">
                                    {row.items.map(item => {
                                        const classes = classNames({
                                            type: true,
                                            active: row.actived === item.key
                                        });

                                        return (
                                            <div
                                                key={item.key}
                                                className={classes}
                                                onClick={() => {
                                                    this.itemClickHandler(
                                                        row.type,
                                                        item.key
                                                    );
                                                }}
                                            >
                                                {item.desc}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="list">
                    <ListView height={innerHeight - 90 - 100}>
                        <div className="row">
                            <div className="left">
                                <img src="http://odl96infd.bkt.clouddn.com/machine2machine.png" />
                            </div>
                            <div className="middle">
                                <div className="content">
                                    <div className="title">机器人操作</div>
                                    <div className="desc">
                                        机机器人操作巴拉巴拉巴拉巴巴拉巴拉巴拉机器人
                                    </div>
                                    <div className="favorite">
                                        <span className="icon i-heart" />
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <span className="icon i-back" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <img src="http://odl96infd.bkt.clouddn.com/machine2machine.png" />
                            </div>
                            <div className="middle">
                                <div className="content">
                                    <div className="title">机器人操作</div>
                                    <div className="desc">
                                        机器人操作巴拉巴拉巴拉巴巴拉巴拉巴拉
                                        机器人操作巴拉巴拉巴拉巴巴拉巴拉巴拉
                                        机器人操作巴拉巴拉巴拉巴巴拉巴拉巴拉
                                    </div>
                                    <div className="favorite">
                                        <span className="icon i-heart" />
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <span className="icon i-back" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="left">
                                <img src="http://odl96infd.bkt.clouddn.com/machine2machine.png" />
                            </div>
                            <div className="middle">
                                <div className="content">
                                    <div className="title">机器人操作</div>
                                    <div className="desc">
                                        机器人操作巴拉巴拉巴拉巴巴拉巴拉巴拉
                                    </div>
                                    <div className="favorite">
                                        <span className="icon i-heart" />
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <span className="icon i-back" />
                            </div>
                        </div>
                    </ListView>
                </div>
                <TabStrip />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { resource } = state;

    return { filters: resource.filters };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Resource);
