import './home.css';
import { PayMethod } from "../../components/Main/PayMethod";
import ProductSection from "../../components/Main/ProductSection";
import { SliderBanner } from "../../components/Main/SliderBanner";
import { sliderImages } from '../../components/Main/sliderData'
import { useItemProds } from "../../hooks/useItemProds";
import { useFireBaseProds } from "../../hooks/useFireBaseProds";
import { SearchForm } from "../../components/Nav/SearchForm";
import Navbar from "../../components/Nav/Navbar"

export default function Main() {

    const { products } = useItemProds();

    const [prodsDB] = useFireBaseProds("items");

    return (
        <>
            <Navbar>
                <SearchForm />
            </Navbar>
            <main>
                <SliderBanner elements={sliderImages} />
                <PayMethod />
                <ProductSection products={prodsDB.slice(0,5)} title='Basado en tu última visita' />
                <ProductSection products={products} title='Relacionado con tus visitas en Indumentaria' />
            </main>
        </>
    )
}
