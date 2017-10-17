/**
 * Created by xuejian.xu on 2017/8/11.
 */

import {createActions} from 'redux-actions';
import {UPDATE_FILTER} from './contants';

export default createActions({
    [UPDATE_FILTER] : (type, key)=>{
        return {
            type,
            key
        }
    }
})
