import { combineReducers } from 'redux';

// reducers
import login from 'pages/Login/reducer';
import resource from 'pages/Resource/reducer';

export default combineReducers({ login, resource });
