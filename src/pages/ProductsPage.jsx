import React from "react";
import { ProductCard } from "../components/Cards";
import { ProductsContainer, Title } from "../styles/pages/productsPage";
import { exampleProducts } from '../services/exampleProducts'
import { CartProvider } from '../contexts/CartContext'
import { Sidebar } from '../components/Sidebar'

export const ProductsPage = () => {
  return (
    <>
      <CartProvider>
        <Sidebar>
        </Sidebar>
        <Title>Category name</Title>
        <ProductsContainer>
          {
            exampleProducts.map((product, inx, exmProds)=>{
              return <ProductCard product={product} key={product.id}></ProductCard>
            })
          }
          
        </ProductsContainer>
      </CartProvider>
    </>
  );
};
