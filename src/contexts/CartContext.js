// import { createContext } from "react"
import React, {  useReducer} from 'react'
import { CartReducer, updateCart } from './CartReducer.js';

export const CartContext = React.createContext()

// Si existe cart en localStorage, lo traemos y lo convertimos en json, si no, se inicia storage como array vacío
const storageCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

//Definimos el estado incial del carrito, 
const initialCart = { cartItems: storageCart, ...updateCart(storageCart), checkout: false };


export const CartProvider = ({children}) => {
    
    // En est caso payload es el producto
    const [stateCart, dispatch] = useReducer(CartReducer, initialCart)
    const increase = (payload) => {
        console.log(payload)
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = (payload) => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProduct = (payload) => {
        dispatch({type: 'ADD', payload})
    }

    const removeProduct = (payload) => {
        dispatch({type: 'REMOVE', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const handleCheckout = () => {
        console.log('CHECKOUT', stateCart);
        dispatch({type: 'CHECKOUT'})
    }

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...stateCart
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}

