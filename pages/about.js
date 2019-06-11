import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const aboutPage = () => {
    return (
        <Layout>
            <Meta title="about"/>
            <Facebook/>
            <Twitter/>

            <p>about</p>
        </Layout>
    )
}

export default aboutPage
