import { useState, useEffect } from "react";
import getReviewData from "../../helpers/getReviewData";


export const ReviewData = ({ prodId, prodTitle }) => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        getReviewData(prodId, setReview)
    }, [])

    let numberOfStars = [Math.round(reviews.rating_average)]

    return (
        <>
            <div className='opinions-section'>
                <h2>Opiniones sobre {prodTitle}</h2>
                <div className='general-opinion'>
                    <p>{reviews.rating_average}</p>
                    <div className='stars-container'>
                        {
                            
                        }
                    </div>
                    <p>Promedio entre {reviews.paging.total} opiniones</p>
                </div>
                <div className='stars-opinion'>

                </div>
            </div>
        </>
    )
}