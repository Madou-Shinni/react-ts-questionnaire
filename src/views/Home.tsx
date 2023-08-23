import React from "react"
import styles from "./style.module.scss"
import Header from "../components/header/Header";
import Container from "../components/container/Container";

type Props = {}

const Home: React.FC<Props> = (props) => {
    return <div className={styles.home}>
        <Header />
        <Container />
    </div>
}

export default Home;