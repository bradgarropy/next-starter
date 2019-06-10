import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"

const Navigation = props => {
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>

            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    )
}

Navigation.propTypes = {}

export default Navigation
