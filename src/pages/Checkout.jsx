import React from 'react'
import CheckboxCart from '../components/CheckboxCart'
import Toggle from '../components/Toggle'
import OrderReview from '../components/OrderReview'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const CheckoutGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-template-rows: 30px auto 30px auto 30px auto; */
    grid-gap: 2em;
    margin: 0 auto;
    width: 95%;
    max-width: 1200px;
    /* border: 1px solid red; */
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 769px){
        grid-template-columns: 1fr 1fr;
    }
`
const GridOrder = styled.div`
    grid-column: 1/3;
    grid-row: 1/2;
    
    @media screen and (max-width: 769px) {
        grid-column: 1/3;
        grid-row: auto / span 1;
    }
`

const GridSummary = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
    @media screen and (max-width: 769px) {
        grid-column: 1/3;
        grid-row: auto / span 1;
    }
`
const GridDelivery = styled.div`
    grid-column: 1/3;
    grid-row: 2/3;
    @media screen and (max-width: 769px) {
        grid-column: 1/3;
        grid-row: auto / span 1;
    }
`
const GridAditionalService = styled.div`
    grid-column: 3/4;
    grid-row: 2/3;
    @media screen and (max-width: 769px) {
        grid-column: 1/3;
        grid-row: auto / span 1;
    }
`

const GridPayment = styled.div`
    grid-column: 1/4;
    grid-row: 3/4;
    @media screen and (max-width: 769px) {
        grid-row: auto / span 1;
        grid-column: 1 / 3
    }
`

const TitleSection = styled.h3`
    color: var(--secondary-color);
`

export const Checkout = () => {
    return (
        <>
            <CheckoutGrid>
                <GridOrder>
                        <TitleSection>
                            Order
                        </TitleSection>
                </GridOrder>
                <GridSummary>
                    <TitleSection>
                        Payment Summary
                    </TitleSection>
                    <OrderReview></OrderReview>

                </GridSummary>
                <GridDelivery>
                    <TitleSection>
                        Delivery
                    </TitleSection>
                    <CheckboxCart> </CheckboxCart>
                    <CheckboxCart> </CheckboxCart>
                    <CheckboxCart> </CheckboxCart>
                    <CheckboxCart> </CheckboxCart>

                </GridDelivery>
                <GridAditionalService>
                    <TitleSection>
                        Additional service
                        <Toggle>
                            
                        </Toggle>
                        <Toggle>
                            

                        </Toggle>
                    </TitleSection>
                </GridAditionalService>
                <GridPayment>
                    <TitleSection>
                        Payment
                    </TitleSection>
                </GridPayment>
            </CheckoutGrid>
        </>
    )
}