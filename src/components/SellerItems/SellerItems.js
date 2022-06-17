import { useEffect, useState } from "react"
import getSellerID from "../../helpers/getSellerProducts"
import { ProductCard } from '../ProductCard/ProductCard'
import { SliderBanner } from "../Slider/SliderBanner"

export const SellerItems = ({ prodId }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getSellerID(prodId, setItems)
    }, [])

    return (
        <>
            <div className='prod-description'>
                <button className='arrowPrevImg arrowImgs'>
                    <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.9)"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="#3483FA"></path></svg>
                </button>
                {
                    items.map((prod) => {
                        return (
                            <ProductCard data={prod} key={prod.id} />
                        )
                    })
                }
                <button className='arrowNextImg arrowImgs'>
                    <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.9)"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="#3483FA"></path></svg>
                </button>
            </div>
        </>
    )
}