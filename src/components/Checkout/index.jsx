import { useState } from 'react';
import { getFirestore } from '../firebase/';
import {useCartContext} from '../context/CartContext';
import firebase from "firebase/app";
import "firebase/firestore";

const CheckoutComponent = () => {
    const { total } = useCartContext()
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const { cart, clearCart } = useCartContext();
    const [orderId, setOrderId] = useState();


    const manejarCompra = (e) => {
        e.preventDefault()
        const datosCompra = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: email
            },
            date: firebase.firestore.FieldValue.serverTimestamp(),
            items: cart,
            total: total
        }

        const baseDeDatos = getFirestore()
        const OrderCollection = baseDeDatos.collection("orders")
        OrderCollection
            .add(datosCompra)
            .then(({ id }) => {
                clearCart();
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(console.log(datosCompra));
    }
    return (
        <>
            {
                orderId ?
                    <>
                        <section className="order">
                            <h2>Compra realizada con exito!</h2>
                            <p>Tu numero de orden es: <strong>{orderId}</strong> </p>

                        </section>
                    </>

                    :
                    <section className="checkout">
                        <div className="orderContainer">
                            <h1>Checkout</h1>

                            <form onSubmit={manejarCompra} className="formCheckout">
                                <div>
                                    <p>Nombre y Apellido:</p>
                                    <input value={nombre} onChange={(e) => { setNombre(e.target.value) }} type="text" required/>
                                </div>
                                <div>
                                    <p>Telefono:</p>
                                    <input value={telefono} onChange={(e) => { setTelefono(e.target.value) }} type="text" required/>
                                </div>
                                <div>
                                    <p>Correo Electrónico:</p>
                                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required/>
                                </div>
                                <button type="submit">Comprar</button>
                            </form>
                        </div>
                    </section>
            }
        </>
    )
}

export default CheckoutComponent;