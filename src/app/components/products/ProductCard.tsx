"use client";

import { Product } from "@/models/product.interface";
import { FC } from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import useAddItem from "@/app/hooks/useAddItem";

const Card = styled.div`
text-align: center;
`;

const Title = styled.h2`
    font-weight: bold;
    margin-top: 10px;
    text-align:center;
    font-size: ${({ theme }) => `${theme.fontSizes.small}`};

`

const ProductCard: FC<{ product: Product }> = (props) => {

  const { addItem } = useAddItem();
  
  return (
    <Card>
      <Title>
        {props.product.name}
      </Title>
        <Button onClick={() => {
                  addItem(props.product);
                }}>Add to Cart - {props.product.price} $</Button>
    </Card>
  );
};

export default ProductCard;
