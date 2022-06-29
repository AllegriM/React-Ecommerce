
import React from 'react'
import { EmptyStar } from './EmptyStar'
import { HalfStar } from './HalfStar'
import { Star } from './Star'

export const StarsCollection = ( {starsAmount} ) => {
    return (
        <div className='stars-container'>
            {
                <>
                    {
                        starsAmount >= 1 ? <Star /> :
                        starsAmount >= .5 ? <HalfStar /> : <EmptyStar />
                    }
                    {
                        starsAmount >= 2 ? <Star /> :
                        starsAmount >= 1.5 ? <HalfStar /> : <EmptyStar />
                    }
                    {
                        starsAmount >= 3 ? <Star /> :
                        starsAmount >= 2.5 ? <HalfStar /> : <EmptyStar />
                    }
                    {
                        starsAmount >= 4 ? <Star /> :
                        starsAmount >= 3.5 ? <HalfStar /> : <EmptyStar />
                    }
                    {
                        starsAmount >= 5 ? <Star /> :
                        starsAmount >= 4.5 ? <HalfStar /> : <EmptyStar />
                    }
                </>
            }
        </div>
    )
}

