import React from "react";
import { ProductCard } from "../components/Cards";
import { Sidebar } from "../components/Sidebar";
import { ProductsContainer, Title } from "../styles/pages/productsPage";
import { CartProvider } from "../contexts/CartContext";
import Skeleton from "react-loading-skeleton";

//graphql
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const getProducts = gql`
query{
  allFilterProducts{
    edges{
      node{
        id
        productName
        productUnit
        productPhoto
        category
      }
    }
  }
}
`;

export const ProductsPage = () => {
  const { loading, data } = useQuery(getProducts);
 
  return (
    <>
      <CartProvider>
        <Sidebar></Sidebar>
        <Title>Productos</Title>
        <ProductsContainer>
          {loading ? (
            <>
              <Skeleton key={1} height="350px" />
              <Skeleton key={2} height="350px" />
              <Skeleton key={3}height="350px" />
              <Skeleton key={4} height="350px" />
              <Skeleton key={5} height="350px" />
              <Skeleton key={6} height="350px" />
            </>
          ) : (
            data.allFilterProducts.edges.map((product) => {
              return (
                <ProductCard product={product.node} key={product.id}></ProductCard>
              );
            })
            // <h1>Hola</h1>
          )
          }
        </ProductsContainer>
      </CartProvider>
    </>
  );
};
