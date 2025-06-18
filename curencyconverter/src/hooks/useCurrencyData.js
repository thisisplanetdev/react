import { useState, useEffect } from "react";

function useCurrencyData(baseCurrency) {
    const [rates, setRates] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`
                ).then(console.log("fetched sucessfully"));
                const jsonData = await response.json();
                setRates(jsonData[baseCurrency] || {});
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setRates({});
            }
        };

        fetchData();
    }, [baseCurrency]);
    console.log(rates+" this is rates ")
    return rates; 
}

export default useCurrencyData;