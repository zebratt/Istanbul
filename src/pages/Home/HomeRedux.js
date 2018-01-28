import { createActions, handleActions } from 'redux-actions'
import { URL_QUERY_RANDOM_INFO, URL_QUERY_FIXED_INFO } from 'utils/urls'

const GET_RANDOM_INFO = 'GET_RANDOM_INFO'
const GET_FIXED_INFO = 'GET_FIXED_INFO'
const GET_NEWS = 'GET_NEWS'

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
    },
    [GET_NEWS]: async () => {
        const res = await axios.get('/news/api/roll/get?pageid=155&lid=1686&num=10&page=1')

        return res.result.data
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
        },
        [GET_NEWS]: (state, action) => {
            state.news = action.payload

            return Object.assign({}, state)
        }
    },
    {
        randoms: [],
        fixes: [],
        news: []
    }
)
