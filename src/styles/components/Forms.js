import styled from "styled-components";

export const Input = styled.input`
  background: #d3edee;
  color: #1d3557;
  padding: 8px 25px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  :focus {
    outline: none;
    -webkit-box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.4);
  }
`;
