import Meta from "components/Meta"
import Layout from "components/Layout"
import Twitter from "components/Twitter"
import Facebook from "components/Facebook"

const aboutPage = () => {
    return (
        <Layout>
            <Meta title="about" />
            <Facebook />
            <Twitter />

            <p>about</p>
        </Layout>
    )
}

export default aboutPage
