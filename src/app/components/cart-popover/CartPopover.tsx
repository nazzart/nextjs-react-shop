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

const CartPopover: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const popoverElement = useRef<HTMLDivElement>(null);

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

  return (
    <Popover ref={popoverElement} className={isOpen ? "active" : ""}>
      <IconCart size={24} onClick={() => setOpen(!isOpen)} />
      {isOpen && (
        <Content>
          <MainTitle>Your cart</MainTitle>
          <Meta>
            <Text>Subtotal</Text>
            <Text>254$</Text>
          </Meta>
          <Meta>
            <Text>Shipping</Text>
            <Text>
              <ShippingPrice>Calculated at the next step</ShippingPrice>
            </Text>
          </Meta>
          <Total>
            <Text>
              Total
            </Text>
            <Text>254$</Text>
          </Total>
        </Content>
      )}
    </Popover>
  );
};
export default CartPopover;
