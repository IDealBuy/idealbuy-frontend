import React from 'react'
import GlobalStyle from '../globalStyles'
import { Checkout } from '../pages/Checkout'
import styled, {css} from 'styled-components'
import fedexLogo from '../assets/images/fedex_logo.png'


const CheckboxDeliveryContainer = styled.div`
  text-align: center;
  /*border: 1px solid var(--background-color50);*/
  display: inline-flex;
  justify-content: center;
  flex-flow: row;
  align-items: center;
  margin: .5em .5em 1em 0;
  /* padding: 10px; */
  box-sizing: border-box;
`

const Input = styled.input`
  border: 1px solid red;
  border-radius: 50%;
`;

const LabelCheckbox = styled.label`
    border: 1px solid #e5e5e5;
    height: 112px;
    border-radius: 10px;
    margin-left: .6em;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    color: #e5e5e5;
    padding: 5px;
    box-sizing: border-box;
    width: 280px;
`

const DeliveryImgContainer = styled.div`
    width: 63px;
    margin: 2px;
`

const DeliveryImg = styled.img`
    opacity: .4;
`

const DeliveryOption = styled.div`
    // border: 1px solid yellow;
    margin: 1px;
`

const P = styled.p`
    font-family: var(--secondary-font);
    margin: 0;
    ${props => props.secondary && css`
        font-size: .9em;
    `}
`

const DeliveryName = styled.h3`
    font-size: 1.1em;
    margin: 0;
`
const PriceCard = styled.h3`
    font-size: 1em;
    margin: 0 5px;
`



const CheckboxCart = () => {
    return(
        <CheckboxDeliveryContainer>
            <Input type="checkbox" id="1"/>
            <LabelCheckbox htmlFor="1">
                <DeliveryImgContainer>
                    <DeliveryImg src={fedexLogo} alt=""/>
                </DeliveryImgContainer>
                <DeliveryOption>
                    <DeliveryName>Fedex Delivery</DeliveryName>
                    <P secondary>Expected delivery</P>
                    <P secondary>6-8 bussines days</P>
                </DeliveryOption>
                <PriceCard>
                    $3 USD
                </PriceCard>    
            </LabelCheckbox>
        </CheckboxDeliveryContainer>
        
      );
}

export default CheckboxCart