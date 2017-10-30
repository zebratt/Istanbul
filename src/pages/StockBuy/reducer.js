import { handleActions } from 'redux-actions';
import { GET_STOCK_DATA, UPDATE_BUY_PRICES_INDEX, UPDATE_STOP_LOSS_RATES_INDEX } from './contants';
import _cloneDeep from 'lodash/cloneDeep';

const initState = {
  stockData: {},
  buyPricesIndex: 0,
  stopLossRatesIndex: 0
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
    [UPDATE_BUY_PRICES_INDEX]: (state, action)=>{
      const {payload: nextIndex} = action;
      const nState = _cloneDeep(state);

      nState.buyPricesIndex = nextIndex;

      return nState;
    },
    [UPDATE_STOP_LOSS_RATES_INDEX]: (state, action)=>{
      const {payload: nextIndex} = action;
      const nState = _cloneDeep(state);

      nState.stopLossRatesIndex = nextIndex;

      return nState;
    }
  },
  initState
);
