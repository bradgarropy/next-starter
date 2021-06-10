import Facebook from "components/Facebook"
import Layout from "components/Layout"
import Meta from "components/Meta"
import Twitter from "components/Twitter"

const AboutPage = () => {
    return (
        <Layout>
            <Meta title="about" />
            <Facebook />
            <Twitter />

            <p>about</p>
        </Layout>
    )
}

export default AboutPage
