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

          </div>
        </div>
      </div>
    );
  }
}

export default StockBuy;
