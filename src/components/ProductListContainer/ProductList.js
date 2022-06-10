import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../Main/main.css';
import { ProductCard } from '../ProductCard/ProductCard';


export default function ProductList(props) {
    const [products, setProducts] = useState([])

    let {keyword} = useParams();

    useEffect(() => {     
        const fetchData = async () => {
            const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${keyword}`)
            const data = await resp.json()
            setProducts(data.results)
        }
        fetchData()
    }, [keyword])

    return (
        <>
            <div className="cards-related">
                <div className="cards-title">
                    <p>Usted esta buscando:</p><h4 lassName="card-title"> {keyword}</h4>
                </div>
                <div className="product-cards">
                    {products.map((product) =>
                        <ProductCard data={product} />
                    )}
                </div>
            </div>
        </>
    )
}
