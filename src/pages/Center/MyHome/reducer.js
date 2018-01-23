import { handleActions } from 'redux-actions'
import { QUERY_FUND_DETAILS, QUERY_BALANCE } from './contants'
import _cloneDeep from 'lodash/cloneDeep'

const initState = {
    fundDetails: [],
    currentPageIndex: 0,
    total: 0,
    totalPages: 0,
    balance: 0
}

const reducer = handleActions(
    {
        [QUERY_FUND_DETAILS]: (state, action) => {
            const { payload: { content, totalElements, totalPages, number } } = action
            const nState = _cloneDeep(state)

            nState.fundDetails = content
            nState.total = totalElements
            nState.totalPages = totalPages
            nState.currentPageIndex = number

            return nState
        },
        [QUERY_BALANCE]: (state, action) => {
            const { payload } = action
            const nState = _cloneDeep(state)

            nState.balance = payload

            return nState
        }
    },
    initState
)

export default reducer
