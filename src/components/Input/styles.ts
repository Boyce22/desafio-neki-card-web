import styled, { css } from "styled-components";
import * as Icon from "@phosphor-icons/react";

export const Container = styled.div`

`
export const Input = styled.input`
    ${({ theme }) => css`
        color: ${theme.COLORS.ZINC};
        font-size: ${theme.FONT_SIZE.md}px;

        &::placeholder {
            color: ${theme.COLORS.GRAY_200};
            font-size: ${theme.FONT_SIZE.sm}px;
        }
        &:focus::placeholder {
            opacity: 0; 
        }
    `}
    margin-left: 3rem;
    width: 100%;
    background: none;
    padding: 0.5rem;
    border-radius: 4px;
    transition: placeholder-opacity 0.3s ease;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    position: relative; 
    width: 29rem;
    height: 3.1rem;
    margin: 10px 0 10px 0;
    padding: 0.375rem;
    @media (max-width: 575px) {
        width: 16rem;
    }
    @media (max-width: 1180px) {
        width: auto;
    }
    @media (max-width: 370px) {
        width: 12rem;
    }
`

export const AtIcon = styled(Icon.At).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.GREEN_600,
}))`
    position: absolute;
    left: 10px;
    top: 50%; 
    transform: translateY(-50%); 
`;

export const KeyIcon = styled(Icon.Key).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.GREEN_600,
}))`
    position: absolute;
    left: 10px;
    top: 50%; 
    transform: translateY(-50%); 
`;

export const AtonIcon = styled(Icon.Atom).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.GREEN_600,
}))`
    position: absolute;
    left: 10px;
    top: 50%; 
    transform: translateY(-50%); 
`;

export const OpenEyeIcon = styled(Icon.Eye).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.GREEN_600,
}))`
    position: absolute;
    right: 10px;
    top: 50%; 
    transform: translateY(-50%); 
    cursor: pointer;
`;

export const CloseEyeIcon = styled(Icon.EyeClosed).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.GREEN_600,
}))`
    position: absolute;
    right: 10px;
    top: 50%; 
    transform: translateY(-50%); 
    cursor: pointer;
`;
