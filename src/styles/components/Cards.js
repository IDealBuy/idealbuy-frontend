import styled from 'styled-components'

export const ContainerProductCard = styled.article`
  display: flex;
  flex-direction: column;
  padding:8px;
  height:350px;
  width:300px;
  background:var(--background-color);
  border-radius:16px;
  box-sizing:border-box;
`

export const ImgProductCard = styled.img`
    height:60%;
    width:100%;
    object-fit:cover;
    border-radius:12px 12px 0 0 ;
`
