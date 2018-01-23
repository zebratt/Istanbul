/**
 * Created by xuejian.xu on 2017/10/30.
 */

import { createActions } from 'redux-actions';
import {
  GET_POSITION_DATA
} from './contants';
import { URL_POSITION_DATA } from 'utils/urls';
import { notification } from 'antd';

const reducer = createActions({
  [GET_POSITION_DATA]: async (customerId, token)=>{
    const res = await axios.post(URL_POSITION_DATA, {
      customerId: customerId,
      client_token: token,
      pageNumber: 0,
      pageSize: 50
    });

    if(res.code == 1){
      return res.data;
    }else{
      notification.error({
        message: res.msg
      })
    }
  }
});

export default reducer;
