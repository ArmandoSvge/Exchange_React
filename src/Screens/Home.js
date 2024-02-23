import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div name="Home" className={styles.home}>
            <div className={styles.titleContainer}>
                <p>
                    Convierte tu <br />
                    <b>dinero</b>
                </p>
                <p>
                    Los mejores <br />
                    <b>convirtiendo dinero</b>
                </p>
            </div>
            <div className={styles.ctaContainer}>
                <Link
                    to="Contact"
                    smooth
                    duration={500}
                    className={styles.callToAction}
                >
                    Contacta con nosotros
                </Link>
                <Link
                    to="Services"
                    smooth
                    duration={500}
                    className={styles.callToAction}
                >
                    Servicios Monetarios
                </Link>
            </div>
        </div>
    );
};

export default Home;