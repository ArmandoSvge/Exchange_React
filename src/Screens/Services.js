import React from "react";
import styles from "./Services.module.css";
import ExchangeRatesTable from "../Components/ExchangeComponents";

const Services = () => {
    return (
        <div name="Services" className={styles.services}>
            <p>Nosotros nos encargamos de todo el tema monetario, confia.</p>
            <img
                className={`${styles.webImage}`}
                src={require("../assets/webImage.jpg")}
                alt="Web design"
            ></img>


            <div className={styles.exchangeComponents}>
                <ExchangeRatesTable />

            </div>

        </div>
    );
};

export default Services;
