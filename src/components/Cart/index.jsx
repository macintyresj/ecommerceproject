import React, {  useContext } from 'react'
import { CartContext }  from '../../components/context/CartContext'


const CartComponent = () => {
    
    const CartContextUse = useContext (CartContext)

    // console.log(CartContextUse);


    return (
        <h1>CARRITO</h1>
    )
}


export default CartComponent;