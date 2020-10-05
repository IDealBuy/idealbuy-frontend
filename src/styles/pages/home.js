import styled from "styled-components";
import { device } from "../../utils/device.js";

export const Container = styled.section`
  display: grid;
  width: 100vw;
  /* height: calc(100vh - 80px); */
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  /* margin-top:80px; */
`;

export const Background = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='100'  height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231d3557' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 13;
  height: 100%;
  width: 100%;
`;

export const MainImage = styled.img`
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 13;
  width: 100%;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: 7;
  grid-column-end: 12;
  grid-row-start: 1;
  grid-row-end: 13;
  @media ${device.tablet} {
    grid-column-start: 2;
    grid-column-end: 12;
    grid-row-start: 1;
    grid-row-end: 13;
  }
`;

export const BestSellers = styled.section`
grid-column-start: 7;
  grid-column-end: 12;
  grid-row-start: 5;
  grid-row-end:9;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-content: center;
  height: min-content;
  width: 100%;
  gap: 10px;
  padding: 10px;
  @media ${device.tablet} {
    display: none;
  }
`;

export const MainText = styled.h3`

  margin: 0;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin: .5em 0;
  @media ${device.tablet} {
    font-size: 36px;
  }
`;

export const Highlight = styled.span`
  color: var(--primary-color);
`;

export const Paragraph = styled.p`
  font-size: 18px;
  padding: 10px;
  margin: 1em 0;
  text-align:justify;
  grid-column-start: 7;
  grid-column-end: 12;
  grid-row-start: 3;
  grid-row-end: 4;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const Wave = styled.img`
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 100%;
  height: 80px;
  /* object-fit: fill; */
  /* position:absolute; */
`;

export const ImageMobile = styled.img`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;
