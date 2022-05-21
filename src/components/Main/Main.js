import React from "react";
import './main.css';
import Card from './card';


export default function Main() {
    return (
        <main>
            <div className="img-slider">
                <img className="img" src={require("../../imgs/banner2.webp")} />
                <img className="img" src={require("../../imgs/banner3.webp")} />
                <img className="img" src={require("../../imgs/banner1.webp")} />
                <img className="img" src={require("../../imgs/banner4.webp")} />
                <img className="img" src={require("../../imgs/banner5.webp")} />
            </div>
            <div className="pay-methods">
                <div href="#">
                    <a className="logo-credit" href="#">
                        <img className="pay-logo" src={require("../../imgs/credit-card.svg")} />
                    </a>
                    <div className="pay-texts">
                        <div className="pay-method">Tarjeta de crédito</div>
                        <div className="pay-advice">Ver promociones bancarias</div>
                    </div>
                </div>
                <div href="#">
                    <a className="logo-debit" href="#">
                        <img className="pay-logo" src={require("../../imgs/debit-card.svg")} />
                    </a>
                    <div className="pay-texts">
                        <div className="pay-method">Tarjeta de débito</div>
                        <div className="pay-advice">Ver más</div>
                    </div>
                </div>
                <div href="#">
                    <a className="logo-credit2" href="#">
                        <img className="pay-logo" src={require("../../imgs/mercado-creditsv2.svg")} />
                    </a>
                    <div className="pay-texts">
                        <div className="pay-method">Cuotas sin tarjeta</div>
                        <div className="pay-advice">Conocé Mercado Crédito</div>
                    </div>
                </div>
                <div href="#">
                    <a className="logo-agree" href="#">
                        <img className="pay-logo" src={require("../../imgs/payment-agreement.svg")} />
                    </a>
                    <div className="pay-texts">
                        <div className="pay-method">Efectivo</div>
                        <div className="pay-advice">Ver más</div>
                    </div>
                </div>
                <div href="#">
                    <a className="logo-plus" href="#">
                        <img className="pay-logo" src={require("../../imgs/view-more.svg")} />
                    </a>
                </div>
            </div>
            <div className="cards-related">
                <div className="cards-title">
                    <h2 className="card-title">Basado en tu última visita</h2>
                    <p className="text-blue">Ver historial</p>
                </div>
                <div className="product-cards">
                    <Card 
                        img = "https://http2.mlstatic.com/D_Q_NP_720535-MLA49306407961_032022-AB.webp"
                        price = "$ 3.600.000"
                        desc = "2016 | 52000km"
                        extrainfo = "Ford Mondeo 2.5 Se Automatico 170cv Unico."
                    />
                    <Card 
                        img = "https://http2.mlstatic.com/D_Q_NP_720535-MLA49306407961_032022-AB.webp"
                        price = "$ 3.600.000"
                        desc = "2016 | 52000km"
                        extrainfo = "Ford Mondeo 2.5 Se Automatico 170cv Unico."
                    />
                    <Card 
                        img = "https://http2.mlstatic.com/D_Q_NP_720535-MLA49306407961_032022-AB.webp"
                        price = "$ 3.600.000"
                        desc = "2016 | 52000km"
                        extrainfo = "Ford Mondeo 2.5 Se Automatico 170cv Unico."
                    />
                    <Card 
                        img = "https://http2.mlstatic.com/D_Q_NP_720535-MLA49306407961_032022-AB.webp"
                        price = "$ 3.600.000"
                        desc = "2016 | 52000km"
                        extrainfo = "Ford Mondeo 2.5 Se Automatico 170cv Unico."
                    />
                    <Card 
                        img = "https://http2.mlstatic.com/D_Q_NP_720535-MLA49306407961_032022-AB.webp"
                        price = "$ 3.600.000"
                        desc = "2016 | 52000km"
                        extrainfo = "Ford Mondeo 2.5 Se Automatico 170cv Unico."
                    />
                </div>
                {/* Cards */}
                
                {/* <div className="card">
                    <img className="card-img" src="https://http2.mlstatic.com/D_Q_NP_720535-MLA49306407961_032022-AB.webp" />
                    <div className="card-info">
                        <span className="card-price">$ 3.600.000</span>
                        <p className="card-desc">2016 | 52000km</p>
                        <p className="card-extrainfo">Ford Mondeo 2.5 Se Automatico 170cv Unico</p>
                    </div>
                </div> */}
            </div>
        </main>
    )
}