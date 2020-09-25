import React from "react";
import { ProductCard } from "../components/Cards";
import { ProductsContainer, Title } from "../styles/pages/productsPage";

export const ProductsPage = () => {
  return (
    <>
      <Title>Category name</Title>
      <ProductsContainer>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </ProductsContainer>
    </>
  );
};
