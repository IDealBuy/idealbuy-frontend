import React from 'react'
import CheckboxCart from '../components/CheckboxCart'
import OrderReview from '../components/OrderReview'
import styled, { css } from 'styled-components'

const CheckoutGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-template-rows: 30px auto 30px auto 30px auto; */
    grid-gap: 2em;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    /* border: 1px solid red; */
`
const GridOrder = styled.div`
    grid-column: 1/3;
    grid-row: 1/2;

`

const GridSummary = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
`
const GridDelivery = styled.div`
    grid-column: 1/3;
    grid-row: 2/3;

`
const GridAditionalService = styled.div`
    grid-column: 3/4;
    grid-row: 2/3;
`

const GridPayment = styled.div`
    grid-column: 1/4;
    grid-row: 3/4;
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