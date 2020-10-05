import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styled, {css} from 'styled-components'
import { CartItemComponent } from '../components/CartItemComponent'
import { Link } from 'react-router-dom'
import { Button } from '../components/Buttons'

export const CartListProducts = () => {
    
    const { cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    return (
        <>
           
            

                
                {
                    cartItems.map((item, idx) => {
                        return (<>
                            <CartItemComponent key={item.id} data={item}>{item}</CartItemComponent>
                        </>)
                    })
                }
            <Link>
                <Button>Haz la magia</Button>
            </Link> 
        </>
    )
}