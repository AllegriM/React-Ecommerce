import data from './data.json';
import React, { useEffect, useState } from "react";
import Card from '../../Card/Card';


export const HomeItemProducts = () => {
    const getFetch = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 500)
        })
    }
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getFetch()
            .then((resp) => setProductos(resp))
            .catch((error) => console.log(error))
    }, [])
    return (
        <>
            {productos.map( (product) => {
                    return <Card
                        key={product.id}
                        prod={product}
                    // {...product} me deja pasar todo
                    />
                })
            }
        </>
    )
}