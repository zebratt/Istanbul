/**
 * Created by xuejian.xu on 2017/10/30.
 */

import { createActions } from 'redux-actions';
import {
  QUERY_SCHEME_DATA
} from './contants';
import { URL_QUERY_SCHEME_DATA } from 'utils/urls';
import { notification } from 'antd';

const reducer = createActions({
  [QUERY_SCHEME_DATA]: async (customerId, token, options)=>{
    const res = await axios.post(URL_QUERY_SCHEME_DATA, {
      customerId,
      client_token: token,
      pageNumber: 0,
      pageSize: 50,
      endDate: options.endTime,
      startDate: options.startTime,
      stockName: options.stockName,
      stockCode: options.stockCode
    });

    if(res.code == 1){
      return res.data;
    }else{
      notification.error({
        message: res.msg
      });
    }
  }
});

export default reducer;
