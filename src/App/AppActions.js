import { createActions } from 'redux-actions'
import cons from './AppContants'

export default createActions({
    [cons.UPDATE_LOGIN]: (loginStatus, token, user) => {
        return {
            loginStatus,
            token,
            user
        }
    }
})
