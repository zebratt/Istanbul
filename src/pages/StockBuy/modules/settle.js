/**
 * Created by xuejian.xu on 2017/11/3.
 */

import './settle.scss';
import React, {Component} from 'react';

class Settle extends Component{
  componentDidMount(){
    const {customerId, token, getClinchRecord } = this.props;

    if(!customerId){
      return ;
    }

    getClinchRecord(customerId, token);
  }

  render(){
    const {customerId, token, historyData} = this.props;
    const {content} = historyData;

    if(!customerId){
      return (
        <div className="body">
          <div>请先登录!</div>
        </div>
      )
    }

    if(!content){
      return null;
    }

    return (
      <div className="body">
        <table className="settle-table">
          <thead>
            <tr className="title">
              <td>股票代码</td>
              <td>股票名称</td>
              <td>交易方向</td>
              <td>成交时间</td>
              <td>成交价格</td>
              <td>成交数量</td>
              <td>成交总额</td>
              <td>交易费</td>
              <td>印花税</td>
              <td>过户费</td>
              <td>其他费用</td>
              <td>备注信息</td>
            </tr>
          </thead>
          <tbody>
          {content.map((item)=>{
            return (
              <tr key={item.clinchRecordId}>
                <td>{item.stockCode}</td>
                <td>{item.stockName}</td>
                <td>{item.tradeDirection}</td>
                <td>{item.clinchTime}</td>
                <td>{item.clinchPrice}</td>
                <td>{item.clinchNum}</td>
                <td>{item.totalValue}</td>
                <td>{item.transactionFee}</td>
                <td>{item.stampDuty}</td>
                <td>{item.transferFee}</td>
                <td>{item.otherCharges}</td>
                <td>{item.remark}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Settle;
