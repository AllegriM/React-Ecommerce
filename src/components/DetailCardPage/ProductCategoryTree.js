import { useEffect, useState } from "react"
import setCategoryPath from "../../helpers/getCategoryPath"
import { Link } from "react-router-dom"
import '../ListProductDetailCard/product.css'

export default function CategoryPath({ prodID }) {

    // Set the category tree above product card detail
    const [categories, setCategory] = useState([])

    useEffect(() => {
        setCategoryPath(prodID, setCategory)
    }, [prodID])

    return (
        <div className="category-path">
            <Link to='' className="volver-listado">Volver al listado</Link>
            <div className="catPath-cont">
                {
                    categories.map((cat) => {
                        return (
                            <div className="cat-cont" key={cat.id}>
                                <p className="prod-category">{cat.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}