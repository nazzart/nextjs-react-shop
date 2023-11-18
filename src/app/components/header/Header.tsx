"use client";

import { FC } from "react";
import CartPopover from "../cart-popover/CartPopover";
import Link from "next/link";
import { DescriptionText, DescriptionTitle, Wrapper } from "./Header.styles";

const Header: FC = () => {
  return (
    <Wrapper>
      <CartPopover />
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
