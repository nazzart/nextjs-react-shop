"use client";

import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 3em;
  padding-bottom:6em;
  width: 35%;
`;

const DescriptionTitle = styled.h1`
  margin-bottom: 5px;
`;

const DescriptionText = styled.p`
  color: ${({ theme }) => `${theme.colors.lightGray}`};
  margin-top: 0;
`;

const Header: FC = () => {
  return (
    <Wrapper>
      <DescriptionTitle>We sell stuff</DescriptionTitle>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DescriptionText>
    </Wrapper>
  );
};
export default Header;
