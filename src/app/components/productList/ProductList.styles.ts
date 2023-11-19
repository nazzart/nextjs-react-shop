import styled from "styled-components";

export const List = styled.div(
  ({ theme: { down, breakpoints } }) => `
  
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  
      ${down(breakpoints.md)} {
        grid-template-columns: repeat(2, 1fr);
      }
  
      ${down(breakpoints.sm)} {
        grid-template-columns: repeat(1, 1fr);
      }
  `
);

export const NotFoundText = styled.p``
