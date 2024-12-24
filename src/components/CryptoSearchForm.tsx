import { currencies } from "../data"

export default function CryptoSearchForm() {
    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" id="currency">
                    <option>-- SELECCIONAR --</option>
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptocurrency">Criptomoneda:</label>
                <select name="cryptocurrency" id="cryptocurrency">
                    <option>-- SELECCIONAR --</option>
                </select>
            </div>

            <input type="submit" value="Cotizar" />
        </form>
    )
}
