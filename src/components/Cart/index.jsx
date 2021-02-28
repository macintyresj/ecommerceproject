import React, {  useCartContext } from '../../components/context/CartContext';
import {Link} from 'react-router-dom'

const CartComponent = () => {
    
        const {cart, removeItem, clearCart, total} = useCartContext();

        return (
            <div className="carrito">
                <h1>Carrito</h1>
                {
                    cart.length > 0 ?
                    <div>
                        <div>
                        {cart.map((product, index) => {
                            return (
                                <div key={index}>
                                    <p><strong>{product.item.name}</strong></p>
                                    <p>Cantidad: {product.cantidad}</p>
                                    <p>Precio: ${product.item.price}</p>
                                    <p>Subtotal: ${product.item.price * product.cantidad}</p>
                                    <button onClick={() => removeItem(product.item.id, product.cantidad, product.item.price * product.cantidad)}>X</button>
                                </div>
                            )
                        })}
                        </div>
                        <div className="total__botones">
                        <hr></hr>
                        <p><strong>Total: ${total}</strong></p>
                        
                        {cart.length > 0 && <button className="carrito_vacio" onClick={clearCart}>Vaciar carrito</button>}
                        
                        </div>
                    </div> :
                    <>
                        <div className="carritoVacioMensaje">
                            <p>El carrito está vacío</p>
                            <Link to="/">Volver al inicio</Link>
                        </div>
                    </>
                }
            </div>
        )
    }
export default CartComponent;
