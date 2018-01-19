import { createActions } from 'redux-actions'
import { QUERY_FUND_DETAILS, QUERY_BALANCE } from './contants'
import { URL_QUERY_FUNDS_DETAILS, URL_QUERY_FUNDS } from '../../../../utils/urls'
import { notification } from 'antd'

export default createActions({
    [QUERY_FUND_DETAILS]: async (customerId, client_token, pageIndex) => {
        const res = await axios.post(URL_QUERY_FUNDS_DETAILS, {
            customerId: customerId,
            client_token: client_token,
            pageNumber: pageIndex,
            pageSize: 10
        })

        if (res.code != 1) {
            notification.error({
                message: res.msg
            })

            return []
        } else {
            return res.data
        }
    },
    [QUERY_BALANCE]: async (customerId, client_token) => {
        const res = await axios.post(URL_QUERY_FUNDS, {
            customerId,
            client_token
        })

        if (res.code != 1) {
            notification.error({
                message: res.msg
            })

            return 0
        } else {
            return res.data.balance
        }
    }
})
