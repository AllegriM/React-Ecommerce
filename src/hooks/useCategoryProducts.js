import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const useCategoryProducts = ( category ) => {

    const [loading, setLoading] = useState(true)
    const [prodDB, setProdDB] = useState([])

    useEffect( ()=>{
        setLoading(true)
        const db = getFirestore()
        const queryCollection = query(collection(db, "items"), where("categoria", "==" , `${category}`));
        getDocs(queryCollection) //Esto es una promesa
            .then( data => {
                setProdDB(data.docs.map( item => ( {id: item.id, ...item.data()} ) ) );
                setLoading(false)
            } )
            .catch( error => console.log(error))
        }, [category])
    
    return [prodDB, loading]
    
}