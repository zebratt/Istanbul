/**
 * Created by xuejian.xu on 2017/10/30.
 */

import { createActions } from 'redux-actions';
import { GET_STOCK_DATA } from './contants';
import { URL_STOCK_DATA } from '../../utils/urls';
import { notification } from 'antd';

const reducer = createActions({
  [GET_STOCK_DATA]: async code => {
    const res = await axios.get(URL_STOCK_DATA, {
      params: {
        gid: code,
        key: CONFIG.appKey
      }
    });

    if (res.resultcode == 200) {
      return res.result[0];
    } else {
      notification.error({
        message: '股票代码不存在，请重新输入'
      });

      return false;
    }
  }
});

export default reducer;
