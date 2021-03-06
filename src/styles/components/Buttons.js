import styled, { css } from "styled-components";
import { device } from "../../utils/device";
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
  ${(props) =>
    props.mr_1 &&
    css`
      margin-right: 1em;
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
      margin-right: 20px;
    `}
  ${(props) =>
    props.mr_1 === true &&
    css`
      margin-right: 1em;
    `}
    ${(props) =>
    props.min &&
    css`
      font-size: 16px;
      width: 120px;
      padding: 0 1em;
    `}
    @media ${device.mobileM} {
    height: 30px;
  }
`;
