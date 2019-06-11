import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"

const Twitter = ({
    card = "summary",
    site = "@bradgarropy",
    title = "next starter",
    description = "⏭ next.js starter",
    image = "https://next-starter.bradgarropy.now.sh/twitter.png",
}) => {
    return (
        <Head>
            <meta name="twitter:card" content={card}/>
            <meta name="twitter:site" content={site}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
        </Head>
    )
}

Twitter.propTypes = {
    card: PropTypes.string,
    site: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Twitter
