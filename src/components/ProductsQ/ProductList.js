import React, { useState, useEffect } from 'react'
import '../Main/main.css';

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
                        <div className="card" key={product.id}>
                            <img className="card-img" src={product.thumbnail} alt="product descriptive img"/>
                            <div className="card-info">
                                <span className="card-price">{`$${product.price}`}</span>
                                <p className="card-extrainfo">{product.title}</p>
                                <p className="card-extrainfo">{product.address.city_name} - {product.address.state_name}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
