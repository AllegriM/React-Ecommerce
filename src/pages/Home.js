import React, { useEffect, useState } from "react";
import './main.css';
import { PayMethod } from "../components/Main/PayMethod/PayMethod";
import ProductSection from "../components/Main/ProductSection/ProductSection";


import { SliderBanner } from "../components/Slider/SliderBanner";
import { sliderImages } from '../components/Slider/sliderData'

export default function Main(props) {

    return (
        <main>
            <SliderBanner elements={sliderImages} />
            <PayMethod />
            <ProductSection />
        </main>
    )
}
