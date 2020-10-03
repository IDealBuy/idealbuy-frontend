import styled from "styled-components";
import { device } from "../../utils/device";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  position: absolute;
  width: 600px;
  background-color: #f7f7f7;
  border-radius: 16px;
  padding: 50px 70px 50px 70px;
  transition: all 1s;
  & > svg {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  @media ${device.tablet} {
    width: 80%;
    padding: 10px;
  }
`;
