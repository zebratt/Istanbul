import { createActions, handleActions } from 'redux-actions'
import { URL_QUERY_RANDOM_INFO, URL_QUERY_FIXED_INFO } from 'utils/urls'

const GET_RANDOM_INFO = 'GET_RANDOM_INFO'
const GET_FIXED_INFO = 'GET_FIXED_INFO'

export const actions = createActions({
    [GET_RANDOM_INFO]: async phone => {
        const res = await axios.post(URL_QUERY_RANDOM_INFO, {
            phoneId: phone
        })

        return res.data
    },
    [GET_FIXED_INFO]: async () => {
        const res = await axios.post(URL_QUERY_FIXED_INFO)

        return res.data
    }
})

export const reducer = handleActions(
    {
        [GET_RANDOM_INFO]: (state, action) => {
            state.randoms = action.payload

            return Object.assign({}, state)
        },
        [GET_FIXED_INFO]: (state, action) => {
            state.fixes = action.payload

            return Object.assign({}, state)
        }
    },
    {
        randoms: [],
        fixes: []
    }
)
