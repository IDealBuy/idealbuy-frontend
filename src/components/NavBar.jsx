import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
// import GlobalStyle from '../globalStyles'
import styled from "styled-components";
import { device } from "../utils/device";
import {  } from "react-icons/md";

const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: var(--secondary-color);
  height: 60px;
`;

const Brand = styled.div`
  display: flex;
  color: white;
  height: 60px;
  margin: 0 20px;
  & > img {
    height: 80%;
  }
`;

const OptionsLinks = styled.div`

  & > a {
    text-decoration: none;
    color: white;
    margin: 0 20px;
  }
  @media ${device.tablet} {
    display:none;
  }
`;

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Brand>
        <h2>IDealBuy</h2>
        <img src={logo} alt="" />
      </Brand>

      <OptionsLinks>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/products">Productos</NavLink>
      </OptionsLinks>
    </NavBarContainer>
  );
};
