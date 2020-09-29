import styled from "styled-components";

export const ProductsContainer = styled.section`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(auto-fill, 300px);

  justify-content: center;

  gap: 10px;
`;

export const Title = styled.h2`
    margin-left:10px;
    font-size:48px;
    font-weight:bold;
`
