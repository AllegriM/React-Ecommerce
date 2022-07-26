import { addDoc, collection, getFirestore } from "firebase/firestore";

// Send order to Firebase 
export const sendOrder = ( cart, user ) => {
    console.log(user)
    let total = 0
    cart.forEach((item) => (total += Math.round((item.selectedQuantity * item.price))))
    const order = {}
        order.buyer = { name: user.name, lastname: user.lastname, phone: user.phone, email: user.email }
        order.items = 
            cart.map(item => {
            const id = item.id
            const title = item.title
            const price = item.price * item.selectedQuantity
            const quantity = item.selectedQuantity
            const stock = item.available_quantity - item.selectedQuantity
        order.total = total
        return {id, title, price, quantity, stock}
        })
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        return addDoc(ordersCollection, order)
        
}

