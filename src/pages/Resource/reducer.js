/**
 * Created by xuejian.xu on 2017/8/11.
 */

import { handleActions } from 'redux-actions';
import { UPDATE_FILTER } from './contants';
import _cloneDeep from 'lodash/cloneDeep';

const initState = {
    filters: [
        {
            type: 'category',
            label: '类型',
            actived: 0,
            items: [
                { desc: '全部', key: 0 },
                { desc: '机器人', key: 1 },
                { desc: '焊接', key: 2 },
                { desc: '搬运', key: 3 }
            ]
        },
        {
            type: 'time',
            label: '时间',
            actived: 0,
            items: [
                { desc: '全部', key: 0 },
                { desc: '十分钟', key: 1 },
                { desc: '半小时', key: 2 }
            ]
        }
    ]
};

const reducer = handleActions(
    {
        [UPDATE_FILTER]: (state, action) => {
            const { payload } = action;

            const nState = _cloneDeep(state);

            nState.filters.forEach((row)=>{
                if(row.type === payload.type){
                    row.actived = payload.key;
                }
            })

            return nState;
        }
    },
    initState
);

export default reducer;
