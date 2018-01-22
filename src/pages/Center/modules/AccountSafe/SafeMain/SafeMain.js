import './SafeMain.scss'
import React, {Component} from 'react'
import _get from 'lodash/get'
import classNames from 'classnames'

export default class AccountSafe extends Component {
    componentDidMount() {
        const { getRealNameStatus, userId } = this.props

        getRealNameStatus(userId)
    }
    gotoVerify = () => {
        this.props.history.push('safe/verify')
    }
    render() {
        const { user, hasRealName, idCard, name } = this.props
        const phone = _get(user, 'customerName')
        const realNameClasses = classNames({
            checked: true,
            green: hasRealName
        })
        const realNameContent = hasRealName ? (
            <span>已确认</span>
        ) : (
            <button className="btn" onClick={this.gotoVerify}>
                去添加
            </button>
        )

        return (
            <div id="SafeMain">
                <div className="title">账户安全</div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="checked green" width={'10%'}>
                                <span className="icon i-checked" />
                            </td>
                            <td className="label" width={'20%'}>
                                绑定手机:
                            </td>
                            <td width={'50%'}>{phone}</td>
                            <td width={'20%'} />
                        </tr>
                        <tr>
                            <td className={realNameClasses} width={'10%'}>
                                <span className="icon i-checked" />
                            </td>
                            <td className="label" width={'20%'}>
                                姓名
                            </td>
                            <td width={'50%'}>{name}</td>
                            <td width={'20%'}>{realNameContent}</td>
                        </tr>
                        <tr>
                            <td className={realNameClasses} width={'10%'}>
                                <span className="icon i-checked" />
                            </td>
                            <td className="label" width={'20%'}>
                                身份证号
                            </td>
                            <td width={'50%'}>{idCard}</td>
                            <td width={'20%'} />
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}