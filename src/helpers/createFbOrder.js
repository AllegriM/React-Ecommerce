import { addDoc, collection, getFirestore } from "firebase/firestore";

// Send order to Firebase 
export const sendOrder = ( cart, user ) => {

    let total = 0
    cart.forEach((item) => (total += Math.round((item.cantidadElegida * item.price))))
    const order = {}
        order.buyer = { name: user.displayName, phone: "11111", email: user.email }
        order.items = 
            cart.map(item => {
            const id = item.id
            const title = item.title
            const price = item.price * item.cantidadElegida
            const quantity = item.cantidadElegida
            const stock = item.available_quantity - item.cantidadElegida
        order.total = total
        return {id, title, price, quantity, stock}
        })
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        return addDoc(ordersCollection, order)
        
}

