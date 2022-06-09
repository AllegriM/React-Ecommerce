import React from "react";
import './main.css';
import { SliderBanner } from "./Slider/SliderBanner";
import { PayMethod } from "./PayMethod/PayMethod";
import { HomeItemProducts } from "./HomeItemProducts/HomeItemProducts";

export default function Main(props) {
    return (
        <main>
            <div className="counter">
                <button onClick={props.handleResta}>Resta</button>
                <h3>{props.count}</h3>
                <button onClick={props.handleSuma}>Suma</button>
            </div>
            <SliderBanner />
            <PayMethod />
            <div className="cards-related">
                <div className="cards-title">
                    <h2 className="card-title">Basado en tu última visita</h2>
                    <p className="text-blue">Ver historial</p>
                </div>
                <div className="product-cards">
                    <HomeItemProducts />
                </div>
            </div>
        </main>
    )
}