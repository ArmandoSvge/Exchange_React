import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExchangeRatesTable.css';

const ExchangeRatesTable = () => {
    const [rates, setRates] = useState({});

    useEffect(() => {
        const fetchRates = async () => {
            const response = await axios.get('https://www.frankfurter.app/latest');
            setRates(response.data.rates);
        };
        fetchRates();
    }, []);


    const halfLength = Object.keys(rates).length / 2;
    const firstHalf = Object.keys(rates).slice(0, halfLength);
    const secondHalf = Object.keys(rates).slice(halfLength);

    return (
        <div className="exchange-rates">

            <div className="exchange-rates-column">

                <table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {firstHalf.map((currency) => (
                            <tr key={currency}>
                                <td>{currency}</td>
                                <td>{rates[currency]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="exchange-rates-column">

                <table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {secondHalf.map((currency) => (
                            <tr key={currency}>
                                <td>{currency}</td>
                                <td>{rates[currency]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExchangeRatesTable;
