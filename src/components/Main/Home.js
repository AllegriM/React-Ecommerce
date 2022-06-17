import React, { useEffect, useState } from "react";
import './main.css';
import { PayMethod } from "./PayMethod/PayMethod";
import ProductSection from "./ProductSection/ProductSection";


import { SliderBanner } from "../Slider/SliderBanner";
import { sliderImages } from '../Slider/sliderData'

export default function Main(props) {

    return (
        <main>
            <div className="counter">
                <button onClick={props.handleResta}>Resta</button>
                <h3>{props.count}</h3>
                <button onClick={props.handleSuma}>Suma</button>
            </div>
            <SliderBanner elements={sliderImages} />
            <PayMethod />
            <ProductSection />
        </main>
    )
}
