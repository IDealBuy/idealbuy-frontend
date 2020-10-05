import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../assets/logo.png";
import { useStateValue } from "../Context";
import { logout } from "../utils/auth";
import { toast } from "react-toastify";

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
  const { itemCount } = useContext(CartContext);
  const [{ user }, dispatch] = useStateValue();

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
          {user ? (
            <Link to="/cart">
              <span>Cart: {itemCount}</span>
            </Link>
          ) : null}

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
          {user ? (
            <Button
              mr_2
              onClick={() => {
                logout();
                dispatch({
                  type: "changeCurrentUser",
                  user: null,
                });
                toastSucces("Sesión cerrada");
              }}
              min
              secondary
            >
              Logout
            </Button>
          ) : null}
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
          {user ? (
            <NavText>
              <Button
                mr_2
                onClick={() => {
                  logout();
                  dispatch({
                    type: "changeCurrentUser",
                    user: null,
                  });
                  toastSucces("Sesión cerrada");
                }}
                secondary
              >
                Logout
              </Button>
            </NavText>
          ) : null}
        </NavMenuItems>
      </NavMenu>
    </>
  );
};

const toastSucces = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
