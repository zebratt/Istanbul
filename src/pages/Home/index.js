import './style.scss'

import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import NavBar from 'components/NavBar'
import Header from 'components/Header/index'
import Footer from 'components/Footer/Footer'
import { notification } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './action'
import { URL_LOGIN } from '../../utils/urls'
import Cookies from 'js-cookie'

@connect(
    state => {
        return { loginStatus: state.Home.loginStatus }
    },
    dispatch => bindActionCreators(actions, dispatch)
)
export default class Home extends Component {
    state = {
        username: '',
        password: ''
    }

    onLoginHandler = () => {
        const { username, password } = this.state
        const { updateLogin, history } = this.props

        if (!username || !password) {
            return notification.warning({
                message: '用户名或密码不能为空！'
            })
        }

        axios
            .post(URL_LOGIN, {
                customerName: username,
                password: password
            })
            .then(res => {
                if (res.code == 1) {
                    const { data: { token, cwpCustomers } } = res

                    notification.success({
                        message: '登录成功！'
                    })

                    //用户登录信息保存30天
                    Cookies.set('TOKEN', token, { expires: 30 })

                    updateLogin(true, token, cwpCustomers)

                    history.push('/stock/buy')
                } else {
                    notification.error({
                        message: res.msg
                    })
                }
            })
    }

    renderLogin = () => {
        const { history } = this.props

        return (
            <div className="login">
                <div className="content">
                    <div className="title">登录点赢宝</div>
                    <div className="label">账号:</div>
                    <input
                        className="input"
                        type="text"
                        placeholder="请输入用户名"
                        value={this.state.username}
                        onChange={eve => {
                            this.setState({ username: eve.target.value })
                        }}
                    />
                    <div className="label">密码:</div>
                    <input
                        className="input"
                        type="password"
                        placeholder="请输入密码"
                        value={this.state.password}
                        onChange={eve => {
                            this.setState({ password: eve.target.value })
                        }}
                    />
                    <div
                        className="forget"
                        onClick={() => {
                            history.push('/forget')
                        }}
                    >
                        忘记密码
                    </div>
                    <div className="buttons">
                        <button className="btn" onClick={this.onLoginHandler}>
                            登录
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { loginStatus } = this.props

        return (
            <div className="g-page" id="Home">
                <Header />
                <NavBar />
                <Carousel
                    emulateTouch
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    showStatus={false}
                >
                    <img className="banner" src="http://odl96infd.bkt.clouddn.com/22.jpg" alt="" />
                    <img className="banner" src="http://odl96infd.bkt.clouddn.com/33.jpg" alt="" />
                    <img className="banner" src="http://odl96infd.bkt.clouddn.com/44.jpg" alt="" />
                </Carousel>
                {!loginStatus && this.renderLogin()}
                <div className="delimiter">
                    <div className="text-wrapper">
                        <div className="text">为什么选择我们</div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box">
                        <div className="content orange">
                            <p>超低费用</p>
                            <p>最低1295</p>
                            <p>8倍杠杆</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content brown">
                            <p>交易保障</p>
                            <p>100%实盘</p>
                            <p>透明公正</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content blue">
                            <p>资金安全</p>
                            <p>第三方托管</p>
                            <p>点买无忧</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content red">
                            <p>专业服务</p>
                            <p>专业团队</p>
                            <p>有问必答</p>
                        </div>
                    </div>
                </div>
                <div className="delimiter">
                    <div className="text-wrapper">
                        <div className="text">一分钟教你点买</div>
                    </div>
                </div>
                <div className="icon-line">
                    <div className="col">
                        <img src={require('./images/icon1.png')} />
                        <span className="text">1. 选择股票</span>
                    </div>
                    <div className="col">
                        <img src={require('./images/icon4.png')} />
                        <span className="text">4. 确认发起策略</span>
                    </div>
                </div>
                <div className="icon-line">
                    <div className="col">
                        <img src={require('./images/icon2.png')} />
                        <span className="text">2. 选择策略资金</span>
                    </div>
                    <div className="col">
                        <img src={require('./images/icon5.png')} />
                        <span className="text">5. 匹配投资人</span>
                    </div>
                </div>
                <div className="icon-line">
                    <div className="col">
                        <img src={require('./images/icon3.png')} />
                        <span className="text">3. 选择止损止盈金额</span>
                    </div>
                    <div className="col">
                        <img src={require('./images/icon6.png')} />
                        <span className="text">6. 点卖成功</span>
                    </div>
                </div>
                <img className="bg" src="http://odl96infd.bkt.clouddn.com/bg.jpg" alt=""/>
                <div className="faq">
                    <div className="item">
                        <p>Q 点买人</p>
                        <p>A 作为投资人的交易合作方，负责向投资人提供交易策略的自然人</p>
                    </div>
                    <div className="item">
                        <p>Q 投资人</p>
                        <p>A 作为点买人的交易合作方，负责按点买人交易策略并利用自有资金和账户进行交易的自然人或法人。</p>
                    </div>
                    <div className="item">
                        <p>Q 点买</p>
                        <p>A 指点买人向投资人发出买入指令，平台为点买人撮合投资人。成功后，投资人接受点买人指令并买入点买股。但是如果点买人所点买股票风险过大，投资人有权拒绝指令。</p>
                    </div>
                    <div className="item">
                        <p>Q 点卖</p>
                        <p>A 点买人向投资人发出卖出指令，投资人接受点买人指令卖出点买股。</p>
                    </div>
                    <div className="item">
                        <p>Q 点买点卖时间</p>
                        <p>A 交易日点买点卖时间为：9:30-11:30 13:00-14:55。</p>
                    </div>
                    <div className="item">
                        <p>Q 持仓时间</p>
                        <p>A 2～20个交易日，默认每天自动递延，递延费从账户余额扣除，若余额不足或者不符合递延条件，策略将由投资人卖出清算，T+20当日必须结算。</p>
                    </div>
                    <div className="item">
                        <p>Q 触发止盈</p>
                        <p>A 当合作交易品种的浮动盈亏达到特定数值时，由投资人即时卖出交易品种全部持有数量进行止盈。</p>
                    </div>
                    <div className="item">
                        <p>Q 触发止损</p>
                        <p>A 当合作交易品种的浮动盈亏达到特定数值时，由投资人即时卖出交易品种全部持有数量进行止损。</p>
                    </div>
                    <div className="item">
                        <p>Q 交易综合费</p>
                        <p>A 每万元点买金额45元，费用包含第一天交易费，管理费以及第二天的递延费。</p>
                    </div>
                    <div className="item">
                        <p>Q 履约保证金</p>
                        <p>A 履约保证金为点买人委托平台冻结用于履行交易亏损赔付义务的保证金，结束时根据策略盈亏清算。保证金越低风险也越大，保证金越高抗风险也越高。</p>
                    </div>
                    <div className="item">
                        <p>Q 递延费</p>
                        <p>A 包含平台信息服务费和平台收取用于补偿投资人资金占用费，每万元点买金额18元</p>
                    </div>
                    <div className="item">
                        <p>Q 盈亏结算</p>
                        <p>A 根据点买人发出指令已卖出，按照实际价格结算；如果盈利按照点买人和投资人9</p>
                    </div>
                    <div className="item">
                        <p>Q 怎么充值？</p>
                        <p>A 您可以通过网银充值、支付宝转账、银行转账三种方式进行充值。</p>
                    </div>
                    <div className="item">
                        <p>Q 提款到账速度快吗？</p>
                        <p>A 正常情况下，提款在1个工作日内处理。当提款数量多，一般处理时间需要1-2个工作日左右，节假日可能会出现延迟。</p>
                    </div>
                    <div className="item">
                        <p>Q 点卖清算后资金何时返还账户余额？</p>
                        <p>A 一般清算完后马上会到账户余额里，但是难免出现异常数据时，为了保证成交数据的正确性，我们会人工核实一遍数据，会造成清算时间一定的延迟。</p>
                    </div>
                    <div className="item">
                        <p>Q 充值到账速度快吗？</p>
                        <p>A 网银充值，立马到账。支付宝汇款和银行汇款一般半小时内到账。</p>
                    </div>
                    <div className="item">
                        <p>Q 若清算时出现明显差错怎么办？</p>
                        <p>A 若由于系统、接口等问题造成清算出错，我们会在核实数据后对用户该笔交易做资金修正。</p>
                    </div>
                    <div className="item">
                        <p>Q 点卖清算后资金何时返还账户余额？</p>
                        <p>A 一般清算完后马上会到账户余额里，但是难免出现异常数据时，为了保证成交数据的正确性，我们会人工核实一遍数据，会造成清算时间一定的延迟。</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
