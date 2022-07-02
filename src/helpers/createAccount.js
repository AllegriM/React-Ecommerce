import { addDoc, collection, getFirestore } from "firebase/firestore";



export const createAccount = ( {name, lastName, email, password} ) => {
    const account = {}
        account.email = email 
        account.lastname = lastName
        account.name = name,
        account.password = password
        const db = getFirestore()
        const ordersCollection = collection(db, "logIn")
        return addDoc(ordersCollection, account)
}
