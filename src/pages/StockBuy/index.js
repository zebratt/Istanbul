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
              <li>01<span className="delimiter">|</span>点买区</li>
              <li>02<span className="delimiter">|</span>点卖区</li>
              <li>03<span className="delimiter">|</span>结算区</li>
            </ul>
          </div>
          <div className="body">
            <div className="left">
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
                  <div className="sales">
                    <ul>
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                    </ul>
                  </div>
                  <div className="boughts">
                    <ul>
                      <li>2</li>
                      <li>2</li>
                      <li>2</li>
                      <li>2</li>
                      <li>2</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">right panel</div>
          </div>
        </div>
      </div>
    );
  }
}

export default StockBuy;
