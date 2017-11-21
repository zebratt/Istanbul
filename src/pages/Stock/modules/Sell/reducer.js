import { handleActions } from 'redux-actions';
import {
  GET_POSITION_DATA
} from './contants';
import _cloneDeep from 'lodash/cloneDeep';

const initState = {
  sellData: {}
};

export default handleActions(
  {
    [GET_POSITION_DATA]: (state, action)=> {
      const {payload} = action;
      const nState = _cloneDeep(state);

      nState.sellData = payload;

      return nState;
    }
  },
  initState
);
