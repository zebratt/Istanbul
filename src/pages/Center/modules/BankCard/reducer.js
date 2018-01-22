import { handleActions } from 'redux-actions'
import cons  from './contants'
import _cloneDeep from 'lodash/cloneDeep'

const initState = {
    bankcards: []
}

const reducer = handleActions(
    {
        [cons.QUERY_BANK_CARD]: (state, action) => {
            const { payload: bankcards } = action
            const nState = _cloneDeep(state)

            nState.bankcards = bankcards 

            return nState
        }
    },
    initState
)

export default reducer
