"use client";
import { FC, useEffect, useRef, useState } from "react";
import IconCart from "../icons/IconCart";
import {
  Popover,
  Content,
  MainTitle,
  Meta,
  Text,
  ShippingPrice,
  Total,
} from "./CartPopover.styles";
import useCart from "@/app/hooks/useCart";
import Products from "../products/Products";
import useRemoveItem from "@/app/hooks/useRemoveItem";

const CartPopover: FC = () => {
  const { removeItem } = useRemoveItem();

  const [isOpen, setOpen] = useState<boolean>(false);
  const popoverElement = useRef<HTMLDivElement>(null);
  const { cartItems } = useCart();
  const [totalCost, setTotalCost] = useState<number>(0);

  const closeWhenClickOutside = (e: MouseEvent) => {
    if (
      popoverElement.current &&
      !popoverElement.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeWhenClickOutside);
  }, []);

  useEffect(() => {
    // calculate total cost of all the cart items
    const totalCost = cartItems.reduce((result, item) => {
      return item.price * item.quantity! + result;
    }, 0);

    setTotalCost(totalCost);
  }, [cartItems]);

  return (
    <Popover ref={popoverElement} className={isOpen ? "active" : ""}>
      <IconCart
        size={24}
        onClick={() => setOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      />
      {isOpen && (
        <Content>
          <MainTitle>Your cart ({cartItems.length})</MainTitle>
          {cartItems.length < 1 ? (
            <p>There are no items in your cart yet.</p>
          ) : (
            <>
              {cartItems.map((item, id) => (
                <div key={id}>
                  {item.name}
                  {item.quantity}
                  <div onClick={() => removeItem(item)}>remove</div>
                </div>
              ))}
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
            </>
          )}
        </Content>
      )}
    </Popover>
  );
};
export default CartPopover;
