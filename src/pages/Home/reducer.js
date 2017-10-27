import { handleActions } from 'redux-actions';
import { UPDATE_LOGIN } from './contants';

const initState = {
  loginStatus: false,
  token: ''
};

const reducer = handleActions(
  {
    [UPDATE_LOGIN]: (state, action) => {
      const { status, token } = action.payload;

      return { loginStatus: status, token: token };
    }
  },
  initState
);

export default reducer;
