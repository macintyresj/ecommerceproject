import './cartwidget.scss';
import React, {useState} from 'react';
import { useCartContext } from '../context/CartContext';
import {Link} from 'react-router-dom';

const CartWidgetComponent = () =>{

    const { cart, itemQuantity, removeItem, total } = useCartContext();
    const [showCart, setShowCart] = useState(false);

    return (
        <div> 
        <p className="fas fa-shopping-cart"onClick={() => setShowCart(true)}><i></i>{itemQuantity}</p>
            {//onClick mostrar contenido del carrito
                showCart &&
                <div className="openCart">
                    {cart.map((product, index) => {
                        return (
                            <div key={index} className="cartDetail">

                                <p><strong>{`${product.cantidad}  ${product.item.title}`}</strong></p>                        
                                <p>Precio: {product.item.price}</p>
                                <p>Total: {product.item.price * product.cantidad}</p>
                                <button onClick={() => removeItem(product.item.id, product.cantidad, 
                                    product.item.price * product.cantidad)}>Quitar del carrito</button>
                                
                            </div>
                        )
                    })}
                    <p><strong>Total: ${total}</strong></p>
                    <button onClick={() => setShowCart(false)} >
                        <Link to="/checkout" className="checkoutCart">Finalizar compra</Link>
                    </button>
                    <button onClick={() => setShowCart(false)}>Cerrar</button>
                </div>
            }
        
        </div>
    );

}
export default CartWidgetComponent;