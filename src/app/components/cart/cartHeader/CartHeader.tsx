"use client";

import { FC } from "react";
import { Header, Title } from "./CartHeader.styles";

const CartHeader: FC<{totalCount: number}> = (props) => {

  return (
    <Header>
        <Title>Cart ({props.totalCount})</Title>
    </Header>
  )
};
export default CartHeader;
