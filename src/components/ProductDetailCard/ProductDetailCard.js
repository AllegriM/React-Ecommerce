import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AmountContextProvider } from '../Context/amountSelContext';
import { ReviewContextProvider } from '../Context/reviewData';
import { ProductCardDetail } from '../ProductCardDetail/ProductCardDetail';
import './product.css'

export default function ProductDetailCard() {

    const [singleProd, setSingleProd] = useState([])

    let {prodId} = useParams();

    useEffect( () =>{
        const fetchSingleData = async () => {
            const resp = await fetch(`https://api.mercadolibre.com//items?ids=${prodId}`)
            const data = await resp.json()
            setSingleProd(data)
        }
        fetchSingleData();
    }, [prodId])

    return (
        <> 
            
            <AmountContextProvider>
                <ReviewContextProvider>
                    {singleProd.map( (data => 
                        <ProductCardDetail key={data.body.id} data={data.body} />
                        ))
                    }
                </ReviewContextProvider>
            </AmountContextProvider>
        </>
    )
}
