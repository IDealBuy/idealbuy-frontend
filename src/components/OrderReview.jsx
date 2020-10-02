import React from 'react'
// import GlobalStyle from '../globalStyles'
import styled, { css } from 'styled-components'

const OrderReviewContainer = styled.section`
    width: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    margin: 1em 0;
    padding: 1.5em;
    box-sizing: border-box;
`

const OrderTitleContainer = styled.div`
    background-color: #FAFAFA;
    padding: 1px 1em;
    text-align: center;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 0 1em 0;
`
const OrderTitle = styled.p`
    color: var(--secondary-color);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: .8em;
    font-weight: bold;
`

const OrderDetailContainer = styled.div`
    display: grid;
    grid-template-columns: 1.5fr .5fr;
    grid-gap: 2em;
`
const OrderDetailContainerChild = styled.div`
    align-self: center;
    /* justify-self: center; */
`

const OrderCuponInput = styled.input`
    width: 100%;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    padding: 1em;
    border-radius: 10px;
    text-transform: uppercase;
`

const OrderButton = styled.button`
    background: var(--primary-color);
    color: white;
    font-weight: bold;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    height: 35px;
`

const RedParagraph = styled.p`
    color: var(--primary-color);
    display: inline;
    font-weight: bold;
`

const OrderDivider = styled.hr`
    border: 1px solid #e5e5e5;
`

const OrderTransactionInfo = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 1.5em 0;
`

const OrderReview = () => {
    return(
        <OrderReviewContainer>
            <OrderTitleContainer>
                <OrderTitle>CUENTA DE INVITADO</OrderTitle>
            </OrderTitleContainer>
            <OrderTransactionInfo>
                <div>
                    No. de transacción
                </div>
                <div>
                    #123432123
                </div>

            </OrderTransactionInfo>
            <OrderDivider />

            <OrderDetailContainer>
                <OrderDetailContainerChild>
                    <OrderCuponInput placeholder="CUPON" type="text"/>
                </OrderDetailContainerChild>
                <OrderDetailContainerChild>
                    <OrderButton>Aplicar</OrderButton>
                </OrderDetailContainerChild>
            </OrderDetailContainer>
            <OrderDivider />
            <OrderTransactionInfo>
                <div>
                    Subtotal
                </div>
                <div>
                    $122
                </div>

            </OrderTransactionInfo>
            <OrderTransactionInfo>
                <div>
                    Servicios adicionales
                </div>
                <div>
                    <RedParagraph>
                        10
                    </RedParagraph>
                </div>

            </OrderTransactionInfo>
            <OrderTransactionInfo>
                <div>
                    Total
                </div>
                <div>
                    132
                </div>

            </OrderTransactionInfo>
            <OrderTitleContainer>
                <OrderTitle>EXPIRA EN: 21 horas, 31 minutos</OrderTitle>
            </OrderTitleContainer>
        </OrderReviewContainer>
    )
}

export default OrderReview