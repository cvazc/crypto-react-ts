import CryptoSearchForm from "./components/CryptoSearchForm";

export default function App() {
    return (
        <>
            <div className="container">
                <h1 className="app-title">Cotizado de <span>Criptomonedas</span></h1>

                <div className="content">
                    <CryptoSearchForm />
                </div>
            </div>
        </>
    )
}
