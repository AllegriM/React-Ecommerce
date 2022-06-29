import { useEffect, useState } from "react"
import fetchLastVisitData from "../helpers/getHomeProd";

export const useItemProds = () => {
    const [products, setProd] = useState([])

    useEffect(() => {
        fetchLastVisitData(setProd)
    }, [])

    return {products}
}
