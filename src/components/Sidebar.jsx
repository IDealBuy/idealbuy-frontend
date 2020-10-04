import React, { useState, useContext } from "react";
import {CartContext} from '../contexts/CartContext';
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import LogoWhite from "../assets/images/logo-white.png"
import { Navbar, MenuBars, NavList, NavItem, NavMenu, NavText, NavMenuItems, NavbarToggle } from "../styles/components/Sidebar";

export const Sidebar = () => {
    const [sideBarState, setSideBarState] = useState(false);
    const showSidebar = () => setSideBarState(!sideBarState);
    
    const [cart, setCart] = useContext(CartContext);

  return (
    <>
      <Navbar>
        <MenuBars to="#">
          <MdMenu size="32px" style={{color:"white"}} onClick={showSidebar}/>
        </MenuBars>
        <NavList>
          <NavItem >
            <Link to="/">
              <img src={LogoWhite} alt="" />

            </Link>
          </NavItem>
          <NavItem>
            <Link to="/login">
              <p>Sign Up / Log In</p>
            </Link>
          </NavItem>
          <NavItem>
            <span>Cart: {cart.length}</span>
          </NavItem>
          

        </NavList>
      </Navbar>
      <NavMenu active={sideBarState}>
        <NavMenuItems>
          <NavbarToggle>
            <Link to="#" >
              <MdClose size="32px" style={{color:"white"}} onClick={showSidebar}/>
            </Link>
          </NavbarToggle>
          {
              sidebarData.map((item, index)=>{
                 return ( <NavText key={index} >
                     <Link to={item.path}>
                         {item.title}
                     </Link>
                  </NavText>)
              })
          }
        </NavMenuItems>
      </NavMenu>
    </>
  );
};


const sidebarData = [
    {
        title:'All',
        path:'products',
    },
    {
        title:'Meat',
        path:'category/meat',
    },
    {
        title:'Vegetables',
        path:'category/vegetables',
    },
    {
        title:'Bread',
        path:'category/bread',
    },
]