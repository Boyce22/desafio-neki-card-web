import styled, {css} from "styled-components"
export const ButtonRegisterStyled = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GREEN_600};
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.sm}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        font-weight: 700;
        width: 12rem;
        height: 4rem;
        cursor: pointer;
        text-align: center;
        padding: 0.2rem;  
        text-transform: uppercase;
        border-radius: 6px;
        &:hover{
            background-color: ${theme.COLORS.GREEN_700};
        }
        position: fixed;
        z-index: 3;
        bottom: 1rem;
        right: 1rem;
    `}

`