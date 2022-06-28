import { createContext , useState } from "react";

export const ReviewContext = createContext([])

export const ReviewContextProvider = ({children}) =>{
    // estados y funciones 

    const [prodReviews, setReviewData] = useState([])

    const setProdReview = (item) =>{
        setReviewData(item)
    }

    return(
        <ReviewContext.Provider value={{
            prodReviews,
            setProdReview
        }}
        >
            {children}
        </ReviewContext.Provider>
    )
}