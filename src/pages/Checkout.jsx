import React from 'react'
import CheckboxCart from '../components/CheckboxCart'
import Toggle from '../components/Toggle'
import OrderReview from '../components/OrderReview'
import styled from 'styled-components'
import { CardStoreOption } from "../components/CardStoreOption";
import { ProductCard } from "../components/Cards";

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
const ProductItem = styled.div`
    display: flex;
    flex-flow: row;
    width: 100%;
    justify-content: space-between;
    margin-bottom: .3em;
    border-bottom: 1px solid #e5e5e5;
    align-items: center;
    img {
        width: 30px;    
    }
    
`

// const countItems = (cartArr) => {

//     // console.log(cartArr)
//     let cartResult

//     let itemsId = cartArr.map((item, idx)=>{
//         return item.id
//     })

//     let count = itemsId.reduce((acc, value) => ({
//         ...acc,
//         [value]: (acc[value] || 0) + 1
//      }), {});

//     // console.log(count)

//      let orderCart = cartArr.map((item,idx) => {
//         return item
//      })

//      let cartSimple = orderCart.filter((item, index)=> orderCart.indexOf(item.id) === index )

//      console.table(cartSimple)

//      return cartResult = cartSimple.map((item, idx)=>{
//         return {
//             product: item,
//             quantity: count[item.id] 
//         }
//      })
// }


export const Checkout = (data) => {
    
    let {selectedOption, one} = data.location.state
    let {superId, totalPrice} = data.location.state.selectedOption
    let cartCheckbox = JSON.parse( localStorage.getItem('cart') )
    // let itemsCart = countItems(cartCheckbox)

    // console.log(itemsCart)
    return (
        <>
            <CheckoutGrid>
                <GridOrder>
                        <TitleSection>
                            Order
                        </TitleSection>
                        
                        {
                            cartCheckbox.map((item, idx) => {
                                
                                return (
                                    <ProductItem key={idx}>
                                        <div className="itemList">
                                            
                                        </div>
                                        <div className="productPhoto">
                                            <img src={item.productPhoto} alt=""/>
                                        </div>
                                        <div className="productName">
                                            {item.productName}

                                        </div>
                                        <div className="productSuper">

                                        </div>

                                    </ProductItem>

                                )
                                
                            })
                            
                        }
                </GridOrder>
                <GridSummary>
                    <TitleSection>
                        Payment Summary
                    </TitleSection>
                    
                    {/* <ProductCard product={product.node} key={product.id}></ProductCard> */}
                    <CardStoreOption data={selectedOption} one={one} checkout={true}></CardStoreOption>
                    <OrderReview superId={superId} totalPrice={totalPrice}>
                        
                    </OrderReview>

                </GridSummary>
                <GridDelivery>
                    <TitleSection>
                        Delivery
                    </TitleSection>
                    <CheckboxCart> </CheckboxCart>
                </GridDelivery>
                <GridAditionalService>
                    <TitleSection>
                        Additional service
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