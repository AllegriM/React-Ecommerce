import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useFireBaseProds = () => {
    const [prodDB, setProdDB] = useState([])

    useEffect(()=>{
        const db = getFirestore()
        // Receive 3 parameters (database, name collection, id) if is only 1  item
        //Receives 2 parameters (database, name collection) if there are more than 1 item
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection) //Esto es una promesa
            .then((data) => setProdDB(data.docs.map( item => ( {id: item.id, ...item.data()} ) ) ) )
            .catch((error) => console.log(error))
    }, [])

    return [prodDB]
}

