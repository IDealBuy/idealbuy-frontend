import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import {
	ContainerProductCard,
	ImgProductCard,
	ContainerData,
	TextCard,
	ContainerButtons,
	BackgroundPromo,
	DataPromo,
} from "../styles/components/Cards";
import { RectangularButton } from "./Buttons";

export const ProductCard = ({ home }) => {
	return (
		<ContainerProductCard home={home}>
			<ImgProductCard
				home={home}
				src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80"
			/>
			<ProductCardData name="Pan Tajado" price="$3000" weight="500g" />
			{home ? null : <ButtonsProductCard />}
		</ContainerProductCard>
	);
};

export const PromoCard = ({ productName, productPrice }) => {
	return (
		<BackgroundPromo image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80">
			<DataPromo>
				<p>{productName}</p>
				<p>{productPrice}</p>
			</DataPromo>
		</BackgroundPromo>
	);
};

const ProductCardData = ({ name, price, weight }) => {
	return (
		<ContainerData>
			<div>
				<TextCard bold>{name}</TextCard>
				<TextCard small>{weight}</TextCard>
			</div>
			<TextCard highlight>{price}</TextCard>
		</ContainerData>
	);
};

export const ButtonsProductCard = () => (
	<ContainerButtons>
		<RectangularButton secondary>
			<MdRemove />
		</RectangularButton>
		<TextCard>0</TextCard>
		<RectangularButton>
			<MdAdd />
		</RectangularButton>
	</ContainerButtons>
);
