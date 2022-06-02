import React from "react";
import './main.css';
import Card from './Card';
import data from './data';

export default function Main(prop) {
    console.log(prop)
    const ProductsElements = data.map(product => {
        return <Card 
        key = {product.id}
        product = {product}
        // {...product} me deja pasar todo
        />
    })
    return (
        <main>
            <h1>{prop.greeting}</h1>
            <div className="img-slider">
                <img alt="product img" className="img" src={require("../../../imgs/banner2.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner3.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner1.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner4.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner5.webp")} />
            </div>
            <div className="pay-container">
                <div className="pay-methods">
                    <div className="pay-mains">
                        <div className="pay-group">
                            <a href="#" className="logo-credit">
                                <img alt="credit pay" className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg" />
                            </a>
                            <div className="pay-texts">
                                <div className="pay-method">Tarjeta de crédito</div>
                                <div className="pay-advice">Ver promociones bancarias</div>
                            </div>
                        </div>
                        <div className="pay-group">
                            <a href="#" className="logo-debit">
                                <img alt="debit pay" className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/debit-card.svg" />
                            </a>
                            <div className="pay-texts">
                                <div className="pay-method">Tarjeta de débito</div>
                                <div className="pay-advice">Ver más</div>
                            </div>
                        </div>
                        <div className="pay-group">
                            <a href="#" className="logo-credit2">
                                <img alt="mercado credito" className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg" />
                            </a>
                            <div className="pay-texts">
                                <div className="pay-method">Cuotas sin tarjeta</div>
                                <div className="pay-advice">Conocé Mercado Crédito</div>
                            </div>  
                        </div>
                        <div className="pay-group">
                            <a href="#" className="logo-agree">
                                <img alt="pago aceptado" className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg" />
                            </a>
                            <div className="pay-texts">
                                <div className="pay-method">Efectivo</div>
                                <div className="pay-advice">Ver más</div>
                            </div>
                        </div>
                    </div>
                    <div className="plus-info">
                        <div className="pay-plus">
                            <a href="#" className="logo-plus">
                                <img alt="ver mas" className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/view-more.svg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards-related">
                <div className="cards-title">
                    <h2 className="card-title">Basado en tu última visita</h2>
                    <p className="text-blue">Ver historial</p>
                </div>
                <div className="product-cards">
                    {ProductsElements}
                </div>
            </div>
        </main>
    )
}