import React from 'react'
import styled, {css} from 'styled-components'
import { RectButton } from "./Buttons";
import { RectangularButton } from "./Buttons";


const CartIemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
`

const Quantity = styled.div`
    
`

const Description = styled.div`
`

const Actions = styled.div`

`



export const CartItemComponent = ({product}) => {
    return(
        <>
            {/* <CartIemContainer >
                <Quantity>
                    12
                </Quantity>
                <Description>
                    <img />
                    <p>{product.productName}</p>
                </Description>
                <Actions>
                    <RectangularButton>X</RectangularButton>
                </Actions>
            </CartIemContainer> */}

            
            
        </>
    )
}