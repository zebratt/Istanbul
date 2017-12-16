import { handleActions } from 'redux-actions';
import { GET_REAL_NAME_STATUS } from './contants';

const initState = {
    hasRealName: false,
    idCard: ''
};

const reducer = handleActions(
    {
        [GET_REAL_NAME_STATUS]: (state, action) => {
            const { payload: {hasRealName, idCard} } = action;

            return { hasRealName: hasRealName, idCard: idCard };
        }
    },
    initState
);

export default reducer;
