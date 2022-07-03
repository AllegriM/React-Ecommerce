import { addDoc, collection, getFirestore } from "firebase/firestore";



export const createAccount = ( {firstName, lastName, email, password} ) => {
    const account = {}
        account.name = firstName,
        account.lastname = lastName,
        account.email = email,
        account.password = password
        const db = getFirestore()
        const ordersCollection = collection(db, "logIn")
        console.log(account)
        return addDoc(ordersCollection, account)
}
