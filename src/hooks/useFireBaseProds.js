import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useFireBaseProds = () => {
    const [prodDB, setProdDB] = useState([])

    useEffect(()=>{
        const db = getFirestore()
        // Recibe tres parametros (database, nombre coleccion, id) si es UN solo item
        //Recibe 2 parametros (database, nombre coleccion) si son MUCHOS items
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection) //Esto es una promesa
            .then((data) => setProdDB(data.docs.map( item => ( {id: item.id, ...item.data()} ) ) ) )
            .catch((error) => console.log(error))
    }, [])

    return [prodDB]
}

