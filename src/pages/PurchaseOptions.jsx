import React from 'react'
import { CardStoreOption } from '../components/CardStoreOption'
import styled, {css} from 'styled-components';
import iDealLogo from '../assets/logotipo.png'

const LogoContainer = styled.div`
    margin: 0 auto;
    text-align: center;
    width: 100%;
    & img {
        width: 300px;
    }
`

const TitleContainer = styled.div`
    text-align: center;
`

const PurchaseOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr 1fr 100px;
    grid-gap: 4em;
    margin: 2em auto;
    width: 100%;
    max-width: 1200px;
    & div {
        text-align: center;
    }
    & div:nth-child(1) {
        grid-column: 2 / span 1;
    }
    & div:nth-child(2) {
        grid-column: 3 / span 1;
    }
`

const AnotherOptionsContainer = styled(PurchaseOptionsContainer) `
    grid-template-columns: 1fr 1fr 1fr;
    & div:nth-child(1){
        grid-column: 1 / span 1;
    }
    & div:nth-child(2){
        grid-column: 2 / span 1;
    }
    & div:nth-child(3){
        grid-column: 3 / span 1;
    }
    
`



export const PurchaseOptions = () => {
    return(
        <>
            <LogoContainer>
                <img src={iDealLogo} alt=""/>
            </LogoContainer>

            <PurchaseOptionsContainer>
                
                <div>
                    <h2>El precio más bajo en un mismo lugar</h2>
                    <CardStoreOption>
                
                    </CardStoreOption>
                </div>

                <div>
                    <h2>Todos los productos con los precios más bajos</h2>
                    <CardStoreOption>
                
                    </CardStoreOption>
                </div>

            </PurchaseOptionsContainer>
            <TitleContainer>
                <h3>Más opciones</h3>
            </TitleContainer>
            <AnotherOptionsContainer>
                <div>
                    <CardStoreOption></CardStoreOption>
                </div>
                <div>
                    <CardStoreOption></CardStoreOption>
                </div>
                <div>
                    <CardStoreOption></CardStoreOption>
                </div>
            </AnotherOptionsContainer>
        </>

        
    )
}