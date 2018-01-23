/**
 * Created by xuejian.xu on 2017/11/3.
 */

import './style.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './action'
import { Modal, DatePicker } from 'antd'

const orderStatusList = ['匹配中', '匹配失败', '已持仓', '平仓中', '已平仓']

@connect(
    state => {
        const { Stock: { Settle }, App } = state

        return Object.assign({}, Settle, App)
    },
    dispatch => bindActionCreators(actions, dispatch)
)
export default class Settle extends Component {
    state = {
        modalData: {},
        modalVisible: false,
        stockCodeVal: '',
        stockNameVal: '',
        startTimeVal: '',
        endTimeVal: ''
    }

    componentDidMount() {
        const { userId, token, querySchemeData } = this.props

        if (!userId) {
            return
        }

        querySchemeData(userId, token, {})
    }

    onSearchButtonClick = () => {
        const { stockNameVal, stockCodeVal, startTimeVal, endTimeVal } = this.state
        const { userId, token, querySchemeData } = this.props

        querySchemeData(userId, token, {
            stockName: stockNameVal,
            stockCode: stockCodeVal,
            startTime: startTimeVal,
            endTime: endTimeVal
        })
    }

    render() {
        const { userId, token, settleData } = this.props
        const { content } = settleData
        const { modalData, modalVisible, stockNameVal, stockCodeVal, startTimeVal, endTimeVal } = this.state

        if (!userId) {
            return (
                <div id="Settle">
                    <div>请先登录!</div>
                </div>
            )
        }

        if (!content) {
            return null
        }

        return (
            <div id="Settle">
                <div className="line">
                    <div className="item">
                        <div className="label">股票代码</div>
                        <div className="input">
                            <input
                                value={stockCodeVal}
                                onChange={eve => {
                                    this.setState({
                                        stockCodeVal: eve.target.value
                                    })
                                }}
                                maxLength={12}
                                className="my-input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="label">股票名称</div>
                        <div className="input">
                            <input
                                value={stockNameVal}
                                onChange={eve => {
                                    this.setState({
                                        stockNameVal: eve.target.value
                                    })
                                }}
                                maxLength={12}
                                className="my-input"
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <div className="line">
                    <div className="item">
                        <div className="label">开始时间</div>
                        <div className="input">
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="请选择开始时间"
                                onChange={(value, str) => {
                                    this.setState({
                                        startTimeVal: str
                                    })
                                }}
                                onOk={value => {}}
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="label">结束时间</div>
                        <div className="input">
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="请选择结束时间"
                                onChange={(value, str) => {
                                    this.setState({
                                        endTimeVal: str
                                    })
                                }}
                                onOk={value => {}}
                            />
                        </div>
                    </div>
                </div>
                <div className="line">
                    <div className="item-full">
                        <button onClick={this.onSearchButtonClick}>查询</button>
                    </div>
                </div>
                <table className="settle-table">
                    <thead>
                        <tr className="title">
                            <td>股票代码</td>
                            <td>股票名称</td>
                            <td>买入价格</td>
                            <td>卖出价格</td>
                            <td>成交数量</td>
                            <td>点买单的状态</td>
                            <td>卖出时间</td>
                            <td>方案总盈亏</td>
                            <td>盈利分配</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        {content.map(item => {
                            return (
                                <tr key={item.schemeId}>
                                    <td>{item.stockCode}</td>
                                    <td>{item.stockName}</td>
                                    <td>{item.purchasePrice}</td>
                                    <td>{item.sellOutPrice}</td>
                                    <td>{item.clinchStockQuantity}</td>
                                    <td>{orderStatusList[item.orderStatus]}</td>
                                    <td>{item.creationTime}</td>
                                    <td>{item.sumProfitLoss}</td>
                                    <td>{item.customerProfitLoss}</td>
                                    <td>
                                        <button
                                            className="btn-detail"
                                            onClick={() => {
                                                this.setState({
                                                    modalData: item,
                                                    modalVisible: true
                                                })
                                            }}
                                        >
                                            查看详情
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Modal
                    title={'详情'}
                    visible={modalVisible}
                    wrapClassName="modal-settle-detail"
                    onOk={() => {
                        this.setState({
                            modalVisible: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            modalVisible: false
                        })
                    }}
                >
                    <table>
                        <tbody>
                            <tr>
                                <td>股票代码</td>
                                <td>{modalData.stockCode}</td>
                                <td>股票名称</td>
                                <td>{modalData.stockName}</td>
                            </tr>
                            <tr>
                                <td>买入成交价格</td>
                                <td>{modalData.purchasePrice}</td>
                                <td>卖出成交价格</td>
                                <td>{modalData.sellOutPrice}</td>
                            </tr>
                            <tr>
                                <td>点买股票数量</td>
                                <td>{modalData.buyStockQuantity}</td>
                                <td>成交股票数量</td>
                                <td>{modalData.clinchStockQuantity}</td>
                            </tr>
                            <tr>
                                <td>点买单的状态</td>
                                <td>{orderStatusList[modalData.orderStatus]}</td>
                                <td>点买额度</td>
                                <td>{modalData.buyLimit}</td>
                            </tr>
                            <tr>
                                <td>创建时间</td>
                                <td>{modalData.creationTime}</td>
                                <td>所需保证金</td>
                                <td>{modalData.requiredMargin}</td>
                            </tr>
                            <tr>
                                <td>止盈金额</td>
                                <td>{modalData.profitAmount}</td>
                                <td>止损金额</td>
                                <td>{modalData.lossAmount}</td>
                            </tr>
                            <tr>
                                <td>综合费</td>
                                <td>{modalData.totalCharges}</td>
                                <td>可持仓天数</td>
                                <td>{modalData.positionDays}</td>
                            </tr>
                            <tr>
                                <td>递延总费用</td>
                                <td>{modalData.deferredCharges}</td>
                                <td>欠费金额</td>
                                <td>{modalData.owedSum}</td>
                            </tr>
                            <tr>
                                <td>每日延迟费</td>
                                <td>{modalData.dayilyDeferredCharge}</td>
                                <td>平仓时间</td>
                                <td>{modalData.liquidationTime}</td>
                            </tr>
                            <tr>
                                <td>总亏盈</td>
                                <td>{modalData.sumProfitLoss}</td>
                                <td>客户亏盈</td>
                                <td>{modalData.customerProfitLoss}</td>
                            </tr>
                            <tr>
                                <td>投资人亏盈</td>
                                <td>{modalData.investorProfitLoss}</td>
                                <td>递延条件</td>
                                <td>{modalData.deferredCondition}</td>
                            </tr>
                            <tr>
                                <td>点买额度</td>
                                <td>{modalData.buyMoney}</td>
                            </tr>
                        </tbody>
                    </table>
                </Modal>
            </div>
        )
    }
}
