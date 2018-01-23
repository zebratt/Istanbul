import './Main.scss'
import React, { Component } from 'react'
import _get from 'lodash/get'

export default class Main extends Component {
    componentDidMount() {
        const { queryFundDetails, queryBalance, userId, token } = this.props

        if (userId) {
            queryFundDetails(userId, token, 0)
            queryBalance(userId, token)
        }
    }

    onNavButtonClick(isPrev) {
        const { queryFundDetails, userId, token, currentPageIndex, totalPages } = this.props

        if (isPrev) {
            if (currentPageIndex > 0) {
                queryFundDetails(userId, token, currentPageIndex - 1)
            }
        } else {
            if (currentPageIndex < totalPages - 1) {
                queryFundDetails(userId, token, currentPageIndex + 1)
            }
        }
    }

    render() {
        const { history, fundDetails, currentPageIndex, totalPages, balance } = this.props

        return (
            <div id="Main">
                <div className="top">
                    <div className="flex-1">
                        <div className="balance">
                            <p>账户余额</p>
                            <p className="red">{balance}</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <button
                            className="btn btn-charge"
                            onClick={() => {
                                history.push('home/charge/bankcard')
                            }}
                        >
                            充值
                        </button>
                    </div>
                    <div className="flex-1">
                        <button
                            className="btn btn-withdraw"
                            onClick={() => {
                                history.push('home/withdraw')
                            }}
                        >
                            提现
                        </button>
                    </div>
                </div>
                <div className="title">资金明细</div>
                <table className="table">
                    <thead>
                        <tr className="tl">
                            <td>流向</td>
                            <td>变动金额</td>
                            <td>剩余金额</td>
                            <td>变动时间</td>
                            <td>备注信息</td>
                        </tr>
                    </thead>
                    <tbody>
                        {fundDetails.map(item => {
                            const flowWay = item.flowWay === 0 ? '支出' : '收入'

                            return (
                                <tr key={item.fundsDetailsId}>
                                    <td>{flowWay}</td>
                                    <td>{item.amountChange}</td>
                                    <td>{item.amountResidual}</td>
                                    <td>{item.changeTime}</td>
                                    <td>{item.remark}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="table-nav">
                    <button className="btn" onClick={this.onNavButtonClick.bind(this, true)}>
                        上一页
                    </button>
                    当前第<span>{currentPageIndex + 1}</span>页，总共<span>{totalPages}</span>页
                    <button className="btn" onClick={this.onNavButtonClick.bind(this, false)}>
                        下一页
                    </button>
                </div>
            </div>
        )
    }
}
