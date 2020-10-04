import React from "react";
import { ProductCard } from "../components/Cards";
import { ProductsContainer, Title } from "../styles/pages/productsPage";
import { exampleProducts } from '../services/exampleProducts'
import { CartProvider } from '../contexts/CartContext'

export const ProductsPage = () => {
  return (
    <>
      <CartProvider>
        <Title>Category name</Title>
        <ProductsContainer>
          {
            exampleProducts.map((item, inx, exmProds)=>{
              return <ProductCard key={item.id} name={item.name} description={item.description} photo={item.photo}></ProductCard>
            })
          }
          
        </ProductsContainer>
      </CartProvider>
    </>
  );
};
