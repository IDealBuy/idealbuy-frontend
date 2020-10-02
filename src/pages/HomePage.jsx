import React from "react";
import { useHistory } from "react-router-dom";
import { PromoCard, ProductCard } from "../components/Cards";
import { Sidebar } from "../components/Sidebar";
import {
  BestSellers,
  Container,
  MainImage,
  Information,
  MainText,
  Highlight,
  Paragraph,
  ButtonsContainer,
  Wave
} from "../styles/pages/home";

import wave from "../assets/wave.svg";
import shopping from "../assets/Online_shopping_SVG.svg";
import { Button } from "../components/Buttons";

export const HomePage = () => {
  let history = useHistory();
  return (
    <>
      <Sidebar />
      <Container>
        <Wave src={wave} alt=""/>
          
        <MainImage src={shopping} />
        <Information>
          <MainText>
            <Highlight>Economico</Highlight>, eficaz y rapido
          </MainText>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Paragraph>
          <BestSellers>
            <ProductCard home productName="Huevos" productPrice="$3000" />
            <ProductCard home productName="Huevos" productPrice="$3000" />
            <ProductCard home productName="Huevos" productPrice="$3000" />
          </BestSellers>
          <ButtonsContainer>
            <Button onClick={()=> history.push("/register")} mr_2>Registrate Gratis</Button>
            <Button onClick={()=> history.push("/login")} secondary>Inicia Sesion</Button>
          </ButtonsContainer>
        </Information>
      </Container>
    </>
  );
};
