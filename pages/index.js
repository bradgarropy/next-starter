import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const indexPage = () => (
    <Layout>
        <Meta title="next starter"/>
        <Facebook/>
        <Twitter/>

        <p>Hello Next.js</p>
    </Layout>
)

export default indexPage
