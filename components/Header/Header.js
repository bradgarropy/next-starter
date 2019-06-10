import React from "react"
import PropTypes from "prop-types"
import Navigation from "./Navigation"

const Header = props => {
    return (
        <header>
            <Navigation/>
        </header>
    )
}

Header.propTypes = {}

export default Header
