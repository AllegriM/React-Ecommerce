import './home.css';
import { PayMethod } from "../../components/Main/PayMethod";
import ProductSection from "../../components/Main/ProductSection";
import { SliderBanner } from "../../components/Main/SliderBanner";
import { sliderImages } from '../../components/Main/sliderData'
import { useItemProds } from "../../hooks/useItemProds";
import { useFireBaseProds } from "../../hooks/useFireBaseProds";

export default function Main() {

    const {products} = useItemProds();

    const [prodsDB] = useFireBaseProds();

    return (
        <main>
            <SliderBanner elements={sliderImages} />
            <PayMethod />
            <ProductSection products={prodsDB} title='Basado en tu última visita' />
            <ProductSection products={products} title='Relacionado con tus visitas en Indumentaria' />
        </main>
    )
}
