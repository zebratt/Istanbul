import { handleActions } from 'redux-actions';
import {
  GET_STOCK_DATA,
  UPDATE_BUY_PRICES_INDEX,
  UPDATE_STOP_LOSS_RATES_INDEX,
  UPDATE_PROTOCOL_STATUS,
  GET_STOCK_SUGGEST,
  UPDATE_CURRENT_STOCK_CODE
} from './contants';
import _cloneDeep from 'lodash/cloneDeep';

const initState = {
  stockData: {},
  buyPricesIndex: 0,
  stopLossRatesIndex: 0,
  protocolStatus: true,
  suggests: [],
  currentStockCode: 'sh600036' //默认为招商银行
};

export default handleActions(
  {
    [GET_STOCK_DATA]: (state, action) => {
      const { payload } = action;

      if (!payload) {
        return state;
      }

      const nState = _cloneDeep(state);

      nState.stockData = payload;

      return nState;
    },
    [UPDATE_BUY_PRICES_INDEX]: (state, action) => {
      const { payload: nextIndex } = action;
      const nState = _cloneDeep(state);

      nState.buyPricesIndex = nextIndex;

      return nState;
    },
    [UPDATE_STOP_LOSS_RATES_INDEX]: (state, action) => {
      const { payload: nextIndex } = action;
      const nState = _cloneDeep(state);

      nState.stopLossRatesIndex = nextIndex;

      return nState;
    },
    [UPDATE_PROTOCOL_STATUS]: (state, action) => {
      const { payload: status } = action;
      const nState = _cloneDeep(state);

      nState.protocolStatus = status;

      return nState;
    },
    [GET_STOCK_SUGGEST]: (state, action)=>{
      const {payload: suggests} = action;
      const nState = _cloneDeep(state);

      nState.suggests = suggests;

      return nState;
    },
    [UPDATE_CURRENT_STOCK_CODE]: (state, action) => {
      const {payload: newStockCode} = action;
      const nState = _cloneDeep(newStockCode);

      nState.currentStockCode = newStockCode;

      return nState;
    }
  },
  initState
);
