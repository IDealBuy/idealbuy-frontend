import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styled, {css} from 'styled-components'
import { CartListProducts } from './CartListProducts'
import { Sidebar } from "../components/Sidebar";
import {Link} from 'react-router-dom'
import { Button } from '../components/Buttons'


const CartContainer = styled.section`
    margin: 1em auto 1em auto;
    padding: 1em 0;
    text-align:center;
    max-width: 1200px;
    width: 100%;
    
`
const CartEmptyContainer = styled.div`
    margin: 1em 0;
    padding: 1em 0;
    font-size: 2em;
`

export const CartPage = () => {
    
    const { cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    console.log(cartItems)
    return (
        <>
            <Sidebar />
            <CartContainer>
            <h1>Cart</h1>
                {
                    cartItems.length === 0 ? <CartEmptyContainer>Empty Cart</CartEmptyContainer>  : <CartListProducts />
                }
            <Link to="/products">
                <Button secondary>Buy more!</Button>
            </Link>
            </CartContainer>
            
            
        </>
    )
}