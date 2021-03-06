import React from "react";
import { Button } from "../components/Buttons";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

// const CheckoutView = () => {
//   let location = useLocation();
//   console.log(location.pathname);
//   return <span>Path : {location.pathname}</span>
// }

const CardStoreOptionContainer = styled.div`
  border: 1px solid #e5e5e5;
  width: 100%;
  min-width: 300px;
  border-radius: 10px;
  padding: 2em;
  box-sizing: border-box;
`;
const CardStoreOptionInfo = styled.div`
  /* border: 1px solid #e5e5e5; */
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
`;

const TotalAmount = styled.div`
  text-align: center;
  & h3 {
    font-size: 2em;
    color: var(--secondary-color);
    margin: 0;
  }
`;

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
    margin: 0.5em;
    width: 50px;
    /* height: auto; */
  }
`;

const DeliveryTime = styled.div`
  & p {
    color: var(--secondary-color);
    font-weight: bold;
  }
`;

const Location = styled.div`
  & p {
    color: var(--secondary-color);
  }
`;

// export const CardStoreOption = ({ total, stores, deliveryTime, location  }) => {
export const CardStoreOption = ({ data, one, checkout }) => {
    console.log(data)
    let multiAmount = 0;

    if(!one){
        data.forEach(element => {
            multiAmount+= element.price
        });
        data.totalPrice = multiAmount
    }
  return (
    
    <>
      <CardStoreOptionContainer>
        <CardStoreOptionInfo>
          <TotalAmount>
              {
                  one
                  ?<h3>{`$${data.totalPrice}`}</h3>
                  :<h3>{`$${multiAmount}`}</h3>
              }
            
          </TotalAmount>

          <Stores>
              {
                  one
                  ?<img src={data.superData.superPhoto} alt="logoSuper" />
                  :(
                      
                        data.map((value,index)=>{
                            return <img key={index} src={value.node.superId.superPhoto} alt="logoSuper" />
                        })
                      
                  )
              }
            
          </Stores>
          <DeliveryTime>
            <p>2-5 días de entrega</p>
          </DeliveryTime>
          <Location>¡Más cerca de casa! (1km)</Location>
        </CardStoreOptionInfo>
        {
          checkout ? <> </> : <Link to={{pathname: '/checkout', state: { selectedOption: data, one: one}}}><Button>Pagar ahora</Button></Link>
        }
        
      </CardStoreOptionContainer>
    </>
  );
};
