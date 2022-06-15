import React, { useEffect, useState } from "react";
import './main.css';
import { SliderBanner } from "./Slider/SliderBanner";
import { PayMethod } from "./PayMethod/PayMethod";
import ProductSection from "./ProductSection/ProductSection";

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
            <ProductSection  />
        </main>
    )
}
