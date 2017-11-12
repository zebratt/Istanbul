import { handleActions } from 'redux-actions';
import {
  GET_STOCK_DATA,
  UPDATE_BUY_PRICES_INDEX,
  UPDATE_STOP_LOSS_RATES_INDEX,
  UPDATE_PROTOCOL_STATUS,
  GET_STOCK_SUGGEST,
  GET_POSITION_DATA,
  GET_CLINCH_RECORD
} from './contants';
import _cloneDeep from 'lodash/cloneDeep';

const initState = {
  stockData: {},
  buyPricesIndex: 0,
  stopLossRatesIndex: 0,
  protocolStatus: true,
  suggests: [],
  sellData: {},
  historyData: {}
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
    [GET_POSITION_DATA]: (state, action)=> {
      const {payload} = action;
      const nState = _cloneDeep(state);

      nState.sellData = payload;

      return nState;
    },
    [GET_CLINCH_RECORD]: (state, action )=>{
      const {payload} = action;
      const nState = _cloneDeep(state);

      nState.historyData = payload;

      return nState;
    }
  },
  initState
);
