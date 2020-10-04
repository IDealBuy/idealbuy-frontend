import React from "react";
// import GlobalStyle from '../globalStyles'
import styled from "styled-components";
import { device } from "../utils/device";

export const ToggleContainer = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-flow: row;
  margin: 1em 0 0 0;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1em 0.5em;
  width: 100%;
  @media ${device.mobileL} {
    padding: 0.5em 0.4em;
  }
  /* min-width: 290px; */
`;

const ToggleDescription = styled.div`
  & h4 {
    margin: 0;
    color: #000000;
    font-size: 0.9em;
  }
  & p {
    /* color: var(--secondary-color); */
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.7em;
    margin: 0;
  }
`;

const TogglePrice = styled.div``;

export const ToogleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  > input:checked + span {
    background-color: var(--secondary-color);
  }

  > input:focus + span {
    box-shadow: 0 0 1px var(--secondary-color);
  }

  > input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    @media ${device.mobileL} {
      -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
  }
  @media ${device.mobileL} {
    width: 48px;
    height: 27px;
  }
`;
export const ToggleInput = styled.input``;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    @media ${device.mobileL} {
    width: 20px;
    height: 20px;
  }
  }
`;

const Toogle = () => {
  return (
    <ToggleContainer>
      <ToggleDescription>
        <h4>Double Packing</h4>
        <p>Improve your packing</p>
      </ToggleDescription>
      <TogglePrice>
        <p>$3.00</p>
      </TogglePrice>
      <ToogleLabel>
        <ToggleInput type="checkbox" />
        <Slider />
      </ToogleLabel>
    </ToggleContainer>
  );
};

export default Toogle;
