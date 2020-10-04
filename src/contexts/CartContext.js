import { createContext } from "react"
import React, {useState, useReducer} from 'react'
import { CartReducer, updateCart } from './CartReducer.js';

export const CartContext = React.createContext()

// Si existe cart en localStorage, lo traemos y lo convertimos en json, si no, se inicia storage como array vacío
const storageCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialCart = { cartItems: storageCart, ...updateCart(storageCart), checkout: false };

export const CartProvider = ({children}) => {

    // const [cart, setCart] = useState([]);

    const [stateCar, dispatch] = useReducer(CartReducer, initialCart)

    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProduct = payload => {
        dispatch({type: 'ADD', payload})
    }

    const removeProduct = payload => {
        dispatch({type: 'REMOVE', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const handleCheckout = () => {
        console.log('CHECKOUT', stateCar);
        dispatch({type: 'CHECKOUT'})
    }

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...stateCar
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );

    // return <CartContext.Provider value={[cart, setCart]}>
    //     {props.children}
    // </CartContext.Provider>
}

// const CartContextProvider = ({children}) => {

    
// }
 
// export default CartContextProvider;