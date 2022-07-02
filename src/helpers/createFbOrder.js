import { addDoc, collection, getFirestore } from "firebase/firestore";



export const sendOrder = ( cart ) => {
    let total = 0
    cart.forEach((item) => (total += Math.round((item.cantidadElegida * item.price))))
    const order = {}
        order.buyer = { name: "Marco", phone: "11111", email: "aaaa@aaaa.com" }
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
