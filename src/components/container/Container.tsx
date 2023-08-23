import React from "react"
import styles from "./style.module.scss"

type Props = {}

const Container: React.FC<Props> = (props) => {
    return <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.left}>left</div>
            <div className={styles.main}>main</div>
            <div className={styles.right}>right</div>
        </div>
    </div>
}

export default Container;