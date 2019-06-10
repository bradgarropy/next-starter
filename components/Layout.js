import React from "react"
import PropTypes from "prop-types"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Layout = props => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

Layout.propTypes = {}

export default Layout
