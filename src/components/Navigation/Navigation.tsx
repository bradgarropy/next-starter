import Link from "next/link"
import {FC} from "react"

import styles from "./Navigation.module.css"

const Navigation: FC = () => {
    return (
        <nav className={styles.navigation}>
            <Link href="/" passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.link}>Home</a>
            </Link>

            <Link href="/about" passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.link}>About</a>
            </Link>
        </nav>
    )
}

export default Navigation
