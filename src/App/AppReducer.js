import { handleActions } from 'redux-actions'
import cons from './AppContants'
import cloneDeep from 'lodash/cloneDeep'

const defaultInitState = {
    loginStatus: false,
    token: null,
    userId: null,
    user: null
}

export default function appReducerCreator(initState) {
    return handleActions(
        {
            [cons.UPDATE_LOGIN]: (state, action) => {
                const { payload: { loginStatus, user, token } } = action
                const nState = cloneDeep(state)

                return Object.assign(nState, action.payload, { userId: loginStatus ? user.customerId : null })
            }
        },
        Object.assign(defaultInitState, initState)
    )
}
