import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../Context";

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
  const [{ user }] = useStateValue();

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
            {user ? (
              <Button onClick={() => history.push("/products")} mr_2>
                Ver productos
              </Button>
            ) : (
              <>
                <Button onClick={() => history.push("/register")} mr_2>
                  Registrate Gratis
                </Button>
                <Button onClick={() => history.push("/login")} secondary>
                  Inicia Sesion
                </Button>
              </>
            )}
          </ButtonsContainer>
        </Information>
      </Container>
    </>
  );
};
