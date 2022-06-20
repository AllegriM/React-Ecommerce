import { useState, useEffect } from "react";
import getReviewData from "../../helpers/getReviewData";
import { EmptyStar } from "../Star/EmptyStar";
import { HalfStar } from "../Star/HalfStar";
import { Star } from "../Star/Star";
import { Progress } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'


export const ReviewData = ({ prodId, prodTitle }) => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        getReviewData(prodId, setReview)
    }, [])

    // let total = reviews.paging.total
    let numberOfStars = (reviews.rating_average)
    let total = reviews.paging?.total

    return (
        <>
            {
                reviews.paging?.total === 0 ? null 
                :
                <div className="opinions-section">
                <h2 className="opinion-title">Opiniones sobre {prodTitle}</h2>
                <div className='opinions-rating'>
                    <div className='general-opinion'>
                        <p>{reviews.rating_average}</p>
                        <div className='stars-container'>
                            {
                                <>
                                    {
                                        numberOfStars >= 1 ? <Star /> :
                                            numberOfStars = .5 ? <HalfStar /> : <EmptyStar />
                                    }
                                    {
                                        numberOfStars >= 2 ? <Star /> :
                                            numberOfStars = 1.5 ? <HalfStar /> : <EmptyStar />
                                    }
                                    {
                                        numberOfStars >= 3 ? <Star /> :
                                            numberOfStars = 2.5 ? <HalfStar /> : <EmptyStar />
                                    }
                                    {
                                        numberOfStars >= 4 ? <Star /> :
                                            numberOfStars = 3.5 ? <HalfStar /> : <EmptyStar />
                                    }
                                    {
                                        numberOfStars >= 5 ? <Star /> :
                                            numberOfStars = 4.5 ? <HalfStar /> : <EmptyStar />
                                    }
                                </>
                            }
                        </div>
                        <span>{reviews.paging?.total === undefined ? `` : `Promedio entre ${reviews.paging.total} opiniones`}</span>
                    </div>
                    <div className='stars-opinion'>
                        {
                            <>
                                <Progress mb='.5em' aria-valuemax={total} value={reviews.rating_levels?.five_star} size='sm' />
                                <Progress mb='.5em' aria-valuemax={total} value={reviews.rating_levels?.four_star} size='sm' />
                                <Progress mb='.5em' aria-valuemax={total} value={reviews.rating_levels?.three_star} size='sm' />
                                <Progress mb='.5em' aria-valuemax={total} value={reviews.rating_levels?.two_star} size='sm' />
                                <Progress mb='.5em' aria-valuemax={total} value={reviews.rating_levels?.one_star} size='sm' />
                            </>
                        }
                    </div>
                </div>
                <div className="opinions-written">
                    {
                        reviews.reviews?.map((review) => {
                            return (
                                <div className="clients-review" key={review.id}>
                                    <div className="client-stars">
                                        {
                                            review.rate >= 1 ? <Star /> : <EmptyStar />
                                        }
                                        {
                                            review.rate >= 2 ? <Star /> : <EmptyStar />
                                        }
                                        {
                                            review.rate >= 3 ? <Star /> : <EmptyStar />
                                        }
                                        {
                                            review.rate >= 4 ? <Star /> : <EmptyStar />
                                        }
                                        {
                                            review.rate >= 5 ? <Star /> : <EmptyStar />
                                        }
                                    </div>
                                    <h3>{review.title}</h3>
                                    <p>{review.content}<span>{review.date_created.slice(0, 10)}</span></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            }
        </>
    )
}