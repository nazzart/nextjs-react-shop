"use client";

import { Product } from "@/models/product.interface";
import { FC } from "react";
import Button from "../../buttons/Button";
import useAddItem from "@/app/hooks/useAddItem";
import Image from "next/image";
import {
  Card,
  Description,
  ImageBlock,
  Meta,
  Price,
  Title,
} from "./ProductCart.styles";
import formatPrice from "@/app/lib/formatPrice";

const ProductCard: FC<{ product: Product }> = (props) => {
  // Hook to add products
  const { addItem } = useAddItem();

  return (
    <Card>
      <ImageBlock>
        <Image
          src={props.product.thumbnail}
          alt={props.product.title}
          width={300}
          height={300}
          priority={true}
        />
        <Meta>
          <Description>{props.product.description}</Description>
          <Price>{formatPrice(props.product.price)}</Price>
        </Meta>
      </ImageBlock>

      <Title>{props.product.title}</Title>
      <Button
        color="primary"
        size="standart"
        onClick={() => {
          addItem(props.product);
        }}
      >
        Add to Cart - {formatPrice(props.product.price)}
      </Button>
    </Card>
  );
};

export default ProductCard;
