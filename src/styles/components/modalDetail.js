import styled from "styled-components";
import vars from "../../utils/vars";

export const ModalContainer = styled.div`
	display: grid;
	grid-template-columns: 35% 65%;
	grid-template-rows: auto;
	padding: 20px;
`;

export const ProductDetail = styled.div`
	background-color: ${vars.backgroundColor};
	padding: 40px;
	h2 {
		margin: 10px 0;
		font-size: 48px;
		font-family: Karla, sans-serif;
	}
	h4 {
		margin: 10px 0;
	}
	p {
		margin-top: 10px;
	}
`;

export const ContainerButtons = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	div {
		width: 50%;
	}
`;

export const RelatedItemContainer = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
`;

export const ItemRelated = styled.div`
	width: 100px;
	height: auto;
	img {
		width: 100%;
	}
`;

export const ImageDetail = styled.div`
	text-align: center;
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;
