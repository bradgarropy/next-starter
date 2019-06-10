import React from "react"
import Link from "next/link"

const Navigation = () => {
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

export default Navigation
