import styled, { css } from 'styled-components'

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
    props.secondary===true &&
    css`
      background: var(--secondary-color50);
    `}
`
