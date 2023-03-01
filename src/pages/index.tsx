import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="next starter" />
            <p>home</p>
        </Layout>
    )
}

export default IndexPage
