export const URL_LOGIN = '/serverInterface/login/loginCheck'; // 用户登陆
export const URL_REGISTER = '/serverInterface/login/registrationCustomer' //用户注册
export const URL_STOCK_DATA = '/finance/stock/hs' //获取股票数据
export const URL_PURCHASE = '/serverInterface/buy/saveStockOrder' //报单接口
export const URL_SUGGEST = '/suggest/type=111&key=' //股票建议接口
export const URL_SEND_VERITY_CODE = '/serverInterface/login/sendCode' //发送验证码
export const URL_QUERY_CUSTOMER_BY_TOKEN = '/serverInterface/login/queryCustomerByToken' //使用token查询用户信息

// Sell
export const URL_POSITION_DATA = '/serverInterface/buy/queryPositionData' //持仓
export const URL_SELL_OUT_STOCK = '/serverInterface/buy/sellOutStockOrder' //卖出
export const URL_CLINCH_RECORD = '/serverInterface/clinchRecord/queryHistoryClinchRecord' //历史记录

// Settle
export const URL_QUERY_SCHEME_DATA = '/serverInterface/buy/querySchemeData' // 平仓

// MyHome
export const URL_QUERY_FUNDS_DETAILS = '/serverInterface/homePage/queryFundsDetails' //资金明细
