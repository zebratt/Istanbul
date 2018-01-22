import React from 'react'
import Header from 'components/Header'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer/Footer'
import { connect } from 'react-redux'

@connect(state => {
    const { App: {loginStatus} } = state

    return { loginStatus }
})
export default class Page extends React.Component {
    render() {
        const { id, needLogin = false, loginStatus, children } = this.props
        let body = children

        if (needLogin && !loginStatus) {
            body = <div>请先登录!</div>
        }

        return (
            <div className="g-page" id={id}>
                <Header />
                <NavBar />
                {body}
                <Footer />
            </div>
        )
    }
}
