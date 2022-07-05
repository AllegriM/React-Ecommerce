import { collection, getDocs, getFirestore } from "firebase/firestore";


export const getOrder = async() => {
    const db = getFirestore()
    const colRef = collection(db, 'orders')
    return await getDocs(colRef)
}  