import styled, {css} from "styled-components"

export const Button = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GREEN_400};
        color: ${theme.COLORS.BLACK_700};
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        font-size: ${theme.FONT_SIZE.xs}px;
        &:hover {
            transition: 0.2s;
            background-color: ${theme.COLORS.GREEN_600};
        }
    `}
    border-radius: 4px;
    font-weight: 600;
    text-transform: uppercase;
    width: 10rem;
    height: 44px;
    cursor: pointer;
    letter-spacing: 1px;
    box-shadow: 0 8px 24px 0 rgb(0 255 52 / 20%);
`