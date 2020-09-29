import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import {
  ContainerProductCard,
  ImgProductCard,
  ContainerData,
  TextCard,
  ContainerButtons,
} from "../styles/components/Cards";
import { RectangularButton } from "./Buttons";

export const ProductCard = () => {
  return (
    <ContainerProductCard>
      <ImgProductCard src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80" />
      <ProductCardData name="Pan Tajado" price="$3000" weight="500g" />
      <ButtonsProductCard />
    </ContainerProductCard>
  );
};

const ProductCardData = ({ name, price, weight }) => {
  return (
    <ContainerData>
      <div>
        <TextCard bold>{name}</TextCard>
        <TextCard small>{weight}</TextCard>
      </div>
      <TextCard highlight>{price}</TextCard>
    </ContainerData>
  );
};

const ButtonsProductCard = () => (
  <ContainerButtons>
    <RectangularButton secondary>
      <MdRemove />
    </RectangularButton>
    <TextCard>0</TextCard>
    <RectangularButton>
      <MdAdd />
    </RectangularButton>
  </ContainerButtons>
);
