import React from "react";
import './main.css';
import Card from './card';
import data from './data';

export default function Main() {
    const ProductsElements = data.map(product => {
        return <Card 
        key = {product.id}
        product = {product}
        // {...product} me deja pasar todo
        />
    })
    return (
        <main>
            <div className="img-slider">
                <img className="img" src={require("../../../imgs/banner2.webp")} />
                <img className="img" src={require("../../../imgs/banner3.webp")} />
                <img className="img" src={require("../../../imgs/banner1.webp")} />
                <img className="img" src={require("../../../imgs/banner4.webp")} />
                <img className="img" src={require("../../../imgs/banner5.webp")} />
            </div>
            <div className="pay-container">
                <div className="pay-methods">
                    <div className="pay-mains">
                        <div className="pay-group" href="#">
                            <a className="logo-credit" href="#">
                                <img className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg" />
                            </a>
                            <div className="pay-texts">
                                <div className="pay-method">Tarjeta de crédito</div>
                                <div className="pay-advice">Ver promociones bancarias</div>
                            </div>
                        </div>
                        <div className="pay-group" href="#">
                            <a className="logo-debit" href="#">
                                <img className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/debit-card.svg" />
                            </a>
                            <div className="pay-texts">
                                <div className="pay-method">Tarjeta de débito</div>
                                <div className="pay-advice">Ver más</div>
                            </div>
                        </div>
                        <div className="pay-group" href="#">
                            <a className="logo-credit2" href="#">
                                <img className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg" />
                            </a>
                            <div className="pay-texts">
                                <div className="pay-method">Cuotas sin tarjeta</div>
                                <div className="pay-advice">Conocé Mercado Crédito</div>
                            </div>  
                        </div>
                        <div className="pay-group" href="#">
                            <a className="logo-agree" href="#">
                                <img className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg" />
                            </a>
                            <div className="pay-texts">
                                <div className="pay-method">Efectivo</div>
                                <div className="pay-advice">Ver más</div>
                            </div>
                        </div>
                    </div>
                    <div className="plus-info">
                        <div className="pay-plus" href="#">
                            <a className="logo-plus" href="#">
                                <img className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/view-more.svg" />
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