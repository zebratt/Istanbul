import './style.scss';
import React, { Component } from 'react';
import NavBar from 'components/NavBar/index';
import Header from '../../components/Header/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './action';
import classNames from 'classnames';
import Buy from './modules/buy';
import Sell from './modules/sell';
import Settle from './modules/settle';

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

class StockBuy extends Component {
  state = {
    currentTabKey: 'buy'
  };

  renderBody(currentTabKey) {
    switch (currentTabKey) {
      case 'buy':
        return <Buy {...this.props} />;
      case 'sell':
        return <Sell {...this.props} />;
      case 'settle':
        return <Settle {...this.props} />;
    }
  }

  render() {
    const { currentTabKey } = this.state;

    return (
      <div id="StockBuy">
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

const mapStateToProps = state => {
  const { StockBuy, Home } = state;

  return Object.assign({}, StockBuy, Home);
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StockBuy);
