import React, { createContext, useState } from "react";


export const CartContext = createContext()

// console.log(CartContext);

function CartContextProvider({children}) {
    
    const [cart, setCart] = useState([])

    const addCart = (item) => {
        setCart(item);
        
        // if (isInCart(item.item.id) === -1){
        //     setCart(item)
           
        // } else{
            
        }
 console.log(cart)


        // const isInCart = cart.some(el => el.item.id === item.id);

        // if (isInCart) {
        //     cart.forEach(el => { if (el.item.id === item.id) {
        //         const newCart = cart.filter(el => el.item.id !== item.id);
        //             setCart([
        //                 ...newCart,
        //                 {
        //                     item: item,
        //                     quantity: el.quantity + parseInt(contador),
        //                 },
        //             ]);
        //         }
        //     });
        // } else {
        //     setCart([...cart, { item: item, quantity: parseInt(contador) }]);
        // }

    // }
    
    // const isInCart= (id) =>{
    //     return cart.findIndex(prod => prod.id === id);
    // }



return(
    <CartContext.Provider value= {{
        cart,
        addCart
    }}>
        {children}

    </CartContext.Provider>

)

}

export default CartContextProvider;