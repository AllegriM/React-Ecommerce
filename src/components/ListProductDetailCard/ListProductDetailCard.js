import { useParams } from 'react-router-dom';
import { ReviewContextProvider } from '../../Context/reviewData';
import { useSingleProdData } from '../../hooks/useSingleProdData';
import { ProductCardDetail } from '../../pages/DetailCard/ProductDetailCard';
import { SearchForm } from "../../components/Nav/SearchForm";
import Navbar from "../../components/Nav/Navbar"
import './product.css'

export default function ProductDetailCard() {

    let { prodId } = useParams();

    // Using a custom hook
    const singleProd = useSingleProdData( { prodId } )

    return (
        <>
            <Navbar>
                <SearchForm />
            </Navbar>
            <ReviewContextProvider>
                {singleProd.map((data =>
                    <ProductCardDetail key={data.body.id} data={data.body} />
                ))
                }
            </ReviewContextProvider>
        </>
    )
}
