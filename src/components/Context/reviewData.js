import { createContext, useContext, useState } from "react";
import { AmountContext } from "./amountSelContext";

export const ReviewContext = createContext([])

export const useReviewContext = () => useContext(ReviewContext)

export const ReviewContextProvider = ({children}) =>{
    // estados y funciones 

    const [reviewData, setReviewData] = useState([])

    const setProdReview = (item) =>{
        setReviewData(item)
    }

    return(
        <ReviewContext.Provider value={{
            reviewData,
            setProdReview
        }}
        >
            {children}
        </ReviewContext.Provider>
    )
}