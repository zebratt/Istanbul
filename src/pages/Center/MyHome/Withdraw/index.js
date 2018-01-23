import './style.scss'
import * as React from 'react'
import { notification } from 'antd'
import { URL_WITHDRAW } from 'utils/urls'
import get from 'lodash/get'

export default class Withdraw extends React.Component {
    state = {
        moneyVal: '',
        cardVal: ''
    }
    componentDidMount() {
        const { userId, token, queryBankCard } = this.props

        queryBankCard(userId, token)
    }
    componentWillReceiveProps(nextProps){
        const {bankcards} = nextProps;

        this.setState({
            cardVal: get(bankcards, '[0].bankCardId', '')
        })
    }
    onSubmit = () => {
        const { moneyVal, cardVal } = this.state
        const { userId, token } = this.props

        if (!/^\d+$/.test(moneyVal)) {
            return notification.warning({
                message: '提现金额格式有误，请重新输入！'
            })
        }

        if (!/^\d+$/.test(cardVal)) {
            return notification.warning({
                message: '银行卡格式有误，请重新输入！'
            })
        }

        axios
            .post(URL_WITHDRAW, {
                customerId: userId,
                amountMoney: moneyVal,
                bankCardId: cardVal,
                client_token: token
            })
            .then(res => {
                if (res.code != 1) {
                    notification.error({
                        message: res.msg
                    })
                } else {
                    notification.success({
                        message: '提现成功！'
                    })
                    this.props.history.goBack()
                }
            })
    }
    render() {
        const { moneyVal, cardVal } = this.state
        const { bankcards, history } = this.props

        if (bankcards.length < 1) {
            return (
                <div id="Withdraw">
                    <button
                        className="btn-add"
                        onClick={() => {
                            history.push('/center/bankcard/add')
                        }}
                    >
                        添加一张新的银行卡
                    </button>
                </div>
            )
        }

        return (
            <div id="Withdraw">
                <div className="withdraw-title">我要提现</div>
                <div className="line">
                    <div className="label">提现金额：</div>
                    <input
                        type="text"
                        maxLength={8}
                        placeholder="余额小于10元必须全部提取"
                        value={moneyVal}
                        onChange={eve => {
                            this.setState({
                                moneyVal: eve.target.value
                            })
                        }}
                    />
                </div>
                <div className="line">
                    <div className="label">提现银行卡号：</div>
                    <input
                        type="text"
                        maxLength={21}
                        value={cardVal}
                        onChange={eve => {
                            this.setState({
                                cardVal: eve.target.value
                            })
                        }}
                    />
                </div>
                <div className="line">
                    <button className="btn-withdraw" onClick={this.onSubmit}>
                        提交
                    </button>
                </div>
            </div>
        )
    }
}
