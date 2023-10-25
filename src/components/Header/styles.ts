import styled, { css } from "styled-components";

export const Container = styled.header`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.BLACK_700};
        height: 4vh;
    `}
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.p`
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.xl}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO};
    `}

`

