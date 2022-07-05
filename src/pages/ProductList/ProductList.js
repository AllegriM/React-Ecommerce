import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './productlist.css';
import Card from '../../components/Card/Card'
import { SearchForm } from "../../components/Nav/SearchForm";
import Navbar from "../../components/Nav/Navbar"


export default function ProductList() {

    const [products, setProducts] = useState([])

    let { keyword } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${keyword}`)
                const data = await resp.json()
                setProducts(data.results)
            }
            catch (error) {
                console.log('Fetch error: ', error)
            }
        }
        fetchData()
    }, [keyword])

    return (
        <>  
            <Navbar>
                <SearchForm />
            </Navbar>
            <div className="cards-related">
                <div className="cards-title">
                    <p>Usted esta buscando:</p><h2>{keyword}</h2>
                </div>
                <div className="product-cards search-products-list">
                    {products.map((prod) =>
                        <Card prod={prod} key={prod.id} />
                    )}
                </div>
            </div>
        </>
    )
}
