"use client";

import { FC, useEffect, useState } from "react";
import { Product } from "@/models/product.interface";
import { Meta, ShippingPrice, Total, Text, Footer } from "./CartFooter.styles";


const CartFooter: FC<{ cartItems: Product[] }> = (props) => {
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    // calculate total cost of all the cart items
    const totalCost = props.cartItems.reduce((result, item) => {
      return item.price * item.quantity! + result;
    }, 0);

    setTotalCost(totalCost);
  }, [props.cartItems]);

  return (
    <Footer>
      <Meta>
        <Text>Subtotal</Text>
        <Text>{totalCost} $</Text>
      </Meta>
      <Meta>
        <Text>Shipping</Text>
        <Text>
          <ShippingPrice>Calculated at the next step</ShippingPrice>
        </Text>
      </Meta>
      <Total>
        <Text>Total</Text>
        <Text>{totalCost} $</Text>
      </Total>
    </Footer>
  );
};
export default CartFooter;
