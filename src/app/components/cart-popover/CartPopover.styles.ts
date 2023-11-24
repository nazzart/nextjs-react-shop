import styled from "styled-components";

export const Popover = styled.div`
  position: relative;
  float: right;
  z-index: 1;

  &:before {
    content: "";
    display: block;
    position: absolute;
    right: 31px;
    top: 10px;
    width: 10px;
    height: 10px;
    background-color: white;
    -webkit-transform: translateY(-50%) rotate(45deg);
    -moz-transform: translateY(-50%) rotate(45deg);
    -ms-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    z-index: 1;
  }
`;

export const Content = styled.div(
  ({ theme: { down, breakpoints } }) => `

    position: absolute;
    background: white;
    top: 10px;
    right: 0px;
    width: 370px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 24px 0px;
    border-radius: 4px;
    padding: 15px 20px;

    ${down(breakpoints.sm)} {
      width: 310px;
    }
`
);

export const CartContent = styled.div`
  max-height: 300px;
  overflow: scroll;
`;
