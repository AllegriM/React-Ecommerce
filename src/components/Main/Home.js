import React from "react";
import './main.css';
import Card from './cards/Card';
import data from './cards/data';
import { SliderBanner } from "./Slider/SliderBanner";
import { PayMethod } from "./PayMethod/PayMethod";

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
            <SliderBanner  />
            <PayMethod />
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