import Head from "next/head"
import PropTypes from "prop-types"
import {FC} from "react"

import config from "../../../package.json"

type MetaProps = {
    title: string
}

const Meta: FC<MetaProps> = ({title}) => {
    const {description, keywords} = config

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(", ")} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
}

export default Meta
