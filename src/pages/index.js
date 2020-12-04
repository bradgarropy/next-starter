import Meta from "components/Meta"
import Layout from "components/Layout"
import Twitter from "components/Twitter"
import Facebook from "components/Facebook"

const indexPage = () => (
    <Layout>
        <Meta title="next starter" />
        <Facebook />
        <Twitter />

        <p>home</p>
    </Layout>
)

export default indexPage
