import { handleActions } from 'redux-actions';
import { UPDATE_LOGIN } from './contants';

const initState = {
    loginStatus: false
};

const reducer = handleActions(
    {
        [UPDATE_LOGIN]: (state, action) => {
            const { status } = action.payload;

            return { loginStatus: status };
        }
    },
    initState
);

export default reducer;
