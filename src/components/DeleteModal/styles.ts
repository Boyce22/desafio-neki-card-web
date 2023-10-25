import styled, { css } from "styled-components";
import * as Icon from 'react-icons/io';

type VariantButtonProps = {
    variant: 'delete' | 'cancel'
}

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.BLACK_700};
    `}
    width: 22rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 338px) {
        width: 16rem;
    }
`

export const Title = styled.p`
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.l}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        text-align: ;
        @media (max-width: 338px) {
            width: 16rem;
            font-size: ${theme.FONT_SIZE.sm}px;
        }
    `}
`

export const SubTitle = styled.p`
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.xs}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO};
    `}
`

export const Button = styled.button<VariantButtonProps >`
    ${({ theme, variant }) => css`
        background-color: ${variant === 'delete' ? theme.COLORS.RED_500 : theme.COLORS.ZINC};
        color: ${theme.COLORS.BLACK_700};
        font-size: ${theme.FONT_SIZE.xs}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        cursor: pointer;
        &:hover{
            background-color: ${variant === 'delete' ? theme.COLORS.RED_600 : theme.COLORS.ZINC_GIT};
        }
    `}
    text-transform: uppercase;
    width: 6rem;
    height: 2.35rem;
    border-radius: 8px;
`;

export const ButtonWrapper = styled.div`
    gap: 1rem;
    display: flex;
    margin-top: 1rem;
`

export const WarningIcon = styled(Icon.IoIosCloseCircleOutline).attrs(({ theme }) => ({
    size: 60,
    color: theme.COLORS.RED_500,
}))``;

