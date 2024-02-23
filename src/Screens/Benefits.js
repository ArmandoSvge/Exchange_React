import React from "react";
import styles from "./Benefits.module.css";
import { FiDollarSign } from "react-icons/fi";
import { FaExchangeAlt } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const Benefits = () => {
    return (
        <div name="Benefits" className={styles.benefits}>
            <h2 className={styles.benefitTitle}>
                Beneficios de la Conversión Monetaria
            </h2>
            <p>
                Acceso a mercados globales <FiDollarSign />
            </p>
            <p>
                Intercambio de divisas conveniente <FaExchangeAlt />
            </p>
            <p>
                Seguimiento de tendencias de divisas <BsGraphUp />
            </p>
        </div>
    );
};

export default Benefits;
