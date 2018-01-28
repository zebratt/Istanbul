import './style.scss'

import React, { Component } from 'react'
import Page from 'components/Page/Page'
import { Carousel } from 'react-responsive-carousel'
import { notification } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { URL_LOGIN } from 'utils/urls'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import AppActions from 'app/AppActions'
import { actions } from './HomeRedux'
import News from './modules/News'

@connect(
    state => {
        const { App: { loginStatus, user }, Home } = state

        return Object.assign({ loginStatus, user }, {...Home})
    },
    dispatch => bindActionCreators(Object.assign(AppActions, actions), dispatch)
)
export default class Home extends Component {
    state = {
        username: '',
        password: ''
    }

    componentDidMount() {
        const { getRandomInfo, getFixedInfo, getNews, loginStatus, user } = this.props

        if (loginStatus) {
            getRandomInfo(user.customerPhone)
            getFixedInfo()
            getNews()
        }
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
        const { loginStatus, randoms, fixes, news } = this.props

        return (
            <Page id="Home">
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
                <div className="mocks">
                    <div className="box">
                        {
                            randoms.map((random) => (
                                <div key={random.phoneId} className="row">
                                    <div className="col">{random.phoneId}</div>
                                    <div className="col">{random.displayType === 1 ? '策略' : '排行'}</div>
                                    <div className="col">{random.stockName}{random.stockCode}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="box">
                        {
                            fixes.map((fix) => (
                                <div key={fix.phoneId} className="row">
                                    <div className="col">{fix.phoneId}</div>
                                    <div className="col">{fix.ownBalance}</div>
                                    <div className="col">{fix.displayType === 1 ? '策略' : '排行'}</div>
                                    <div className="col">{fix.stockName}{fix.stockCode}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <News news={news} />
                <img className="bg" src="http://odl96infd.bkt.clouddn.com/bg.jpg" alt="" />
                <div className="faq">
                    <div className="item">
                        <p>Q 点买人</p>
                        <p>A 作为投资人的交易合作方，负责向投资人提供交易策略的自然人</p>
                    </div>
                    <div className="item">
                        <p>Q 投资人</p>
                        <p>
                            A 作为点买人的交易合作方，负责按点买人交易策略并利用自有资金和账户进行交易的自然人或法人。
                        </p>
                    </div>
                    <div className="item">
                        <p>Q 点买</p>
                        <p>
                            A
                            指点买人向投资人发出买入指令，平台为点买人撮合投资人。成功后，投资人接受点买人指令并买入点买股。但是如果点买人所点买股票风险过大，投资人有权拒绝指令。
                        </p>
                    </div>
                    <div className="item">
                        <p>Q 点卖</p>
                        <p>A 点买人向投资人发出卖出指令，投资人接受点买人指令卖出点买股。</p>
                    </div>
                    <Link className="to-more" to="/help">
                        查看更多
                    </Link>
                </div>
            </Page>
        )
    }
}
