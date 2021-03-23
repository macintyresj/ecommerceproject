import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext()
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addCart = (item, quantity) => {
        //defino está función que me dice si en el carrito hay algún elemento con el mismo ID del producto que acabo de agregar
        const isInCart = cart.findIndex(product => product.item.id === item.item.id); 
        
        setItemQuantity(itemQuantity + parseInt(quantity)); 

        /*si está en el carrito => me devuelve el index del producto esto es un valor distinto de -1. 
        Luego a la cantidad del item en ese index se le suma la cantidad seleccionada*/

        if(isInCart !== -1) {
            const newCart = Array.from(cart);

            cart[isInCart].cantidad += item.cantidad;
            setCart(newCart); 
        } else {
            setCart([item, ...cart]);    //si da =-1 no estaba en el carrito => se lo agrego   
        }
        
        setTotal(total + (item.item.price  * item.cantidad))
    }

    const removeItem = (id, quantity, price) => { //sacar un producto del carrito 

        const arrayAfterRemove = cart.filter(product => product.item.id !== id); 

        setCart(arrayAfterRemove);
        setItemQuantity(itemQuantity - quantity); 
        setTotal(total - price);

    }

    const clearCart = () => { //vaciar carrito
        setCart([]);
        setItemQuantity(0);
        setTotal(0)
    }
    
console.log(cart);
    return (
        <CartContext.Provider value={{ //valores que voy a usar en toda app
            cart,
            itemQuantity, 
            addCart,
            removeItem, 
            clearCart,
            total
            }}>
            {children}
        </CartContext.Provider>
    )
    }


export default CartContextProvider;
