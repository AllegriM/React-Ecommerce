import { createContext , useState } from "react";

export const ReviewContext = createContext([])

export const ReviewContextProvider = ({children}) =>{
    // State & Functions

    const [prodReviews, setReviewData] = useState([])

    const setProdReview = (item) =>{
        return setReviewData(item)
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