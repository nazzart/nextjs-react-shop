"use client";

import { FC, lazy, useState, useTransition } from "react";
import Link from "next/link";
import { Badge, DescriptionText, DescriptionTitle, IconWrapper, Wrapper } from "./Header.styles";
import IconCart from "../icons/IconCart";
import useCart from "@/app/hooks/useCart";

// Use React.lazy to create a new chunk of the popover. We want to use it when user interact with it.
const CartPopover = lazy(() => import("../cart-popover/CartPopover"));

const Header: FC = () => {

  // Cart hook
  const { cartItems } = useCart();

  // useTransition is used to let React know there will be a rerender and component load when the button is pressed.
  const [, startTransition] = useTransition();

  const [openPopover, setOpenPopover] = useState(false);
  
  return (
    <Wrapper>
      <IconWrapper onClick={() => {startTransition(() => {setOpenPopover(!openPopover)})}} data-testid="icon-wrapper">
        <IconCart size={24}/>
        {cartItems.length > 0 && <Badge data-testid="badge-total-count">{cartItems.length}</Badge>}
      </IconWrapper>
      {openPopover && <CartPopover onClose={() => setOpenPopover(false)}/>}
      <DescriptionTitle>
        <Link href="/">We sell stuff</Link>
      </DescriptionTitle>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DescriptionText>
    </Wrapper>
  );
};
export default Header;
