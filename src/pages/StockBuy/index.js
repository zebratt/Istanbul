/**
 * @fileOverView: A股点买
 * @author: xuejian.xu
 * @date: 2017/10/21.
 */

import './style.scss';
import React, { Component } from 'react';
import NavBar from 'components/NavBar/index';
import Header from '../../components/Header/index';

class StockBuy extends Component {
  render() {
    return (
      <div id="StockBuy">
        <Header />
        <NavBar />
        <div className="main">
          <div className="nav">
            <ul>
              <li>
                01<span className="delimiter">|</span>点买区
              </li>
              <li>
                02<span className="delimiter">|</span>点卖区
              </li>
              <li>
                03<span className="delimiter">|</span>结算区
              </li>
            </ul>
          </div>
          <div className="body">
            <div className="panel-left">
              <div className="header">
                <div className="stock-name">
                  <span className="name">东风汽车</span>
                </div>
              </div>
              <div className="prices">
                <div className="main-price">
                  <span>6.471</span>
                </div>
                <div className="trade-info">
                  <ul>
                    <li>
                      <span>卖⑤</span>
                      <span className="trade-price">6.58</span>
                      <span>8000</span>
                    </li>
                    <li>
                      <span>卖⑤</span>
                      <span className="trade-price">6.58</span>
                      <span>8000</span>
                    </li>
                    <li>
                      <span>卖⑤</span>
                      <span className="trade-price">6.58</span>
                      <span>8000</span>
                    </li>
                    <li>
                      <span>卖⑤</span>
                      <span className="trade-price">6.58</span>
                      <span>8000</span>
                    </li>
                    <li>
                      <span>卖⑤</span>
                      <span className="trade-price">6.58</span>
                      <span>8000</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>买⑤</span>
                      <span className="trade-price">6.58</span>
                      <span>8000</span>
                    </li>
                    <li>
                      <span>买⑤</span>
                      <span className="trade-price">6.58</span>
                      <span>8000</span>
                    </li>
                    <li>
                      <span>买⑤</span>
                      <span className="trade-price">6.58</span>
                      <span>8000</span>
                    </li>
                    <li>
                      <span>买⑤</span>
                      <span className="trade-price">6.58</span>
                      <span>8000</span>
                    </li>
                    <li>
                      <span>买⑤</span>
                      <span className="trade-price">6.58</span>
                      <span>8000</span>
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
                <li>1万</li>
                <li>2万</li>
                <li>3万</li>
                <li>5万</li>
                <li>10万</li>
                <li>20万</li>
                <li>30万</li>
                <li>50万</li>
              </ul>
              <div className="efficiency">资金使用率 可买入-股，资金利用率-%</div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>持仓时间</span>
                </div>
                <div className="hold-time-right">
                  <div className="item">T+1|D</div>
                </div>
              </div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>触发止盈</span>
                </div>
                <div className="hold-time-right">
                  <div className="item">5000</div>
                </div>
              </div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>触发止损</span>
                </div>
              </div>
              <ul className="amounts">
                <li>-1000</li>
                <li>-1300</li>
                <li>-1700</li>
              </ul>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>交易综合费</span>
                </div>
                <div className="hold-time-right">
                  <strong>45</strong>元（包括前两日）
                </div>
              </div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>履约保证金</span>
                </div>
                <div className="hold-time-right">
                  <strong>1250</strong>元
                </div>
              </div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>递延条件</span>
                </div>
                <div className="hold-time-right">
                  浮动盈亏大于<em>-650</em>
                </div>
              </div>
              <div className="hold-time">
                <div className="hold-time-left">
                  <span>递延费</span>
                </div>
                <div className="hold-time-right">
                  <em>18</em>元/天
                </div>
              </div>
              <div>
                <input type="checkbox"/>
                <span>我已阅读并签署以下协议</span>
              </div>
              <button className="btn-buy">点买</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StockBuy;