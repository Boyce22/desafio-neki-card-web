import styled, {css} from "styled-components";

export const Container = styled.div`
    ${({theme}) => css`
        background-color: ${theme.COLORS.NEUTRAL_700};
        color: ${theme.COLORS.ZINC};
        font-size: ${theme.FONT_SIZE.typewritter}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO};
    `}
    width: 50rem;
    @media (max-width: 805px) {
        display: none;
    }
`