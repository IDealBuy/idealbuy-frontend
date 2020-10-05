import styled from "styled-components";
import { device } from "../../utils/device";

export const Article = styled.article`
	transition: all 0.5s;
	height: 300px;
	width: 250px;
	border-radius: 16px;
	background: white;
	margin-top: 1em;
	&:hover {
		-webkit-box-shadow: 0px 0px 15px -3px var(--primary-color);
		-moz-box-shadow: 0px 0px 15px -3px var(--primary-color);
		box-shadow: 0px 0px 15px -3px var(--primary-color);
	}
	@media ${device.tablet} {
		height: 240px;
		width: 200px;
	}
	@media ${device.mobileM} {
		height: 210px;
		width: 175px;
	}
`;

export const Img = styled.img`
	height: 70%;
	width: 100%;
	object-fit: cover;
	border-radius: 16px 16px 0 0;
`;
export const Data = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	box-sizing: border-box;
	padding: 5px 15px;
	height: 30%;
`;

export const Name = styled.p`
	font-size: 1em;
	font-weight: bold;
`;
export const Price = styled.p`
	font-size: 1em;
	color: var(--primary-color);
`;
export const Button = styled.button`
	background: var(--secondary-color);
	font-size: 0.8em;
	padding: 2px 5px;
	border-radius: 5px;
	font-weight: normal;
	border: none;
`;

////// Create Product

export const Div = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
`;

export const ContainerCreate = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media ${device.tablet} {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export const Form = styled.section`
	display: flex;
	flex-direction: column;
	margin-right: 1em;
`;

export const UploadFile = styled.input`
	&[type="file"] {
		background: red;
	}
`;

export const Label = styled.label`
	margin-top: 15px;
	@media ${device.mobileM} {
		font-size: 12px;
	}
`;

export const TitleCreate = styled.h3`
	font-weight: bold;
	font-size: 2em;
	margin: 0;
	@media ${device.tablet} {
		font-size: 1.5em;
	}
`;
