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

  render() {
    const { currentTabKey } = this.state;

    let bodyCtn = null;

    switch (currentTabKey) {
      case 'buy':
        bodyCtn = <Buy {...this.props} />;
        break;
      case 'sell':
        bodyCtn = <Sell {...this.props} />;
        break;
      case 'settle':
        bodyCtn = <Settle {...this.props} />;
        break;
    }

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
                })

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
          {bodyCtn}
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
