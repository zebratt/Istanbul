/**
 * @fileOverView: 个人中心
 * @author: xuejian.xu
 * @date: 2017/11/18.
 */

import './style.scss';
import React, { Component } from 'react';
import NavBar from '../../components/NavBar/index';
import Header from '../../components/Header/index';
import classNames from 'classnames';
import MyHome from './modules/MyHome';
import BankCard from './modules/BankCard/index';
import AccountSafe from './modules/AccountSafe/index';
import Promote from './modules/Promote/index';

const tabs = [
  {
    name: '我的首页',
    key: 'MyHome'
  },
  {
    name: '银行卡管理',
    key: 'BankCard'
  },
  {
    name: '账户安全',
    key: 'AccountSafe'
  },
  {
    name: '推广赚钱',
    key: 'Promote'
  }
];

class PersonalCenter extends Component {
  state = {
    currentTabKey: 'MyHome',
    currentComp: MyHome
  };

  onMenuTabClick(key) {
    this.setState({
      currentTabKey: key
    });
  }

  render() {
    const { currentTabKey, currentComp } = this.state;
    let contentBody = null;

    switch (currentTabKey) {
      case 'MyHome':
        contentBody = <MyHome {...this.props} />;

        break;
      case 'BankCard':
        contentBody = <BankCard {...this.props} />;

        break;
      case 'AccountSafe':
        contentBody = <AccountSafe {...this.props} />;

        break;

      case 'Promote':
        contentBody = <Promote {...this.props} />;

        break;
    }

    return (
      <div id="PersonalCenter">
        <Header />
        <NavBar />
        <div className="main">
          <div className="menu">
            <div className="title">会员中心</div>
            <div className="profile">欢迎您：</div>
            <div className="menus">
              {tabs.map(tab => {
                const classes = classNames({
                  item: true,
                  active: tab.key === currentTabKey
                });

                return (
                  <div key={tab.key} className={classes} onClick={this.onMenuTabClick.bind(this, tab.key)}>
                    {tab.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="content">
            {contentBody}
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalCenter;
