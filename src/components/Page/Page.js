import React from 'react'
import Header from 'components/Header'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer/Footer'

export default class Page extends React.Component {
    render() {
        return (
            <div className="g-page" id={this.props.id}>
                <Header />
                <NavBar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
