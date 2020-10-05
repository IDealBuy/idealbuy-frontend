import React from 'react';
import { useStateValue } from "../Context";
// import styled, {css} from 'styled-components'
// import { CartItemComponent } from '../components/CartItemComponent'
import { Link } from 'react-router-dom'
import { Button } from '../components/Buttons'
import { ProductsContainer } from "../styles/pages/productsPage";
import { ProductCard } from "../components/Cards";
// import Skeleton from "react-loading-skeleton";

export const CartListProducts = () => {
    
    const [{ cart }] = useStateValue();
    
    return (
        <>
            <ProductsContainer>
                {
                    cart.map((product,index) => {
                        return (
                            <ProductCard product={product} key={index}></ProductCard>
                        );
                    })

                }

            </ProductsContainer>
            <Link to="/PurchaseOptions">
                <Button>Haz la magia</Button>
            </Link> 
        </>
    )
}