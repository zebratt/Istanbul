import { createActions } from 'redux-actions';
import { UPDATE_LOGIN } from './contants';

export default createActions({
  [UPDATE_LOGIN]: (status, token) => {
    return {
      status,
      token
    };
  }
});
