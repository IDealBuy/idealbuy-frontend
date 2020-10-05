import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { MdAdd, MdRemove } from "react-icons/md";
import { RectangularButton } from "./Buttons";
import {
  ContainerProductCard,
  ImgProductCard,
  ContainerData,
  TextCard,
  ContainerButtons,
  BackgroundPromo,
  DataPromo,
} from "../styles/components/Cards";
import defaultImage from "../assets/noimage.jpg";
import { useStateValue } from "../Context";

export const ProductCard = ({ home, product }) => {
  const [{ cart }, dispatch] = useStateValue();
  const {
    addProduct,
    cartItems,
    increase,
    decrease,
    removeProduct,
  } = useContext(CartContext);
  const isInCart = (product) => {
    let isIt = cartItems.find((item) => item.id === product.id);

    return isIt;
    // return !!cartItems.find(item => item.id === product.id);
  };
  return (
    <ContainerProductCard>
      <ImgProductCard src={product.productPhoto ? product.productPhoto : defaultImage} />
      <ProductCardData
        name={product.productName}
        price="$3000"
        description={product.category}
      />
      {/* {home ? null : <ButtonsProductCard product={product} />} */}
      <ContainerButtons>
        <div>
          {!isInCart(product) && (
            <RectangularButton
              mr_1
              onClick={() => {
                console.log("cart",cart)
                let lista = Array.from(cart).slice();
                lista.push(product)
                // lista.push(product)
                console.log("lista",lista);
                localStorage.setItem("cart",JSON.stringify(lista))
                dispatch({
                  type: "addProductCart",
                  cart: lista,
                });
              }}
            >
              <MdAdd />
            </RectangularButton>
          )}
          {isInCart(product) && (
            <RectangularButton
            mr_1
              onClick={() => {
                console.log("cart",cart)
                let lista = Array.from(cart).slice();
                lista.push(product)
                // lista.push(product)
                console.log("lista",lista);
                localStorage.setItem("cart",JSON.stringify(lista))
                dispatch({
                  type: "addProductCart",
                  cart: lista,
                });
              }}
            >
              <MdAdd />
            </RectangularButton>
          )}
          {
            // product.quantity > 1 && <RectangularButton onClick={() => { decrease(product) } }>Restar</RectangularButton>
            <RectangularButton
              secondary
              onClick={() => {
                decrease(product);
              }}
            >
              <MdRemove />
            </RectangularButton>
          }
        </div>
        {isInCart(product) ? (
          <RectangularButton
            secondary
            onClick={() => {
              removeProduct(product);
            }}
          >
            X
          </RectangularButton>
        ) : (
          <RectangularButton disabled secondary>
            X
          </RectangularButton>
        )}
      </ContainerButtons>
    </ContainerProductCard>
  );
};

export const PromoCard = ({ productName, productPrice }) => {
  return (
    <BackgroundPromo image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80">
      <DataPromo>
        <p>{productName}</p>
        <p>{productPrice}</p>
      </DataPromo>
    </BackgroundPromo>
  );
};

const ProductCardData = ({ name, price, description }) => {
  return (
    <ContainerData>
      <div>
        <TextCard bold>{name}</TextCard>
        <TextCard small>{description}</TextCard>
      </div>
      <TextCard highlight>{price}</TextCard>
    </ContainerData>
  );
};

export const ButtonsProductCard = () => (
  <ContainerButtons>
    <RectangularButton secondary>
      <MdRemove />
    </RectangularButton>
    <TextCard> 0 </TextCard>
    <RectangularButton>
      <MdAdd />
    </RectangularButton>
  </ContainerButtons>
);
