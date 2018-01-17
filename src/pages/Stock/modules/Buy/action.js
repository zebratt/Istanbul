/**
 * Created by xuejian.xu on 2017/10/30.
 */

import { createActions } from 'redux-actions'
import {
    GET_STOCK_DATA,
    UPDATE_BUY_PRICES_INDEX,
    UPDATE_STOP_LOSS_RATES_INDEX,
    UPDATE_PROTOCOL_STATUS,
    GET_STOCK_SUGGEST,
    UPDATE_CURRENT_STOCK_CODE,
    GET_FORBIDDEN_LIST
} from './contants'
import { URL_STOCK_DATA, URL_SUGGEST, URL_GET_FORBIDDEN_LIST } from '../../../../utils/urls'
import { notification } from 'antd'

const reducer = createActions({
    [GET_STOCK_DATA]: async code => {
        const res = await axios.get(URL_STOCK_DATA + `=${code}`)
        const str = res.match(/\".+\"/)[0].slice(1, -1)

        if (!str) {
            notification.error({
                message: '股票代码有误，请重新输入!'
            })

            return false
        }

        const arr = str.split(',')

        return {
            'isRed': arr[3] > arr[1],
            'gid': code,
            'name': arr[0],
            'todayStartPri': arr[1],
            'yestodEndPri': arr[2],
            'nowPri': arr[3],
            'todayMax': arr[4],
            'todayMin': arr[5],
            'competitivePri': arr[6],
            'reservePri': arr[7],
            'traNumber': arr[8],
            'traAmount': arr[9],
            'buyOne': arr[10],
            'buyOnePri': arr[11],
            'buyTwo': arr[12],
            'buyTwoPri': arr[13],
            'buyThree': arr[14],
            'buyThreePri': arr[15],
            'buyFour': arr[16],
            'buyFourPri': arr[17],
            'buyFive': arr[18],
            'buyFivePri': arr[19],
            'sellOne': arr[20],
            'sellOnePri': arr[21],
            'sellTwo': arr[22],
            'sellTwoPri': arr[23],
            'sellThree': arr[24],
            'sellThreePri': arr[25],
            'sellFour': arr[26],
            'sellFourPri': arr[27],
            'sellFive': arr[28],
            'sellFivePri': arr[29],
            'data': arr[30],
            'time': arr[31]
        }
    },
    [UPDATE_BUY_PRICES_INDEX]: nextIndex => nextIndex,
    [UPDATE_STOP_LOSS_RATES_INDEX]: nextIndex => nextIndex,
    [UPDATE_PROTOCOL_STATUS]: status => status,
    [GET_STOCK_SUGGEST]: async queryStr => {
        if (!queryStr) {
            return []
        }

        const res = await axios.get(URL_SUGGEST + queryStr)
        const resStr = res.match(/\".+\"/)[0].slice(1, -1)

        return resStr.split(';')
    },
    [UPDATE_CURRENT_STOCK_CODE]: stockCode => stockCode,
    [GET_FORBIDDEN_LIST]: async () => {
        const res = axios.get(URL_GET_FORBIDDEN_LIST, {
            params: {
                reason_id: 0
            }
        })

        return res
    }
})

export default reducer
