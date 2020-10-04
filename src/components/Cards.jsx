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

const addItem = () => {
	console.log('add item')
}

const removeItem = () => {
	console.log('remove item')
}

export const ProductCard = ({ home, id, name, description, photo }) => {
	return (
		<ContainerProductCard key={id}>
			<ImgProductCard
			
				src={photo}
			/>
			<ProductCardData id={id} name={name} price="$3000" description={description} />
			{home ? null : <ButtonsProductCard/>}
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

const ProductCardData = ({ name, price, description }) => {
	return (
		<ContainerData>
			<div>
				<TextCard bold>{name}</TextCard>
				<TextCard small>{description}</TextCard>
			</div>
			<TextCard highlight>{price}</TextCard>
		</ContainerData>
	);
};

export const ButtonsProductCard = () => (
	
	
	<ContainerButtons>
		<RectangularButton secondary onClick={removeItem}>
			<MdRemove />
		</RectangularButton>
		<TextCard>0</TextCard>
		<RectangularButton onClick={addItem}>
			<MdAdd />
		</RectangularButton>
	</ContainerButtons>
);
