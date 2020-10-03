import styled, { css } from "styled-components";

export const RectButton = styled.button`
  background: var(--primary-color);
  height: 32px;
  width: 32px;
  /* text-align:center; */
  border-radius: 10px;
  border: none;
  padding: 0;
  box-sizing: border-box;
  ${(props) =>
    props.secondary === true &&
    css`
      background: var(--secondary-color50);
    `}
`;

export const NormButton = styled.button`
  background: var(--primary-color);
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  -webkit-box-shadow: inset 0px -4px 4px 2px rgba(29, 53, 87, 0.15);
  -moz-box-shadow: inset 0px -4px 4px 2px rgba(29, 53, 87, 0.15);
  box-shadow: inset 0px -4px 4px 2px rgba(29, 53, 87, 0.15);
  ${(props) =>
    props.secondary === true &&
    css`
      background: var(--secondary-color50);
    `}
  ${(props) =>
    props.mr_2 === true &&
    css`
      margin-right:20px;
    `}
`;
