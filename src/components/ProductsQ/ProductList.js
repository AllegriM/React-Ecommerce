import React, { useState, useEffect } from 'react'
import '../Main/main.css';
import { ProductCard } from './ProductCard';

export const ProductList = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {     
        const fetchData = async () => {
            const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${props.keyword}`)
            const data = await resp.json()
            setProducts(data.results)
        }
        fetchData()
    }, [props.keyword])
    return (
        <>
            <div className="cards-related">
                <div className="cards-title">
                    <h2 className="card-title">Basado en tu última visita</h2>
                    <p className="text-blue">Ver historial</p>
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