import { handleActions } from 'redux-actions';
import {
  QUERY_SCHEME_DATA
} from './contants';
import _cloneDeep from 'lodash/cloneDeep';

const initState = {
  settleData: {}
};

export default handleActions(
  {
    [QUERY_SCHEME_DATA]: (state, action)=>{
      const {payload} = action;
      const nState = _cloneDeep(state);

      nState.settleData = payload;

      return nState;
    }
  },
  initState
);
