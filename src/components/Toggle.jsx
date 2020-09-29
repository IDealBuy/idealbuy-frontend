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

const Toogle = () => {
    return(
        <ToggleContainer>
          <div className="text">
            <strong>
              DoublePacking
            </strong>
            <p>
              Improve your packing
            </p>
          </div>
          <div className="price">
            $3.00
          </div>
          <div className="Toggle_Button">
            x
          </div>
        </ToggleContainer>
        
      );
}

export default Toogle