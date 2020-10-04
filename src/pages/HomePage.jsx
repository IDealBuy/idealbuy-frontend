import React from "react";
import { useHistory } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import {
  Container,
  MainImage,
  Information,
  MainText,
  Highlight,
  Paragraph,
  ButtonsContainer,
  ImageMobile,
  Wave,
  Background,
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
        <Background />
        <Wave src={wave} alt="" />
        <MainImage src={shopping} />
        <Information>
          <MainText>
            <Highlight>Economico</Highlight>, eficaz y rapido
          </MainText>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Paragraph>
          <ImageMobile src={shopping} />

          <ButtonsContainer>
            <Button onClick={() => history.push("/register")} mr_2>
              Registrate Gratis
            </Button>
            <Button onClick={() => history.push("/login")} secondary>
              Inicia Sesion
            </Button>
          </ButtonsContainer>
        </Information>
      </Container>
    </>
  );
};
