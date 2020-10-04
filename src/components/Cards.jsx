import React, { useState, useContext } from "react";
import {CartContext} from '../contexts/CartContext';
import { MdAdd, MdRemove } from "react-icons/md";
import { RectangularButton } from "./Buttons";
import {
	ContainerProductCard,
	ImgProductCard,
	ContainerData,
	TextCard,
	ContainerButtons,
	BackgroundPromo,
	DataPromo,
} from "../styles/components/Cards";


export const ProductCard = ({home, product}) => {
	
	const [cart, setCart] = useContext(CartContext);
	
	const addItem = () => {
		
		console.log('add item')
		setCart(curr => [...curr,product])
	}
	
	const removeItem = () => {
		console.log('remove item')
	}
	
	

	return (
		<ContainerProductCard>
			<ImgProductCard
			
				src={product.photo}
			/>
			<ProductCardData name={product.name} price="$3000" description={product.description} />
			{/* {home ? null : <ButtonsProductCard product={product} />} */}

			<button onClick={addItem}>Menos</button> 
				Text
			<button onClick={removeItem}>Más</button>
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

export const ButtonsProductCard = (product) => (
	
	<ContainerButtons>
		<RectangularButton secondary >
			<MdRemove />
		</RectangularButton>
		<TextCard> 0 </TextCard>
		<RectangularButton >
			<MdAdd />
		</RectangularButton>
	</ContainerButtons>	
);
