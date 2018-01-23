import './BankMain.scss'
import React, { Component } from 'react'

const auditStatus = ['', '待审核', '审核通过', '审核失败']

export default class BankCard extends Component {
    componentDidMount() {
        const { userId, token, queryBankCard } = this.props

        if (userId) {
            queryBankCard(userId, token)
        }
    }
    render() {
        const { bankcards } = this.props
        let addContent = null

        if (!bankcards.length) {
            addContent = (
                <button
                    className="btn-add"
                    onClick={() => {
                        this.props.history.push('bankcard/add')
                    }}
                >
                    添加新的银行卡
                </button>
            )
        }

        return (
            <div id="BankMain">
                <div className="header">{addContent}</div>
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
                        {bankcards.map(card => {
                            return (
                                <tr key={card.bankCardId}>
                                    <td>{card.bankCardId}</td>
                                    <td>{card.bankName}</td>
                                    <td>{card.bankprovince}</td>
                                    <td>{card.bankCity}</td>
                                    <td>{card.bankAdress}</td>
                                    <td>{auditStatus[card.auditStatus]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
