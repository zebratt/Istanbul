import { handleActions } from 'redux-actions';
import { GET_STOCK_DATA } from './contants';
import _cloneDeep from 'lodash/cloneDeep';

const initState = {
  stockData: {}
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
    }
  },
  initState
);
