import Footer from "components/Footer"
import Header from "components/Header"
import {FC, ReactNode} from "react"

import styles from "./Layout.module.css"

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
