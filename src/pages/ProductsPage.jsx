import React from "react";
import { ProductCard } from "../components/Cards";
import { Sidebar } from "../components/Sidebar";
import { ProductsContainer, Title } from "../styles/pages/productsPage";
import { exampleProducts } from "../services/exampleProducts";
import { CartProvider } from "../contexts/CartContext";
import Skeleton from "react-loading-skeleton";


//graphql
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const getProducts = gql`
  query {
    allProducts {
      productName
      productUnit
      category
    }
  }
`;

export const ProductsPage = () => {

  const { loading, error, data } = useQuery(getProducts);
 
  return (
    <>
      <CartProvider>
        <Sidebar></Sidebar>
        <Title>Productos</Title>
        <ProductsContainer>
          {loading ? (
            <>
              <Skeleton height="350px" />
              <Skeleton height="350px" />
              <Skeleton height="350px" />
              <Skeleton height="350px" />
              <Skeleton height="350px" />
              <Skeleton height="350px" />
            </>
          ) : (
            data.allProducts.map((product) => {
              return (
                <ProductCard product={product} key={product.id}></ProductCard>
              );
            })
          )}
        </ProductsContainer>
      </CartProvider>
    </>
  );
};
