import styled from "styled-components";
import { device } from "../../utils/device";

export const TableContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  @media ${device.tablet} {
    justify-content: center;
  }
`;
export const TableContainer = styled.section`
  border-radius: 16px;
  padding: 10px;
  margin: 10px 0;
  background: white;
`;

export const HeaderTable = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom:1em;
`;

export const ItemContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 280px;
  max-width: 300px;
  height: 100px;
  /* background:red; */
  border-bottom: 1px solid grey;
  margin-right: 10px;
`;

export const IconItem = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 10px;
`;

export const IconLeft = styled.section`
  display: flex;
  align-items: center;
`;
export const IconRight = styled.section`
  text-align: right;
  margin-right: 10px;
`;

export const PrimaryText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: var(--secondary-color);
  margin-bottom: 0.5em;
`;

export const SecondaryText = styled.p`
  font-size: 14px;
  color: grey;
`;

export const ContainerButtons = styled.div`
  display: flex;
  @media ${device.tablet} {
    & > button {
      font-size: 12px;
    }
  }
`;
