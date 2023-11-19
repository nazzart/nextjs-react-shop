import styled from "styled-components";

export const SearchInput = styled.input(({ theme: { down, breakpoints, colors } }) => `
    height: 35px;
    border-radius: 4px;
    padding: 5px 10px;
    margin-bottom: 25px;
    min-width: 384px;
    border: 1px solid ${colors.mediumGray};
    outline:none;
    box-sizing: border-box;

    ${down(breakpoints.md)} {
        width: 100%;
    }
`);