import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 3em;
  padding-bottom: 6em;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 25px;
  position: relative;

  svg {
    cursor: pointer;
  }
`;

export const Badge = styled.div`
  position: absolute;
  background: ${({ theme }) => `${theme.colors.primary}`};
  color: white;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -6px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  right: -6px;
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

  color: ${colors.mediumGray};
  margin-top: 0;
  width: 35%;

    ${down(breakpoints.lg)} {
      width: 100%;
    }
`
);