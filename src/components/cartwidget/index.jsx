import './cartwidget.scss';
import React, {useState} from 'react';
import {useCartContext} from '../context/CartContext';

const CartWidgetComponent = () =>{

    const { cart, itemQuantity, removeItem } = useCartContext();
    const [showCart, setShowCart] = useState(false);

    return (
        <div>
        <p><i className="fas fa-shopping-cart" onClick={() => setShowCart(true)}></i>{itemQuantity}</p>
            {
                showCart &&
                <div >
                    {cart.map((product, index) => {
                        return (
                            <div key={index}>
                                <p><strong>{product.item.title}</strong></p>
                                <p>Cantidad: {product.cantidad}</p>
                                <p>Precio: {product.item.price}</p>
                                <p>Total: {product.item.price * product.cantidad}</p>
                                <button onClick={() => removeItem(product.item.id, product.cantidad, product.item.price * product.cantidad)}>X</button>
                            </div>
                        )
                    })}
                    <button onClick={() => setShowCart(false)}>Cerrar</button>
                </div>
            }
        
        </div>
    );

}
export default CartWidgetComponent;