/**
 * @fileOverView: A股点买
 * @author: xuejian.xu
 * @date: 2017/10/21.
 */

import './style.scss';
import React, { Component } from 'react';
import NavBar from 'components/NavBar/index';
import Header from '../../components/Header/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './action';
import classNames from 'classnames';
import { notification } from 'antd';

// 买入金额
const buyPrices = [1, 2, 3, 5, 10, 20, 30, 50];

// 出发止损金额
const stopLossRates = [0.1, 0.1333, 0.17];

class StockBuy extends Component {
  state = {
    chooseStockVisible: false
  };

  componentDidMount() {
    const { getStockData } = this.props;

    getStockData('sh600036');
  }

  onPurchaseClick() {
    const { protocolStatus } = this.props;

    if (!protocolStatus) {
      return notification.warning({
        message: '请先接受条款'
      });
    }
  }

  render() {
    const {
      stockData: { data },
      buyPricesIndex,
      updateBuyPricesIndex,
      stopLossRatesIndex,
      updateStopLossRatesIndex,
      protocolStatus,
      updateProtocolStatus
    } = this.props;

    const { chooseStockVisible } = this.state;

    if (!data) {
      return null;
    }

    // 履约保证金
    // 当选择第一个或第二个止损条件时   K = L * 1.25  (K取天花板数)
    // 当选择第三个时 K= F * 0.2
    let performingPrice = 0;

    if (stopLossRatesIndex < 2) {
      performingPrice = Math.ceil(stopLossRates[stopLossRatesIndex] * 12500);
    } else {
      performingPrice = buyPrices[buyPricesIndex] * 2000;
    }

    // 递延条件
    // 当选择第一个止损条件时， 递延条件 =   - 保证金 * 0.52
    // 当选择第二个止损条件时， 递延条件 =   - 保证金 * 0.64
    // 当选择第三个止损条件时， 递延条件 =   - 保证金 * 0.7
    let deferCondition = 0;

    switch (stopLossRatesIndex) {
      case 0:
        deferCondition = (performingPrice * 0.52).toFixed(0);

        break;
      case 1:
        deferCondition = (performingPrice * 0.64).toFixed(0);

        break;
      case 2:
        deferCondition = (performingPrice * 0.7).toFixed(0);

        break;
    }

    return (
      <div id="StockBuy">
        <Header />
        <NavBar />
        <div className="main">
          <div className="nav">
            <ul>
              <li>
                <span>01</span>
                <span className="delimiter">|</span>点买区
              </li>
              <li>
                <span>02</span>
                <span className="delimiter">|</span>点卖区
              </li>
              <li>
                <span>03</span>
                <span className="delimiter">|</span>结算区
              </li>
            </ul>
          </div>
          <div className="body">
            <div className="panel-left">
              <div className="header">
                <div className="stock-name">
                  <span className="name">
                    {data.name}({data.gid})
                  </span>
                  <span
                    className="choose"
                    onClick={() => {
                      this.setState({
                        chooseStockVisible: !chooseStockVisible
                      });
                    }}
                  >
                    选择股票
                  </span>
                  {chooseStockVisible &&
                    <div className="choose-stock">
                      <div className="choose-stock-left">
                        <input type="text" />
                      </div>
                      <div
                        className="choose-stock-right"
                        onClick={() => {
                          this.setState({
                            chooseStockVisible: false
                          });
                        }}
                      >
                        取消
                      </div>
                    </div>}
                </div>
              </div>
              <div className="prices">
                <div className="main-price">
                  <span>
                    {data.nowPri}
                  </span>
                </div>
                <div className="trade-info">
                  <ul>
                    <li>
                      <span>卖⑤</span>
                      <span className="trade-price">
                        {data.sellFivePri}
                      </span>
                      <span>
                        {data.sellFive}
                      </span>
                    </li>
                    <li>
                      <span>卖④</span>
                      <span className="trade-price">
                        {data.sellFourPri}
                      </span>
                      <span>
                        {data.sellFour}
                      </span>
                    </li>
                    <li>
                      <span>卖③</span>
                      <span className="trade-price">
                        {data.sellThreePri}
                      </span>
                      <span>
                        {data.sellThree}
                      </span>
                    </li>
                    <li>
                      <span>卖②</span>
                      <span className="trade-price">
                        {data.sellTwoPri}
                      </span>
                      <span>
                        {data.sellTwo}
                      </span>
                    </li>
                    <li>
                      <span>卖①</span>
                      <span className="trade-price">
                        {data.sellOnePri}
                      </span>
                      <span>
                        {data.sellOne}
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>买①</span>
                      <span className="trade-price">
                        {data.buyOnePri}
                      </span>
                      <span>
                        {data.buyOne}
                      </span>
                    </li>
                    <li>
                      <span>买②</span>
                      <span className="trade-price">
                        {data.buyTwoPri}
                      </span>
                      <span>
                        {data.buyTwo}
                      </span>
                    </li>
                    <li>
                      <span>买③</span>
                      <span className="trade-price">
                        {data.buyThreePri}
                      </span>
                      <span>
                        {data.buyThree}
                      </span>
                    </li>
                    <li>
                      <span>买④</span>
                      <span className="trade-price">
                        {data.buyFourPri}
                      </span>
                      <span>
                        {data.buyFour}
                      </span>
                    </li>
                    <li>
                      <span>买⑤</span>
                      <span className="trade-price">
                        {data.buyFivePri}
                      </span>
                      <span>
                        {data.buyFive}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="switch">
                <div className="switch-left active">分时</div>
                <div className="switch-right">k线</div>
              </div>
            </div>
            <div className="panel-right">
              <div>
                <span>买入金额</span>
              </div>
              <ul className="buy-prices">
                {buyPrices.map((price, idx) => {
                  const classes = classNames({
                    active: idx === buyPricesIndex
                  });

                  return (
                    <li
                      key={price}
                      className={classes}
                      onClick={() => {
                        updateBuyPricesIndex(idx);
                      }}
                    >
                      {price}万
                    </li>
                  );
                })}
              </ul>
              <div className="efficiency">资金使用率 可买入-股，资金利用率-%</div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>持仓时间</span>
                </div>
                <div className="hold-time-right">
                  <div className="item active">T+1|D</div>
                </div>
              </div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>触发止盈</span>
                </div>
                <div className="hold-time-right">
                  <div className="item active">
                    {buyPrices[buyPricesIndex] * 5000}
                  </div>
                </div>
              </div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>触发止损</span>
                </div>
              </div>
              <ul className="amounts">
                {stopLossRates.map((rate, idx) => {
                  const classes = classNames({
                    active: idx === stopLossRatesIndex
                  });

                  return (
                    <li
                      key={rate}
                      className={classes}
                      onClick={() => {
                        updateStopLossRatesIndex(idx);
                      }}
                    >
                      -{(rate * 10000 * buyPrices[buyPricesIndex]).toFixed(0)}
                    </li>
                  );
                })}
              </ul>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>交易综合费</span>
                </div>
                <div className="hold-time-right">
                  <strong>{buyPrices[buyPricesIndex] * 45}</strong>元（包括前两日）
                </div>
              </div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>履约保证金</span>
                </div>
                <div className="hold-time-right">
                  <strong>{performingPrice}</strong>元
                </div>
              </div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>递延条件</span>
                </div>
                <div className="hold-time-right">
                  浮动盈亏大于<em>-{deferCondition}</em>
                </div>
              </div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>递延费</span>
                </div>
                <div className="hold-time-right">
                  <em>{buyPrices[buyPricesIndex] * 18}</em>元/天
                </div>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={protocolStatus}
                  onChange={() => {
                    updateProtocolStatus(!protocolStatus);
                  }}
                />
                <span>我已阅读并签署以下协议</span>
              </div>
              <div className="protocol-row">
                <a href="http://www.dyb98.com/Policy/protocol_1" target="_blank">
                  《点赢宝点买人参与沪深A股交易合作涉及费用及资费标准》
                </a>
                <a href="http://www.dyb98.com/Policy/protocol_2" target="_blank">
                  《点赢宝投资人与点买人参与沪深A股交易合作协议》
                </a>
                <a href="http://www.dyb98.com/Policy/protocol_3" target="_blank">
                  《点赢宝服务协议》
                </a>
              </div>
              <button className="btn-buy" onClick={::this.onPurchaseClick}>
                点买
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { StockBuy } = state;

  return StockBuy;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StockBuy);
