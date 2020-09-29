import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { Navbar, MenuBars, NavMenu, NavText, NavMenuItems, NavbarToggle } from "../styles/components/Sidebar";

export const Sidebar = () => {
    const [sideBarState, setSideBarState] = useState(false);
    const showSidebar = () => setSideBarState(!sideBarState);

  return (
    <>
      <Navbar>
        <MenuBars to="#">
          <MdMenu size="32px" style={{color:"white"}} onClick={showSidebar}/>
        </MenuBars>
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