import React, { useEffect, useState } from "react";
import './main.css';
import { PayMethod } from "../components/Main/PayMethod/PayMethod";
import ProductSection from "../components/Main/ProductSection/ProductSection";
import { SliderBanner } from "../components/Slider/SliderBanner";
import { sliderImages } from '../components/Slider/sliderData'
import { useItemProds } from "../hooks/useItemProds";
import { useFireBaseProds } from "../hooks/useFireBaseProds";

export default function Main() {

    const {products} = useItemProds();

    const [prodsDB] = useFireBaseProds();

    console.log(prodsDB)

    return (
        <main>
            <SliderBanner elements={sliderImages} />
            <PayMethod />
            <ProductSection products={prodsDB} title='Basado en tu última visita' />
            <ProductSection products={products} title='Relacionado con tus visitas en Indumentaria' />
        </main>
    )
}
