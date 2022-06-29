import { useEffect, useState } from "react"

export const useSingleProdData = ( {prodId} ) => {
    
    const [singleProd, setSingleProd] = useState([])

    useEffect(() => {
        const fetchSingleData = async () => {
            const resp = await fetch(`https://api.mercadolibre.com//items?ids=${prodId}`)
            const data = await resp.json()
            setSingleProd(data)
        }
        fetchSingleData();
    }, [prodId])

    return singleProd
}