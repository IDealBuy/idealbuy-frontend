import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const Navbar = styled.nav`
  background-color: #1d3557;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const MenuBars = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;
export const NavLogo = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;

export const NavMenu = styled.div`
  background-color: #1d3557;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;

  ${(props) =>
    props.active &&
    css`
      left: 0;
      transition:350ms;
    `}
`;

export const NavText = styled.li`
    display:flex;
    justify-content:start;
    align-items:center;
    padding:8px 0 8px 16px;
    list-style:none;
    height:60px ;

    & > a {
        text-decoration:none;
        color:white;
        font-size:18px;
        width: 95%;
        height:100%;
        display:flex;
        align-items:center;
        padding:0 16px;
        border-radius:4px;
    }

    & > a:hover {
        background-color:#6C95CE;
    }

`

export const NavMenuItems = styled.div`
    width: 100%;
`
export const NavbarToggle = styled.li`
    background-color:#1d3557;
    width:100%;
    height:80px ;
    display:flex;
    justify-content:start;
    align-items:center;
  margin-left: 2rem;
  

    
`