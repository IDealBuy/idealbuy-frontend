import styled, { css } from "styled-components";

export const ContainerProductCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 8px;
  height: 350px;
  width: 100%;
  background: #E9EAF2;
  border-radius: 16px;
  box-sizing: border-box;

  ${(props) =>
    props.home &&
    css`
      height: 250px;
    `}
`;

export const ContainerData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: center;
  padding-left: 10px;
`;

export const ImgProductCard = styled.img`
  height: 60%;
  width: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  ${(props) =>
    props.home &&
    css`
      height: 70%;
    `}
`;

export const TextCard = styled.p`
  font-size: 18px;
  margin: 0;
  margin-bottom: 5px;
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

export const BackgroundPromo = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  /* margin:10px; */
  ${(props) =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}
`;

export const DataPromo = styled.div`
  text-align: center;
  min-width: 40%;
  margin-bottom: -15px;
  padding: 10px 10px 0 10px;
  border-radius: 8px;
  background: var(--background-color);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;
