import { createContext, useEffect, useState } from "react";

export const currencyContext = createContext();

export const CurrencyProvider = ({children}) => {
    const [currency, setCurrency] = useState( JSON.parse(localStorage.getItem('currency')) || {
        "name": "USD",
        "rate": 1
    })

    useEffect(() => {
        localStorage.setItem('currency', JSON.stringify(currency))
    }, [currency])

    return (
        <currencyContext.Provider value={[currency, setCurrency]}>
            {children}
        </currencyContext.Provider>
    )
}
