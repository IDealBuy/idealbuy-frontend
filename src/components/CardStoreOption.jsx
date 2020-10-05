import React from 'react';
import { Button } from "../components/Buttons";
import styled  from 'styled-components';
// import { Link } from "react-router-dom";
import walmart_logo from '../assets/images/walmart_logo.png'
import chedrahui_logo from '../assets/images/chedrahui_logo.png'
import lacomer_logo from '../assets/images/lacomer_logo.png'
import soriana_logo from '../assets/images/soriana_logo.png'

const CardStoreOptionContainer = styled.div`
    border: 1px solid #e5e5e5;
    width: 100%;
    min-width: 300px;
    border-radius: 10px;
    padding: 2em;
    box-sizing: border-box;
`
const CardStoreOptionInfo = styled.div`
    /* border: 1px solid #e5e5e5; */
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    display: flex; 
    justify-content: space-around;
    align-items: center;
    flex-flow: column;
`

const TotalAmount = styled.div`
    text-align: center;
    & h3 {
        font-size: 2em;
        color: var(--secondary-color);
        margin: 0;
    }
`

const Stores = styled.div`
    /* border: 1px solid ; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    flex-wrap: wrap;
    margin: 1em auto;
    & img {
        margin: .5em;
        width: 50px; 
        /* height: auto; */
    }
`

const DeliveryTime = styled.div`
    & p {
        color: var(--secondary-color);
        font-weight: bold;
    }
`

const Location = styled.div`
    & p {
        color: var(--secondary-color)
    }
`

// export const CardStoreOption = ({ total, stores, deliveryTime, location  }) => {
export const CardStoreOption = () => {
    return(
        <>
            <CardStoreOptionContainer>
                <CardStoreOptionInfo>
                    <TotalAmount>
                        <h3>$1354</h3>
                    </TotalAmount>
                    
                    <Stores>
                        <img src={chedrahui_logo} alt=""/>
                        <img src={lacomer_logo} alt=""/>
                        <img src={soriana_logo} alt=""/>
                        <img src={walmart_logo} alt=""/>
                    </Stores>
                    <DeliveryTime>
                        <p>2-5 días de entrega</p>
                    </DeliveryTime>
                    <Location>
                        ¡Más cerca de casa! (1km)
                    </Location>

                </CardStoreOptionInfo>
                <Button>
                    Pagar ahora
                </Button>

            </CardStoreOptionContainer>
        </>
    )
}