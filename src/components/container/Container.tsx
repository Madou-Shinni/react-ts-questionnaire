import React from "react"
import styles from "./style.module.scss"

type Props = {}

const Container: React.FC<Props> = (props) => {
    return <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.left}>left</div>
            <div className={styles.main}>
                <div className={styles.canvas}>
                    <div style={{width: '100%',height: '900px'}}>
                        滚动
                    </div>
                </div>
            </div>
            <div className={styles.right}>right</div>
        </div>
    </div>
}

export default Container;