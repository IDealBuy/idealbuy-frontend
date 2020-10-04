import styled from "styled-components";
import { device } from "../../utils/device";

export const ModalContainer = styled.div`
	display: grid;
	grid-template-columns: 35% 65%;
	grid-template-rows: auto;

	/* quitar este padding cuando se implemente en el modal */
	padding: 20px;

	@media ${device.tablet} {
		display: block;
	}
	@media ${device.mobileM} {
		display: block;
	}
`;

export const ProductDetail = styled.div`
	background-color: #f1faee;
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
	@media ${device.tablet} {
		h4 {
			font-size: 20px;
		}
		p {
			font-size: 20px;
		}
	}
	@media ${device.mobileM} {
		h2 {
			font-size: 32px;
		}
		h4 {
			font-size: 18px;
		}
		padding: 3%;
		p {
			font-size: 18px;
		}
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
	justify-items: center;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
	@media ${device.mobileM} {
		grid-gap: 5px;
	}
`;

export const ItemRelated = styled.div`
	width: 100px;
	height: auto;
	img {
		width: 100%;
	}
	h4 {
		text-align: center;
	}
	@media ${device.tablet} {
		width: 150px;
	}

	@media ${device.mobileM} {
		width: 100px;
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
