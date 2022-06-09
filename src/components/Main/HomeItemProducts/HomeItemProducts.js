import data from '../cards/data.json';
import React, { useEffect, useState } from "react";
import Card from '../cards/Card';


export const HomeItemProducts = () => {
    const getFetch = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })
    }
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getFetch()
            .then((resp) => setProductos(resp))
            .catch((error) => console.log(error))
    }, [])
    console.log(productos)
    return (
        <>
            {productos.map( (product) => {
                    return <Card
                        key={product.id}
                        product={product}
                    // {...product} me deja pasar todo
                    />
                })
            }
        </>
    )
}