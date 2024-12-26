import { useState, ChangeEvent, FormEvent } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CryptoSearchForm() {
    const {cryptoCurrencies, fetchData} = useCryptoStore() 

    const [pair, setPair] = useState<Pair>({
        currency: "",
        cryptoCurency: "",
    })

    const [error, setError] = useState("")

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (Object.values(pair).includes("")) {
            setError("Todos los campos son obligatorios")
            return
        }
        setError("")
        fetchData(pair)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="field">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency}
                >
                    <option value={""}>-- SELECCIONAR --</option>
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptoCurency">Criptomoneda:</label>
                <select
                    name="cryptoCurency"
                    id="cryptoCurency"
                    onChange={handleChange}
                    value={pair.cryptoCurency}
                >
                    <option value={""}>-- SELECCIONAR --</option>
                    {cryptoCurrencies.map((crypto) => (
                        <option
                            key={crypto.CoinInfo.FullName}
                            value={crypto.CoinInfo.Name}
                        >
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Cotizar" />
        </form>
    )
}
