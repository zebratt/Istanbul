/**
 * Created by xuejian.xu on 2017/11/3.
 */

import React, { Component } from 'react'
import { Modal, notification } from 'antd'
import { URL_SELL_OUT_STOCK } from '../../../../utils/urls'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './action'
import './style.scss'
import classNames from 'classnames'

const positionStatus = ['已平仓', '已持仓']

@connect(
    state => {
        const { Stock: { Sell }, App } = state

        return Object.assign({}, Sell, App)
    },
    dispatch => bindActionCreators(actions, dispatch)
)
export default class Sell extends Component {
    item = {}
    state = {
        sellModalVisible: false,
        currentPositionId: null,
        isSelling: false
    }

    componentDidMount() {
        const { userId, token, getPositionData } = this.props

        if (!userId) {
            return
        }

        getPositionData(userId, token)
    }

    onSellButtonClick(item) {
        const { isSelling } = this.state

        if (item.todayTrade == 1) {
            return notification.warning({
                message: '当天买入的股票不可卖出!'
            })
        }

        if (isSelling) {
            return notification.warning({
                message: '交易中，请稍后...'
            })
        }

        this.item = item
        this.setState({
            sellModalVisible: true,
            currentPositionId: item.positionId
        })
    }

    render() {
        const { userId, token, sellData } = this.props
        const { dayDeference, sumProfit, cwpPositionOmList } = sellData
        const { sellModalVisible, currentPositionId, isSelling } = this.state

        if (!userId) {
            return (
                <div id="Sell">
                    <div>请先登录!</div>
                </div>
            )
        }

        if (!cwpPositionOmList) {
            return null
        }

        return (
            <div id="Sell">
                <div className="tip">
                    当前持仓所需递延费<span className="red">{dayDeference}</span>元(周末及节假日免费),持仓盈利总计：<span className="red">
                        {sumProfit}
                    </span>元
                </div>
                <table className="sell-table">
                    <thead>
                        <tr className="title">
                            <td>股票代码</td>
                            <td>股票名称</td>
                            <td>点卖额度</td>
                            <td>止盈额度</td>
                            <td>止损额度</td>
                            <td>实时盈亏</td>
                            <td>每日递延费</td>
                            <td>持仓天数</td>
                            <td>持仓状态</td>
                            <td>开仓日期</td>
                            <td>点买股票数量</td>
                            <td>成交价格</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cwpPositionOmList.content.map(item => {
                            const openTime = new Date(item.openTime).toLocaleString()
                            const btnClass = classNames({
                                'btn-sell': true,
                                'btn-disable':
                                    item.todayTrade == 1 || (currentPositionId === item.positionId && isSelling)
                            })
                            let btnText = '点卖'

                            if (currentPositionId === item.positionId && isSelling) {
                                btnText = '点卖中'
                            }

                            return (
                                <tr key={item.positionId}>
                                    <td>{item.stockCode}</td>
                                    <td>{item.stockName}</td>
                                    <td>{item.buyLimit}</td>
                                    <td>{item.profitLimit}</td>
                                    <td>{item.lossLimit}</td>
                                    <td>{item.realTimeProfitLoss}</td>
                                    <td>{item.dayilyDeferredCharge}</td>
                                    <td>{item.positionDays}</td>
                                    <td>{positionStatus[item.positionStatus]}</td>
                                    <td>{openTime}</td>
                                    <td>{item.clinchStockQuantity}</td>
                                    <td>{item.clinchPrice}</td>
                                    <td>
                                        <button onClick={this.onSellButtonClick.bind(this, item)} className={btnClass}>
                                            {btnText}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Modal
                    title={'点卖确认'}
                    visible={sellModalVisible}
                    onOk={() => {
                        this.setState({
                            sellModalVisible: false,
                            isSelling: true
                        })

                        axios
                            .post(URL_SELL_OUT_STOCK, {
                                positionId: this.item.positionId,
                                client_token: token
                            })
                            .then(res => {
                                if (res.code == 1) {
                                    notification.success({
                                        message: '交易成功！'
                                    })

                                    this.setState({
                                        isSelling: false,
                                        currentPostionId: null
                                    })

                                    this.props.getPositionData(userId, token)
                                }
                            })
                    }}
                    onCancel={() => {
                        this.setState({
                            sellModalVisible: false
                        })
                    }}
                >
                    <p>
                        交易品种：{this.item.stockName}
                        {this.item.stockCode}
                    </p>
                    <p>卖出数量：{this.item.buyLimit}</p>
                    <p>买入时间：{new Date(this.item.openTime).toLocaleString()}</p>
                    <p>浮动盈亏：{this.item.realTimeProfitLoss}</p>
                </Modal>
            </div>
        )
    }
}
