import React from "react";
import { CardStoreOption } from "../components/CardStoreOption";
import styled from "styled-components";
import iDealLogo from "../assets/logotipo.png";
import { useStateValue } from "../Context";
//graphql
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Skeleton from "react-loading-skeleton";

const LogoContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  & img {
    width: 300px;
  }
  @media screen and (max-width: 768px) {
  }
`;

// const TitleContainer = styled.div`
//   text-align: center;
// `;

const PurchaseOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr 100px;
  grid-gap: 4em;
  margin: 2em auto;
  width: 100%;
  max-width: 1200px;
  & div {
    text-align: center;
    justify-self: center;
  }
  & div:nth-child(1) {
    grid-column: 2 / span 1;
  }
  & div:nth-child(2) {
    grid-column: 3 / span 1;
  }

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    grid-row-gap: 3em;
    & div:nth-child(1),
    div:nth-child(2) {
      grid-column: auto / span 1;
    }
  }
`;

// const AnotherOptionsContainer = styled(PurchaseOptionsContainer)`
//   grid-template-columns: 1fr 1fr 1fr;
//   & div:nth-child(1) {
//     grid-column: 1 / span 1;
//   }
//   & div:nth-child(2) {
//     grid-column: 2 / span 1;
//   }
//   & div:nth-child(3) {
//     grid-column: 3 / span 1;
//   }

//   @media screen and (max-width: 769px) {
//     grid-template-columns: 1fr;
//     & div:nth-child(1),
//     div:nth-child(2),
//     div:nth-child(3),
//     div:nth-child(4) {
//       grid-column: auto / span 1;
//     }
//   }
// `;

export const PurchaseOptions = () => {
  const [{ cart }] = useStateValue();
  const getProducts = gql`
  query {

    ${cart.map((value, index) => {
      return `
          query${index}:allFilterPrices(productsId_Id:"${value.id}") {
            edges {
              node{
                price
                productsId{
                  id
                  productName
                  productPhoto
                 
                }
                superId{
                  id
                  latitude
                  longitude
                  superName
                  superPhoto
                }
            }}
          }
        `;
    })}  
  }
  `;

  const { loading, data } = useQuery(getProducts);

  const cheaperOne = () => {
    let cheaperOneList = [];
    let supermarkets = [];
    Object.values(data).forEach((element, index) => {
      element.edges.forEach((edgesValue) => {
        let indexList = supermarkets.indexOf(edgesValue.node.superId.id);
        if (indexList === -1) {
          supermarkets.push(edgesValue.node.superId.id);
          cheaperOneList.push({
            superId: edgesValue.node.superId.id,
            superData: edgesValue.node.superId,
            products: [edgesValue.node.productsId],
            totalPrice: edgesValue.node.price,
          });
        } else {
          cheaperOneList[indexList].products.push(edgesValue.node.productsId);
          cheaperOneList[indexList].totalPrice += edgesValue.node.price;
        }
      });
    });
    cheaperOneList.sort((a, b) => a.totalPrice - b.totalPrice);
    return cheaperOneList[0];
  };

  const cheaperMulti = () => {
    let cheaperMultiList = [];
    Object.values(data).forEach((element, index) => {
      let nodoCheaper;
      let priceCheaper = Number.MAX_VALUE;
      element.edges.forEach((edgesValue) => {
        if (edgesValue.node.price < priceCheaper) {
          priceCheaper = edgesValue.node.price;
          nodoCheaper = edgesValue.node;
        }
      });
      cheaperMultiList.push({
        node: nodoCheaper,
        price: priceCheaper,
      });
    });
    return cheaperMultiList;
  };



  return (
    <>
      {loading ? (
        <>
          <LogoContainer>
            <img src={iDealLogo} alt="" />
          </LogoContainer>
          <PurchaseOptionsContainer>
            <Skeleton key={1} height="350px" />
            <Skeleton key={2} height="350px" />
            <Skeleton key={3} height="350px" />
            <Skeleton key={4} height="350px" />

          </PurchaseOptionsContainer>
        </>
      ) : (
        <>
          <LogoContainer>
            <img src={iDealLogo} alt="" />
          </LogoContainer>

          <PurchaseOptionsContainer>
            <div>
              <h2>El precio más bajo en un mismo lugar</h2>
              <CardStoreOption one data={cheaperOne()}></CardStoreOption>
            </div>

            <div>
              <h2>Todos los productos con los precios más bajos</h2>
              <CardStoreOption data={cheaperMulti()}></CardStoreOption>
            </div>
          </PurchaseOptionsContainer>
        </>
      )}
    </>
  );
};
