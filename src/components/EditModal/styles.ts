import styled, { css } from "styled-components";
import * as Icon from "@phosphor-icons/react";

type VariantButton = {
    variant?: 'next' | 'prev'
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const Title = styled.p`
    ${({ theme }) => css`
        color: ${theme.COLORS.ZINC};
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        font-size: ${theme.FONT_SIZE.l}px;
        letter-spacing: 2px;
    `}
    margin-bottom: 1rem;
    margin-top: 1.3rem;
`

export const ContainerForm = styled.div`
    background-color: ${({ theme }) => theme.COLORS.GREEN_900};
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 50%;
    margin-top: 11rem;
    transform: translate(50%, -50%);
    width: auto;
    display: flex;
`;


export const UserPhoto = styled.img`
    width: 14rem;
    height: 14rem;
    margin: 1rem 0;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_700};
`;

export const InputPhoto = styled.input`
    color:  ${({ theme }) => theme.COLORS.WHITE};
    opacity: 0;
`;

export const LabelInputPhoto = styled.label`
    background-color: ${({ theme }) => theme.COLORS.GREEN_600};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.sm}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
    width: 10rem;
    height: 3rem;
    cursor: pointer;
    text-align: center;
    padding: 0.2rem;
    &:hover{
        background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    @media (max-width: 1180px) {
        width: 12rem;
    }
`

export const InputDivider =styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: row;
    @media (max-width: 480px) {
        flex-direction: inherit;
    }
`

export const ButtonNext = styled.button<VariantButton>`
    ${({ theme, variant }) => css`
        background-color: ${variant === 'next' ? theme.COLORS.GREEN_600 : theme.COLORS.NEUTRAL_700};
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.sm}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        width: 29rem;
        min-width: 10rem;
        height: 3.8rem;
        margin: 10px 0 10px 0;
        padding: 0.375rem;
        cursor: pointer;
        @media (max-width: 1210px) {
            width: auto;
        }
        &:disabled {
            background-color: ${theme.COLORS.GREEN_700};
            cursor: not-allowed;    
        }
        &:not(:disabled)hover{
            background-color: ${variant === 'next' ? theme.COLORS.GREEN_700 : theme.COLORS.NEUTRAL_900};
        }
    `}
`

export const CloseIcon = styled(Icon.XCircle).attrs(({ theme }) => ({
    size: 40,
    color: theme.COLORS.RED_600,
}))`
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 2rem;
    transform: translateY(-50%);
`; 