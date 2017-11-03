/**
 * Created by xuejian.xu on 2017/11/3.
 */

import React, { Component } from 'react';
import classNames from 'classnames';
import { notification, Modal } from 'antd';
import { URL_PURCHASE } from '../../../utils/urls';

// 买入金额
const buyPrices = [1, 2, 3, 5, 10, 20, 30, 50];

// 出发止损金额
const stopLossRates = [0.1, 0.1333, 0.17];

class Buy extends Component {
  state = {
    chooseStockVisible: false,
    confirmModalVisible: false,
    stockQueryStr: ''
  };

  componentDidMount() {
    const { getStockData } = this.props;

    getStockData('sh600036');
  }

  onPurchaseClick(buyAmount) {
    const { protocolStatus, loginStatus } = this.props;

    if (!loginStatus) {
      return notification.warning({
        message: '请先登录'
      });
    }

    if (!protocolStatus) {
      return notification.warning({
        message: '请先接受条款'
      });
    }

    if (!buyAmount) {
      return notification.warning({
        message: '购买数量不可为0'
      });
    }

    this.setState({
      confirmModalVisible: true
    });
  }

  onStockItemClick(code) {
    const { getStockData } = this.props;

    this.setState(
      {
        chooseStockVisible: false
      },
      () => {
        getStockData(code);
      }
    );
  }

  /**
   * 确认购买
   * @param performingPrice 履约保证金
   * @param stopProfit 触发止盈
   * @param tradeCost 综合费
   * @param deferCost 每日递延费
   * @param deferCondition 递延条件
   */
  onPurchaseConfirm(performingPrice, stopProfit, tradeCost, deferCost, deferCondition) {
    const { stockData: { data }, customerId, token, stopLossRatesIndex, buyPricesIndex } = this.props;
    const { gid } = data;
    const lossAmount = -(stopLossRates[stopLossRatesIndex] * 10000 * buyPrices[buyPricesIndex]).toFixed(0);

    axios
      .post(URL_PURCHASE, {
        customerId: customerId,
        stockCode: gid,
        requiredMargin: performingPrice,
        profitAmount: stopProfit,
        lossAmount: lossAmount,
        totalCharges: tradeCost,
        dayilyDeferredCharge: deferCost,
        buyMoney: buyPricesIndex,
        deferredCondition: deferCondition,
        client_token: token
      })
      .then(res => {
        if (res.code == 1) {
          notification.success({
            message: '购买成功！'
          });

          this.setState({
            confirmModalVisible: false
          });
        } else {
          notification.error({
            message: res.msg
          });
        }
      });
  }

  render() {
    const {
      stockData: { data },
      buyPricesIndex,
      updateBuyPricesIndex,
      stopLossRatesIndex,
      updateStopLossRatesIndex,
      protocolStatus,
      updateProtocolStatus,
      getStockSuggest,
      suggests
    } = this.props;

    const { chooseStockVisible, confirmModalVisible, stockQueryStr } = this.state;

    if (!data) {
      return null;
    }

    // 触发止盈
    let stopProfit = buyPrices[buyPricesIndex] * 5000;

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
        deferCondition = -(performingPrice * 0.52).toFixed(0);

        break;
      case 1:
        deferCondition = -(performingPrice * 0.64).toFixed(0);

        break;
      case 2:
        deferCondition = -(performingPrice * 0.7).toFixed(0);

        break;
    }

    // 当前可买入数量，向下取整百
    let buyAmount = '-';
    buyAmount = parseInt(buyPrices[buyPricesIndex] * 10000 / data.nowPri / 100) * 100;

    // 资金使用率
    let moneyUsage = (data.nowPri * buyAmount / (buyPrices[buyPricesIndex] * 100)).toFixed(2);

    // 交易综合费
    let tradeCost = buyPrices[buyPricesIndex] * 45;

    // 每日递延费
    let deferCost = buyPrices[buyPricesIndex] * 18;

    return (
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
                    <input
                      type="text"
                      value={stockQueryStr}
                      onChange={eve => {
                        let { target: { value } } = eve;

                        this.setState({
                          stockQueryStr: value
                        });

                        getStockSuggest(value);
                      }}
                    />
                    {!!suggests.length &&
                      <table className="suggests">
                        <tr className="title">
                          <td width="50%">名称</td>
                          <td width="25%">代码</td>
                          <td width="25%">简拼</td>
                        </tr>
                        {suggests.map(suggest => {
                          const items = suggest.split(',');

                          return (
                            <tr
                              className="item"
                              onClick={() => {
                                this.onStockItemClick(items[3]);
                              }}
                            >
                              <td>
                                {items[4]}
                              </td>
                              <td>
                                {items[3]}
                              </td>
                              <td>
                                {items[5]}
                              </td>
                            </tr>
                          );
                        })}
                      </table>}
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
          <div className="efficiency">
            资金使用率 可买入{buyAmount}股，资金利用率{moneyUsage}%
          </div>
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
                {stopProfit}
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
              <strong>{tradeCost}</strong>元（包括前两日）
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
              浮动盈亏大于<em>{deferCondition}</em>
            </div>
          </div>
          <div className="hold-time">
            <div className="hold-time-left">
              <span>递延费</span>
            </div>
            <div className="hold-time-right">
              <em>{deferCost}</em>元/天
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
          <button
            className="btn-buy"
            onClick={() => {
              this.onPurchaseClick(buyAmount);
            }}
          >
            点买
          </button>
        </div>
        <Modal
          title={'点买确认'}
          visible={confirmModalVisible}
          onOk={() => {
            this.onPurchaseConfirm(performingPrice, stopProfit, tradeCost, deferCost, deferCondition);
          }}
          onCancel={() => {
            this.setState({
              confirmModalVisible: false
            });
          }}
        >
          <p>
            交易品种：{data.name}
            {data.gid}
          </p>
          <p>
            交易本金：{buyPrices[buyPricesIndex]}万元
          </p>
          <p>持仓时间：截止至下个交易日15：00：00</p>
          <p>
            交易数量：{buyAmount}
          </p>
          <p>市价：五档最优成交</p>
        </Modal>
      </div>
    );
  }
}

export default Buy;