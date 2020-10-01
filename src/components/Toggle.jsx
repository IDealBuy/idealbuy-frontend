import React from 'react'
import GlobalStyle from '../globalStyles'
import styled, {css} from 'styled-components'

const ToggleContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid red;
  display: flex;
  flex-flow: row;
  margin: 1em 0 0 0;
  justify-content: space-evenly;
  align-items: center;
`

const ToggleDescription = styled.div`
  border: 1px solid red;
`

const TogglePrice = styled.div`
  border: 1px solid green;
`

const Toogle = styled.input`
  border: 1px solid yelow;
`

const Toogle = () => {
    return(
        <ToggleContainer>
          
        </ToggleContainer>
        
      );
}

export default Toogle