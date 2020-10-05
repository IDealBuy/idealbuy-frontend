import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useStateValue } from "../Context";
import styled, {css} from 'styled-components'
import { CartItemComponent } from '../components/CartItemComponent'
import { Link } from 'react-router-dom'
import { Button } from '../components/Buttons'
import { ProductsContainer, Title } from "../styles/pages/productsPage";
import { ProductCard } from "../components/Cards";
import Skeleton from "react-loading-skeleton";

export const CartListProducts = () => {
    
    const { cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    const [{ cart }, dispatch2] = useStateValue();
    console.log(cart)
    return (
        <>
            <ProductsContainer>
                {
                    cart.map((product) => {
                        return (
                            <ProductCard product={product} key={product.id}></ProductCard>
                        );
                    })

                }

            </ProductsContainer>
            <Link to="/compare">
                <Button>Haz la magia</Button>
            </Link> 
        </>
    )
}