import styled, { css } from "styled-components";

export const ContainerProductCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 8px;
  height: 350px;
  width: 300px;
  background: var(--background-color);
  border-radius: 16px;
  box-sizing: border-box;
`;

export const ContainerData = styled.div`
  display:flex;
  justify-content:space-between;
  padding:15px 10px;
`;

export const ContainerButtons = styled.div`
  display:flex;
  width: 30%;
  justify-content:space-between;
  text-align:center;
  padding-left:10px
`

export const ImgProductCard = styled.img`
  height: 60%;
  width: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`;

export const TextCard = styled.p`
  font-size: 18px;
  margin: 0;
  margin-bottom:5px;
  ${(props) =>
    props.highlight &&
    css`
      color: var(--primary-color);
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  
  ${(props) =>
    props.small &&
    css`
      font-size: 16px;
    `}
`;
