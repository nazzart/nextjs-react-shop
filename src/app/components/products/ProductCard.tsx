"use client";

import { Product } from "@/models/product.interface";
import { FC } from "react";
import styled from "styled-components";
import Button from "../buttons/Button";

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
  return (
    <Card>
      <Title>
        {props.product.name}
      </Title>
        <Button>Add to Cart - 100$</Button>
    </Card>
  );
};

export default ProductCard;
