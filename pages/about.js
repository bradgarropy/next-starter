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

            <p>This is the about page</p>
        </Layout>
    )
}

export default aboutPage
