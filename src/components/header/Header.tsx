import React from "react"
import styles from "./style.module.scss"

type Props = {}

const Header: React.FC<Props> = (props) => {
    return <div className={styles.header}>
        header
    </div>
}

export default Header;