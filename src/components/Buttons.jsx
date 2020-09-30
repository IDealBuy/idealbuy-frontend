import React from "react";
import { RectButton, NormButton } from "../styles/components/Buttons";

export const Button = ({ children , onClick}) => <NormButton onClick={onClick}>{children}</NormButton>;

export const RectangularButton = ({ children, secondary = false }) => <RectButton secondary={secondary}>{children}</RectButton>
