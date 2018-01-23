/**
 * Created by xuejian.xu on 2017/11/23.
 */

import {chartLine, chartK} from '../../../common/echarts.extends';
import transformTool  from './lib/transformTool';
import _each from 'lodash/each';
import {notification} from 'antd';

/**
 * 渲染日线
 * @param dom 图标容器节点
 * @param stockCode 股票代码
 * @param yestodEndPri 昨日收盘价
 */
export const renderChartLine = (dom, stockCode, yestodEndPri)=>{
  axios({
    method: 'get',
    url: `/sinajs/list=ml_${stockCode}`,
  }).then((res)=>{
    var sChartData = res.match(/\".+\"/)[0].slice(1,-1);
    var result = transformTool.fB(transformTool.db(sChartData), false, 'CN');
    var chartVal = [];

    _each(result, function (item) {
      var inVal = [];
      if (item.price >= 0) {
        var dVal = new Date().format("yyyy-MM-dd");

        var s1arr1 = dVal.split("-");
        var s1arr2 = item.time.split(":");
        if (s1arr2.length == 2) {
          s1arr2.push("00");
        }

        var rVal = new Date(s1arr1[0], s1arr1[1] - 1, s1arr1[2], s1arr2[0], s1arr2[1], s1arr2[2]).getTime();
        inVal.push(rVal);
        inVal.push(item.price);
        chartVal.push(inVal);
      }
    });

    var json = { "records": chartVal, "y_close": yestodEndPri };
     chartLine.init(dom, json, null);
  })
}

export const renderChartK = (dom, stockCode)=>{
  axios({
    method: 'get',
    url: '/chartk/wcp/Market/GetCurrentMarket?stockNumber=' + stockCode
  }).then((res)=>{
    if(res.success){
      var data = res.data;
      var chartVal = [];

      _each(data, function (n, i) {
        var inVal = [];
        var xVal = n.day.substring(0, 10);
        inVal.push(xVal);
        inVal.push(n.open);
        inVal.push(n.high);
        inVal.push(n.low);
        inVal.push(n.close);
        inVal.push(n.volume);
        chartVal.push(inVal);
      });
      var json = { "records": chartVal };

      chartK.init(dom, json);
    }else{
      notification.error({
        message: res.msg
      })
    }
  })
}
