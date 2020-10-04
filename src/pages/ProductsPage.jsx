import React from "react";
import { ProductCard } from "../components/Cards";
import { Sidebar } from "../components/Sidebar";
import { ProductsContainer, Title } from "../styles/pages/productsPage";

export const ProductsPage = () => {
  return (
    <>
      <Sidebar/>

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
