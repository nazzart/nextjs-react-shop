"use client";

import { FC } from "react";
import styled from "styled-components";
import CartPopover from "../cart-popover/CartPopover";

const Wrapper = styled.section`
  padding-top: 3em;
  padding-bottom:6em;
`;

const DescriptionTitle = styled.h1`
  margin-bottom: 5px;
`;

const DescriptionText = styled.p`
  color: ${({ theme }) => `${theme.colors.lightGray}`};
  margin-top: 0;
  width: 35%;
`;

const Header: FC = () => {
  return (
    <Wrapper>
      <CartPopover />
      <DescriptionTitle>We sell stuff</DescriptionTitle>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DescriptionText>
    </Wrapper>
  );
};
export default Header;
