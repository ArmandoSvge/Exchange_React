import React, { useState, useEffect } from "react";
import styles from "./HowWeWork.module.css";
import axios from "axios";

const HowWeWork = () => {
    const [exchangeRates, setExchangeRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [baseCurrency, setBaseCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [result, setResult] = useState(0);

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await axios.get("https://www.frankfurter.app/latest");
                setExchangeRates(response.data.rates);
                setBaseCurrency(Object.keys(response.data.rates)[0]);
                setTargetCurrency(Object.keys(response.data.rates)[1]);
            } catch (error) {
                console.error("Error fetching exchange rates:", error);
            }
        };
        fetchExchangeRates();
    }, []);

    const handleConvert = () => {
        const rate = exchangeRates[targetCurrency] / exchangeRates[baseCurrency];
        setResult(amount * rate);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Convertidor Monetario</h2>
            <div className={styles.exchangeForm}>
                <div className={styles.inputRow}>
                    <label htmlFor="amountInput" className={styles.label}>Cantidad: </label>
                    <input
                        id="amountInput"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                    />
                </div>
                <div className={styles.inputRow}>
                    <label htmlFor="baseCurrencySelect" className={styles.label}>De: </label>
                    <select
                        id="baseCurrencySelect"
                        value={baseCurrency}
                        onChange={(e) => setBaseCurrency(e.target.value)}
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputRow}>
                    <label htmlFor="targetCurrencySelect" className={styles.label}>A: </label>
                    <select
                        id="targetCurrencySelect"
                        value={targetCurrency}
                        onChange={(e) => setTargetCurrency(e.target.value)}
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={handleConvert} className={styles.convertButton}>Convertir</button>
            </div>
            <div className={styles.result}>
                {result !== 0 && (
                    <p>
                        {amount} {baseCurrency} = {result.toFixed(2)} {targetCurrency}
                    </p>
                )}
            </div>
        </div>
    );
};

export default HowWeWork;
