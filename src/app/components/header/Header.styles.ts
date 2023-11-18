import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 3em;
  padding-bottom: 6em;
`;

export const DescriptionTitle = styled.h1`
  margin-bottom: 5px;

  a {
    text-decoration: none;
    color: ${({ theme }) => `${theme.colors.black}`};
  }
`;

export const DescriptionText = styled.p(
  ({ theme: { down, breakpoints, colors } }) => `

  color: ${colors.lightGray};
  margin-top: 0;
  width: 35%;

    ${down(breakpoints.lg)} {
      width: 100%;
    }
`
);