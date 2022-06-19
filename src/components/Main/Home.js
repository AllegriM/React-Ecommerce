import React, { useEffect, useState } from "react";
import './main.css';
import { PayMethod } from "./PayMethod/PayMethod";
import ProductSection from "./ProductSection/ProductSection";


import { SliderBanner } from "../Slider/SliderBanner";
import { sliderImages } from '../Slider/sliderData'

export default function Main(props) {

    return (
        <main>
            <SliderBanner elements={sliderImages} />
            <PayMethod />
            <ProductSection />
        </main>
    )
}
