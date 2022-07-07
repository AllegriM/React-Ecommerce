import { createContext, useState } from "react"

export const FavContext = createContext([])

export const FavContextProvider = ({ children }) => {

    const [favs, SetFavs] = useState([])
    
    // Add fav to favs state
    const addFav = (item) => {
        SetFavs(item)
    }

    // Remove fav to favs state
    const removeFav = (id) => {
        SetFavs(favs.filter((item) => item.id !== id))
    }

    return (
        <FavContext.Provider
            value={{
                favs,
                addFav,
                removeFav
            }}
        >
            {children}
        </FavContext.Provider>
    )

}