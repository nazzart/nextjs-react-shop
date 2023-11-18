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

const ProductCard: FC<{ product: Product }> = (props) => {
  const { addItem } = useAddItem();

  return (
    <Card>
      <ImageBlock>
        <Image
          src={"https://placehold.co/600x600?text=Image+Placeholder"}
          alt={props.product.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <Meta>
          <Description>{props.product.description}</Description>
          <Price>$ {props.product.price}</Price>
        </Meta>
      </ImageBlock>

      <Title>{props.product.name}</Title>
      <Button
        onClick={() => {
          addItem(props.product);
        }}
      >
        Add to Cart - {props.product.price} $
      </Button>
    </Card>
  );
};

export default ProductCard;
