import React from 'react'
import { RectButton } from '../styles/components/Buttons'

export const Buttons = () => {
    return (
        <div>

        </div>
    )
}

export const RectangularButton = ({children, secondary=false}) => (
    <RectButton secondary={secondary}>
        {children}
    </RectButton>
)