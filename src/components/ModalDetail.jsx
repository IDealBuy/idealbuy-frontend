import React from "react";
import {
	ModalContainer,
	ProductDetail,
	ContainerButtons,
	RelatedItemContainer,
	ItemRelated,
	ImageDetail,
} from "../styles/components/modalDetail";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Button } from "../components/Buttons";
import { ButtonsProductCard } from "../components/Cards";

export default function ModalDetail() {
	return (
		<ModalContainer>
			<ProductDetail>
				<h2>Product.name</h2>
				<h4>Category.name</h4>
				<h4>0.99 $</h4>
				<div>
					<FaStar size="1.5em" />
					<FaStar size="1.5em" />
					<FaStar size="1.5em" />
					<FaStar size="1.5em" />
					<FaRegStar size="1.5em" />
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit
					nobis quasi optio dicta, eveniet, voluptate laborum accusantium
					explicabo quidem sit velit blanditiis quia reprehenderit repudiandae
					accusamus deserunt, aliquid non?
				</p>
				<ContainerButtons>
					<div>
						<Button secondary>Add.car</Button>
					</div>
					<ButtonsProductCard />
				</ContainerButtons>
				<div>
					<h3>Productos Relacionados:</h3>
					<RelatedItems>
						<RelatedItem />
						<RelatedItem />
						<RelatedItem />
					</RelatedItems>
				</div>
			</ProductDetail>
			<ImageDetail>
				<img
					src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=689&q=80"
					alt="detail"
				/>
				<p>prev 1/4 next</p>
			</ImageDetail>
		</ModalContainer>
	);
}

export const RelatedItems = ({ children }) => (
	<RelatedItemContainer>{children}</RelatedItemContainer>
);

export const RelatedItem = () => (
	<ItemRelated>
		<img
			src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=689&q=80"
			alt="product"
		/>
		<h4>$ 1.00</h4>
	</ItemRelated>
);
