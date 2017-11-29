/**
 * @fileOverView: 银行卡管理页面
 * @author: xuejian.xu
 * @date: 2017/11/18.
 */

import './style.scss';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './action';

class BankCard extends Component{
  componentDidMount(){
    const {queryBankCard, customerId, token} = this.props;

    if(customerId){
      queryBankCard(customerId, token);
    }
  }

  render(){
    const {customerId, bankcards} = this.props;

    if(!customerId){
      return <div>请先登录！</div>
    }

    return (
      <div id="BankCard">
        <div className="header">
          <button className="btn-add">添加新的银行卡</button>
        </div>
        <div className="title">我的银行卡</div>
        <table className="table">
          <thead>
            <tr className="tl">
              <td>银行卡号</td>
              <td>开户银行</td>
              <td>开户省份</td>
              <td>开户城市</td>
              <td>开户支行</td>
              <td>审核状态</td>
            </tr>
          </thead>
          <tbody>
          {
            bankcards.map((card)=>{
              return (
                <tr>
                  <td>{card.bankCardId}</td>
                  <td>{card.bankName}</td>
                  <td>{card.bankprovince}</td>
                  <td>{card.bankCity}</td>
                  <td>{card.bankAdress}</td>
                  <td>{card.auditStatus}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { BankCard, Home } = state;

  return Object.assign({}, BankCard, Home);
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BankCard);
