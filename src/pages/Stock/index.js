import './style.scss';
import React, { Component } from 'react';
import NavBar from 'components/NavBar/index';
import Header from '../../components/Header/index';
import classNames from 'classnames';
import Buy from './modules/Buy';
import Sell from './modules/Sell';
import Settle from './modules/Settle';

const tabs = [
  {
    name: '点买区',
    key: 'buy'
  },
  {
    name: '点卖区',
    key: 'sell'
  },
  {
    name: '结算区',
    key: 'settle'
  }
];

class Stock extends Component {
  state = {
    currentTabKey: 'buy'
  };

  renderBody(currentTabKey) {
    switch (currentTabKey) {
      case 'buy':
        return <Buy />;
      case 'sell':
        return <Sell />;
      case 'settle':
        return <Settle />;
    }
  }

  render() {
    const { currentTabKey } = this.state;

    return (
      <div id="Stock">
        <Header />
        <NavBar />
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
                      this.setState({
                        currentTabKey: tab.key
                      });
                    }}
                  >
                    <span>0{idx + 1}</span>
                    <span className="delimiter">|</span>{tab.name}
                  </li>
                );
              })}
            </ul>
          </div>
          {this.renderBody(currentTabKey)}
        </div>
      </div>
    );
  }
}

export default Stock;
