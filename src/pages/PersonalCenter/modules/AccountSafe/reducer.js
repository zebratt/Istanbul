import { handleActions } from 'redux-actions';
import { GET_REAL_NAME_STATUS } from './contants';

const initState = {
    hasRealName: false
};

const reducer = handleActions(
    {
        [GET_REAL_NAME_STATUS]: (state, action) => {
            const { payload } = action;

            return { hasRealName: payload };
        }
    },
    initState
);

export default reducer;
