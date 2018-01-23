import './style.scss';
import React, { Component } from 'react';
import NavBar from 'components/NavBar/index';
import Header from '../../components/Header/index';
import classNames from 'classnames';
import Buy from './Buy';
import Sell from './Sell';
import Settle from './Settle';
import { Route, Link } from 'react-router-dom';
import tabs from './tabs';
import Footer from 'components/Footer/Footer'
import Page from 'components/Page/Page'

export default class Stock extends Component {
    state = {
        currentTabKey: 'buy'
    };

    constructor(props){
      super(props);

      this.state = {
        currentTabKey: props.match.params.tab || 'buy'
      }
    }

    render() {
        const { currentTabKey } = this.state;
        const { history } = this.props;

        return (
            <Page id="Stock">
                <div className="main">
                    <div className="nav">
                        <ul>
                            {tabs.map((tab, idx) => {
                                const classes = classNames({
                                    'tab-active': tab.key === currentTabKey
                                });

                                return (
                                    <li
                                        key={tab.key}
                                        className={classes}
                                        onClick={() => {
                                            history.push(tab.key);

                                            this.setState({
                                              currentTabKey: tab.key
                                            })
                                        }}
                                    >
                                        <span>0{idx + 1}</span>
                                        <span className="delimiter">|</span>
                                        {tab.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <Route path="/stock/buy" component={Buy} />
                    <Route path="/stock/sell" component={Sell} />
                    <Route path="/stock/settle" component={Settle} />
                </div>
            </Page>
        );
    }
}
