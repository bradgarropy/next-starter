import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"

const Facebook = ({
    url = "https://github.com/bradgarropy/next-starter",
    type = "website",
    title = "next starter",
    description = "⏭ next.js starter",
    image = "https://github.com/bradgarropy/next-starter/facebook.png",
}) => {
    return (
        <Head>
            <meta property="og:url" content={url}/>
            <meta property="og:type" content={type}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
        </Head>
    )
}

Facebook.propTypes = {
    url: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Facebook
