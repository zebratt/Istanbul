/**
 * @fileOverView: A股点买
 * @author: xuejian.xu
 * @date: 2017/10/21.
 */

import React, { Component } from 'react';
import NavBar from 'components/NavBar/index';
import Header from '../../components/Header/index';

class StockBuy extends Component {
  render() {
    return (
      <div id="StockBuy">
        <Header />
        <NavBar />
        this is stock buy page
      </div>
    );
  }
}

export default StockBuy;
