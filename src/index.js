import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Cookies from 'js-cookie'
import { URL_QUERY_CUSTOMER_BY_TOKEN } from 'utils/urls'
import App from 'app/App'

// Init Store
import createAppStore from './store'

// Global variables
import 'utils/global'

async function Launch() {
    const token = Cookies.get('TOKEN')
    const initState = { token }

    if (token) {
        const { data } = await axios.post(URL_QUERY_CUSTOMER_BY_TOKEN, { token })

        Object.assign(initState, {
            loginStatus: true,
            userId: data.customerId,
            user: data
        })
    }

    const store = window.store = createAppStore(initState)

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
}

Launch()
