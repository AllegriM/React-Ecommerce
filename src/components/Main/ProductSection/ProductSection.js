import { useEffect, useState } from "react"
import { HomeItemProducts } from "../HomeItemProducts/HomeItemProducts"
import fetchLastVisitData from "../../../helpers/getHomeProd";

export default function ProductSection () {

    const [products, setProd] = useState([])

    useEffect(() => {
        fetchLastVisitData(setProd)
    }, [])

    return (
        <div className="cards-related">
            <div className="cards-title">
                <h2 className="card-title">Basado en tu última visita</h2>
                <p className="text-blue">Ver historial</p>
            </div>
            <div className="product-slider">
                <HomeItemProducts data={products} />
            </div>
        </div>
    )
}