import { handleActions } from 'redux-actions';
import { UPDATE_LOGIN } from './contants';

const initState = {
  loginStatus: false,
  token: '',
  customerId: ''
};

const reducer = handleActions(
  {
    [UPDATE_LOGIN]: (state, action) => {
      const { status, token, customerId } = action.payload;

      return { loginStatus: status, token: token, customerId: customerId };
    }
  },
  initState
);

export default reducer;
