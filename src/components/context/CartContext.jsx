import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext()
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addCart = (item, quantity) => {
        const isInCart = cart.findIndex(product => product.item.id === item.item.id);
        
        setItemQuantity(itemQuantity + parseInt(quantity));
       
        // console.log(itemQuantity);
       
        if(isInCart !== -1) {
            const newCart = Array.from(cart);

            cart[isInCart].cantidad += item.cantidad;
            setCart(newCart); 
        } else {
            setCart([item, ...cart]);            
        }
        
        setTotal(total + (item.item.price  * item.cantidad))
    }

    const removeItem = (id, quantity, price) => {

        const arrayAfterRemove = cart.filter(product => product.item.id !== id);

        setCart(arrayAfterRemove);
        setItemQuantity(itemQuantity - quantity);
        setTotal(total - price);

    }

    const clearCart = () => {
        setCart([]);
        setItemQuantity(0);
        setTotal(0)
    }
    
console.log(cart);
    return (
        <CartContext.Provider value={{
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
