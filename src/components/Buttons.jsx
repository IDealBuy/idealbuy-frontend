import React from "react";
import { RectButton, NormButton } from "../styles/components/Buttons";

export const Button = ({ children , onClick, secondary=false, mr_1,mr_2, min}) => <NormButton min={min} mr_1={mr_1} mr_2={mr_2} secondary={secondary} onClick={onClick}>{children}</NormButton>;

export const RectangularButton = ({ children, onClick, secondary = false }) => {
    return (<RectButton secondary={secondary} onClick={onClick}>
        {children}
    </RectButton>)
}
