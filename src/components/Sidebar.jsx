import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../assets/logo.png";
import { useStateValue } from "../Context";

import {
  Navbar,
  MenuBars,
  NavMenu,
  NavText,
  NavMenuItems,
  NavbarToggle,
  Brand,
  OptionsLinks,
} from "../styles/components/Sidebar";
import { Button } from "./Buttons";

export const Sidebar = () => {
  const [sideBarState, setSideBarState] = useState(false);
  const showSidebar = () => setSideBarState(!sideBarState);
  const [{ user }] = useStateValue();
  return (
    <>
      <Navbar>
        <Brand>
          <h2>IDealBuy</h2>
          <img src={logo} alt="" />
        </Brand>
        <OptionsLinks>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/products">Productos</NavLink>
          {user ? null : (
            <NavLink to="/login">
              <Button min>Login</Button>
            </NavLink>
          )}
          {user ? null : (
            <NavLink to="/register">
              <Button min secondary>
                Registrarse
              </Button>
            </NavLink>
          )}
        </OptionsLinks>
        <MenuBars to="#">
          <MdMenu
            size="32px"
            style={{ color: "white" }}
            onClick={showSidebar}
          />
        </MenuBars>
      </Navbar>
      <NavMenu active={sideBarState}>
        <NavMenuItems>
          <NavbarToggle>
            <Link to="#">
              <MdClose
                size="32px"
                style={{ color: "white" }}
                onClick={showSidebar}
              />
            </Link>
          </NavbarToggle>
          <NavText>
            <Link to="/">Inicio</Link>
          </NavText>
          <NavText>
            <Link to="/products">Productos</Link>
          </NavText>
          {user ? null : (
            <NavText>
              <Link to="/login">
                <Button secondary>Iniciar sesión</Button>
              </Link>
            </NavText>
          )}
          {user ? null : (
            <NavText>
              <Link to="/register">
                <Button>Registrarse</Button>
              </Link>
            </NavText>
          )}
        </NavMenuItems>
      </NavMenu>
    </>
  );
};
